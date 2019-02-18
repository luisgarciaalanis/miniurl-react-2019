import http from '../core/http';
import { miniUrlSvc } from '../core/constants';

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

    const shrinkResponse = await http.post<ShrinkPayload, ShrinkResponse>(`${miniUrlSvc}/api/v1/shrink`, payload)

    return shrinkResponse.hash;
}

export { minifyUrl };
