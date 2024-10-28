<?php
include_once __DIR__ . "/../models/HomePage.model.php";
include_once __DIR__ . "/../controllers/layouts/Layout1.controller.php";

class HomePageController
{
    private HomePageModel $model;
    private Layout1Controller $LayoutController;

    private $imageList;
    private $categoryListForSlider;
    private $promotionalPhoneList;

    public function __construct()
    {
        $this->model = new HomePageModel();
        $this->LayoutController = new Layout1Controller($this);

        // Data to render UI
        $this->imageList = $this->model->getImageList();
        $this->categoryListForSlider = $this->model->getCategoryListForSlider();
        $this->promotionalPhoneList = $this->model->getPromotionalPhoneList();
    }

    public function invoke()
    {
        include_once __DIR__ . "/../views/HomePage/index.php";
    }

    private function renderPromotionalPhoneList()
    {
        if (is_array($this->promotionalPhoneList)) {
            foreach ($this->promotionalPhoneList as $item) {
                include __DIR__ . "/../views/HomePage/promotional-product-item.php";
            }
        }
    }

    private function renderPopularProduct()
    {
        for ($i = 0; $i < 8; $i++) {
            include __DIR__ . "/../views/HomePage/popular-product-item.php";
        }
    }
}
