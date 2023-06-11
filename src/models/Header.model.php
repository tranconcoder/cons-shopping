<?php

class HeaderModel extends DatabaseSQL
{
  public function getVisitedProducts()
  {
    $userId = isset($_SESSION["user_id"]) ? $_SESSION["user_id"] : null;

    if (!$userId) {
      return [];
    }

    $phoneList = $this->conn->query("
			SELECT `product`.*, image.source as thumb
				FROM `product`, `image`
				WHERE
					`product`.product_id IN (
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
    $userId = isset($_SESSION["user_id"]) ? $_SESSION["user_id"] : null;

    if (!$userId) {
      return [];
    }

    $historyList = $this->selectQuery("
			SELECT content 
				FROM `search-history`
				WHERE user_id = '$userId'
				ORDER BY search_at DESC
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
