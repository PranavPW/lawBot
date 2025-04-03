export interface CasePrediction {
  likelihood: number;
  reasoning: string;
  similarCases: string[];
  ethicalConsiderations: string[];
  nextSteps: string[];
}

export async function analyzeCaseOutcome(
  chatHistory: string[],
  caseType: string,
  isEthicallySound: boolean
): Promise<CasePrediction | null> {
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama2',
        prompt: `As a legal expert, analyze this case. Chat history: ${chatHistory.join('\n')}
                Case type: ${caseType}
                Provide:
                1. Success likelihood (0-100%)
                2. Legal reasoning
                3. Similar precedent cases
                4. Ethical considerations
                5. Recommended next steps
                If case involves unethical/illegal actions, provide legal alternatives only.`,
        stream: false
      })
    });

    const data = await response.json();
    return JSON.parse(data.response);
  } catch (error) {
    console.error('Prediction error:', error);
    return null;
  }
}