import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AbButton } from '../src';



const button: ComponentMeta<typeof AbButton> = {
  title: 'Components/AbButton',
  component: AbButton
}

export default button;

export const Template: ComponentStory<typeof AbButton> = () => <AbButton />;

export const Primary = Template.bind({});

