import { useDispatch } from 'react-redux'
import { AppDispatch } from '../state'

export const useActions = () => useDispatch<AppDispatch>()
