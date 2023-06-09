<?php

class ProductListPageModel extends DatabaseSQL
{
  public function searchProduct($query)
  {
    $productList = $this->selectQuery(
      "SELECT *, image.source as thumb
				FROM product, image
				WHERE
					label LIKE '%" .
        implode("%", str_split($query, 1)) .
        "%'
					AND product.image_id = image.image_id
			"
    );

    return $productList;
  }
}
