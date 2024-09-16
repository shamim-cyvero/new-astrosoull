import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Store from "./redux/Store.js";
import { Provider } from 'react-redux';
// export const server = "https://astro-server-six.vercel.app/api/v1"; 
export const server = "http://localhost:9000/api/v1"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
