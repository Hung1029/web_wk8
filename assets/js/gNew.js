import axios from 'axios';
const apiKey = "168beb0a38b4482da7056b9adfca94cc";

export default axios.create({
    method: "get",
    baseURL: "https://newsapi.org/v2",
    params: {
      pageSize: 6
    },
    headers: {
      Authorization: apiKey
    }
  });