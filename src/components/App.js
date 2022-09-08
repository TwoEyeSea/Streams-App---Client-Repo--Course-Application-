import React from "react";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import StreamEdit from "./Streams/StreamEdit";
import StreamList from "./Streams/StreamList";
import StreamShow from "./Streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          {/* Wildcard variable - anything after the colon is treated as a variable and we can specify any number of these wildcard variables
          e.g "/streams/edit/:id/:genre/:horror" */}
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/show/:id" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
