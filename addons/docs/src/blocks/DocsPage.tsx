import React, { FC } from 'react';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Description } from './Description';
import { Primary } from './Primary';
import { PRIMARY_STORY } from './types';
import { ArgsTable } from './ArgsTable';
import { Stories } from './Stories';

export const DocsPage: FC = () => (
  <>
    {React.createElement(Title, {})}
    {React.createElement(Subtitle, {})}
    {React.createElement(Description, {})}
    {React.createElement(Primary, {})}
    {React.createElement(ArgsTable, { story: PRIMARY_STORY })}
    {React.createElement(Stories, {})}
  </>
);
