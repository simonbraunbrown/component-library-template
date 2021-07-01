/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CallToActionComponent {
        "backgroundImage": string;
        "mainHeadline": string;
    }
    interface ExampleComponent {
        "exampleProp": string;
    }
}
declare global {
    interface HTMLCallToActionComponentElement extends Components.CallToActionComponent, HTMLStencilElement {
    }
    var HTMLCallToActionComponentElement: {
        prototype: HTMLCallToActionComponentElement;
        new (): HTMLCallToActionComponentElement;
    };
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
    };
    interface HTMLElementTagNameMap {
        "call-to-action-component": HTMLCallToActionComponentElement;
        "example-component": HTMLExampleComponentElement;
    }
}
declare namespace LocalJSX {
    interface CallToActionComponent {
        "backgroundImage"?: string;
        "mainHeadline"?: string;
    }
    interface ExampleComponent {
        "exampleProp"?: string;
    }
    interface IntrinsicElements {
        "call-to-action-component": CallToActionComponent;
        "example-component": ExampleComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "call-to-action-component": LocalJSX.CallToActionComponent & JSXBase.HTMLAttributes<HTMLCallToActionComponentElement>;
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
        }
    }
}
