import { fetchLocalArticles, fetchLocalArticleBySlug } from './local-articles';

const API_URL = 'https://lovable-fireworks-b08e821c72.strapiapp.com';

// Fetch All Articles — local first, Strapi as fallback
export async function fetchArticles() {
  // Use local articles as primary source
  const localResult = await fetchLocalArticles();
  if (localResult?.data?.length > 0) {
    return localResult;
  }

  // Fallback to Strapi
  try {
    const response = await fetch(`${API_URL}/api/articles?populate=*&filters[Site][$eq]=Traning&pagination[pageSize]=100`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { data: [] };
  }
}

// Fetch article by slug — local first, Strapi as fallback
export async function fetchArticleBySlug(slug) {
  if (!slug) return null;

  // Try local first
  const localArticle = await fetchLocalArticleBySlug(slug);
  if (localArticle) return localArticle;

  // Fallback to Strapi
  try {
    let response = await fetch(`${API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*&sort=updatedAt:desc`, {
      next: { revalidate: 300 },
    });

    let result = await response.json();
    if (!result.data || result.data.length === 0) {
      const possibleId = parseInt(slug, 10);
      if (!isNaN(possibleId)) {
        response = await fetch(`${API_URL}/api/articles?filters[id][$eq]=${possibleId}&populate=*&sort=updatedAt:desc`, {
          cache: 'no-store',
          next: { revalidate: 300 },
        });
        if (response.ok) {
          result = await response.json();
          return result.data && result.data.length > 0 ? result.data[0] : null;
        }
      }
      return null;
    }
    return result.data[0];
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

// Fetch Author Info
export async function fetchAuthors() {
  try {
    const response = await fetch(`${API_URL}/api/authors?populate=*`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch authors: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching authors:', error);
    return { data: [] };
  }
}
