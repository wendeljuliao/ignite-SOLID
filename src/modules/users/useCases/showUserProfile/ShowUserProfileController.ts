import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;

      const showUserProfile = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).send(showUserProfile);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { ShowUserProfileController };
