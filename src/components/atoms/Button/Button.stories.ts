// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';
import { storiesOf } from '@storybook/angular';
import { boolean, number, text, withKnobs, object, button} from '@storybook/addon-knobs';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [withKnobs],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const label = 'Do Something';

const Template: Story<Button> = (args: Button) => ({
  component: Button,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  mode: 'primary',
  // primary: 'storybook-button--primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  mode: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const irenebutton = Template.bind({});
irenebutton.args = {
  label: 'ireneButton',
  mode: 'irenebutton',
  // irenebutton: 'storybook-button--irenebutton',
  size: 'small',
  backgroundColor: 'purple',
  color: 'white'
};

export const Default = () => ({
  component: Button,
  props: {
    button: label,
  },
});

// export const withKnobs = () => ({
//   component: Button,
//   props: {
//     // text: text('text', 'Hello Storybook'), // The first param of the knob function has to be exactly the same as the component input.
//   },
// });
