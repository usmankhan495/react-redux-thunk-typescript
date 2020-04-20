import jsonplaceholder from "../apis/jsonplaceholder";
import _ from 'lodash'
export const fetchPosts = () =>  async (dispatch: any) => {
        const data = await jsonplaceholder.get("posts");
        dispatch({
            type: 'FETCH_POST', payload: data
        })
    }


export const fetchUser = (id: number) => {
    return async (dispatch ) => {
        const data = await jsonplaceholder.get(`users/${id}`);
        dispatch({ type: 'FETCH_USER', payload: data.data })
    }
}

export const fetchPostAndser = ( ) =>  async (dispatch: any,getState:any)=>   {
    
   await dispatch(fetchPosts())

   //console.log(getState().postReducer.data)
//    const userIds=_.uniq(_.map(getState().postReducer.data,'userId'))
//    userIds.forEach(id=>dispatch(fetchUser(id)))
  // console.log(userIds)

   _.chain(getState().postReducer.data)
   .map('userId')
   .uniq()
   .forEach(id=>dispatch(fetchUser(id)))
   .value()
}



//This will fetch user only onec.if you have to call it again for more user you have to make other action creator 
// export const fetchUser = (id: number) => {
//     return  (dispatch: Dispatch) => {
//        _fetchUser(id,dispatch)
//     }
// }

// const _fetchUser=_.memoize( async(id:number,dispatch:Dispatch)=>{
//     const data = await jsonplaceholder.get(`users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: data.data })
// });