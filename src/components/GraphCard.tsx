import React from 'react';
import type { GraphCardProps } from '~/types/types';

const GraphCard: React.FC<GraphCardProps> = ({ src, key }) => {
  return (
    <div
      key={key}
      className="h-78 w-78 my-5 mx-3 rounded-lg border border-gray-900  bg-red-100 shadow"
    >
      <iframe src={src} width="480" height="220" frameborder="0"></iframe>
    </div>
  );
};

export default GraphCard;
