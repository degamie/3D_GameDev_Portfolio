RoutesPath(){


let userName=null;
const UserProfile(userName){//Fetching UsrProfile
    const {userName}=useParams();
    return  <div>UserProfile:<userName></userName></div> 
}
}
return <Route><Route path="/" element={<Home/>}/>
</Route>
