<?php

class ImagesSlide extends DatabaseSQL
{
	function __construct()
	{
		DatabaseSQL::__construct();
	}

	public function renderImagesList()
	{
		$sql_query = 'SELECT * FROM `slider-images`';
		$imagesList = $this->query($sql_query);

		foreach ($imagesList as $image) { ?>
               <li>
                    <img
                         src="<?= $image['source'] ?>"
                         alt="<?= $image['title'] ?>">
               </li>          
          <?php }
	}
}
