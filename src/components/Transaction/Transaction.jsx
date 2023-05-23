import PropTypes from 'prop-types';

export const Transactions = ({ items }) => {
    return (
        <table style={{
            margin: '0 auto',
            border: '1px solid black',
        }} class="transaction-history">
    <thead>
    <tr>
        <th style={{fontWeight: 'bold',
            padding: '7px',
            background: 'red',
            border: 'none',
            textAlign: 'left',
            fontSize: '15px',
            borderTop: '2.5px solid #fff',
            borderBottom: '3px solid red',}}>Type
        </th>
        <th style={{fontWeight: 'bold',
            padding: '7px',
            background: 'red',
            border: 'none',
            textAlign: 'left',
            fontSize: '15px',
            borderTop: '3px solid #fff',
            borderBottom: '3px solid red',}}>Amount
        </th>
        <th style={{fontWeight: 'bold',
            padding: '7px',
            background: 'red',
            border: 'none',
            textAlign: 'left',
            fontSize: '15px',
            borderTop: '3px solid #fff',
            borderBottom: '3px solid red',}}>Currency
        </th>
    </tr>
    </thead>

    <tbody>
        {items.map(item => (
            <tr>
                <td style={{padding: '7px',
                    border: 'none',
                    borderTop: '3px solid black',
                    borderBottom: '3px solid #fff',
                    borderRight: '3px solid black',
                    fontSize: '15px',}}>
                    {item.type}
                </td>
                <td style={{padding: '7px',
                    borderTop: '3px solid black',
                    borderBottom: '3px solid #fff',
                    borderRight: '3px solid black',
                    fontSize: '15px',}}>
                    {item.amount}
                </td>
                <td style={{padding: '7px',
                    borderTop: '3px solid black',
                    borderBottom: '3px solid #fff',
                    borderRight: '3px solid #fff',
                    fontSize: '15px',}}>
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

