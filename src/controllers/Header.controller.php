<?php
include_once './src/models/Header.model.php';

class HeaderController
{
	private HeaderModel $model;

	public function __construct()
	{
		$this->model = new HeaderModel();
	}

	public function invoke()
	{
		$phoneList = $this->model->getPhoneList();
		$historyList = $this->model->getHistoryList();
		$categoryList = $this->model->getCategoryList();

		include_once './src/views/Header/index.php';
	}
}
