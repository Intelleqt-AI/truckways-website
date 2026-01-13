'use client';
import React from 'react';

const TwitterBtn = () => {
  const getCurrentUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return '';
  };

  const shareToTwitter = () => {
    const url = getCurrentUrl();
    const text = 'Check out this page!';
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <button
      onClick={shareToTwitter}
      className="w-[40px] cursor-pointer flex items-center justify-center  h-[40px] rounded-[8px] bg-[#F4F5F6]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z"
          fill="#000"
        />
      </svg>
    </button>
  );
};

export default TwitterBtn;
