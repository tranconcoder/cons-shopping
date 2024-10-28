<?php
include_once __DIR__ . "/../../models/apis/RemoveProductApi.model.php";

class RemoveProductApiController
{
  private $productId;
  private $model;

  public function __construct()
  {
    // validate data
    $this->validateData();

    $this->model = new RemoveProductApiModel();
    $this->productId = $_POST["productId"];

    // Handle remove
    $removeSuccess = $this->model->removeProduct($this->productId);

    if ($removeSuccess) {
      exit(json_encode(["error" => false]));
    } else {
      $this->handleError("Error: can not remove on DB");
    }
  }

  private function validateData()
  {
    if (!isset($_POST["productId"], $_SESSION["userId"], $_SESSION["rankId"])) {
      $this->handleError("Error: validate data");
    }

    if (!isAdmin($_SESSION["rankId"])) {
      $this->handleError("Error: Permission denied");
    }
  }

  private function handleError($message)
  {
    http_response_code(400);
    exit(json_encode(["error" => true, "message" => $message]));
  }
}
