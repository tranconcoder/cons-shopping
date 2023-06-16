<?php

include_once __DIR__ . "/../models/ProductListPage.model.php";

class ProductListPageController
{
  // Query to search
  private $model;
  private $query;
  private $productList;

  public function __construct()
  {
    $this->model = new ProductListPageModel();
    $this->query = isset($_GET["q"]) ? $_GET["q"] : null;
    $this->productList = $this->model->search($this->query);
    $this->model->addNewSearchHistory($this->query);
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
