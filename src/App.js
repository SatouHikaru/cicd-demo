import './App.css';
import React from 'react'
import TheLayout from './containers/TheLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            path="/"
            name="Home"
            render={(props) => <TheLayout {...props} />}
          />
        </Switch>{" "}
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
