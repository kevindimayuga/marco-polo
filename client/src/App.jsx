// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import FoundItemForm from './components/FoundItemForm';
import LostItemForm from './components/LostItemForm';
import Auth from './utils/auth';
import './App.css';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <NavBar />
        {/* <ItemList />
        <LoginForm />
        <SignupForm />
        <FoundItemForm />
        <LostItemForm /> */}
        <Outlet />
      </div>
    </ApolloProvider>
  )
}

export default App;

