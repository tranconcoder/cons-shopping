<?php

class GetProductApiModel extends DatabaseSQL
{
  public function getProduct(string $productId)
  {
    $product = $this->selectQuery("
			SELECT product.*, image.source as thumb, deal.deal_cost
				FROM product, image, deal
				WHERE
                    product.product_id = '$productId'
					AND product.deal_id = deal.deal_id
					AND image.image_id = (
						SELECT image_id
							FROM image AS image2
							WHERE image2.product_id = product.product_id
							ORDER BY image2.order DESC
							LIMIT 1
					)
        ");

    return $product;
  }
}
