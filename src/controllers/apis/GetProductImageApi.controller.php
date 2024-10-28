<?php
include_once __DIR__ . "/../../models/apis/GetProductImageApi.model.php";

class GetProductImageApiController
{
  private $model;
  private $productId;

  public function __construct()
  {
    $this->validateData();
    $this->productId = $_GET["productId"];
    $this->model = new GetProductImageApiModel();

    exit(json_encode($this->model->getProductImages($this->productId)));
  }

  private function validateData()
  {
    if (!isset($_GET["productId"])) {
      $this->handleError("Error: validate data");
    }
  }

  private function handleError(string $message)
  {
    http_response_code(400);
    exit(json_encode(["error" => true, "message" => $message]));
  }
}
