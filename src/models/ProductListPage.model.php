<?php

class ProductListPageModel extends DatabaseSQL
{
  public function searchProduct($query)
  {
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
}
