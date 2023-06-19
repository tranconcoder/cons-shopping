<?php

class ChangeImageApiModel extends DatabaseSQL
{
  public function checkImageIsExist($imageId)
  {
    $imageIsExist = $this->selectQuery("
            SELECT *
                FROM image
                WHERE image_id = '$imageId'
        ");

    return isset($imageIsExist[0]["imageId"]);
  }

  public function changeSourceImage(string $newSource, string $imageId)
  {
    $updateSuccess = $this->conn->query("
            UPDATE image
                SET `source` = '$newSource'
                WHERE image_id = '$imageId'
        ");

    return $updateSuccess;
  }
}
