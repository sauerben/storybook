import React, { FunctionComponent } from 'react';
import { H2 } from '@storybook/components';
import { HeaderMdx } from './mdx';

export interface HeadingProps {
  disableAnchor?: boolean;
}

export const Heading: FunctionComponent<HeadingProps> = ({ children, disableAnchor }) => {
  if (disableAnchor || typeof children !== 'string') {
    return React.createElement(H2, {}, children);
  }
  const tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, '-');
  return React.createElement(HeaderMdx, { as: 'h2', id: tagID }, children);
};
