<?php
include_once __DIR__ . "/../../assets/utils/uploadFile.util.php";
include_once __DIR__ . "/../../models/apis/AddProductImageApi.model.php";

class AddProductImageApiController extends UploadFile
{
  private $model;
  private $productId;
  private $destFolder;

  public function __construct()
  {
    $this->validate();

    $this->model = new AddProductImageApiModel();
    $this->productId = $_POST["productId"];
    $this->destFolder = "./src/public/product-image/";

    // Handle save file
    $newImageId = $this->model->getNewId();
    parent::__construct("file", $newImageId, $this->destFolder);
    $source = $this->handleSaveFile();

    if ($source) {
      // Handle create data ob db
      $this->model->createImageOnDb($newImageId, $this->productId, $source);

      exit(json_encode(["error" => false, "newId" => $newImageId]));
    } else {
      $this->handleError("Error: create info on db");
    }
  }

  private function validate()
  {
    if (!isset($_FILES["file"], $_POST["productId"], $_SESSION["rankId"])) {
      $this->handleError("Error: validate");
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
