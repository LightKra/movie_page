const API = process.env.React_APP_API;
const API_TOKEN = process.env.React_APP_API_TOKEN;
console.log(API);
console.log(API_TOKEN);
export const get = async path=>{
    return await fetch(API + path,{
            headers: {
                "Authorization": "Bearer " + API_TOKEN,
                "Content-Type": "application/json;charset=utf-8"
            }
        }).then(result => {
            return result.json()
        }).catch(error =>{
            console.log(error)
        })
}