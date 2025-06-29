# React Intro

- React apps are made out of components.
- A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
- React components are JavaScript functions that return markup.
- React component names must always start with a capital letter, while HTML tags must be lowercase.
- Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:
- Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user.
- The key prop is used anywhere you render multiple sibling elements dynamically in React.It’s most common in lists, but it’s not limited to <li> elements.
- React uses your keys to know what happened if you later insert, delete, or reorder the items.
- <button onClick={handleClick}>
    - Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: you only need to pass it down.
    - React will call your event handler when the user clicks the button.
