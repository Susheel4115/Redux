let initialState = {
  loading: false,
  item: [],
  cart: [],
  total: 0,
  error: null
};

function reducer(state = initialState, action) {
  var foundIndex = 0;
  var foundIndexCart = 0;
  var { item, cart, total } = state;
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        item: action.item
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: []
      };
    case "ADD_TO_CART":
      foundIndex = item.findIndex(x => x.itemname === action.itemToBeAdded);
      item[foundIndex]["cartCount"] = 1;
      cart.push(item[foundIndex]);
      total = total + item[foundIndex]["price"];
      return {
        ...state,
        item,
        cart,
        total
      };
    case "ADD":
      foundIndex = item.findIndex(x => x.itemname === action.itemInc);
      item[foundIndex]["cartCount"] = item[foundIndex]["cartCount"] + 1;
      foundIndexCart = cart.findIndex(x => x.itemname === action.itemInc);
      cart[foundIndexCart]["cartCount"] = item[foundIndex]["cartCount"];
      total = total + item[foundIndex]["price"];
      return {
        ...state,
        item,
        cart,
        total
      };
    case "SUBTRACT":
      foundIndex = item.findIndex(x => x.itemname === action.itemDec);
      item[foundIndex]["cartCount"] = item[foundIndex]["cartCount"] - 1;
      if (item[foundIndex]["cartCount"] === 0) {
        cart = cart.filter(function(obj) {
          return obj.itemname !== item[foundIndex].itemname;
        });
        delete item[foundIndex]["cartCount"];
      } else {
        foundIndexCart = cart.findIndex(x => x.itemname === action.itemDec);
        cart[foundIndexCart]["cartCount"] = item[foundIndex]["cartCount"];
      }
      total = total - item[foundIndex]["price"];
      return {
        ...state,
        item,
        cart,
        total
      };
    case "REMOVE_ITEM_FROM_CART":
      foundIndex = item.findIndex(x => x.itemname === action.itemToRemove);

      cart = cart.filter(function(obj) {
        return obj.itemname !== item[foundIndex].itemname;
      });
      delete item[foundIndex]["cartCount"];
      total = total - action.amount;

      return {
        ...state,
        item,
        cart,
        total
      };
    default:
      return state;
  }
}

export default reducer;
