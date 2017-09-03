import * as React from 'react';
import { compose, withProps, ComponentEnhancer } from 'recompose';

export interface HomeProps {
  name: string;
  number: number;
};

interface WithName {
  name: string
}

interface WithNumber {
  number: number
}

// TODO Why doesn't this break? Assigning a number to a string field
export const homeWrapper1 = withProps({ name: 'dog'})
export const homeWrapper2 = withProps({ number: 2 })

export const HomePage = ({ name }: HomeProps) => (
  <div>Hello dog {name}</div>
);

export const Home =  homeWrapper2(homeWrapper1(HomePage));
