-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: thedailygrind
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `location` (
  `postcode` varchar(7) NOT NULL,
  `addressline1` varchar(45) NOT NULL,
  `addressline2` varchar(45) DEFAULT NULL,
  `street_name` varchar(45) DEFAULT NULL,
  `town/city` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`postcode`,`addressline1`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `member` (
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `type` varchar(5) NOT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES ('rgraham','1234','rgraham@dailygrind.com','Admin');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `order` (
  `order_ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`order_ID`),
  KEY `FK_username_idx` (`username`),
  CONSTRAINT `FK_username` FOREIGN KEY (`username`) REFERENCES `member` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderline`
--

DROP TABLE IF EXISTS `orderline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orderline` (
  `orderline_ID` int(11) NOT NULL AUTO_INCREMENT,
  `order_ID` int(11) DEFAULT NULL,
  `product_ID` int(11) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `discount_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`orderline_ID`),
  KEY `FK_product_id_idx` (`product_ID`),
  KEY `FK_order_id_idx` (`order_ID`),
  CONSTRAINT `FK_order_id` FOREIGN KEY (`order_ID`) REFERENCES `order` (`order_id`),
  CONSTRAINT `FK_prodOrderLine_id` FOREIGN KEY (`product_ID`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderline`
--

LOCK TABLES `orderline` WRITE;
/*!40000 ALTER TABLE `orderline` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `product` (
  `product_ID` int(11) NOT NULL AUTO_INCREMENT,
  `cost` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (4,4,50,'GeneriCo','Coffee','Eveyone knows this taste, it\'s ultra-generic.','https://thumb1.shutterstock.com/display_pic_with_logo/520453/523358230/stock-photo-white-paper-whole-beans-generic-coffee-bag-pack-isolated-on-white-background-with-clipping-path-523358230.jpg'),(5,8,38,'FancyCaffe','Coffee','It\'s fancy, but affordable.','https://i.pinimg.com/originals/5f/ee/2d/5fee2d0bd3f8862df65593a6790ff4e3.png'),(6,20,30,'Harvester Coffee Grinder','Equipment','The Harvester Coffee Grinder works as efficiently as a combine harvester does, allowing you to cut down on the time it takes to get some well made, freshly ground coffee.','https://i5.walmartimages.ca/images/Large/_83/159/83159.jpg?odnBound=460'),(7,5,107,'Earl Grey','Tea','Earl Grey tea is a tea blend which has been flavoured with the addition of oil of bergamot.','https://www.ahmadtea.com/media/catalog/product/cache/1/image/350x/040ec09b1e35df139433887a97daa66f/e/a/earl_grey.png'),(8,6,32,'Rocket Fuel','Coffee','Rocket Fuel captures that Guarana effect to give you that much needed instant kick start \nto the day and the staying power to keep you going jungle.','https://images-na.ssl-images-amazon.com/images/I/71cJuEpIAtL._SX385_.jpg'),(9,50,10,'FrenchatHome Cafetiere','Equipment','The professional standard cafetiere that comes at an affordable price.','https://images-na.ssl-images-amazon.com/images/I/612PiL44F1L._SL1000_.jpg'),(10,5,92,'Lady Grey','Tea','Lady Grey differs from Earl Grey in that it contains additional lemon peel and orange peel.','https://www.twinings.co.uk/TwiningsUKI/media/product/SLGLC0614-100/1-SLGLC0614-100-F09008.png');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `supplier` (
  `supplier_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`supplier_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES (1,'Generically generic',185,4),(2,'Fancyman Cafe',300,5),(3,'Scargus Solutions',595,6),(4,'The Earl',500,7),(5,'Percol',200,8);
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supply_line`
--

DROP TABLE IF EXISTS `supply_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `supply_line` (
  `supply_line_ID` int(11) NOT NULL AUTO_INCREMENT,
  `supplier_ID` int(11) DEFAULT NULL,
  `product_ID` int(11) DEFAULT NULL,
  `delivery_time` time DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `supply_cost` int(11) DEFAULT NULL,
  PRIMARY KEY (`supply_line_ID`),
  KEY `FL_suppLine_idx` (`supplier_ID`),
  KEY `DK_suppLineProd_idx` (`product_ID`),
  CONSTRAINT `DK_suppLineProd` FOREIGN KEY (`product_ID`) REFERENCES `product` (`product_id`),
  CONSTRAINT `FL_suppLine` FOREIGN KEY (`supplier_ID`) REFERENCES `supplier` (`supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supply_line`
--

LOCK TABLES `supply_line` WRITE;
/*!40000 ALTER TABLE `supply_line` DISABLE KEYS */;
/*!40000 ALTER TABLE `supply_line` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-28  9:27:51
