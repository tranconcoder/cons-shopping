<?php
include_once __DIR__ . "/../../models/apis/GetAllProductApi.model.php";

class GetAllProductApiController
{
  private $model;
  private $productList;

  public function __construct()
  {
    $this->model = new GetAllProductApiModel();
    $this->productList = $this->model->getAllProduct();

    exit(json_encode($this->productList));
  }
}
