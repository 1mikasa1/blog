import {createRoot} from 'react-dom/client';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from './router';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {
              routes.map((props, key) => {
                return (
                  <Route key={key} {...props}/>
                )
              })
            }
          </Switch>
        </Suspense>
      </BrowserRouter>
    )
  }
}

const root = createRoot(document.getElementById('root'))
root.render(<App></App>)