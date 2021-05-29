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