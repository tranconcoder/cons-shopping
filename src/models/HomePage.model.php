<?php

class HomePageModel extends DatabaseSQL
{
  public function getImageList()
  {
    $sql = "SELECT * FROM `slider-images` ORDER BY `image_order`";
    $imageList = $this->query($sql);

    return $imageList;
  }
}
