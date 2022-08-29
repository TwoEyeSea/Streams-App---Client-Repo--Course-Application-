import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      <br />
      <Link to="/pagetwo">Navigate to Page two</Link>
      //when we use a link tag we make use of the "to" prop not an href prop.
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <br />
      <Link to="/">
        {" "}
        <button>Navigate to Page one</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
