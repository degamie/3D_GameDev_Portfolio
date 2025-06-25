class HireTalent{
        Candidates =new Array();
        name=null;
        age=null;
        gender=null;
        work_exp=null;
        college=null;
        course=null;
        Projects=null;HireTalent(){}
Resume_Upload(Candidates,message){
        if(name===null || age>0 ||  course===null  ||  college===null  ||  work_exp===null  ||  gender===null || Projects===null )return;
        while(Candidates.length()!==0){
                if(name>0 && age>0 && course>null && (gender=='male' || gender=='female'))message="Resume Uploaded Successfully";
                else message="Resume Hasn't Uploaded Successfully"; 
        }return message;
        
}//To Be Implemented 

}