import './closeFriend.css';

function CloseFriend({user}){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <li className='leftbarFriend'>
            <img className='leftbarFriendImg' src={PF+user.image} alt='Profile Image'/>
            <span className='leftbarFriendName'>{user.username}</span>
        </li>
    );
}

export default CloseFriend;