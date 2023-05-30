<?php
include_once __DIR__ . "/../models/HomePage.model.php";
include_once __DIR__ . "/../controllers/layouts/Layout1.controller.php";

class HomePageController
{
  private HomePageModel $model;
  private Layout1Controller $LayoutController;

  private $imageList;
  private $categoryListForSlider;

  public function __construct()
  {
    $this->model = new HomePageModel();
    $this->LayoutController = new Layout1Controller($this);

    // Data to render UI
    $this->imageList = $this->model->getImageList();
    $this->categoryListForSlider = $this->model->getCategoryListForSlider();
  }

  public function invoke()
  {
    include "./src/views/HomePage/index.php";
  }
}
