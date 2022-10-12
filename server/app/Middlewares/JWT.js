import jwt from "jsonwebtoken";
const { sign, verify } = jwt;

export default {
  async createToken(user) {
    const accessToken = await sign(
      { email: user.email, id: user.id },
      "jwtsecrets"
    );
    return accessToken;
  },

  async validateToken(req, res, next) {
    const accessToken = req.cookies("access-token");

    if (!accessToken) {
      return res.status(400).send("User not authenticated!");
    }

    try {
      const validToken = await verify(accessToken, "jwtsecrets");
      if (validToken) {
        req.authenticated = true;
        return next();
      }
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
};
