import React from 'react';
import Image from 'next/image';
import { getMediaUrl } from '../../utils/media';

export function ImageBlock({ image }) {
  const imageUrl = getMediaUrl(image);

  if (!imageUrl) return null;

  return (
    <figure className={styles.imageBlock}>
      <div className="">
        <Image
          className="mb-10 mx-auto"
          src={imageUrl}
          alt={image.data?.attributes?.alternativeText || ''}
          width={image.data?.attributes?.width || 800}
          height={image.data?.attributes?.height || 500}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      {image.data?.attributes?.caption && <figcaption className={styles.caption}>{image.data.attributes.caption}</figcaption>}
    </figure>
  );
}
