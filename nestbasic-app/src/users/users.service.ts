import {Injectable} from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            _id: 1,
            name: "John Doe",
            email: "John@email.com",
            password: 'Hoily434131'
        },
        {
            _id: 2,
            name: "Emily Doe",
            email: "Emilydoe@gmail.com",
            password: '@milynDoe33131'
        }
    ]

    async findOneUser(name: string): Promise<User | undefined> {
        return this.users.find(user => user.name === name);
    }
}
