import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MyProvider } from './Components/NavBar/MyContext.jsx'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   <MyProvider>
    <App />
    </MyProvider>
    </BrowserRouter>
  </StrictMode>,
)
