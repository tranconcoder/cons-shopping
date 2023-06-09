<?php

class HeaderModel extends DatabaseSQL
{
  public function getPhoneList()
  {
    $phoneList = $this->conn->query("
			SELECT *, image.source as thumb FROM product, image
			WHERE product.image_id = image.image_id
		");

    return $phoneList;
  }

  public function getHistoryList()
  {
    $historyList = $this->getAll("search-history");
    return $historyList;
  }

  public function getCategoryList()
  {
    $categoryList = $this->getAll("product-category");
    return $categoryList;
  }
}
