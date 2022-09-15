import React, { useEffect, useState } from "react";

const LoadingOrEmpty: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return loading ? (
    <div>
      <h1>Carregando...</h1>
    </div>
  ) : (
    <h1>Nenhum anúncio encontrado</h1>
  );
};

export default LoadingOrEmpty;
