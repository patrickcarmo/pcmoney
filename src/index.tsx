import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Weekly Payment',
          type: 'deposit',
          category: 'Salary',
          amount: 1500,
          createdAt: new Date('2021-04-01 09:00:00'),
        },
        {
          id: 2,
          title: 'Supermarket',
          type: 'withdraw',
          category: 'Food',
          amount: 3000,
          createdAt: new Date('2021-04-05 09:00:00'),
        },
        {
          id: 3,
          title: 'Internet',
          type: 'withdraw',
          category: 'Home',
          amount: 100,
          createdAt: new Date('2021-04-08 09:00:00'),
        },
        {
          id: 4,
          title: 'Restaurant',
          type: 'withdraw',
          category: 'Food',
          amount: 100,
          createdAt: new Date('2021-04-10 09:00:00'),
        },
      ],
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

