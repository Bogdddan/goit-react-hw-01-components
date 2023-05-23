import PropTypes from 'prop-types';
import { FriendListItem } from "components/Friendlistitem/FriendListItem";

export const FriendList = ( {friends} ) => {
    return (
        <ul>
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