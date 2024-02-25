## Task 2 - Elfsight

❗**Since I haven't found amy CMS system that allows Javascript insertion, the task has been SKIPPED**❗

**TESTED CMS:**

```
Wordpress, Wix, Tilda, Shopify, Squarespace, TL
```

The task is pretty simple, just use **some listeners** and **state**.

(_Even better in React: `onClick`, `useState`_);

## Requirements

- Create a website on any CMS that allows HTML insertion.
- Install the widget from [Task 1](./task1.md) and hide it's visibility.
- Create a button `Show Widget`.
- The button must not only change the widget visibility, but also change text content of itself.

```ts
onClick(() => toggleWidget());
```

- The toggle state must be saved in `Local Storage` or `IndexedDB` of the browser. It means that on the page reload, the widget will be visible/!visible.

### Widget Code

```html
<script
  src="https://static.elfsight.com/platform/platform.js"
  data-use-service-core
  defer
></script>
<div
  class="elfsight-app-ef76a055-af05-4b66-b36d-58a76ea6920d"
  data-elfsight-app-lazy
></div>
```

<img src="./task3/public/widget.png">
