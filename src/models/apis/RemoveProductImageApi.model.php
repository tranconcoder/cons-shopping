<?php

class RemoveProductImageApiModel extends DatabaseSQL
{
  public function removeProductImage(string $imageId)
  {
    $productImageCount = $this->selectQuery("
            SELECT *
                FROM image
                WHERE product_id = (
                    SELECT product_id
                        FROM image AS im2
                        WHERE im2.image_id = '$imageId'
                )
        ");

    if (count($productImageCount) < 2) {
      return false;
    }

    $imageSource = $this->selectQuery("
            SELECT source
                FROM image
                WHERE image_id = '$imageId'
        ");

    if (!isset($imageSource[0]["source"])) {
      return false;
    }

    $removeSuccess = $this->conn->query("
            DELETE FROM image
                WHERE image_id = '$imageId'
        ");

    return $removeSuccess ? $imageSource[0]["source"] : false;
  }

  public function removeImageFileOnServer(string $source)
  {
    if (!str_starts_with("http", $source)) {
      unlink($source);
    }
  }
}
