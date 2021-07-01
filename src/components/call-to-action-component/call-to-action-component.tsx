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

  @State() open: boolean;

  @Listen('click', { capture: true })
  toggleDropout() {
    this.open = !this.open;
  }

  render(): JSX.Element {
    const contentHeadline = 'A wonderful serenity has taken possession';
    const contentText = 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.';

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
              <h2 class="textContainer-headline">{contentHeadline}</h2>
              <p class="textContainer-text">{contentText}</p>
              <button class="textContainer-button" onClick={this.toggleDropout}>
                <a>Link button</a>
              </button>
            </div>
          </div>
        </div>
        <div class={this.open ? 'dropout dropout_open' : 'dropout'}>
          <h2 class="dropout-headline">Contact us</h2>
          <slot name="dropoutContent"></slot>
        </div>
      </div>
    );
  }
}
