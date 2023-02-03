import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:3000/",
    baseURL: "https://api.unsplash.com/",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Client-ID tDmWuSHock3LaL3PHw3p260slWA-Rf5PPVTWa913kEY"
    }

});
