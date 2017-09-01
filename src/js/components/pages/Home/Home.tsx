import * as React from 'react';
import { compose, withProps, ComponentEnhancer } from 'recompose';

// TODO Why doesn't this break? Assigning a number to a string field
export const homeWrapper = compose(
  withProps({ name: 'STRING' })
);

export interface HomeProps {
  name: string;
};

export const HomeComponent: React.StatelessComponent<HomeProps> = (props: HomeProps) => (
  <div>Hello dog</div>
);

export const Home = homeWrapper(HomeComponent);
