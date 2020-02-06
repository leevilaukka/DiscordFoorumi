import React from 'react';
import Guilds from "../components/discord/Guilds";
import UserInfoCard from "../components/user/UserInfoCard";

const Profile = () => {
    return (
        <div>
            <UserInfoCard/>
            <Guilds/>
        </div>
    );
};

export default Profile;