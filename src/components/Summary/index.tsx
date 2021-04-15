import incomeImg from '../../assets/income.svg';
import expenseImg from '../../assets/expense.svg';
import balanceImg from '../../assets/balance.svg';
import { Container } from './styles';
import { useContext } from 'react';
import { TransactionContext } from '../../TransactionsContext';

export function Summary() {

  const { transactions } = useContext(TransactionContext);

  return (
    <Container>
      <div>
        <header>
          <p>Incomes:</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>€ 1500.00</strong>
      </div>
      <div>
        <header>
          <p>Expenses:</p>
          <img src={expenseImg} alt="Expenses" />
        </header>
        <strong>€ 500.00</strong>
      </div>
      <div>
        <header>
          <p>Balance:</p>
          <img src={balanceImg} alt="Balance" />
        </header>
        <strong>€ 1000.00</strong>
      </div>
    </Container>
  );
}