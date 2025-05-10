import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from "./Store/Store";
import { Provider } from 'react-redux';
import { Toaster } from './Components/ui/toaster';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    <Toaster/>
    </Provider>
  </StrictMode>,
);
