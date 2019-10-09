import React, { useState, useEffect } from "react";

export default () => {
  const [name, setName] = useState("Michael");
  const [age, setAge] = useState(16);
  useEffect(() => {
    console.log('function component name update');

    return () => {
      console.log('function component name unMount');
    }
  }, [name]);

  useEffect(() => {
    console.log('function component age update');

    return () => {
      console.log('function component age unMount');
    }
  }, [age]);
  return (
    <>
      <p>My name is: {name}</p>
      <input type="text" value={name} placeholder='please input' onChange={e => setName(e.target.value)} />
    </>
  );
};
