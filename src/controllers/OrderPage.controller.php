<?php

include_once __DIR__ . "/../models/OrderPage.model.php";

class OrderPageController
{
  private OrderPageModel $model;

  private array $orderList = [];

  public function __construct()
  {
    $this->model = new OrderPageModel();

    $orderList = $this->model->getAllOrder();

    foreach ($orderList as $order) {
      if (!isset($this->orderList[$order["order_id"]])) {
        $this->orderList[$order["order_id"]] = [];
      }

      $this->orderList[$order["order_id"]][$order["product_id"]] = $order;
    }
  }

  public function invoke()
  {
    include_once __DIR__ . "/../views/OrderPage/index.php";
  }
}
