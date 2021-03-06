import Token from './Token.js';
import AppStorage from './AppStorage';

class User{
    login(data) {
        axios.post('/api/auth/login', data) 
        .then(res=> this.responseafterlogin(res))
        .catch(error=>console.log(error.response.data))
    }

    responseafterlogin(res){
        const username = res.data.user;
        const access_token = res.data.access_token;
        console.log(access_token);
        AppStorage.store(username,access_token);
       // if(Token.isValid(access_token)){
         //   console.log(access_token);
           // AppStorage.store(username,access_token);
        //}
      

    }

    hasToken(){
        const storedToken = AppStorage.getToken();
        console.log(storedToken);
    }

    loggedIn(){
        return this.hasToken();
    }

    logOut(){
        AppStorage.clear();
    }

    name(){
        if(this.loggedIn()){
            return AppStorage.getUser();
        }
    }

    userId(){
        if(this.loggedIn()){
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub;
        }
    }
}

export default User = new User();