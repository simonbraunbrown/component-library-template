import { newE2EPage } from '@stencil/core/testing';

describe('call-to-action-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<call-to-action-component></call-to-action-component>');

    const element = await page.find('call-to-action-component');
    expect(element).toHaveClass('hydrated');
  });
});
