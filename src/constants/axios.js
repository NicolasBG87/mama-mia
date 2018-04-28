import axios from 'axios';

export const recipes = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/food2fork.com/api/search?',
  params: {
    key: "efc7ae89e9dde4cdfa065e0cf5685a3c",
    sort: "r",
    count: "10",
  }
});

export const recipe = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/food2fork.com/api/get?",
  params: {
    key: "efc7ae89e9dde4cdfa065e0cf5685a3c"
  }
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
