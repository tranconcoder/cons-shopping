<?php

class ProductPageModel extends DatabaseSQL
{
  public function getProductInfo($productId)
  {
    $productInfo = $this->selectQuery("
			SELECT *
				FROM product 
				WHERE product_id = '$productId'	
		")[0];

    return $productInfo ? $productInfo : null;
  }
}
