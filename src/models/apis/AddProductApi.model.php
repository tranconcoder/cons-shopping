<?php

class AddProductApiModel extends DatabaseSQL
{
  public function addProduct($productId, $label, $cost, $description)
  {
    return $this->conn->query("
            INSERT INTO product(product_id, `label`, cost, description)
            VALUES (
                '$productId', '$label', $cost, '$description'
            )
        ");
  }

  public function addImage($imageId, $productId, $source)
  {
    $order =
      $this->selectQuery("SELECT MAX(`order`) AS `max` FROM image")[0]["max"] +
      1;

    return $this->conn->query("
            INSERT INTO image(image_id, product_id, source, `order`) VALUES
                ('$imageId', '$productId', '$source', $order)
        ");
  }
}
