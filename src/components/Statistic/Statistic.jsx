import PropTypes from 'prop-types';

export const Statistics = ({ title, stats}) => {
    return (
        <section style = 
        {{
            marginBottom: '30px',
            marginTop: '30px',
            border : '1px solid black'
        }}>
            <h2>Upload stats</h2>
            <ul
            style = 
            {{
                margin: '0',
                padding: '0',
                listStyle: 'none',
                display : 'flex',
                gap: '15px'
            }}>
            {stats.map(stat => (
                <li key={stat.id}>
                <span>{stat.label}</span>
                <span>{stat.percentage}%</span>
                </li>
            ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};