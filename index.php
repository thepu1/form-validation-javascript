<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Validation</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
      <div class="row justify-content-center mt-5 mb-5">
          <div class="col-md-7 mt-5 mb-5">
              <div class="card">
                  <h4 class="card-header bg-warning text-center text-light">Registration Form :</h4>
                  <div class="card-body">

                      <form method="post" action="validation.php" id="form">
                      <div class="form-group row">
                          <label for="fname" class="col-md-3 col-form-label">First Name</label>
                          <div class="col-md-9">
                              <input type="text" name="fname" class="form-control" id="fname">
                              <span class="text-danger" id="fname_error"></span>
                          </div>
                      </div>

                      <div class="form-group row">
                          <label for="lname" class="col-md-3 col-form-label">Last Name</label>
                          <div class="col-md-9">
                              <input type="text" name="lname" class="form-control" id="lname">
                              <span class="text-danger" id="lname_error"></span>
                          </div>
                      </div>

                      <div class="form-group row">
                          <label for="email" class="col-md-3 col-form-label">Email</label>
                          <div class="col-md-9">
                              <input type="text" class="form-control" name="email" id="email">
                              <span class="text-danger" id="email_error"></span>
                          </div>
                      </div>

                      <div class="form-group row">
                          <label for="password" class="col-md-3 col-form-label">Password</label>
                          <div class="col-md-9">
                              <input type="password" name="password" class="form-control" id="password">
                              <input type="checkbox" id="show_password">
                              <span class="text-danger" id="password_error"></span>
                          </div>
                      </div>

                      <div class="form-group row">
                          <label for="cpassword" class="col-md-3 col-form-label">Confirm Pass</label>
                          <div class="col-md-9">
                              <input type="password" name="cpassword" class="form-control" id="cpassword">
                              <span class="text-danger" id="cpassword_error"></span>
                          </div>
                      </div>
                      <div class="form-group row">
                          <label for="gender" class="col-md-3 col-form-label">Gender Info</label>
                          <div class="col-md-9">
                              <input type="radio" id="gender" name="gender" value="male">Male
                              <input type="radio" id="gender" name="gender" value="female">Female
                              <span class="text-danger" id="gender_error"></span>
                          </div>
                      </div>
                      <div class="form-group row">
                          <label for="district" class="col-md-3 col-form-label">District Name</label>
                          <div class="col-md-9">
                              <select name="district" id="district" class="form-control">
                                  <option value=" ">Select District Name</option>
                                  <option value="dhake">Dhaka</option>
                                  <option value="rajshahi">Rajshahi</option>
                                  <option value="khulna">Khulna</option>
                              </select>
                              <span class="text-danger" id="district_error"></span>
                          </div>
                      </div>

                          <div class="form-group col-md-12 row">
                              <div class="col-md-3"></div>
                           <div class="col-md-5 ">
                                  <input type="submit" class="btn btn-dark btn-block" name="btn" id="btn" value="Submit">
                           </div>
                          </div>
                      </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  <script src="assets/js/main-jquery.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>