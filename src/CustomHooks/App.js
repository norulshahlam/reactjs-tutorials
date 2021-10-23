/*
This example is for custom hooks

A custom hook allows you to extract some components logic into a reusable function.
We can extract this functionality inside a custom hook, and reuse it anywhere we want.

These are normal javascript functions which can use other hooks inside of it and contain a common stateful logic that can be reused within multiple components. These functions are prefixed with the word use.

Let’s say you have 2 functions (components) which implement some common logic. You can create a third function with this common logic and implement it in the other two functions. After all, hooks are just functions.

"Custom hooks means fewer keystrokes and less repetitive code"

https://blog.bitsrc.io/writing-your-own-custom-hooks-4fbcf77e112e
*/

import Child from "./Child";
import { ThemeProvider } from "./ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Child />
    </ThemeProvider>
  );
};

export default App;
