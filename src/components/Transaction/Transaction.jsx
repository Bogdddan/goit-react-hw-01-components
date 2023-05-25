import PropTypes from 'prop-types';
import './Transaction.css';

export const Transactions = ({ items }) => {
    return (
        <table className='table'>
    <thead>
    <tr>
        <th className='tableth'>Type
        </th>
        <th className='tableth'>Amount
        </th>
        <th className='tableth'>Currency
        </th>
    </tr>
    </thead>

    <tbody>
        {items.map(item => (
            <tr>
                <td className='tabletd'>
                    {item.type}
                </td>
                <td className='tabletd'>
                    {item.amount}
                </td>
                <td className='tabletd'>
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

