<?php
include_once __DIR__ . "/../../models/apis/GetProductImageApi.model.php";

class GetProductImageApiController
{
  private $model;
  private $productId;

  public function __construct()
  {
    $this->validateData();
    $this->model = new GetProductImageApiModel();

    exit(json_encode($this->model->getProductImage($this->productId)));
  }

  private function validateData()
  {
    if (!isset($_POST["tableName"])) {
      $this->handleError("Error: validate data");
    }
  }

  private function handleError(string $message)
  {
    http_response_code(400);
    exit(json_encode(["error" => true, "message" => $message]));
  }
}
