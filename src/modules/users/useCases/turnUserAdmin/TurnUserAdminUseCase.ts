import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui

    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error(`User ${user_id} doest exist!`);
    }

    const userTurnAdmin = this.usersRepository.turnAdmin(userExists);

    return userTurnAdmin;
  }
}

export { TurnUserAdminUseCase };
