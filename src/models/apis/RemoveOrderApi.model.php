<?php

class RemoveOrderApiModel
{
  private DatabaseSQL $db;

  public function __construct()
  {
    $this->db = new DatabaseSQL();
  }

  public function removeOrder(string $orderId)
  {
    return $this->db->conn->query("
            DELETE FROM `order` WHERE `order_id` = '$orderId'
        ");
  }
}
