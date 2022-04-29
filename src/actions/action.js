import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  ADD,
  ADD_TO_CART,
  SUBTRACT,
  REMOVE_ITEM_FROM_CART
} from "./actionType";

export function fetchDataRequest() {
  return {
    type: FETCH_DATA_REQUEST
  };
}

export function fetchDataSuccess(item) {
  return {
    type: FETCH_DATA_SUCCESS,
    item
  };
}

export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    payload: { error }
  };
}

export function addToCart(itemname) {
  return {
    type: ADD_TO_CART,
    itemToBeAdded: itemname
  };
}

export function add(itemname) {
  return {
    type: ADD,
    itemInc: itemname
  };
}

export function subtract(itemname) {
  return {
    type: SUBTRACT,
    itemDec: itemname
  };
}

export function removeItemFromCart(itemname, amount) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    itemToRemove: itemname,
    amount: amount
  };
}
