<?php
include_once './src/models/HomePage.model.php';
include_once './src/controllers/Header.controller.php';

class HomePageController
{
	private HomePageModel $model;
	private HeaderController $headerCtrl;

	public function __construct()
	{
		$this->model = new HomePageModel();
		$this->headerCtrl = new HeaderController();
	}

	public function invoke()
	{
		$headerCtrl = $this->headerCtrl;
		$imageList = $this->model->getImageList();

		include './src/views/HomePage/index.php';
	}
}
