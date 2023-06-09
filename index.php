<?php
include_once "./src/config/db/connect.php";
include_once __DIR__ . "/./src/controllers/layouts/Layout1.controller.php";

$uri = isset($_SERVER["REQUEST_URI"]) ? $_SERVER["REQUEST_URI"] : "";
$uri = explode("?", $uri, 2)[0];

$controller;

switch ($uri) {
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
