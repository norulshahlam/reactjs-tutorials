/*
A tool that allows you to handle routes in a web app, using dynamic routing.
A router allows your application to navigate between different components, changing the browser URL, modifying the browser history, and keeping the UI state in sync.

https://blog.logrocket.com/react-router-dom-set-up-essential-components-parameterized-routes-505dc93642f1/#:~:text=react%2Drouter%2Ddom%20%3A%20It,development%20environment%20using%20React%20Native
https://www.educative.io/edpresso/what-is-a-react-router

https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e

https://reactrouter.com/web/guides/primary-components#:~:text=React%20Router%20provides%20a%20%3CLink,rendered%20in%20your%20HTML%20document.&text=The%20is%20a%20special,prop%20matches%20the%20current%20location.

There are three primary categories of components in React Router:

1. routers, like <BrowserRouter> and <HashRouter>
--Core of every React Router application should be a router component


2. route matchers, like <Route> and <Switch>
--There are two route matching components: Switch and Route. When a <Switch> is rendered, it searches through its children <Route> elements to find one whose path matches the current URL. When it finds one, it renders that <Route> and ignores all others


3. navigation, like <Link>, <NavLink>, and <Redirect>
--React Router provides a <Link> component to create links in your application. Wherever you render a <Link>, an anchor (<a>) will be rendered in your HTML document.



<Router>: The router that keeps the UI in sync with the URL
<Link>: Renders a navigation link

In a traditional website, when you navigate through the application using anchor links, it results in a page refresh, and all the components in the page are re-rendered. Navigation links created with <Link> and <NavLink> do not result in a page refresh; only those certain sections of the page that are defined using the <Route> and that match the URL path are updated.
it intercepts the request and allow react to handle the content changes in the browser


<Route>: Renders a UI component depending on the URL
<Switch> render only the first route that matches the location. without this, there will be multiple elements rendered if there is >1 matches
render prop provides the ability for inline rendering and passing extra props to the element

https://stackoverflow.com/questions/45122800/react-router-switch-behavior


1. handling 404 page using switch

"<Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively."

https://reactrouter.com/web/api/Switch

by using switch, it  will stop if there is a match. by puting 404 page at the bottom, means if u dont have any matches at all, then it will go to 404 

********************************************


1. Linking Between Routes using <Link>

2. render a component ie header & footer on every page? by adding this component just above <Switch>

3. using <Navlink> instead of <Link> to style the links. we are settig the links the bold when it is on that page eg help link bold when we r at at help page 

<Navlink> vs <Link>

A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL. When we use the NavLink as a tag, it automatically inherit an active class when clicked. On the other hand, the Link tag does now have an active class when clicked.

********************************************


Query Strings and URL Parameters

understanding the property of a component. to view all properties, simply console props, as shown in edit.js

also, pass dynamic values to url and hw to retrieve it using props.match.params..

*********************************************

desturcturing
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#nested_object_and_array_destructuring

a simple site for portfolio using dynamic url
*/

import Navbar from "./Navbar";
import Home from "./Components/Home";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blogs from "./Components/Blogs";
import Blog from "./Components/Blog";
import PageNotFound from "./Components/PageNotFound";
import About from "./Components/About";
import Footer from "./Components/Footer";
import {useState} from "react"

const App = () => {
  
  const [blog, addBlog] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/blogs"><Blogs blog={blog} addBlog={addBlog}/></Route>
            <Route exact path="/blog/:id"component={Blog}/>
            <Route exact path="/about"component={About}/>
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
