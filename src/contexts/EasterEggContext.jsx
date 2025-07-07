import React, { createContext, useContext, useReducer } from 'react';

const EasterEggContext = createContext();

const easterEggReducer = (state, action) => {
  switch (action.type) {
    case 'FIND_EASTER_EGG':
      if (state.foundEggs.includes(action.payload)) {
        return state; // Já foi encontrado
      }
      return {
        ...state,
        foundEggs: [...state.foundEggs, action.payload],
        count: state.count + 1,
        showPopup: true,
        lastFound: action.payload
      };
    case 'HIDE_POPUP':
      return {
        ...state,
        showPopup: false,
        lastFound: null
      };
    default:
      return state;
  }
};

const initialState = {
  foundEggs: [],
  count: 0,
  showPopup: false,
  lastFound: null,
  totalEggs: 12
};

export const EasterEggProvider = ({ children }) => {
  const [state, dispatch] = useReducer(easterEggReducer, initialState);

  const findEasterEgg = (eggId) => {
    dispatch({ type: 'FIND_EASTER_EGG', payload: eggId });
  };

  const hidePopup = () => {
    dispatch({ type: 'HIDE_POPUP' });
  };

  return (
    <EasterEggContext.Provider value={{
      ...state,
      findEasterEgg,
      hidePopup
    }}>
      {children}
    </EasterEggContext.Provider>
  );
};

export const useEasterEgg = () => {
  const context = useContext(EasterEggContext);
  if (!context) {
    throw new Error('useEasterEgg must be used within an EasterEggProvider');
  }
  return context;
};
