<?php

include_once __DIR__ . "/./../models/AdminPage.model.php";

class AdminPageController
{
  private $model;
  private $imageSlideInfoList;

  public function __construct()
  {
    $this->model = new AdminPageModel();
    $this->imageSlideInfoList = $this->model->getHomeImageSlideInfoList();
  }

  public function invoke()
  {
    include_once __DIR__ . "/../views/AdminPage/index.php";
  }

  private function renderImageSlideInfo()
  {
    foreach ($this->imageSlideInfoList as $imageSlideInfo) {
      include __DIR__ . "/../views/AdminPage/homeImageSlideRow.php";
    }
  }
}
