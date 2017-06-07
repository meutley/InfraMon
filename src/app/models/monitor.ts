import { WebRequest } from './web-request';
import { Ping } from './ping';

export class Monitor {
    _id: string;
    name: string;
    type: string;
    webRequestDetails: WebRequest;
    pingDetails: Ping;
    frequencyAmount: number;
    frequencyPeriod: string;
    isActive: boolean;

    constructor() {
        this._id = '';
        this.name = '';
        this.type = '';
        this.frequencyPeriod = '';
        this.webRequestDetails = new WebRequest();
        this.pingDetails = new Ping();
    }
}
