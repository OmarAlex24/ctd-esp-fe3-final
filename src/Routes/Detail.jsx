import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAppContext } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom';
import FavBtn from '../Components/FavBtn';
const doctorImg = '/images/doctor.jpg';


const Detail = () => {
  const [dentist, setDentist] = useState({})

  const { state } = useAppContext();
  const { theme } = state;
  const { id } = useParams()

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    try {
      axios.get(`${url}/${id}`)
        .then(response => {
          setDentist(response.data)
        })
        .catch(error => console.error('Error fetching dentists:', error));
    } catch (error) {
      console.error('Error fetching dentists:', error)
    }
  }, [id]);

  if (!dentist) return <p className="text-center ">Loading...</p>;

  return (
    <div className={`shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto ${state.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="p-6">
        <div className='flex justify-between'>
          <div className="flex items-center mb-4">
            <img src={doctorImg} className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-600 mr-4" />
            <div>
              <h2 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{dentist.name}</h2>
              <p className={`text-lg font-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>Dentist</p>
            </div>
          </div>
          <FavBtn dentist={dentist} />
        </div>
        <div className="space-y-3">
          <div className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>
            <svg className="w-5 h-5 mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>{dentist.email}</span>
          </div>
          <div className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>
            <svg className="w-5 h-5 mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>{dentist.phone}</span>
          </div>
          <div className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>
            <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            </svg>
            <a href={`https://${dentist.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
              {dentist.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail