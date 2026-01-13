import React from 'react';
import Image from 'next/image';
import { getMediaUrl } from '../../utils/media';

export function Testimonial({ quote, author, role, avatar }) {
  const avatarUrl = avatar ? getMediaUrl(avatar) : null;

  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialContent}>
        <p className={styles.testimonialQuote}>{quote}</p>
        <div className={styles.testimonialAuthor}>
          {avatarUrl && (
            <div className={styles.testimonialAvatar}>
              <Image src={avatarUrl} alt={author} width={50} height={50} objectFit="cover" />
            </div>
          )}
          <div>
            <p className={styles.testimonialName}>{author}</p>
            {role && <p className={styles.testimonialRole}>{role}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
