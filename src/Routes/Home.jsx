import { useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useAppContext } from '../Components/utils/global.context'

const Home = () => {

  const { state, dispatch } = useAppContext();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const limitedDentists = response.data.slice(0, 8);
        dispatch({ type: 'SET_DENTISTS', payload: limitedDentists });
      })
      .catch(error => console.error('Error fetching dentists:', error));
  }, [dispatch]);

  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className={`text-3xl font-bold mb-6 ${state.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Dentists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {state.dentists.map((dentist) => (
          <Card
            key={dentist.id}
            dentist={dentist}
            username={dentist.username}
            name={dentist.name}
            id={dentist.id}
            image={`/images/doctor.jpg`}
          />
        ))}
      </div>
    </main>

  )
}

export default Home