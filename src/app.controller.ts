
import { Controller, Request, Body, Response, Post, UseGuards, Get } from '@nestjs/common';
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
  async login(
      @Request() req,
      @Body() credentials: { username: string; password: string },
      @Response() res
  ): Promise<any> {
    try {
      const login = await this.authService.login(req.user);
      // res.cookie('accessToken', login.access_token, {
      //   expires: new Date(new Date().getTime() + 30 * 1000),
      //   sameSite: 'strict',
      //   httpOnly: true,
      // })
      return res.send(login)
    } catch (error) {
      throw error
    }
  }

  @Get()
  index() {
    return 'James Bebarski kisses boys';
  }

  @UseGuards(JwtAuthGuard)
  @Post('protected')
  async protected(@Request() req): Promise<any> {
    console.log(req.ip);
    return true;
  }
}
