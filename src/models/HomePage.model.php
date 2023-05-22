<?php

class HomePageModel extends DatabaseSQL
{
	public function getImageList()
	{
		$imageList = $this->getAll('slider-images');

		return $imageList;
	}
}
