<?php
include_once __DIR__ . "/../../assets/utils/commonMethod.util.php";
include_once __DIR__ . "/../../assets/utils/uploadFile.util.php";
include_once __DIR__ . "/../../models/apis/AddProductApi.model.php";

class AddProductApiController
{
  private $model;
  private $destFolder;
  private $productId;

  public function __construct()
  {
    $this->validate();
    $this->model = new AddProductApiModel();
    $this->destFolder = "./src/public/product-image/";
    $this->productId = $this->model->selectQuery("SELECT UUID() AS uuid")[0][
      "uuid"
    ];

    // Add product to db
    $label = $_POST["label"];
    $cost = $_POST["cost"];
    $description = $_POST["description"];

    $handleAdd = $this->model->addProduct(
      $this->productId,
      $label,
      $cost,
      $description
    );

    if (!$handleAdd) {
      $this->handleError("Error: add to db");
    }
    // Save images product
    $fileCount = count($_FILES["file"]["name"]);
    for ($i = 0; $i < $fileCount; $i++) {
      $imageId = $this->model->selectQuery("SELECT UUID() AS uuid")[0]["uuid"];
      $fileName =
        $imageId .
        "." .
        strtolower(
          pathinfo(basename($_FILES["file"]["name"][$i]), PATHINFO_EXTENSION)
        );
      $filePath = $this->destFolder . $fileName;

      if (move_uploaded_file($_FILES["file"]["tmp_name"][$i], $filePath)) {
        $addToDb = $this->model->addImage(
          $imageId,
          $this->productId,
          $filePath
        );

        if (!$addToDb) {
          $this->handleError("Error: add image to db");
        } else {
          header("Location: /admin");
        }
      } else {
        $this->handleError("Error: upload file");
      }
    }
  }

  private function validate()
  {
    if (
      !isset(
        $_POST["label"],
        $_POST["cost"],
        $_POST["description"],
        $_SESSION["rankId"],
        $_FILES["file"]["name"][0]
      )
    ) {
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
