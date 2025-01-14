# Quark CLI

Quarkc 是一个拥有完美开发体验的 web components 框架。

使用此 CLI，您可以使用 quarkc 来开发：
- **跨技术栈/原生Web组件**
- 开发不依赖任何前端框架（Vue/React等）的 **独立 Web 应用**

简体中文 | [English](./README.en-US.md)

### 安装并创建

```bash
npx create-quark-app create project-name
```

选择 `component`，开发跨技术栈组件。

[开发跨技术栈组件](https://github.com/hellof2e/quark-cli/blob/main/template/application/component/README.md)

### 优秀案例

|  作者   | github 地址  | 截图 / 链接
|  ----  | ----  | ----- |
| @hellof2e  | https://github.com/hellof2e/quark-doc-header | ![1685501041275](https://github.com/hellof2e/quark/assets/14307551/24dd5626-e6a9-452c-9c95-c2cdb8891573) https://quark.hellobike.com/#/ |
| @xsf0105  | https://github.com/xsf0105/dark-light-element |  https://unpkg.com/dark-light-element@latest/demo.html |
| @dyf19118  | https://github.com/dyf19118/quark-ui-rate |  ![image](https://github.com/hellof2e/quark-cli/assets/14307551/e11e6c49-4c18-4bca-adc3-01a7198ab2e2) |
| @xsf0105  | https://github.com/hellof2e/quark-doc-home |  ![1686575964690](https://github.com/hellof2e/quark/assets/14307551/9618427c-916b-4dfd-b28b-0e8e0f6ce744)  |


### 起手架模版(推荐)

1、工程安装
```bash
npx create-quark-app create project-name
cd project-name

npm install
npm start
```

2. 自定义组件
```jsx
import { QuarkElement, property, customElement } from "quarkc"
import style from "./main.css"

@customElement({ tag: "my-element", style }) // 自定义标签/组件、CSS
export default class MyElement extends QuarkElement {
  @property({ type: Number }) // 外部属性
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

3. 使用

各种技术栈都能运行。
```html
<my-element count="count" />

<!-- vue -->
<my-element :count="count" />

<!-- react -->
<my-element count={count} />

<!-- svelte -->
<my-element {count} />

<!-- angular -->
<my-element [count]="count" />
```

4. 构建


可以打包为 UMD / ESM 格式，然后发布到 npm
```
npm run build
```

### 特性

* 可以在任何框架或者无框架使用 Quark 自定义元素
* 小巧的尺寸和高性能设计
* Web Components + JSX/TSX 融合


### 开发独立 Web 应用

执行安装命令后选择 `app`。

示例：[You-Dont-Need-React-Or-Vue](https://github.com/hellof2e/You-Dont-Need-React-Or-Vue)

## 文档

完整文档，请访问 [quark.hellobike.com](https://quark.hellobike.com)

