<?php
    $name = $_POST['name'];
    if(!$name) {
        header('Location:/');
        die();
    }

    $db_host = 'localhost';
    $db_user = 'htw';
    $db_pass = '748aSgl5Ni';
    $db_name = 'htw_web';

    $con = mysql_connect($db_host, $db_user, $db_pass);
    mysql_query("SET NAMES UTF8");
    mysql_select_db($db_name, $con);

    $query = "SELECT tomail FROM susers WHERE email = 'wj'";
    $result = mysql_query($query, $con);
    $row = mysql_fetch_row($result);

    if (mysql_num_rows($result))
    {
        $tomail = $row[0];
    }

    $query_admin = "SELECT admin_email FROM admin WHERE email = 'admin'";
    $result_admin = mysql_query($query_admin, $con);
    $row_admin = mysql_fetch_row($result_admin);

    if (mysql_num_rows($result_admin))
    {
        $tomail_admin = $row_admin[0];
    }
?>
<!DOCTYPE html>
<html lang="zh-tw">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
</head>
<body>
<?php
    ini_set("display_errors", "On");
    date_default_timezone_set("Asia/Taipei");
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $user_email = $_POST['email'];
    $city = $_POST['city'];
    $area = $_POST['area'];
    $msg = $_POST['msg'];
    $datetime = date ("Y-m-d H:i:s" , mktime(date('H'), date('i'), date('s'), date('m'), date('d'), date('Y'))) ; 
    $utm_source = $_POST['utm_source'];
    $utm_medium = $_POST['utm_medium'];
    $utm_content = $_POST['utm_content'];
    $utm_campaign = $_POST['utm_campaign'];
    
    $case_name = "立信吾界";

    // echo $name;
    // echo "<br>";
    // echo $sex;
    // echo "<br>";
    // echo $phone;
    // echo "<br>";
    // echo $email;
    // echo "<br>";
    // echo $event_time;
    // echo "<br>";
     //echo $datetime;
    // echo "<br>";
    // echo $utm_source;
    // echo "<br>";
    // echo $utm_medium;
    // echo "<br>";
    // echo $utm_content;
    // echo "<br>";
    // echo $utm_campaign;

    require_once('php-mailer/PHPMailerAutoload.php'); //引入phpMailer 記得將路徑換成您自己的path
   
    $mail= new PHPMailer(); //建立新物件 
    $mail->IsSMTP(); //設定使用SMTP方式寄信 
    $mail->SMTPAuth = true; //設定SMTP需要驗證 
    $mail->Host = "cp31.g-dns.com"; //設定SMTP主機 
    $mail->Port = 25; //設定SMTP埠位，預設為25埠。 
    $mail->CharSet = "utf-8"; //設定郵件編碼 

    $mail->Username = "service@h35.tw"; //設定驗證帳號 
    $mail->Password = "Lix800.lix35tw"; //設定驗證密碼 

    $mail->From = "noreply@h35.tw"; //設定寄件者信箱 
    $mail->FromName = $case_name." - 官網網站"; //設定寄件者姓名 

    $mail->Subject = $case_name." - 官網網站"; //設定郵件標題 
    $mail->Body = "網站：https://wj.h35.tw/<BR>姓名：".$name."<BR>電話：".$phone."<BR>信箱：".$user_email."<BR>城市：".$city.$area."<BR>留言：".$msg."<BR><BR>填表日期：".$datetime."<BR>廣告來源：".$utm_source."<BR>廣告媒介：".$utm_medium."<BR>廣告名稱：".$utm_campaign."<BR>廣告內容：".$utm_content; //設定郵件內容 
    $mail->IsHTML(true); //設定郵件內容為HTML 
    
    $tomail_arr = explode(",",$tomail);
    $tomail_admin_arr = explode(",",$tomail_admin);

    foreach($tomail_arr as $email)
    {
       $mail->AddAddress("$email");
    }

    // $mail->AddAddress("justinyeh0919@gmail.com"); 
    //設定收件者郵件及名稱 

    // $mail->AddBCC("edc7655@gmail.com"); 
    // $mail->AddBCC("justinyeh0919@gmail.com"); 
    // $mail->AddBCC("hivyf99@gmail.com"); 
    // $mail->AddBCC("vi0937452646@gmail.com"); 
    // $mail->AddBCC("lichi.adfa@gmail.com"); 

    foreach($tomail_admin_arr as $email_admin)
    {
       $mail->AddBCC("$email_admin");
    }

    if(!$mail->Send()) { 
    echo "Mailer Error: " . $mail->ErrorInfo;
    } else { 
    //echo "Message sent!"; 
    } 
    
?>
<script src="js/jquery.js"></script>

<script type="text/javascript">
document.location.replace('formThanks');
</script>
</body>
</html>