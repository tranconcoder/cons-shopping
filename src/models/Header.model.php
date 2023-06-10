<?php

class HeaderModel extends DatabaseSQL
{
  public function getVisitedProducts()
  {
    $userId = $_SESSION["user_id"];

    if (!isset($userId)) {
      return [];
    }

    $phoneList = $this->conn->query("
			SELECT `product`.*, image.source as thumb
				FROM `product`, `image`
				WHERE
					product_id IN (
						SELECT product_id
							FROM `product-visited`
							WHERE
								`product`.product_id = `product-visited`.product_id
								AND `product-visited`.user_id = '$userId'
					)
					AND `product`.image_id = `image`.image_id
				LIMIT 5
		");

    return $phoneList;
  }

  public function getHistoryList()
  {
    $userId = $_SESSION["user_id"];

    if (!isset($userId)) {
      return [];
    }

    $historyList = $this->selectQuery("
			SELECT content
				FROM `search-history`
				WHERE user_id = '$userId'
				GROUP BY content
				LIMIT 5
		");
    return $historyList;
  }

  public function getCategoryList()
  {
    $categoryList = $this->getAll("product-category");
    return $categoryList;
  }
}
