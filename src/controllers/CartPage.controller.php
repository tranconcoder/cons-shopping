<?php

class CartPageController
{
  private $model;

  public function __construct()
  {
  }

  public function invoke()
  {
    include_once __DIR__ . "/../views/CartPage/index.php";
  }
}
