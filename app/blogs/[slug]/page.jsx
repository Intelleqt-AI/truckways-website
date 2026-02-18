import FacebookBtn from '@/components/FacebookBtn';
import LinkedinBtn from '@/components/LinkedinBtn';
import TwitterBtn from '@/components/TwitterBtn';
import { fetchArticleBySlug, fetchAuthors } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

export async function generateMetadata({ params }) {
  const article = await fetchArticleBySlug(params.slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${article.title} | TruckWys Blog`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://truckwys.com/blogs/${article.slug || params.slug}`,
      siteName: 'TruckWys',
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article?.author?.name || 'TruckWys Team'],
      images: article?.cover?.url ? [{ url: article.cover.url.startsWith('http') ? article.cover.url : `https://truckwys.com${article.cover.url}` }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  };
}

function ArticleStructuredData({ article, slug }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: article?.author?.name || 'TruckWys Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TruckWys',
      url: 'https://truckwys.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://truckwys.com/blogs/${slug}`,
    },
    image: article?.cover?.url ? (article.cover.url.startsWith('http') ? article.cover.url : `https://truckwys.com${article.cover.url}`) : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default async function Page({ params }) {
  const article = await fetchArticleBySlug(params.slug);
  if (!article) {
    notFound();
  }

  const isLocalArticle = !!article.content;

  let authorsPhoto = null;
  if (!isLocalArticle) {
    try {
      const authors = await fetchAuthors();
      authorsPhoto = authors?.data?.find(item => item.email == article?.author?.email)?.avatar?.url;
    } catch (e) {}
  }

  return (
    <div>
      <ArticleStructuredData article={article} slug={params.slug} />
      <header className="pt-[137px] bg-linear-to-b from-blue-100 via-blue-50 relative md:pt-[178px] pb-[50px] lg:pb-[153px] px-5 md:px-[60px]">
        <div className="text-xs lg:text-sm mb-6 lg:mb-[80px] text-black font-normal flex items-center gap-2">
          <Link href={'/blogs'}>Blogs</Link>
          {article?.title && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="#000" strokeWidth="1.5" />
            </svg>
          )}
          {article?.title && <span className="inline-block bg-[#0000001a] py-1 px-[10px] rounded-[8px] line-clamp-1 max-w-[300px]">{article.title}</span>}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="w-full relative z-10 mx-auto text-left">
            <h1 className="font-medium tracking-[-4%] leading-[120%] text-[36px] lg:text-[60px] text-[#000]">{article.title}</h1>
            <div className="block mt-10 lg:hidden max-w-[600px] max-h-[400px] rounded-2xl overflow-hidden w-full">
              {article?.cover?.url && (
                article.cover.url.endsWith('.svg') ? (
                  <img className="w-full h-full object-cover" alt={article.title} src={article.cover.url} />
                ) : (
                  <Image className="w-full h-full object-cover" height={400} width={600} alt={article.title} src={article.cover.url} />
                )
              )}
            </div>
            <p className="text-black mx-auto mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-full font-normal text-sm md:text-lg">
              {article.description}
            </p>
            <span className="text-black font-normal flex items-center gap-2 text-sm flex-wrap">
              {article?.author?.name} <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>{article.readingTime || '3 min'} reading time</span>
            </span>
          </div>
          <div className="hidden lg:block max-w-[600px] max-h-[400px] rounded-2xl overflow-hidden w-full">
            {article?.cover?.url && (
              article.cover.url.endsWith('.svg') ? (
                <img className="w-full h-full object-cover" alt={article.title} src={article.cover.url} />
              ) : (
                <Image className="w-full h-full object-cover" height={400} width={600} alt={article.title} src={article.cover.url} />
              )
            )}
          </div>
        </div>
      </header>

      <section className="pb-16 bg-white px-5 md:pb-[80px] md:px-[140px]">
        <div className="flex pt-[80px] border-[#D1D1D6] flex-col md:flex-row mb-[68px] gap-6 md:items-center justify-between">
          <div className="flex items-center gap-5">
            <p>Share </p>
            <ul className="flex items-center gap-2">
              <li><LinkedinBtn /></li>
              <li><TwitterBtn /></li>
              <li><FacebookBtn /></li>
            </ul>
          </div>
        </div>
        <article className="md:text-lg text-base leading-[150%] prose prose-lg max-w-none">
          {isLocalArticle ? (
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          ) : (
            <>
              <h2 className="md:text-[40px] text-4xl font-medium md:font-semibold mb-5 md:mb-8">{article.title}</h2>
              <p>{article.description}</p>
              {/* Strapi blocks would render here via BLockWrapper */}
            </>
          )}

          <div className="flex pb-12 border-b-[0.5px] border-secondary mb-12 items-center flex-col mt-16">
            <p className="font-semibold text-lg mb-4">Share this post</p>
            <ul className="flex mb-12 items-center gap-2">
              <li><LinkedinBtn /></li>
              <li><TwitterBtn /></li>
              <li><FacebookBtn /></li>
            </ul>
            <ul className="text-secondary flex items-center gap-2 text-sm font-normal flex-wrap">
              {article?.tags?.map(item => (
                <li key={item.id} className="px-3 py-1 bg-[#F3F1FF] rounded-xl">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center flex-col">
            {authorsPhoto ? (
              <div className="w-12 h-12 bg-gray-300 rounded-full mb-4 overflow-hidden">
                <Image width={100} height={100} alt="author" className="w-full h-full object-cover" src={authorsPhoto} />
              </div>
            ) : (
              <div className="w-12 flex items-center justify-center font-bold text-2xl text-gray-600 h-12 bg-gray-300 rounded-full mb-4 overflow-hidden">
                <p>{article?.author?.name?.[0] || 'T'}</p>
              </div>
            )}
            <p className="text-sm font-semibold">{article?.author?.name || 'TruckWys Team'}</p>
            <p className="text-sm">{article?.author?.job_title}</p>
          </div>
        </article>
      </section>
    </div>
  );
}
