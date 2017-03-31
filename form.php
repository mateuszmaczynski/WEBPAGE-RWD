<?php
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['numberPhone'];
$message = $_POST['message'];
$sender = "mateuszmaczynski@gmail.com";
$recipient = "monti87@o2.pl";
$title = "Formularz kontaktowy ze strony klawparkiet.pl";
$information = "";
$information .= "Imię i nazwisko: " . $name . "\n";
$information .= "Email: " . $email . "\n";
$information .= "Numer telefonu: " . $number . "\n";
$information .= "Wiadomość: " . $message . "\n";
$header = "";
$header .= "Od:" . $sender . " \n";
$header .= "Content-Type:text/plain;charset=utf-8";
$success = mail($recipient, $title, $information, $header);
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=http://www.klawparkiet.pl/confirmation.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=http://www.klawparkiet.pl/error.html\">";
}
?>
