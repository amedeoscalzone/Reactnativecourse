import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
    Authorization: 'Bearer J-fVpxJnqRe8tQxqBg3sCj-mdYYnOKo0uRToWSNMK7Qpqin2wndbv_z6LUw3crS-pykKgOfKrXc-rvtdt9zW1EQyP9nnl7hQk25_ImITXYc8b3uXxdv8CYLZBWGXnYx'
}
});


