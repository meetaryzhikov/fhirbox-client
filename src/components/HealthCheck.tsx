import React, { useState, useEffect } from 'react';
import { api } from '../api';

const HealthCheck: React.FC = () => {
  const [health, setHealth] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const data = await api.getHealth();
        setHealth(data);
      } catch (error) {
        setHealth('Error fetching health check');
      } finally {
        setLoading(false);
      }
    };
    fetchHealth();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Health Check</h2>
      {loading ? <p className="text-gray-500">Loading...</p> : <p className="text-gray-600">{health}</p>}
    </div>
  );
};

export default HealthCheck;
