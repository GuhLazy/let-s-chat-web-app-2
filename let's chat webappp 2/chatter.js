function addUser() {
    user_name=document.getElementById("user_name_input").value;
    localStorage.setItem("username",user_name)
    window.location="chatter_room.html"
}