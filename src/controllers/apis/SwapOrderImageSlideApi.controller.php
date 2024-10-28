<?php

include_once __DIR__ . "/../../assets/utils/commonMethod.util.php";
include_once __DIR__ . "/../../models/apis/SwapOrderImageSlideApi.model.php";

class SwapOrderImageSlideApiController
{
  private $order1;
  private $order2;
  private $model;

  public function __construct()
  {
    // Validate data
    $this->validateData();

    // Init value
    $this->model = new SwapOrderImageSlideApiModel();
    $this->order1 = $_POST["order1"];
    $this->order2 = $_POST["order2"];

    // Handle swap order
    $swapSuccess = $this->model->handleSwapOrderImage(
      $this->order1,
      $this->order2
    );

    if ($swapSuccess) {
      exit(json_encode(["error" => false]));
    } else {
      $this->handleError("Error: swapOrder failed");
    }
  }

  private function validateData()
  {
    if (
      !isset(
        $_POST["order1"],
        $_POST["order2"],
        $_SESSION["userId"],
        $_SESSION["rankId"]
      )
    ) {
      $this->handleError("Error: Data invalid");
    }

    if (!isAdmin($_SESSION["rankId"])) {
      $this->handleError("Error: Permission denied");
    }
  }

  private function handleError(string $message)
  {
    http_response_code(400);
    exit(json_encode($message));
  }
}
