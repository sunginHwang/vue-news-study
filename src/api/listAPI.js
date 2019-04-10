import axios from 'axios';
import { config } from '../utils/constants';

const emptyResDataList = { data: [] };

export async function fetchList(pageType) {
    try{
        return await axios.get(`${config.baseUrl}/${pageType}/1.json`);
    }catch(exception){
        return await emptyResDataList;
    }
}
