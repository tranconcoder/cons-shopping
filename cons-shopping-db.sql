CREATE TABLE `bill` (
  `bill_id` varchar(36) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `user_id` varchar(36) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `note` varchar(200) COLLATE utf8mb4_general_ci,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
