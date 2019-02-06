import http from '../core/http';

interface ShrinkPayload {
    url: string;
}

interface ShrinkResponse {
    hash: string;
};

/**
 * Minifies a url by calling the miniurl service.
 *
 * @param url url to minify.
 */
const minifyUrl = async (url: string) => {
    const payload = {
        url: url,
    };

    const shrinkResponse = await http.post<ShrinkPayload, ShrinkResponse>('http://miniurl-svc:7000/api/v1/shrink', payload)

    return shrinkResponse.hash;
}

export { minifyUrl };
