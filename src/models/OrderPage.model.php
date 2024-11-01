<?php

class OrderPageModel
{
  private DatabaseSQL $db;

  public function __construct()
  {
    $this->db = new DatabaseSQL();
  }

  public function getAllOrder()
  {
    return $this->db->conn->query("
            SELECT `product`.`label`, `order`.*, `order_detail`.* FROM `order`, `order_detail`, `product`
                WHERE
                    `order`.`order_id` = `order_detail`.`order_id` AND
                    `order_detail`.`product_id` = `product`.`product_id`
        ");
  }
}
