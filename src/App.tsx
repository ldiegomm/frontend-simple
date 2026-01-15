import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState<string>('Cargando...');
  const [timestamp, setTimestamp] = useState<string>('');
  const [source, setSource] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // URL del API local
    const API_URL = 'https://localhost:7137/api/hello';
    
    axios.get(API_URL)
      .then(response => {
        setMessage(response.data.message);
        setTimestamp(response.data.timestamp);
        setSource(response.data.source);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error conectando con API:', err);
        setError('No se pudo conectar con el API');
        setLoading(false);
      });
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      fontFamily: 'Arial',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ fontSize: '48px', color: '#2c3e50', marginBottom: '20px' }}>
        🏥 Centro Adulto Mayor
      </h1>
      <h2 style={{ fontSize: '32px', color: '#34495e', marginBottom: '20px' }}>
        POC de Hosting
      </h2>
      
      {loading && (
        <p style={{ fontSize: '24px', color: '#7f8c8d' }}>
          ⏳ Cargando mensaje del API...
        </p>
      )}
      
      {error && (
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '24px', color: '#e74c3c', marginBottom: '10px' }}>
            ❌ {error}
          </p>
          <p style={{ fontSize: '16px', color: '#7f8c8d' }}>
            Asegurate que el API esté corriendo en Visual Studio
          </p>
        </div>
      )}
      
      {!loading && !error && (
        <>
          <p style={{ fontSize: '28px', marginBottom: '10px', fontWeight: 'bold' }}>
            {message}
          </p>
          <p style={{ fontSize: '20px', color: '#27ae60', marginBottom: '10px' }}>
            ✅ Comunicación con API exitosa
          </p>
          <p style={{ fontSize: '18px', color: '#3498db', marginBottom: '5px' }}>
            📡 Fuente: {source}
          </p>
          <p style={{ fontSize: '16px', color: '#95a5a6' }}>
            🕐 Timestamp API: {timestamp}
          </p>
        </>
      )}
      
      <p style={{ fontSize: '16px', color: '#7f8c8d', marginTop: '20px' }}>
        📅 Cliente: {new Date().toLocaleString('es-CR')}
      </p>
    </div>
  );
}

export default App;