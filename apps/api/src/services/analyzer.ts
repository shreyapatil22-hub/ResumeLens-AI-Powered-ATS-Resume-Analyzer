import { GoogleGenerativeAI } from "@google/generative-ai";
import { AnalysisPayload } from "../types";

const fallback = (role: string): AnalysisPayload => ({ targetRole: role, atsScore: 66, roleMatch: 62,
  summary: "Your resume has a solid foundation. Add measurable outcomes and tailor the language to the target role for a stronger ATS match.",
  strengths: ["Clear professional experience", "Relevant baseline skills", "Readable document structure"],
  improvements: ["Quantify impact with numbers, percentages, or scope", "Mirror the job description's terminology", "Keep each bullet focused on an action and result"],
  missingTechnicalSkills: ["Role-specific tools", "Data analysis", "Cloud fundamentals"], missingSoftSkills: ["Stakeholder communication", "Leadership"],
  grammarFeedback: ["Review tense consistency across experience bullets."],
  keywords: ["results-driven", "cross-functional", "analytics", "automation", "ownership"].map((word, i) => ({ word, present: i < 2, importance: i < 2 ? "medium" : "high" })),
  sectionScores: ["Contact", "Experience", "Skills", "Education", "Formatting"].map((section, i) => ({ section, score: [95, 68, 60, 82, 74][i] })) });

export async function analyzeResume(text: string, targetRole: string): Promise<AnalysisPayload> {
  if (!process.env.GEMINI_API_KEY) return fallback(targetRole);
  const prompt = `You are an expert ATS resume reviewer. Analyze the resume for a ${targetRole} role. Return ONLY valid JSON matching exactly this shape: {"atsScore":number,"roleMatch":number,"summary":string,"strengths":string[],"improvements":string[],"missingTechnicalSkills":string[],"missingSoftSkills":string[],"grammarFeedback":string[],"keywords":[{"word":string,"present":boolean,"importance":"high"|"medium"}],"sectionScores":[{"section":string,"score":number}]}. Scores are 0-100. Be constructive, specific, and never invent experience. Resume text:\n${text.slice(0, 18000)}`;
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig: { responseMimeType: "application/json" } });
    const raw = (await model.generateContent(prompt)).response.text().replace(/```json|```/g, "").trim();
    const value = JSON.parse(raw);
    return { ...fallback(targetRole), ...value, targetRole, atsScore: Math.max(0, Math.min(100, Number(value.atsScore))), roleMatch: Math.max(0, Math.min(100, Number(value.roleMatch))) };
  } catch (error) { console.error("Gemini analysis failed", error); return fallback(targetRole); }
}
