<?php

class ProductListPageModel extends DatabaseSQL
{
  public function search($query)
  {
    return $this->searchProduct($query);
  }

  public function addNewSearchHistory($content)
  {
    if (!isset($content) || !isset($_SESSION["user_id"])) {
      return false;
    }

    $userId = $_SESSION["user_id"];

    // Remove old value equal content
    $removeDuplicateContent = $this->conn->query("
			DELETE FROM `search-history`
				WHERE
					user_id = '$userId'
					AND content = '$content'
		");
    // Remove all value exception 5 item add lastest
    $removeAllException5 = $this->conn->query("
			DELETE FROM `search-history` as SH1
				WHERE
					user_id = '$userId'
					AND search_id NOT IN (
						SELECT search_id FROM (
							SELECT search_id
								FROM `search-history` as SH2
								WHERE SH2.user_id = '$userId'
								ORDER BY SH2.search_at DESC
								LIMIT 4
						) AS records
					)
		");

    if (!$removeDuplicateContent || !$removeAllException5) {
      return false;
    }

    $addResult = $this->conn->query("
			INSERT INTO `search-history`(search_id, user_id, content) VALUES
				(UUID(),'$userId', '$content')
		");

    return $addResult;
  }
}
