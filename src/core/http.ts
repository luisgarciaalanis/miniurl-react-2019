import 'whatwg-fetch';

class Http {
    /**
     * Posts a json payload to a URL.
     *
     * @param url url to post to.
     * @param payload post json payload.
     */
    async post<P, T>(url: string, payload: P): Promise<T> {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        return await response.json<T>();
    }
}

export default new Http();