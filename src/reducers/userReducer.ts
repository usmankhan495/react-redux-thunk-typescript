import Action from "../interface/reducer.interface";

export default (state=[],action:Action)=>{
    switch(action.type){
        case 'FETCH_USER':
        return [...state,action.payload];
        default:
         return state;
    }
}