import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0',
}
const emptyResDataList = { data: [] };
const emptyResData = { data: {} };

async function fetchList(pageType) {
    try{
        return await axios.get(`${config.baseUrl}/${pageType}/1.json`);
    }catch(exception){
        return await emptyResDataList;
    }
}

async function fetchUserInfo(userName) {
    try {
        return await axios.get(`${config.baseUrl}/user/${userName}.json`);
    } catch (error) {
        return await emptyResData;
    }
}

async function fetchItemInfo(itemId) {
    try {
        return await axios.get(`${config.baseUrl}/item/${itemId}.json`);
    } catch (error) {
        return await emptyResData;
    }
}

export {
  fetchList,
  fetchUserInfo,
  fetchItemInfo
};