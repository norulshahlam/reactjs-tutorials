import React from "react";
import { Link } from "react-router-dom";
import { Button, Table, Form } from "react-bootstrap";

const Blogs = ({ blog, addBlog }) => {
  const formHandler = (e) => {
    e.preventDefault();
    const title = e.target.elements.title2.value.trim();
    const message = e.target.elements.message2.value.trim();
    console.log(e.target.elements.message2.value);
    if (title && message)
      addBlog([...blog, { title: title, message: message }]);
    else alert("fill in both fileds!");
  };

  return (
    <div>
      <h1>All Blogs</h1>

      <Form onSubmit={formHandler}>
        <Form.Group className="mb-3" controlId="title2">
          <Form.Label>Your title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
          <Form.Text className="text-muted">Think of a title first!</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message2">
          <Form.Label>Your message</Form.Label>
          <Form.Control type="text" placeholder="Enter your thoughts" />
          <Form.Text className="text-muted">
            What would u like to talk about?
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add option
        </Button>
      </Form>
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
