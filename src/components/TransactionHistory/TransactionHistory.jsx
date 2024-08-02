import clsx from "clsx";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={clsx(s.table)}>
      <thead>
        <tr className={clsx(s.row)}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr
            key={item.id}
            className={clsx(s["table-row"], {
              [s.even]: (index + 1) % 2 === 0,
            })}
          >
            <td className={clsx(s.type)}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
