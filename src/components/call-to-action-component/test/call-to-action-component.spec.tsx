import { newSpecPage } from '@stencil/core/testing';
import { CallToActionComponent } from '../call-to-action-component';

describe('call-to-action-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CallToActionComponent],
      html: '<call-to-action-component></call-to-action-component>',
    });
    expect(page.root).toEqualHtml(`
      <call-to-action-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </call-to-action-component>
    `);
  });
});
