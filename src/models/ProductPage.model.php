<?php

class ProductPageModel extends DatabaseSQL
{
  public function getProductInfo($productId)
  {
    $productInfo = $this->selectQuery("
			SELECT product.*, image.source as thumb
				FROM product, image
				WHERE
					product.product_id = '$productId'	
					AND image.image_id = (
						SELECT image_id
							FROM image as image2
							WHERE image2.product_id = product.product_id
							ORDER BY `order` ASC
							LIMIT 1
					)
		")[0];

    return $productInfo ? $productInfo : null;
  }

  public function getImageForProduct($productId)
  {
    $imageList = $this->selectQuery("
			SELECT source 
				FROM image
				WHERE product_id = '$productId'
				ORDER BY `order` ASC
		");

    if (!isset($imageList)) {
      return [];
    } else {
      return $imageList;
    }
  }
}
