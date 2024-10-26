import { GraphQLClient } from "graphql-request";

const url = 'https://shakhriar.us-east-a.ibm.stepzen.net/api/triangular-molly/graphql';
const apiKey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;
console.log(apiKey);

const client = new GraphQLClient(url, {
    headers: {
        Authorization: 'apikey ' + apiKey
    },
});

export default client;