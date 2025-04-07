# React + Vite

## Hooks

Hooks in React are used to add state and side effects to functional components, which previously could only be done in class components. They make your code cleaner, more reusable, and easier to understand.
Hooks can import by using

```jsx
import {useState} from 'react';
```

### State in functional components

Before hooks, only class components could use state. With hooks like useState, you can now write this in a functional component:

```jsx
const [count, setCount] = useState(0);
```

Common Built-in Hooks:

useState – for state

useEffect – for side effects

useContext – for using context

useRef – for accessing DOM elements or persistent values

useReducer – for complex state logic

useMemo & useCallback – for performance optimization.
