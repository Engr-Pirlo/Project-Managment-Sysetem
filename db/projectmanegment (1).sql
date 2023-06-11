-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2023 at 11:22 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectmanegment`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `CountUsers` ()   SELECT COUNT(*) Totalusers FROM `user` WHERE 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RebortInformation` (IN `$ALL` VARCHAR(55), IN `$Categry` VARCHAR(55), IN `$Status` VARCHAR(55))   BEGIN
IF($All = '0')THEN
CREATE TEMPORARY TABLE tbl 
SELECT  brojects.pid,brojects.Name projectName, manager.m_name manager,
teammember.team_name Teamname,categry.Categry categry, brojects.Status, brojects.StartDate StartDate,
DATEDIFF(brojects.EndDate,CURRENT_DATE())  Days,brojects.EndDate enddate 
FROM `brojects`
INNER JOIN teammember ON teammember.team_id =brojects.team_id
INNER JOIN manager ON manager.mid =  brojects.mid
INNER JOIN categry ON categry.categryId= brojects.categryId
;
SELECT * from tbl;

ELSE  
CREATE TEMPORARY TABLE tbl 
SELECT  brojects.pid,brojects.Name projectName, manager.m_name manager,
teammember.team_name Teamname,categry.Categry categry, brojects.Status, brojects.StartDate StartDate,
DATEDIFF(brojects.EndDate,CURRENT_DATE())  Days,brojects.EndDate enddate 
FROM `brojects`
INNER JOIN teammember ON teammember.team_id =brojects.team_id
INNER JOIN manager ON manager.mid =  brojects.mid
INNER JOIN categry ON categry.categryId= brojects.categryId

WHERE categry.Categry= $Categry AND brojects.Status=$Status
;

SELECT * from tbl;
END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Rebort_One` ()   BEGIN

SELECT  brojects.pid,brojects.Name projectName, manager.m_name manager,teammember.team_name Teamname,categry.Categry categry, brojects.Status, brojects.StartDate StartDate,
DATEDIFF(brojects.EndDate,CURRENT_DATE())  Days,brojects.EndDate enddate 
FROM `brojects`
INNER JOIN teammember ON teammember.team_id =brojects.team_id
INNER JOIN manager ON manager.mid =  brojects.mid
INNER JOIN categry ON categry.categryId= brojects.categryId
;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `TeamReborts` ()   SELECT teammember.team_name ,teammember.team_Email,categry.Categry FROM teammember

INNER JOIN categry on categry.categryId = teammember.categryId$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `brojects`
--

CREATE TABLE `brojects` (
  `pid` int(11) NOT NULL,
  `Name` varchar(55) NOT NULL,
  `mid` int(11) NOT NULL,
  `categryId` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `StartDate` date NOT NULL,
  `EndDate` date NOT NULL,
  `Status` varchar(55) NOT NULL,
  `JoinDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brojects`
--

INSERT INTO `brojects` (`pid`, `Name`, `mid`, `categryId`, `team_id`, `StartDate`, `EndDate`, `Status`, `JoinDate`) VALUES
(1, 'School manegment system', 1, 1, 1, '2023-05-15', '2023-05-31', 'procress', '2023-05-15 10:50:50'),
(2, 'Exam School', 2, 1, 1, '2023-05-15', '2023-05-15', 'complete', '2023-05-15 11:11:24'),
(4, 'Doctor Bookin', 6, 1, 6, '2023-05-18', '2023-05-18', 'Pandin', '2023-05-19 06:35:50'),
(5, 'School manegment System', 3, 1, 1, '2023-05-23', '2023-05-23', 'Pandin', '2023-05-24 05:43:22');

-- --------------------------------------------------------

--
-- Table structure for table `categry`
--

CREATE TABLE `categry` (
  `categryId` int(11) NOT NULL,
  `Categry` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categry`
--

INSERT INTO `categry` (`categryId`, `Categry`, `date`) VALUES
(1, 'Web devlopment', '2023-04-19 12:08:52'),
(2, 'Mobil App ', '2023-04-19 12:09:25'),
(8, 'DESKTOP APP', '2023-04-19 13:41:31'),
(72, 'Flutter App', '2023-05-23 18:31:11'),
(73, 'Mobil app', '2023-05-31 04:24:33');

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE `manager` (
  `mid` int(11) NOT NULL,
  `m_name` varchar(55) NOT NULL,
  `M_Emali` varchar(55) NOT NULL,
  `M_Experices` varchar(55) NOT NULL,
  `M_address` varchar(55) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`mid`, `m_name`, `M_Emali`, `M_Experices`, `M_address`, `date`) VALUES
(2, 'Maska', 'm@gmail,so', '5 year', 'banadir', '2023-05-17 17:01:51'),
(3, 'Masud abdirahmaan', 'm@gmail.so', '4 years', 'banadir', '2023-05-18 06:35:30'),
(7, 'Abdirahmaan sheikh', 'abdirahmaan@gmail.sp', '1year', 'Xamar', '2023-05-18 08:23:54'),
(8, 'maxamad', 'm@gmail.so', '1,year', 'banadir', '2023-05-23 18:30:09'),
(9, 'maska', 'mascuud', '43', '445dffd', '2023-06-01 14:24:20');

-- --------------------------------------------------------

--
-- Table structure for table `teammember`
--

CREATE TABLE `teammember` (
  `team_id` int(11) NOT NULL,
  `team_name` varchar(55) NOT NULL,
  `team_Email` varchar(55) NOT NULL,
  `Team_No` int(11) NOT NULL,
  `categryId` int(11) NOT NULL,
  `level` varchar(55) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teammember`
--

INSERT INTO `teammember` (`team_id`, `team_name`, `team_Email`, `Team_No`, `categryId`, `level`, `date`) VALUES
(1, 'Gtoup one', 'group@gmail.so', 617211864, 1, '', '2023-05-17 04:38:41'),
(2, 'Team_two', 'teamtwo@gmail.com', 0, 2, '', '2023-05-15 11:04:18'),
(3, 'Team_three', 'teamthree@gmail.com', 0, 2, '', '2023-05-15 11:04:46'),
(5, 'group six', 'g@gmail', 2147483647, 1, '1', '2023-05-17 05:11:16'),
(6, 'group six', 'gr@gmail.so', 2147483647, 1, 'Back End', '2023-05-17 06:45:00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstName` varchar(55) NOT NULL,
  `userName` varchar(55) NOT NULL,
  `gmail` varchar(55) NOT NULL,
  `Role` varchar(55) NOT NULL,
  `password` varchar(255) NOT NULL,
  `joindate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `userName`, `gmail`, `Role`, `password`, `joindate`) VALUES
(1, 'Mascuud abdiqadir ', 'maska', 'm@gmail.com', 'Admin', 'm123', '2023-04-26 07:37:37'),
(271, 'Omar', 'Eng-Omar', 'm@gmail.com', '', '123451', '2023-06-03 20:29:03'),
(272, 'mascuud', 'maska', 'mesud@gmail.com', '', '123', '2023-06-03 18:09:49'),
(273, 'Fadumo', 'omar', 'omar@gmail.com', '', '123@', '2023-06-03 19:55:11'),
(274, 'abdulhi ahmet', 'abdala', 'abdala@gmail.com', '', '123', '2023-06-03 17:54:19'),
(275, 'AHMAT BIIF', 'Eng-Omar', 'm@gmail.com', '', '988', '2023-06-03 19:56:52'),
(276, 'Omar', 'Eng-Omar', 'm@gmail.com', '', '12345', '2023-06-03 20:06:13'),
(277, 'Omar', 'Eng-Omar', 'm@gmail.com', '', '12345', '2023-06-03 20:31:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brojects`
--
ALTER TABLE `brojects`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `categry`
--
ALTER TABLE `categry`
  ADD PRIMARY KEY (`categryId`);

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`mid`);

--
-- Indexes for table `teammember`
--
ALTER TABLE `teammember`
  ADD PRIMARY KEY (`team_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brojects`
--
ALTER TABLE `brojects`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `categry`
--
ALTER TABLE `categry`
  MODIFY `categryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `manager`
--
ALTER TABLE `manager`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `teammember`
--
ALTER TABLE `teammember`
  MODIFY `team_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=278;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
