import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(String(user_id));

    if (!user) throw new Error("User doesn't exist");

    if (user.admin === false) throw new Error("This user is not an admin");

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
