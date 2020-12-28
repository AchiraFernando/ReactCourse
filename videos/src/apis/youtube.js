import axios from 'axios';

const KEY = 'AIzaSyD79hdHtXSjKdy7gA5Q4VsvrrLxWCDGsHk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
