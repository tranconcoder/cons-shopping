<?php

class AddOrderApiModel
{
  private DatabaseSQL $db;

  public function __construct()
  {
    $this->db = new DatabaseSQL();
  }

  public function addOrder(
    string $userId,
    string $address,
    string $note
  ): bool|string {
    $uuid = $this->db->selectQuery("SELECT UUID() AS uuid")[0]["uuid"];

    $insert_result = $this->db->conn->query("
            INSERT INTO `order`(order_id, user_id, address, note) VALUES
                ('$uuid', '$userId', '$address', '$note')
        ");

    return $insert_result ? $uuid : false;
  }

  public function addOrderDetail(object $productList, string $orderId): bool
  {
    $query = "INSERT INTO `order_detail`(order_id, product_id, count) VALUES ";

    foreach ($productList as $productId => $count) {
      $query .= "('$orderId', '$productId', '$count'),";
    }

    return $this->db->conn->query(rtrim($query, ","));
  }
}
