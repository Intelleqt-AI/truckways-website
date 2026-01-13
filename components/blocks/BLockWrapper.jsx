import React from 'react';
import { BlockRenderer } from '../shared/BlockRenderer';

const BLockWrapper = ({ article }) => {
  return (
    <>
      {article?.blocks?.map((block, index) => (
        <BlockRenderer key={index} block={block} />
      ))}
    </>
  );
};

export default BLockWrapper;
