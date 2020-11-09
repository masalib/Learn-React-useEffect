import React, { useState, useEffect } from "react";

export default function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  //すべてのdomが書き換わった時（render)に実行される
  //useEffect(() => {
  //  console.log("render");
  //});

  //書き換わらなくても実行？
  console.log("render");

  //初期読み込み時の場合
  useEffect(() => {
    console.log("onMount（初期読み込み時）");
  }, []);

  useEffect(() => {
    console.log("render resourceType（対象が書き換わった）");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}/`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <button onClick={() => setResourceType("posts")}>posts</button>
      <button onClick={() => setResourceType("users")}>users</button>
      <button onClick={() => setResourceType("comments")}>comments</button>

      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
