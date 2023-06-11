<?php
include __DIR__ . "/../models/ProductPage.model.php";

class ProductPageController
{
  private $model;
  private $productId;
  private $productInfo;
  private $productImageList;

  public function __construct()
  {
    $this->model = new ProductPageModel();
    $this->productId = isset($_GET["id"]) ? $_GET["id"] : null;

    if (!$this->productId) {
      $this->handleError();
    }
  }

  public function invoke()
  {
    $this->productInfo = $this->model->getProductInfo($this->productId);
    $this->productImageList = $this->model->getImageForProduct(
      $this->productId
    );

    include_once __DIR__ . "/../views/ProductPage/index.php";
  }

  private function handleError()
  {
    exit("Không tìm thấy sản phẩm!");
  }
}
