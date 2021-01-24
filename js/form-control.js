$("form").on("submit", e => {
    e.preventDefault();

    $(".user-input").removeClass("input-error");
    $(".error-msg-visible").removeClass("error-msg-visible");
    $(".msg").addClass("error-msg");
    $(".msg").html("");

    var firstName   = $("#first-name")[0].value;
    var lastName    = $("#last-name")[0].value;
    var email       = $("#email")[0].value;
    var password    = $("#password")[0].value;
    
    if(firstName.length === 0){
        $("#first-name").addClass("input-error");
        $(".first-name").removeClass("error-msg");
        $(".first-name").html("<small><em>First Name cannot be empty</em></small>");
        $(".first-name").addClass("error-msg-visible");
    }
    
    if(lastName.length === 0){
        $("#last-name").addClass("input-error");
        $(".last-name").removeClass("error-msg");
        $(".last-name").html("<small><em>Last Name cannot be empty</em></small>");
        $(".last-name").addClass("error-msg-visible");
    }
    
    if(email.length === 0){
        $("#email").addClass("input-error");
        $(".email").removeClass("error-msg");
        $(".email").html("<small><em>Email cannot be empty</em></small>");
        $(".email").addClass("error-msg-visible");
    } else if(!emailIsValid(email)) {
        $("#email").addClass("input-error");
        $(".email").removeClass("error-msg");
        $(".email").html("<small><em>Looks like this is not an email</em></small>");
        $(".email").addClass("error-msg-visible");
    }
    
    if(password.length === 0){
        $("#password").addClass("input-error");
        $(".password").removeClass("error-msg");
        $(".password").html("<small><em>Password cannot be empty</em></small>");
        $(".password").addClass("error-msg-visible");
    }

    function emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
      
});