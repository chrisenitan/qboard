-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 20, 2019 at 04:21 PM
-- Server version: 5.6.44-cll-lve
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vrixe`
--

-- --------------------------------------------------------

--
-- Table structure for table `actors`
--

CREATE TABLE `actors` (
  `cid` int(11) NOT NULL,
  `refs` varchar(100) NOT NULL,
  `tag` varchar(100) DEFAULT 'contributor',
  `dates` varchar(100) DEFAULT 'contributor',
  `edate` varchar(100) DEFAULT 'contributor',
  `timing` varchar(100) DEFAULT 'contributor',
  `etime` varchar(100) DEFAULT 'contributor',
  `coord` varchar(100) DEFAULT 'contributor',
  `address` varchar(100) DEFAULT 'contributor',
  `landmark` varchar(100) DEFAULT 'contributor',
  `dresscode` varchar(100) DEFAULT 'contributor',
  `price` varchar(100) DEFAULT 'contributor',
  `payment` varchar(100) DEFAULT 'contributor',
  `organiser` varchar(100) DEFAULT 'contributor',
  `website` varchar(100) DEFAULT 'contributor',
  `phone` varchar(100) DEFAULT 'contributor',
  `keynote` varchar(100) DEFAULT 'contributor'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='who edited what on the desk';

--
-- Dumping data for table `actors`
--

INSERT INTO `actors` (`cid`, `refs`, `tag`, `dates`, `edate`, `timing`, `etime`, `coord`, `address`, `landmark`, `dresscode`, `price`, `payment`, `organiser`, `website`, `phone`, `keynote`) VALUES
(3, '6YG8RpuMpB', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu', 'annamorra@mail.usf.edu'),
(4, 'LGmyp45mRG', 'Natraj', 'Natraj', 'Natraj', 'Natraj', 'Natraj', 'Natraj', 'Natraj', 'Natraj', 'Natraj', 'Natraj', 'Natraj', 'Natraj', 'Natraj', 'Natraj', 'Natraj'),
(11, 'LbKUYDuDmM', 'shoutforkrishna', 'shoutforkrishna', 'shoutforkrishna', 'shoutforkrishna', 'shoutforkrishna', 'shoutforkrishna', 'shoutforkrishna', 'shoutforkrishna', 'shoutforkrishna', 'shoutforkrishna', 'shoutforkrishna', 'shoutforkrishna', 'shoutforkrishna', 'shoutforkrishna', 'shoutforkrishna'),
(9, 'uwD1ezkdh8', 'chrisenitan on 09 - Sep - 2019 at 10:17hrs', 'mathewelizabeth', 'mathewelizabeth', 'mathewelizabeth', 'mathewelizabeth', 'by mathewelizabeth on 02 Oct 2018 at 21:05hrs', 'by mathewelizabeth on 04 Oct 2018 at 12:17hrs', 'by mathewelizabeth on 04 Oct 2018 at 12:17hrs', 'mathewelizabeth', 'chrisenitan', 'by mathewelizabeth on 02 Oct 2018 at 21:06hrs', 'mathewelizabeth', 'chrisenitan on 09 - Sep - 2019 at 10:14hrs', 'mathewelizabeth', 'mathewelizabeth'),
(14, '8iFd5vnZJp', 'Candbot', 'Candbot', 'Candbot', 'Candbot', 'Candbot', 'Candbot', 'Candbot', 'Candbot', 'Candbot', 'Candbot', 'Candbot', 'Candbot', 'Candbot', 'Candbot', 'Candbot'),
(16, 'WtDGTomlqZ', 'Ms_Adebomi', 'Ms_Adebomi', 'Ms_Adebomi', 'Ms_Adebomi', 'Ms_Adebomi', 'Ms_Adebomi', 'Ms_Adebomi', 'Ms_Adebomi', 'Ms_Adebomi', 'Ms_Adebomi', 'Ms_Adebomi', 'Ms_Adebomi', 'Ms_Adebomi', 'Ms_Adebomi', 'Ms_Adebomi'),
(17, '4bHWMGX018', 'by khorage on 25 Oct 2018 at 23:20hrs', 'khorage', 'khorage', 'khorage', 'khorage', 'by khorage on 26 Oct 2018 at 08:23hrs', 'khorage', 'by khorage on 26 Oct 2018 at 08:23hrs', 'by khorage on 25 Oct 2018 at 23:21hrs', 'khorage', 'by khorage on 25 Oct 2018 at 23:17hrs', 'khorage', 'by khorage on 25 Oct 2018 at 23:16hrs', 'by khorage on 25 Oct 2018 at 23:28hrs', 'by khorage on 25 Oct 2018 at 23:26hrs'),
(18, '4nSLiu6Ncj', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(21, 'OR90Nbi7Up', 'MrGrochowski', 'MrGrochowski', 'MrGrochowski', 'MrGrochowski', 'MrGrochowski', 'MrGrochowski', 'MrGrochowski', 'MrGrochowski', 'MrGrochowski', 'MrGrochowski', 'MrGrochowski', 'MrGrochowski', 'MrGrochowski', 'MrGrochowski', 'MrGrochowski'),
(23, 'T1PD1VZ8lU', 'cora', 'cora', 'cora', 'cora', 'cora', 'cora', 'cora', 'cora', 'cora', 'cora', 'cora', 'cora', 'cora', 'cora', 'cora'),
(24, 'tX0gGBv5SD', 'pablozulamian', 'pablozulamian', 'pablozulamian', 'pablozulamian', 'pablozulamian', 'pablozulamian', 'pablozulamian', 'pablozulamian', 'pablozulamian', 'pablozulamian', 'pablozulamian', 'pablozulamian', 'pablozulamian', 'pablozulamian', 'pablozulamian'),
(27, 'UZCqYsYEVt', 'Chris', 'Chris', 'Chris', 'Chris', 'Chris', 'Chris', 'Chris', 'Chris', 'Chris', 'Chris', 'Chris', 'Chris', 'Chris', 'Chris', 'Chris'),
(26, '9lIA7XZOff', 'boohiss', 'boohiss', 'boohiss', 'boohiss', 'boohiss', 'boohiss', 'boohiss', 'boohiss', 'boohiss', 'boohiss', 'boohiss', 'boohiss', 'boohiss', 'boohiss', 'boohiss'),
(29, 'n7BbMxTt6V', 'Wibble', 'Wibble', 'Wibble on 22 - Jan - 2019 at 11:27hrs', 'Wibble', 'Wibble', 'Wibble on 22 - Jan - 2019 at 11:27hrs', 'Wibble', 'Wibble on 22 - Jan - 2019 at 11:27hrs', 'Wibble', 'Wibble', 'Wibble', 'Wibble', 'Wibble', 'Wibble', 'Wibble'),
(30, 'HTafmK5V2g', 'sabbir', 'sabbir', 'sabbir', 'sabbir', 'sabbir', 'sabbir', 'sabbir', 'sabbir', 'sabbir', 'sabbir', 'sabbir', 'sabbir', 'sabbir', 'sabbir', 'sabbir'),
(31, 'mjnQLCfRuO', 'ekof05', 'ekof05', 'ekof05', 'ekof05', 'ekof05', 'ekof05', 'ekof05', 'ekof05', 'ekof05', 'ekof05', 'ekof05', 'ekof05', 'ekof05', 'ekof05', 'ekof05'),
(32, 'SMlzgLwJF0', 'Ragibso', 'Ragibso', 'Ragibso', 'Ragibso', 'Ragibso', 'Ragibso', 'Ragibso', 'Ragibso', 'Ragibso', 'Ragibso', 'Ragibso', 'Ragibso', 'Ragibso', 'Ragibso', 'Ragibso'),
(34, 'BbgAUIVmQA', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(35, 'VNdoykc2FO', 'ilkkah', 'ilkkah', 'ilkkah', 'ilkkah', 'ilkkah', 'ilkkah', 'ilkkah', 'ilkkah', 'ilkkah', 'ilkkah', 'ilkkah', 'ilkkah', 'ilkkah', 'ilkkah', 'ilkkah'),
(37, '2OoqCk2mM7', 'chrisenitan on 18 - Mar - 2019 at 17:37hrs', 'chrisenitan', 'chrisenitan', 'timmulf on 19 - Mar - 2019 at 16:46hrs', 'chrisenitan on 20 - Mar - 2019 at 17:30hrs', 'chrisenitan on 24 - Mar - 2019 at 21:24hrs', 'chrisenitan on 19 - Mar - 2019 at 16:10hrs', 'chrisenitan on 18 - Mar - 2019 at 17:37hrs', 'chrisenitan', 'chrisenitan', 'chrisenitan', 'chrisenitan on 18 - Mar - 2019 at 17:41hrs', 'chrisenitan', 'chrisenitan', 'chrisenitan on 21 - Mar - 2019 at 19:30hrs'),
(38, 'Cq6tiOxsG9', 'greif', 'greif', 'greif', 'greif', 'greif', 'greif', 'greif', 'greif', 'greif', 'greif', 'greif', 'greif', 'greif', 'greif', 'greif'),
(40, 'TDwkdhngmu', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(43, 'E0EfFIdiKP', 'vegced', 'vegced', 'vegced', 'vegced', 'vegced', 'vegced', 'vegced', 'vegced', 'vegced', 'vegced', 'vegced', 'vegced', 'vegced', 'vegced', 'vegced'),
(44, 'bxVndX9p1t', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `ammo`
--

CREATE TABLE `ammo` (
  `cid` int(11) NOT NULL,
  `day` varchar(1800) NOT NULL,
  `name` varchar(1800) NOT NULL,
  `reqaction` varchar(1800) NOT NULL COMMENT 'action requested from user to be taken on account',
  `email` varchar(1800) NOT NULL,
  `securecode` varchar(1800) NOT NULL,
  `opened` varchar(900) NOT NULL,
  `closed` varchar(900) NOT NULL,
  `rep` varchar(900) NOT NULL,
  `notes` varchar(9000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='logging account security issues';

-- --------------------------------------------------------

--
-- Table structure for table `contributors`
--

CREATE TABLE `contributors` (
  `cid` int(255) NOT NULL,
  `code` varchar(900) NOT NULL,
  `owner` varchar(900) NOT NULL,
  `cua` varchar(900) DEFAULT NULL,
  `cub` varchar(900) DEFAULT NULL,
  `cuc` varchar(900) DEFAULT NULL,
  `cud` varchar(900) DEFAULT NULL,
  `cue` varchar(900) DEFAULT NULL,
  `cuf` varchar(900) DEFAULT NULL,
  `lastedit` varchar(900) DEFAULT NULL,
  `pushid` varchar(900) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contributors`
--

INSERT INTO `contributors` (`cid`, `code`, `owner`, `cua`, `cub`, `cuc`, `cud`, `cue`, `cuf`, `lastedit`, `pushid`) VALUES
(16, 'WtDGTomlqZ', 'Ms_Adebomi', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, '6YG8RpuMpB', 'annamorra@mail.usf.edu', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'LGmyp45mRG', 'Natraj', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(18, '4nSLiu6Ncj', 'khorage', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(17, '4bHWMGX018', 'khorage', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'LbKUYDuDmM', 'shoutforkrishna', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'uwD1ezkdh8', 'mathewelizabeth', 'chrisenitan', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(29, 'n7BbMxTt6V', 'Wibble', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(14, '8iFd5vnZJp', 'Candbot', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 'OR90Nbi7Up', 'MrGrochowski', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(23, 'T1PD1VZ8lU', 'cora', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(24, 'tX0gGBv5SD', 'pablozulamian', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(26, '9lIA7XZOff', 'boohiss', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(27, 'UZCqYsYEVt', 'Chris', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(30, 'HTafmK5V2g', 'sabbir', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(31, 'mjnQLCfRuO', 'ekof05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(32, 'SMlzgLwJF0', 'Ragibso', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(34, 'BbgAUIVmQA', 'cafa', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(35, 'VNdoykc2FO', 'ilkkah', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(38, 'Cq6tiOxsG9', 'greif', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(37, '2OoqCk2mM7', 'chrisenitan', 'timmulf', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(44, 'bxVndX9p1t', 'cafa', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(40, 'TDwkdhngmu', 'soleone', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(43, 'E0EfFIdiKP', 'vegced', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `status` varchar(900) NOT NULL,
  `cid` int(11) NOT NULL,
  `type` varchar(90) NOT NULL,
  `datep` varchar(90) NOT NULL,
  `event` varchar(90) NOT NULL,
  `organiser` varchar(90) NOT NULL,
  `description` varchar(1800) NOT NULL,
  `keynote` varchar(900) DEFAULT NULL,
  `dates` varchar(90) NOT NULL,
  `edates` varchar(90) NOT NULL,
  `timing` varchar(90) NOT NULL,
  `variant` varchar(200) NOT NULL,
  `venue` varchar(90) DEFAULT NULL,
  `bvenue` varchar(200) NOT NULL COMMENT 'street num and name',
  `cost` varchar(900) DEFAULT NULL,
  `costpur` varchar(900) DEFAULT NULL,
  `landmark` varchar(200) DEFAULT NULL,
  `state` varchar(90) NOT NULL,
  `dresscode` varchar(90) DEFAULT NULL,
  `notes` varchar(1800) DEFAULT NULL,
  `website` varchar(900) DEFAULT NULL,
  `authkey` varchar(900) NOT NULL COMMENT 'authorising keyfor priv',
  `email` varchar(90) NOT NULL,
  `phone` varchar(90) DEFAULT NULL,
  `hype` varchar(90) NOT NULL,
  `refs` varchar(90) NOT NULL,
  `class` varchar(90) NOT NULL COMMENT 'public or private classification',
  `zip` varchar(20) NOT NULL COMMENT 'iso country code',
  `year` varchar(90) NOT NULL COMMENT 'numeric rep of event year for search and picks',
  `month` varchar(200) NOT NULL COMMENT 'textual rep of month',
  `day` varchar(200) NOT NULL COMMENT 'day of the week search',
  `edit` varchar(200) NOT NULL COMMENT 'for editverification',
  `views` int(255) NOT NULL DEFAULT '1' COMMENT 'views count',
  `programcheck` varchar(900) DEFAULT NULL COMMENT 'default value is pa',
  `pollcheck` varchar(900) DEFAULT NULL,
  `imgname` varchar(900) NOT NULL COMMENT 'name of image',
  `imgthumb` varchar(900) NOT NULL COMMENT 'imagethumbname',
  `cua` varchar(900) DEFAULT NULL,
  `cub` varchar(900) DEFAULT NULL,
  `cuc` varchar(900) DEFAULT NULL,
  `cud` varchar(900) DEFAULT NULL,
  `cue` varchar(900) DEFAULT NULL,
  `cuf` varchar(900) DEFAULT NULL,
  `lastedit` varchar(900) DEFAULT NULL,
  `ringo` varchar(90) DEFAULT 'slack',
  `ringa` varchar(90) DEFAULT 'slack',
  `ringb` varchar(90) DEFAULT 'slack',
  `ringc` varchar(90) DEFAULT 'slack',
  `ringd` varchar(90) DEFAULT 'slack',
  `ringe` varchar(90) DEFAULT 'slack',
  `ringf` varchar(90) DEFAULT 'slack'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`status`, `cid`, `type`, `datep`, `event`, `organiser`, `description`, `keynote`, `dates`, `edates`, `timing`, `variant`, `venue`, `bvenue`, `cost`, `costpur`, `landmark`, `state`, `dresscode`, `notes`, `website`, `authkey`, `email`, `phone`, `hype`, `refs`, `class`, `zip`, `year`, `month`, `day`, `edit`, `views`, `programcheck`, `pollcheck`, `imgname`, `imgthumb`, `cua`, `cub`, `cuc`, `cud`, `cue`, `cuf`, `lastedit`, `ringo`, `ringa`, `ringb`, `ringc`, `ringd`, `ringe`, `ringf`) VALUES
('plan', 14, '', '02 Oct 2018', 'é£Ÿé£¯', 'Candbot', '...ç°¡ä»‹', NULL, '2018-11-18', '2018-11-18', '11:00', '12:00', NULL, 'å…ƒæœ—å»£å ´', NULL, NULL, NULL, 'Hong Kong', NULL, NULL, NULL, 'tHuNfT', 'coolbot89@outlook.com', '', 'Candbot', '8iFd5vnZJp', 'public', 'Hong Kong', '2018.1118', 'November', 'Sunday', 'tHuNfTTvSqXgmItuSVkX', 357, NULL, NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', NULL, 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('invite', 3, '', '18 Aug 2018', 'ADRIAN & anNAâ€™S WEDDING', 'annamorra', 'We are getting married!', NULL, '2018-07-01', '2018-07-01', '00:00:00', '13:00:00', NULL, 'Tingling museum ', NULL, NULL, NULL, 'West Palm Beach', NULL, NULL, NULL, 'pDj4tS', 'annamorra@mail.usf.edu', '', 'annamorra', '6YG8RpuMpB', 'private', 'United States', '2018.0701', 'July', 'Sunday', 'pDj4tSv9tbiEdj8xbSSr', 1, NULL, NULL, 'default.jpg', 'default.png', 'annammorra@gmail.com', '', '', '', '', '', NULL, 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('invite', 4, '', '22 Aug 2018', 'VALPARAI', 'Natraj', 'Hsjsjznsms', NULL, '2018-07-01', '2018-07-01', '00:00:00', '13:00:00', NULL, 'Hsjjs', NULL, NULL, NULL, 'Mumbai', NULL, NULL, NULL, 'bYKdSK', 'natraj22easy@gmail.com', '', 'Natraj', 'LGmyp45mRG', 'private', 'India', '2018.0701', 'July', 'Sunday', 'bYKdSKsjUVHoZN3O8QCO', 1, NULL, NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', NULL, 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('invite', 16, '', '23 Oct 2018', 'MUMS BIRTHDAY PARTY', 'Ms_Adebomi', 'Let\'s parryyy', NULL, '2018-10-23', '2018-10-24', '07:00', '', NULL, 'Come and have fun, celebrate our mother with us ', NULL, NULL, NULL, 'Pittsburgh', NULL, NULL, NULL, 'Bf4DPV', 'adebomichristina@gmail.com', '', 'Ms_Adebomi', 'WtDGTomlqZ', 'private', 'United States', '2018.1023', 'October', 'Tuesday', 'Bf4DPVIhDQ18e32Wgf8C', 1, NULL, NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', NULL, 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('invite', 11, '', '28 Sep 2018', 'Samosa party', 'shoutforkrishna', 'Blah blah blah', NULL, '2018-09-01', '2018-09-01', '00:00:00', '13:00:00', NULL, '12.9803772,77.6461619', NULL, NULL, NULL, 'Bangalore', NULL, NULL, NULL, 'QdJAxS', 'theconcernedlearner@gmail.com', '', 'shoutforkrishna', 'LbKUYDuDmM', 'private', 'India', '2018.0901', 'September', 'Saturday', 'QdJAxS28OfkNSS3nWqqr', 31, NULL, NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', NULL, 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('plan', 9, 'Reviewing the documents', '19 Sep 2018', 'ARTICLE WRITING ', 'mathewelizabeth', 'This is an event to finish a tech article about vrixe to be published in cafa.life', 'Reviewing first draft', '2018-10-12', '2018-10-13', '23:30', '16:30', '', '52.52257563861033,13.250864257263263', '', '0', 'not Valid', 'Neubrandenburg', 'Casuals', NULL, 'https://docs.google.com/document/d/10mJCJLV-l7wLi-oMfuRev7fS9wa1WT0pfKOgWeEDDEo/edit?usp=drivesdk', 'tOYOCi', 'elizmathew93@gmail.com', '', 'mathewelizabeth', 'uwD1ezkdh8', 'private', 'Germany', '2018.1012', 'October', 'Friday', 'tOYOCitPmC1Cr1g7XHwB', 142, 'present', '', 'uwD1ezkdh8.jpeg', 'uwD1ezkdh8.jpeg', 'chrisenitan', '', '', '', '', '', 'chrisenitan on 09 - Sep - 2019 at 10:17', 'admin', 'media', 'slack', 'slack', 'slack', 'slack', 'slack'),
('approved', 29, '', '22 Jan 2019', 'Party', 'Wibble', 'Shaving wombats', '', '2019-02-17', '2019-01-08', '19:00', '13:00:00', '', '123 Cherry Ave, West Bloomfield, MI', '', '', 'Big tree', 'Ashburn', '', NULL, '', 'WQQAr1', 'findmyknife@gmail.com', '', 'Wibble', 'n7BbMxTt6V', 'public', 'United States', '2019.0217', 'February', 'Sunday', 'WQQAr1HnwumwPK93viBO', 213, '', NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', 'Wibble on 22 - Jan - 2019 at 11:27', 'leisure', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('plan', 17, '', '25 Oct 2018', 'RUN CELEBRITY PROJECT ', 'khorage', 'Talent Hunt', 'Regular tickets are available for #500', '2018-10-27', '2018-11-03', '18:00', '22:00', '', 'Redeemer\'s University, Ede', '1000', 'V.I.P', 'BOJA ARTS THEATRE', 'Ekpoma', 'Casual', NULL, 'https://vrixe.com/votercp', '0U32R1', 'nduaguibecourage@gmail.com', '', 'khorage', '4bHWMGX018', 'public', 'Nigeria', '2018.1027', 'October', 'Saturday', '0U32R1JdfPHQEs6Myu56', 466, '', NULL, '4bHWMGX018.jpg', '4bHWMGX018.jpg', '', '', '', '', '', '', 'khorage', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('plan', 23, '', '03 Dec 2018', 'END OF THE YEAR PARTY ', 'cora', 'Office end of year party will also involve secret Santa.', NULL, '2018-12-21', '2018-12-21', '19:00', '13:00:00', NULL, 'Lagos island ', NULL, NULL, NULL, 'Lagos', NULL, NULL, NULL, 'gimlEA', 'kwadlie@gmail.com', '', 'cora', 'T1PD1VZ8lU', 'private', 'Nigeria', '2018.1221', 'December', 'Friday', 'gimlEAk9whPt2L6gm0DC', 1, NULL, NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', NULL, 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('invite', 18, '', '26 Oct 2018', 'THE CULTURE', 'khorage', 'After School Party ', '', '2018-12-15', '2018-12-16', '12:00', '00:00', '', 'Blue Island, Lekki', '', '', '', 'Ekpoma', '', NULL, '', 'Gu7VGl', 'nduaguibecourage@gmail.com', '', 'khorage', '4nSLiu6Ncj', 'public', 'Nigeria', '2018.1215', 'December', 'Saturday', 'Gu7VGlXWl14SrbVyKxb7', 397, '', NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', '', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('invite', 21, '', '12 Nov 2018', 'OBÃ“Z 2019', 'MrGrochowski', 'No mamy obÃ³z do przygotowania', NULL, '2019-08-01', '2019-08-19', '00:00:00', '13:00:00', NULL, 'CoÅ› tam', NULL, NULL, NULL, 'Gaworzyce', NULL, NULL, NULL, '84PO9f', 'mateusz.grochowski1992@gmail.com', '', 'MrGrochowski', 'OR90Nbi7Up', 'private', 'Poland', '2019.0801', 'August', 'Thursday', '84PO9fZAxFWc7NlijIlj', 2, NULL, NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', NULL, 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('invite', 34, '', '11 Feb 2019', 'CAFA MUSIC FESTIVAL 2019', 'cafa', 'This year, the CAFA concert will feature talents from across Nigeria in music, drama, dance and modern art. We have put together a special collection of the best upcoming artistes to perform in one of the most iconic locations in Lagos Nigeria.', '', '2019-05-17', '2019-05-17', '08:00', '14:00:00', '', 'Muri Okunola Park, Lagos', '', '', '', 'Lagos', '', NULL, '', 'cafanb', 'contactcafa@gmail.com', '', 'cafa', 'BbgAUIVmQA', 'public', 'Nigeria', '2019.0517', 'May', 'Friday', 'ArzTMasNj5YzWEDUbXpk', 270, '', NULL, 'default.jpg', 'default.png', 'coolxris', 'vegced', 'marvie', 'Karen', 'jamestd', '', '', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('invite', 24, '', '07 Dec 2018', 'Asado', 'pablozulamian', 'Asadulo ', NULL, '2018-12-15', '2018-12-15', '21:00', '', NULL, 'Donde quieran', NULL, NULL, NULL, 'Salto', NULL, NULL, NULL, 'Dq6Cth', 'pzulamian@gmail.com', '', 'pablozulamian', 'tX0gGBv5SD', 'private', 'Uruguay', '2018.1215', 'December', 'Saturday', 'Dq6CthMgYnz64LURZL8m', 1, NULL, NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', NULL, 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('invite', 26, '', '23 Dec 2018', 'party', 'boohiss', 'Sdfsaffs', NULL, '2019-01-17', '2019-01-17', '00:00:00', '13:00:00', NULL, 'asfasfs', NULL, NULL, NULL, 'Raleigh', NULL, NULL, NULL, '87TfnK', 'theregoeslogic@gmail.com', '', 'boohiss', '9lIA7XZOff', 'public', 'United States', '2019.0117', 'January', 'Thursday', '87TfnKFR7n4Zw81bsxqX', 321, NULL, NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', NULL, 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('plan', 27, '', '26 Dec 2018', 'Hogmanay', 'Chris', 'Hogmanay at the Koelschip', NULL, '2018-12-31', '2019-01-01', '18:00', '01:00', NULL, 'Koelschip Yard', NULL, NULL, NULL, 'Glasgow', NULL, NULL, NULL, 'tqqUG5', 'chris@m1nt3d.com', '', 'Chris', 'UZCqYsYEVt', 'public', 'United Kingdom', '2018.1231', 'December', 'Monday', 'tqqUG5Uy4FIdseIMFxSq', 277, NULL, NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', NULL, 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('plan', 30, '', '23 Jan 2019', 'HUB SEMINAR', 'sabbir', 'Hello World', '', '2019-02-27', '2019-01-21', '10:00', '13:00:00', '', 'Bangladesh', '', '', '', 'Dhaka', '', NULL, '', 'VrfVek', 'na.sb@yandex.com', '', 'sabbir', 'HTafmK5V2g', 'public', 'Bangladesh', '2019.0227', 'February', 'Wednesday', 'VrfVekCKm0lASKCukU09', 286, '', '', 'default.jpg', 'default.png', '', '', '', '', '', '', ' on 31 - Jul - 2019', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('plan', 31, '', '27 Jan 2019', 'TRIP', 'ekof05', 'trip to london', '', '2019-03-14', '2019-01-21', '00:00:00', '13:00:00', '', '41.3863554,2.1763966', '', '', '', 'Barcelona', '', NULL, '', 'z4xSa3', 'dav.05.eco@gmail.com', '', 'ekof05', 'mjnQLCfRuO', 'private', 'Spain', '2019.0314', 'March', 'Thursday', 'z4xSa3gMopF8gzR8b4a2', 1, '', '', 'default.jpg', 'default.png', '', '', '1zqjsn\'\"(){}<x>:/1zqjsn;9', '', '', '', ' on 31 - Jul - 2019', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('plan', 32, '', '28 Jan 2019', '1ZQJMC\'\"(){}<X>:/1ZQJMC;9', 'Ragibso', 'Ð Ð°Ñ…Ð¸Ð± ÐœÐ°Ð¼ÐµÐ´Ð¾Ð²', '', '2019-01-21', '2019-01-21', '00:00:00', '13:00:00', '', '55.63109413136649,37.61901385060481', '', '', '', 'Dolgoprudnyy', '', NULL, '', 'MqQQBi', 'rakhibmamedov@gmail.com', '', 'Ragibso', 'SMlzgLwJF0', 'public', 'Russian Federation', '2019.0121', 'January', 'Monday', 'MqQQBihD5fjlriU58pHj', 200, '', '', 'default.jpg', 'default.png', '', '', '', '1zqjjl\'\"(){}<x>:/1zqjjl;9', '', '', ' on 07 - Aug - 2019', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('invite', 35, '', '19 Feb 2019', 'Hmm', 'ilkkah', '..', NULL, '2019-02-16', '2019-02-11', '11:00', '14:00:00', NULL, 'Here', NULL, NULL, NULL, 'Helsinki', NULL, NULL, NULL, 'SnukeI', 'ilkkah@gmail.com', NULL, 'ilkkah', 'VNdoykc2FO', 'public', 'Finland', '2019.0216', 'February', 'Saturday', 'SnukeIQqS8FcLOFy2ZSL', 191, NULL, NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', NULL, 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('plan', 38, '', '19 Mar 2019', 'GENTLEMEN\'S LUNCH', 'greif', '1zqjyl\'\"(){}<x>:/1zqjyl;9</x>', '', '2019-04-20', '2019-04-20', '12:00', '14:00:00', '', 'Enderun Colleges', '', '', '', 'Makati', '', NULL, '', 'gJHNer', 'greif@itoperate.com', '', 'greif', 'Cq6tiOxsG9', 'private', 'Philippines', '2019.0420', 'April', 'Saturday', 'gJHNerQlW0JnxFktD6Md', 1, '', '', 'default.jpg', 'default.png', '', '', '', '', '1zqjaq\'\"(){}<x>:/1zqjaq;9', '', ' on 31 - Jul - 2019', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('invite', 44, '', '07 Aug 2019', 'THE CONFESSOR - MOVIE PREMIERE', 'cafa', 'Join us on the 12th of this month in Abuja for the debut of a masterpiece.\r\n#DAUGHTEROFZION   \r\nRed carpet: 5pm\r\nTickets:\r\nRegular: 5,000\r\nVip: 20,000\r\nVVIP: 300,000', '', '2019-08-12', '2019-08-12', '19:00', '14:00:00', '', 'NAF Conference Center. Jahi, Abuja ', '', '', '', 'Berlin', '', NULL, '', '3rREmO', 'contactcafa@gmail.com', '', 'cafa', 'bxVndX9p1t', 'public', 'Germany', '2019.0812', 'August', 'Monday', '3rREmOB0aQkuXcMG2gCd', 79, '', '', 'default.jpg', 'default.png', 'vegced', '', '', '', '', '', '', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('approved', 37, 'Warming the legs up...', '09 Mar 2019', 'MARCH HIKE', 'Aliens', 'Oranienburg to Potsdam.\r\n40Km Outdoors! Is this about feeling healthy or connecting with life or with friends...  It\'s so good, it\'s about everything, you should come too. ', 'Weather should be 13Â° with early rain.', '2019-03-31', '2019-03-31', '09:00', '21:00', 'Potsdam, Berlin', 'Oranienburg, Berlin', '', '', 'The Sun', 'Berlin', '', NULL, '', 'hikey', 'ennycris1@gmail.com', '', 'chrisenitan', '2OoqCk2mM7', 'private', 'Germany', '2019.0331', 'March', 'Sunday', 'FIVzYO66ZlxoO2zpEDFb', 19, 'present', NULL, '2OoqCk2mM7.jpg', '2OoqCk2mM7.jpg', 'timmulf', '', '', '', '', '', 'chrisenitan on 03 - Apr - 2019', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('invite', 40, '', '16 Apr 2019', 'OTTAWA SPARRING MEETUP', 'soleone', 'Train fighting drills in a safe setting with practitioners of various striking and standing martial arts. Curious beginners always welcome!', '', '2019-04-17', '2019-04-17', '17:00', '14:00:00', '', '150 Elgin St, Ottawa, Canada', '', '', '', 'Oshawa', '', NULL, '', 'WB6zag', 'soleone@gmail.com', '', 'soleone', 'TDwkdhngmu', 'public', 'Canada', '2019.0417', 'April', 'Wednesday', 'WB6zag93KCq7u4TEgnM5', 192, '', NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', '', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack'),
('invite', 43, '', '27 Jul 2019', 'AWARDS/FASHION SHOW', 'vegced', 'Green October Awards ', NULL, '2019-10-01', '2019-10-01', '13:00:00', '14:00:00', NULL, 'Oriental Hotels Lagos ', NULL, NULL, NULL, 'Lagos', NULL, NULL, NULL, 'cTRDgU', 'vegced@cafa.life', NULL, 'vegced', 'E0EfFIdiKP', 'public', 'Nigeria', '2019.1001', 'October', 'Tuesday', 'cTRDgUz3hmSgLsopI7A3', 106, NULL, NULL, 'default.jpg', 'default.png', '', '', '', '', '', '', NULL, 'slack', 'slack', 'slack', 'slack', 'slack', 'slack', 'slack');

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `cid` int(200) NOT NULL,
  `ranref` varchar(900) NOT NULL COMMENT 'feedback ref number',
  `user` varchar(900) NOT NULL COMMENT 'if available',
  `code` varchar(20) NOT NULL COMMENT 'somtime not present if user is not compmaining on content isse',
  `uas` varchar(900) NOT NULL,
  `statement` varchar(225) NOT NULL,
  `dated` varchar(90) NOT NULL,
  `mails` varchar(90) NOT NULL,
  `opened` varchar(900) DEFAULT NULL COMMENT 'date query was attended to',
  `closed` varchar(900) DEFAULT NULL COMMENT 'date query was solved',
  `rep` varchar(900) DEFAULT NULL COMMENT 'who is handling this',
  `notes` varchar(9000) DEFAULT NULL COMMENT 'steps'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`cid`, `ranref`, `user`, `code`, `uas`, `statement`, `dated`, `mails`, `opened`, `closed`, `rep`, `notes`) VALUES
(24, '', '', '', 'Mozilla/5.0 (Linux; Android 4.4.2; HTC Desire 816G dual sim) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36', 'Hi,\r\n\r\nWant to fix website vulnerability?', '20 08 2019', '', NULL, NULL, NULL, NULL),
(22, '', '', '', '', '1zqjse\'\"(){}<x>:/1zqjse;9', '16 07 2019', '', NULL, NULL, NULL, NULL),
(23, '', '', '', '', '1zqjge\'\"(){}<x>:/1zqjge;9', '07 08 2019', '', NULL, NULL, NULL, NULL),
(20, '', 'bugboy', '', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36', 'hi,\r\n\r\ni\'ve found vulnerability in your site. where to report?\r\n\r\ncontact me on tinutomy003@protonmail.com', '31 03 2019', '', NULL, NULL, NULL, NULL),
(21, '', 'vaibpathak', '', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36', 'Didn\'t get verification mail', '25 06 2019', '', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE `newsletter` (
  `cid` int(11) NOT NULL,
  `mail` varchar(900) NOT NULL,
  `day` varchar(900) NOT NULL,
  `place` varchar(900) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `newsletter`
--

INSERT INTO `newsletter` (`cid`, `mail`, `day`, `place`) VALUES
(15, 'renwanoob@gmail.com', '20 May 2018\r\n', 'shaba'),
(3, 'vrixeapp@gmail.com', '19 May 2018', 'test'),
(5, 'ennycris1@gmail.com', '19 May 2018', 'test'),
(14, 'vijaysimha@zep-hyr.com', 'unsubscribed', 'shaba'),
(7, 'theconcernedlearner@gmail.com', '20 May 2018', 'asw'),
(133, 'free.trail.period@gmail.com', '12 Mar 2019', 'Canada'),
(10, 'apps+vrixie@tomlowenthal.com', '19 May 2018', 'alpha'),
(13, 'elizmathew93@gmail.com', '19 May 2018', 'sss'),
(16, 'mikolsic+vrixe@gmail.com', '20 May 2018\r\n', 'shaba'),
(17, 'sohelpathan6411@gmail.com', '20 May 2018\r\n', 'shaba'),
(18, 'annamorra@mail.usf.edu', '20 May 2018\r\n', 'shaba'),
(19, 'natraj22easy@gmail.com', '20 May 2018\r\n', 'shaba'),
(20, 'jhonben.rg2016@gmail.com', '20 May 2018\r\n', 'shaba'),
(21, 'fabien.b@gmail.com', '20 May 2018\r\n', 'shaba'),
(22, 'karl.foxley@dkpmarketing.co.uk', '20 May 2018\r\n', 'shaba'),
(23, 'adebomichristina@gmail.com', '20 May 2018\r\n', 'shaba'),
(24, 'wep.proto@gmail.com', '20 May 2018\r\n', 'shaba'),
(25, 'nicomangubat@outlook.com', '20 May 2018\r\n', 'shaba'),
(26, 'teleteube@hotmail.com', '20 May 2018\r\n', 'shaba'),
(27, 'kwadlie@gmail.com', '20 May 2018\r\n', 'shaba'),
(29, 'coolbot89@outlook.com', '02 Oct 2018', 'Hong Kong'),
(112, 'mateusz.grochowski1992@gmail.com', '12 Nov 2018', 'Poland'),
(111, 'nduaguibecourage@gmail.com', '25 Oct 2018', 'Nigeria'),
(113, 'ennydot@gmail.com', '02 Dec 2018', 'Nigeria'),
(115, 'pzulamian@gmail.com', '07 Dec 2018', 'Uruguay'),
(116, 'beckleygbenga@gmail.com', '21 Dec 2018', 'Nigeria'),
(134, 'greif@itoperate.com', 'unsubscribed', 'Philippines'),
(119, 'dav.05.eco@gmail.com', '31 Dec 2018', 'Spain'),
(120, 'contactcafa@gmail.com', '04 Jan 2019', 'Germany'),
(121, 'nnekaolisa94@gmail.com', '05 Jan 2019', 'Nigeria'),
(132, 'selmajaxon@gmail.com', '09 Mar 2019', 'Germany'),
(123, 'na.sb@yandex.com', '23 Jan 2019', 'Bangladesh'),
(124, 'lchristianangelo@gmail.com', '26 Jan 2019', 'Philippines'),
(125, 'rakhibmamedov@gmail.com', '28 Jan 2019', 'Russian Federation'),
(126, 'vegced@cafa.life', '06 Feb 2019', 'Nigeria'),
(128, 'tungstendec11@gmail.com', '10 Feb 2018', 'France'),
(129, 'agusionulotanna@gmail.com', '11 Feb 2019', 'Nigeria'),
(130, 'karenokosi4@gmail.com', '11 Feb 2019', 'Nigeria'),
(135, 'tirthak@webiflu.com', '21 Mar 2019', 'India'),
(136, 'kaanturkmen2000@gmail.com', '04 Apr 2019', 'Turkey'),
(137, 'Minge.Mingo.53Mink@gmail.com', '07 Apr 2019', 'Hong Kong'),
(138, 'james.oluwatobi@gmail.com', '08 Apr 2019', 'Nigeria'),
(139, 'soleone@gmail.com', '16 Apr 2019', 'Canada'),
(140, 'moodswingsincorporated@gmail.com', '12 May 2019', 'Nigeria'),
(141, 'vaibpathak@gmail.com', '25 Jun 2019', 'India'),
(142, 'saisso@ldaho.biz', '27 Jun 2019', 'Algeria'),
(143, 'jibokudaniel@yahoo.com', '08 07 2019', 'Nigeria'),
(144, 'ennycris1@gmail.com', '09 09 2019', 'Germany');

-- --------------------------------------------------------

--
-- Table structure for table `poll`
--

CREATE TABLE `poll` (
  `cid` int(11) NOT NULL,
  `refs` varchar(900) NOT NULL,
  `question` varchar(900) DEFAULT NULL,
  `answerone` varchar(900) DEFAULT NULL,
  `answertwo` varchar(900) DEFAULT NULL,
  `answerthree` varchar(900) DEFAULT NULL,
  `answerfour` varchar(900) DEFAULT NULL,
  `answerfive` varchar(900) DEFAULT NULL,
  `av` int(11) DEFAULT NULL,
  `bv` int(11) DEFAULT NULL,
  `cv` int(11) DEFAULT NULL,
  `dv` int(11) DEFAULT NULL,
  `ev` int(11) DEFAULT NULL,
  `comments` varchar(900) DEFAULT NULL,
  `pollpri` varchar(900) DEFAULT NULL,
  `users` varchar(900) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `poll`
--

INSERT INTO `poll` (`cid`, `refs`, `question`, `answerone`, `answertwo`, `answerthree`, `answerfour`, `answerfive`, `av`, `bv`, `cv`, `dv`, `ev`, `comments`, `pollpri`, `users`) VALUES
(1, '8iFd5vnZJp', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, '6YG8RpuMpB', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'LGmyp45mRG', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'WtDGTomlqZ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'LbKUYDuDmM', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'uwD1ezkdh8', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '', 'false', NULL),
(7, 'n7BbMxTt6V', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, '4bHWMGX018', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'T1PD1VZ8lU', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, '4nSLiu6Ncj', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'OR90Nbi7Up', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, 'BbgAUIVmQA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 'tX0gGBv5SD', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(15, '9lIA7XZOff', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(16, 'UZCqYsYEVt', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(17, 'HTafmK5V2g', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '', 'false', NULL),
(18, 'mjnQLCfRuO', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '', 'false', NULL),
(19, 'SMlzgLwJF0', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '', 'false', NULL),
(20, 'VNdoykc2FO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 'Cq6tiOxsG9', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '', 'false', NULL),
(22, '2OoqCk2mM7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(23, 'TDwkdhngmu', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(27, 'bxVndX9p1t', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '', '', NULL),
(26, 'E0EfFIdiKP', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `cid` int(11) NOT NULL,
  `email` varchar(900) NOT NULL,
  `fullname` varchar(900) NOT NULL,
  `username` varchar(900) NOT NULL,
  `password` varchar(900) NOT NULL,
  `created` varchar(900) NOT NULL COMMENT 'date profile was craeted',
  `bio` varchar(1800) NOT NULL COMMENT 'max 220 chars',
  `location` varchar(900) NOT NULL,
  `picture` varchar(900) NOT NULL,
  `cookie` varchar(900) NOT NULL,
  `freq` varchar(900) NOT NULL COMMENT 'secure code for account retrieval',
  `link` varchar(900) NOT NULL,
  `confirm` varchar(900) DEFAULT NULL,
  `contacts` varchar(900) DEFAULT NULL,
  `pushid` varchar(900) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='store all user profile and details';

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`cid`, `email`, `fullname`, `username`, `password`, `created`, `bio`, `location`, `picture`, `cookie`, `freq`, `link`, `confirm`, `contacts`, `pushid`) VALUES
(28, 'ennycris1@gmail.com', 'Chris Enitan', 'chrisenitan', 'chuinobo1', '27 06 2018', 'YorubaNi. The idea is to be Unique Until Universal in everything we do. Space | Tech | Art | Love | Talks', 'Berlin, Germany', '69bfIMG_20190705_112702_152.jpg', 'a5768808f1a677b3963e', '09 09 2019', 'twitter.com/crisenitan', '97969f', 'cid = 79 or cid = 33 or cid = 93 or cid = 29 or cid = 42 or cid = 104 or cid = 81 or cid = 105 or cid = 114 or cid = 127 or cid = 138 or cid = 150 or cid = 112 ', '8a5e725f-0e08-443f-ac53-f15c20d02921'),
(29, 'vrixeapp@gmail.com', 'Vrixe', 'vrixe', 'aaaaaaa1', '28 06 2018', 'Create, edit and plan the special moments with friends. Your next _ _ _ _ _ on Vrixe.', 'Berlin, Germany', 'f7d5max.png', 'dac0259c852ebe71a93a', 'dac025', 'vrixe.com/profile/vrixe', 'dac025', 'cid = 28 ', '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(33, 'kwadlie@gmail.com', 'Cora', 'cora', 'Vrixe4533', '07 07 2018', 'bio', 'Nigeria', 'user.png', 'c0d95e8667abc46747ce', 'f0f86d', 'vrixe.com/profile/cora', 'ffvfdfsd', 'cid = 28 ', '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(35, 'teleteube@hotmail.com', 'Edit Name', 'Guique', '05111vri985xeG%', '02 08 2018', 'Bio...', 'France', 'user.png', 'fbbb8b0493e1a81075da', 'fbbb8b', 'vrixe.com/profile/Guique', 'fbbb8b', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(77, 'nicomangubat@outlook.com', 'Profile Name', 'alastairx', '7a5cccede7f1', '12 09 2018', 'Bio...', 'Philippines', 'user.png', 'cd243052a46127efc509', 'cd2430', 'vrixe.com/profile/alastairx', 'cd2430', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(37, 'wep.proto@gmail.com', 'Edit Name', 'thedhanawada', 'Ammukutty@12a', '02 08 2018', 'Bio...', 'India', 'user.png', '78071ce72333623f41dd', '78071c', 'vrixe.com/profile/thedhanawada', '78071c', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(98, 'pzulamian@gmail.com', 'Pablo Zulamian', 'pablozulamian', 'P43626671z', '07 12 2018', 'Bio...', 'Uruguay', 'user.png', '24f9dd58875db3c9786e', '270a40', 'vrixe.com/profile/pablozulamian', '270a40', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(95, 'mateusz.grochowski1992@gmail.com', 'Profile Name', 'MrGrochowski', 'wugd7f839', '12 11 2018', 'Bio...', 'Poland', 'user.png', '9f4cd5d9c7120617e053', '9f4cd5', 'vrixe.com/profile/MrGrochowski', '9f4cd5', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(42, 'adebomichristina@gmail.com', 'Edit Name', 'Ms_Adebomi', 'scarlet238', '02 08 2018', 'Bio...', 'United States', 'user.png', 'd048483775c5c9a800b7', 'd04848', 'vrixe.com/profile/Ms_Adebomi', 'd04848', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(43, 'karl.foxley@dkpmarketing.co.uk', 'Edit Name', 'dkpmarketing', 'ABI26gail3!10', '03 08 2018', 'Bio...', 'United Kingdom', 'user.png', '5cc87411454b382de89b', '5cc874', 'vrixe.com/profile/dkpmarketing', '5cc874', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(44, 'fabien.b@gmail.com', 'Edit Name', 'fabienb', 'Ku3WJAy6WUE8', '03 08 2018', 'Creative Director, UX Lead, DesignOps Manager, Web/Graphic Designer, Photographer, DJ, Food-Blogger...', 'United Kingdom', 'fae524027c5.png', 'f27002b8c770dd9ba567', 'f27002', 'vrixe.com/profile/fabienb', 'f27002', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(101, 'theregoeslogic@gmail.com', 'Profile Name', 'boohiss', 'wug1e8470', '23 12 2018', 'Bio...', 'United States', 'user.png', '6dbca44fc66b8bd8c941', '6dbca4', 'vrixe.com/profile/boohiss', '6dbca4', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(71, 'jhonben.rg2016@gmail.com', 'Profile Name', 'jhonDroiD', 'hermano45', '08 09 2018', 'Bio...', 'Peru', 'user.png', '6baf5e0625cc63a283d4', '6baf5e', 'vrixe.com/profile/JhonDroiD', '6baf5e', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(49, 'natraj22easy@gmail.com', 'Profile Name', 'natraj', 'manrun@123', '14 08 2018', 'Bio...', 'India', 'user.png', '9ed5d7e9ac28d69db7c3', '9ed5d7', 'vrixe.com/profile/Natraj', '9ed5d7', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(50, 'guest_vrixe@vrixe.com', 'Vrixe Guest', 'admin', 'aaaaaaa1', '14 08 2018', 'Bio...', 'Germany', 'user.png', '9ed5d7e9ac28d69dioju', '9eioju', 'vrixe.com/profile/vrixe_guest', '9eioju', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(105, 'nnekaolisa94@gmail.com', 'Blessing Olisa', 'mzolisa', 'Smilee11', '05 01 2019', 'Bio...', 'Nigeria', 'user.png', 'a6f852f42ae1504f2f5b', 'ffd04d', 'vrixe.com/profile/mzolisa', 'ffd04d', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(102, 'chris@m1nt3d.com', 'Profile Name', 'Chris', '!Dbuespu2mf', '26 12 2018', 'Bio...', 'United Kingdom', '6b79lulz1.jpg', '89885077ff8edd22c88c', 'c107aa', 'vrixe.com/profile/Chris', 'c107aa', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(53, 'annamorra@mail.usf.edu', 'Profile Name', 'annamorra', 'Loveiskey21', '18 08 2018', 'Bio...', 'United States', 'user.png', '4253f69778b49bdd81b9', '4253f6', 'vrixe.com/profile/annamorra@mail.usf.edu', '4253f6', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(54, 'sohelpathan6411@gmail.com', 'Profile Name', 'sohel', 'Sohel@123', '21 08 2018', 'Bio...', 'India', 'user.png', 'c877d954c31fcde4b43e', 'c877d9', 'vrixe.com/profile/sohel', 'c877d9', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(99, 'beckleygbenga@gmail.com', 'Profile Name', 'Senioor', 'wugd74ad2', '21 12 2018', 'Bio...', 'Nigeria', 'user.png', '2646e654c9e182a83f5e', '2646e6', 'vrixe.com/profile/Senioor', '2646e6', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(72, 'mikolsic+vrixe@gmail.com', 'mikolsic', 'mikolsic', 'Vb3Hmj6%5E9X58XT', '08 09 2018', 'Bookworm, writer, runner, optimistic nihilist & nature-lovin', 'United States', 'c82aIMG_20181107_125929_214.jpg', '1d9aa50244f0e6ea9b18', '1d9aa5', 'vrixe.com/profile/mikolsic', '1d9aa5', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(60, 'renwanoob@gmail.com', 'slaw', 'slaw', 'milw0rmX3', '28 08 2018', 'Bio...', 'Iraq', '9d56slawbra.png', '497c9d6d419fc0e8b7c9', '497c9d', 'vrixe.com/profile/slaw', '497c9d', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(59, 'vijaysimha@zep-hyr.com', 'Profile Name', 'vij', 'vijayrockz143.', '26 08 2018', 'Bio...', 'United States', 'user.png', 'ed15d451fcf0aaed1256', 'ed15d4', 'vrixe.com/profile/vij', 'ed15d4', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(79, 'elizmathew93@gmail.com', 'Elizabeth Mathew', 'mathewelizabeth', 'Iloveberlin1!', '15 09 2018', 'Bio...', 'Germany', '455a5051656F-0A28-4DE2-9B72-020A04EFC468.jpeg', '66b6d492f09237740ec5', '66b6d4', 'vrixe.com/profile/mathewelizabeth', '66b6d4', 'cid = 28 ', '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(80, 'apps+vrixie@tomlowenthal.com', 'Profile Name', 'tomlowenthal', 'Ruv$hZoMeAhX6manJKVVWvkCdaGBjjwjhZGipuEj2nCiMW9WCtEXCyNLZcsXUm3w', '16 09 2018', 'Bio...', 'United States', 'user.png', '444dc214e24361b99f64', '444dc2', 'vrixe.com/profile/tomlowenthal', '444dc2', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(81, 'ennydot@gmail.com', 'Profile Name', 'enistory', 'Ultrasheen@01', '22 09 2018', 'Bio...', 'Nigeria', 'user.png', '0f336f819dcdf04e496e', '0f336f', 'vrixe.com/profile/Enistory', '12eb45', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(93, 'nduaguibecourage@gmail.com', 'WU TANG ', 'khorage', 'mandatory16', '25 10 2018', 'Bio...', 'Nigeria', 'b2dcInShot_20180703_024142253.jpg', '0030d36066144f3b90b3', '0030d3', 'vrixe.com/profile/khorage', '0030d3', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(84, 'theconcernedlearner@gmail.com', 'Profile Name', 'shoutforkrishna', 'gube1234', '28 09 2018', 'Bio...', 'India', 'user.png', '3b5ba60fcd161a127022', '3b5ba6', 'vrixe.com/profile/shoutforkrishna', '3b5ba6', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(86, 'coolbot89@outlook.com', 'Profile Name', 'Candbot', 'weiwei654321', '01 10 2018', 'Bio...', 'China', 'user.png', '5c3ecaf8f7cedd577961', '5c3eca', 'vrixe.com/profile/Candbot', '5c3eca', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(107, 'jonas.woehrle@gmx.de', 'Profile Name', 'Woehrlverine', 'wug97d52c', '22 01 2019', 'What I do', 'Germany', 'user.png', '66c589f60a5d3300f94f', '66c589', 'vrixe.com/profile/Woehrlverine', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(103, 'dav.05.eco@gmail.com', 'Profile Name', 'ekof05', 'wug48b717', '31 12 2018', 'Bio...', 'Spain', 'user.png', '1291a75768887e013c0b', '1291a7', 'vrixe.com/profile/ekof05', '1291a7', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(104, 'contactcafa@gmail.com', 'Cafa Team', 'cafa', 'Noble007', '04 01 2019', 'Creative Arts For Africa. ', 'Nigeria', '0493cafa.png', '7ca15e9d1ccaf9d88d46', 'f45ca1', 'www.cafa.life', 'f45ca1', 'cid = 28 or cid = 105 or cid = 112 or cid = 115 or cid = 106 or cid = 120 or cid = 135 ', '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(106, 'agusionulotanna@gmail.com', 'tanna', 'coolxris', 'annatol89', '06 01 2019', 'Graphics designer - photography lover - et cetera', 'Nigeria', 'user.png', '8be76bff5693a7aa867e', '10 02 2019', 'vrixe.com/profile/coolxris', 't53hg6', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(108, 'findmyknife@gmail.com', 'Profile Name', 'Wibble', 'wug1add4a', '22 01 2019', 'What I do', 'United States', 'user.png', '156cc1eb10b6fce1b4a0', '156cc1', 'vrixe.com/profile/Wibble', '156cc1', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(109, 'na.sb@yandex.com', 'Nazir Ahmed Sabbir', 'sabbir', 'N@Sb1151', '23 01 2019', 'Founder | Mentor | Creator | Developer | Writer', 'Bangladesh', 'ab62NaSb - Face.png', '2d2260fd64646d3bef00', 'd96def', 'https://sabbir.com.bd/', 'd96def', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(110, 'lchristianangelo@gmail.com', 'Profile Name', 'nauticus', 'wug70229f', '26 01 2019', 'What I do', 'Philippines', 'user.png', '1d6aa79a6866bdc0eabd', '1d6aa7', 'vrixe.com/profile/nauticus', '1d6aa7', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(111, 'rakhibmamedov@gmail.com', 'Ragibso', 'Ragibso', 'wug73abea', '28 01 2019', 'I do me', 'Russian Federation', '814bD8S3bBdprus.jpg', 'd22ab7036361f5faf15a', '28 01 2019', 'vrixe.com/profile/Ragibso', 'd22ab7', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(112, 'vegced@cafa.life', 'Vegced ', 'vegced', 'ginvic517 ', '06 02 2019', 'Creative Executive Director ', 'Nigeria', '4ef3image.jpg', '4ae8097a2e132325547b', '06 02 2019', 'vrixe.com/Vegced ', '444de8', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(113, 'fhnd@viessmann.com', 'Profile Name', 'fhnd', 'wugd024d8', '08 02 2019', 'What I do', 'Germany', 'user.png', 'cd909af4c8361c35eab7', 'cd909a', 'vrixe.com/profile/fhnd', 'cd909a', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(116, 'ubiziglory@yahoo.com', 'Profile Name', 'glory', 'wug702ed2', '10 02 2019', 'What I do', 'Nigeria', 'user.png', '4bc24f5d8f8b25331cf5', '4bc24f', 'vrixe.com/profile/glory', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(115, 'tungstendec11@gmail.com', 'Tungsten Marvie', 'marvie', 'wug7cf683', '10 02 2019', 'Public Relations at CAFA', 'France', 'user.png', '164a184bdf843d37efa5', '164a18', 'vrixe.com/profile/marvie', '164a18', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(120, 'karenokosi4@gmail.com', 'Profile Name', 'Karen', 'Karen', '11 02 2019', 'What I do', 'Nigeria', 'user.png', '9bb3e74bd2b27ce4d184', '9d2fe4', 'vrixe.com/profile/Karen', '9d2fe4', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(121, 'ilkkah@gmail.com', 'Profile Name', 'ilkkah', 'wug2fff21', '19 02 2019', 'What I do', 'Finland', 'user.png', 'f7f017f9ce8b5fabd677', 'f7f017', 'vrixe.com/profile/ilkkah', 'f7f017', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(122, 'onigbogi.wuraola@yahoo.com', 'Profile Name', 'wuraola', 'wugb6b61c', '20 02 2019', 'What I do', 'Nigeria', 'user.png', '2c967695f547fcebea83', '2c9676', 'vrixe.com/profile/wuraola', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(123, 'test@test.com', 'Profile Name', 'test221225', 'wug04dfbd', '21 02 2019', 'What I do', 'India', 'user.png', 'c5229bc2a31d972af7c0', 'c5229b', 'vrixe.com/profile/test221225', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(127, 'selmajaxon@gmail.com', 'Profile Name', 'timmulf', 'wug410006', '09 03 2019', 'What I do', 'Germany', 'user.png', 'be5e3e1737abdd3d67d0', 'be5e3e', 'vrixe.com/profile/timmulf', 'be5e3e', 'cid = 28 ', '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(128, 'mst404@gmail.com', 'Profile Name', 'soufi', 'wugd3f860', '11 03 2019', 'What I do', 'Germany', 'user.png', 'de884578d3165f830f9e', 'de8845', 'vrixe.com/profile/soufi', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(129, 'free.trail.period@gmail.com', 'Profile Name', 'dpnn', 'wug5e3587', '12 03 2019', 'What I do', 'Canada', 'user.png', '9de312a64b8cd0438ec9', '9de312', 'vrixe.com/profile/dpnn', '9de312', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(130, 'greif@itoperate.com', 'Profile Name', 'greif', 'wug79563d', '19 03 2019', 'What I do', 'Philippines', 'user.png', '7ed09ae3b4c2b44dbd14', '7ed09a', 'vrixe.com/profile/greif', '7ed09a', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(131, 'tirthak@webiflu.com', 'Tirthak', 'webiflu', 'wugfc47e3', '21 03 2019', 'Founder & CEO at Webiflu', 'India', '758dSAVE_20190120_215026-removebg.png', '9e8b52d5a0918971fdb3', '9e8b52', 'vrixe.com/profile/webiflu', '9e8b52', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(145, 'vaibpathak@gmail.com', 'Profile Name', 'vaibpathak', 'wugec276a', '25 06 2019', 'What I do', 'India', 'user.png', '1b3fa917738f081fac03', '25 Jun 2019', 'vrixe.com/profile/vaibpathak', '1b3fa9', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(137, 'soleone@gmail.com', 'Soleone', 'soleone', 'wug2685c1', '16 04 2019', 'Teach & Preach', 'Canada', '9ff9the_eye_bigger_twitter.jpg', '523ac5f884f2ccfdd982', '16 Apr 2019', 'vrixe.com/profile/soleone', '523ac5', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(136, 'isabellawallace6@gmail.com', 'Profile Name', 'isabella', 'wugb87960', '15 04 2019', 'What I do', 'Nigeria', 'user.png', 'e67b803d98abba21421f', 'e67b80', 'vrixe.com/profile/isabella', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(133, 'kaanturkmen2000@gmail.com', 'Kage', 'kage', 'Kamelya5', '04 04 2019', 'Researcher', 'World', 'user.png', '18d1f9e8852128719721', '04 Apr 2019', 'vrixe.com/profile/kage', '4be0c1', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(134, 'Minge.Mingo.53Mink@gmail.com', '    rtyukl.khgfew', 're4u67i68litgrefw', 'wugbefad4', '07 04 2019', 'What I do', 'Hong Kong', 'user.png', '0eabc5506816aa487ad0', '07 Apr 2019', 'vrixe.com/profile/re4u67i68litgrefw', '0eabc5', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(135, 'james.oluwatobi@gmail.com', 'Profile Name', 'jamestd', 'wug1db96a', '08 04 2019', 'What I do', 'Nigeria', 'user.png', '94df738ced56eb69ebbb', '08 Apr 2019', 'vrixe.com/profile/jamestd', '94df73', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(138, 'moodswingsincorporated@gmail.com', 'Moodswings Inc.', 'moodswings', 'swingurmood2', '12 05 2019', 'Events Planning & Management ', 'Nigeria', 'c72aMOOD SWINGS 20190310_231849.jpg', '37ae6b8230a14938a0e7', '12 05 2019', 'vrixe.com/profile/moodswings', '3993ac', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(144, 'latikaraju1323@gmail.com', 'Profile Name', 'latikaraju', 'wug1d6b39', '17 06 2019', 'What I do', 'Germany', 'user.png', '7bde7f6aa296d4d0acf6', '7bde7f', 'vrixe.com/profile/latikaraju', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(146, 'saisso@ldaho.biz', 'Profile Name', 'saisso', 'wug6cf30b', '27 06 2019', 'What I do', 'Algeria', 'user.png', 'f820505e59aa6a2edadc', '27 Jun 2019', 'vrixe.com/profile/saisso', 'f82050', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(147, 'mohit.agrawal54@gmail.com', 'Profile Name', 'mohitagrawal54', 'wug92cd14', '03 07 2019', 'What I do', 'India', 'user.png', 'fdbb876f4b2056d609cc', 'fdbb87', 'vrixe.com/profile/mohitagrawal54', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(148, 'aripcikampek6@gmail.com', 'Mintz045', 'purwakarta', 'wug1a1df3', '04 07 2019', 'What I do', 'Indonesia', '4770yt_logo_rgb_dark.png', 'c337838cbe52b348a40e', 'c33783', 'https://youtu.be/LGSshU4katg', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(150, 'jibokudaniel@yahoo.com', 'Hplus', 'hplus', 'Heritage92', '08 07 2019', 'Media, Transport and Logistics Analyst, Sports Fan', 'Nigeria', 'c36aDANIEL.jpg', '6c61358c4011a6f00dad', '08 07 2019', 'vrixe.com/profile/hplus', '13a1cd', NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(161, 'sarahnicolecampbell@publicist.com', 'Profile Name', 'sarahnicolecampbell', 'wug91a414', '14 08 2019', '', 'United States', 'user.png', '204ce59503caa8ed2945', '204ce5', 'vrixe.com/profile/sarahnicolecampbell', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(160, 'bguajardo@tca-ss.com', 'Friday Englishower Conver', 'fridayenglishowerconversations', 'wug383f3a', '08 08 2019', '', 'Mexico', '755ePicture1.png', '7eca0425536bd34eac20', '7eca04', 'vrixe.com/profile/fridayenglishowerconversations', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(153, 'aaron_koni@vrixe.com', 'Aaron Konis', 'aaron_koni', 'wuge27e83', '16 07 2019', 'What I do', 'India', 'aaron_koni.png', '78fe26b2coooe18b8995', '78fe26', 'vrixe.com/profile/aaron_koni', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(154, 'liz_evt@vrixe.com', 'Lizzy Events', 'liz_evt', 'wuge27e83', '16 07 2019', 'What I do', 'India', 'liz_evt.png', '78fkkkb2coooe18b8995', '78fe26', 'vrixe.com/profile/liz_evt', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(155, 'd_mana@vrixe.com', 'Daniel Mana', 'd_mana', 'wuge27e83', '16 07 2019', 'What I do', 'India', 'd_mana.png', '78fkkkmmmoooe18b8995', '78fe26', 'vrixe.com/profile/d_mana', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(156, 'dule_c@vrixe.com', 'Dule Coble', 'dule_c', 'wuge27e83', '16 07 2019', 'What I do', 'India', 'dule_c.png', '78fkkkmmmoooe18bmm5', '78fe26', 'vrixe.com/profile/dule_c', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81'),
(157, 'ana_mora@vrixe.com', 'Ana Mora', 'ana_mora', 'wuge27e83', '16 07 2019', 'What I do', 'India', 'ana_mora.png', '78fkkkmxxxooe18bmm5', '78fe26', 'vrixe.com/profile/ana_mora', NULL, NULL, '66666666-36f0-432b-9f5d-4bfeec61fa81');

-- --------------------------------------------------------

--
-- Table structure for table `programs`
--

CREATE TABLE `programs` (
  `cid` int(11) NOT NULL,
  `refs` varchar(13) NOT NULL,
  `pa` varchar(900) DEFAULT NULL,
  `pat` varchar(1800) DEFAULT NULL,
  `pb` varchar(1800) DEFAULT NULL,
  `pbt` varchar(1800) DEFAULT NULL,
  `pc` varchar(1800) DEFAULT NULL,
  `pct` varchar(1800) DEFAULT NULL,
  `pd` varchar(1800) DEFAULT NULL,
  `pdt` varchar(1800) DEFAULT NULL,
  `pe` varchar(1800) DEFAULT NULL,
  `pet` varchar(1800) DEFAULT NULL,
  `pf` varchar(1800) DEFAULT NULL,
  `pft` varchar(1800) DEFAULT NULL,
  `pg` varchar(1800) DEFAULT NULL,
  `pgt` varchar(1800) DEFAULT NULL,
  `ph` varchar(1800) DEFAULT NULL,
  `pht` varchar(1800) DEFAULT NULL,
  `pi` varchar(1800) DEFAULT NULL,
  `pit` varchar(1800) DEFAULT NULL,
  `pj` varchar(1800) DEFAULT NULL,
  `pjt` varchar(1800) DEFAULT NULL,
  `pk` varchar(1800) DEFAULT NULL,
  `pkt` varchar(1800) DEFAULT NULL,
  `pl` varchar(1800) DEFAULT NULL,
  `plt` varchar(1800) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `programs`
--

INSERT INTO `programs` (`cid`, `refs`, `pa`, `pat`, `pb`, `pbt`, `pc`, `pct`, `pd`, `pdt`, `pe`, `pet`, `pf`, `pft`, `pg`, `pgt`, `ph`, `pht`, `pi`, `pit`, `pj`, `pjt`, `pk`, `pkt`, `pl`, `plt`) VALUES
(16, 'WtDGTomlqZ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, '6YG8RpuMpB', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'LGmyp45mRG', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(17, '4bHWMGX018', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(11, 'LbKUYDuDmM', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'uwD1ezkdh8', '12:00:00', 'Finished the article ready to publish ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(29, 'n7BbMxTt6V', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(14, '8iFd5vnZJp', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(18, '4nSLiu6Ncj', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(43, 'E0EfFIdiKP', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 'OR90Nbi7Up', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(23, 'T1PD1VZ8lU', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(24, 'tX0gGBv5SD', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(26, '9lIA7XZOff', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(27, 'UZCqYsYEVt', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(30, 'HTafmK5V2g', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(31, 'mjnQLCfRuO', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(32, 'SMlzgLwJF0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(34, 'BbgAUIVmQA', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(35, 'VNdoykc2FO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(38, 'Cq6tiOxsG9', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(37, '2OoqCk2mM7', '12:00:00', 'We meet up at Oranienburg by 8:30am', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(40, 'TDwkdhngmu', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(44, 'bxVndX9p1t', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `cid` int(11) NOT NULL,
  `fullname` varchar(900) NOT NULL,
  `user` varchar(900) NOT NULL,
  `pic` varchar(225) NOT NULL,
  `design` varchar(900) NOT NULL,
  `ux` varchar(900) NOT NULL,
  `features` varchar(900) NOT NULL,
  `support` varchar(900) NOT NULL,
  `texts` varchar(900) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`cid`, `fullname`, `user`, `pic`, `design`, `ux`, `features`, `support`, `texts`) VALUES
(2, 'Aaron Konis', 'aaron_koni', 'aaron_koni.png', '70', '70', '60', '70', 'Would be nice to know who added me to contacts but the calendar and email feature are good'),
(3, 'Lizzy Events', 'liz_evt', 'liz_evt.png', '70', '80', '80', '100', 'We love Vrixe, did a plan on it and I like d the map feature, very nice thank you for this.'),
(4, 'Daniel Mana', 'd_mana', 'd_mana.png', '70', '70', '70', '70', 'Very good app'),
(5, 'Dule Coble', 'dule_c', 'dule_c.png', '80', '70', '80', '70', 'Just make an app, this is so good and I like the website thing but I think it will be nice if you make an app for this'),
(6, 'Ana Mora', 'ana_mora', 'ana_mora.png', '80', '80', '70', '70', 'Love the new updates, the design is so nice and practical and I finally got it to install on my phone.');

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `cid` int(11) NOT NULL,
  `searchquery` varchar(200) NOT NULL,
  `sqy` varchar(700) NOT NULL,
  `profile` varchar(900) NOT NULL,
  `sc` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`cid`, `searchquery`, `sqy`, `profile`, `sc`) VALUES
(52, 'facebookweb', '22 Feb 2019', 'admin', 4),
(54, 'googlesearch', '27 Aug 2019', 'admin', 26),
(770, 'HANG', 'Germany', '2019 - 02 - 26', 78),
(769, 'Meet', 'Sweden', '2019 - 02 - 26', 72),
(83, 'googleimg', '30 Jul 2019', 'admin', 176),
(791, 'TRIP', 'United States', '2019 - 05 - 01', 72),
(133, 'Meet', 'Germany', '2019 - 02 - 16', 72),
(134, 'Meet', 'Germany', '2019 - 02 - 16', 72),
(135, 'Meet', 'Germany', '2019 - 02 - 16', 72),
(792, 'TRIP', 'Germany', '2019 - 05 - 18', 72),
(793, 'HANG', 'Australia', '2019 - 05 - 30', 78),
(137, 'reddit', '02 Jul 2019', 'admin', 44),
(136, 'Meet', 'Germany', '2019 - 02 - 16', 72),
(132, 'Meet', 'Germany', '2019 - 02 - 16', 72),
(790, 'MEET', 'India', '2019 - 04 - 24', 72),
(789, '<fon', 'Russian Federation', '2019 - 04 - 23', 72),
(788, 'Reun', 'Germany', '2019 - 04 - 12', 72),
(785, '@webiflu', '03 2019', 'chrisenitan', 1),
(786, 'shit', '03 2019', 'chrisenitan', 1),
(787, 'Meet', 'Turkey', '2019 - 04 - 04', 72),
(784, '@', '03 2019', 'chrisenitan', 1),
(782, '@glory', '03 2019', 'cafa', 1),
(783, '@timmulf', '03 2019', 'chrisenitan', 2),
(115, 'DINN', 'Germany', '2019 - 01 - 28', 78),
(781, 'glory', '03 2019', 'cafa', 1),
(780, 'iran', '03 2019', 'soufi', 1),
(779, 'Meet', 'United States', '2019 - 03 - 10', 72),
(778, '@chrisenitan', '03 2019', 'timmulf', 2),
(777, 'HANG', 'Germany', '2019 - 03 - 05', 78),
(774, 'MEET', 'Germany', '2019 - 03 - 05', 78),
(117, 'linkedin', '12 Feb 2019', 'admin', 4),
(114, 'Trip', 'Germany', '2019 - 01 - 28', 78),
(776, 'HANG', 'Germany', '2019 - 03 - 05', 78),
(775, 'HANG', 'Germany', '2019 - 03 - 05', 78),
(767, 'HANG', 'Germany', '2019 - 02 - 22', 78),
(768, 'REUN', 'Germany', '2019 - 02 - 25', 78),
(823, 'TRIP', 'Austria', '2019 - 08 - 10', 78),
(822, 'EVEN', 'Mexico', '2019 - 08 - 08', 78),
(821, 'MEET', 'Mexico', '2019 - 08 - 08', 78),
(820, 'HANG', 'Morocco', '2019 - 08 - 07', 78),
(826, 'HANG', 'Germany', '2019 - 09 - 19', 78),
(818, 'HANG', 'Morocco', '2019 - 08 - 07', 78),
(816, 'HANG', 'Morocco', '2019 - 07 - 31', 78),
(815, 'HANG', 'Morocco', '2019 - 07 - 31', 78),
(813, 'HANG', 'Morocco', '2019 - 07 - 31', 78),
(812, 'REUN', 'Germany', '2019 - 07 - 29', 78),
(811, 'EVEN', 'United States', '2019 - 07 - 25', 78),
(810, 'EVEN', 'United States', '2019 - 07 - 25', 78),
(807, 'EVEN', 'United States', '2019 - 07 - 25', 78),
(806, 'EVEN', 'United States', '2019 - 07 - 25', 78),
(824, 'EVEN', 'Germany', '2019 - 09 - 03', 78),
(804, 'EVEN', 'United States', '2019 - 07 - 25', 78),
(803, 'HANG', 'India', '2019 - 07 - 16', 78),
(825, 'HANG', 'France', '2019 - 09 - 14', 78),
(799, 'HANG', 'Brazil', '2019 - 06 - 24', 78),
(798, 'HANG', 'Brazil', '2019 - 06 - 24', 78),
(797, 'EVEN', 'Germany', '2019 - 06 - 17', 78),
(796, 'HANG', 'Japan', '2019 - 06 - 10', 78),
(795, 'Trip', 'Brazil', '2019 - 06 - 08', 72),
(794, 'Trip', 'Russian Federation', '2019 - 06 - 08', 72),
(773, 'Meet', 'United States', '2019 - 02 - 27', 72),
(772, 'REUN', 'Germany', '2019 - 02 - 26', 78),
(771, 'HANG', 'Germany', '2019 - 02 - 26', 78),
(765, 'Meet', 'United States', '2019 - 02 - 21', 72);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `ammo`
--
ALTER TABLE `ammo`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `contributors`
--
ALTER TABLE `contributors`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `poll`
--
ALTER TABLE `poll`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `programs`
--
ALTER TABLE `programs`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`cid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actors`
--
ALTER TABLE `actors`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `ammo`
--
ALTER TABLE `ammo`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contributors`
--
ALTER TABLE `contributors`
  MODIFY `cid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `cid` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- AUTO_INCREMENT for table `poll`
--
ALTER TABLE `poll`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=163;

--
-- AUTO_INCREMENT for table `programs`
--
ALTER TABLE `programs`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=827;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
