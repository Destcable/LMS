import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  ApolloClient, 
  ApolloProvider, 
  InMemoryCache
} from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Layout from './components/Layout/Layout';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Layout />
  </ApolloProvider>
);