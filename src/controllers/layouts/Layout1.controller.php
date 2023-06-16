<?php
include_once __DIR__ . "/../Header.controller.php";

class Layout1Controller
{
	private $bodyController;
	private HeaderController $headerController;

	public function __construct($bodyController)
	{
		$this->bodyController = $bodyController;
		$this->headerController = new HeaderController();
	}

	public function invoke()
	{
		include_once __DIR__ . "/../../views/layouts/Layout1/index.php";
	}
}
