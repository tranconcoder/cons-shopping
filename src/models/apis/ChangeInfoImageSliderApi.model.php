<?php

class ChangeInfoImageSliderApiModel extends DatabaseSQL
{
  public function updateData(string $imageId, string $field, string $newValue)
  {
    $updateSuccess = $this->conn->query("
            UPDATE `slider-images`
                SET `$field` = '$newValue'
                WHERE id = '$imageId'
        ");

    if ($updateSuccess) {
      return true;
    } else {
      return false;
    }
  }
}
