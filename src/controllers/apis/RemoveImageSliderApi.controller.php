<?php
include_once __DIR__ . "/../../models/apis/RemoveImageSliderApi.model.php";

class RemoveImageSliderApiController
{
  private $model;
  private $imageId;

  public function __construct()
  {
    // Khởi tạo giá trị
    $this->model = new RemoveImageSliderApiModel();

    // Kiểm tra dữ liệu
    $this->validateData();

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
      $this->handleError();
    }

    // Xóa file hình ảnh trên máy chủ
    if (is_file($imageInfo["source"])) {
      unlink($imageInfo["source"]);
    }

    // Xóa dữ liệu hình ảnh trên Database
    if (!$this->model->removeImageInfoOnDb($this->imageId)) {
      $this->handleError();
    }
  }

  private function validateData()
  {
    if (!isset($_SESSION["userId"], $_SESSION["rank_id"], $_POST["imageId"])) {
      $this->handleError();
    }

    // Kiểm tra có phải là admin không
    $isAdmin = $this->model->checkIsAdmin($_SESSION["rank_id"]);
    if (!$isAdmin) {
      $this->handleError();
    }
  }

  private function handleError()
  {
    http_response_code(400);
    exit(json_encode(false));
  }
}
