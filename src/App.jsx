import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <span>test</span>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: { duration: 3000 },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'theme(colors.stone.200)',
            color: 'theme(colors.stone.700)',
          },
        }}
      />
    </div>
  );
}

export default App;
