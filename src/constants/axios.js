import axios from 'axios';

export const recipe = axios.create({
  baseURL: 'https://api.edamam.com',
  params: {
    app_id: "a0695591",
    app_key: "0f739d2fde28a49c615e17fec8dc1129",
  },
  withCredentials: true,
  responseType: "json"
});

export const yt = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: "1",
    type: "video",
    key: "AIzaSyDVqmCaJWQS2CFQUxrCjd6SyQVzezDRzDk"
  },
  withCredentials: true
});
