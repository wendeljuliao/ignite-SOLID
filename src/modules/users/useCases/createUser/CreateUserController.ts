import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { name, email } = request.body;

    const createdUser = this.createUserUseCase.execute({ name, email });

    return response.status(201).send(createdUser);
  }
}

export { CreateUserController };
