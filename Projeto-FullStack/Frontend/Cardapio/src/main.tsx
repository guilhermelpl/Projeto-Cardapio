import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'

import Router from './routes/router';

const queryCliente = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCliente}>
      <Router />
    </QueryClientProvider>
  </React.StrictMode>,
)
