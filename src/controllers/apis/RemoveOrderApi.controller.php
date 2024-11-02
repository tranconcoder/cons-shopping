<?php
include_once __DIR__ . "/../../models/apis/RemoveOrderApi.model.php";

class RemoveOrderApiController
{
  private RemoveOrderApiModel $model;

  private string $orderId;

  public function __construct()
  {
    $this->model = new RemoveOrderApiModel();

    $this->orderId = $_GET["orderId"];

    if (!isset($this->orderId)) {
      handleError("Missing field: orderId!");
    }

    $result = $this->model->removeOrder($this->orderId);

    if ($result) {
      exit(true);
    } else {
      handleError("Error while remove order");
    }
  }
}
