<?php

class UploadNewImageSliderApi
{
  private $file;
  private $fileName;
  private $destFolder;

  public function __construct()
  {
    if (!isset($_SESSION["userId"])) {
      exit(false);
    }

    $this->file = $_FILES["file"];
    $this->fileName =
      $_SESSION["userId"] .
      "." .
      pathinfo($this->file["tmp_name"], PATHINFO_EXTENSION);
    $this->destFolder = "/src/public/image-slide/";

    if (move_uploaded_file($this->fileName, $this->destFolder)) {
      exit(true);
    } else {
      http_response_code(400);
      exit(false);
    }
  }
}
