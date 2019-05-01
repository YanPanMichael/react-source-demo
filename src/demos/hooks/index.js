import React, { useState } from "react";

export default () => {
  const [name, setName] = useState("Michael");
  return (
    <>
      <p>My name is: {name}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </>
  );
};
