const userData = (records = [] , action) => {
    switch(action.type) {
        case 'FETCHUSER' :
            return action.payload

        case 'UPDATEUSER':
            return records.map((record) => record._id === action.payload._id ? action.payload : record)

        case 'DELETEUSER' : 
            return action.payload

        case 'ERROR' : 
            return action.payload

        default : 
            return []
    }
}

export default userData