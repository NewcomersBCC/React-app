import { sign, verify } from "jsonwebtoken";

const createToken (user) => {
    const accessToken = sign({ email: user.email, id:user.id}, "jwtsecrets")
}