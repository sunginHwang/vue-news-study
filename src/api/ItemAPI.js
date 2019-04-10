import axios from 'axios';
import { config } from '../utils/constants';

const emptyResData = { data: {} };

export async function fetchItemInfo(itemId) {
    try {
        return await axios.get(`${config.baseUrl}/item/${itemId}.json`);
    } catch (error) {
        return await emptyResData;
    }
}
