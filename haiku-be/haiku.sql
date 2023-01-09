-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2023 at 03:16 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `haiku`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `blogId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user-favorite`
--

CREATE TABLE `user-favorite` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `blogId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `photo`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'qwerty', 'qwerty14', 'qwerty@gmail.com', '$2b$10$j0eZ751p1/uLpAJ08sjZfuoUIv9FOlp.lzOaIBzUSHBQ4wT29rmVu', NULL, NULL, '2023-01-07 09:53:47', '2023-01-07 09:53:47'),
(4, 'renner', 'renner0', 'renner@gmail.com', '$2b$10$lG54coPzljJpY8sxF/VlROBap8M/gFMnoU1qOOxrenPVsR54qXIgG', NULL, NULL, '2023-01-07 10:00:58', '2023-01-07 10:00:58'),
(9, 'value', 'value0', 'value@gmail.com', '$2b$10$Q20GmaSFxRk6p6E3rmAnQ.W61US.qnpVKw7Q8VxikY3.MhuhO6uBK', NULL, NULL, '2023-01-07 10:04:33', '2023-01-07 10:04:33'),
(11, 'new', 'new1', 'new@gmail.com', '$2b$10$R9Kcj703NtrZauEw/xREYuP76/pSHc/TVFl1AYVyg79YFZj9nf6f6', NULL, NULL, '2023-01-07 10:05:37', '2023-01-07 10:05:37'),
(16, 'bundder', 'bundder1', 'bundder@gmail.com', '$2b$10$SkAdczI6rcEK3oil3bLPH.MCwQO6lS/qSKq0wspHivXdgVec917Lq', '..\\haiku-be\\Images\\1673086113679-ini.jpg', NULL, '2023-01-07 10:08:33', '2023-01-07 10:08:33'),
(17, 'puddle', 'puddle01', 'puddle@gmail.com', '$2b$10$gzk4yyuIkavd.Tl4o0Esv.3iYhKYXp3idLhRsYvfxscM7KI7Kx2iK', '..\\haiku-be\\Images\\1673086189471-ini.jpg', NULL, '2023-01-07 10:09:49', '2023-01-07 10:09:49'),
(18, 'yore', 'yore', 'yore@gmail.com', '$2b$10$xkah4cy749MJtAGf7llT9Or6Mn2rUXP4mFO4f2/WGw.V/efuJBE/m', '..\\haiku-be\\Images\\1673086290382-ini.jpg', NULL, '2023-01-07 10:11:30', '2023-01-07 10:11:30'),
(19, 'dew', 'deww', 'dew@gmail.com', '$2b$10$ROGYbnzGQDqjd.7uDxa7ouEvxk2vgPu4hEPDInHUmaqZjXAp54.W6', '..\\haiku-be\\Images\\1673086524356-ini.jpg', NULL, '2023-01-07 10:15:24', '2023-01-07 10:15:24'),
(20, 'jen', 'jenner', 'juniorjenner@gmail.com', '$2b$10$zi0Q9veFYbiCaO2nU6YMwO56spnzVTqrwp3kjn0mgqKaPznR1ArNC', '..\\haiku-be\\Images\\1673086685929-ini.jpg', NULL, '2023-01-07 10:18:06', '2023-01-07 10:18:06'),
(21, 'predator', 'child-predator', 'predator@gmail.com', '$2b$10$JvYwKFJjMwVpNFQNslluJe9RqKW6v34rksB7DvMVmDF1R5NVUAwWe', '..\\haiku-be\\Images\\1673086832026-ini.jpg', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJuYW1lIjoicHJlZGF0b3IiLCJlbWFpbCI6InByZWRhdG9yQGdtYWlsLmNvbSIsImlhdCI6MTY3MzE1NzM4MSwiZXhwIjoxNjczMjQzNzgxfQ.ofzUcSZQftHpGraTT3-UUbSK8i24Ayasp3cj7zNVhoA', '2023-01-07 10:20:32', '2023-01-08 05:56:21'),
(22, 'kwerti', 'kwerti44', 'kwerti@gmail.com', '$2b$10$f/xewQqmUWKNlKbtLLkWmOAy9ejDASMXWZFSFhLdQTqybDMmiLn.W', '..\\haiku-be\\Images\\1673086995226-ini.jpg', NULL, '2023-01-07 10:23:15', '2023-01-07 10:23:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `blogId` (`blogId`);

--
-- Indexes for table `user-favorite`
--
ALTER TABLE `user-favorite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `blogId` (`blogId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user-favorite`
--
ALTER TABLE `user-favorite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `history_ibfk_2` FOREIGN KEY (`blogId`) REFERENCES `blogs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `user-favorite`
--
ALTER TABLE `user-favorite`
  ADD CONSTRAINT `user-favorite_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `user-favorite_ibfk_2` FOREIGN KEY (`blogId`) REFERENCES `blogs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
