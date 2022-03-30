import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ujUugC_an0PfixmxIBBd-JurpB3JPSeZc8Nanuqane4'
    }
   
});
