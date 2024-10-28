<?php

include_once __DIR__ . "/../../models/apis/ChangeProductInfoApi.model.php";

class ChangeProductInfoApiController
{
  private $model;

  private $productId;

  private $monitorWidth;
  private $monitorHeight;
  private $processor;
  private $memory;
  private $storage;
  private $sizeWidth;
  private $sizeHeight;
  private $cost;
  private $label;
  private $color;

  public function __construct()
  {
    // Init data
    $this->model = new ChangeProductInfoApiModel();
    $this->productId = isset($_POST["productId"]) ? $_POST["productId"] : "";
    $this->label = isset($_POST["label"]) ? $_POST["label"] : "";
    $this->color = isset($_POST["color"]) ? $_POST["color"] : "";
    $this->monitorWidth = isset($_POST["monitorWidth"])
      ? $_POST["monitorWidth"]
      : "";
    $this->monitorHeight = isset($_POST["monitorHeight"])
      ? $_POST["monitorHeight"]
      : "";
    $this->processor = isset($_POST["processor"]) ? $_POST["processor"] : "";
    $this->memory = isset($_POST["memory"]) ? $_POST["memory"] : "";
    $this->storage = isset($_POST["storage"]) ? $_POST["storage"] : "";
    $this->sizeWidth = isset($_POST["sizeWidth"]) ? $_POST["sizeWidth"] : "";
    $this->sizeHeight = isset($_POST["sizeHeight"]) ? $_POST["sizeHeight"] : "";
    $this->cost = isset($_POST["cost"]) ? $_POST["cost"] : "";

    $changeSuccess = $this->model->changeProductInfo(
      $this->productId,
      $this->label,
      $this->cost,
      $this->sizeWidth,
      $this->sizeHeight,
      $this->monitorWidth,
      $this->monitorHeight,
      $this->processor,
      $this->memory,
      $this->storage,
      $this->color
    );

    if ($changeSuccess) {
      header("Location: /admin");
    } else {
      http_response_code(400);
      exit(
        json_encode([
          "error" => true,
          "message" => "Error: change product info db",
        ])
      );
    }
  }
}
