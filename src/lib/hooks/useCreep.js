import { CreepContext } from '../../components/context/CreepProvider'
import { useContext } from 'react'

export default function useCreep() {
  const creep = useContext(CreepContext)
  return creep
}