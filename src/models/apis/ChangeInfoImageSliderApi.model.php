<?php

class ChangeInfoImageSliderApiModel extends DatabaseSQL
{
  public function updateData(string $imageId, string $field, string $newValue)
  {
    // Kiểm tra order này đã được sử dụng hay chưa
    if ($field === "order") {
      $orderIsUsed = $this->selectQuery("
                SELECT *
                    FROM `slider-images`
                    WHERE `order` = '$newValue'
            ");

      if (isset($orderIsUsed[0]["id"])) {
        http_response_code(400);
        exit(
          json_encode([
            "error" => true,
            "message" => "Error: Order is used",
          ])
        );
      }
    }

    $updateSuccess = $this->conn->query("
            UPDATE `slider-images`
                SET `$field` = '$newValue'
                WHERE id = '$imageId'
        ");

    if ($updateSuccess) {
      return true;
    } else {
      return false;
    }
  }

  public function checkDuplicateOrder(string $order)
  {
    $duplicateOrder = $this->selectQuery("
            SELECT *
                FROM `slider-images`
                WHERE `order` = '$order'
        ");

    if (isset($duplicateOrder[0])) {
      return true;
    } else {
      return false;
    }
  }
}
