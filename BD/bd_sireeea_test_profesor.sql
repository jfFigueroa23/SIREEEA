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
-- Table structure for table `profesor`
--

DROP TABLE IF EXISTS `profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `deleted` datetime(6) DEFAULT NULL,
  `update` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `id_profesor` int NOT NULL,
  `nombre_profesor` varchar(255) NOT NULL,
  `nro_empleado` int NOT NULL,
  `contra` varchar(255) NOT NULL,
  `estrategia_preferida` varchar(255) DEFAULT NULL,
  `grupo` int NOT NULL,
  `carrera` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor`
--

LOCK TABLES `profesor` WRITE;
/*!40000 ALTER TABLE `profesor` DISABLE KEYS */;
INSERT INTO `profesor` VALUES (1,'2023-05-25 13:50:18.611140',NULL,'2023-06-25 13:23:02.493327',1,'Juan Francisco Figueroa Perez',16269,'123','Estrategias coinstruccionales',101,'IS'),(2,'2023-06-25 12:16:59.989993',NULL,'2023-06-25 13:23:02.492687',2,'Manuel de Jesus Rodriguez Guerrero',16217,'123','Compañero',201,'IS'),(3,'2023-06-25 12:16:59.992250',NULL,'2023-06-25 13:23:02.493152',3,'Mirsa Paolo Inzunza Martinez',18990,'123','Compañero',201,'IS'),(4,'2023-06-25 13:23:02.493512',NULL,'2023-06-25 13:23:02.493512',4,'Herman Geovanny Ayala Zuñiga',17300,'123','Compañero',201,'IS'),(5,'2023-06-25 13:23:02.493661',NULL,'2023-06-25 13:23:02.493661',5,'Alan David Ramirez Noriega',15842,'123','Compañero',201,'IS'),(6,'2023-06-25 13:23:02.493813',NULL,'2023-06-25 13:23:02.493813',6,'Lidia Yadira Perez Aguilar',16540,'123','Compañero',201,'IS'),(7,'2023-06-25 13:23:02.493979',NULL,'2023-06-25 13:23:02.493979',7,'Gibran Uriel Lopez Coronel',17298,'123','Compañero',201,'IS'),(8,'2023-06-25 13:23:02.494144',NULL,'2023-06-25 13:23:02.494144',8,'Jose Miguel Mendivil Torres',16139,'123','Compañero',201,'IS'),(9,'2023-06-25 13:23:02.494297',NULL,'2023-06-25 13:23:02.494297',9,'Edgar Omar Perez Contreras',18309,'123','Compañero',201,'IS'),(10,'2023-06-25 13:34:38.676364',NULL,'2023-06-25 13:34:38.676364',10,'Jesus Aleyda Lugo Cardenas',16687,'123','Compañero',201,'IC'),(11,'2023-06-25 13:34:38.676665',NULL,'2023-06-25 13:34:38.676665',11,'Maria del Pilar Madrid Solis',16220,'123','Compañero',201,'IC'),(12,'2023-06-25 13:34:38.676827',NULL,'2023-06-25 13:34:38.676827',12,'Roman Eden Parra Galaviz',16873,'123','Compañero',201,'IG'),(13,'2023-06-25 13:34:38.676973',NULL,'2023-06-25 13:34:38.676973',13,'Rafael Macias Segura',16539,'123','Compañero',201,'IG'),(14,'2023-06-25 13:34:38.677125',NULL,'2023-06-25 13:34:38.677125',14,'Manuel de Jesus Perez Valdez',15313,'123','Compañero',201,'IG'),(15,'2023-06-25 13:34:38.677267',NULL,'2023-06-25 13:34:38.677267',15,'Edgar Ruben Montiel Andrade',14737,'123','Compañero',201,'IG'),(16,'2023-06-25 13:34:38.677417',NULL,'2023-06-25 13:34:38.677417',16,'Maria Luisa Martinez Castro',10104,'123','Compañero',201,'IG'),(17,'2024-02-09 11:11:48.442046',NULL,'2024-02-09 11:11:48.442046',17,'Rocío Becerra Urquidez',17298,'123','Compañero',201,'IS'),(18,'2024-02-09 11:11:48.442414',NULL,'2024-02-09 11:11:48.442414',18,'Karla Janeth Romero Ledezma',12345,'123','Compañero',201,'IS');
/*!40000 ALTER TABLE `profesor` ENABLE KEYS */;
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
