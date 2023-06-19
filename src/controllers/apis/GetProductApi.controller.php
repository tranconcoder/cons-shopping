<?php
include_once __DIR__ . "/../../models/apis/GetProductApi.model.php";

class GetProductApiController
{
  private $model;
  private $productId;
  private $product;

  public function __construct()
  {
    $this->validateData();

    // Init data
    $this->model = new GetProductApiModel();
    $this->productId = $_GET["productId"];
    $this->product = $this->model->getProduct($this->productId);

    if (!$this->product) {
      $this->handleError("Error: not found product");
    } else {
      exit(json_encode($this->product));
    }
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
