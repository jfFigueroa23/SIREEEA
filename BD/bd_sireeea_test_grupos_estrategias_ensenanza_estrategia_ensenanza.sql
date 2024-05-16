-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bd_sireeea_test
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `grupos_estrategias_ensenanza_estrategia_ensenanza`
--

DROP TABLE IF EXISTS `grupos_estrategias_ensenanza_estrategia_ensenanza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grupos_estrategias_ensenanza_estrategia_ensenanza` (
  `gruposId` int NOT NULL,
  `estrategiaEnsenanzaId` int NOT NULL,
  PRIMARY KEY (`gruposId`,`estrategiaEnsenanzaId`),
  KEY `IDX_7aa35b5150044af5528eb0c76d` (`gruposId`),
  KEY `IDX_123a7bb9542c381d4ee229647f` (`estrategiaEnsenanzaId`),
  CONSTRAINT `FK_123a7bb9542c381d4ee229647fe` FOREIGN KEY (`estrategiaEnsenanzaId`) REFERENCES `estrategia_ensenanza` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_7aa35b5150044af5528eb0c76d3` FOREIGN KEY (`gruposId`) REFERENCES `grupos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupos_estrategias_ensenanza_estrategia_ensenanza`
--

LOCK TABLES `grupos_estrategias_ensenanza_estrategia_ensenanza` WRITE;
/*!40000 ALTER TABLE `grupos_estrategias_ensenanza_estrategia_ensenanza` DISABLE KEYS */;
/*!40000 ALTER TABLE `grupos_estrategias_ensenanza_estrategia_ensenanza` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-16 10:53:59
