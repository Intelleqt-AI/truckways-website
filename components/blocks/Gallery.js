import React from 'react';
import Image from 'next/image';
import { getMediaUrl } from '../../utils/media';

export function Gallery({ images }) {
  if (!images || !images.data || images.data.length === 0) return null;

  return (
    <div className={styles.gallery}>
      {images.data.map((imageItem, index) => {
        const image = imageItem.attributes;
        const imageUrl = getMediaUrl({ data: imageItem });

        return (
          <div key={index} className={styles.galleryItem}>
            <Image
              src={imageUrl}
              alt={image.alternativeText || ''}
              width={image.width || 400}
              height={image.height || 300}
              objectFit="cover"
            />
            {image.caption && <p className={styles.galleryCaption}>{image.caption}</p>}
          </div>
        );
      })}
    </div>
  );
}
