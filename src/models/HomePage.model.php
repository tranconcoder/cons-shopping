<?php

class HomePageModel extends DatabaseSQL
{
  public function getImageList()
  {
    $sql = "SELECT * FROM `slider-images` ORDER BY `image_order`";
    $imageList = $this->selectQuery($sql);

    return $imageList;
  }

  public function getCategoryListForSlider()
  {
    $categoryList = [
      [
        "title" => "Smartphone",
        "link" => "#",
        "icon" => "fa-solid fa-mobile-button",
      ],
      [
        "title" => "Điện thoại di động",
        "link" => "#",
        "icon" => "fa-solid fa-mobile-retro",
      ],
      [
        "title" => "Máy tính bảng",
        "link" => "#",
        "icon" => "fa-solid fa-tablet-screen-button",
      ],
      [
        "title" => "Phụ kiện",
        "link" => "#",
        "icon" => "fa-solid fa-bolt",
      ],
    ];

    return $categoryList;
  }

  public function getPromotionalPhoneList()
  {
    $promotionalPhoneList = $this->selectQuery(
      "SELECT product.*, (product.cost - deal.deal_cost) as cost_deal, image.source as image
				FROM product, deal, image
				WHERE
					product.deal_id = deal.deal_id 
					AND	product.product_id = image.product_id
					AND image.image_id = (
						SELECT image_id
							FROM image as image2
							WHERE image2.product_id = product.product_id
                            ORDER BY image2.order
							LIMIT 1
					)
			"
    );

    // Format money after render
    for ($i = 0; $i < count($promotionalPhoneList); $i++) {
      $cost = $promotionalPhoneList[$i]["cost"];
      $costDeal = $promotionalPhoneList[$i]["cost_deal"];

      $costFormatted = number_format($cost, 0, ".", ",");
      $costDealFormatted = number_format($costDeal, 0, ".", ",");

      $promotionalPhoneList[$i]["cost"] = $costFormatted;
      $promotionalPhoneList[$i]["cost_deal"] = $costDealFormatted;
    }

    return $promotionalPhoneList;
  }
}
