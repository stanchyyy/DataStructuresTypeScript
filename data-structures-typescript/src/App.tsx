import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ErrorPage from './routes/error-page';
import Array from './routes/array';
import Root  from "./routes/root"
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
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// When using TypeScript 4.x and above
import type {} from '@mui/lab/themeAugmentation';
// When using TypeScript 3.x and below
import '@mui/lab/themeAugmentation';


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

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </ThemeProvider>
  );
}

export default App;
