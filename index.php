<?php
    $NewString = $_SERVER['HTTP_HOST'];

    $TryStrpos = strpos($NewString,'localhost');

    if($TryStrpos === false){
        $title = "";
        $description = "";
        $keyword = "";
        $caseurl = "sg";
        
        $db_host = 'localhost';
        $db_user = 'htw';
        $db_pass = '748aSgl5Ni';
        $db_name = 'htw_web';
        $con = mysql_connect($db_host, $db_user, $db_pass);
        mysql_query("SET NAMES UTF8");
        mysql_select_db($db_name, $con);
        $query = "SELECT title,description,keyword FROM susers WHERE email = 'sg'";
        $result = mysql_query($query, $con);
        $row = mysql_fetch_row($result);

        $title = $row[0];
        $description = $row[1];
        $keyword = $row[2];
    }
?>
<!DOCTYPE html>
<html lang="zh-tw">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="img/favicon.png?v3" />
    <title>SUPER TREE 超級花園｜千坪花園 景觀棟距 輕軌捷運｜官網</title>

    <!--SEO meta-->
    <meta
      name="title"
      content="SUPER TREE 超級花園｜千坪花園 景觀棟距 輕軌捷運｜官網"
    />
    <meta
      name="description"
      content="SUPER TREE 超級花園：散步距離就到捷運輕軌共構的樟樹灣站預定地，通車後可搭基隆南港輕軌線一站就到北市南港生活圈，接待中心：汐止區樟樹二路93號，預約專線：02-8642-1155"
    />
    <meta
      name="keywords"
      content="超級花園,汐止買房,南港買房,捷運輕軌,SUPER TREE"
    />
    <meta name="image" content="img/web_cover.jpg?ver=1" alt="立信吾界的圖片" />
    <meta
      property="og:title"
      content="SUPER TREE 超級花園｜千坪花園 景觀棟距 輕軌捷運｜官網"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:description"
      content="SUPER TREE 超級花園：散步距離就到捷運輕軌共構的樟樹灣站預定地，通車後可搭基隆南港輕軌線一站就到北市南港生活圈，接待中心：汐止區樟樹二路93號，預約專線：02-8642-1155"
    />
    <meta property="og:image" content="img/web_cover.jpg?v=1" />

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link
      href="vendor/fontawesome/css/font-awesome.min.css"
      type="text/css"
      rel="stylesheet"
    />
    <link href="vendor/animateit/animate.min.css" rel="stylesheet" />

    <!-- Vendor css -->
    <link href="vendor/owlcarousel/owl.carousel.css" rel="stylesheet" />
    <link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet" />

    <!-- Template base -->
    <link href="css/theme-base.css" rel="stylesheet" />

    <!-- Template elements -->
    <link href="css/theme-elements.css" rel="stylesheet" />

    <!-- Responsive classes -->
    <link href="css/responsive.css" rel="stylesheet" />

    <!--[if lt IE 9]>
      <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
    <![endif]-->

    <!-- Template color -->
    <link
      href="css/color-variations/green-light.css"
      rel="stylesheet"
      type="text/css"
      media="screen"
    />

    <!-- LOAD GOOGLE FONTS -->
    <link
      href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,800,700,600%7CRaleway:100,300,600,700,800"
      rel="stylesheet"
      type="text/css"
    />

    <!-- CSS CUSTOM STYLE -->
    <link
      rel="stylesheet"
      type="text/css"
      href="css/custom.css"
      media="screen"
    />

    <!-- FONTS -->
    <link
      rel="stylesheet"
      type="text/css"
      href="css/fonts.css?D=1225"
      media="screen"
    />
    <!-- Google map sensor -->
    <script
      type="text/javascript"
      src="//maps.google.com/maps/api/js?key=AIzaSyCZPGy58gR86bWU6-9CTM4Cmoq8aWynZh8"
    ></script>

    <!--VENDOR SCRIPT-->
    <script src="vendor/jquery/jquery-1.11.2.min.js"></script>
    <script src="vendor/plugins-compressed.js"></script>


    <!--YTPlayer-->
    <script src="http://pupunzi.com/mb.components/mb.YTPlayer/demo/inc/jquery.mb.YTPlayer.js"></script>

    <script type="text/javascript" src="vendor/jquery.blockUI.js"></script>

    <!-- Custom js file -->
    <script src="js/custom.js"></script>

    <script src="js/AddressSelectList.js"></script>

    <script type="text/javascript">
      window.onload = function() {
        AddressSeleclList.Initialize('selectcity', 'selectarea')
      }
    </script>
    
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NLL3TCD');</script>
    <!-- End Google Tag Manager -->
    
  </head>

  <body
    class="wide"
    data-animation-in="fadeIn"
    data-animation-out="fadeOut"
    data-animation-icon="oval.svg"
    data-speed-in="1000"
    data-speed-out="500"
  >
      
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NLL3TCD"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
    <!-- WRAPPER -->
    <div class="wrapper">
      <!-- TOPBAR -->
      <div
        id="topbar"
        class="bgimg2 topbar_m"
        style="border: none;display: none;"
      >
        <div
          class="container container_header"
          style="margin-right:0px;padding:0px;"
        >
          <!-- <div class="topbar-dropdown visible-lg visible-md">
                    <div class="title" onclick="document.location.href = 'tel:0222223333'"><i class="fa fa-phone" style="top:1px;"></i>立即來電：02-22223333</div>
                </div>
                <div class="topbar-dropdown visible-lg visible-md">
                    <div class="title" onclick="document.getElementById('formname').focus();"><i class="fa fa-edit" style="top:1px;"></i>預約賞屋</div>
                </div>
                <div class="topbar-dropdown visible-lg visible-md">
                    <div class="title"><i class="fa fa-user" style="top:0px;"></i>加入我們</div>
                </div>
                <div class="topbar-dropdown visible-lg visible-md">
                    <div class="title"><i class="fa fa-facebook" style="top:0px;"></i>粉絲專頁</div>
                </div> -->
          <!--下方是Mobile才會出現-->
          <div
            class="topbar-dropdown visible-xs visible-sm text-center"
            style="width:26%;border-right:0px;"
          >
            <div class="title" onclick="document.location.href = '#'">TOP</div>
          </div>
          <div
            class="topbar-dropdown visible-xs visible-sm  text-center"
            style="width:37%;"
          >
            <div
              class="title"
              onclick="document.location.href = 'tel:0222223333'"
            >
              立即來電
            </div>
          </div>
          <div
            class="topbar-dropdown visible-xs visible-sm  text-center"
            style="width:37%;"
          >
            <div
              class="title"
              onclick="document.getElementById('formname').focus();"
            >
              預約賞屋
            </div>
          </div>
        </div>
      </div>
      <!-- END: TOPBAR -->

      <!-- PC頂部 -->
      <header
        id="header"
        class="header-mini header-dark header-transparent bgimg visible-lg visible-md"
        style="position: fixed;width:100%;"
      >
        <div id="header-wrap">
          <div class="container-fluid">
            <!--LOGO-->
            <div id="logo">
              <a
                href="index.html"
                class="logo"
                data-dark-logo="images/logo-sm.png?d=0107"
              >
                <img
                  src="images/logo.png?d=0107"
                  alt="Logo"
                  style="height:80px;width:130px;visibility: hidden"
                />
              </a>
            </div>
            <!--END: LOGO-->

            <!--NAVIGATION-->
            <div
              class="navbar-collapse collapse main-menu-collapse navigation-wrap"
            >
              <nav id="mainMenu" class="main-menu mega-menu">
                <ul class="main-menu nav nav-pills">
                  <li>
                    <a href="#section-tree" class="nav-to"
                      >超級花園<span>Super Tree</span></a
                    >
                  </li>
                  <li>
                    <a href="#section-365" class="nav-to"
                      >365天都免息<span>Super Free</span></a
                    >
                  </li>
                  <li>
                    <a href="#section-10" class="nav-to"
                      >十項全能<span>Super 10</span></a
                    >
                  </li>
                  <li>
                    <a href="#section-rich" class="nav-to"
                      >富裕地段<span>Super Rich</span></a
                    >
                  </li>
                  <li>
                    <a href="#section-garden" class="nav-to"
                      >花園大城<span>Super Garden</span></a
                    >
                  </li>
                  <li>
                    <a href="#section-life" class="nav-to"
                      >超級生活<span>Super Life</span></a
                    >
                  </li>
                  <!-- <li> <a href="#section-SaleHouse" class="nav-to">廣告特惠</a> </li>
                                <li> <a href="#section-CF" class="nav-to">影片介紹</a> </li>
                                <li> <a href="#section-Traffic" class="nav-to">交通指引</a> </li>
                                <li> <a href="#section-Info" class="nav-to">建案資訊</a> </li> -->
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <!--Mobile NAVIGATION-->
      <div
        class="navbar-collapse collapse main-menu-collapse navigation-wrap visible-xs visible-sm "
        style="position: fixed;right:0;top:80px;z-index:1050;width:250px;background-color:#EFE903;visibility:visible;height:500px;overflow:scroll;right:-250px;"
        id="mobileMenu"
      >
        <nav id="mainMenu" class="main-menu mega-menu">
          <ul class="main-menu nav nav-pills">
            <li>
              <a href="#section-tree" class="nav-to m_nav-to">超級花園</a>
            </li>
            <li>
              <a href="#section-365" class="nav-to m_nav-to">365天都免息</a>
            </li>
            <li><a href="#section-10" class="nav-to m_nav-to">十項全能</a></li>
            <li>
              <a href="#section-rich" class="nav-to m_nav-to">富裕地段</a>
            </li>
            <li>
              <a href="#section-garden" class="nav-to m_nav-to">花園大城</a>
            </li>
            <li>
              <a href="#section-life" class="nav-to m_nav-to">超級生活</a>
            </li>
            <!-- <li>
              <a href="#section-OneBigImg" class="nav-to m_nav-to">建案主頁</a>
            </li>
            <li>
              <a href="#section-Pattern" class="nav-to m_nav-to">格局規劃</a>
            </li>
            <li><a href="#section-VR" class="nav-to m_nav-to">實境賞屋</a></li>
            <li>
              <a href="#section-skyPan" class="nav-to m_nav-to">空拍環景</a>
            </li>
            <li>
              <a href="#section-Event" class="nav-to m_nav-to">精彩活動</a>
            </li>
            <li>
              <a href="#section-News" class="nav-to m_nav-to">媒體報導</a>
            </li>
            <li>
              <a href="#section-SaleHouse" class="nav-to m_nav-to">廣告特惠</a>
            </li>
            <li><a href="#section-CF" class="nav-to m_nav-to">影片介紹</a></li>
            <li>
              <a href="#section-Traffic" class="nav-to m_nav-to">交通指引</a>
            </li>
            <li>
              <a href="#section-Info" class="nav-to m_nav-to">建案資訊</a>
            </li> -->
          </ul>
          <!-- <div class="m-t-20">
            <div class="text-center">
              <a class="button full-rounded medium mBtnOther" href="#"
                ><span><i class="fa fa-facebook"></i>粉絲專頁</span>
              </a>
            </div>
            <div class="text-center" style="padding-bottom:100px;">
              <a class="button full-rounded medium mBtnOther" href="#"
                ><span><i class="fa fa-user"></i>加入我們</span>
              </a>
            </div>
          </div> -->
        </nav>
      </div>

      <!-- Mobile頂部 -->
      <header
        id="header2"
        class="header-mini header-dark header-transparent bgimg visible-xs visible-sm "
        style="position: fixed;z-index:1060;width:100%;"
      >
        <div id="header-wrap">
          <div class="container container_header" style="height:80px;">
            <!--MOBILE MENU -->
            <div class="nav-main-menu-responsive" style="height:80px;">
              <button
                class="lines-button x"
                style="font-size:14px;"
                onclick="mobileMenuMove()"
              >
                <span class="lines"></span>
              </button>
            </div>
            <!--END: MOBILE MENU -->

            <!--LOGO-->
            <div id="logo">
              <a
                href="index.html"
                class="logo"
                data-dark-logo="images/logo-sm.png"
              >
                <img
                  src="images/logo.png"
                  alt="Logo"
                  style="height:50px;visibility: hidden;"
                />
              </a>
            </div>
            <!--END: LOGO-->
          </div>
        </div>
      </header>

      <div id="MyblockUI" onclick="MyblockUI_click()">
        <!-- 主視覺大圖 
        Go ti theme-functions inside function >> INSPIRO.inspiroSlider = function () {
        -->
        <!-- <div
          id="slider"
          class="inspiro-slider slider-fullscreen"
          data-height-xs="360"
        >
          <div
            class="slide background-overlay-dark"
            style="background-image:url('img/1.jpg');"
          ></div>
          <div
            class="slide background-overlay-dark"
            style="background-image:url('img/1.jpg');"
          ></div>
        </div> -->
        <!--span id="SkyPhoto">
            
        </span-->

        <!-- 一張大圖區塊 -->
        <section
          class="sectionMP hidden-sm hidden-xs"
          id="section-tree"
          style="background-image:url('img/pc-1-1-back.jpg')"
        >
          <div
            class="container"
            style="position: absolute;width: 432px;left: 380px;z-index: 2"
          >
            <!--heading-center（left、right） 標題位置-->
            <div
              class="heading heading-center m-b-40"
              data-animation="fadeIn"
              style="margin-top: 60px;"
            >
              <h2>讓建築懂得呼吸</h2>
              <h2>才能看見更開闊的人生風景</h2>
              <span class="lead">
                封閉的大樓住宅，走不出去的日子<br />
                偏遠的透天別墅，小院子多麼寂寞<br />
                南港往東走，喧囂少了，綠意多了，心也靜了下來...<br />
                『SUPERTREE』，以新加坡花園城市為藍圖，<br />
                讓建築懂得呼吸與留白<br />
                不汲汲營營於土地面積的最大使用率，<br />
                留下千坪的空間給花香、樹影、草徑、風道...<br />
                讓孩子可以盡情奔跑，讓人生下半場能和自然相濡以沫<br />
                從南港出發，5分鐘回到家，和嘈雜塵世說聲明天見<br />
                你不在紅塵，但你離紅塵不遠，<br />
                從此，每一天回家不再是地理活動，而是心靈活動
              </span>
            </div>
          </div>
          <div class="animation-bubble">
            <div
              class="bubbles"
              data-animation="fadeIn"
              data-animation-delay="200"
            >
              <img src="img/bubbles.png" alt="立信吾界的圖片" />
            </div>
          </div>
          <div class="container visible-sm visible-xs" style="">
            <!--heading-center（left、right） 標題位置-->
            <div
              class="heading heading-center m-b-40"
              data-animation="fadeIn"
            >
              <h2>讓建築懂得呼吸</h2>
              <h2>才能看見更開闊的人生風景</h2>
              <span class="lead">
                封閉的大樓住宅，走不出去的日子<br />
                偏遠的透天別墅，小院子多麼寂寞<br />
                南港往東走，喧囂少了，綠意多了，心也靜了下來...<br />
                『SUPERTREE』，以新加坡花園城市為藍圖，<br />
                讓建築懂得呼吸與留白<br />
                不汲汲營營於土地面積的最大使用率，<br />
                留下千坪的空間給花香、樹影、草徑、風道...<br />
                讓孩子可以盡情奔跑，讓人生下半場能和自然相濡以沫<br />
                從南港出發，5分鐘回到家，和嘈雜塵世說聲明天見<br />
                你不在紅塵，但你離紅塵不遠，<br />
                從此，每一天回家不再是地理活動，而是心靈活動
              </span>
            </div>
          </div>
          <div class="animation-bubble hidden-sm hidden-xs">
            <div
              class="bubbles"
              data-animation="fadeIn"
              data-animation-delay="200"
            >
              <img src="img/bubbles.png" alt="立信吾界的圖片" />
            </div>
          </div>
        </section>
        <section
          class="sectionMP visible-sm visible-xs"
          id="section-tree"
          style="height: auto;"
        >
          <div class="" style="padding: 0;">
            <img src="img/m-1-1-back.jpg" alt="立信吾界的圖片" style="width: 100%;" />
            <div
              style="position: absolute;width: 100vw;top: 40vh;left: 0;"
              class="bubbles"
              data-animation="fadeIn"
              data-animation-delay="200"
            >
              <img src="img/m-bubbles.png" alt="立信吾界的圖片" style="width: 100vw;" />
            </div>
            <div
              class="heading heading-center p-20"
              style="margin-top: 0;margin-bottom: 0;"
              data-animation="fadeIn"
            >
              <h2 style="font-size: 24px;line-height: 24px;">讓建築懂得呼吸</h2>
              <h2 style="font-size: 24px;line-height: 24px;">
                才能看見更開闊的人生風景
              </h2>
              <span class="lead">
                封閉的大樓住宅，走不出去的日子<br />
                偏遠的透天別墅，小院子多麼寂寞<br />
                南港往東走，喧囂少了，綠意多了，心也靜了下來...<br />
                『SUPERTREE』，以新加坡花園城市為藍圖，<br />
                讓建築懂得呼吸與留白<br />
                不汲汲營營於土地面積的最大使用率，<br />
                留下千坪的空間給花香、樹影、草徑、風道...<br />
                讓孩子可以盡情奔跑，讓人生下半場能和自然相濡以沫<br />
                從南港出發，5分鐘回到家，和嘈雜塵世說聲明天見<br />
                你不在紅塵，但你離紅塵不遠，<br />
                從此，每一天回家不再是地理活動，而是心靈活動
              </span>
            </div>
          </div>
        </section>
        <section
          class="sectionMP"
          id="section-365"
          style="padding: 0;height: auto;"
          data-animation="fadeIn"
        >
          <div class="hidden-sm hidden-xs">
            <img
              src="img/pc-3-desc.jpg"
              alt="立信吾界的圖片"
              style="width: 50%;height: auto;float: left;"
            />
            <img
              src="img/pc-3-redballandbg.jpg"
              alt="立信吾界的圖片"
              style="width: 50%;height: auto;float: left;"
            />
          </div>
          <div class="visible-sm visible-xs">
            <img
              src="img/pc-3-desc.jpg"
              alt="立信吾界的圖片"
              style="width: 100%;height: auto;float: left;"
            />
            <img
              src="img/pc-3-redballandbg.jpg"
              alt="立信吾界的圖片"
              style="width: 100%;height: auto;float: left;"
            />
          </div>
        </section>
        <section
          class="sectionMP"
          id="section-10"
          style="padding: 0;height: auto;"
          data-animation="fadeIn"
        >
          <div class="hidden-sm hidden-xs">
            <div class="ten-head">
              <img src="img/pc-3-S.png" alt="立信吾界的圖片" />
              <div class="ten-title">十項全能 美好盡收</div>
            </div>
            <img
              src="img/pc-3-1.jpg"
              alt="立信吾界的圖片"
              style="width: 50%;height: auto;float: left;"
            />
            <img
              src="img/pc-3-2.jpg"
              alt="立信吾界的圖片"
              style="width: 50%;height: auto;float: left;"
            />
          </div>
          <div class="visible-sm visible-xs">
            <div class="ten-head">
              <img src="img/pc-3-S.png" alt="立信吾界的圖片" />
              <div class="ten-title">十項全能 <br />美好盡收</div>
            </div>
            <img
              src="img/pc-3-1.jpg"
              alt="立信吾界的圖片"
              style="width: 100%;height: auto;float: left;"
            />
            <img
              src="img/pc-3-2.jpg"
              alt="立信吾界的圖片"
              style="width: 100%;height: auto;float: left;"
            />
          </div>
        </section>

        <!-- 左圖右文-->
        <section
          class="sectionMP"
          id="section-rich"
          style="padding: 0;height: auto;"
          data-animation="fadeIn"
        >
          <div
            class="row hidden-sm hidden-xs"
            style="padding: 80px;display: flex;align-items: center;"
          >
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="post-mini-slider pagination-bottom">
                <img alt="image" src="img/4-1.jpg" />
                <img alt="image" src="img/4-2.jpg" />
                <img alt="image" src="img/4-3.jpg" />
                <img alt="image" src="img/4-4.jpg" />
                <img alt="image" src="img/4-5.jpg" />
                <img alt="image" src="img/4-6.jpg" />
                <img alt="image" src="img/4-7.jpg" />
              </div>
            </div>
            <div class="col-md-6 rich-desc col-sm-12 col-xs-12" style="">
              <div class="p-20">
                <h2>
                  <img
                    src="img/pc-4-superRICH.png"
                    alt="立信吾界的圖片"
                  />&nbsp;&nbsp;&nbsp;&nbsp;富裕/便捷/悠活
                </h2>
                <span class="lead"
                  >科技人才匯聚動能成就東區新核心，回家住近千坪大花園，出門3分就到COSTCO大賣場、IFG購物中心；</span
                >
                <div style="font-size:18px;margin-top:10px;font-weight:300;">
                  CITYLINK購物中心及3鐵共構南港生活10分鐘速達；<br />
                  三大科學園區正核心，億兆產值無限商機。<br />
                  住進SUPERTREE，同時掌握上城富裕 x 生活便利 x
                  綠帶悠活的新東區跨界人生。<br />
                </div>
              </div>
            </div>
          </div>

          <div class="row visible-sm visible-xs" style="padding: 40px 0;">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="post-mini-slider pagination-bottom">
                <img alt="image" src="img/4-1.jpg" />
                <img alt="image" src="img/4-2.jpg" />
                <img alt="image" src="img/4-3.jpg" />
                <img alt="image" src="img/4-4.jpg" />
                <img alt="image" src="img/4-5.jpg" />
                <img alt="image" src="img/4-6.jpg" />
                <img alt="image" src="img/4-7.jpg" />
              </div>
            </div>
            <div class="col-md-6 rich-desc col-sm-12 col-xs-12" style="">
              <div class="p-20">
                <h2>
                  <img src="img/pc-4-superRICH.png" alt="立信吾界的圖片" />
                  <div style="margin-left: 10px;font-size: 28px">富裕/便捷/悠活</div>
                </h2>
                <span class="lead"
                  >科技人才匯聚動能成就東區新核心，<br />回家住近千坪大花園，<br />出門3分就到COSTCO大賣場、<br />IFG購物中心；</span
                >
                <div style="font-size:18px;margin-top:10px;font-weight:300;line-height: 24px;">
                  CITYLINK購物中心及3鐵共構<br />南港生活10分鐘速達；<br />
                  三大科學園區正核心，<br />億兆產值無限商機。<br />
                  住進SUPERTREE，<br /><br />
                  同時掌握<br />上城富裕 x 生活便利 x 綠帶悠活的<br />新東區跨界人生。<br />
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="visible-sm visible-xs">
              <img src="img/5m.jpg" alt="立信吾界的圖片" style="width: 100%; height: auto;">
          </div> -->
        </section>

        <section
          class="sectionMP hidden-sm hidden-xs"
          style="padding: 0;height: auto;"
        >
          <img
            src="img/pc-5.jpg"
            alt="立信吾界的圖片"
            style="width: 100%;height: auto;float: left;"
          />
        </section>

        <section
          class="sectionMP"
          style="padding: 0;height: auto;background: url(img/pc-6-back.jpg);background-size: cover;"
        >
          <div class="east-content">
            <div class="east-title" data-animation="pulse">新東區門戶計畫</div>
            <div class="east-subtitle" data-animation="pulse">
              科技金三角，激出億兆產值
            </div>
            <div class="east-desc" data-animation="fadeIn">
              汐止廠辦交易規模2017年已超越內湖、南港，
              成科技產業總部插旗首選，內湖科技園區、南
              港經貿園區、大汐止經貿園區，形成新東區科
              技金三角，與南港緊連僅10分鐘通勤時間、
              1/2房價的汐止，成為人口移入大紅利地區。
              2008年南港捷運通車、2016高鐵南港站通車、
              2019民生汐止線定案，大台北10年重大建設集
              中南港及汐止，成「台北新東區」發展核心。
              緯創、宇瞻、宏達、台灣航電等..汐止區內資
              本億元以上公司近萬家；台灣科學園區、
              遠雄U-TOWN、遠東科學園區、ACER大樓廠辦林
              立，帶動上萬科技新貴、高知識族群聚集，
              汐止已形成高科技產業人口的「聚落效應」。
            </div>
          </div>
          <!-- <img
            src="img/pc-6-back.jpg"
            alt="立信吾界的圖片"
            style="width: 100%;height: auto;float: left;"
          /> -->
        </section>

        <section
          class="sectionMP hidden-sm hidden-xs"
          style="padding: 0;height: auto;"
        >
          <img
            src="img/pc-7.jpg"
            alt="立信吾界的圖片"
            style="width: 100%;height: auto;float: left;"
          />
        </section>
        <section
          class="sectionMP visible-sm visible-xs scroll-hint-container"
          style="padding: 0;height: auto;overflow-x: scroll"
        >
          <div class="scroll-hint-mask">
            <div class="scroll-hint-title">左右滑動觀看</div>
            <img src="img/hand.png" alt="立信吾界的圖片" />
          </div>
          <img
            src="img/pc-7.jpg"
            alt="立信吾界的圖片"
            style="width: auto;height: calc(100vh - 80px);float: left;"
          />
        </section>

        <!-- <div class="visible-sm visible-xs">
            <img src="img/6m.jpg" alt="立信吾界的圖片" style="width: 100%; height: auto;">
        </div> -->

        <!-- 左文右圖-->
        <section
          id="section-garden"
          class="sectionMP"
          style="padding: 0;height: auto"
        >
          <div
            class="row hidden-sm hidden-xs"
            style="padding: 80px 80px 0;display: flex;align-items: center;"
          >
            <div class="col-md-6 garden-desc" data-animation="fadeIn">
              <div class="p-20" style="width:100%">
                <h2>
                  <img src="img/pc-8-superGARDEN.png" alt="立信吾界的圖片" />
                  &nbsp;&nbsp;&nbsp;&nbsp;超級花園城
                </h2>
                <!-- <span class="lead">圖：800x500 72dpi</span> -->
                <div style="font-size:18px;margin-top:10px;font-weight:300;" class="m-t-20">
                  新加坡SUPERTREE GROVE，將建築與自然巧妙結合，<br />
                  成為觀光聖地。而在SUPERTREE超級花園，向國際綠建築趨勢看齊，<br />
                  將千坪自然美景放進住家中，讓家不再只是封閉的水泥方體，<br />
                  每日都能浸泡在四季花開、落葉紛飛，隨季節綻放的自然景緻中，<br />
                  千坪芬多精花園成為生活的延伸，跟孩子一起在自然中成長，<br />
                  近距離觀察植物、昆蟲、生態變化，在廣闊的空間字在奔跑、<br />
                  歡笑成長，成為一生難忘記憶。
                </div>
              </div>
            </div>
            <div
              class="col-md-6"
              data-animation="fadeIn"
              data-animation-delay="500"
            >
              <div class="post-mini-slider pagination-bottom">
                <img alt="image" src="img/pc-8-1.jpg" />
                <img alt="image" src="img/pc-8-2.jpg" />
                <img alt="image" src="img/pc-8-3.jpg" />
                <img alt="image" src="img/pc-8-4.jpg" />
              </div>
            </div>
          </div>
          <div class="row visible-sm visible-xs" style="padding: 40px 0;">
            <div
              class="col-md-6"
              data-animation="fadeIn"
              data-animation-delay="500"
            >
              <div class="post-mini-slider pagination-bottom">
                <img alt="image" src="img/pc-8-1.jpg" />
                <img alt="image" src="img/pc-8-2.jpg" />
                <img alt="image" src="img/pc-8-3.jpg" />
                <img alt="image" src="img/pc-8-4.jpg" />
              </div>
            </div>
            <div class="col-md-6 garden-desc" data-animation="fadeIn">
              <div class="p-20" style="width:100%">
                <h2>
                  <img src="img/pc-8-superGARDEN.png" alt="立信吾界的圖片" />
                  &nbsp;&nbsp;&nbsp;&nbsp;超級花園城
                </h2>
                <!-- <span class="lead">圖：800x500 72dpi</span> -->
                <div style="font-size:18px;margin-top:10px;font-weight:300;" class="m-t-20">
                  新加坡SUPERTREE GROVE，<br />將建築與自然巧妙結合，<br />
                  成為觀光聖地。<br />而在SUPERTREE超級花園，<br />向國際綠建築趨勢看齊，<br />
                  將千坪自然美景放進住家中，<br />讓家不再只是封閉的水泥方體，<br />
                  每日都能浸泡在四季花開、<br />落葉紛飛，<br />隨季節綻放的自然景緻中，<br />
                  千坪芬多精花園成為生活的延伸，<br />跟孩子一起在自然中成長，<br />
                  近距離觀察植物、昆蟲、生態變化，<br />在廣闊的空間字在奔跑、<br />
                  歡笑成長，成為一生難忘記憶。
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="visible-sm visible-xs">
              <img src="img/7m.jpg" alt="立信吾界的圖片" style="width: 100%; height: auto;">
          </div> -->
        </section>

        <!-- 左圖右文-->
        <section
          class="sectionMP"
          id="section-life"
          style="padding: 0;height: auto;"
        >
          <div
            class="row hidden-sm hidden-xs"
            style="padding: 80px;display:flex; align-items: center;"
          >
            <div
              class="col-md-6"
              data-animation="fadeIn"
              data-animation-delay="500"
            >
              <div class="post-mini-slider pagination-bottom">
                <img alt="image" src="img/pc-9-1.png" />
                <img alt="image" src="img/pc-9-2.png" />
                <img alt="image" src="img/pc-9-3.png" />
                <img alt="image" src="img/pc-9-4.png" />
              </div>
            </div>
            <div class="col-md-6 rich-desc" data-animation="fadeIn">
              <div class="p-20">
                <h2>
                  <img
                    src="img/pc-9-superLIFE.png"
                    alt="立信吾界的圖片"
                  />&nbsp;&nbsp;超級生活
                </h2>
                <!-- <span class="lead"
                    >科技人才匯聚動能成就東區新核心，回家住近千坪大花園，出門3分就到COSTCO大賣場、IFG購物中心；</span
                  > -->
                <div style="font-size:18px;margin-top:10px;font-weight:300;">
                  把度假回憶帶回家，隨時放鬆不用再期待久久才有一次的度假感動，住在SUPERTREE，將旅行時居住飯店的放鬆精彩都留在家裡。隨時高歌一曲KTV、帶孩子去遊戲區放電、老公下班在運動bar放鬆、牽自行車溜出家門就迎風看和...，
                  捨去大包小包開車出行，家永遠準備好最舒適的樣子。
                </div>
              </div>
            </div>
          </div>
          <div class="row visible-sm visible-xs" style="padding: 40px 0;">
            <div
              class="col-md-6"
              data-animation="fadeIn"
              data-animation-delay="500"
            >
              <div class="post-mini-slider pagination-bottom">
                <img alt="image" src="img/pc-9-1.png" />
                <img alt="image" src="img/pc-9-2.png" />
                <img alt="image" src="img/pc-9-3.png" />
                <img alt="image" src="img/pc-9-4.png" />
              </div>
            </div>
            <div class="col-md-6 rich-desc" data-animation="fadeIn">
              <div class="p-20">
                <h2>
                  <img
                    src="img/pc-9-superLIFE.png"
                    alt="立信吾界的圖片"
                  />&nbsp;&nbsp;超級生活
                </h2>
                <!-- <span class="lead"
                      >科技人才匯聚動能成就東區新核心，回家住近千坪大花園，出門3分就到COSTCO大賣場、IFG購物中心；</span
                    > -->
                <div style="font-size:18px;margin-top:10px;font-weight:300;">
                  把度假回憶帶回家，<br />隨時放鬆不用再期待<br />久久才有一次的度假感動，<br />住在SUPERTREE，<br />將旅行時居住飯店的<br />放鬆精彩都留在家裡。<br />隨時高歌一曲KTV、<br />帶孩子去遊戲區放電、<br />老公下班在運動bar放鬆、<br />牽自行車溜出家門就迎風看和...<br />
                  捨去大包小包開車出行，<br />家永遠準備好最舒適的樣子。
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 凌空對望101 -->
        <section class="sectionMP" style="padding: 0; height:auto;">
          <div class="container">
            <div
              style="margin-top: 20px;margin-bottom: 20px;"
              class="heading heading-center"
              data-animation="fadeIn"
            >
              <h2
                class="hidden-sm hidden-xs"
                style="text-align: center;font-size: 40px;line-height: 40px;"
              >
                凌空對望101 城市山河360度 環景之間
              </h2>
              <h2
                class="visible-sm visible-xs"
                style="text-align: center;font-size: 40px;line-height: 44px;"
              >
                <div style="text-align: left;">凌空對望101</div>
                <div style="text-align: center;">城市山河360度</div>
                <div style="text-align: right;">環景之間</div>
              </h2>
              <span style="font-size: 18px !important;" class="lead"
                >站在台北交會點，360度轉身間，能看見101的英姿風采，也能看見台北盆地環山美景，與基隆河的亙古流長。
                日出微光、夕陽餘暈、星空夜景..住進SUPERTREE，開始放慢腳步，用心生活。</span
              >
            </div>
          </div>
          <div class="container">
            <div
              class="row"
              data-animation="fadeIn"
              data-animation-delay="200"
            >
              <div class="col-md-6 m-t-20">
                <img class="img-responsive" src="img/pc-10-1.jpg" alt="立信吾界的圖片" />
              </div>
              <div class="col-md-6 m-t-20">
                <img class="img-responsive" src="img/pc-10-2.jpg" alt="立信吾界的圖片" />
              </div>
            </div>
          </div>
        </section>
        <!-- 百坪飯店迎賓門廳 -->
        <section class="sectionMP" style="padding: 40px 0; height:auto;">
          <div class="container">
            <div
              style="margin-top: 20px;margin-bottom: 20px;"
              class="heading heading-center"
              data-animation="fadeIn"
            >
              <h2 style="text-align: center;font-size: 40px;line-height: 44px;">
                百坪飯店迎賓門廳 您值得被尊榮款待
              </h2>
              <span style="font-size: 18px !important;" class="lead"
                >飯店式規劃，讓千坪基地都成為家的伸展台，不想在家的時候，就在大廳放風、和鄰居交朋友。現煮的甘醇咖啡、用社區的WIFI辦公追劇，靜靜看著水族箱的悠遊小魚和水草漫舞，回家前再到宅配室收取包裹..，在家裡彷如置身候機室般舒適尊榮。</span
              >
            </div>
          </div>
          <div class="container">
            <div
              class="row"
              data-animation="fadeIn"
              data-animation-delay="200"
            >
              <div class="col-md-6 m-t-20">
                <img class="img-responsive" src="img/pc-11-1.jpg" alt="立信吾界的圖片" />
              </div>
              <div class="col-md-6 m-t-20">
                <img class="img-responsive" src="img/pc-11-2.jpg" alt="立信吾界的圖片" />
              </div>
            </div>
          </div>
        </section>
        <!-- <div class="visible-sm visible-xs">
            <img src="img/8m.jpg" alt="立信吾界的圖片" style="width: 100%; height: auto;">
        </div> -->
        <!-- 滑動區塊 -->

        <!-- <section class="sectionMP" id="section-SliderImg">
            <div class="container">
                <div class="heading heading-center m-b-40" data-animation="fadeIn">
                    <h2>滑動區塊</h2>
                    <span class="lead">PC:1200x600、Mobile:800x600 72dpi</span>
                </div>
            </div>
            <div class="container">
                <div id="testimonials2" data-animation="zoomInUp">
                    <div class="testimonial-items">
                          <div class="row">
                            <div class="col-md-12 visible-lg visible-md">
                                <img class="img-responsive" src="img/responsive-1.jpg" alt="立信吾界的圖片">
                            </div>
                            <div class="col-md-12 visible-xs visible-sm">
                                <img class="img-responsive" src="img/responsive-1m.jpg" alt="立信吾界的圖片">
                            </div>
                          </div>
                    </div>
                    <div class="testimonial-items">
                          <div class="row">
                            <div class="col-md-12 visible-lg visible-md">
                                <img class="img-responsive" src="img/responsive-1.jpg" alt="立信吾界的圖片">
                            </div>
                            <div class="col-md-12 visible-xs visible-sm">
                                <img class="img-responsive" src="img/responsive-1m.jpg" alt="立信吾界的圖片">
                            </div>
                          </div>
                    </div>
                    <div class="testimonial-items">
                          <div class="row">
                            <div class="col-md-12 visible-lg visible-md">
                                <img class="img-responsive" src="img/responsive-1.jpg" alt="立信吾界的圖片">
                            </div>
                            <div class="col-md-12 visible-xs visible-sm">
                                <img class="img-responsive" src="img/responsive-1m.jpg" alt="立信吾界的圖片">
                            </div>
                          </div>
                    </div>
                    <div class="testimonial-items">
                          <div class="row">
                            <div class="col-md-12 visible-lg visible-md">
                                <img class="img-responsive" src="img/responsive-1.jpg" alt="立信吾界的圖片">
                            </div>
                            <div class="col-md-12 visible-xs visible-sm">
                                <img class="img-responsive" src="img/responsive-1m.jpg" alt="立信吾界的圖片">
                            </div>
                          </div>
                    </div>
                </div>
                <script type="text/javascript">


                </script>
            </div>
        </section> -->

        <!-- 六張圖可放大區塊 -->
        <section
          class="sectionMP background-grey"
          id="section-SixImg"
          style="background-image: url(img/BG.jpg); display: none;"
          data-stellar-background-ratio="0.6"
        >
          <div class="container">
            <div
              class="heading heading-center m-b-40"
              data-animation="fadeIn"
            >
              <h2>國際精品 頂級建材</h2>
              <span class="lead">小圖：800x600 大圖：1200x600 72dpi</span>
            </div>
          </div>
          <div class="container portfolio">
            <div
              id="isotope"
              class="isotope portfolio-items"
              data-isotope-item-space="2"
              data-isotope-mode="masonry"
              data-isotope-col="3"
              data-isotope-item=".portfolio-item"
            >
              <div
                class="portfolio-item design beauty"
                data-animation="fadeIn"
                data-animation-delay="0"
              >
                <a
                  href="img/m1_big.jpg"
                  data-lightbox-type="image"
                  title="日本YKKAP超高水密性鋁窗！"
                >
                  <div class="image-box effect retro">
                    <img src="img/m1.jpg" alt="立信吾界的圖片" />
                    <div class="image-box-content">
                      <!--h3>Working hard</h3-->
                      <p class="image-box-links Jp-t-20p">點圖放大</p>
                    </div>
                  </div>
                </a>
                <div class="text-center">
                  <h4 class="title title_new">日本YKKAP超高水密性鋁窗！</h4>
                  <p class="customP">副標題</p>
                </div>
              </div>

              <div
                class="portfolio-item design beauty"
                data-animation="fadeIn"
                data-animation-delay="100"
              >
                <a
                  href="img/m1_big.jpg"
                  data-lightbox-type="image"
                  title="日本YKKAP超高水密性鋁窗！"
                >
                  <div class="image-box effect retro">
                    <img src="img/m1.jpg" alt="立信吾界的圖片" />
                    <div class="image-box-content">
                      <!--h3>Working hard</h3-->
                      <p class="image-box-links Jp-t-20p">點圖放大</p>
                    </div>
                  </div>
                </a>
                <div class="text-center">
                  <h4 class="title title_new">日本YKKAP超高水密性鋁窗！</h4>
                  <p class="customP">副標題</p>
                </div>
              </div>

              <div
                class="portfolio-item design beauty"
                data-animation="fadeIn"
                data-animation-delay="200"
              >
                <a
                  href="img/m1_big.jpg"
                  data-lightbox-type="image"
                  title="日本YKKAP超高水密性鋁窗！"
                >
                  <div class="image-box effect retro">
                    <img src="img/m1.jpg" alt="立信吾界的圖片" />
                    <div class="image-box-content">
                      <!--h3>Working hard</h3-->
                      <p class="image-box-links Jp-t-20p">點圖放大</p>
                    </div>
                  </div>
                </a>
                <div class="text-center">
                  <h4 class="title title_new">日本YKKAP超高水密性鋁窗！</h4>
                  <p class="customP">副標題</p>
                </div>
              </div>

              <div
                class="portfolio-item design beauty"
                data-animation="fadeIn"
                data-animation-delay="300"
              >
                <a
                  href="img/m1_big.jpg"
                  data-lightbox-type="image"
                  title="日本YKKAP超高水密性鋁窗！"
                >
                  <div class="image-box effect retro">
                    <img src="img/m1.jpg" alt="立信吾界的圖片" />
                    <div class="image-box-content">
                      <!--h3>Working hard</h3-->
                      <p class="image-box-links Jp-t-20p">點圖放大</p>
                    </div>
                  </div>
                </a>
                <div class="text-center">
                  <h4 class="title title_new">日本YKKAP超高水密性鋁窗！</h4>
                  <p class="customP">副標題</p>
                </div>
              </div>

              <div
                class="portfolio-item design beauty"
                data-animation="fadeIn"
                data-animation-delay="400"
              >
                <a
                  href="img/m1_big.jpg"
                  data-lightbox-type="image"
                  title="日本YKKAP超高水密性鋁窗！"
                >
                  <div class="image-box effect retro">
                    <img src="img/m1.jpg" alt="立信吾界的圖片" />
                    <div class="image-box-content">
                      <!--h3>Working hard</h3-->
                      <p class="image-box-links Jp-t-20p">點圖放大</p>
                    </div>
                  </div>
                </a>
                <div class="text-center">
                  <h4 class="title title_new">日本YKKAP超高水密性鋁窗！</h4>
                  <p class="customP">副標題</p>
                </div>
              </div>

              <div
                class="portfolio-item design beauty"
                data-animation="fadeIn"
                data-animation-delay="500"
              >
                <a
                  href="img/m1_big.jpg"
                  data-lightbox-type="image"
                  title="日本YKKAP超高水密性鋁窗！"
                >
                  <div class="image-box effect retro">
                    <img src="img/m1.jpg" alt="立信吾界的圖片" />
                    <div class="image-box-content">
                      <!--h3>Working hard</h3-->
                      <p class="image-box-links Jp-t-20p">點圖放大</p>
                    </div>
                  </div>
                </a>
                <div class="text-center">
                  <h4 class="title title_new">日本YKKAP超高水密性鋁窗！</h4>
                  <p class="customP">副標題</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 四張圖可放大區塊 -->
        <section class="sectionMP" id="section-FourImg" style="display: none;">
          <div class="container">
            <div
              class="heading heading-center m-b-40"
              data-animation="fadeIn"
            >
              <h2>國際精品 頂級建材</h2>
              <span class="lead">小圖：800x600 大圖：1200x600 72dpi</span>
            </div>
          </div>
          <div class="container portfolio">
            <div
              id="isotope"
              class="isotope portfolio-items"
              data-isotope-item-space="2"
              data-isotope-mode="masonry"
              data-isotope-col="2"
              data-isotope-item=".portfolio-item"
            >
              <div
                class="portfolio-item"
                data-animation="fadeIn"
                data-animation-delay="0"
              >
                <div class="portfolio-image effect social-links">
                  <img src="img/m1.jpg" alt="立信吾界的圖片" />
                  <div class="image-box-content">
                    <p>
                      <a
                        href="img/m1_big.jpg"
                        data-lightbox-type="image"
                        title="日本YKKAP超高水密性鋁窗！"
                        ><i class="fa fa-expand"></i
                      ></a>
                    </p>
                  </div>
                </div>
                <div class="portfolio-description text-center">
                  <h4 class="title">日本YKKAP超高水密性鋁窗！</h4>
                  <p class="customP">副標題</p>
                </div>
              </div>
              <div
                class="portfolio-item"
                data-animation="fadeIn"
                data-animation-delay="0"
              >
                <div class="portfolio-image effect social-links">
                  <img src="img/m1.jpg" alt="立信吾界的圖片" />
                  <div class="image-box-content">
                    <p>
                      <a
                        href="img/m1_big.jpg"
                        data-lightbox-type="image"
                        title="Your image title here!"
                        ><i class="fa fa-expand"></i
                      ></a>
                    </p>
                  </div>
                </div>
                <div class="portfolio-description text-center">
                  <h4 class="title">主標題</h4>
                  <p class="customP">副標題</p>
                </div>
              </div>
              <div
                class="portfolio-item"
                data-animation="fadeIn"
                data-animation-delay="200"
              >
                <div class="portfolio-image effect social-links">
                  <img src="img/m1.jpg" alt="立信吾界的圖片" />
                  <div class="image-box-content">
                    <p>
                      <a
                        href="img/m1_big.jpg"
                        data-lightbox-type="image"
                        title="Your image title here!"
                        ><i class="fa fa-expand"></i
                      ></a>
                    </p>
                  </div>
                </div>
                <div class="portfolio-description text-center">
                  <h4 class="title">主標題</h4>
                  <p class="customP">副標題</p>
                </div>
              </div>
              <div
                class="portfolio-item"
                data-animation="fadeIn"
                data-animation-delay="200"
              >
                <div class="portfolio-image effect social-links">
                  <img src="img/m1.jpg" alt="立信吾界的圖片" />
                  <div class="image-box-content">
                    <p>
                      <a
                        href="img/m1_big.jpg"
                        data-lightbox-type="image"
                        title="Your image title here!"
                        ><i class="fa fa-expand"></i
                      ></a>
                    </p>
                  </div>
                </div>
                <div class="portfolio-description text-center">
                  <h4 class="title">主標題</h4>
                  <p class="customP">副標題</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 建案資訊區塊 -->
        <section
          class="sectionMP background-grey"
          id="section-Info2"
          style="display: none;"
        >
          <div class="container">
            <div
              class="heading heading-center m-b-40"
              data-animation="fadeIn"
            >
              <h2>建案比較</h2>
              <span class="lead">圖：1200x500 72dpi</span>
            </div>
          </div>
          <div class="container">
            <div class="table-responsive">
              <table class="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="img/249.jpg"
                        alt="立信吾界的圖片"
                        style="margin-top:10px;width:100%;"
                        class="visible-lg visible-md"
                      />
                      <img
                        src="img/249.jpg"
                        alt="立信吾界的圖片"
                        style="margin-top:10px;height:300px;"
                        class="visible-xs visible-sm"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span class="lead visible-xs text-center"
              ><img src="img/hand.png" alt="立信吾界的圖片" style="margin-top:10px;"
            /></span>
          </div>
        </section>

        <!-- 大師團隊 -->
        <section
          class="sectionMP background-grey"
          id="section-Master"
          style="display: none;"
        >
          <div class="container">
            <div class="heading heading-center m-b-0" data-animation="fadeIn">
              <h2>大師團隊</h2>
              <span class="lead">圖：800x500 72dpi</span>
            </div>
          </div>
          <div class="container">
            <div
              class="hidden-xs hidden-sm btn orangebtn arr"
              id="TcustomPrevBtn"
            >
              <i class="fa fa-angle-left"></i>
            </div>
            <div
              class="hidden-xs hidden-sm btn orangebtn arr"
              id="TcustomNextBtn"
            >
              <i class="fa fa-angle-right"></i>
            </div>
            <!-- Testimonials -->
            <div id="testimonials5">
              <div class="testimonial-items">
                <div class="row">
                  <div class="col-md-7"><img src="img/te.jpg" alt="立信吾界的圖片" /></div>
                  <div class="col-md-5">
                    <h5 class="designerTitle">Juna Doe | 公設設計師</h5>
                    <span style="font-size:16px;">
                      日本建築師，1995年普利茲克獎得主，東京大學名譽教授。東日本大震災復興構想會議議長代理。
                    </span>
                    <a
                      class="m-t-40 designerConBtn text-center button border rounded effect fill-vertical"
                      href="include/ajax/Designer.html"
                      data-lightbox-type="ajax"
                      ><span>詳細內容</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="testimonial-items">
                <div class="row">
                  <div class="col-md-7"><img src="img/te.jpg" alt="立信吾界的圖片" /></div>
                  <div class="col-md-5">
                    <h5 class="designerTitle">Juna Doe | 公設設計師</h5>
                    <span style="font-size:16px;">
                      日本建築師，1995年普利茲克獎得主，東京大學名譽教授。東日本大震災復興構想會議議長代理。
                    </span>
                    <a
                      class="m-t-40 designerConBtn text-center button border rounded effect fill-vertical"
                      href="include/ajax/Designer.html"
                      data-lightbox-type="ajax"
                      ><span>詳細內容</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="testimonial-items">
                <div class="row">
                  <div class="col-md-7"><img src="img/te.jpg" alt="立信吾界的圖片" /></div>
                  <div class="col-md-5">
                    <h5 class="designerTitle">Juna Doe | 公設設計師</h5>
                    <span style="font-size:16px;">
                      日本建築師，1995年普利茲克獎得主，東京大學名譽教授。東日本大震災復興構想會議議長代理。
                    </span>
                    <a
                      class="m-t-40 designerConBtn text-center button border rounded effect fill-vertical"
                      href="include/ajax/Designer.html"
                      data-lightbox-type="ajax"
                      ><span>詳細內容</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="testimonial-items">
                <div class="row">
                  <div class="col-md-7"><img src="img/te.jpg" alt="立信吾界的圖片" /></div>
                  <div class="col-md-5">
                    <h5 class="designerTitle">Juna Doe | 公設設計師</h5>
                    <span style="font-size:16px;">
                      日本建築師，1995年普利茲克獎得主，東京大學名譽教授。東日本大震災復興構想會議議長代理。
                    </span>
                    <a
                      class="m-t-40 designerConBtn text-center button border rounded effect fill-vertical"
                      href="include/ajax/Designer.html"
                      data-lightbox-type="ajax"
                      ><span>詳細內容</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 格局規劃 -->
        <section class="sectionMP" id="section-Pattern" style="display: none;">
          <div class="container">
            <div
              class="heading heading-center m-b-40"
              data-animation="fadeIn"
            >
              <h2>格局規劃</h2>
              <span class="lead">小圖：800x600 大圖：1200x900 72dpi</span>
            </div>
          </div>

          <div class="container text-center" style="margin-bottom:10px;">
            <a class="button icon-top rounded tab_btn" id="vhouse2_btn"
              ><span>傢配圖</span></a
            >
            <a class="button icon-top rounded tab_btn" id="vhouse3_btn"
              ><span>平面圖</span></a
            >
            <a class="button icon-top rounded tab_btn" id="vhouse4_btn"
              ><span>實景圖</span></a
            >
          </div>
          <div class="container" id="vhouse2">
            <div class="row">
              <div
                class="col-md-6 m-t-20"
                data-animation="fadeIn"
                data-animation-delay="0"
              >
                <a href="img/27.jpg" data-lightbox-type="image" title="傢配圖"
                  ><img class="img-responsive" src="img/2_13.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
              <div
                class="col-md-6 m-t-20"
                data-animation="fadeIn"
                data-animation-delay="0"
              >
                <a href="img/27.jpg" data-lightbox-type="image" title="傢配圖"
                  ><img class="img-responsive" src="img/2_13.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
            </div>
            <div class="row">
              <div
                class="col-md-6 m-t-20"
                data-animation="fadeIn"
                data-animation-delay="200"
              >
                <a href="img/27.jpg" data-lightbox-type="image" title="傢配圖"
                  ><img class="img-responsive" src="img/2_13.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
              <div
                class="col-md-6 m-t-20"
                data-animation="fadeIn"
                data-animation-delay="200"
              >
                <a href="img/27.jpg" data-lightbox-type="image" title="傢配圖"
                  ><img class="img-responsive" src="img/2_13.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
            </div>
          </div>
          <div class="container" data-animation="fadeIn" id="vhouse3">
            <div class="row" data-animation="fadeIn">
              <div class="col-md-6 m-t-20">
                <a
                  href="img/1_1_21.jpg"
                  data-lightbox-type="image"
                  title="平面圖"
                  ><img class="img-responsive" src="img/1_1_11.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
              <div class="col-md-6 m-t-20">
                <a
                  href="img/1_1_21.jpg"
                  data-lightbox-type="image"
                  title="平面圖"
                  ><img class="img-responsive" src="img/1_1_11.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
            </div>
            <div class="row" data-animation="fadeIn">
              <div class="col-md-6 m-t-20">
                <a
                  href="img/1_1_21.jpg"
                  data-lightbox-type="image"
                  title="平面圖"
                  ><img class="img-responsive" src="img/1_1_11.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
              <div class="col-md-6 m-t-20">
                <a
                  href="img/1_1_21.jpg"
                  data-lightbox-type="image"
                  title="平面圖"
                  ><img class="img-responsive" src="img/1_1_11.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
            </div>
          </div>
          <div class="container" data-animation="fadeIn" id="vhouse4">
            <div class="row" data-animation="fadeIn">
              <div class="col-md-6 m-t-20">
                <a href="img/3-2.jpg" data-lightbox-type="image" title="實景圖"
                  ><img class="img-responsive" src="img/3-1.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
              <div class="col-md-6 m-t-20">
                <a href="img/3-2.jpg" data-lightbox-type="image" title="實景圖"
                  ><img class="img-responsive" src="img/3-1.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
            </div>
            <div class="row" data-animation="fadeIn">
              <div class="col-md-6 m-t-20">
                <a href="img/3-2.jpg" data-lightbox-type="image" title="實景圖"
                  ><img class="img-responsive" src="img/3-1.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
              <div class="col-md-6 m-t-20">
                <a href="img/3-2.jpg" data-lightbox-type="image" title="實景圖"
                  ><img class="img-responsive" src="img/3-1.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
            </div>
          </div>
        </section>

        <!-- 實境賞屋 -->
        <section
          class="sectionMP background-grey"
          id="section-VR"
          style="display: none;"
        >
          <div class="container">
            <div
              class="heading heading-center m-b-40"
              data-animation="fadeIn"
            >
              <h2>實境賞屋</h2>
              <span class="lead">PC:1200x600、Mobile:800x600 72dpi</span>
            </div>
          </div>
          <div class="container">
            <div
              class="row"
              data-animation="fadeIn"
              data-animation-delay="200"
            >
              <div class="col-md-12 m-t-20 visible-lg visible-md">
                <a href="vr-2.html"
                  ><img class="img-responsive" src="img/vrcover3.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
              <div class="col-md-12 m-t-20 visible-xs visible-sm">
                <a href="vr-2.html"
                  ><img class="img-responsive" src="img/vrcover2.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
            </div>
          </div>
        </section>

        <!-- 實境賞屋 -->
        <section class="sectionMP" id="section-VR" style="display: none;">
          <div class="container">
            <div
              class="heading heading-center m-b-40"
              data-animation="fadeIn"
            >
              <h2>實境賞屋</h2>
              <span class="lead">圖:800x600 72dpi</span>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div
                class="col-md-6 m-t-20"
                data-animation="fadeIn"
                data-animation-delay="0"
              >
                <a href="vr-1.html"
                  ><img class="img-responsive" src="img/vrcover1.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
              <div
                class="col-md-6 m-t-20"
                data-animation="fadeIn"
                data-animation-delay="200"
              >
                <a href="vr-2.html"
                  ><img class="img-responsive" src="img/vrcover2.jpg" alt="立信吾界的圖片"
                /></a>
              </div>
            </div>
          </div>
        </section>

        <!-- 空拍環景 -->
        <section
          id="section-skyPan"
          class="parallax"
          style="background: url('images/parallax/4.jpg');display: none;"
          data-stellar-background-ratio="0.3"
        >
          <div class="container container-fullscreen">
            <div class="text-middle text-center text-light">
              <h1 class="text-uppercase"><strong>空拍環景</strong></h1>
              <p class="lead" style="margin:0px;padding:0px;">
                <a class="button transparent rounded" href="vr-sky.html"
                  ><span style="font-size:20px;">檢視內容</span></a
                >
              </p>
            </div>
          </div>
        </section>

        <!-- 影片背景 -->
        <section
          class="content-section video-section parallax"
          style="background: url('images/parallax/videobg.jpg'); display: none;"
          data-stellar-background-ratio="0.3"
        >
          <div class="pattern-overlay">
            <a
              id="bgndVideo"
              class="player"
              data-property="{videoURL:'https://www.youtube.com/watch?v=fdJc1_IBKJA',containment:'.video-section', quality:'large', autoPlay:true, mute:true, opacity:1}"
            ></a>
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-light text-center">
                  <h1>影片背景</h1>
                  <h3>Adding Full Screen Videos to This Sections</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 精彩活動 -->
        <section class="sectionMP" id="section-Event" style="display: none;">
          <div class="container">
            <div class="heading heading-center m-b-0" data-animation="fadeIn">
              <h2>精彩活動</h2>
              <span class="lead">圖：800x500 72dpi</span>
            </div>
          </div>
          <div class="container">
            <div
              class="hidden-xs hidden-sm btn orangebtn arr"
              id="EcustomPrevBtn"
            >
              <i class="fa fa-angle-left"></i>
            </div>
            <div
              class="hidden-xs hidden-sm btn orangebtn arr"
              id="EcustomNextBtn"
            >
              <i class="fa fa-angle-right"></i>
            </div>
            <!-- Testimonials -->
            <div id="testimonials">
              <div class="testimonial-items">
                <div class="row">
                  <div class="col-md-7">
                    <img src="img/event_year.jpg" alt="立信吾界的圖片" />
                  </div>
                  <div class="col-md-5">
                    <h5 class="eventTitle">活動標題</h5>
                    <span style="font-size:16px;">
                      活動時間：2016-12-31 19:00-22:00<BR />
                      活動地點：新光三越<BR />
                      <BR />跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動
                    </span>
                    <a
                      class="m-t-40 eventBtn text-center button border rounded effect fill-vertical"
                      href="include/ajax/Event-Sign-up.html"
                      data-lightbox-type="ajax"
                      ><span>我要報名</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="testimonial-items">
                <div class="row">
                  <div class="col-md-7">
                    <img src="img/event_year.jpg" alt="立信吾界的圖片" />
                  </div>
                  <div class="col-md-5">
                    <h5 class="eventTitle">活動標題</h5>
                    <span style="font-size:16px;">
                      活動時間：2016-12-31 19:00-22:00<BR />
                      活動地點：新光三越<BR />
                      <BR />跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動
                    </span>
                    <a
                      class="m-t-40 eventBtn text-center button border rounded effect fill-vertical"
                      href="include/ajax/Event-Sign-up.html"
                      data-lightbox-type="ajax"
                      ><span>我要報名</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="testimonial-items">
                <div class="row">
                  <div class="col-md-7">
                    <img src="img/event_year.jpg" alt="立信吾界的圖片" />
                  </div>
                  <div class="col-md-5">
                    <h5 class="eventTitle">活動標題</h5>
                    <span style="font-size:16px;">
                      活動時間：2016-12-31 19:00-22:00<BR />
                      活動地點：新光三越<BR />
                      <BR />跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動
                    </span>
                    <a
                      class="m-t-40 eventBtn text-center button border rounded effect fill-vertical"
                      href="include/ajax/Event-Sign-up.html"
                      data-lightbox-type="ajax"
                      ><span>我要報名</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="testimonial-items">
                <div class="row">
                  <div class="col-md-7">
                    <img src="img/event_year.jpg" alt="立信吾界的圖片" />
                  </div>
                  <div class="col-md-5">
                    <h5 class="eventTitle">活動標題</h5>
                    <span style="font-size:16px;">
                      活動時間：2016-12-31 19:00-22:00<BR />
                      活動地點：新光三越<BR />
                      <BR />跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動，跨年活動
                    </span>
                    <a
                      class="m-t-40 eventBtn text-center button border rounded effect fill-vertical"
                      href="include/ajax/Event-Sign-up.html"
                      data-lightbox-type="ajax"
                      ><span>我要報名</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 歷年建案 -->
        <section
          class="sectionMP background-grey"
          id="section-works"
          style="display: none;"
        >
          <div class="container">
            <div class="heading heading-center m-b-0" data-animation="fadeIn">
              <h2>歷年建案</h2>
              <span class="lead">小圖：800x600 大圖:1200x600 72dpi</span>
            </div>
          </div>
          <div class="container">
            <div
              class="hidden-xs hidden-sm btn orangebtn arr"
              id="workscustomPrevBtn"
            >
              <i class="fa fa-angle-left"></i>
            </div>
            <div
              class="hidden-xs hidden-sm btn orangebtn arr"
              id="workscustomNextBtn"
            >
              <i class="fa fa-angle-right"></i>
            </div>
            <div id="yearworks" class="shop-products">
              <div class="portfolio-item design artwork">
                <div class="image-box effect victor image-box-custom">
                  <img src="img/works1.jpg" alt="立信吾界的圖片" />
                  <div class="image-box-content">
                    <h3 class="workstitle">2014 中山區建案</h3>
                    <p class="text-center">
                      說明文字、說明文字、說明文字說明文字、說明文字、說明文字說明文字、說明文字、說明文字說明文字、說明文字、說明文字
                      <button
                        class="btn btn-primary m-t-40"
                        style="font-size:20px;"
                      >
                        前往建案
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              <div class="portfolio-item design beauty">
                <div class="image-box effect victor image-box-custom">
                  <img src="img/works1.jpg" alt="立信吾界的圖片" />
                  <div class="image-box-content">
                    <h3 class="workstitle">2014 中山區建案</h3>
                    <p class="text-center">
                      說明文字、說明文字、說明文字說明文字、說明文字、說明文字說明文字、說明文字、說明文字說明文字、說明文字、說明文字
                      <button
                        class="btn btn-primary m-t-40"
                        style="font-size:20px;"
                      >
                        前往建案
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <div class="portfolio-item design beauty">
                <div class="image-box effect victor image-box-custom">
                  <img src="img/works1.jpg" alt="立信吾界的圖片" />
                  <div class="image-box-content">
                    <h3 class="workstitle">2014 中山區建案</h3>
                    <p class="text-center">
                      說明文字、說明文字、說明文字說明文字、說明文字、說明文字說明文字、說明文字、說明文字說明文字、說明文字、說明文字
                      <button
                        class="btn btn-primary m-t-40"
                        style="font-size:20px;"
                      >
                        前往建案
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 媒體報導區塊 -->
        <section
          class="sectionMP background-grey"
          id="section-News"
          style="display: none;"
        >
          <div class="container">
            <div class="heading heading-center m-b-0" data-animation="fadeIn">
              <h2>媒體報導</h2>
              <span class="lead">小圖：800x600 大圖:1200x600 72dpi</span>
            </div>
          </div>
          <div class="container">
            <div
              class="hidden-xs hidden-sm btn orangebtn arr"
              id="NewscustomPrevBtn"
            >
              <i class="fa fa-angle-left"></i>
            </div>
            <div
              class="hidden-xs hidden-sm btn orangebtn arr"
              id="NewscustomNextBtn"
            >
              <i class="fa fa-angle-right"></i>
            </div>
            <div id="MediaNews" class="shop-products">
              <div class="product">
                <div class="product-image">
                  <a
                    href="https://www.youtube.com/watch?v=eTXu9A2dWDc"
                    data-lightbox-type="iframe"
                    ><img alt="立信吾界的圖片" src="img/NewsCover＿video.jpg" />
                  </a>
                </div>
                <div class="product-description p-10 text-center">
                  <div class="product-title product-title_news">
                    <h4>
                      <a
                        href="http://www.chinatimes.com/newspapers/20160519000172-260204"
                        target="_blank"
                        >陽光PARK 安坑版小松菸 創業家最</a
                      >
                    </h4>
                    <span style="color:#999"
                      >【中時電子報/鄭啟明報導】相較鄰近中和辦公樓每坪40-50萬行情，及寶橋路宏達電總部周邊商辦每坪45至50萬</span
                    >
                    <div class="m-t-30">
                      <a
                        class="NewsConBtn text-center button border rounded effect fill-vertical"
                        href="http://www.chinatimes.com/newspapers/20160519000172-260204"
                        target="_blank"
                        ><span>閱讀全文</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="product">
                <div class="product-image">
                  <a
                    href="img/NewsCover_big.jpg"
                    data-lightbox-type="image"
                    title="陽光PARK 安坑版小松菸"
                    ><img alt="立信吾界的圖片" src="img/NewsCover.jpg" />
                  </a>
                </div>
                <div class="product-description p-10 text-center">
                  <div class="product-title product-title_news">
                    <h4>
                      <a
                        href="http://www.chinatimes.com/newspapers/20160519000172-260204"
                        target="_blank"
                        >陽光PARK 安坑版小松菸 創業家最</a
                      >
                    </h4>
                    <span style="color:#999"
                      >【中時電子報/鄭啟明報導】相較鄰近中和辦公樓每坪40-50萬行情，及寶橋路宏達電總部周邊商辦每坪45至50萬</span
                    >
                    <div class="m-t-30">
                      <a
                        class="NewsConBtn text-center button border rounded effect fill-vertical"
                        href="http://www.chinatimes.com/newspapers/20160519000172-260204"
                        target="_blank"
                        ><span>閱讀全文</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="product">
                <div class="product-image">
                  <a
                    href="img/NewsCover_big.jpg"
                    data-lightbox-type="image"
                    title="陽光PARK 安坑版小松菸"
                    ><img alt="立信吾界的圖片" src="img/NewsCover.jpg" />
                  </a>
                </div>
                <div class="product-description p-10 text-center">
                  <div class="product-title product-title_news">
                    <h4>
                      <a
                        href="http://www.chinatimes.com/newspapers/20160519000172-260204"
                        target="_blank"
                        >陽光PARK 安坑版小松菸 創業家最</a
                      >
                    </h4>
                    <span style="color:#999"
                      >【中時電子報/鄭啟明報導】相較鄰近中和辦公樓每坪40-50萬行情，及寶橋路宏達電總部周邊商辦每坪45至50萬</span
                    >
                    <div class="m-t-30">
                      <a
                        class="NewsConBtn text-center button border rounded effect fill-vertical"
                        href="http://www.chinatimes.com/newspapers/20160519000172-260204"
                        target="_blank"
                        ><span>閱讀全文</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 廣告特惠戶區塊 -->
        <section
          class="sectionMP"
          id="section-SaleHouse"
          style="display: none;"
        >
          <div class="container">
            <div class="heading heading-center m-b-0" data-animation="fadeIn">
              <h2>廣告特惠戶</h2>
              <span class="lead">小圖：800x600 大圖:1200x600 72dpi</span>
            </div>
          </div>
          <div class="container">
            <div
              class="hidden-xs hidden-sm btn orangebtn arr"
              id="HousecustomPrevBtn"
            >
              <i class="fa fa-angle-left"></i>
            </div>
            <div
              class="hidden-xs hidden-sm btn orangebtn arr"
              id="HousecustomNextBtn"
            >
              <i class="fa fa-angle-right"></i>
            </div>
            <div id="SaleHouse" class="shop-products">
              <div class="product">
                <div class="product-image">
                  <a href="img/NewsCover_big.jpg" data-lightbox-type="image"
                    ><img alt="立信吾界的圖片" src="img/NewsCover.jpg" />
                  </a>
                </div>
                <div class="product-description p-10">
                  <div
                    class="product-title product-title_news m-b-20 text-center"
                  >
                    <h4>宇宙無敵天下無雙最強之海景套房</h4>
                    <span style="color:#999"
                      >【中時電子報/鄭啟明報導】相較鄰近中和辦公樓每坪40-50萬行情，及寶橋路宏達電總部周邊商辦每坪45至50萬</span
                    >
                    <div class="m-t-30">
                      <a
                        class="SaleHouseBtn text-center button border rounded effect fill-vertical"
                        href="include/ajax/Sale-house.html"
                        data-lightbox-type="ajax"
                        ><span>詳細內容</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="product">
                <div class="product-image">
                  <a href="img/NewsCover_big.jpg" data-lightbox-type="image"
                    ><img alt="立信吾界的圖片" src="img/NewsCover.jpg" />
                  </a>
                </div>
                <div class="product-description p-10">
                  <div
                    class="product-title product-title_news m-b-20 text-center"
                  >
                    <h4>宇宙無敵天下無雙最強之海景套房</h4>
                    <span style="color:#999"
                      >【中時電子報/鄭啟明報導】相較鄰近中和辦公樓每坪40-50萬行情，及寶橋路宏達電總部周邊商辦每坪45至50萬</span
                    >
                    <div class="m-t-30">
                      <a
                        class="SaleHouseBtn text-center button border rounded effect fill-vertical"
                        href="include/ajax/Sale-house.html"
                        data-lightbox-type="ajax"
                        ><span>詳細內容</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="product">
                <div class="product-image">
                  <a href="img/NewsCover.jpg" data-lightbox-type="image"
                    ><img alt="立信吾界的圖片" src="img/NewsCover.jpg" />
                  </a>
                </div>
                <div class="product-description p-10">
                  <div
                    class="product-title product-title_news m-b-20 text-center"
                  >
                    <h4>宇宙無敵天下無雙最強之海景套房</h4>
                    <span style="color:#999"
                      >【中時電子報/鄭啟明報導】相較鄰近中和辦公樓每坪40-50萬行情，及寶橋路宏達電總部周邊商辦每坪45至50萬</span
                    >
                    <div class="m-t-30">
                      <a
                        class="SaleHouseBtn text-center button border rounded effect fill-vertical"
                        href="include/ajax/Sale-house.html"
                        data-lightbox-type="ajax"
                        ><span>詳細內容</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 影片介紹區塊 -->
        <section
          class="sectionMP parallax background-grey"
          id="section-CF"
          style="background-image: url(images/parallax/12.jpg);display: none;"
          data-stellar-background-ratio="0.6"
        >
          <div class="container">
            <div
              class="heading heading-center m-b-40"
              data-animation="fadeIn"
            >
              <h2>影片介紹</h2>
              <span class="lead">買舊不如換新 竹圍唯一新案 預售開價近成屋</span>
            </div>
          </div>
          <div class="container">
            <div class="row" data-animation="pulse" data-animation-delay="0">
              <div class="col-md-12 text-center">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/WC3ojfUoTQ4"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <!-- 交通 -->
        <section
          id="section-Traffic"
          class="sectionMP m-t-50 m-b-50"
          style="border-top:1px solid #eee;border-bottom:1px solid #eee;padding:0px; display: none;"
        >
          <div class="container">
            <div
              class="heading heading-center m-b-40"
              data-animation="fadeIn"
            >
              <h2>交通指引</h2>
              <span class="lead">圖：800x500 72dpi</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-7">
              <div class="post-mini-slider pagination-bottom">
                <img alt="image" src="img/m2.jpg" />
                <img alt="image" src="img/m2.jpg" />
                <img alt="image" src="img/m2.jpg" />
              </div>
            </div>
            <div class="col-md-5">
              <div class="p-20">
                <div class="m-t-20" style="font-size:16px;">
                  <h5 class="Ch5">開車</h5>
                  <p class="small">
                    路線一: 行駛北二高，下基金交流道，沿著基金一路，左轉武崙街。
                  </p>
                  <p class="small">
                    路線二:
                    從中山高接台62線萬瑞快速道路，從萬里出口，沿著基金一路，右轉武崙街。
                  </p>
                  <h5 class="Ch5">公路客運</h5>
                  <p class="small">
                    1815路線:
                    台北車站東三門→審計部→臺北科技大學→正義郵局→捷運忠孝復興站→捷運忠孝敦化站→觀光局→市府轉運站→……→情人湖→鐵店(此站下車)
                  </p>
                  <p class="small">
                    9026路線:
                    南港車站→捷運南港展覽館→……→情人湖路口→金山鐵店(此站下車)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 地圖區塊 -->
        <section
          class="sectionMP"
          id="section-GoogleMap"
          style="display: none;"
        >
          <div class="container">
            <div
              class="heading heading-center m-b-40"
              data-animation="fadeIn"
            >
              <h2>台北市忠孝東路四段1號</h2>
              <span class="lead">買舊不如換新 竹圍唯一新案 預售開價近成屋</span>
            </div>
          </div>
          <div class="container">
            <div
              class="map"
              data-map-address="25.056107,121.45243"
              data-map-zoom="15"
              data-map-icon="images/markers/marker1.png"
              data-map-type="ROADMAP"
            ></div>
          </div>
        </section>

        <!-- 建案資訊區塊 -->
        <section
          class="sectionMP background-grey"
          id="section-Info"
          style="display: none;"
        >
          <div class="container">
            <div
              class="heading heading-center m-b-40 text-light"
              data-animation="fadeIn"
            >
              <h2>建案資訊</h2>
            </div>
          </div>
          <div class="container">
            <div class="table-responsive">
              <table class="table table-bordered table-striped">
                <colgroup>
                  <col class="col-xs-4" />
                  <col class="col-xs-4" />
                </colgroup>
                <tbody>
                  <tr>
                    <td>工程營造：紹華營造</td>
                    <td>投資建設：捷運都會建築股份有限公司</td>
                  </tr>
                  <tr>
                    <td>建築規劃：秦境建築師事務所</td>
                    <td>公設規劃：大涵國際室內設計</td>
                  </tr>
                  <tr>
                    <td>燈光設計：兩岸巨擘袁宗南大師</td>
                    <td>景觀規劃：老圃造園工程</td>
                  </tr>
                  <tr>
                    <td>使用分區：住宅區及捷運系統用地</td>
                    <td>投資建設：捷運都會建築股份有限公司</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span class="lead visible-xs text-center"
              ><img src="img/hand.png" alt="立信吾界的圖片" style="margin-top:10px;"
            /></span>
          </div>
        </section>

        

        <!-- 預約參觀區塊 -->
        <section
          class="sectionMP"
          id="section-Reservation"
          style="background: url(img/pc-12-back.jpg);padding: 40px 0;height: auto;"
        >
          <div class="container">
            <div class="heading-center">
              <h2
                style="font-size: 42px;color:#fff;width: 100%;text-align: center;"
              >
                預約賞屋
              </h2>
            </div>
            <div class="row">
              <!-- <div class="col-md-6 m-t-20">
                <div class="row">
                  <div class="form-group col-sm-12">
                    <input
                      class="form-control name infoTitle"
                      value="建案名稱"
                    />
                  </div>
                  <div class="form-group col-sm-12">
                    <input class="form-control infoCon" value="超級大案" />
                  </div>
                  <div class="form-group col-sm-12">
                    <input
                      class="form-control name infoTitle"
                      value="建案地址"
                    />
                  </div>
                  <div class="form-group col-sm-12">
                    <input
                      class="form-control infoCon"
                      value="新北市頭前路158號"
                    />
                  </div>
                  <div class="form-group col-sm-12">
                    <input
                      class="form-control email infoTitle"
                      value="連絡電話"
                    />
                  </div>
                </div>
                <a
                  href="tel:0228488811"
                  class="button red-dark rounded icon-center text-center TELBtn"
                  ><span>02-7709-9988</span></a
                >
              </div> -->
              <div class="col-md-12 m-t-20" id="onlinereg">
                <form
                  id="myform"
                  action="contact-form.php" 
                  role="form" 
                  method="post"
                >

                <input type="hidden" id="utm_source"   value="<?=$_GET['utm_source']?>"   name="utm_source" >
                <input type="hidden" id="utm_medium"   value="<?=$_GET['utm_medium']?>"   name="utm_medium">
                <input type="hidden" id="utm_content"  value="<?=$_GET['utm_content']?>"  name="utm_content">
                <input type="hidden" id="utm_campaign" value="<?=$_GET['utm_campaign']?>" name="utm_campaign">

                  <div class="row">
                    <div class="form-group col-sm-6">
                      <input
                        id="name"
                        type="text"
                        aria-required="true"
                        name="widget-contact-form-name"
                        class="form-control required name"
                        placeholder="請輸入您的姓名"
                      />
                    </div>
                    <!-- <div class="form-group col-sm-6 formSex">
                      <input
                        type="radio"
                        name="optionsRadios"
                        id="optionsRadios1"
                        value="option1"
                        checked
                      />
                      男 &nbsp;&nbsp;
                      <input
                        type="radio"
                        name="optionsRadios"
                        id="optionsRadios2"
                        value="option1"
                        checked
                      />
                      女
                    </div> -->
                    <div class="form-group col-sm-6">
                      <input
                        id="phone"
                        type="text"
                        name="widget-contact-form-phone"
                        class="form-control required"
                        placeholder="請輸入您的手機號碼"
                      />
                    </div>
                    <div class="form-group col-sm-12">
                      <input
                        id="email"
                        type="email"
                        aria-required="true"
                        name="widget-contact-form-email"
                        class="form-control email"
                        placeholder="請輸入您的Email"
                      />
                    </div>
                    <div class="clearfix"></div>
                    <div class="form-group col-sm-6">
                      <select
                        id="selectcity"
                        name="widget-contact-form-city"
                        class="form-control"
                        style="height:56px;"
                      ></select>
                    </div>
                    <div class="form-group col-sm-6">
                      <select
                        id="selectarea"
                        name="widget-contact-form-area"
                        class="form-control"
                        style="height:56px;"
                      ></select>
                    </div>
                    <div class="form-group col-sm-12">
                      <textarea
                        type="text"
                        class="form-control"
                        id="widget-contact-form-antispam"
                        name="widget-contact-form-msg"
                        placeholder="輸入您的留言"
                      ></textarea>
                    </div>
                    <div class="form-group col-sm-12">
                      <input type="checkbox" 
                      id="checkbox_form"
                      class="messageCheckbox privacy-checkbox form-check-input" style="width: 17px;height: 17px;">
                      <span class="privacy-announce">本人知悉並同意<a
                        href="include/ajax/Privacy-policy.html"
                        data-lightbox-type="ajax"
                        ><span>『個資告知事項聲明』</span></a
                        >內容</span>
                        <div style="color:#f00 !important;" id="msgerror" class="m-b-10"></div>
                      <a
                        href="javascript:SendScore();" 
                        class="btn formSendBtn"
                        id="form-submit"
                        style="color: #666;background: #fff;display: none;"
                      >
                        <i class="fa fa-paper-plane"></i>&nbsp;立即預約
                      </a>
                    </div>
                  </div>
                </form>
                <script type="text/javascript" src="js/form.js?v=14"></script>
                <script type="text/javascript">
                  // var lastScrollLeft = 0
                  // jQuery('#widget-contact-form').validate({
                  //   submitHandler: function(form) {
                      // jQuery.get("https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec",{
                      //   "name": name,
                      //   "phone": phone,
                      //   "email": email,
                      //   "cityarea":"<?=$city?><?=$area?>",
                      //   "msg":"<?=$msg?>",
                      //   "utm_source":"<?=$utm_source?>",
                      //   "utm_medium":"<?=$utm_medium?>",
                      //   "utm_content":"<?=$utm_content?>",
                      //   "utm_campaign":"<?=$utm_campaign?>",
                      //   "date":"<?=$datetime?>",
                      //   "campaign_name":"<?=$case_name?>"
                      // },
                      // function (data) {
                      //     document.location.replace('thank.php');
                      // });
                      // jQuery(form).ajaxSubmit({
                      //   success: function(text) {
                      //     if (text.response == 'success') {
                      //       $.notify(
                      //         {
                      //           message:
                      //             '我們已<strong>成功</ strong>收到您的訊息，並會盡快與您聯繫。'
                      //         },
                      //         {
                      //           type: 'success'
                      //         }
                      //       )
                      //       $(form)[0].reset()
                      //     } else {
                      //       $.notify(
                      //         {
                      //           message: text.message
                      //         },
                      //         {
                      //           type: 'danger'
                      //         }
                      //       )
                      //     }
                      //   }
                      // })
                  //   }
                  // })
                </script>
              </div>
            </div>
          </div>
        </section>

        <section
          class="sectionMP"
          style="background-color:#085f65;padding: 20px 0px;height: auto;"
        >
          <div class="col-md-4 col-sm-12">
            <div class="house-info-title">建案資料</div>
            <div class="house-info-desc">建案名稱 SUPERTREE 超級花園</div>
            <div class="house-info-desc">使照號碼 105汐使字第00337號</div>
            <div class="house-info-desc">投資興建 漢翔開發</div>
            <div class="house-info-desc">企劃銷售 海沃創意行銷</div>
            <div class="house-info-desc">廣告表現 海沃創意行銷</div>
            <div class="house-info-desc">建築規劃 森峰建築師事務所</div>
            <div class="house-info-desc">景觀設計 環藝景觀設計</div>
            <div class="house-info-desc">坪數房型 32-37坪</div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="house-info-title">聯絡資訊</div>
            <div class="house-info-border" onclick="callAndRedirectToThanks();" style="cursor: pointer;"><i class="fa fa-phone" style="top:1px;"></i>02-86421155</div>
            <div></div>
            <a href="https://goo.gl/maps/J4WVWw1z8jk" target="_blank" class="house-info-border"><i class="fa fa-location-arrow" style="top:1px;"></i>新北市汐止區樟樹二路93號</a>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="house-info-title">facebook</div>
            <!-- <a class="house-info-link" href="https://zh-tw.facebook.com/94garden/" target="_blank"><img src="img/fb.png" alt="立信吾界的圖片"></a> -->
            <iframe width='340' height='130' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F94garden&tabs=timeline&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'></iframe>
          </div>
        </section>
        <script type="text/javascript">
          const callAndRedirectToThanks = () => {
            // document.location.href = 'tel:0286421155';
            window.location.href="call.php";
            // 跳轉感謝頁
          }
        </script>

        <section class="sectionMP" style="padding: 0px 0px;height: auto;">
          <img
            src="img/pc-14.jpg"
            alt="立信吾界的圖片"
            style="width: 100%;height: auto;float: left;"
          />
        </section>
        <section class="sectionMP" style="padding: 0px 0px;height: auto;">
          <img
            class="hidden-sm hidden-xs"
            src="img/pc-15.jpg"
            alt="立信吾界的圖片"
            style="width: 100%;height: auto;float: left;max-height: 50px;"
          />
          <img
            class="visible-sm visible-xs"
            src="img/pc-15.jpg"
            alt="立信吾界的圖片"
            style="width: 100%;height: auto;float: left;max-height: 30px;"
          />
          <a
            href="https://www.h35.tw/admin/test/login.php"
            target="_blank"
            style="font-size: 16px;color: #fff;position: absolute;left: 0; right: 0;margin: 0 auto;top: 50%; transform: translateY(-50%);text-align: center;"
          >
            SUPER TREE 製作
          </a>
        </section>

        <!-- 滑動區塊 -->
        <div
          style="display: none"
          class="carousel clients-carousel"
          data-carousel-col="6"
          data-carousel-margins="0"
          data-carousel-col-xs="3"
          data-carousel-autoplay="true"
        >
          <div>
            <a href="#"><img alt="立信吾界的圖片" src="images/clients/1.png" /> </a>
          </div>
          <div>
            <a href="#"><img alt="立信吾界的圖片" src="images/clients/2.png" /> </a>
          </div>
          <div>
            <a href="#"><img alt="立信吾界的圖片" src="images/clients/3.png" /> </a>
          </div>
          <div>
            <a href="#"><img alt="立信吾界的圖片" src="images/clients/4.png" /> </a>
          </div>
          <div>
            <a href="#"><img alt="立信吾界的圖片" src="images/clients/5.png" /> </a>
          </div>
          <div>
            <a href="#"><img alt="立信吾界的圖片" src="images/clients/6.png" /> </a>
          </div>
          <div>
            <a href="#"><img alt="立信吾界的圖片" src="images/clients/7.png" /> </a>
          </div>
          <div>
            <a href="#"><img alt="立信吾界的圖片" src="images/clients/8.png" /> </a>
          </div>
          <div>
            <a href="#"><img alt="立信吾界的圖片" src="images/clients/9.png" /> </a>
          </div>
        </div>

        <!-- footer區塊 -->
        <footer
          class="background-dark text-grey footer-color"
          id="footer"
          style="display: none;"
        >
          <div class="copyright-content footer-border-color">
            <div class="container">
              <div class="row text-center bottomMenu">
                <div class="bottomMenu_block">
                  <a href="#section-OneBigImg">建案主頁</a>
                </div>
                <div class="bottomMenu_block">
                  <a href="#section-Pattern">格局規劃</a>
                </div>
                <div class="bottomMenu_block">
                  <a href="#section-VR">實境賞屋</a>
                </div>
                <div class="bottomMenu_block">
                  <a href="#section-skyPan">空拍環景</a>
                </div>
                <div class="bottomMenu_block">
                  <a href="#section-Event">精彩活動</a>
                </div>
                <div class="bottomMenu_block">
                  <a href="#section-News">媒體報導</a>
                </div>
                <div class="bottomMenu_block">
                  <a href="#section-SaleHouse">廣告特惠</a>
                </div>
                <div class="bottomMenu_block">
                  <a href="#section-CF">影片介紹</a>
                </div>
                <div class="bottomMenu_block">
                  <a href="#section-Traffic">交通指引</a>
                </div>
                <div class="bottomMenu_block">
                  <a href="#section-Info">建案資訊</a>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright-content footer-border-color">
            <div class="row text-center">
              <img alt="立信吾界的圖片" src="images/logo-sm-dark.png" />
              <div class="copyright-text text-center m-b-10">
                &copy; 2016 匯點廣告製作<BR />
                <a
                  href="include/ajax/Privacy-policy.html"
                  data-lightbox-type="ajax"
                  ><span>隱私權聲明</span></a
                >
              </div>
              <div
                class="social-icons social-icons-large social-icons-colored social-icons-rounded center"
              >
                <ul>
                  <li>
                    <a href="http://line.naver.jp/R/msg/text/?<?echo "$description"?>"                      class="line"
                      title="Share to Line"
                    >
                      <img width="55px" height="55px" src="img/line.png" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.facebook.com/sharer.php?m2w&u=https://<?echo "$caseurl"?>.h35.tw/"                      class="facebook"
                      title="Share to Facebook"
                    >
                      <img width="55px" height="55px" src="img/fb.png" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank"  title="Google+ 分享" href="https://plus.google.com/share?url=https://plus.google.com/share?url=https://<?echo '$caseurl'?>.h35.tw/" >
                      <img width="55px" height="55px" src="img/google.png" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="img/m1.jpg"
                      data-lightbox-type="image"
                      title="QRCODE"
                    >
                      <img width="55px" height="55px" src="img/qrcode.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>

    <!-- GO TOP BUTTON -->
    <a class="gototop gototop-button visible-lg visible-md" href="#"
      ><i class="fa fa-chevron-up"></i
    ></a>
    <a class="goto-order nav-to visible-lg visible-md" href="#section-Reservation"
      ><img src="img/preorder.png" alt="立信吾界的圖片"></a>

    <!-- Theme Base, Components and Settings -->
    <script src="js/theme-functions.js?d=1222"></script>

    <!-- Custom js file -->
    <script src="js/custom.js"></script>
  </body>
</html>
