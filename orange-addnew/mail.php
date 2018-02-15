<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $myEmail = 'vajno.1997@gmail.com';
    $subject = ('Mesaj de la: ' . $name . '; ' .'mail: ' . $mail . '; ' . 'numar: ' . $phone . '; ' . 'Mesaj: ');

    mail($myEmail, $subject, $message);
}
?>