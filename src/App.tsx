function App() {
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
      <p style={{ fontSize: '24px', marginBottom: '10px' }}>
        Hola Mundo desde la Nube ☁️
      </p>
      <p style={{ fontSize: '20px', color: '#27ae60', marginBottom: '10px' }}>
        ✅ Sistema funcionando correctamente
      </p>
      <p style={{ fontSize: '16px', color: '#7f8c8d' }}>
        {new Date().toLocaleString('es-CR')}
      </p>
    </div>
  );
}

export default App;