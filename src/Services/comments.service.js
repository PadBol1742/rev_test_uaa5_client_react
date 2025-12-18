import axios from "axios";

export async function GetDestinationComments(destinationId) {

    const result = await axios.get(`/api/Destinations/${destinationId}/comments`, { baseURL: "https://localhost:7070" })

    return result.data;
}

export async function PostDestinationComment(destinationId, commentObj) {

    const result = await axios.post(`https://localhost:7070/api/Destinations/${destinationId}/comments`, { ...commentObj })

    return result;
}