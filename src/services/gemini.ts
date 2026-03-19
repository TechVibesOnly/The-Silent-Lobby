import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export interface AuditResult {
  score: number;
  structuredData: number;
  agentTrust: number;
  logicGate: number;
  apiDesign: number;
  monitoring: number;
  summary: string;
  recommendations: {
    dimension: string;
    action: string;
    impact: string;
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
  }[];
  dimensions: {
    name: string;
    score: number;
    summary: string;
    icon: string;
  }[];
}

export async function performAltoAudit(url: string): Promise<AuditResult> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform a simulated ALTO (Agent-Led Trust Optimization) audit for the website: ${url}. 
      Generate a realistic technical audit report for an AI procurement agent (like Salesforce Agentforce or Microsoft Copilot).
      
      Return the result in JSON format with the following structure:
      {
        "score": number (0-1000),
        "structuredData": number (0-100),
        "agentTrust": number (0-100),
        "logicGate": number (0-100),
        "apiDesign": number (0-100),
        "monitoring": number (0-100),
        "summary": "A brief 2-sentence summary of the site's AI visibility",
        "recommendations": [
          { "dimension": "string", "action": "string", "impact": "string", "priority": "HIGH|MEDIUM|LOW" }
        ],
        "dimensions": [
          { "name": "string", "score": number, "summary": "string", "icon": "Globe|Shield|Building2|Mail|IndianRupee" }
        ]
      }`,
      config: {
        responseMimeType: "application/json"
      }
    });

    const result = JSON.parse(response.text || '{}');
    return {
      score: result.score || 450,
      structuredData: result.structuredData || 40,
      agentTrust: result.agentTrust || 30,
      logicGate: result.logicGate || 50,
      apiDesign: result.apiDesign || 20,
      monitoring: result.monitoring || 10,
      summary: result.summary || "The website lacks critical structured data required for AI agent discovery.",
      recommendations: result.recommendations || [
        { dimension: "Logic Gate", action: "Implement JSON-LD for pricing transparency", impact: "High", priority: "HIGH" },
        { dimension: "API Design", action: "Expose OpenAPI spec for vendor discovery", impact: "High", priority: "HIGH" },
        { dimension: "Agent Trust", action: "Add machine-readable certifications", impact: "Medium", priority: "MEDIUM" }
      ],
      dimensions: result.dimensions || [
        { name: "Structured Data", score: 65, summary: "Basic schema.org tags detected but incomplete.", icon: "Globe" },
        { name: "Agent Trust", score: 45, summary: "Missing cryptographic proof of vendor identity.", icon: "Shield" },
        { name: "Logic Gate Content", score: 18, summary: "Content is too human-centric; agents can't parse pricing.", icon: "Building2" },
        { name: "API Design", score: 32, summary: "No public-facing machine discovery endpoints.", icon: "Mail" },
        { name: "Monitoring Readiness", score: 12, summary: "No way to track agent interactions currently.", icon: "IndianRupee" }
      ]
    };
  } catch (error) {
    console.error("Audit failed:", error);
    throw error;
  }
}
