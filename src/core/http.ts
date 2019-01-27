import 'whatwg-fetch';

/**
 * Status codes.
 */
const StatusCodes = {
    Internal: 500,
    BadRequest: 400,
    Forbidden: 403,
    Conflict: 409,
};

/**
 * HttpError exception. 
 */
class HttpError extends Error {
    constructor(msg: string, status: number) {
        super(msg);

        this.status = status;

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, HttpError.prototype);
    }

    public status: number;
}

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

        if (!response.ok) {
            throw new HttpError('http POST failed', response.status);
        }

        return await response.json<T>();
    }

}

export default new Http();
export { StatusCodes, HttpError };
