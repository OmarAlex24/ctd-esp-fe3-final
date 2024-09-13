import { useAppContext } from "./utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useAppContext();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`flex justify-around items-center p-4 mb-8 w-full shadow-md ${state.theme === 'dark' ? 'bg-gray-800' : 'bg-white'} `}>
      <div className="flex-shrink-0 flex items-center">
        <span className={`text-3xl font-bold ${state.theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          <span className="text-red-600 ">D</span>H Odonto
        </span>
      </div>

      <div className="flex items-center">
        <Link to="/" className={`px-3 py-2 rounded-md text-md font-medium ${state.theme === 'dark' ? 'text-gray-200 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>Home</Link>
        <Link to="/contact" className={`px-3 py-2 rounded-md text-md font-medium ${state.theme === 'dark' ? 'text-gray-200 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>Contact</Link>
        <Link to="/favs" className={`px-3 py-2 rounded-md text-md font-medium ${state.theme === 'dark' ? 'text-gray-200 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>Favs</Link>
        <button
          onClick={toggleTheme}
          className={`ml-4 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${state.theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-500'}`}
        >
          <span className="sr-only">Toggle dark mode</span>
          {state.theme === 'dark' ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>


      </div>
    </nav>
  )
}

export default Navbar