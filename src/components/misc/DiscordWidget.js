import React from 'react';
import {useSelector} from "react-redux";

const DiscordWidget = () => {

    const user = useSelector(state => state.discordUser.user);

    return (
        <div>
            <iframe src={`https://discordapp.com/widget?id=349448013711933446&theme=dark&username=${username}}`} width="350" height="500"
                    allowTransparency="true" frameBorder="0">
                Discordupote
            </iframe>
        </div>
    );
};

export default DiscordWidget;