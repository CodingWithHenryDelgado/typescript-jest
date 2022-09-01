import { User, UserAttribute } from "../Model/Model";

export class AuthService {
    public async login(userName: string, password: string): Promise<User | undefined> {
        if (userName === 'user' && password === "1234") {
            return {
                userName,
                email: 'some@email.com'
            }
        } else {
            return undefined
        }
    }

    public async getUserAttributes(user: User): Promise<UserAttribute[]> {
        const result: UserAttribute[] = [];
        result.push({
            Name: "Description",
            Value: "Best User Ever!"
        })
        result.push({
            Name: "Job",
            Value: "Software Engineer"
        })
        result.push({
            Name: "Age",
            Value: "22"
        })
        result.push({
            Name: "Experience",
            Value: "Best User Ever!"
        })
        return result
    }
}