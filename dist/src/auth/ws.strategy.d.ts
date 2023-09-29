import { Strategy } from 'passport-jwt';
declare const WsStrategy_base: new (...args: any[]) => Strategy;
export declare class WsStrategy extends WsStrategy_base {
    private logger;
    constructor();
    validate(payload: any): Promise<{
        id: any;
        username: any;
    }>;
}
export {};
