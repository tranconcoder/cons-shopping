<?php
include_once __DIR__ . "/../../models/apis/RemoveProductImageApi.model.php";
include_once __DIR__ . "/../../assets/utils/commonMethod.util.php";

class RemoveProductImageApiController
{
  private $imageId;
  private $model;

  public function __construct()
  {
    $this->validateData();

    $this->model = new RemoveProductImageApiModel();
    $this->imageId = $_GET["imageId"];

    $source = $this->model->removeProductImage($this->imageId);

    if (!$source) {
      $this->handleError("Error: remove on db");
    } else {
      // handle remove image on server
      $this->model->removeImageFileOnServer($source);

      exit(json_encode(["error" => false]));
    }
  }

  public function validateData()
  {
    if (!isset($_SESSION["rankId"], $_GET["imageId"])) {
      $this->handleError("Error: validate data");
    }

    if (!isAdmin($_SESSION["rankId"])) {
      $this->handleError("Error: permission denied");
    }
  }

  private function handleError(string $message)
  {
    http_response_code(400);
    exit(json_encode(["error" => true, "message" => $message]));
  }
}
