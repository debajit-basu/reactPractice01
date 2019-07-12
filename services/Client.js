import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch';
import { InMemoryCache } from 'apollo-cache-inmemory';
import env from '../env';

const Client = new ApolloClient({
  uri: env.END_POINT,
  fetch,
  cache: new InMemoryCache({
    addTypename: false
  })
});

export default Client;
