# Event Propagation

Event propagation refers to how events travel through the DOM (Document Object Model) when an event occurs on an element. There are three main phases of event propagation:

## 1. Capturing Phase
- The event starts from the window and travels down through the DOM tree to the target element
- This is the first phase where parent elements can intercept the event before it reaches its target

## 2. Target Phase
- The event reaches the actual target element where it originated
- This is where the event handlers on the target element are triggered

## 3. Bubbling Phase
- The event bubbles back up from the target element through the DOM tree to the window
- Parent elements can catch the event after it has been handled by the target

## Example
```html
<div id="grandparent">
  <div id="parent">
    <div id="child"></div>
  </div>
</div>
```

If you click on the `child` element:
1. Capturing: window → document → grandparent → parent
2. Target: child
3. Bubbling: child → parent → grandparent → document → window

## Controlling Propagation
- `event.stopPropagation()`: Stops the event from continuing to propagate
- `event.stopImmediatePropagation()`: Stops propagation and prevents other handlers on the same element from executing
- You can set the third parameter in `addEventListener` to `true` to listen during the capturing phase (default is false for bubbling phase)

Understanding event propagation is crucial for managing complex event handling in web applications.






# **Event Propagation Cycle**

The **event propagation cycle** describes how an event (like a click, keypress, or mouse movement) travels through the **DOM (Document Object Model)** from the point where it is triggered to where it is handled. The cycle consists of **three phases**:

1. **Capturing Phase (Event Capture)**
2. **Target Phase**
3. **Bubbling Phase (Event Bubbling)**

---

## **1. Capturing Phase (Top-Down)**
- The event starts from the **`window`** and moves **down** the DOM tree toward the **target element**.
- This phase allows parent elements to intercept the event **before** it reaches the target.
- By default, event listeners **do not run** in this phase unless explicitly set using `{ capture: true }` in `addEventListener`.

### **Example:**
```javascript
element.addEventListener('click', handler, { capture: true });
// or
element.addEventListener('click', handler, true); // Old way
```

---

## **2. Target Phase**
- The event **reaches** the actual element where it was triggered (the **target**).
- Event listeners on the target element execute **regardless** of whether they were set for **capturing or bubbling**.
- If `event.stopPropagation()` is called here, the event **won’t bubble up**.

---

## **3. Bubbling Phase (Bottom-Up)**
- After the target phase, the event **bubbles up** from the target back to the `window`.
- This is the **default behavior** for most events (e.g., `click`, `keydown`).
- Parent elements can **catch** the event after the target handles it.

### **Example:**
```javascript
element.addEventListener('click', handler); // Default (bubbling phase)
```

---

## **Visualizing Event Propagation**
Consider this HTML structure:
```html
<div id="grandparent">
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
</div>
```

When you click the `<button>`:
1. **Capturing Phase** (Window → Document → `#grandparent` → `#parent`)
2. **Target Phase** (`#child` button is reached)
3. **Bubbling Phase** (`#child` → `#parent` → `#grandparent` → Document → Window)

---

## **Controlling Event Propagation**
| Method | Description |
|--------|-------------|
| `event.stopPropagation()` | Stops further propagation (capturing/bubbling) |
| `event.stopImmediatePropagation()` | Stops propagation & prevents other handlers on the **same element** |
| `event.preventDefault()` | Prevents default browser behavior (e.g., form submission) |

### **Example: Stop Bubbling**
```javascript
child.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents bubbling to parent elements
});
```

---

## **Summary**
- **Capturing Phase** → Top-down (`window` → target)
- **Target Phase** → Event reaches the target element
- **Bubbling Phase** → Bottom-up (target → `window`)
- Use `{ capture: true }` to listen in the capturing phase.
- Use `stopPropagation()` to stop event flow.

Understanding this cycle is crucial for managing **nested event handlers** and avoiding unintended side effects in complex UIs. 🚀