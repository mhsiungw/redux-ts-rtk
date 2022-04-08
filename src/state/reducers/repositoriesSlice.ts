import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface RepositoriesState {
    loading: boolean
    error: string | null
    data: string[]
}

const initialState: RepositoriesState = {
    loading: false,
    error: null,
    data: [],
}

export const fetchRepositories = createAsyncThunk('repositories/fetchRepositories', async (term: string) => {
    console.log(term)
    const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
            text: term,
        },
    })

    const names = data.objects.map((result: any) => {
        return result.package.name
    })

    return names
})

const repositoriesSlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchRepositories.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchRepositories.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchRepositories.rejected, (state, action: any) => {
            state.loading = false
            state.error = action.payload
        })
    },
})

export default repositoriesSlice.reducer
