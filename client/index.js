// import { initializeApp } from 'firebase/app'
// import { getFirebaseConfig } from './src/firebase-config'

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import LandingPage from './components/LandingPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage/>}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <RouterProvider router={router} />
);

// const firebaseAppConfig = getFirebaseConfig()
// initializeApp(firebaseAppConfig)