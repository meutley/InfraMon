import { Ping } from '../../models/ping';

export class MockPingTypeValidatorService {
    validate(pingDetails: Ping): boolean {
        return true;
    }
}