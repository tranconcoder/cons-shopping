<?php
include_once __DIR__ . "/../../models/apis/ChangeInfoImageSliderApi.model.php";

class ChangeInfoImageSliderApiController
{
  private $model;

  private $imageId;
  private $field;
  private $newValue;

  public function __construct()
  {
    // Validate data
    $this->validateData();

    // Init value
    $this->model = new ChangeInfoImageSliderApiModel();
    $this->imageId = $_POST["imageId"];
    $this->field = $_POST["field"];
    $this->newValue = $_POST["newValue"];

    // Handle update image info
    if (
      $this->model->updateData($this->imageId, $this->field, $this->newValue)
    ) {
      exit(json_encode(["error" => false]));
    } else {
      if ($this->model->checkDuplicateOrder($this->newValue)) {
        exit(json_encode(["error" => true, "duplicate" => true]));
      }

      $this->handleError("Error while update info on Database");
    }
  }

  private function validateData()
  {
    if (!isset($_POST["field"], $_POST["newValue"], $_POST["imageId"])) {
      $this->handleError("Error while validate data");
    }

    if (!in_array($_POST["field"], ["title", "order"])) {
      $this->handleError("Filed not exist on Database");
    }
  }

  private function handleError(string $errorMessage)
  {
    http_response_code(400);
    exit(json_encode(["error" => true, "message" => $errorMessage]));
  }
}
