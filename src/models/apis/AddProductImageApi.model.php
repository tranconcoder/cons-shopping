<?php
class AddProductImageApiModel extends DatabaseSQL
{
  public function getNewId()
  {
    return $this->selectQuery("SELECT UUID() AS uuid")[0]["uuid"];
  }

  public function createImageOnDb(string $id, string $productId, string $source)
  {
    $maxOrder = $this->selectQuery("
            SELECT MAX(`order`) AS max FROM image
        ")[0]["max"];
    $newOrder = $maxOrder + 1;

    return $this->conn->query("
            INSERT INTO image(image_id, product_id, source, `order`) VALUES
                ('$id', '$productId', '$source', $newOrder)
        ");
  }
}
