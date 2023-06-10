<?php

class ProductListPageModel extends DatabaseSQL
{
  public function searchProduct($query)
  {
    if (!isset($query)) {
      return [];
    }

    $queryFormatted = "%" . implode("%", explode(" ", $query)) . "%";
    $productList = $this->selectQuery(
      "SELECT *, image.source as thumb
			FROM product, image
			WHERE
				(
					label LIKE '$queryFormatted'
					OR description LIKE '$queryFormatted'
					OR processor LIKE '$queryFormatted'
				)
				AND product.image_id = image.image_id
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
    echo $content;

    $addResult = $this->conn->query("
			INSERT INTO `search-history`(user_id, content) VALUES
				('$userId', '$content')
		");

    return $addResult;
  }
}
