<?php

class AdminPageModel
{
  private $db;

  public function __construct()
  {
    $this->db = new DatabaseSQL();
  }

  public function getHomeImageSlideInfoList()
  {
    $imageSlideInfo = $this->db->selectQuery("
            SELECT * FROM `slider-images`
                ORDER BY `order`
        ");

    return $imageSlideInfo;
  }
}
