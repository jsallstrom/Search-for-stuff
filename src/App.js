import React from 'react';
import List from './components/List';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
	uri: 'https://awesome-node-graphql.herokuapp.com/graphql'
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<List />
		</ApolloProvider>
	);
};

export default App;
