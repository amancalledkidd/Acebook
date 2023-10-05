import react from 'react';
import './userprofilecard.css'


const UserProfileCard = ({user}) => {
    return (
        <div className='userCard'>
            <div className='gradient-header'></div>
            <div className='profile-down'>
                <img src= {user.profilePic} alt='profile picture' className='profile-pic-card'></img>
                <div className='profile-title'>{user.firstName} {user.lastName}</div>
                <div className='profile-description'>{user.email} </div>
            </div>
            <div className='profile-buttons'></div>
        </div>
    );
}

export default UserProfileCard;