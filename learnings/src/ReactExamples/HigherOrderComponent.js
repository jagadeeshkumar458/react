import React from "react";

function HigherOrderComponent(WrappedComponent) {
  return function EnhancedComponent(props) {
    // You can add additional logic or state here if needed
    return (
      <div style={{ border: "2px solid black" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

// Example usage of the Higher-Order Component
function MyComponent() {
  return <div>This is my component wrapped by a Higher-Order Component.</div>;
}

const WrappedComponent = HigherOrderComponent(MyComponent);

export { WrappedComponent };
