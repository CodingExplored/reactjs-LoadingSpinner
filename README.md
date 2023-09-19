# LoadingSpinner React Component

## Overview

The `LoadingSpinner` component provides a straightforward way to show a loading spinner in your React applications. This is particularly useful for indicating to the user that some data is currently being fetched or a certain operation is in progress.

## Features

- **Conditional Rendering**: Only appears when the `isLoading` prop is set to true.
- **CSS Customizable**: The spinner is styled using a separate CSS file, making it easy to customize.

## Installation

1. Download both `LoadingSpinner.js` and its associated `LoadingSpinner.css` files.
2. Place them into your project's appropriate directory.

## Usage

```jsx
import LoadingSpinner from './path/to/LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsLoading(!isLoading)}>Toggle Loading</button>
      <LoadingSpinner isLoading={isLoading} />
    </>
  );
}
```

## Props

- `isLoading` (Boolean): Controls whether the loading spinner is visible or not.

## License

MIT License
