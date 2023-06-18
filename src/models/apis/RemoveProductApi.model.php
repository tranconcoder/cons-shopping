<?php

class RemoveProductApiModel extends DatabaseSQL
{
  public function removeProduct($productId)
  {
    $removeSuccess = $this->conn->query("
            DELETE FROM product
                WHERE `product_id` = '$productId'
        ");

    if ($removeSuccess) {
      return true;
    }
    return false;
  }
}
