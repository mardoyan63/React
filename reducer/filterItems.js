const filter=''

export default function filterList(state=filter, action){
    if(action.type==='FILTER'){
        return action.filterText;
    }
    return state;
}