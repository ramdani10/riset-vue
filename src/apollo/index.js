import { BaseGraphql } from './../helpers/http_services'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { addGraphQLSubscriptions } from 'subscriptions-transport-ws'

// YOUR_GRAPH_QL_ENDPOINT_HERE
/* eslint-disable */

console.log(BaseGraphql);

// const wsClient = new SubscriptionClient('https://www.graphqlhub.com/playground', {
// 	reconnect: true,
// });

const networkInterface = createNetworkInterface({
	uri: BaseGraphql
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