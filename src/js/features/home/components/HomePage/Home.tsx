import * as React from 'react';
import { compose, withProps, ComponentEnhancer } from 'recompose';

export interface HomeProps {
  name: string;
  number: number;
};

export const HomePage = ({ name }: HomeProps) => (
  <div>Hello dog {name}</div>
);

export const homeWrapper1 = withProps({ name: 'dog'})
export const homeWrapper2 = withProps({ number: 2 })

export const Home =  homeWrapper2(homeWrapper1(HomePage));
