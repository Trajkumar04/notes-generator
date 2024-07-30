import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

export const transcribeVideo = async (videoUrl: string) => {
    try {
        const response = await axios.post(`${API_URL}/transcribe`, { video_url: videoUrl });
        return response.data;
    } catch (error) {
        console.error('Error transcribing video:', error);
        throw error;
    }
};