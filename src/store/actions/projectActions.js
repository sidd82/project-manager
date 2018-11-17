export const createProject = (project) => {
    return (dispatch, getState) => {
        // Making async call
        dispatch({type: 'CREATE_PROJECT', project});
    }
}