const store = require("../RTKDemo/app/store");
const cakeActions = require("../RTKDemo/features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("../RTKDemo/features/icecream/icecreamSlice").icecreamActions;

console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(2));
unsubscribe();
