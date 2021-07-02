import React from 'react'
import ReactDOM from 'react-dom'
import { act } from "react-dom/test-utils"
import { render, cleanup } from '@testing-library/react'
import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import ShoppingCart from '../ShoppingCart'

afterEach(cleanup);
const mockStore = configureMockStore()

function TestShoppingCart({ store }) {
  return (
    <Provider store={store}>
      <ShoppingCart 
        onClose={() => {
          
        }}
      />
    </Provider>
  )
}

describe('OrderedList', () => {
  it('default view', () => {
    const store = mockStore({
      shoppingCart: {
        list: [{
          storeName: 'kebuke',
          name: 'bubble tea',
          count: '5'
        }, {
          storeName: 'i lan',
          name: 'rumen',
          count: '2'
        }, {
          storeName: '7-11',
          name: 'coke',
          count: '15'
        }, {
          storeName: 'family mart',
          name: 'beer',
          count: '24'
        }]
      }
    })
    const shoppingCart = TestRenderer.create(
      <TestShoppingCart store={store} />
    )
    expect(shoppingCart.toJSON()).toMatchSnapshot()
  })

  it('empty view', () => {
    const store = mockStore({ shoppingCart: { list: [] } })
    const shoppingCart = TestRenderer.create(
      <TestShoppingCart store={store} />
    )
    expect(shoppingCart.toJSON()).toMatchSnapshot()
  })
})