<?php

class AddImageSlideApiModel extends DatabaseSQL
{
  public function addNewImageToDatabase(
    string $id,
    string $name,
    string $source
  ) {
    $order = $this->selectQuery(
      "SELECT MAX(`order`) AS `max-order` FROM `slider-images`"
    )[0]["max-order"];

    $order = isset($order) ? $order + 1 : 0;

    $result = $this->conn->query("
            INSERT INTO `slider-images`(id, title, source, `order`) VALUES
                ('$id', '$name', '$source', '$order')
        ");

    if ($result) {
      return true;
    }
    return false;
  }
}
