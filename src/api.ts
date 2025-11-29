const API_BASE = 'http://127.0.0.1:3001';

export const api = {
  getHealth: async (): Promise<string> => {
    const response = await fetch(`${API_BASE}/`);
    if (!response.ok) throw new Error('Failed to fetch health check');
    return response.text();
  },

  getMetadata: async (): Promise<any> => {
    const response = await fetch(`${API_BASE}/metadata`);
    if (!response.ok) throw new Error('Failed to fetch metadata');
    return response.json();
  },

  createPatient: async (patient: any): Promise<any> => {
    const response = await fetch(`${API_BASE}/Patient`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patient),
    });
    if (!response.ok) throw new Error('Failed to create patient');
    return response.json();
  },
};