import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../types";
export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Authentication required." });
  try { req.userId = (jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }).userId; next(); }
  catch { return res.status(401).json({ message: "Your session has expired. Please sign in again." }); }
}
