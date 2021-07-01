import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'call-to-action-component',
  parameters: {
    docs: { description: { component: readme } },
    jest: [
      'call-to-action-component.spec.tsx',
      'call-to-action-component.e2e.ts',
    ],
  },
  decorators: [jsxDecorator],
};

export const empty = (): string => `
  <call-to-action-component main-headline="CtA - main Conversion" background-image="https://simbr.xyz/images/dreams.jpg"></call-to-action-component>
`;
