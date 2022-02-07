export const actions = {
    setName: "SET_NAME"
}

export const setName = name => ({
    type: actions.setName,
    payload: name
})