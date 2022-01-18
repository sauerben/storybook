import React, { FunctionComponent } from 'react';
import { H3 } from '@storybook/components';
import { HeaderMdx } from './mdx';
import { HeadingProps } from './Heading';

export const Subheading: FunctionComponent<HeadingProps> = ({ children, disableAnchor }) => {
  if (disableAnchor || typeof children !== 'string') {
    return React.createElement(H3, {}, children);
  }
  const tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, '-');
  return React.createElement(HeaderMdx, { as: 'h3', id: tagID }, children);
};
