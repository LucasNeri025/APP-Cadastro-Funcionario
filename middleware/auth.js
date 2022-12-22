import Cookies from 'js-cookie';

export default function ({redirect}){
    
    let cookie;
    cookie = Cookies.get('tkn')
    if(cookie == undefined){
        console.log(cookie)
        return redirect('/')
    } 

}