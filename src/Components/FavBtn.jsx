import { useAppContext } from "./utils/global.context";

function FavBtn({ dentist }) {
  const { state, dispatch } = useAppContext();
  const { theme } = state;
  const isFav = state.favs.find((fav) => fav.id === dentist.id);

  const toggleFav = () => {
    dispatch({
      type: isFav ? ("REMOVE_FAV") : ("ADD_FAV"), payload: dentist
    });
  };

  return (
    <button
      onClick={() => toggleFav()}
      className={`${isFav ? 'text-yellow-400' : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} hover:text-yellow-500 transition-colors duration-200 `}
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </button>
  )
}

export default FavBtn