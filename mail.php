<?php
sleep(2);
$recepient = "#";
$sitename = "my site";
$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$text = trim($_POST["message"]);
$message =  "Имя: $name \nТелефон: $tel \nСообщение: $text ";
$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
