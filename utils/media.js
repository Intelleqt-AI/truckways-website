export function getMediaUrl(media) {
  if (!media || !media.data) return null;

  const { url } = media.data.attributes;
  return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
}

// components/blocks/RichText.js
import React from 'react';

export function RichText({ content }) {
  return <div className={styles.richText} dangerouslySetInnerHTML={{ __html: content }} />;
}
