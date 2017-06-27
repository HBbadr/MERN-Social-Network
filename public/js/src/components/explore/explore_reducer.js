const explore_defaults = {
    explores: []
}

const explore = (state=explore_defaults, action) => {
    switch(action.type){
        case "GET_EXPLORES": {
            return { ...state, explores: action.payload }
        }
    }
    return state
}

export default explore