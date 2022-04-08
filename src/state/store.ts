import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers/repositoriesSlice'

export const store = configureStore({ reducer: { repositories: reducers } })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
