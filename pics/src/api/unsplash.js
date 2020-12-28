import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8NPDviCBMbf--P0MuQfBra034IpAOvlUETrFW9I62tQ',
  },
});
