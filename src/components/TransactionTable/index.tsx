import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Transaction } from "../../Models/transaction.model";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionTable() {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions').then((response: AxiosResponse<any>) => setTransactions(response.data.transactions))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map((transaction: Transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'EUR'
                    }).format(transaction.amount)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {new Intl.DateTimeFormat('en-GB').format(
                      new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </Container>
  );
}