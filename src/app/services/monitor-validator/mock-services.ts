import { Ping } from '../../models/ping';
import { WebRequest } from '../../models/web-request';

export class MockPingTypeValidatorService {
    validate(pingDetails: Ping): boolean {
        return true;
    }
}

export class MockWebRequestTypeValidatorService {
    validate(webRequestDetails: WebRequest): boolean {
        return true;
    }
}
