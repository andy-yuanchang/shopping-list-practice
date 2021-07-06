import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';

import Button from '../Button';

afterEach(cleanup);

describe('Button', () => {
  it('order text small size', () => {
    const button = TestRenderer.create(
      <Button
        text="order"
        onClick={() => {}}
        size="small"
      />,
    );
    expect(button.toJSON()).toMatchSnapshot();
  });

  it('order text medium size', () => {
    const button = TestRenderer.create(
      <Button
        text="order"
        onClick={() => {}}
        size="medium"
      />,
    );
    expect(button.toJSON()).toMatchSnapshot();
  });

  it('order text large size', () => {
    const button = TestRenderer.create(
      <Button
        text="order"
        onClick={() => {}}
        size="large"
      />,
    );
    expect(button.toJSON()).toMatchSnapshot();
  });
});
