import { CanActivate, ExecutionContext } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { Observable } from "rxjs";
declare const WsAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class WsAuthGuard extends WsAuthGuard_base implements CanActivate {
    private userService;
    constructor(userService: UsersService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
export {};
