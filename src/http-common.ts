import axios from 'axios';

const port = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080/api";

export default axios.create({
    baseURL: port,
    headers: {
        "Content-type": "application/json"
    }
});
