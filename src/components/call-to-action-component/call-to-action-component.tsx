import {
  Component, h, Prop,
} from '@stencil/core';

@Component({
  tag: 'call-to-action-component',
  styleUrl: 'call-to-action-component.scss',
  shadow: true,
})
export class CallToActionComponent {
  @Prop() mainClassName: string;

  render(): JSX.Element {
    const mainHeadline = 'CtA - main Conversion';
    const contentHeadline = 'A wonderful serenity has taken possession';
    const contentText = 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.';

    return (
      <div class={this.mainClassName}>
        <h1 class="headline">{mainHeadline}</h1>
        <div class="content">
          <div class="textContainer">
            <h2 class="textContainer-headline">{contentHeadline}</h2>
            <p class="textContainer-text">{contentText}</p>
            <button class="textContainer-button">
              <a>link button</a>
            </button>
          </div>
          <div class="imageContainer">
            <img src="https://simbr.xyz/images/dreams.jpg" alt="" />
          </div>
          <div class="dropout">
            <h2 class="dropout-headline"></h2>
            <ul class="dropout-content">
              <li class="dropout-content-element">A wonderful serenity</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
