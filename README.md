Bro 😭 got you! You want to use JavaScript just like C++ in VS Code — write code in a `.js` file, press Run, and see the output in a terminal below, without opening a browser or Console tab.

The important thing is that Code Runner alone cannot execute standalone JavaScript without a JavaScript runtime. C++ needs a compiler; JavaScript needs a runtime such as Node.js or a browser engine.

## Best solution for you: Tree extension

Install this: Tree — Run Code Instantly. It supports JavaScript and C++ and runs code in VS Code's integrated terminal. Visual Studio Marketplace

CodeRun - Visual Studio Marketplace

Tree — Run Code Instantly

One-click execution · Integrated terminal

[Install from VS Code Marketplace](<https://marketplace.visualstudio.com/items?itemName=treerunner.tree-runner>)

### How to use it

1. Install the extension.
2. Create a file named `main.js`.
3. Write your code:

javascript
```
let a = 10;
let b = 20;

console.log(a + b);
```

4. Press F5 or click the Run button.
5. See the output in the VS Code terminal, just like C++.

One catch: You won't need to install Node.js manually, but Tree downloads the JavaScript runtime automatically the first time you run code. So you still need an internet connection for the initial setup. Visual Studio Marketplace