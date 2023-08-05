import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouteObject, RouterProvider,} from "react-router-dom";
import ErrorPage from './routes/error-page';
import Array from './routes/array';
import Root from "./routes/root"
import LinkedList from './routes/linked-list';
import BinarySearchTree from './routes/binary-search-tree';
import BinaryTree from './routes/binary-tree';
import Graph from './routes/graph';
import Hashing from './routes/hashing';
import Heap from './routes/heap';
import Matrix from './routes/matrix';
import Queue from './routes/queue';
import Stack from './routes/stack';
import { ArrayLoader } from './Loaders/array-loader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let childrenRoutes : RouteObject []=[
  {
    path: "array",
    element : <Array/>,
    loader : ArrayLoader,
  },
  {
    path: "linkedList",
    element : <LinkedList/>,
  },
  {
    path: "binarytree",
    element : <BinaryTree/>,
  },
  {
    path: "binarysearchtree",
    element : <BinarySearchTree/>,
  },
  {
    path: "graph",
    element : <Graph/>,
  },
  {
    path: "hashing",
    element : <Hashing/>,
  },
  {
    path: "heap",
    element : <Heap/>,
  },
  {
    path: "matrix",
    element : <Matrix/>,
  },
  {
    path: "queue",
    element : <Queue/>,
  },
  {
    path: "stack",
    element : <Stack />,
  },

]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    children : childrenRoutes,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
