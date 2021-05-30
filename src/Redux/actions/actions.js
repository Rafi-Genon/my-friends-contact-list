export const addContact = (contact) => {
    return {
        type: 'CREATE_CONTACT',
        payload: contact
    }
}

export const addText = (txt) => {
    return {
        type: 'ADD_TEXT',
        payload: txt
    }
}

export const deleteContact = (id) => {
    return {
        type: 'DELETE_CONTACT',
        payload: id
    }
}

export const updateContact = (id) => {
    return {
        type: 'UPDATE_CONTACT',
        payload: id
    }
}

export const getContact = (id) => {
    return {
        type: 'GET_CONTACT',
        payload: id
    }
}

