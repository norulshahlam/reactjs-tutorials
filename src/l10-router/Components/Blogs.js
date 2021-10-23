import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

const Blogs = ({ blog, addBlog }) => {
  const formHandler = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value.trim();
    const message = e.target.elements.blog.value.trim();
    if (title && message)
      addBlog([...blog, { title: title, message: message }]);
    else alert("fill in both fileds!");
  };

  return (
    <div>
      <h1>All Blogs</h1>
      <h2>Add blogs</h2>
      <form onSubmit={formHandler}>
        <input type="text" placeholder="title" name="title" />
        <input
          type="text"
          placeholder="What do you want to talk about?"
          name="blog"
        />
        <Button variant="primary" type="submit">
          Add option
        </Button>
      </form>
      <h2> This is the list of all blogs</h2>

      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Message</th>
          </tr>
        </thead>
        {blog.length > 0 &&
          blog.map((v, i) => (
            <tbody key={i}>
              <tr>
                <td>
                  <Link
                    to={{
                      pathname: `/blog/${i + 1}`,
                      state: { v, i },
                    }}
                  >
                    {v.title}
                  </Link>
                </td>
                <td>{v.message}</td>
              </tr>
            </tbody>
          ))}
      </Table>
    </div>
  );
};

export default Blogs;
