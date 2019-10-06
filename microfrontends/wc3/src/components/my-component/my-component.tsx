import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'wc-three',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <p class="wc-three">Web component 3. With Stencil 0.15.1. getText() is: {this.getText()}</p>;
  }
}
