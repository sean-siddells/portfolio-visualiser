// import { initializeApp } from 'firebase/app'
// import { getFirebaseConfig } from './src/firebase-config'

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Contact from './components/Contact';
import Projects from './components/Projects';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Route>,
  ),
);

const rootNode = document.getElementById('app');

if (rootNode) {
  ReactDOM.createRoot(rootNode)
    .render(<RouterProvider router={router} />);
}

// const firebaseAppConfig = getFirebaseConfig()
// initializeApp(firebaseAppConfig)
