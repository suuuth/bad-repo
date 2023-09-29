import { AuthService } from './auth/auth.service';
import { AppService } from "./app.service";
export declare class AppController {
    private authService;
    private appService;
    constructor(authService: AuthService, appService: AppService);
    login(req: any, credentials: {
        username: string;
        password: string;
    }, res: any): Promise<any>;
    index(): string;
    protected(req: any): Promise<any>;
}
