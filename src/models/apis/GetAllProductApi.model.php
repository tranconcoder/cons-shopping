<?php

class GetAllProductApiModel
{
  private $db;

  public function __construct()
  {
    $this->db = new DatabaseSQL();
  }

  public function getAllProduct()
  {
    return $this->db->selectQuery("
            SELECT `product`.*, `image`.source AS thumb
                FROM `product`
                INNER JOIN `image`
                ON `product`.`product_id` = `image`.`product_id`
                LIMIT 8
        ");
  }
}
