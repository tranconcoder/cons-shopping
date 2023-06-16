<?php

class ChangeImageSliderApiController
{
  private $imageId;
  private $file;
  private $fileName;
  private $filePath;
  private $destFolder;

  private $db;

  public function __construct()
  {
    if (!isset($_SESSION["userId"])) {
      exit(false);
    }

    $this->db = new DatabaseSQL();
    $this->imageId = isset($_POST["id"]) ? $_POST["id"] : "";

    $this->destFolder = "./src/public/image-slide/";
    $this->file = $_FILES["file"];
    $this->fileName =
      $this->imageId .
      "." .
      pathinfo(basename($_FILES["file"]["name"]), PATHINFO_EXTENSION);
    $this->filePath = $this->destFolder . $this->fileName;

    // Xóa file cũ đã được lưu
    $this->handleRemoveOldFile();

    if ($this->handleSaveFile()) {
      $this->handleUpdateDatabase();
    } else {
      http_response_code(400);
      exit(false);
    }
  }

  private function handleRemoveOldFile()
  {
    $filesToDelete = glob($this->destFolder . $_POST["id"] . "*");

    foreach ($filesToDelete as $fileToDelete) {
      if (is_file($fileToDelete)) {
        unlink($fileToDelete);
      }
    }
  }

  private function handleSaveFile()
  {
    if (move_uploaded_file($this->file["tmp_name"], $this->filePath)) {
      return true;
    } else {
      return false;
    }
  }

  private function handleUpdateDatabase()
  {
    $handleUpdate = $this->db->conn->query("
            UPDATE `slider-images`
                SET source = '$this->filePath'
                WHERE id = '$this->imageId'
        ");

    if (!$handleUpdate) {
      http_response_code(400);
      exit(false);
    }
  }
}
