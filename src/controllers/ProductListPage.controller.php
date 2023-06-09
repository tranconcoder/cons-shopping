<?php

include_once __DIR__ . "/../models/ProductListPage.model.php";

class ProductListPageController
{
  private ProductListPageModel $model;

  // Query to search
  private $query = null;
  private $productList;

  public function __construct()
  {
    $this->query = isset($_GET["q"]) ? $_GET["q"] : null;
    $this->model = new ProductListPageModel();
    $this->productList = $this->model->searchProduct($this->query);
  }

  public function invoke()
  {
    include_once __DIR__ . "/../views/ProductListPage/index.php";
  }

  private function renderProductList()
  {
    foreach ($this->productList as $product) {
      include __DIR__ . "/../views/ProductListPage/product-list-item.php";
    }
  }
}
