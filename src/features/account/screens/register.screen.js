import AccountRegister from '../components/AccountRegister.component';
export const RegisterScreen = () => {
  return (
    <div className="container mx-auto md:w-3/4 lg:w-3/5">
      <div className="flex min-h-screen flex-col md:flex-row justify-center items-center">
        <div className="bg-blue-500 rounded-3xl transform rotate-2 w-3/4 max-w-md p-1">
          <div className="h-full w-full text-gray-800 rounded-3xl transform shadow-lg bg-gradient-to-br  from-white to-gray-200 -rotate-2 px-4 py-4">
            <h1 className="text-xl mb-4">Register</h1>
            <AccountRegister />
          </div>
        </div>
      </div>
    </div>
  );
};
