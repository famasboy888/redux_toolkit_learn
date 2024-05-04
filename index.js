const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamAction =
  require("./features/icecream/iceCreamSlice").iceCreamAction;

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(cakeActions.ordered(2));
store.dispatch(cakeActions.restocked(9));

store.dispatch(iceCreamAction.ordered(5));
store.dispatch(iceCreamAction.restocked(30));

unsubscribe();
