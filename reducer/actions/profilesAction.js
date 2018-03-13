const newProfiles= [
    {
        id: '1',
        name: 'A'
    },
    {
        id: '2',
        name: 'A'
    },
    {
        id: '3',
        name: 'A'
    },
    {
        id: '4',
        name: 'A'
    },
    {
        id: '5',
        name: 'A'
    }
]
export const getNewProfiles = ()=>(dispatch)=>{
    setTimeout(()=>{
        console.log('I get Profile List!');
        dispatch({type:'GET_NEW_LIST', newList: newProfiles})
    }, 2000)
}