import React, { useState } from "react";

export default function UseMemoDemo() {
  const [name, setName] = useState("name");
  const [content, setContent] = useState("content");
  return (
    <>
      <button type="button" onClick={() => setName(new Date().toJSON())}>
        Name
      </button>
      <button type="button" onClick={() => setContent(new Date().getTime())}>
        Content
      </button>
      <Button name={name}>{content}</Button>
    </>
  );
}

function Button({ name, children }) {
  function changeName(name) {
    console.log('11')
    return name + ' 改变name的方法'
  }
  // const otherChangeName = () => changeName(name) //render every time for both name and content
  const otherChangeName = React.useMemo(() => changeName(name), [name]) // render only when name change
  return (
    <div>
      {/* {otherChangeName()} */}
      {otherChangeName}
      {children}
    </div>
  )
}
