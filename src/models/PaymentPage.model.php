<?php
class PaymentPageModel
{
  private DatabaseSQL $db;

  public function __construct()
  {
    $this->db = new DatabaseSQL();
  }
}
