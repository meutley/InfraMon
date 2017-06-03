import { WebRequest } from './web-request';
import { Ping } from './ping';

export class Monitor {
    id: number;
    name: string;
    type: string;
    webRequestDetails: WebRequest;
    pingDetails: Ping;
    frequencyAmount: number;
    frequencyPeriod: string;

    constructor() {
        this.id = 0;
        this.webRequestDetails = new WebRequest();
        this.pingDetails = new Ping();
    }
}
