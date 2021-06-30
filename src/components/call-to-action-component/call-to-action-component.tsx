import {
  Component, h, Prop,
} from '@stencil/core';

@Component({
  tag: 'call-to-action-component',
  styleUrl: 'call-to-action-component.scss',
  shadow: true,
})
export class CallToActionComponent {
  @Prop() test: string;

  render() {
    return (
      <div>hallo {this.test}</div>
    );
  }
}
