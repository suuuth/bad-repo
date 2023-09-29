
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {Injectable, Logger} from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class WsStrategy extends PassportStrategy(Strategy) {

    private logger: Logger = new Logger('WsStrategy');
    constructor() {
        super();
        // super({
        //     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        //     ignoreExpiration: false,
        //     secretOrKey: jwtConstants.secret,
        // });
        this.logger.log('ws strat constructor running');
    }

    async validate(payload: any) {
        return {
            id: payload.sub,
            username: payload.username
        };
    }
}
