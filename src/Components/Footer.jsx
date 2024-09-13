import { useAppContext } from "./utils/global.context"


const Footer = () => {
  const { state } = useAppContext();
  const { theme } = state;

  return (
    <footer className={`flex justify-around items-center w-full shadow-lg ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
      <p className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Powered by</p>
      <img className={`${theme === 'dark' ? 'invert' : ''} `} src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
