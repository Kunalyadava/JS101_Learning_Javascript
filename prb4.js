let reg_email="abc@gmail.com";
let reg_pass="12345698";

let ent_email="abcd@gmail.com";
let ent_pass="12345698";

if(ent_email==reg_email){

  if(ent_pass==reg_pass){

    console.log("Login Successfull");
    
  } else {

    console.log("Incorrect Password");
    
  }
  
} else {

  console.log("Wrong Credentials");
  
}


