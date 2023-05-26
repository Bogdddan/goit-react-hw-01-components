import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const Transactions = ({ items }) => {
    return (
        <table className={css.table}>
    <thead>
    <tr>
        <th className={css.tableth}>Type
        </th>
        <th className={css.tableth}>Amount
        </th>
        <th className={css.tableth}>Currency
        </th>
    </tr>
    </thead>

    <tbody>
        {items.map(item => (
            <tr>
                <td className={css.tabletd}>
                    {item.type}
                </td>
                <td className={css.tabletd}>
                    {item.amount}
                </td>
                <td className={css.tabletd}>
                    {item.currency}
                </td>
            </tr>
        ))}
    </tbody>
</table>
    )
}

Transactions.propTypes = {
    type: PropTypes.string,
    amount : PropTypes.number,
    currency : PropTypes.string
}

