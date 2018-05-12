function logout() {
    var req = new XMLHttpRequest();
    req.open("POST", "http://moro-system.herokuapp.com/admins/login", true);
    req.withCredentials = true;
    req.send();
    hide_error();
    location.href="index.html";

  }