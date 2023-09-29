import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { UsersService } from "../users/users.service";
import { ExtractJwt } from "passport-jwt";
import { jwtConstants } from "./constants";
import { Observable } from "rxjs";

@Injectable()
export class WsAuthGuard extends AuthGuard('ws') implements CanActivate {
    constructor(private userService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();

        const validateRequest = (request: any) => {
            // console.log(request);



            return true;
        };

        return validateRequest(request);
    }

    // canActivate(
    //     context: any,
    // ): boolean | any | Promise<boolean | any> | Observable<boolean | any> {
    //     // const bearerToken = context.args[0].handshake.headers.authorization.split(' ')[1];
    //     try {
    //         const decoded = null;//jwt.verify(bearerToken, jwtConstants.secret) as any;
    //         return new Promise((resolve, reject) => {
    //             return this.userService.findOne(decoded.username).then(user => {
    //                 if (user) {
    //                     resolve(user);
    //                 } else {
    //                     reject(false);
    //                 }
    //             });
    //         });
    //     } catch (ex) {
    //         console.log(ex);
    //         return false;
    //     }
    // }
}
