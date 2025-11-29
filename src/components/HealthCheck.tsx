import React, { useState, useEffect } from 'react';
import { api } from '../api';

const HealthCheck: React.FC = () => {
  const [health, setHealth] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api.getHealth()
      .then(setHealth)
      .catch(() => setHealth('Error fetching health check'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Health Check</h2>
      {loading ? <p>Loading...</p> : <p>{health}</p>}
    </div>
  );
};

export default HealthCheck;