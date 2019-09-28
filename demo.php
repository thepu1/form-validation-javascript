
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Validation</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
</head>
<body>
<input type="text" id="email">
<input type="text" id="dd" value="">
<script src="assets/js/main-jquery.js"></script>
<script>
    $('#email').blur(function () {
        var emailId = $('#email').val();
        $.ajax({
            method:'post',
            url:'validation.php?',
            data:'email='+emailId,
            success:function (data) {
              $('#dd').val(data);
            }
        })
    })
</script>
</body>
</html>
