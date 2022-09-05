import { User, UserAttribute } from "../Model/Model";

export class AuthService {
    public async login(userName: string, password: string): Promise<User | undefined> {
        if (userName === 'user' && password === "1234") {
            return {
                userName,
                email: 'some@Email.com'
            }
        } else {
            return undefined
        }
    }

    public async getUserAttributes(user: User): Promise<UserAttribute[]> {
        const result: UserAttribute[] = []
        result.push({
            name: "Description",
            value: "Best User Ever!"
        })
        result.push({
            name: "Job",
            value: "Software Engineer"
        })
        result.push({
            name: "Age",
            value: "22"
        })
        result.push({
            name: "Experience",
            value: "Center Centre"
        })
        return result
    }
}