import { baseUrl } from "../config/const";

async function loginUser(username: string,password: string):Promise<any|null>{
    const res = await fetch (`${baseUrl}/auth/login`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
    const result = await res.json();
    if(result.accessToken){
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("username", result.username);
        return result;
    }else{
        return null;
    }
}

export default{
    loginUser,
};