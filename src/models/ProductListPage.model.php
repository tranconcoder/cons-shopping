<?php

class ProductListPageModel extends DatabaseSQL
{
  public function searchProduct($query)
  {
    if (!isset($query)) {
      return [];
    }

    // Remove all special character
    // Add % to find any
    $queryFormatted = "%" . implode("%", explode(" ", $query)) . "%";

    $productList = $this->selectQuery(
      "
			(SELECT `product`.*, image.source as thumb, deal.deal_cost
				FROM product, image, deal
				WHERE
					(
						label LIKE '$queryFormatted'
						OR description LIKE '$queryFormatted'
						OR processor LIKE '$queryFormatted'
					)
					AND product.deal_id = deal.deal_id
					AND image.image_id = (
						SELECT image_id
							FROM image AS image2
							WHERE image2.product_id = product.product_id
							ORDER BY image2.order DESC
							LIMIT 1
					)
				) UNION
				(SELECT `product`.*, image.source as thumb, 0 AS deal_cost
					FROM product, image
					WHERE
						(
							label LIKE '$queryFormatted'
							OR description LIKE '$queryFormatted'
							OR processor LIKE '$queryFormatted'
						)
						AND product.deal_id IS NULL
						AND image.image_id = (
							SELECT image_id
								FROM image as image2
								WHERE image2.product_id = product.product_id
								ORDER BY image2.order DESC
								LIMIT 1
						)
				)
			"
    );

    return $productList;
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
