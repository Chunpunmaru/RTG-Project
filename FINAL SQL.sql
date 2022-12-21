-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2022 at 03:33 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rtg`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`username`, `password`) VALUES
('justin', '$2y$10$YTk1MDllNDU1MTBmODRhMurT1LEdQg1FLN2.T64J9vLWSL5i93SV.');

-- --------------------------------------------------------

--
-- Table structure for table `guild`
--

CREATE TABLE `guild` (
  `guild_name` varchar(255) NOT NULL,
  `members` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `inv_code` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `username` varchar(255) NOT NULL,
  `exp` int(11) NOT NULL,
  `lvl` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `daily_done` int(11) NOT NULL,
  `weekly_done` int(11) NOT NULL,
  `main_done` int(11) NOT NULL,
  `guild_done` int(11) NOT NULL,
  `guild` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`username`, `exp`, `lvl`, `title`, `daily_done`, `weekly_done`, `main_done`, `guild_done`, `guild`) VALUES
('justin', 630, 50, 'Gladiator', 0, 0, 0, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `quests`
--

CREATE TABLE `quests` (
  `questID` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `deadline` date NOT NULL,
  `category` varchar(255) NOT NULL,
  `exp` int(11) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quests`
--

INSERT INTO `quests` (`questID`, `username`, `title`, `deadline`, `category`, `exp`, `description`, `status`) VALUES
(1, 'justin', 'Presentation', '2022-12-06', 'Main', 500, 'Presentation na bukas', 0),
(2, 'justin', 'presentation for mam yhen', '2022-12-06', 'Main', 500, 'bukas din ', 0),
(3, 'justin', 'test for edit', '2022-11-12', 'Guild-GigaTech', 20, 'test 2', 0),
(4, 'justin', 'hdd', '2022-12-14', 'Weekly', 30, 'nasira', 0),
(7, 'justin', '2nd try sa guild', '2022-12-08', 'Guild-GigaTech', 20, 'asdfasdf', 0),
(8, 'justin', 'Daily check 2', '2022-12-07', 'Daily', 10, '', 0),
(9, 'justin', 'weekly check 2', '2022-12-07', 'Weekly', 30, '232342342', 0),
(10, 'justin', 'quild quest check', '2022-12-14', 'Guild-GigaTech', 20, 'asdfasf', 0),
(11, 'justin', 'main check ', '2022-12-16', 'Main', 500, 'asdfasfas', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `quests`
--
ALTER TABLE `quests`
  ADD PRIMARY KEY (`questID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quests`
--
ALTER TABLE `quests`
  MODIFY `questID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
