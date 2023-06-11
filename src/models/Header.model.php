<?php

class HeaderModel extends DatabaseSQL
{
  public function getVisitedProducts()
  {
    $userId = isset($_SESSION["user_id"]) ? $_SESSION["user_id"] : null;

    if (!$userId) {
      return [];
    }

    $phoneList = $this->selectQuery("
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
					AND image.image_id = (
						SELECT image_id
							FROM image as image2
							WHERE
								image2.product_id = product.product_id
							ORDER BY is_thumb ASC
							LIMIT 1
					)
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
