<?php

class RemoveProductApiModel extends DatabaseSQL
{
  public function removeProduct($productId)
  {
    $removeSuccess = $this->conn->query("
            DELETE FROM `slider-images`
                WHERE `product-id` = '$productId'
        ");

    if ($removeSuccess) {
      return true;
    }
    return false;
  }
}
