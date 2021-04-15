import { useContext } from "react";
import { Transaction } from "../../Models/transaction.model";
import { TransactionContext } from "../../TransactionsContext";
import { Container } from "./styles";


export function TransactionTable() {

  const { transactions } = useContext(TransactionContext);

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
                    {new Intl.NumberFormat('en-GB', {
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