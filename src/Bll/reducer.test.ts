import {getDataAC, Reducer, setErrorAC, setStatusAC, TypeInitialState} from "./reducer";

let state: TypeInitialState

beforeEach(() => {
    state = {
        data: [],
        error: '',
        status: 'free',

    }
})
test('setErrorAC', () => {
    const action = setErrorAC('Some Error')
    const result = Reducer(state, action)
    expect(result.error.length > 0).toBe(true)
    expect(result.error).toBe('Some Error')
})
test('setStatusAC', () => {
    const action = setStatusAC('success')
    const result = Reducer(state, action)

    expect(result.status).toBe('success')

})

test('getDataAC', () => {
    const action = getDataAC(['1','2','3','4','5'])
    const result = Reducer(state, action)

    expect(result.data.length===5).toBe(true)
    expect(result.data[0]).toBe('1')

})