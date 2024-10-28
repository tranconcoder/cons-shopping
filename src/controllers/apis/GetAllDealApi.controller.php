<?php
include_once __DIR__ . "/../../models/apis/GetAllDealApi.model.php";

class GetAllDealApiController
{
  private $model;
  private $dealList;

  public function __construct()
  {
    $this->model = new GetAllDealApiModel();
    $this->dealList = $this->model->getAllDeal();

    exit(json_encode($this->dealList));
  }
}
