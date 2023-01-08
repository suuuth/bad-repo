
import { Controller, Request, Post, UseGuards, Get, Render } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(
      private authService: AuthService,
      private appService: AppService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    console.log(req);
    return this.authService.login(req.user);
  }

  @Get()
  index() {
    return 'James Bebarski kisses boys';
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  protected(@Request() req): string {
    return req.user;
  }
}
