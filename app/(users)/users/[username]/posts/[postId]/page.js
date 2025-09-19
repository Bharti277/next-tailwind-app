"use client";
import React, { use } from "react";

const Posts = (props) => {
  const post = use(props.params);
  console.log(post);
  return <div>Posts</div>;
};

export default Posts;
