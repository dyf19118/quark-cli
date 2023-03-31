# Quark CLI

With this CLI, you can use this to create a cross-framework/tech stack component, or perhaps you can package it as an npm package for distribution for others to use.

English | [简体中文](./README.zh-CN.md)

## Installation:

> NOTE: Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

```
npm i -g @quarkd/cli
```

## Create project

With NPX:

```shell
npx create-quark-element
```

## how to use

```tsx
import { QuarkElement, property, customElement } from "quarkc";

@customElement({ tag: "quark-count" })
export default class MyElement extends QuarkElement {
  @property({
    type: Number
  })
  count = 0;

  add = () => {
    this.count += 1;
  }
  
  render() {
    return (
        <button onClick={this.add}>count is: { this.count }</button>
    );
  }
}
```

Use it as a normal html element in various frameworks (React/Vue/Angular/JQ):

```html
<my-component></my-component>
```

## Documentation

For full documentation, visit [quark.hellobike.com](https://quark.hellobike.com)