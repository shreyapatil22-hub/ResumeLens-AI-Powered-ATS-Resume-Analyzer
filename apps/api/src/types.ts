import { Types } from "mongoose";
import type { Request } from "express";

export type AnalysisPayload = {
  targetRole: string; atsScore: number; roleMatch: number; summary: string;
  strengths: string[]; improvements: string[]; missingTechnicalSkills: string[];
  missingSoftSkills: string[]; keywords: { word: string; present: boolean; importance: "high" | "medium" }[];
  grammarFeedback: string[]; sectionScores: { section: string; score: number }[];
};

export interface AuthRequest extends Request { userId?: Types.ObjectId | string }
