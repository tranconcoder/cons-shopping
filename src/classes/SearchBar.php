<?php

class SearchBar extends DatabaseSQL
{
	function __construct()
	{
		DatabaseSQL::__construct();
	}

	public function renderHistoryList()
	{
		foreach ($historyList as $history) { ?>
               <li>
                    <p>
                         <?= $history['content'] ?>
                    </p>
                </li>
          <?php }
	}
}
