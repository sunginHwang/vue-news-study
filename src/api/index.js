import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0',
}

function fetchList(pageType) {
    return axios.get(`${config.baseUrl}/${pageType}/1.json`);
}

function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}/user/${userName}.json`);
}

function fetchItemInfo(itemId) {
    return axios.get(`${config.baseUrl}/item/${itemId}.json`);
}

export {
  fetchList,
  fetchUserInfo,
  fetchItemInfo
};