<?php
include_once __DIR__ . "/../models/PaymentPage.model.php";

class PaymentPageController
{
  private PaymentPageModel $model;

  public function __construct()
  {
    if (!isset($_GET["orderId"])) {
      header("Location: /cart");
      exit();
    }
  }

  public function invoke()
  {
    include_once __DIR__ . "/../views/PaymentPage/index.php";
  }
}
