import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Item from './index';

export default {
  title: 'Menu Item',
  component: Item
} as ComponentMeta<typeof Item>

export const Moon: ComponentStory<typeof Item> = () => (
  <Router>
    <Item link="moon" active='/moon'>Moon</Item>
  </Router>
);