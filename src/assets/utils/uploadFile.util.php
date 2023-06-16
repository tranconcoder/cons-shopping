<?php

class UploadFile
{
  private $file;
  private $destFolder;
  private $fileName;

  public function __construct(string $fileName, string $destFolder)
  {
    if (!isset($_POST[$fileName])) {
      exit();
    }

    $this->file = $_FILES[$fileName];
    $this->fileName = $fileName;
    $this->destFolder = $destFolder;
  }

  public function handleUpload()
  {
    if (
      move_uploaded_file(
        $this->file["tmp_name"],
        $this->destFolder . $this->fileName
      )
    ) {
      return true;
    }

    return false;
  }
}
