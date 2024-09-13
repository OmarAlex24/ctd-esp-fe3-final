import Card from "../Components/Card";
import { useAppContext } from '../Components/utils/global.context'

const Favs = () => {

  const { state } = useAppContext();

  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
      <h1 className={`text-3xl font-bold mb-6 ${state.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Dentists Favs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {state.favs.map((dentist) => (
          <Card
            key={dentist.id}
            dentist={dentist}
          />
        ))}
      </div>
    </main>
  );
};

export default Favs;
