import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
    Authorization: 'Bearer y2PnQ3Oxe_epOZBUF6oFSj2INoEkFaNRSRfuAaPNAM4VlK5OXly3z1X3Z7bPR8gK3fmH8vbhbdfUO__ruokw_3lh2nNql9LWDl0XA7tz34Nmn_jQhuROHSWetfaJXnYx'
}
});


