<?php
    use PHPMailer\PHPMailer\PHPMailer;

    use PHPMailer\PHPMailer\Exception;

    use PHPMailer\PHPMailer\SMTP;



    require 'phpmailer/Exception.php';

    require 'phpmailer/PHPMailer.php';

    require 'phpmailer/SMTP.php';
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $answer = $_POST['answer'];
    $message = $_POST['message'];
    
    $title = "Форма заказа с сайта web.naStarte.by";

    $mail = new PHPMailer();

    $mail->SMTPDebug = SMTP::DEBUG_SERVER; 

    $mail->isSMTP(); 

    $mail->Host = 'smtp.yandex.ru';

    $mail->SMTPAuth = true;

    //$mail->SMTPDebug = 2;

    $mail->Username = 'pinroll@yandex.ru';

    $mail->Password = 'gxoexxdnzxwkdmwk';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

    $mail->Port = 465;

    $mail->CharSet = 'UTF-8';

    $mail->Subject = $title;

    $mail->setFrom('pinroll@yandex.ru', 'web.nastarte.by');

    $mail->msgHTML("

    <h2>Детали заявки</h2>
    
    <b>Имя:</b> $name<br>

    <b>Мобильный номер телефона:</b> $phone<br>
    
    <b>Email:</b> $email<br>

    <b>Планируемый бюджет:</b> $answer<br>
    
    <b>Сообщение:</b> $message<br/>

    ");

    $mail->addAddress('v.korpik2010@yandex.com');

    if(!$mail->send()) {

        echo 'Сообщение не может быть отправлено.';

        echo 'Ошибка: ' . $mail->ErrorInfo;

        exit;

    }

    else{

        echo 'Сообщение отправлено.';

    }
?>