import http from '../core/http';

interface ShrinkPayload {
    url: string;
    hash: string;
}

interface ShrinkResponse {
    hash: string;
};

/**
 * Minifies a url by calling the miniurl service.
 *
 * @param url url to minify.
 */
const minifyCustomUrl = async (url: string, hash: string) => {
    const payload = {
        url,
        hash,
    };

    const shrinkResponse = await http.post<ShrinkPayload, ShrinkResponse>('http://miniurl-svc:7000/api/v1/shrink', payload)

    return shrinkResponse.hash;
}

export default minifyCustomUrl;
