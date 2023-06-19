<?php
include_once __DIR__ . "/../../assets/utils/commonMethod.util.php";
include_once __DIR__ . "/../../models/apis/ChangeImageApi.model.php";
include_once __DIR__ . "/../../assets/utils/uploadFile.util.php";

class ChangeImageApiController extends UploadFile
{
  private $imageId;
  private $model;

  public function __construct()
  {
    $this->model = new ChangeImageApiModel();
    $this->validateData();
    $this->imageId = $_POST["imageId"];

    // Handle save file
    parent::__construct(
      "imageFile",
      $this->imageId,
      "./src/public/product-image"
    );
    $filePath = $this->handleSaveFile();

    if (!$this->model->changeSourceImage($filePath, $this->imageId)) {
      $this->handleError("Error: update source on DB");
    }

    exit(json_encode(["error" => false]));
  }

  private function validateData()
  {
    if (!isset($_POST["imageId"], $_SESSION["rankId"], $_SESSION["userId"])) {
      $this->handleError("Error: validate data");
    }

    if (!isAdmin($_SESSION["rankId"])) {
      $this->handleError("Error: permission denied");
    }

    if (!$this->model->checkImageIsExist($_POST["imageId"])) {
      $this->handleError("Error: image not exist");
    }
  }

  private function handleError(string $message)
  {
    http_response_code(400);
    exit(json_encode(["error" => true, "message" => $message]));
  }
}
