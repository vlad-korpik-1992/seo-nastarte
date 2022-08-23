<?php
    use PHPMailer\PHPMailer\PHPMailer;

    use PHPMailer\PHPMailer\Exception;

    use PHPMailer\PHPMailer\SMTP;



    require 'phpmailer/Exception.php';

    require 'phpmailer/PHPMailer.php';

    require 'phpmailer/SMTP.php';
    
    $name = $_POST['name'];
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

    <b>Планируемый бюджет:</b> $answer<br>
    
    <b>Сообщение:</b> $message<br/>

    ");
    
    $messageTelegram = "<b>Заявка с сайта</b> web.nastarte.by %0A<b>Имя:</b> ".$name."%0A<b>Телефон:</b> ".$phone. "%0A<b>Планируемый бюджет:</b> ".$answer. "%0A<b>Сообщение:</b> ".$message;
    $token = '';
    $chat_id = '';
    $sendTextToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$messageTelegram}");
    
    if($sendTextToTelegram){
        echo "ok";
    }else{
        echo "Error";
    }

    $mail->addAddress('v.korpik2010@yandex.com');
    $mail->addAddress('pm@nastarte.by');
    $mail->addAddress('sales@nastarte.by');

    if(!$mail->send()) {

        echo 'Сообщение не может быть отправлено.';

        echo 'Ошибка: ' . $mail->ErrorInfo;

        exit;

    }

    else{

        echo 'Сообщение отправлено.';

    }
?>