<?php

include_once __DIR__ . "/../../assets/utils/uploadFile.util.php";

class ChangeImageSliderApiController extends UploadFile
{
  private $imageId;
  private $destFolder;

  private $db;

  public function __construct()
  {
    if (!isset($_SESSION["userId"])) {
      exit(false);
    }

    $this->db = new DatabaseSQL();
    $this->imageId = isset($_POST["id"]) ? $_POST["id"] : "";
    $this->destFolder = "./src/public/image-slide";

    // Xóa file cũ đã được lưu
    $this->handleRemoveOldFile();

    parent::__construct("file", $this->imageId, "./src/public/image-slide/");

    if ($this->handleSaveFile()) {
      $this->handleUpdateDatabase();

      http_response_code(200);
      exit(json_encode(true));
    } else {
      $this->handleError();
    }
  }

  private function handleRemoveOldFile()
  {
    $filesToDelete = glob($this->destFolder . $_POST["id"] . ".*");

    foreach ($filesToDelete as $fileToDelete) {
      if (is_file($fileToDelete)) {
        unlink($fileToDelete);
      }
    }
  }

  private function handleUpdateDatabase()
  {
    $filePath = $this->getFilePath();

    $handleUpdate = $this->db->conn->query("
            UPDATE `slider-images`
                SET source = '$filePath'
                WHERE id = '$this->imageId'
        ");

    if (!$handleUpdate) {
      $this->handleError();
    }
  }

  private function handleError()
  {
    http_response_code(400);
    exit(json_encode(400));
  }
}
