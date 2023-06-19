<?php

class ChangeProductInfoApiModel
{
  private $db;

  public function __construct()
  {
    $this->db = new DatabaseSQL();
  }

  public function changeProductInfo(
    $productId,
    $label,
    $cost,
    $sizeWidth,
    $sizeHeight,
    $monitorWidth,
    $monitorHeight,
    $processor,
    $memory,
    $storage,
    $color
  ) {
    $sizeWidth = $sizeWidth ? $sizeWidth : "null";
    $sizeHeight = $sizeHeight ? $sizeHeight : "null";
    $monitorWidth = $monitorWidth ? $monitorWidth : "null";
    $monitorHeight = $monitorHeight ? $monitorHeight : "null";
    $storage = $storage ? $storage : "null";

    $changeSuccess = $this->db->conn->query("
               UPDATE product
                    SET
                         label = '$label',
                         cost = $cost,
                         size_width = $sizeWidth,
                         size_height = $sizeHeight,
                         monitor_width = $monitorWidth,
                         monitor_height = $monitorHeight,
                         processor = '$processor',
                         memory = $memory,
                         storage = $storage,
                         color = '$color'
                    WHERE product_id = '$productId'
          ");

    if ($changeSuccess) {
      return true;
    }
    return false;
  }
}
