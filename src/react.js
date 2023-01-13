/**
 * @typedef {Object} UserComponent$Props
 * @property {string} name
 * @property {number} age
 */

/** @type {function(UserComponent$Props):any} */ // "any" can be replaced by import("react").ReactElement
function UserComponent(props) {
  return (
    <div>
      User {props.name} is {props.age} years old
    </div>
  );
}

/**
 * @typedef {Object} SomeComponentWithContent$Props
 * @property {import("react").ReactElement} children
 */

/** @type {function(SomeComponentWithContent$Props):any} */
function SomeComponentWithContent(props) {
  return <div>Content: {props.children}</div>;
}

export function App() {
  // IDE should support IntelliSense of props
  return (
    <>
      <UserComponent name="Franta" age={234}></UserComponent>
      <SomeComponentWithContent>
        <h1>some content</h1>
      </SomeComponentWithContent>
    </>
  );
}
