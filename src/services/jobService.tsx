import axios from 'axios';

const API_URL = 'https://remotive.com/api/remote-jobs?limit=20';

export const getJobs = async () => {
    try{
        const response = await axios.get(`${API_URL}`);
        console.log('API response:', response.data);
        return response.data.jobs;
    }
    catch(error){
        console.error('Error fetching jobs:', error);
        throw error;
    }
}