import axios from 'axios';
import {stringify as qs} from 'querystringify';
import {apiBearerToken} from "../contstants";

const API_URL = 'https://api.spotify.com/';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiBearerToken}`
    },
});

export class Api {
    static getArtist(search) {
        const query = qs({q: search, type: 'artist'});
        return api.get(`/v1/search?${query}`);
    }

    static getArtistsAlbums(id) {
        return api.get(`/v1/artists/${id}/albums`);
    }

    static getAlbumTracks(id) {
        return api.get(`/v1/albums/${id}/tracks`);
    }

    static getAlbumById(id) {
        return api.get(`/v1/albums/${id}`);
    }
}
