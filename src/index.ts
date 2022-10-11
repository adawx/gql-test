import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

const typeDefs = gql`
  type Query {
    player(id: ID!): Player
  }
  type Player {
    id: ID!
    name: String
    health: Int
    inventory: [String]
  }
`;

const players = [
  {
    id: '1',
    name: 'alex',
    health: 100,
    inventory: ['sword', 'shield'],
  },
  {
    id: '2',
    name: 'steve',
    health: 50,
    inventory: [],
  },
];

const resolvers = {
  Query: {
    player(
      _parent: unknown,
      args: { id: string },
      _context: unknown,
      _info: unknown
    ) {
      return players.find((player) => player.id === args.id);
    },
  },
};

async function listen(port: number) {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  server.applyMiddleware({ app });

  return new Promise((resolve, reject) => {
    httpServer.listen(port).once('listening', resolve).once('error', reject);
  });
}

async function main() {
  try {
    await listen(4000);
    console.log('🚀 Server is ready at http://localhost:4000/graphql');
  } catch (err) {
    console.error('💀 Error starting the node server', err);
  }
}

void main();
