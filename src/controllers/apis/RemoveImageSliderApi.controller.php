<?php
include_once __DIR__ . "/../../models/apis/RemoveImageSliderApi.model.php";

class RemoveImageSliderApiController
{
  private $model;
  private $imageId;

  public function __construct()
  {
    $this->model = new RemoveImageSliderApiModel();

    // Kiểm tra dữ liệu
    $this->validateData();

    // Khởi tạo giá trị
    $this->imageId = $_POST["imageId"];

    // Thực hiện xóa
    $this->handleRemoveImage();

    http_response_code(200);
    exit(json_encode(true));
  }

  private function handleRemoveImage()
  {
    // Kiểm tra thông tin
    $imageInfo = $this->model->getImageSliderInfo($this->imageId);

    if (!isset($imageInfo["source"])) {
      $this->handleError("Không tìm thấy hình ảnh để xóa");
    }

    // Xóa file hình ảnh trên máy chủ
    if (is_file($imageInfo["source"])) {
      unlink($imageInfo["source"]);
    }

    // Xóa dữ liệu hình ảnh trên Database
    if (!$this->model->removeImageInfoOnDb($this->imageId)) {
      $this->handleError("Error while remove image in DB!");
    }
  }

  private function validateData()
  {
    if (!isset($_SESSION["userId"], $_SESSION["rankId"], $_POST["imageId"])) {
      $this->handleError("Error while validate form");
    }

    // Kiểm tra có phải là admin không
    $isAdmin = $this->model->checkIsAdmin($_SESSION["rankId"]);
    if (!$isAdmin) {
      $this->handleError("Not permission");
    }
  }

  private function handleError(string $errorMesssage)
  {
    http_response_code(400);
    exit(json_encode(["error" => true, "message" => $errorMesssage]));
  }
}
