<?php

include_once __DIR__ . "/./../models/AdminPage.model.php";
include_once __DIR__ . "/../assets/utils/commonMethod.util.php";

class AdminPageController
{
  private $model;
  private $imageSlideInfoList;
  private $productList;
  private $dealList;

  public function __construct()
  {
    $this->validatePermission();

    $this->model = new AdminPageModel();
    $this->imageSlideInfoList = $this->model->getHomeImageSlideInfoList();
    $this->productList = $this->model->getAllProduct();
    $this->dealList = $this->model->getAllDeal();
  }

  public function invoke()
  {
    include_once __DIR__ . "/../views/AdminPage/index.php";
  }

  private function validatePermission()
  {
    if (!isset($_SESSION["rankId"]) || !isAdmin($_SESSION["rankId"])) {
      http_response_code(400);
      header("Location: /");
      exit();
    }
  }

  private function renderImageSlideInfo()
  {
    foreach ($this->imageSlideInfoList as $imageSlideInfo) {
      include __DIR__ . "/../views/AdminPage/homeImageSlideRow.php";
    }
  }

  private function renderProductList()
  {
    foreach ($this->productList as $product) {
      include __DIR__ . "/../views/AdminPage/productListItem.php";
    }
  }
}
