function checkFirstName(){
    var fname =  $('#fname').val();
    var reg   =  /^[a-zA-Z -.]{2,6}$/;
    if(reg.test(fname)){
        $('#fname_error').html(' ');
        return true;
    }
    else{
        $('#fname_error').html('First Name should be 2 to 5 character');
        return false;
    }
}

$('#fname').keyup(function () {
    checkFirstName();
})

function checkLastName(){
    var lname =  $('#lname').val();
    var reg   =  /^[a-zA-Z -.]{2,6}$/;
    if(reg.test(lname)){
        $('#lname_error').html(' ');
        return true;
    }
    else{
        $('#lname_error').html('Lirst Name should be 2 to 5 character');
        return false;
    }
}

$('#lname').keyup(function () {
    checkLastName();
})


function checkEmail(){
    var email =  $('#email').val();
    var reg   =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;

    if(reg.test(email)){
        $('#email_error').html(' ');
        return true;
    }
    else{
        $('#email_error').html('Email address is invalid');
        return false;
    }
}

$('#email').keyup(function () {
    checkEmail();
})

$('#email').blur(function () {
    var emailId = $('#email').val();
    $.ajax({
        method: 'POST',
        url: 'validation.php?',
        data: 'email=' + emailId,
        success: function (data) {
            // document.getElementById('email_error').innerHTML = data;
            $('#email_error').html(data);
            if (data == 'Email allready taken') {
                //document.getElementById('btn').disabled = true;
                $('#btn').attr("disabled", true)


            } else {
                //document.getElementById('btn').disabled = false;
                $('#btn').attr("disabled", false)

            }
        }
    })
})



function checkPassword(){
    var password =  $('#password').val();
    var reg   =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(reg.test(password)){
        $('#password_error').html(' ');
        return true;
    }
    else{
        $('#password_error').html('Password must have 1 lowercase & uppercase letter 1 number & one special character like !,#,@,$,&,*');
         return false;
    }
}

$('#password').blur(function () {
    checkPassword();
})
$('#password').keyup(function () {
    $('#password_error').html(' ');
})
$('#password').click(function () {
    $('#password_error').html('Password must have 1 lowercase & uppercase letter 1 number & one special character like !,#,@,$,&,*');
})

$('#show_password').click(function () {
    var attrPassword = $('#password').attr('type');
    if(attrPassword=='password'){
        $('#password').attr('type','text');
    }
    else {
        $('#password').attr('type','password');
    }
})


function confirmPassword(){
    var confirmPassword = $('#cpassword').val();
    var password =  $('#password').val();
    if(password==confirmPassword){
        $('#cpassword_error').html(' ');
        return true;
    }
    else{
        $('#cpassword_error').html('password & confirm password dose not match');
        return false;
    }
}

$('#cpassword').keyup(function () {
    $('#cpassword_error').html(' ');
})
$('#cpassword').blur(function () {
    confirmPassword();
})
$('#cpassword').click(function () {
    $('#cpassword_error').html('password & confirm password should be same');
})

function genderInfo(){
    var gender = $('input[type="radio"]:checked').val();
    if(gender=='male' || gender == 'female'){
        $('#gender_error').html(' ');
        return true;
    }
    else {
        $('#gender_error').html('Please give your gender info')
        return false;
    }
}
$('#gender').blur(function () {
    genderInfo();
})

function districtName(){
   var district = $('#district').val();
   if(district == ' '){
       $('#district_error').html('Please give us district name');
       return false;
   }
   else {
       $('#district_error').html('');
       return true;
   }
}
$('#district').blur(function () {
    districtName();
})
$('#form').submit(function () {
    if (checkFirstName() == true && checkLastName() == true && checkEmail() == true && checkPassword() == true && confirmPassword() == true && genderInfo() == true && districtName() == true){
        return true;
    }
    else {
        return false;
    }
})

// $('#form').submit(function () {
//     if (checkFirstName() == true && checkEmail() == true) {
//         return true;
//     }
//     else {
//         return false;
//     }
// })
