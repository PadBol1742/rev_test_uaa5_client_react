import axios from "axios";

export async function GetDestinationComments(destinationId) {

    const result = await axios.get(`/api/Destinations/${destinationId}/comments`, { baseURL: "https://localhost:7070" })

    return result.data;
}

