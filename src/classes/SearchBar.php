<?php

class SearchBar extends DatabaseSQL
{
	function __construct()
	{
		DatabaseSQL::__construct();
	}

	public function renderPhoneList()
	{
		$sql_query = 'SELECT * FROM `product`';
		$phoneList = $this->query($sql_query);

		foreach ($phoneList as $phone) { ?>
               <li>
                    <img src="<?= $phone['images'] ?>" alt="<?= $phone[
	'label'
] ?>">
                    <h4>
                         <?= $phone['label'] ?>
                    </h4>
               </li> <?php }
	}

	public function renderHistoryList()
	{
		$sql_query = 'SELECT * FROM `search-history`';
		$historyList = $this->query($sql_query);

		foreach ($historyList as $history) { ?>
               <li>
                    <p>
                         <?= $history['content'] ?>
                    </p>
                </li>
          <?php }
	}
}
