// Component without nested content

/**
 * @typedef {Object} UserComponent$Props
 * @property {string} name
 * @property {number} age
 */

/**
 * @param {UserComponent$Props} props
 * @return {React.ReactElement}
 */
function UserComponent(props) {
  return (
    <div>
      User {props.name} is {props.age} years old
    </div>
  );
}

// Component with children

/**
 * @typedef {Object} SomeComponentWithContent$Props
 * @property {any} [optionalSomeThing]
 */

/**
 * @param {React.PropsWithChildren<SomeComponentWithContent$Props>} props
 * @return {React.ReactElement}
 */
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
