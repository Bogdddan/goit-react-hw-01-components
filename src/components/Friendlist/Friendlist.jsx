import PropTypes from 'prop-types';
import { FriendListItem } from "components/Friendlistitem/FriendListItem";
import css from './Friendlist.module.css'

export const FriendList = ( {friends} ) => {
    return (
        <ul classNam={css.friendList}>
            {friends.map(friend => (
                <FriendListItem 
                    key = {friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};