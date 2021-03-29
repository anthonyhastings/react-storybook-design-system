import React from 'react';
import {
  IconButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './button';
import { IconFavourite } from '../icons';

const PrimaryButtonTemplate = (props) => <PrimaryButton {...props} />;
const SecondaryButtonTemplate = (props) => <SecondaryButton {...props} />;
const TertiaryButtonTemplate = (props) => <TertiaryButton {...props} />;
const IconButtonTemplate = (props) => <IconButton {...props} />;

export const PrimaryButtonDefault = PrimaryButtonTemplate.bind({});
PrimaryButtonDefault.storyName = 'Primary';
PrimaryButtonDefault.args = {
  children: 'Primary Button',
};

export const SecondaryButtonDefault = SecondaryButtonTemplate.bind({});
SecondaryButtonDefault.storyName = 'Secondary';
SecondaryButtonDefault.args = {
  children: 'Secondary Button',
};

export const TertiaryButtonDefault = TertiaryButtonTemplate.bind({});
TertiaryButtonDefault.storyName = 'Tertiary';
TertiaryButtonDefault.args = {
  children: 'Tertiary Button',
};

export const IconButtonDefault = IconButtonTemplate.bind({});
IconButtonDefault.storyName = 'Icon';
IconButtonDefault.args = {
  children: <IconFavourite />,
};

export const WarningButtonDefault = PrimaryButtonTemplate.bind({});
WarningButtonDefault.storyName = 'Warning';
WarningButtonDefault.args = {
  children: 'Warning Button',
  modifiers: ['warning'],
};

export const ErrorButtonDefault = PrimaryButtonTemplate.bind({});
ErrorButtonDefault.storyName = 'Error';
ErrorButtonDefault.args = {
  children: 'Error Button',
  modifiers: ['error'],
};

export const SuccessButtonDefault = PrimaryButtonTemplate.bind({});
SuccessButtonDefault.storyName = 'Success';
SuccessButtonDefault.args = {
  children: 'Success Button',
  modifiers: ['success'],
};

const signature = {
  component: PrimaryButton,
  title: 'Components/Button',
};

export default signature;
