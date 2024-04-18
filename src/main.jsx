import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import RandomCard from "./pages/RandomCard.jsx";
import CardList from './pages/CardList.jsx';
import CardDetails from "./pages/CardDetails.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CardList />,
      },
      {
        path: "/random",
        element: <RandomCard />,
        loader: () =>
          axios.get("https://db.ygoprodeck.com/api/v7/randomcard.php")
      },
      {
        path: "/card/:id",
        element: <CardDetails />,
        loader: ({ params }) =>
          axios.get(
            `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${params.id}`
          )
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
