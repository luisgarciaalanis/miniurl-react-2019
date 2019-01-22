import 'whatwg-fetch';

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

    const response = await fetch('http://localhost:7000/api/v1/shrink', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const shrinkResponse = await response.json<ShrinkResponse>();
    return shrinkResponse.hash;
}

export default minifyUrl;
