<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign-up | Surakshaa</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="min-h-screen flex bg-slate-800 bg-center bg-cover bg-blend-overlay bg-black/10 items-center justify-center" style="background-image: url('bgimage.jpg');">
        <div class="bg-gray-100 flex md:w-1/2 h-1/2 w-2/3 rounded-2xl shadow-lg max-w-3xl p-5" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50">
            <div class="xl:w-1/2 px-16">
                <h2 class="text-blue-900 font-bold text-2xl">Sign-up - Welcome to Surakshaa</h2>
                <p class="text-slate-900 font-light text-sm mt-4">Create your account</p>
                <?php
                    if(isset($_POST["submit"])){
                        $fullname = $_POST["firstname"];
                        $lastname = $_POST["lastname"];
                        $email = $_POST["email"];
                        $password = $_POST["password"];
                        $rpassword = $_POST["repeat_password"];
                        $passworHash = password_hash($password, PASSWORD_DEFAULT);


                        $error = array();
                        if(empty($fullname) OR empty($lastname) OR empty($email) OR empty($password) OR empty($rpassword)){
                            array_push($error, "All fields are required");
                        }
                        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                            array_push($error, "Email not valid");
                        }
                        if(strlen($password)<8){
                            array_push($error, "Password must be at least 8 characters long");
                        }
                        if($password !== $rpassword){
                            array_push($error, "Password does not match");
                        }
                        require_once "database.php";
                        $sql = "SELECT * FROM login_users WHERE email = '$email'";
                        $result = mysqli_query($conn, $sql);
                        $rowCount = mysqli_num_rows($result);
                        if ($rowCount>0){
                            array_push($error, "Email already exists!");
                        }
                        if (count($error)>0){
                            foreach ($error as $errors) {
                                echo "<div class='alert alert-danger'>Error: $errors </div>";
                            }                            
                        }
                        else{
                            require_once "database.php";
                            $sql = "INSERT INTO login_users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";
                            $stmt = mysqli_stmt_init($conn);
                            $prepareStmt = mysqli_stmt_prepare($stmt, $sql);
                            if($prepareStmt){
                                mysqli_stmt_bind_param($stmt,"ssss", $fullname, $lastname, $email, $passworHash);
                                mysqli_stmt_execute($stmt);
                                echo "<div>You are registered successfully.</div>";
                            }
                            else{
                                die("Something went wrong.");
                            }

                        }

                    }
                ?>
                <form action="signup.php" class="flex flex-col gap-4" method="post">
                    <div class="relative">
                    <input type="text" placeholder="First Name" name="firstname" id="fname" class="p-2 mt-8 rounded-xl border w-full">
                    <input type="text" placeholder="Last Name" name="lastname" id="lname" class="p-2 mt-2 rounded-xl border w-full">
                    <input type="email" name="email" id="email" placeholder="Email" class="p-2 mt-2 rounded-xl border w-full">
                    <input type="password" name="password" id="password" placeholder="Create Password" class="p-2 mt-2 rounded-xl border w-full">
                    <input type="password" name="repeat_password" id="password" placeholder="Confirm Password" class="p-2 mt-2 rounded-xl border w-full">
                    <!-- <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-3/4 right-3 -translate-y-1/2 mt-7" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg>
                    </button> -->
                </div>
                    <input type="submit" class="text-slate-900 bg-blue-900 text-white rounded-xl py-2 hover:text-slate-900 hover:bg-blue-300 mx-1 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300" name="submit" value="Sign-up">
                    <button type="submit" class="text-slate-900 bg-blue-900 text-white rounded-xl py-2 hover:text-slate-900 hover:bg-blue-300 mx-1 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300" name="submit"><a href="index.html">I want to try for free</a></button>

                </form>

                <!-- <div class="mt-10 grid grid-cols-3 items-center text-gray">
                    <hr class="border-gray-400">
                    <p class="text-center">OR</p>
                    <hr class="border-gray-400">
                </div>
                <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center hover:bg-blue-950 hover:text-blue-100 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" class="bi bi-google mr-3" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                      </svg>
                    Sign-up with Google
                </button> -->
                <!-- <div class="mt-10 text-sm border-b py-4">
                    <a href="#" class="hover:text-blue-800">Forgot your password?</a>
                </div> -->
                <div class="text-xs flex justify-between items-center mt-3">
                    <p>Already have an account ? </p>
                    <a href="login.php"><button class="py-2 px-3 bg-white border rounded-xl hover:bg-blue-900 hover:text-white">Login</button></a>
                </div>
            </div> 
            <div class="w-1/2  xl:block hidden">
                <img src="bg2.jpg" class="px-2 py-2 rounded-2xl-1" alt="">
            </div>
        </div>
      </section>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
    AOS.init();
  </script>

      <style>
        .rounded-2xl-1 {
            border-radius: 2rem;
        }
        body{
        overflow-x: hidden;
    }
    </style>
</body>
</html>