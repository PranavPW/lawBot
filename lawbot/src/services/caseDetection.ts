export interface CaseTypeInfo {
  type: string;
  subtype?: string;
  confidence: number;
  keywords: string[];
}

export async function detectCaseType(message: string): Promise<CaseTypeInfo> {
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama2',
        prompt: `Analyze this legal query and classify it into a case type: "${message}"
                Return JSON with: type, subtype, confidence (0-1), relevant keywords`,
        stream: false
      })
    });

    const data = await response.json();
    return JSON.parse(data.response);
  } catch (error) {
    console.error('Case detection error:', error);
    return {
      type: 'general',
      confidence: 0,
      keywords: []
    };
  }
}