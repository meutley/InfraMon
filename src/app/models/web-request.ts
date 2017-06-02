import { WebRequestMethod } from '../app.globals';

export class WebRequest {
    url: string;
    method: string;
    expectedResponseStatusCode: number;

    constructor() {
        this.method = WebRequestMethod.Get;
    }
}
