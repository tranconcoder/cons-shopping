<?php

class RemoveImageSliderApiModel extends DatabaseSQL
{
  public function checkIsAdmin(string $rankId)
  {
    $rank = $this->selectQuery("
            SELECT `label`
                FROM `user_rank`
                WHERE `rank_id` = '$rankId'
        ")[0]["label"];

    if ($rank === "admin") {
      return true;
    }

    return false;
  }

  public function getImageSliderInfo(string $imageId)
  {
    $imageInfo = $this->selectQuery("
            SELECT *
                FROM `slider-images`
                WHERE `id` = '$imageId'
        ")[0];

    return $imageInfo;
  }

  public function removeImageInfoOnDb(string $imageId)
  {
    $removeSuccess = $this->conn->query("
            DELETE
                FROM `slider-images`
                WHERE id = '$imageId'
        ");

    return (bool) $removeSuccess;
  }
}
