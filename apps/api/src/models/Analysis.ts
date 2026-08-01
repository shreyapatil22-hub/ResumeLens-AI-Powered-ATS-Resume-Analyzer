import mongoose, { InferSchemaType } from "mongoose";
const analysisSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  fileName: { type: String, required: true }, targetRole: { type: String, required: true },
  atsScore: Number, roleMatch: Number, summary: String, strengths: [String], improvements: [String],
  missingTechnicalSkills: [String], missingSoftSkills: [String], grammarFeedback: [String],
  keywords: [{ word: String, present: Boolean, importance: String }],
  sectionScores: [{ section: String, score: Number }]
}, { timestamps: true });
export type AnalysisDocument = InferSchemaType<typeof analysisSchema>;
export default mongoose.model("Analysis", analysisSchema);
