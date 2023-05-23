import PropTypes from 'prop-types';


export const FriendListItem = ({ avatar, name, isOnline, key }) => {
    return (
    <>
        <li style={{
            width: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid black',
            borderRadius: '15px',}}>
            <span>
                {isOnline ? 'online' : 'ofline'}
            </span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>
                {name}
            </p>
        </li>
    </>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};