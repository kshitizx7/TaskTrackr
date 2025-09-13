import { useState , useEffect } from "react"
import { USER_URL } from "../utils/constants";

const useUserInfo = (user_name) => {
    const[data,setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch(USER_URL+user_name);
            const json = await data.json();
            setData(json);
        }

        fetchData();
        
    } ,[user_name])

    return data;

}

export default useUserInfo;