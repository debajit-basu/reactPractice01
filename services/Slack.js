import axios from 'axios';
import env from '../env';

const slackWebHook = {

    // send file to api with validation parameters
    // @ author: Arijit Deb Roy
    // @ params: file obj, mime type arr[], file size

    sendSlackMessage(text, slackUrl = env.SLACK_URL, username = "errorBotFrontend", icon_emoji = ":scream:"){

        let message =  JSON.stringify({text, username, icon_emoji});

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };

        console.log(message);

        return axios.post(`${slackUrl}`, message, config)
            .then(res => res.data)
            .catch(error => error);

    }

}

export default slackWebHook;
