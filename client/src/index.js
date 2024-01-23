import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  ApolloClient, 
  ApolloProvider, 
  InMemoryCache
} from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './ui/Header/Header';
import AuthFormContainer from './containers/AuthFormContainer';
import SelectThemeContainer from './containers/SelectThemeContainer';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Header/>
    <SelectThemeContainer />
    {/* <AuthFormContainer/> */}
  </ApolloProvider>
);

