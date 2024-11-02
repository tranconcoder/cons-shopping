<?php
session_start();

error_reporting(E_ALL);
ini_set("display_errors", "On");
header("Content-Security-Policy: script-src 'self'");

// Include util
include_once __DIR__ . "/./src/assets/utils/index.php";
include_once __DIR__ . "/./src/config/db/connect.php";
include_once __DIR__ . "/./src/controllers/layouts/Layout1.controller.php";

$uri = isset($_SERVER["REQUEST_URI"]) ? $_SERVER["REQUEST_URI"] : "";
$uri = explode("?", $uri, 2)[0];
$controllerDir = __DIR__ . "/./src/controllers";

switch ($uri) {
  case "/api/register":
    include_once $controllerDir . "/apis/RegisterApi.controller.php";
    $registerApi = new RegisterApi();
    exit();

  case "/api/login":
    include_once $controllerDir . "/apis/LoginApi.controller.php";
    $loginApi = new LoginApi($_POST["username"], $_POST["password"]);
    exit();

  case "/api/logout":
    include_once $controllerDir . "/apis/LogoutApi.controller.php";
    $logoutApi = new LogoutApi();
    exit();

  case "/api/search-product":
    include_once $controllerDir . "/apis/SearchProductApi.controller.php";
    $searchProductApi = new SearchProductApi();
    exit();

  case "/api/change-image-slider":
    include_once $controllerDir . "/apis/ChangeImageSliderApi.controller.php";
    $changeImageSliderApi = new ChangeImageSliderApiController();
    exit();

  case "/api/add-image-slider":
    include_once $controllerDir . "/apis/AddImageSliderApi.controller.php";
    $addImageSliderApi = new AddImageSliderApiController();
    exit();

  case "/api/remove-image-slider":
    include_once $controllerDir . "/apis/RemoveImageSliderApi.controller.php";
    new RemoveImageSliderApiController();
    exit();

  case "/api/update-info-image-slider":
    include_once $controllerDir .
      "/apis/ChangeInfoImageSliderApi.controller.php";
    new ChangeInfoImageSliderApiController();
    exit();

  case "/api/swap-order-image-slider":
    include_once $controllerDir . "/apis/SwapOrderImageSlideApi.controller.php";
    new SwapOrderImageSlideApiController();
    exit();

  //
  // PRODUCT
  //
  case "/api/get-product":
    include_once $controllerDir . "/apis/GetProductApi.controller.php";
    new GetProductApiController();
    exit();

  case "/api/get-all-product":
    include_once $controllerDir . "/apis/GetAllProductApi.controller.php";
    new GetAllProductApiController();

  case "/api/change-product-info":
    include_once $controllerDir . "/apis/ChangeProductInfoApi.controller.php";
    new ChangeProductInfoApiController();

  case "/api/remove-product":
    include_once $controllerDir . "/apis/RemoveProductApi.controller.php";
    new RemoveProductApiController();

  //
  // ORDER
  //
  case "/api/add-order":
    include_once $controllerDir . "/apis/AddOrderApi.controller.php";
    new AddOrderApiController();

  case "/api/remove-order":
    include_once $controllerDir . "/apis/RemoveOrderApi.controller.php";
    new RemoveOrderApiController();

  //
  // DEAL
  //
  case "/api/get-all-deal":
    include_once $controllerDir . "/apis/GetAllDealApi.controller.php";
    new GetAllDealApiController();

  case "/api/get-product-images":
    include_once $controllerDir . "/apis/GetProductImageApi.controller.php";
    new GetProductImageApiController();

  case "/api/change-image":
    include_once $controllerDir / "/apis/ChangeImageApi.controller.php";
    new ChangeImageApiController();

  case "/api/remove-product-image":
    include_once $controllerDir . "/apis/RemoveProductImageApi.controller.php";
    $removeProductImageApiController = new RemoveProductImageApiController();
    exit();

  case "/api/add-product-image":
    include_once $controllerDir . "/apis/AddProductImageApi.controller.php";
    $addProductImageApiController = new AddProductImageApiController();
    exit();

  case "/api/add-product":
    include_once $controllerDir . "/apis/AddProductApi.controller.php";
    $addProductApiController = new AddProductApiController();
    exit();

  case "/product":
    include_once $controllerDir . "/ProductPage.controller.php";

    $bodyController = new ProductPageController();
    $controller = new Layout1Controller($bodyController);

    break;

  case "/search":
    include_once $controllerDir . "/ProductListPage.controller.php";

    $bodyController = new ProductListPageController();
    $controller = new Layout1Controller($bodyController);

    break;

  case "/admin":
    include_once $controllerDir . "/AdminPage.controller.php";

    if (!isset($_SESSION["userId"])) {
      header("Location: /");
      exit();
    }

    $bodyController = new AdminPageController();
    $controller = new Layout1Controller($bodyController);

    break;

  case "/cart":
    include_once $controllerDir . "/CartPage.controller.php";

    $bodyController = new CartPageController();
    $controller = new Layout1Controller($bodyController);

    break;

  case "/order":
    include_once $controllerDir . "/OrderPage.controller.php";
    $bodyController = new OrderPageController();
    $controller = new Layout1Controller($bodyController);

    break;

  case "/payment":
    include_once $controllerDir . "/PaymentPage.controller.php";
    $bodyController = new PaymentPageController();
    $controller = new Layout1Controller($bodyController);
    break;

  default:
    include_once $controllerDir . "/HomePage.controller.php";

    $bodyController = new HomePageController();
    $controller = new Layout1Controller($bodyController);
}

$controller->invoke();
