import { Container } from "./styles";


export function TransactionTable() {

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
          <tr>
            <td>Weekly Payment</td>
            <td className="deposit">€ 1500.00</td>
            <td>Salary</td>
            <td>01/04/2021</td>
          </tr>
          <tr>
            <td>Supermarket</td>
            <td className="withdraw">€ 300.00</td>
            <td>Food</td>
            <td>05/04/2021</td>
          </tr>
          <tr>
            <td>Internet</td>
            <td className="withdraw">€ 100.00</td>
            <td>Home</td>
            <td>07/04/2021</td>
          </tr>
          <tr>
            <td>Restaurant</td>
            <td className="withdraw">€ 100.00</td>
            <td>Food</td>
            <td>10/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}