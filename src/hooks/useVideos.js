import {useState,useEffect} from 'react';
import youtube from '../apis/youtube';

const KEY = "SET_KEY_HERE";

const useVideos = (defaultSearchTerm) => {
    const[videos, setVideos] = useState([]);

    useEffect(() => {
        onSearchSubmit(defaultSearchTerm);
    },[defaultSearchTerm]);

    const onSearchSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });
        setVideos(response.data.items);
    };

    return [videos,onSearchSubmit];
}

export default useVideos;
