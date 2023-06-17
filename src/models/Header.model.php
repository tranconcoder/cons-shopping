<?php
include_once __DIR__ . "/../assets/utils/commonMethod.util.php";

class HeaderModel extends DatabaseSQL
{
  public function getHistoryList()
  {
    $userId = isset($_SESSION["userId"]) ? $_SESSION["userId"] : null;

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
