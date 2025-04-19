import { useEffect } from "react";

class AuthProvider extends Home{
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
                }
            })

        }

}
