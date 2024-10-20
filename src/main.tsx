
import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

import App from './app';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error): void => {
        console.error(`Something went wrong: ${(error as Error).message}`);
    },
  }),
});

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Suspense>
            <App />
          </Suspense>
        </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
