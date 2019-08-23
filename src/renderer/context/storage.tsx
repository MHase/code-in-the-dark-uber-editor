import React, { useReducer, createContext } from 'react';

const initialState = {
  name: window.localStorage.getItem('citdName') || '',
  url: window.localStorage.getItem('citdUrl') || '',
  content: window.localStorage.getItem('citdContent') || '',
};

const init = () => {
  return { ...initialState };
};

type IState = typeof initialState;

interface ContextState {
  state: IState;
  dispatch: (action: IAction) => void;
}

export const StorageContext = createContext<ContextState>({} as ContextState);

type IAction =
  | { type: 'updateName'; payload: string }
  | { type: 'updateUrl'; payload: string }
  | { type: 'updateContent'; payload: string };

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'updateName':
      window.localStorage.setItem('citdName', action.payload);
      return {
        ...state,
        name: action.payload,
      };
    case 'updateUrl':
      window.localStorage.setItem('citdUrl', action.payload);
      return {
        ...state,
        url: action.payload,
      };
    case 'updateContent':
      window.localStorage.setItem('citdContent', action.payload);
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

const StorageProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return <StorageContext.Provider value={{ state, dispatch }}>{props.children}</StorageContext.Provider>;
};

export default StorageProvider;
