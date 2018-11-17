export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // Making async call
        dispatch({type: 'CREATE_PROJECT', project});
    }
}