import React from 'react';
import Guilds from "../components/User/Guilds";
import UserInfoCard from "../components/User/UserInfoCard";

const Profile = () => {
    return (
        <div>
            <UserInfoCard/>
            <Guilds/>
        </div>
    );
};

export default Profile;