import PropTypes from 'prop-types';


export const Profile =({username, tag, location, avatar, stats}) => {
    return (
        <div style={{
            display: 'flex',
            maxWidth: '33%',
            flexDirection: 'column',
            margin: '80px auto',
            border: '1px black solid',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
        }}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',}}>
            <img src={avatar} style={{display: 'block',
                borderRadius: '50%',
                border: '1px black solid',
                margin: '50px auto',
                maxWidth: '40%',
                overflow: 'hidden'}} alt="User avatar"/>
            <p style=
            {{
                fontWeight: 'bold',
                fontSize: '36px',
                color: 'rgb(14, 14, 14)',
                marginBottom: '18px',
            }}>{username}</p>
            <p style={{
                fontWeight: 'bold',
                color: 'gray',
                fontSize: '20px',
                marginBottom: '18px'}}>@{tag}</p>
            <p style={{
                fontWeight: 'bold',
                color: 'gray',
                fontSize: '20px',
                marginBottom: '50px',
            }}>{location}</p>
        </div>

        <ul style={{
            padding: '0',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor:' rgb(184, 182, 182)',
        }}>
            <li style={{
                display: 'flex',
                flexDirection: 'column',
                width: '33%',
                gap: '18px',
                textAlign: 'center',
                justifyContent: 'space-between',
                padding: '25px 25px',
                border: '1px black solid',
            }}>
                <span style={{
                    fontWeight: 'bold',
                    color: 'gray',
                    fontSize: '20px',
                }}>Followers</span>
                <span style={{
                    fontWeight: 'bolder',
                    color: 'rgb(14, 14, 14)',
                    fontSize: '32px'}}>{stats.followers}</span>
            </li>
            <li style={{
                display: 'flex',
                flexDirection: 'column',
                width: '33%',
                gap: '18px',
                textAlign: 'center',
                justifyContent: 'space-between',
                padding: '25px 25px',
                border: '1px black solid',
            }}>
                <span style={{
                    fontWeight: 'bold',
                    color: 'gray',
                    fontSize: '20px',
                }}>Views</span>
                <span style={{
                    fontWeight: 'bolder',
                    color: 'rgb(14, 14, 14)',
                    fontSize: '32px'}}>{stats.views}</span>
            </li>
            <li style={{
                display: 'flex',
                flexDirection: 'column',
                width: '33%',
                gap: '18px',
                textAlign: 'center',
                justifyContent: 'space-between',
                padding: '25px 25px',
                border: '1px black solid',
            }}>
                <span style={{
                    fontWeight: 'bold',
                    color: 'gray',
                    fontSize: '20px',
                }}>Likes</span>
                <span style={{
                    fontWeight: 'bolder',
                    color: 'rgb(14, 14, 14)',
                    fontSize: '32px'}}>{stats.likes}</span>
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