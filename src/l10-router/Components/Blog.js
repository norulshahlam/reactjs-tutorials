import React from "react";
import { useLocation } from "react-router";

const Blog = () => {
  const location = useLocation();
  return (
    <div className="blog">
      <h1>This is blog page</h1>
      <h2>Title: {location.state.v.title}</h2>
      <h2>Message: {location.state.v.message}</h2>
    </div>
  );
};

export default Blog;
