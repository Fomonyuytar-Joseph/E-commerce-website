const validation= (firstName ,lastName,email ,password ,Cpassword)=>{


    let errors={};

    if(firstName ===""){
        errors.firstName="Name is required"
    }

    if(lastName ===""){
        errors.lastName="Email is required"
    }
    if(!email){
        errors.email="Email is required"
    }
    

    if(!password){
        errors.password="Password is required"
    }else if(password.length<2){

        errors.password="password must be more than 2 characters"
    }

    if(!Cpassword){
        errors.Cpassword="Password is required"
    }
    else if(password !== Cpassword){
        errors.Cpassword="passwords do not match"
    }

     return errors;


}

export default validation