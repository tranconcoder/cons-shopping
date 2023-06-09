<?php

class UploadFile
{
  private $file;
  private $destFolder;
  private $fileName;
  private $filePath;

  public function __construct(
    string $name,
    string $fileName,
    string $destFolder
  ) {
    if (!isset($_FILES[$name])) {
      exit("File not found!");
    }

    $this->file = $_FILES[$name];
    $this->fileName = $fileName;
    $this->destFolder = $destFolder;
    $this->fileName =
      $fileName .
      "." .
      pathinfo(basename($this->file["name"]), PATHINFO_EXTENSION);
    $this->filePath = $this->destFolder . $this->fileName;
  }

  public function handleSaveFile()
  {
    if (move_uploaded_file($this->file["tmp_name"], $this->filePath)) {
      return $this->filePath;
    } else {
      return false;
    }
  }

  protected function getFilePath()
  {
    return $this->filePath;
  }
}
