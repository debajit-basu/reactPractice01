import axios from 'axios';
import env from '../env';

const fileUpload = {

    // send file to api with validation parameters
    // @ author: Arijit Deb Roy
    // @ params: file obj, mime type arr[], file size

    putFile(stream, validExt, contentType, fileType=null) {

        let formData = new FormData();
        formData.append('filters', JSON.stringify({ validExt: validExt, contentType : contentType, fileType: fileType }));
        formData.append('file', stream);

        const config = {
            headers: {
                'accept': "*/*",
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
        };
        return axios.post(`${env.FILE_UPLOAD_URI}/saveFile?_format=json`, formData, config)
            .then(res => res.data)
            .catch(error => error);
    }

}

export default fileUpload;
