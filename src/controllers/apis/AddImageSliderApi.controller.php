<?php

include_once __DIR__ . "/../../assets/utils/uploadFile.util.php";
include_once __DIR__ . "/../../models/apis/AddImageSliderApi.model.php";

class AddImageSliderApiController extends UploadFile
{
  private $model;

  private $imageName;
  private $imageId;
  private $file;
  private $fileExtension;
  private $destFolder;

  public function __construct()
  {
    if (!isset($_POST["image-name"], $_FILES["image-file"])) {
      exit(json_encode(false));
    }

    $this->model = new AddImageSliderApiModel();
    $this->imageName = $_POST["image-name"];
    $this->file = $_FILES["image-file"];
    $this->fileExtension = pathinfo($this->file["name"], PATHINFO_EXTENSION);
    $this->imageId = $this->model->selectQuery("SELECT UUID() as uuid")[0][
      "uuid"
    ];
    $this->destFolder = "./src/public/image-slide/";

    parent::__construct("image-file", $this->imageId, $this->destFolder);

    if ($this->handleSaveFile()) {
      $result = $this->model->addNewImageToDatabase(
        $this->imageId,
        $this->imageName,
        $this->destFolder . $this->imageId . "." . $this->fileExtension
      );

      if (!$result) {
        exit(json_encode(false));
      }

      header("Location: /admin");
    } else {
      exit(json_encode(false));
    }
  }
}
