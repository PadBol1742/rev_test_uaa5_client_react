import axios from "axios";

export async function GetAllDestinations() {

    const result = await axios.get(`/api/Destinations`, { baseURL: "https://localhost:7070" })

    return result.data;
}

export async function GetOneDestination(id) {

    const result = await axios.get(`/api/Destinations/${id}`, {
        baseURL: "https://localhost:7070"
    });

    return result;
}