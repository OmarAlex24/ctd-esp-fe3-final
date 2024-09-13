const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const lsTheme = localStorage.getItem("theme") || 'light';


export const initialState = {
  theme: lsTheme,
  dentists: [],
  favs: lsFavs,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };

    case 'SET_DENTISTS':
      return {
        ...state,
        dentists: action.payload,
      };

    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.payload] };

    case 'REMOVE_FAV':
      {
        const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload.id)
        return { ...state, favs: filteredFavs };
      }


    default:
      throw new Error(`Acción desconocida: ${action.type}`);
  }
};