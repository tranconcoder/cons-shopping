<?php

class HeaderModel extends DatabaseSQL
{
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
