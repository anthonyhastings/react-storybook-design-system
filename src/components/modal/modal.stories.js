import React from 'react';
import { SignUpModal } from './modal';

const SignUpModalTemplate = (props) => <SignUpModal {...props} />;

export const SignUpModalDefault = SignUpModalTemplate.bind({});
SignUpModalDefault.storyName = 'Sign Up';
SignUpModalDefault.args = {};

const signature = {
  args: {
    isShowing: true,
  },
  component: SignUpModal,
  title: 'Components/Modal',
};

export default signature;
