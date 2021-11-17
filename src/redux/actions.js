export const GET_USER = 'GET_USER'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const getUser=()=>{
    try {
        return async dispatch =>{
            const result= await fetch(API_URL,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await result.json()
            if(json){
                dispatch({
                    type:GET_USER,
                    payload: json
                })
            }else{
                console.log('unable to fetch')
            }
        }
    }catch(error)
    {
        console.log(error)
    }
}