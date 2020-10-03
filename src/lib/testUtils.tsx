import * as React from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react'
import { BrowserRouter, Route } from 'react-router-dom';

import { rootReducer } from 'src/store';

interface Options {
  path?: string;
  route?: string;
  props?: Object;
  wrapper?: React.ComponentClass | React.FunctionComponent;
}

const customRender = (
  component: React.ComponentClass | React.FunctionComponent,
  options: Options = {},
  store = createStore(rootReducer),
) => {
  const path = options.path || '/';
  const route = options.route || '/';

  const ui = (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path={path} component={component} />
      </BrowserRouter>
    </Provider>
  );

  window.history.pushState({}, 'Test page', route)

  return render(ui, options);
};

export * from '@testing-library/react';
export { customRender as render };
