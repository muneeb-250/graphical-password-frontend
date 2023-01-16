import React from 'react'
// import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client'
import App from './App'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

