import type { Meta, StoryObj } from '@storybook/angular';
import { LibUiComponent } from './lib-ui.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LibUiComponent> = {
  component: LibUiComponent,
  title: 'LibUiComponent'
};
export default meta;
type Story = StoryObj<LibUiComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/lib-ui works!/gi)).toBeTruthy();
  }
};
