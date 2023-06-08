<?php

class HeaderModel extends DatabaseSQL
{
	public function getPhoneList()
	{
		$phoneList = $this->getAll('product');
		return $phoneList;
	}

	public function getHistoryList()
	{
		$historyList = $this->getAll('search-history');
		return $historyList;
	}

	public function getCategoryList()
	{
		$categoryList = $this->getAll('product-category');
		return $categoryList;
	}
}
