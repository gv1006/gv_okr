import axios from 'axios';

const OKR_JSON_URL = 'https://okrcentral.github.io/sample-okrs/db.json';

export const getOKR = () => {
    return new Promise((resolve, reject) => {
        axios.get(OKR_JSON_URL)
        .then(res => {
            resolve(res.data);
        })
    });
}