import React from 'react';

import ReactClock from './Clock';

export default {
  title: 'Example/Clock',
  component: ReactClock,
};

const Template = (args) => <ReactClock {...args} />;

export const StyledClock = Template.bind({});
// StyledClock.args = {
// };