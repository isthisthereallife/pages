import React, {createContext, useReducer} from 'react'
import { creepReducer, CREEP_EVENTS } from '../../reducers/creepReducer'
import PropTypes from 'prop-types'

export const CreepContext = createContext()

const CreepProvider = ({children}) => {
  const [creep, creepDispatch] = useReducer(creepReducer, {
    id: null,
    currentPage: null,
    index: null,
    currentIndex: null,
    visits: [{}]
  })

  return (
    <CreepContext.Provider value={{ creep,
      creepDispatch } }> {children}
      </CreepContext.Provider>
  )
}

export async function loadInfo(creep, id){
  console.log("LADDAR creep: ",creep)
  if (id) {
    let temp = 1;
    temp = id;
    let res = await fetch(`http://localhost:8080/creep/get/id/${temp}`);
    let info = await res.json()

    creep.creepDispatch({
      payload:info,
      type: CREEP_EVENTS.APPEAR
    })
    return info
  }
  return {}
}
CreepProvider.propTypes = {
  children: PropTypes.array
}
export default CreepProvider



