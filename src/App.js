import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { Counter } from './features/counter/Counter';
import './App.css';
import HomePage from './containers/home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/my-app",
      element:<HomePage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
