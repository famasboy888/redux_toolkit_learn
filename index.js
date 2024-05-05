const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamAction =
  require("./features/icecream/iceCreamSlice").iceCreamAction;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.restocked(9));

// store.dispatch(iceCreamAction.ordered(5));
// store.dispatch(iceCreamAction.restocked(30));

// unsubscribe();
