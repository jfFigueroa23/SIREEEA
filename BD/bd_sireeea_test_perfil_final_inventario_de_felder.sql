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
-- Table structure for table `perfil_final_inventario_de_felder`
--

DROP TABLE IF EXISTS `perfil_final_inventario_de_felder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfil_final_inventario_de_felder` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `deleted` datetime(6) DEFAULT NULL,
  `update` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `nro_cuenta` int NOT NULL,
  `grupo` int NOT NULL,
  `activo_reflexivo` varchar(255) NOT NULL,
  `sensorial_intuitivo` varchar(255) NOT NULL,
  `visual_verbal` varchar(255) NOT NULL,
  `secuencial_global` varchar(255) NOT NULL,
  `profesorId` int DEFAULT NULL,
  `ee1` int DEFAULT NULL,
  `ee2` int DEFAULT NULL,
  `ee3` int DEFAULT NULL,
  `ee4` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_31cf8adfd879d299c973f70454` (`grupo`),
  KEY `FK_c732a11b641fbcf44d562babacc` (`profesorId`),
  KEY `FK_c9122a381a6b61b79b5217e3e6d` (`ee1`),
  KEY `FK_858e107ed34d4b3ecc775a85740` (`ee2`),
  KEY `FK_14aaefcbf006e0ba3db5f80945c` (`ee3`),
  KEY `FK_e2f4598caaafec3ef1eb1c8711e` (`ee4`),
  CONSTRAINT `FK_14aaefcbf006e0ba3db5f80945c` FOREIGN KEY (`ee3`) REFERENCES `estrategia_ensenanza` (`id`),
  CONSTRAINT `FK_858e107ed34d4b3ecc775a85740` FOREIGN KEY (`ee2`) REFERENCES `estrategia_ensenanza` (`id`),
  CONSTRAINT `FK_c732a11b641fbcf44d562babacc` FOREIGN KEY (`profesorId`) REFERENCES `profesor` (`id`),
  CONSTRAINT `FK_c9122a381a6b61b79b5217e3e6d` FOREIGN KEY (`ee1`) REFERENCES `estrategia_ensenanza` (`id`),
  CONSTRAINT `FK_e2f4598caaafec3ef1eb1c8711e` FOREIGN KEY (`ee4`) REFERENCES `estrategia_ensenanza` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfil_final_inventario_de_felder`
--

LOCK TABLES `perfil_final_inventario_de_felder` WRITE;
/*!40000 ALTER TABLE `perfil_final_inventario_de_felder` DISABLE KEYS */;
INSERT INTO `perfil_final_inventario_de_felder` VALUES (27,'2023-11-22 16:28:25.440432',NULL,'2024-02-01 16:41:58.000000',19104294,402,'5A','7B','1A','7B',NULL,1,4,5,8),(28,'2023-11-23 18:37:51.292302',NULL,'2024-02-01 16:33:37.000000',19055641,402,'5B','9B','9B','9B',NULL,2,4,6,8),(29,'2023-11-23 20:27:13.366970',NULL,'2024-02-01 16:33:47.000000',19104545,402,'3A','7A','1A','3A',NULL,1,3,5,7),(30,'2023-11-23 20:27:37.186995',NULL,'2024-02-01 16:33:59.000000',19104200,402,'1B','9A','1B','3A',NULL,2,3,6,7),(31,'2023-11-23 20:28:02.528995',NULL,'2024-02-01 16:34:10.000000',15003922,402,'5A','7A','7A','5A',NULL,1,3,5,7),(32,'2023-11-23 20:29:05.836555',NULL,'2024-02-01 16:38:22.587911',22141855,402,'9A','5B','1A','7B',NULL,1,4,5,8),(33,'2024-01-22 16:45:59.868214',NULL,'2024-02-01 16:26:56.000000',15001431,301,'11B','11B','11B','11B',NULL,2,4,6,8);
/*!40000 ALTER TABLE `perfil_final_inventario_de_felder` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-16 10:53:58
