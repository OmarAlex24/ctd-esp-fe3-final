import { createContext, useReducer, useMemo, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer } from './contextUtils';

const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
    localStorage.setItem("theme", state.theme);
  }, [state.favs, state.theme]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAppContext = () => {
  const context = useContext(ContextGlobal);
  if (!context) {
    throw new Error('useAppContext debe ser usado dentro de un ContextProvider');
  }
  return context;
};