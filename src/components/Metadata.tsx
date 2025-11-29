import React, { useState, useEffect } from 'react';
import { api } from '../api';

const Metadata: React.FC = () => {
  const [metadata, setMetadata] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api.getMetadata()
      .then(setMetadata)
      .catch(() => setMetadata(null))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-red-900 mb-3">Capability Statement</h2>
      {loading ? <p>Loading...</p> : metadata ? <pre>{JSON.stringify(metadata, null, 2)}</pre> : <p>Error loading metadata</p>}
    </div>
  );
};

export default Metadata;
