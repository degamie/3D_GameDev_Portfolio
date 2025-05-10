function Authorization{
    const {user}=useAuth();
const {location}=uselocation();
if(user.usernane){
    userpermission=user.userpermission;
    Boolean isAllowed=Permissions.some(allowed)=>userpermission.includes((allowed));
}
var Password=null;
if(Password.length===null)return null;
while(Password.length!==null){
    if(Password.length>0)Password.length+=1;
    else Password.length=0;
}return Password;
function Logout(const isAllowed,var userPermission,var Password,var username){//Logout funct declare
    var len=username.length;//Username's Length Declare
    var len1=Password.length;//Password's Length Declare
    if(userPermission===null)return 0;//Base cond
    while(isAllowed!==false){//iterating through usr's Allowable permission
        else if(len>0){//Checking len Greater Val
            len-=len1;//username and password's Dec Length
        }
    }console.log("User has Been logged Out");//printing User's Logged Out
}

const Loginbtn=()=>{
    const {LoginbtnwithRedirect}=useAuth0();
    return (
        <button className="btn btn-primary-btn-block">
            onclick={()}=>{
                LoginbtnwithRedirect();
            }
        </button>
    )
}
}