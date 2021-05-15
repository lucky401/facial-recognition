import { Navigation } from './infrastructure/navigation';
import { AuthenticationContextProvider } from './services/authentication/authentication.context';
function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </div>
  );
}

export default App;
