<?php

include_once __DIR__ . "/./../models/AdminPage.model.php";

class AdminPageController extends AdminPageModel
{
  public function __construct()
  {
  }

  public function invoke()
  {
    include_once __DIR__ . "/../views/AdminPage/index.php";
  }
}
