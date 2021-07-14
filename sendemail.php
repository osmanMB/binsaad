<?php

    if( $_SERVER['REQUEST_METHOD']=='POST' && isset( $_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message'] ) ){

        $name           = trim(stripslashes($_POST['name'])); 
        $from           = trim(stripslashes($_POST['email'])); 
        $phonenumber    = trim(stripslashes($_POST['phonenumber'])); 
        $message        = trim(stripslashes($_POST['message'])); 
        $to             = 'osman792@live.com';//replace with your email
        $headers        = array();


        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-type: text/plain; charset=iso-8859-1";
        $headers[] = "From: {$name} <{$from}>";
        $headers[] = "Reply-To: <{$from}>";
        $headers[] = "Subject: {$subject}";
        $headers[] = "X-Mailer: PHP/".phpversion();

        $result=mail( $to, $subject, $message, implode( "\r\n", $headers ) );

        exit( header( 'Location: index.php?mailsent='.$result ) );
    }
?>