<?php
include_once __DIR__ . './../models/Header.model.php';

class HeaderController
{
	private HeaderModel $model;

	private $phoneList;
	private $historyList;
	private $categoryList;

	public function __construct()
	{
		$this->model = new HeaderModel();
	}

	public function invoke()
	{
		$this->phoneList = $this->model->getPhoneList();
		$this->historyList = $this->model->getHistoryList();
		$this->categoryList = $this->model->getCategoryList();

		include_once __DIR__ . './../views/Header/index.php';
	}
}
