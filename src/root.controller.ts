import { Controller, HttpStatus, Route } from '@entropy-kit/core';

export class RootController extends Controller {
  @Route.Get('/')
  public async index() {
    return await this.render('home', {
      message: 'Welcome to Entropy',
    });
  }

  @Route.Error()
  public async error(status: HttpStatus, message: string) {
    return await this.render('error', {
      status,
      message,
    });
  }
}
