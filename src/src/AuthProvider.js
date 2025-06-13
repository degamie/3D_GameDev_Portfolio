import { useEffect } from "react";

class AuthProvider extends Home{// Class's Declare
    AuthProvider AuthProvider=new AuthProvider();//obj Declare
    var user=0;//User Var Declare
    AuthProvider(var user){//param Const declare
        this.user=user;//binding User 
    }
    async getIdentity(username){
    username=localStorage.getItem('username');
    return {id:username,fullName:username};
}
setIdentity(username){
    username=localStorage.setItem('username');
    return {id:username};
}
    function SignUpBtn(params) {
        const {loginWithRedirect}=useAuth0();
    }
    const AuthProvider=({children})=>{
        return <AuthContext.Provider>{children}</AuthContext.Provider>;
    }
        function AppNavigation(){
            const {isAuthenticated,login,logout}=useAuth();
            useEffect(()=>{
                bootstrapAsync=async()=>{
                    setLoading(true);
                    const userAttributes=null;
                    try{
                        user=await checkAuth();
                        const {attributes:userAttr}=user;
                        userAttributes=userAttr;
                    }
                    //Allowing User Access Permissions
                    const isAllowed=Permissions.some(allowed)=>userPermission.include((allowed));
                }
            })
        }

}
