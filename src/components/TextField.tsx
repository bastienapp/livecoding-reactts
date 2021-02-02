import React, { ReactElement } from 'react';

type Props = {
  text: string;
  maxSize?: number;
};

function TextField({ text, maxSize = 20 }: Props): ReactElement {
  return (
    <div>
      <span>{text.substring(0, maxSize)}</span>
    </div>
  );
}

export default TextField;
