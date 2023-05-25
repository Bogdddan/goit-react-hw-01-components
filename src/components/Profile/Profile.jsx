import PropTypes from 'prop-types';
import './Profile.css'


export const Profile =({username, tag, location, avatar, stats}) => {
    return (
        <div className='obgortka'>
        <div className='user-info'>
            <img src={avatar} className='user-avatar' alt="User avatar"/>
            <p className='user-name'>{username}</p>
            <p className='user-tag'>@{tag}</p>
            <p className='user-location'>{location}</p>
        </div>

        <ul className='stats-ul'>
            <li className='stats-li'>
                <span className='statswq'>Followers</span>
                <span className='user-info'>{stats.followers}</span>
            </li>
            <li className='stats-li'>
                <span className='statswq'>Views</span>
                <span className='user-info'>{stats.views}</span>
            </li>
            <li className='stats-li'>
                <span className='statswq'>Likes</span>
                <span className='user-info'>{stats.likes}</span>
            </li>
        </ul>
    </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}