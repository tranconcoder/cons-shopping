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
						AND product.image_id = image.image_id
						AND product.deal_id IS NOT NULL
						AND product.deal_id = deal.deal_id
					) UNION
					(SELECT `product`.*, image.source as thumb, 0 AS deal_cost
						FROM product, image
						WHERE
							(
								label LIKE '$queryFormatted'
								OR description LIKE '$queryFormatted'
								OR processor LIKE '$queryFormatted'
							)
							AND product.image_id = image.image_id 
							AND product.deal_id IS NULL
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
    $removeOldResult = $this->conn->query("
			DELETE FROM `search-history`
				WHERE
					user_id = '$userId'
					AND content = '$content'
		");

    if (!$removeOldResult) {
      return false;
    }

    $addResult = $this->conn->query("
			INSERT INTO `search-history`(user_id, content) VALUES
				('$userId', '$content')
		");

    return $addResult;
  }
}
