import PropTypes from 'prop-types';

export const Transactions = ({ items }) => {
    return (
        <table class="transaction-history">
    <thead>
    <tr>
        <th >Type</th>
        <th>Amount</th>
        <th>Currency</th>
    </tr>
    </thead>

    <tbody>
        {items.map(item => (
            <tr>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
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