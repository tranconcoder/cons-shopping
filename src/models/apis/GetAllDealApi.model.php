<?php

class GetAllDealApiModel
{
  private $db;

  public function __construct()
  {
    $this->db = new DatabaseSQL();
  }

  public function getAllDeal()
  {
    $dealList = $this->db->getAll("deal");
    return $dealList;
  }
}
