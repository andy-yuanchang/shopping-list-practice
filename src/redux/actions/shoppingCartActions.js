export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CLEAR_ALL_ITEMS = 'CLEAR_ALL_ITEMS';

/**
 *
 * @param {object} item
 * {
 *  name: @param {string}
 *  count: @param {number}
 * }
 * @returns {object}
 */
export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item,
  };
}
/**
 *
 * @param {object} item
 * {
 *  name: @param {string}
 *  count: @param {number}
 * }
 * @returns {object}
 */
export function deleteItem(item) {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
}

export function clearAllItems() {
  return {
    type: CLEAR_ALL_ITEMS,
  };
}
