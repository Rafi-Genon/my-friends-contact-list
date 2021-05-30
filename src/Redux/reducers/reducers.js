const intialState = {
    allContacts: [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "phone": "1-770-736-8031 x56442"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "phone": "010-692-6593 x09125",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "phone": "1-463-123-4447",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "phone": "493-170-9623 x156",
        },
    ],
    contact: null,
    aaaaaaaaaaaaaaaaaaaa: 'sd'

}

export const contactReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'CREATE_CONTACT': {
            return state
        }
        case 'ADD_TEXT': {
            return {
                ...state,
                allContacts: [...state.allContacts, action.payload]
            }
        }
        case 'DELETE_CONTACT': {
            return {
                ...state,
                allContacts: state.allContacts.filter((contact) => contact.id != action.payload)
            }
        }


        case 'GET_CONTACT':
            let arr = state.allContacts.filter((contact) => contact.id == action.payload);
            console.log(arr);
            arr = arr.values();
            console.log('arr after value', arr);
            for (let val of arr) {
                arr = val;
            }
            return {
                ...state,
                contact: arr,
            };

        case 'UPDATE_CONTACT':
            return {
                ...state,
                allContacts: state.allContacts.map((contact) =>
                    contact.id == action.payload.id ? action.payload : contact
                ),
            };
        default: {
            return state
        }
    }
}