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
        implode("%", explode(" ", $query)) .
        "%'
					AND product.image_id = image.image_id
			"
    );

    return $productList;
  }
}
