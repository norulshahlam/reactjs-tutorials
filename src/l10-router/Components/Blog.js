import React from "react";
import { useLocation } from "react-router";

const Blog = () => {
  const {
    i,
    v: { title, message },
  } = useLocation().state;

  return (
    <div className="blog">
      <h1>This is blog number {i + 1}</h1>
      <h2>Title: {title}</h2>
      <h2>Message: {message}</h2>
    </div>
  );
};

export default Blog;
