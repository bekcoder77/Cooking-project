import React, { createContext, useReducer } from "react";
const Context = createContext();

function ThemeContext({ children }) {
  const ChangeState = (state, action)=>{
		switch (action.type) {
			case "CHANGE_COlOR":
				return {...state, color: action.payload}
				break
				case "CHANGE_MODE":
					return {...state, mode: action.payload}
					break
				default: return state
			}
		}	
		
		const [state, dispatch] = useReducer(ChangeState , {
			mode: true
		});

		const changeNavColor = (color)=>{
			dispatch(
				{
					type: "CHANGE_COlOR",
					payload: color
				}
			)
		}

		const changeMode =(mode)=>{
			dispatch(
				{
					type: "CHANGE_MODE",
					payload: mode
				}
			)
		}
  return (
    <Context.Provider value={{...state,changeNavColor,changeMode}}>{children}</Context.Provider>
  );
}

export { ThemeContext, Context };
