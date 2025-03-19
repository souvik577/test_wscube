

// if(isset($_POST['submit'])){
//     $name = $_POST['name'] ;
//     $email = $_POST['email'] ;
//     $post = $_POST['post'] ;
//     $refer = $_POST['refer'] ;


// $server = 'localhost';
// $username = "root" ;
// $password = "" ;
// $database = 'developers';

// $con = mysqli_connect($server,$username,$password,$database);

// $sql = "INSERT INTO register(name,email,post,refer)
// values('$name','$email','$post','$refer')" ;

// mysqli_query($con,$sql) ;
// }

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="#" method="POST">
            <input type="text" name="name" placeholder="Enter Your Name" required>
            <input type="email" placeholder="Enter Your Email" name="email" required>

            <input type="text" placeholder="post" name="post" required>
            <input type="text" placeholder="refer" name="refer" required>

            <input type="submit" value="Register" name="submit" class="send">
        </form>
</body>
</html>