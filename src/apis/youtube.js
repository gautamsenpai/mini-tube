import axios from 'axios';

const KEY = "AIzaSyAibyGpltDKnNn8Mi4eyszLpfq_DDKnGSw";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});