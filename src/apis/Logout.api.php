<?php

class LogoutApi
{
  public function __construct()
  {
    $this->handleLogout();
  }

  private function handleLogout()
  {
    session_destroy();

    header("Location: /");
  }
}
