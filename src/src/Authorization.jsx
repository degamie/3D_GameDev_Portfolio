const {user}=useAuth();
const {location}=uselocation();
if(user.usernane){
    userpermission=user.userpermission;
    const isAllowed=Permissions.some(allowed)=>userpermission.includes((allowed));
}