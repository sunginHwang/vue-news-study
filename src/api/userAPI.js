import axios from 'axios';
import { config } from '../utils/constants';

const emptyResData = { data: {} };

export async function fetchUserInfo(userName) {
    try {
        return await axios.get(`${config.baseUrl}/user/${userName}.json`);
    } catch (error) {
        return await emptyResData;
    }
}
