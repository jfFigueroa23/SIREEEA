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
-- Table structure for table `estrategia_ensenanza`
--

DROP TABLE IF EXISTS `estrategia_ensenanza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estrategia_ensenanza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `deleted` datetime(6) DEFAULT NULL,
  `update` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `titulo` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estrategia_ensenanza`
--

LOCK TABLES `estrategia_ensenanza` WRITE;
/*!40000 ALTER TABLE `estrategia_ensenanza` DISABLE KEYS */;
INSERT INTO `estrategia_ensenanza` VALUES (1,'2023-05-29 11:40:28.598425',NULL,'2023-05-29 11:40:28.598425','Mapas Conceptuales Y Redes Semánticas','Se trata de representaciones gráficas de esquemas de conocimiento (indican conceptos, proposiciones y explicaciones). Al implementar esta estrategia en la enseñanza, se promueve una organización más adecuada de la información que se ha de aprender (mejora las conexiones internas).'),(2,'2023-05-29 11:44:12.412890',NULL,'2023-05-29 11:44:12.412890','Ilustraciones','Son representaciones visuales de los conceptos, objetos o situaciones de una teoría o tema específico (fotografías, dibujos, esquemas, gráficas, dramatizaciones, etcétera). Con el uso de ilustraciones se atrae y se mantiene la atención de los estudiantes, además se facilita la codificación visual de la información.'),(3,'2023-05-29 11:44:12.413313',NULL,'2023-05-29 11:44:12.413313','Analogías','Las analogías son proposiciones que indican que una cosa o evento (concreto y familiar) es semejante a otro (desconocido y abstracto o complejo). Son útiles para favorecer el enlace entre los conocimientos previos y la nueva información que se ha de aprender, permiten a su vez que los alumnos puedan comprender información abstracta, así como trasladar lo aprendido a otros ámbitos.'),(4,'2023-05-29 11:44:12.413630',NULL,'2023-05-29 11:44:12.413630','Resúmenes','Es la síntesis y abstracción de la información más importante de un discurso oral o escrito, en esta estrategia se enfatizan conceptos clave, principios, términos y el argumento central. Los resúmenes facilitan en el estudiante el recuerdo y la comprensión de la información relevante del contenido o tema que se enseña.'),(5,'2023-05-29 11:44:12.413833',NULL,'2023-05-29 11:44:12.413833','Objetivos','Son enunciados que establecen las condiciones, el tipo de actividad y la forma de evaluación. Cuando el profesor utiliza esta estrategia permite al estudiante conocer la finalidad y alcance del material a estudiar y cómo manejarlo. De igual manera, el alumno sabe qué se espera de él al terminar de revisar el material, permitiéndole también contextualizar sus aprendizajes y darles sentido.'),(6,'2023-05-29 11:44:12.414018',NULL,'2023-05-29 11:44:12.414018','Preguntas Intercaladas','Son cuestionamientos que el docente inserta en la situación de enseñanza o en un texto. Mantienen la atención de los estudiantes y favorecen la práctica, la retención y la obtención de información relevante. El emplearlas como estrategia de enseñanza permite a los alumnos practicar y consolidar lo que han aprendido, además favorece la resolución de dudas, así como la autoevaluación.'),(7,'2023-05-29 11:44:12.414170',NULL,'2023-05-29 11:44:12.414170','Organizadores Previos','Se trata de información que permite a los alumnos conocer y contextualizar el contenido que se ha de aprender. Los organizadores previos se emplean antes de presentar formalmente el contenido nuevo, ayudan a tender un puente cognitivo entre la información nueva y los conocimientos previos, de igual forma hacen más accesible y familiar el contenido a los estudiantes.'),(8,'2023-05-29 11:44:12.414321',NULL,'2023-05-29 11:44:12.414321','Pistas Tipográficas Y Discursivas','Se refiere a señalamientos que se hacen en un texto o en la situación de enseñanza para enfatizar y organizar elementos relevantes del contenido por aprender. Permiten atraer y mantener la atención, así como detectar información importante. Algunos ejemplos de esta estrategia son: expresiones y cambios en el tono de voz como “esto es Importante…”, “pongan atención en…”; gesticulaciones enfáticas sobre ideas o puntos relevantes de un contenido; anotar o enumerar en el pizarrón los aspectos principales de la explicación del tema.'),(9,'2023-05-29 11:44:12.414522',NULL,'2023-05-29 11:44:12.414522','Estructuras Textuales','Son organizaciones retóricas del discurso oral o escrito, que influyen en su comprensión. Facilitan el recuerdo de lo más importante de un texto al identificar la manera en que está organizado así como su estructura.'),(10,'2023-05-29 11:44:12.414688',NULL,'2023-05-29 11:44:12.414688','Discusión Guiada','Consiste en el intercambio informal de ideas, información u opiniones realizado por un grupo de alumnos. Con esta estrategia el docente puede promover en los estudiantes la activación y movilización de los conocimientos previos acerca de un contenido.'),(11,'2023-05-29 11:44:12.414870',NULL,'2023-05-29 11:44:12.414870','Aula Invertida','El aula invertida es una estrategia en la que se da vuelta a la enseñanza tradicional, ya que los contenidos son estudiados en casa y en el salón de clase se aplica lo aprendido en situaciones significativas como debates, o proyectos colectivos; se le denomina también Flipped Classroom.'),(12,'2023-05-29 11:44:12.415033',NULL,'2023-05-29 11:44:12.415033','Aprendizaje Basado En Proyectos','Es una estrategia integradora que promueve la inclusión del estudiante en una situación o problemática real que requiere solución o comprobación. Se caracteriza por aplicar de manera práctica una propuesta que permite solucionar un problema real desde diversas áreas de conocimiento, dicha propuesta está centrada en actividades que conllevan la elaboración de un producto de utilidad social.'),(13,'2023-05-29 11:44:12.415174',NULL,'2023-05-29 11:44:12.415174','Aprendizaje Basado En Problemas','Se trata de una estrategia en la cual se investiga, interpreta, argumenta y propone la solución a uno o varios problemas, creando un escenario simulado de posible solución y analizando las probables consecuencias. Los problemas deben motivar a los alumnos a participar en escenarios relevantes que faciliten la conexión entre la teoría y su aplicación. Se puede trabajar con problemas abiertos o cerrados.');
/*!40000 ALTER TABLE `estrategia_ensenanza` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-16 10:53:57
