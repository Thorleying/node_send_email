# Host: localhost  (Version: 5.7.26)
# Date: 2023-07-25 16:27:56
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "demo"
#

DROP TABLE IF EXISTS `demo`;
CREATE TABLE `demo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `yzm` varchar(30) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

#
# Data for table "demo"
#

/*!40000 ALTER TABLE `demo` DISABLE KEYS */;
INSERT INTO `demo` VALUES (15,'1908436486@qq.com','225712','2023-03-19 11:23:46'),(16,'','426220','2023-03-18 23:21:42'),(17,'1302798069@qq.com','','2023-07-25 16:03:54'),(18,'fansilv2b@outlook.com','907149','2023-03-18 23:24:51'),(19,'codethorleying@foxmail.com','325722','2023-03-19 11:37:45'),(20,'741570588@qq.com','880656','2023-03-20 10:18:57'),(21,'558482427@qq.com','007843','2023-07-14 17:48:15'),(22,'2757023562@qq.com','572066','2023-07-14 18:02:56');
/*!40000 ALTER TABLE `demo` ENABLE KEYS */;
