import { createComponentFactory, Spectator } from '@ngneat/spectator';
import * as chai from 'chai';

import { ButtonComponent } from './button.component';

const expect = chai.expect;

describe('ButtonComponent', () => {
  let spectator: Spectator<ButtonComponent>;
  const createComponent = createComponentFactory(ButtonComponent);

  beforeEach(() => spectator = createComponent());

  it('should have a success class by default', () => {
    // expect(spectator.query('button')).toHaveClass('success');
    const button = spectator.query('button') as Element;
    const buttonClasses = Array.from(button.classList);
    expect(buttonClasses).to.contain('success');
  });

  it('should set the class name according to the [className] input', () => {
    spectator.setInput('className', 'danger');

    // expect(spectator.query('button')).toHaveClass('danger');
    // expect(spectator.query('button')).not.toHaveClass('success');
    const button = spectator.query('button') as Element;
    const buttonClasses = Array.from(button.classList);
    expect(buttonClasses).to.contain('danger');
    expect(buttonClasses).not.to.contain('success');
  });
});
