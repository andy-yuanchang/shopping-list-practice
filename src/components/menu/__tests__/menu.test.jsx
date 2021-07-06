import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Menu from '../Menu';

afterEach(cleanup);
const mockStore = configureMockStore();

function TestMenu({ store }) {
  return (
    <Provider store={store}>
      <Menu />
    </Provider>
  );
}

describe('Menu', () => {
  it('default view', () => {
    const store = mockStore({
      order: {
        list: [{
          itemList: [{
            storeName: 'kebuke',
            name: 'bubble tea',
            count: '5',
          }],
        }, {
          itemList: [{
            storeName: 'i lan',
            name: 'rumen',
            count: '2',
          }],
        }, {
          itemList: [{
            storeName: '7-11',
            name: 'coke',
            count: '15',
          }],
        }, {
          itemList: [{
            storeName: 'family mart',
            name: 'beer',
            count: '24',
          }],
        }],
      },
    });
    const menu = TestRenderer.create(
      <TestMenu store={store} />,
    );
    expect(menu.toJSON()).toMatchSnapshot();
  });

  it('empty view', () => {
    const store = mockStore({ order: { list: [] } });
    const menu = TestRenderer.create(
      <TestMenu store={store} />,
    );
    expect(menu.toJSON()).toMatchSnapshot();
  });
});
