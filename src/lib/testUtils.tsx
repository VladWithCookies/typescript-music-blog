import * as React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {children }
    </BrowserRouter>
  )
}

const customRender = (ui: React.ReactNode, options?: Object) => (
  render(ui, { wrapper: AllTheProviders, ...options })
);

export * from '@testing-library/react';
export { customRender as render };
