import axios from "axios";

export const base_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
    url: base_URL,
    videoId: "M7FIvfx5J10",
  },
  headers: {
    'X-RapidAPI-Key': 'd0ca6d7363mshf6ae47bc0644f78p1d17d7jsn4140f066bece',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${base_URL}/${url}`, options);
  return data;
};


