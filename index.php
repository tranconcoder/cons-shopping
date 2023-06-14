<?php
session_start();

// Include util
include_once __DIR__ . "/./src/assets/utils/index.php";

include_once "./src/config/db/connect.php";
include_once __DIR__ . "/./src/controllers/layouts/Layout1.controller.php";

$uri = isset($_SERVER["REQUEST_URI"]) ? $_SERVER["REQUEST_URI"] : "";
$uri = explode("?", $uri, 2)[0];

$controller;

switch ($uri) {
  case "/api/register":
    include_once __DIR__ . "/./src/controllers/apis/RegisterApi.controller.php";

    $registerApi = new RegisterApi();

    exit();

  case "/api/login":
    include_once __DIR__ . "/./src/controllers/apis/LoginApi.controller.php";

    $loginApi = new LoginApi($_POST["username"], $_POST["password"]);

    exit();

  case "/api/logout":
    include_once __DIR__ . "/./src/controllers/apis/LogoutApi.controller.php";

    $logoutApi = new LogoutApi();

    exit();

  case "/api/search-product":
    include_once __DIR__ .
      "/./src/controllers/apis/SearchProductApi.controller.php";

    $searchProductApi = new SearchProductApi();

    exit();

  case "/product":
    include_once __DIR__ . "/./src/controllers/ProductPage.controller.php";

    $bodyController = new ProductPageController();
    $controller = new Layout1Controller($bodyController);

    break;

  case "/search":
    include_once __DIR__ . "/./src/controllers/ProductListPage.controller.php";

    $bodyController = new ProductListPageController();
    $controller = new Layout1Controller($bodyController);

    break;

  default:
    include_once __DIR__ . "/./src/controllers/HomePage.controller.php";

    $bodyController = new HomePageController();
    $controller = new Layout1Controller($bodyController);
}

$controller->invoke();
