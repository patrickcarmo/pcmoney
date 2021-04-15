import incomeImg from '../../assets/income.svg';
import expenseImg from '../../assets/expense.svg';
import balanceImg from '../../assets/balance.svg';
import { Container } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

interface Summary {
  deposits: number;
  withdraws: number;
  total: number;
}

export function Summary() {

  const { transactions } = useTransactions();

  const summary: Summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Incomes:</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'EUR'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Expenses:</p>
          <img src={expenseImg} alt="Expenses" />
        </header>
        <strong>
          -{new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'EUR'
        }).format(summary.withdraws)}
        </strong>
      </div>
      <div>
        <header>
          <p>Balance:</p>
          <img src={balanceImg} alt="Balance" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'EUR'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}