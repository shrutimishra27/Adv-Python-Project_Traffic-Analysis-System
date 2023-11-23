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
                                $errorMessages = implode("<div class='alert alert-danger'>Error: </div>", $errors );
                                // Pass error messages to the HTML page
                                header("Location: signup.html?error=" . urlencode($errorMessages));
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
                                // echo "<div>You are registered successfully.</div>";
                                header("Location: login.php");
                            }
                            else{
                                die("Something went wrong.");
                            }

                        }

                    }
                ?>