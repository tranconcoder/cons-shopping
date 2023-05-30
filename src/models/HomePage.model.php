<?php

class HomePageModel extends DatabaseSQL
{
  public function getImageList()
  {
    $sql = "SELECT * FROM `slider-images` ORDER BY `image_order`";
    $imageList = $this->query($sql);

    return $imageList;
  }

  public function getCategoryListForSlider()
  {
    $categoryList = [
      [
        "title" => "Điện thoại thông minh",
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
      ["title" => "Phụ kiện", "link" => "#", "icon" => "fa-solid fa-bolt"],
    ];

    return $categoryList;
  }
}
