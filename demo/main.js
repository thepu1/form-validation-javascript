function checkName(){
    var name = $('#name').val();
    var reg   =  /^[a-zA-Z -.]{2,6}$/;
    if(reg.test(name)){
        $('#error_name').html('');
        return true;
    }
    else {
        $('#error_name').html('First Name should be 2 to 5 character');
        return false;
    }
}


$('#name').keyup(function () {
    checkName();
})

function checkEmail(){
    var email = $('#email').val();
    var reg   =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if(reg.test(email)){
        $('#error_email').html('');
        return true;
    }
    else {
        $('#error_email').html('Invalid Email Address');
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
            document.getElementById('error_email').innerHTML = data;
            // $('#error_email').html(data);
            if (data == 'Email allready taken') {
                document.getElementById('btn').disabled = true;
                // $('#btn').attr("disabled", true)


            } else {
                document.getElementById('btn').disabled = false;
                // $('#btn').attr("disabled", false)

            }
        }
    })
})

function checkPassword(){
    var password = $('#password').val();
    var reg   =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(reg.test(password)){
        $('#error_password').html('');
        return true;
    }
    else {
        $('#error_password').html('Password must be 1 lowercse & uppercase character 1 special character');
        return false;
    }
}

$('#password').keyup(function () {
    $('#error_password').html('');
})
$('#password').click(function () {
    $('#error_password').html('Password must be 1 lowercse & uppercase character 1 special character');
})

$('#password').blur(function () {
   checkPassword();
})

$('#passwordCheck').click(function () {
    var passwordAttr =$('#password').attr('type');
    if(passwordAttr == 'password'){
        $('#password').attr('type','text');
    }
    else {
        $('#password').attr('type','password');
    }

})



function confirmPassword(){
    var password  = $('#password').val();
    var cpassword = $('#cpassword').val();
    if(password == cpassword){
        $('#error_cpassword').html('');
        return true;
    }
    else {
        $('#error_cpassword').html('Password & Confirm Password dose not match');
        return false;
    }
}

$('#cpassword').blur(function () {
    confirmPassword();
})

$('#cpassword').keyup(function () {
    $('#error_cpassword').html('');
})

$('#cpassword').click(function () {
    $('#error_cpassword').html('Password & Confirm Password dose not match');
})



function checkGender(){
    var gender = $('input[type="radio"]:checked').val();
    if(gender == 'male' || gender == 'female'){
        $('#error_gender').html('');
        return true;
    }
    else {
        $('#error_gender').html('Please give the gender info');
        return false;
    }
}

$('#gender').blur(function () {
    checkGender();
})

function checkDistrictName(){
    var districtName = $('#district').val();
    if(districtName == ' '){
        $('#error_district').html('Please give us District Name');
        return false;
    }
    else {
        $('#error_district').html('');
        return true;
    }
}

$('#district').blur(function () {
    checkDistrictName();
})

$('#form').submit(function () {
    if (checkName() == true && checkEmail() == true && checkPassword() == true && confirmPassword() == true && checkGender() == true && checkDistrictName() == true) {
        return true;
    }
    else{
        return false;
    }
})

