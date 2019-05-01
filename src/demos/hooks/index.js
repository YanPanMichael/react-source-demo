import React, { useState, useEffect } from "react";

export default () => {
  const [name, setName] = useState("Michael");
  useEffect(() => {
    console.log('function component update');

    return () => {
      console.log('unMount');
    }
  }, []);
  return (
    <>
      <p>My name is: {name}</p>
      <input type="text" value={name} placeholder='please input' onChange={e => setName(e.target.value)} />
    </>
  );
};
