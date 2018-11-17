export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // Making async call
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Kalpesh',
            authorLastName: 'Sawant',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERR', err});
        })      
    }
}