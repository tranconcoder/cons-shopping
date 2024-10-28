<?php

class GetProductImageApiModel
{
  private $db;

  public function __construct()
  {
    $this->db = new DatabaseSQL();
  }

  public function getProductImages(string $productId)
  {
    $productImages = $this->db->selectQuery("
            SELECT *
                FROM image
                WHERE product_id = '$productId'
        ");

    return $productImages;
  }
}
