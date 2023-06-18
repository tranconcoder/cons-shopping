<?php

class SwapOrderImageSlideApiModel extends DatabaseSQL
{
  public function handleSwapOrderImage(string $order1, string $order2)
  {
    $maxOrder = $this->selectQuery("
            SELECT MAX(`order`) AS maxOrder
                FROM `slider-images`
        ");

    $maxOrder = isset($maxOrder[0]["maxOrder"])
      ? $maxOrder[0]["maxOrder"] + 1
      : null;

    if (!$maxOrder) {
      return false;
    }

    $this->conn->query("
            UPDATE `slider-images`
                SET `order` = '$maxOrder'
                WHERE `order` = '$order1'
        ");
    $this->conn->query("
            UPDATE `slider-images`
                SET `order` = '$order1'
                WHERE `order` = '$order2'
        ");
    $this->conn->query("
            UPDATE `slider-images`
                SET `order` = '$order2'
                WHERE `order` = '$maxOrder'
        ");

    return true;
  }
}
