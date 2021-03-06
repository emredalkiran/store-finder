import UserController from './user-controller'
import express from 'express'
import { Router } from '../base-classes/interfaces'
import ServiceContainer from '../service-container'

export class UserRouter implements Router {
  
  app: express.Application
  userController : UserController
  constructor (app: express.Application, container: ServiceContainer) {
    this.app = app
    this.userController = new UserController(container.userService)
    this.setRoutes()
  }
  setRoutes() {
    this.app.post('/login', (req: express.Request, res: express.Response) => this.userController.login(req, res))
    this.app.post('/signup', (req: express.Request, res: express.Response) => this.userController.signup(req, res))
  }
}