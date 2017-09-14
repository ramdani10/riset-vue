import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { addGraphQLSubscriptions } from 'subscriptions-transport-ws'

// YOUR_GRAPH_QL_ENDPOINT_HERE
/* eslint-disable */

// const wsClient = new SubscriptionClient('https://www.graphqlhub.com/playground', {
// 	reconnect: true,
// });

const networkInterface = createNetworkInterface({
	uri: 'http://127.0.0.1:8000/graphql/query'
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
	networkInterface
    // wsClient
)

const client = new ApolloClient({
	networkInterface: networkInterfaceWithSubscriptions,
	dataIdFromObject: o => o.id
})

export default client