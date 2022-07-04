import {  Controller, Post, Body } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { ApiError, User } from "./UserInfo";
import { EmailResetPasswordCredential, ResetPasswordCredential, UserCredentials } from "./Credentials";


@ApiTags("auth")
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

@Post('sign_up')
async signUp(@Body() body: UserCredentials):Promise<User | ApiError> {
  return await this.authService.signUp(body);
}

@Post('send_email_reset_password')
async sendEmailResetPassword(@Body() body: EmailResetPasswordCredential) {
  return await this.authService.sendEmailToResetPassword(body)
}

@Post('reset_password')
async resetPassword(@Body() body: ResetPasswordCredential) {
  return await this.authService.resetPassword(body)
}
}
