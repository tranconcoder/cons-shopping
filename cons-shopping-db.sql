-- phpMyAdmin SQL Dump
-- version 5.2.1deb1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 09, 2023 at 10:03 AM
-- Server version: 8.0.33-0ubuntu0.23.04.2
-- PHP Version: 8.1.12-1ubuntu4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cons-shopping-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `authenticate`
--

CREATE TABLE `authenticate` (
  `user_id` varchar(8) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
  `username` varchar(16) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
  `password` varchar(32) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Save authenticate data';

--
-- Dumping data for table `authenticate`
--

INSERT INTO `authenticate` (`user_id`, `username`, `password`) VALUES
('1', 'tranvanconkg', '35510d6cd7c7ba035feef0fd37ef3065'),
('2', 'conkgyt', 'd10906c3dac1172d4f60bd41f224ae75');

-- --------------------------------------------------------

--
-- Table structure for table `deal`
--

CREATE TABLE `deal` (
  `deal_id` varchar(36) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `time_start` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `time_range` int NOT NULL COMMENT 'A minutes number of time to apply deal to product',
  `deal_cost` int NOT NULL DEFAULT '0' COMMENT 'A subtract cost of deal',
  `gift_list` varchar(100) NOT NULL COMMENT 'A product id to give'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `deal`
--

INSERT INTO `deal` (`deal_id`, `title`, `time_start`, `time_range`, `deal_cost`, `gift_list`) VALUES
('14bddd83-0665-11ee-8d7b-ac74b16ee51f', 'Giảm giá tháng 6', '2023-06-09 08:29:30', 1000, 1500000, '');

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `image_id` varchar(36) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `is_thumb` tinyint(1) NOT NULL DEFAULT '0',
  `source` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `order` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`image_id`, `is_thumb`, `source`, `order`) VALUES
('93b7e37f-0665-11ee-8d7b-ac74b16ee51f', 1, 'https://cdn.shopify.com/s/files/1/0632/3778/3783/products/SilverPro-iphone-14-pro-finish-select-202209-6-1inch-silver-removebg-preview.png?v=1663220402&width=1454&height=1056', 0),
('7c550ab8-0667-11ee-8d7b-ac74b16ee51f', 1, 'https://www.drei.at/media/common/shop/handybilder/6800297-2_11_ImageSmaller.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` varchar(36) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL COMMENT 'The ID of the product',
  `label` varchar(50) CHARACTER SET utf32 COLLATE utf32_general_ci NOT NULL COMMENT 'The name of the product',
  `cost` int NOT NULL DEFAULT '0',
  `category_id` varchar(36) CHARACTER SET armscii8 COLLATE armscii8_general_ci DEFAULT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image_id` varchar(36) CHARACTER SET armscii8 COLLATE armscii8_general_ci DEFAULT NULL COMMENT 'Id of image list',
  `processor` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `memory` int DEFAULT NULL COMMENT 'The size of memory with MB',
  `storage` bigint DEFAULT NULL COMMENT 'The size of Storage with MB',
  `size_width` int DEFAULT NULL COMMENT 'The width size of product',
  `size_height` int DEFAULT NULL COMMENT 'The height size of product',
  `color` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `not_sell` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Not sell to give for gift',
  `deal_id` varchar(36) CHARACTER SET armscii8 COLLATE armscii8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Infomation of a product';

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `label`, `cost`, `category_id`, `description`, `image_id`, `processor`, `memory`, `storage`, `size_width`, `size_height`, `color`, `not_sell`, `deal_id`) VALUES
('27901873-0667-11ee-8d7b-ac74b16ee51f', 'iPhone 14 Pro Max 128GB', 29900000, '2fa190cb-0660-11ee-8d7b-ac74b16ee51f', 'Apple', '93b7e37f-0665-11ee-8d7b-ac74b16ee51f', 'Apple A16 Bionic', 6144, 131072, 776, 1607, 'Tím', 0, '14bddd83-0665-11ee-8d7b-ac74b16ee51f'),
('c8004af5-0667-11ee-8d7b-ac74b16ee51f', 'Samsung Galaxy S23 Ultra 5G 256GB', 26990000, '2fa190cb-0660-11ee-8d7b-ac74b16ee51f', 'Samsung', '7c550ab8-0667-11ee-8d7b-ac74b16ee51f', 'Snapdragon 8 Gen 2', 8096, 262144, 781, 1634, 'Đen', 0, '14bddd83-0665-11ee-8d7b-ac74b16ee51f');

-- --------------------------------------------------------

--
-- Table structure for table `product-category`
--

CREATE TABLE `product-category` (
  `category_id` varchar(36) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `label` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `fontawesome_icon` varchar(40) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
  `category_order` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product-category`
--

INSERT INTO `product-category` (`category_id`, `label`, `fontawesome_icon`, `category_order`) VALUES
('2fa190cb-0660-11ee-8d7b-ac74b16ee51f', 'Smartphone', 'fa-solid fa-mobile-screen-button', 0),
('45ea3c1a-0660-11ee-8d7b-ac74b16ee51f', 'Di động', 'fa-solid fa-mobile-retro', 1),
('49933363-0660-11ee-8d7b-ac74b16ee51f', 'Phụ kiện điện thoại', 'fa-solid fa-screwdriver-wrench', 2),
('4dc1c64b-0660-11ee-8d7b-ac74b16ee51f', 'Cáp, sạc', 'fa-solid fa-charging-station', 3),
('51a892a7-0660-11ee-8d7b-ac74b16ee51f', 'Khác', 'fa-regular fa-square-caret-down', 4);

-- --------------------------------------------------------

--
-- Table structure for table `product-order`
--

CREATE TABLE `product-order` (
  `order_id` int NOT NULL,
  `user_id` varchar(8) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
  `product_id` varchar(36) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `deal_id` int NOT NULL COMMENT 'Once deal_id separated by comma ","',
  `amount` int NOT NULL DEFAULT '1',
  `order_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `note` varchar(200) DEFAULT NULL,
  `delivered_time` datetime DEFAULT NULL,
  `aborted` tinyint NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Infomation after order a product';

-- --------------------------------------------------------

--
-- Table structure for table `search-history`
--

CREATE TABLE `search-history` (
  `user_id` varchar(8) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
  `content` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  `search_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `search-history`
--

INSERT INTO `search-history` (`user_id`, `content`, `search_at`) VALUES
('1', 'iphone', '2023-05-15 15:03:18'),
('1', 'samsung galaxy s23 ultra', '2023-05-15 15:03:24'),
('2', 'mi 13 ultra 64gb', '2023-05-15 15:03:39');

-- --------------------------------------------------------

--
-- Table structure for table `slider-images`
--

CREATE TABLE `slider-images` (
  `id` int NOT NULL,
  `image_order` int NOT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `source` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `uploaded_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slider-images`
--

INSERT INTO `slider-images` (`id`, `image_order`, `title`, `source`, `uploaded_at`) VALUES
(1, 0, 'hero-1', 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/des-1920x450-4.jpg', '2023-05-16 22:25:59'),
(2, 2, 'big-sale', 'https://salt.tikicdn.com/cache/w1080/ts/tikimsp/87/d0/c1/b96e877983ee771f340eeda13aa8735c.png.webp', '2023-05-22 09:22:52'),
(3, 1, 'hero-2', 'https://salt.tikicdn.com/cache/w1080/ts/tikimsp/18/4a/4c/63e4df775f45448636bfdd90ade21f70.png.webp', '2023-05-16 22:28:18'),
(4, 4, 'thegioididong', 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/des11212121-1920x450.jpg', '2023-05-22 09:27:34'),
(5, 5, 'smartwatch-sale', 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/banner/DH-XA-HANG-720-220-720x220.png', '2023-05-22 09:47:41');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` varchar(8) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
  `first_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `avatar` varchar(20) CHARACTER SET ascii COLLATE ascii_general_ci DEFAULT NULL,
  `rank` varchar(8) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL DEFAULT 'customer',
  `address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone_number` varchar(10) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
  `gmail` varchar(30) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Save infomation of a user';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authenticate`
--
ALTER TABLE `authenticate`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `deal`
--
ALTER TABLE `deal`
  ADD PRIMARY KEY (`deal_id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD KEY `image_id` (`image_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`) USING BTREE,
  ADD KEY `deal_id` (`deal_id`),
  ADD KEY `images_id` (`image_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `product-category`
--
ALTER TABLE `product-category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `product-order`
--
ALTER TABLE `product-order`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `search-history`
--
ALTER TABLE `search-history`
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `slider-images`
--
ALTER TABLE `slider-images`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `image_order_unique` (`image_order`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD UNIQUE KEY `phone_number` (`phone_number`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `slider-images`
--
ALTER TABLE `slider-images`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_ibfk_4` FOREIGN KEY (`category_id`) REFERENCES `product-category` (`category_id`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `product_ibfk_5` FOREIGN KEY (`deal_id`) REFERENCES `deal` (`deal_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `product-order`
--
ALTER TABLE `product-order`
  ADD CONSTRAINT `product-order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `authenticate` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product-order_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `search-history`
--
ALTER TABLE `search-history`
  ADD CONSTRAINT `search-history_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `authenticate` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `authenticate` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
