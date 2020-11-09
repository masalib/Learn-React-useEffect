import React, { useState } from "react";

export default function App() {
  const [resourceType, setResourceType] = useState("posts");

  return (
    <>
      <button onClick={() => setResourceType("posts")}>posts</button>
      <button onClick={() => setResourceType("users")}>users</button>
      <button onClick={() => setResourceType("comments")}>comments</button>

      <h1>{resourceType}</h1>
    </>
  );
}
