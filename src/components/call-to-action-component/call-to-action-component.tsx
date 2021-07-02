import {
  Component, h, Prop, State, Listen,
} from '@stencil/core';

@Component({
  tag: 'call-to-action-component',
  styleUrl: 'call-to-action-component.scss',
  shadow: true,
})
export class CallToActionComponent {
  @Prop() mainHeadline: string;

  @Prop() backgroundImage: string;

  @Prop() buttonText = 'click me';

  @State() open: boolean;

  @Listen('click', { capture: true })
  toggleDropout() {
    this.open = !this.open;
  }

  render(): JSX.Element {
    return (
      <div>
        <h1 class="headline">{this.mainHeadline}</h1>
        <div class="content">
          <div
            class="imageContainer"
            style={{ backgroundImage: `url(${this.backgroundImage})` }}
          ></div>
          <div class="textContainer">
            <div class="textContainer-wrapper">
              <h2 class="textContainer-headline"><slot name="textHeadline"/></h2>
              <p class="textContainer-text"><slot name="text"/></p>
              <button class="textContainer-button" onClick={this.toggleDropout}>
                <a>{this.buttonText}</a>
              </button>
            </div>
          </div>
        </div>
        <div class={this.open ? 'dropout dropout_open' : 'dropout'}>
          <button class="dropout-closeButton" onClick={this.toggleDropout}></button>
          <h2 class="dropout-headline"><slot name="dropoutHeadline"/></h2>
          <slot name="dropoutContent"></slot>
        </div>
      </div>
    );
  }
}
