import PropTypes from 'prop-types';
import css from './Profile.module.css'


export const Profile =({username, tag, location, avatar, stats}) => {
    return (
        <div className={css.obgortka}>
        <div className={css.info}>
            <img src={avatar} className={css.useravatar} alt="User avatar"/>
            <p className={css.username}>{username}</p>
            <p className={css.usertag}>@{tag}</p>
            <p className={css.userlocation}>{location}</p>
        </div>

        <ul className={css.statsul}>
            <li className={css.statsli}>
                <span className={css.statswq}>Followers</span>
                <span className={css.userinform}>{stats.followers}</span>
            </li>
            <li className={css.statsli}>
                <span className={css.statswq}>Views</span>
                <span className={css.userinform}>{stats.views}</span>
            </li>
            <li className={css.statsli}>
                <span className={css.statswq}>Likes</span>
                <span className={css.userinform}>{stats.likes}</span>
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