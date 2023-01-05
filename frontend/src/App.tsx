import React, { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalCSS from './styles/global.css';
import { trpc } from './utils/trpc';
import MainPage from './views/MainPage';

function App () {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:5000/trpc'
        })
      ]
    })
  );

  return (
    <Router>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <GlobalCSS />
          <Routes>
            <Route path='/' element={<MainPage />}/>
          </Routes>
        </QueryClientProvider>
      </trpc.Provider>
    </Router>
  );
}

export default App;
