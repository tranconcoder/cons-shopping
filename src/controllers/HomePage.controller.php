<?php
include_once __DIR__ . "/../models/HomePage.model.php";
include_once __DIR__ . "/../controllers/layouts/Layout1.controller.php";

class HomePageController
{
	private HomePageModel $model;
	private Layout1Controller $LayoutController;

	private $imageList;

	public function __construct()
	{
		$this->model = new HomePageModel();
		$this->LayoutController = new Layout1Controller($this);
	}

	public function invoke()
	{
		$this->imageList = $this->model->getImageList();

		include "./src/views/HomePage/index.php";
	}
}
