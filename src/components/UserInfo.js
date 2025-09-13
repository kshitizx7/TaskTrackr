import useUserInfo from "../customHook.js/useUserInfo"

const UserInfo = ({user_name}) => {
    const userData = useUserInfo(user_name);
    console.log(userData);
    if(userData === null) return (<div>Loading....</div>)
    return (
        <div className="flex flex-col items-center mt-15 gap-3 border-solid-2 bg-gray-300 rounded-2xl mx-150 shadow-2xl">
            <div className="my-10 bg-yellow-400 rounded-full w-40 h-40 flex items-center justify-center shadow-2xl shadow-yellow-300">
                <img src={userData.avatar_url} className="w-38 h-38 rounded-full"/>
            </div>
            <h2 className="text-2xl text-gray-600 font-bold ">{userData.name}</h2>
            <p className="text-xl text-gray-600 italic">{"</>"} Developer</p>
            <p className="text-xl text-gray-600">📍{userData.location}</p>
            <button className="my-10 border-2 bg-yellow-400 font-bold rounded-lg p-2 cursor-pointer hover:bg-amber-700" onClick={()=> {window.open(`https://github.com/${userData.login}`)}} >
                Connect
            </button>
        </div>
    )
}

export default UserInfo;

