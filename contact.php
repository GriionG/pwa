
<?php 

session_start();


// Acceder a la variable de sesión 'discapacidad'
if(isset($_SESSION['discapacidad'])) {
    @$discapacidad = $_SESSION['discapacidad'];
    // Aquí puedes utilizar la variable $discapacidad según sea necesario en tu página index.php
    // Por ejemplo, puedes cambiar el estilo de la página según la discapacidad del usuario
    // if($discapacidad == 'daltonismo') {
    //     // Cambiar el estilo para usuarios con daltonismo
    //     echo '<link href="css/style-daltonismo.css" rel="stylesheet">';
    // }
}

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>GoalGear</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="eCommerce HTML Template Free Download" name="keywords">
        <meta content="eCommerce HTML Template Free Download" name="description">

        <!-- Favicon -->
        <link href="img/favicon.ico" rel="icon">

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Source+Code+Pro:700,900&display=swap" rel="stylesheet">

        <!-- CSS Libraries -->
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
        <link href="lib/slick/slick.css" rel="stylesheet">
        <link href="lib/slick/slick-theme.css" rel="stylesheet">
   <!-- Template Stylesheet -->
   <?php
    // Verificar si el usuario tiene la discapacidad de daltonismo
    if(@$discapacidad == 'Daltonico') {
        // Cambiar el enlace al archivo CSS si el usuario tiene daltonismo
        echo '<link href="css/style-daltonico.css" rel="stylesheet">';
    }elseif(@$discapacidad == 'Miope'){
        echo '<link href="css/.css" rel="stylesheet">';
    }elseif(@$discapacidad == 'Ciego'){
        echo '<link href="css/.css" rel="stylesheet">';
    }elseif(@$discapacidad == 'Ninguna'){
        echo '<link href="css/style1.css" rel="stylesheet">';
    }else{
        echo '<link href="css/style1.css" rel="stylesheet">';
    }
    // Agrega más condiciones según sea necesario para otros tipos de discapacidad
    ?>
    </head>
    <?php 
require 'bd/conexion_bd.php';

$obj = new BD_PDO();

@$datos =  $obj->Ejecutar_Instruccion("Select * from usuarios where id_usuario = '".@$_SESSION['id_usuario']."'" );
@$user = $datos[0][3]
?>
    <body>
        <!-- Top bar Start -->
        <div class="top-bar">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <i class="fa fa-envelope"></i>
                        Goalgear@gmail.com
                    </div>
                    <div class="col-sm-6">
                        <i class="fa fa-phone-alt"></i>
                        +52-878-137-0387
                    </div>
                </div>
            </div>
        </div>
        <!-- Top bar End -->
        
       <!-- Nav Bar Start -->
       <div class="nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="#" class="navbar-brand">MENU</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                         <div class="navbar-nav mr-auto">
                            <a href="index.php" class="nav-item nav-link ">Inicio</a>
                            <a href="product-list.php" class="nav-item nav-link">Productos</a>
                            <a href="cart.php" class="nav-item nav-link">Carrito</a>
                            <a href="my-account.php" class="nav-item nav-link">Conocenos</a>
                                <?php
                                 if (@$_SESSION['privilegio']=='Usuario' | @$_SESSION['privilegio']=='Admin') {
                                 ?>
                               <a href="contact.php" class="nav-item nav-link active">Contactanos</a>
                                <?php } 
                                else 	{
                                ?>
                                    <a href="register.php" class="nav-item nav-link">Registrarse</a>
                                    <?php } ?>
                            </div>
                        </div>
                                <?php
                                 if (@$_SESSION['privilegio']=='Usuario' | @$_SESSION['privilegio']=='Admin') {
                                 ?>
                                <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" style="padding-right:60px;"><?php echo @$user?></a>
                                <div class="dropdown-menu">
                                    <a href="porfile.php" class="dropdown-item">Perfil</a>
                                    <?php
                                 if ($_SESSION['privilegio']=='Admin') {
                                 ?>
                                 <a href="brands.php" class="dropdown-item">Admin</a> 
                                 <?php } ?>
                                    <a href="cerrar_sesion.php" class="dropdown-item">Cerrar sesion</a>
                                </div>
                            </div>
                                 <?php } 
                                else 	{
                                ?>

                            <a href="login.php" class="nav-item nav-link"  style="padding-right:80px;">Iniciar sesion</a>
                            <?php } ?>                    
							</ul>
                    </div>
                </nav>
            </div>
        </div>
        <!-- Nav Bar End -->    
        
        <!-- Bottom Bar Start -->
        <div class="bottom-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-3">
                        <div class="logo">
                            <a href="index.php">
                                <img style="max-width: 60%; height: 100px; width: 60%;" src="img/Logo-goal.png" alt="Logo">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="search">
                        <form action="product-list.php" method="post">
                                                <input type="text"  class="form-control" name="txtbuscar" id="txtbuscar" placeholder="Buscar">
                                                <button type="submit" name="btnbuscar" id="btnbuscar" class="btn"><i class="fa fa-search"></i></button>
                                </form>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="user">
                            <a href="wishlist.html" class="btn wishlist">
                                <i class="fa fa-heart"></i>
                                <span>(0)</span>
                            </a>
                            <a href="cart.html" class="btn cart">
                                <i class="fa fa-shopping-cart"></i>
                                <span>(0)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Bottom Bar End -->
        
        <!-- Breadcrumb Start -->
        <div class="breadcrumb-wrap">
            <div class="container-fluid">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.php">Inicio</a></li>
                    <li class="breadcrumb-item"><a href="product-list.php">Productos</a></li>
                    <li class="breadcrumb-item active">Contacto</li>
                </ul>
            </div>
        </div>
        <!-- Breadcrumb End -->
        
        <!-- Contact Start -->
        <div class="contact">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="contact-info">
                            <h2>Nuestras Oficinas</h2>
                            <h3><i class="fa fa-map-marker"></i>Plaza Innova, Piedras Negras, MX</h3>
                            <h3><i class="fa fa-envelope"></i>GoalGear@gmail.com</h3>
                            <h3><i class="fa fa-phone"></i>+52-878-137-0387</h3>
                            <div class="social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="contact-info">
                            <h2>Nuetras Tiendas</h2>
                            <h3><i class="fa fa-map-marker"></i>Plaza Innova, Piedras Negras, MX</h3>
                            <h3><i class="fa fa-envelope"></i>GoalGearstore@gmail.com</h3>
                            <h3><i class="fa fa-phone"></i>+52-878-137-0387</h3>
                            <div class="social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="contact-form">
                            <form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="Nombre" style="width: 180px;" />
                                    </div>
                                    <div class="col-md-6">
                                        <input type="email" class="form-control" placeholder="Correo" style="width: 180px; "/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Motivo" style="width: 384px;"/>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" rows="5" placeholder="Mensaje" style="width: 384px;"></textarea>
                                </div>
                                <div><button class="btn" type="submit">Enviar</button></div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.0509552169065!2d-100.55864243961999!3d28.686597944453197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865f8bb632065d1f%3A0xe8453bbfe468f337!2sPlaza%20INOVA!5e0!3m2!1ses-419!2sus!4v1708731958985!5m2!1ses-419!2sus"  frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact End -->
        
        <!-- Footer Start -->
         <!-- Footer Start -->
         <div class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Contactanos</h2>
                            <div class="contact-info">
                                <p><i class="fa fa-map-marker"></i>Plaza Innova, Piedras Negras, MX</p>
                                <p><i class="fa fa-envelope"></i>GoalGear@gmail.com</p>
                                <p><i class="fa fa-phone"></i>+52-878-137-0387</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Siguenos</h2>
                            <div class="contact-info">
                                <div class="social">
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Empresa</h2>
                            <ul>
                                <li><a href="#">Conocenos</a></li>
                                <li><a href="#">Politica de privacidad</a></li>
                                <li><a href="#">Terminos y Condiciones</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Mas informacion</h2>
                            <ul>
                                <li><a href="#">Politicas de pagos</a></li>
                                <li><a href="#">Politicas de compras</a></li>
                                <li><a href="#">Politicas de devoluciones</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="row payment align-items-center">
                    <div class="col-md-6">
                        <div class="payment-method">
                            <h2>Aceptamos:</h2>
                            <img src="img/payment-method.png" alt="Payment Method" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="payment-security">
                            <h2>Protegido por:</h2>
                            <img src="img/godaddy.svg" alt="Payment Security" />
                            <img src="img/norton.svg" alt="Payment Security" />
                            <img src="img/ssl.svg" alt="Payment Security" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->
        
        <!-- Footer Bottom Start -->
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 copyright">
                       
                    </div>

                    <div class="col-md-6 template-by">
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer Bottom End -->       
        
        <!-- Back to Top -->
        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        
        <!-- JavaScript Libraries -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/slick/slick.min.js"></script>
        
        <!-- Template Javascript -->
        <script src="js/main.js"></script>
    </body>
</html>
