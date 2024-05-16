# 1. Redux

Predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test.

Mostly used as a state management tool with React, it can also be used with other frameworks or libraries.
[Code example](code/learn-redux)


## 1.1. What problem does it solve ?

React for example only flows in one direction, so if you want to pass data(props) from one component between multiple components, you can only pass it to one. You can solve it by `moving up the state` in React components. But it can get very complex which at some point it will be very hard to justify moving up the state to a higher component.

Redux solves it by storing data separately, which can be accessed from each component independently

## 1.2. Setup

`npm install redux react-redux`

## 1.3. STORE

Holds all the information, like a global pool of data

## 1.4. Example

```javascript
import { createStore } from "redux";

//STORE -> GLOBALIZED STATE

//ACTION INCREMENT
const increment = () => {
    return {
        type: "INCREMENT",
    };
};
const decrement = () => {
    return {
        type: "DECREMENT",
    };
};
//REDUCER -> CHECKS WHICH ACTION WAS USED, TO KNOW HOW TO MODIFY THE STORE
const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
};
let store = createStore(counter);
//Display in the console
store.subscribe(() => console.log(store.getState()));

//DISPATCH -> WAY OF EXECUTING THE ACTION
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
```

## 1.5. Actions

Events which send data from your application to your redux store.

Actions are sent using `store.dispatch()` method. Actions are plain JSON, and they must have a `type` property to indicate the type of action to be carried out. They must also have a `payload` that contains the information that should be worked on by the action.

Here is an example of Action creator

```js
const setLoginStatus = (name, password) => {
    return {
        type: "LOGIN",
        payload: {
            username: "foo",
            password: "bar",
        },
    };
};
```

## 1.6. Reducers

Pure functions that take the current state of an application, perform an action and return a new state. Those states are stored as objects, and they specify how the state of an application changes in response to an action sent to the store.

```js
const LoginComponent = (state = initialState, action) => {
    switch (action.type) {
        // This reducer handles any action with type "LOGIN"
        case "LOGIN":
            return state.map((user) => {
                if (user.username !== action.username) {
                    return user;
                }

                if (user.password == action.password) {
                    return {
                        ...user,
                        login_status: "LOGGED IN",
                    };
                }
            });
        default:
            return state;
    }
};
```

> Reducers take the previous state of the app and return a new state based on the action passed to it.

> As pure functions they don't change the data in the object passed to them or preform any side effects in the application. Given the same objects, they should always produce the same result

## 1.7. Store

Holds the application state. There is only one store in any Redux application. You can access the state stored, update the state, and register or unregister listeners via helper methods

Creating store

```js
import { createStore } from "redux";

const store = createStore(LoginComponent);
```

## 1.8. Why use Redux?

-   no need for states to e lifted up
-   easier to trace which action causes any change
-   simplifies the app
-   easier to maintain
-   state is predictable
    -   if the same state and action is passed into reducer it will always produce the same result
    -   state is immutable and is never changed
        -   can do infinite undo or redo, also possible to do time travel
-   Debugging is easy in Redux
-   Easy to test
    -   since it's using pure functions

## 1.9. Thunk Explained

Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux.

> Use case: This middleware can handle actions that might not be synchronous, for example, using axios to send a GET request. Redux Thunk allows us to dispatch those actions asynchronously and resolve each promise that gets returned.

### 1.9.1. Installation

-   `npm install redux-thunk --save`

It will also need to be set up

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk));
```

### 1.9.2. How to use

After including Thunk with `applyMiddleware(thunk)`, you can start dispatching actions asynchronously.

> Simple increment counter

```js
const INCREMENT_COUNTER = "INCREMENT_COUNTER";

function increment() {
    return {
        type: INCREMENT_COUNTER,
    };
}

function incrementAsync() {
    return (dispatch) => {
        setTimeout(() => {
            // You can invoke sync or async actions with `dispatch`
            dispatch(increment());
        }, 1000);
    };
}
```

You can also set up success and failure actions after polling and API

```js
const GET_CURRENT_USER = "GET_CURRENT_USER";
const GET_CURRENT_USER_SUCCESS = "GET_CURRENT_USER_SUCCESS";
const GET_CURRENT_USER_FAILURE = "GET_CURRENT_USER_FAILURE";

const getUser = () => {
    return (dispatch) => {
        //nameless functions
        // Initial action dispatched
        dispatch({ type: GET_CURRENT_USER });
        // Return promise with success and failure actions
        return axios.get("/api/auth/user").then(
            (user) => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }),
            (err) => dispatch({ type: GET_CURRENT_USER_FAILURE, err }),
        );
    };
};
```

# 2. Redux Toolkit

Redux Toolkit package is intended to be the standard way to write Redux logic

## 2.1. What's included

Redux Toolkit includes these API's:

-   [`configureStore()`](https://redux-toolkit.js.org/api/configureStore): wraps `createStore` to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes `redux-thunk` by default, and enables use of the Redux DevTools Extension.
-   [`createReducer()`](https://redux-toolkit.js.org/api/createReducer): that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the **immer library** to let you write simpler immutable updates with normal mutative code, like `state.todos[3].completed = true`.
-   [`createAction()`](https://redux-toolkit.js.org/api/createAction): generates an action creator function for the given action type string. The function itself has `toString()` defined, so that it can be used in place of the type constant.
-   [`createSlice()`](https://redux-toolkit.js.org/api/createSlice): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
-   [`createAsyncThunk`](https://redux-toolkit.js.org/api/createAsyncThunk): accepts an action type string and a function that returns a promise, and generates a thunk that dispatches `pending/fulfilled/rejected` action types based on that promise
-   [`createEntityAdapter`](https://redux-toolkit.js.org/api/createEntityAdapter): generates a set of reusable reducers and selectors to manage normalized data in the store
-   The [`createSelector`](https://redux-toolkit.js.org/api/createSelector) **utility** from the **Reselect** library, re-exported for ease of use

## 2.2. Installation

### 2.2.1. With Create React App

```bash
npx create-react-app my-app --template redux
```

### 2.2.2. Existing App

```bash
npm install @reduxjs/toolkit
```

## 2.3. Basic Tutorial: Counter Application

[Code Example](code/basic-counter-app)

## 2.4. Library

### 2.4.1. `configureStore`

Can be used in place of `createStore`
Accepts a single configuration object parameter, with the following options:

```js
type ConfigureEnhancersCallback = (
    defaultEnhancers: StoreEnhancer[]
) => StoreEnhancer[]

interface ConfigureStoreOptions<
    S = any,
    A extends Action = AnyAction,
    M extends Middlewares<S> = Middlewares<S>
> {
    /**
     * A single reducer function that will be used as the root reducer, or an
     * object of slice reducers that will be passed to `combineReducers()`.
     */
    reducer: Reducer<S, A> | ReducersMapObject<S, A>

    /**
     * An array of Redux middleware to install. If not supplied, defaults to
     * the set of middleware returned by `getDefaultMiddleware()`.
     */
    middleware?: ((getDefaultMiddleware: CurriedGetDefaultMiddleware<S>) => M) | M

    /**
     * Whether to enable Redux DevTools integration. Defaults to `true`.
     *
     * Additional configuration can be done by passing Redux DevTools options
     */
    devTools?: boolean | DevToolsOptions

    /**
     * The initial state, same as Redux's createStore.
     * You may optionally specify it to hydrate the state
     * from the server in universal apps, or to restore a previously serialized
     * user session. If you use `combineReducers()` to produce the root reducer
     * function (either directly or indirectly by passing an object as `reducer`),
     * this must be an object with the same shape as the reducer map keys.
     */
    preloadedState?: DeepPartial<S extends any ? S : S>

    /**
     * The store enhancers to apply. See Redux's `createStore()`.
     * All enhancers will be included before the DevTools Extension enhancer.
     * If you need to customize the order of enhancers, supply a callback
     * function that will receive the original array (ie, `[applyMiddleware]`),
     * and should return a new array (such as `[applyMiddleware, offline]`).
     * If you only need to add middleware, you can use the `middleware` parameter instead.
     */
    enhancers?: StoreEnhancer[] | ConfigureEnhancersCallback
}

function configureStore<S = any, A extends Action = AnyAction>(
    options: ConfigureStoreOptions<S, A>
): EnhancedStore<S, A>
```

### 2.4.2. Usage

#### 2.4.2.1. Basic Example

```ts
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

const store = configureStore({ reducer: rootReducer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
```

#### 2.4.2.2. Full Example

```ts
import { configureStore } from "@reduxjs/toolkit";

// We'll use redux-logger just as an example of adding another middleware
import logger from "redux-logger";

// And use redux-batch as an example of adding enhancers
import { reduxBatch } from "@manaflair/redux-batch";

import todosReducer from "./todos/todosReducer";
import visibilityReducer from "./visibility/visibilityReducer";

const reducer = {
    todos: todosReducer,
    visibility: visibilityReducer,
};

const preloadedState = {
    todos: [
        {
            text: "Eat food",
            completed: true,
        },
        {
            text: "Exercise",
            completed: false,
        },
    ],
    visibilityFilter: "SHOW_COMPLETED",
};

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
    enhancers: [reduxBatch],
});

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batch, and devtools enhancers were composed together
```

# 3. Reference

-   [Redux For Beginners | React Redux Tutorial Video](https://www.youtube.com/watch?v=CVpUuw9XSjY&feature=emb_logo)
-   [Why use Redux? A tutorial with examples](https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/)
-   [Redux Toolkit](https://redux-toolkit.js.org/introduction/quick-start)
-   [Redux Thunk Explained with Examples | Article](https://www.freecodecamp.org/news/redux-thunk-explained-with-examples/)
