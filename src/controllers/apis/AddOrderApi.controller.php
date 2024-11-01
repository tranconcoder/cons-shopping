<?php
include_once __DIR__ . "/../../models/apis/AddOrderApi.model.php";

class AddOrderApiController
{
  private AddOrderApiModel $model;

  private string $userId;
  private string $address;
  private string $note;
  private object $product;

  public function __construct()
  {
    $this->model = new AddOrderApiModel();

    $this->userId = $_SESSION["userId"];
    $this->address = $_POST["address"];
    $this->note = $_POST["note"];
    $this->product = json_decode($_POST["product"]);

    $orderId = $this->model->addOrder(
      $this->userId,
      $this->address,
      $this->note
    );

    if (!$orderId) {
      $this->handleError("Error: Server error!");
    }

    $this->model->addOrderDetail($this->product, $orderId);

    http_response_code(201);
    exit("\"" . $orderId . "\"");
  }

  private function handleError(string $message, int $code = 400)
  {
    http_response_code($code);
    exit(json_encode(["error" => true, "message" => $message]));
  }
}
