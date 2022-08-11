import { ApolloClient, InMemoryCache } from '@apollo/client';

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
};

const client = new ApolloClient({
    uri: `${process.env.CMS_URL}/graphql`,
    cache: new InMemoryCache(),
    defaultOptions,
});

export default client;
