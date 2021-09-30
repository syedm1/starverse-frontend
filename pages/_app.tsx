import type { AppProps } from 'next/app';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:8080/graphql',
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
