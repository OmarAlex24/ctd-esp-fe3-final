import { Link } from "react-router-dom";
import { useAppContext } from "./utils/global.context";
import FavBtn from "./FavBtn";
const doctorImg = '/images/doctor.jpg';

const Card = ({ key, dentist }) => {
  const { state } = useAppContext();
  const { theme } = state;

  return (
    <div key={key} className={`overflow-hidden shadow-lg rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="p-6">
        <div className="flex items-center">
          <img src={doctorImg} className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-600 mr-4" />
          <div className="ml-4">
            <h2 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{dentist.name}</h2>
            <h3 className={`text-md font-light ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>{dentist.username}</h3>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Link to={`/dentist/${dentist.id}`} className={`text-sm font-medium ${theme === 'dark' ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'}`}>
            Ver detalles
          </Link>
          <FavBtn dentist={dentist} />
        </div>
      </div>
    </div>
  );
};

export default Card;
