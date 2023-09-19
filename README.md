# ModalPopup React Component

## Overview

The `ModalPopup` component provides a simple and reusable modal functionality for React apps. You can use it for various use-cases like showing alert messages, capturing user input, or displaying extra content.

## Features

- **Conditional Rendering**: Only appears when the `isOpen` prop is set to true.
- **Flexible**: Allows you to insert any kind of content, thanks to its use of `children` prop.
- **User Experience**: Can be closed by clicking on the close button or anywhere outside the modal itself.

## Installation

1. Make sure to download both `ModalPopup.js` and its associated `ModalPopup.css` files.
2. Place them into your project's appropriate directory.

## Usage

```jsx
import ModalPopup from './path/to/ModalPopup';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ModalPopup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Your Content Here</h1>
      </ModalPopup>
    </>
  );
}
```

## Props

- `isOpen` (Boolean): Controls whether the modal is open or closed.
- `onClose` (Function): A function to be called when the user closes the modal.
- `children` (ReactNode): The content to be displayed inside the modal.

## License

MIT License
