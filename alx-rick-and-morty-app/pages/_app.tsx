import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import '@/sentry.client.config';

import client from "@/graphql/apolloClient";
import ErrorBoundary from "./components/ErrorBoundary";
export default function App({ Component, pageProps }: AppProps) {
  return (
     <ErrorBoundary>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider></ErrorBoundary>
  );
}
