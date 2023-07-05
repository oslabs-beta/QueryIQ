import React from 'react';
import type { GraphCardProps } from '~/types/types';

const GraphCard: React.FC<GraphCardProps> = ({ src, key }) => {
  return (
    <div
      key={key}
      className="h-78 w-78 mx-3 my-5 rounded-md bg-slate-900 shadow ring ring-1 ring-slate-600"
    >
      <iframe src={src} width="480" height="220" frameborder="0"></iframe>
    </div>
  );
};

export default GraphCard;
