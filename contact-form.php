<?php
    # PDO DB 連線 Start
    $pdo=new pdo('mysql:host=localhost;dbname=htw_web','htw','748aSgl5Ni');
    $pdo->exec("SET NAMES 'utf8'");
    # PDO DB 連線 End

    $bCheck = true; //信件檢查

    # 取得 IP Start
    if (!empty($_SERVER["HTTP_CLIENT_IP"])){
        $sIp = $_SERVER["HTTP_CLIENT_IP"];
    } else if (!empty($_SERVER["HTTP_X_FORWARcht_FOR"])){
        $sIp = $_SERVER["HTTP_X_FORWARcht_FOR"];
    } else {
        $sIp = $_SERVER["REMOTE_ADDR"];
    }
    # 取得 IP End

    # 檢查是否時間範圍內重複留言 Start
    $sCheckMsg = ''; //檢查留言內容

    if ($_POST['msg'] == '') {
        $_POST['msg'] = '無留言';
    }

    if (($_COOKIE['msg'] != null) && ($_POST['msg'] != null)) {
        $sCheckMsg = $_COOKIE['msg'];
        setcookie ("msg", $_POST['msg'], time()+36400);
    } else {
        setcookie ("msg", $_POST['msg'], time()+36400);
    }


    if (($sCheckMsg === $_POST['msg'])) { //要三個等號, 不然 null 會等於 empty
        $bCheck = false;
    }
    # 檢查是否時間範圍內重複留言 End

    # 檢查所有關鍵字 Start
    $sql = "SELECT * FROM `block_message`";
    $aGetDbList = $pdo->query($sql)->fetchAll();

    $aFilterKeyWordList = array(); //留言關鍵字檢查初始化
    $aFilterNameList = array(); //檢查姓名初始化
    $aFilterEmailList = array();
    $aFilterPhoneList = array();
    $aFilterIpList = array();

    foreach ($aGetDbList as $sKey => $aGetDb) {

        switch ($aGetDb['type']) { //switch Start
            case '1': //留言內容
                $aFilterKeyWordList[] = $aGetDb['content'];
                break;
            case '2': //用戶名稱
                $aFilterNameList[] = $aGetDb['content'];
                break;
            case '3': //信箱
                $aFilterEmailList[] = $aGetDb['content'];
                break;
            case '4':
                $aFilterPhoneList[] = $aGetDb['content'];
                break;
            case '5':
                $aFilterIpList[] = $aGetDb['content'];
                break;
            default:
                # code...
                break;
        } //swutch End

    }
    # 檢查所有關鍵字 End

    # 檢查留言關鍵字 Start
    // $aFilterKeyWordList = array('game', 'casino', '測試', 'test');
    $checkConunt = 0;
    foreach ($aFilterKeyWordList as $key => $sFilterKeyWord) {
        $checkConunt = explode($sFilterKeyWord, $_POST['msg']);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查留言關鍵字 End

    # 檢查姓名 Start
    // $aFilterNameList = array('蔡銘聰');
    $checkConunt = 0;
    foreach ($aFilterNameList as $key => $sFilterName) {
        $checkConunt = explode($sFilterName, $_POST['name']);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查姓名 End

    # 檢查信箱 Start
    $checkConunt = 0;
    foreach ($aFilterEmailList as $key => $aFilterValue) {
        $checkConunt = explode($aFilterValue, $_POST['email']);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查信箱 End

    # 檢查電話 Start
    $checkConunt = 0;
    foreach ($aFilterPhoneList as $key => $aFilterValue) {
        $checkConunt = explode($aFilterValue, $_POST['phone']);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查電話 End

    # 檢查IP Start
    $checkConunt = 0;
    foreach ($aFilterIpList as $key => $aFilterValue) {
        $checkConunt = explode($aFilterValue, $sIp);
        if (count($checkConunt) > 1) {
            $bCheck = false;
        }
    }
    # 檢查IP End

    $db_host = 'localhost';
    $db_user = 'htw';
    $db_pass = '748aSgl5Ni';
    $db_name = 'htw_web';

    $con = mysql_connect($db_host, $db_user, $db_pass);
    mysql_query("SET NAMES UTF8");
    mysql_select_db($db_name, $con);

    $query = "SELECT tomail FROM susers WHERE email = 'cht'";
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

    $case_name = "長虹天際";

    require_once('php-mailer/PHPMailerAutoload.php'); //引入phpMailer 記得將路徑換成您自己的path

    $mail= new PHPMailer(); //建立新物件
    $mail->IsSMTP(); //設定使用SMTP方式寄信
    $mail->SMTPAuth = true; //設定SMTP需要驗證
    $mail->Host = "cp31.g-dns.com"; //設定SMTP主機
    $mail->Port = 25; //設定SMTP埠位，預設為25埠。
    $mail->CharSet = "utf-8"; //設定郵件編碼

    $mail->Username = "service@h35.tw"; //設定驗證帳號
    $mail->Password = "xu4vupAZ"; //設定驗證密碼

    $mail->From = "noreply@h35.tw"; //設定寄件者信箱
    $mail->FromName = $case_name." - 官網網站"; //設定寄件者姓名

    $mail->Subject = $case_name." - 官網網站"; //設定郵件標題
    $mail->Body = "網站：https://cht.h35.tw/<BR>姓名：".$name."<BR>電話：".$phone."<BR>信箱：".$user_email."<BR>城市：".$city.$area."<BR>留言：".$msg."<BR><BR>填表日期：".$datetime."<BR>廣告來源：".$utm_source."<BR>廣告媒介：".$utm_medium."<BR>廣告名稱：".$utm_campaign."<BR>廣告內容：".$utm_content; //設定郵件內容
    $mail->IsHTML(true); //設定郵件內容為HTML

    $tomail_arr = explode(",",$tomail);
    $tomail_admin_arr = explode(",",$tomail_admin);

    //檢查沒問題才寄出信件
    if ($bCheck == true) { //if start
        foreach($tomail_arr as $email)
        {
           $mail->AddAddress("$email");
        }

        foreach($tomail_admin_arr as $email_admin)
        {
           $mail->AddBCC("$email_admin");
        }

        if (!$mail->Send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
        } else {
            //echo "Message sent!";
        }
    } //if end

?>
<script src="js/jquery.js"></script>

<script type="text/javascript">
document.location.replace('formThanks');
</script>
</body>
</html>