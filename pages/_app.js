


/*import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { createStoreInstance } from '../redux/store'; // Update import statement
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();
const store = createStoreInstance(); // Create the store instance

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;*/


import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { store } from '../redux/store'; // Update the import statement
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
