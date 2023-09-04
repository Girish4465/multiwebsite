function adduser(){
    user_name = document.getElementById("user_name").value;
    
    localStorage.setItem("name of the user",user_name);
    
    window.location("user_name")
}
