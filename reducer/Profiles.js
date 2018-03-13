const profiles = [
    {
        id: '1',
        name: 'Jon'
    },
    {
        id: '2',
        name: 'Kane'
    },
    {
        id: '3',
        name: 'Rusvelt'
    },
    {
        id: '4',
        name: 'Konan'
    },
    {
        id: '5',
        name: 'Mario'
    }
]

export default function createProfiles(state = profiles, action) {
    if (action.type === 'ADD_PROFILE' && action.new !== '') {
        return [
            ...state,
            action.new
        ];
    }
    else if (action.type === 'CREATE_NAME' && action.new !== '') {
        let list = [...state]
        for (let i = 0; i < list.length; i++) {
            if (action.id === list[i].id) {
                list[i].name = action.new;
                console.log(list);
                return list;
            }
        }
    }
    else if(action.type==='GET_NEW_LIST'){
        return action.newList;
    }
    return state;
}