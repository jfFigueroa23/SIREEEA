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
-- Table structure for table `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preguntas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `deleted` datetime(6) DEFAULT NULL,
  `update` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `id_cuestionario` int NOT NULL,
  `num_pregunta` int NOT NULL,
  `pregunta` varchar(255) NOT NULL,
  `respuesta_1` varchar(255) NOT NULL,
  `respuesta_2` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_2d96f6d73f244dd161129de715c` (`id_cuestionario`),
  CONSTRAINT `FK_2d96f6d73f244dd161129de715c` FOREIGN KEY (`id_cuestionario`) REFERENCES `cuestionarios` (`id_cuestionario`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preguntas`
--

LOCK TABLES `preguntas` WRITE;
/*!40000 ALTER TABLE `preguntas` DISABLE KEYS */;
INSERT INTO `preguntas` VALUES (1,'2023-11-21 19:01:23.546660',NULL,'2023-11-21 19:01:23.546660',1,1,'Entiendo mejor algo..','Si lo practico.','Si pienso en ello.'),(2,'2023-11-21 19:01:23.549168',NULL,'2023-11-21 19:01:23.549168',1,2,'Me considero...','Realista.','Innovador.'),(3,'2023-11-21 19:01:23.550997',NULL,'2023-11-21 19:01:23.550997',1,3,'Cuando pienso acerca de lo que hice ayer, es más probable que lo haga sobre la base de...','Una imagen.','Palabras.'),(4,'2023-11-21 19:01:23.552383',NULL,'2023-11-21 19:01:23.552383',1,4,'Tengo tendencia a...','Entender los detalles de un tema pero no ver claramente su estructura completa.','Entender la estructura completa pero no ver claramente los detalles.'),(5,'2023-11-21 19:01:23.554007',NULL,'2023-11-21 19:01:23.554007',1,5,'Cuando estoy aprendiendo algo nuevo, me ayuda...','Hablar de ello.','Pensar en ello.'),(6,'2023-11-21 19:01:23.555448',NULL,'2023-11-21 19:01:23.555448',1,6,'Si yo fuera profesor, yo preferiría dar cursos...','Que traten sobre hechos y situaciones reales de la vida.','Que trate con ideas y teorías.'),(7,'2023-11-21 19:01:23.556937',NULL,'2023-11-21 19:01:23.556937',1,7,'Prefiero obtener información nueva de...','Imágenes, diagramas, gráficas y mapas.','Instrucciones escritas o información verbal.'),(8,'2023-11-21 19:01:23.558342',NULL,'2023-11-21 19:01:23.558342',1,8,'Una vez que entiendo...','Todas las partes, entiendo el total.','El total de algo, entiendo como encaja sus partes.'),(9,'2023-11-21 19:01:23.560158',NULL,'2023-11-21 19:01:23.560158',1,9,'En un grupo de estudio que trabaja con un material difícil, es más probable que...','Participe y contribuya con ideas.','No participe y solo escuche.'),(10,'2023-11-21 19:01:23.561869',NULL,'2023-11-21 19:01:23.561869',1,10,'Es más fácil para mí...','Aprender hechos.','Aprender conceptos.'),(11,'2023-11-21 19:01:23.563529',NULL,'2023-11-21 19:01:23.563529',1,11,'En un libro con muchas imágenes y gráficas es más probable que...','Revise cuidadosamente las imágenes y gráficas.','Me concentre en el texto escrito.'),(12,'2023-11-21 19:01:23.565150',NULL,'2023-11-21 19:01:23.565150',1,12,'Cuando resuelvo problemas de matemáticas...','Generalmente trabajo sobre las soluciones con un paso a la vez.','Frecuentemente sé cuales son las soluciones, pero luego tengo dificultad para imaginarme los pasos para llegar a ellas.'),(13,'2023-11-21 19:01:23.566710',NULL,'2023-11-21 19:01:23.566710',1,13,'En las clases a las que he asistido...','He llegado a saber como son muchos de los estudiantes.','Raramente he llegado a saber como son muchos de los estudiantes.'),(14,'2023-11-21 19:01:23.568313',NULL,'2023-11-21 19:01:23.568313',1,14,'Cuando leo temas que no son de ficción, prefiero...','Algo que me enseñe nuevos hechos o me diga como hacer algo.','Algo que me dé nuevas ideas en que pensar.'),(15,'2023-11-21 19:01:23.569832',NULL,'2023-11-21 19:01:23.569832',1,15,'Me gustan los maestros...','Que utilizan muchos esquemas en el pizarrón.','Que toman muchos tiempo para explicar.'),(16,'2023-11-21 19:01:23.571389',NULL,'2023-11-21 19:01:23.571389',1,16,'Cuando estoy analizando un cuento o una novela...','Pienso en los incidentes y trato de acomodarlos para configurar los temas.','Me doy cuenta de cuales son los temas cuando termino de leer y luego tengo que regresar y encontrar los incidentes que los demuestran.'),(17,'2023-11-21 19:01:23.573076',NULL,'2023-11-21 19:01:23.573076',1,17,'Cuando comienzo a resolver un problema de tarea, es más probable que...','Comience a trabajar en su solución inmediatamente.','Primero tratare de entender completamente el problema.'),(18,'2023-11-21 19:01:23.574414',NULL,'2023-11-21 19:01:23.574414',1,18,'Prefiero la idea de...','Certeza.','Teoría.'),(19,'2023-11-21 19:01:23.575654',NULL,'2023-11-21 19:01:23.575654',1,19,'Recuerdo mejor...','Lo que veo.','Lo que oigo.'),(20,'2023-11-21 19:01:23.576909',NULL,'2023-11-21 19:01:23.576909',1,20,'Es más importante para mí que un profesor...','Exponga el material en pasos secuenciales claros.','Me dé un panorama general y relacione le material con otros temas.'),(21,'2023-11-21 19:01:23.578149',NULL,'2023-11-21 19:01:23.578149',1,21,'Prefiero estudiar...','En grupo de estudio.','Solo.'),(22,'2023-11-21 19:01:23.579358',NULL,'2023-11-21 19:01:23.579358',1,22,'Me considero...','Cuidadoso en los detalles de mi trabajo.','Creativo en la forma en la que hago mi trabajo.'),(23,'2023-11-21 19:01:23.580568',NULL,'2023-11-21 19:01:23.580568',1,23,'Cuando alguien me da direcciones de nuevos lugares, prefiero...','Un mapa.','Instrucciones escritas.'),(24,'2023-11-21 19:01:23.581832',NULL,'2023-11-21 19:01:23.581832',1,24,'Aprendo...','A un paso constante. Si estudio con ahínco consigo lo que deseo.','En inicios y pausas. Me llego a confundir y súbitamente lo entiendo.'),(25,'2023-11-21 19:01:23.583060',NULL,'2023-11-21 19:01:23.583060',1,25,'Prefiero primero...','Hacer algo y ver que sucede.','Pensar como voy a hacer algo.'),(26,'2023-11-21 19:01:23.584275',NULL,'2023-11-21 19:01:23.584275',1,26,'Cuando leo por diversión, me gusta los escritos que...','Dicen claramente lo que desean dar a entender.','Dicen las cosas en forma creativa e interesante.'),(27,'2023-11-21 19:01:23.585515',NULL,'2023-11-21 19:01:23.585515',1,27,'Cuando veo un esquema o bosquejo en clase, es más probable que recuerde...','La imagen.','Lo que el profesor dijo de ella.'),(28,'2023-11-21 19:01:23.586826',NULL,'2023-11-21 19:01:23.586826',1,28,'Cuando me enfrento a un cuerpo de información...','Me concentro en los detalles y pierdo de vista el total de la misma.','Trato de entender el todo antes de ir a los detalles.'),(29,'2023-11-21 19:01:23.588166',NULL,'2023-11-21 19:01:23.588166',1,29,'Recuerdo más fácilmente...','Algo que he hecho.','Algo en lo que he pensado mucho.'),(30,'2023-11-21 19:01:23.589430',NULL,'2023-11-21 19:01:23.589430',1,30,'Cuando tengo que hacer un trabajo, prefiero...','Dominar una forma de hacerlo.','Intentar nuevas formas de hacerlo.'),(31,'2023-11-21 19:01:23.590691',NULL,'2023-11-21 19:01:23.590691',1,31,'Cuando alguien me enseña datos, prefiero...','Gráficas.','Resúmenes con texto.'),(32,'2023-11-21 19:01:23.614000',NULL,'2023-11-21 19:01:23.614000',1,32,'Cuando escribo un trabajo, es más probable que...','Lo haga (piense o escriba) desde el principio y avance.','Lo haga (piense o escriba) en diferentes partes y luego las ordene.'),(33,'2023-11-21 19:01:23.615258',NULL,'2023-11-21 19:01:23.615258',1,33,'Cuando tengo que trabajar en un proyecto de grupo, primero quiero...','Realizar una \"tormenta de ideas\"\" donde cada uno contribuye con ideas.\"','Realizar la \"tormenta de ideas\"\" en forma personal y luego juntarme con el grupo para comparar ideas.\"'),(34,'2023-11-21 19:01:23.616514',NULL,'2023-11-21 19:01:23.616514',1,34,'Considero que es mejor elogio llamar a alguien...','Sensible.','Imaginativo.'),(35,'2023-11-21 19:01:23.617755',NULL,'2023-11-21 19:01:23.617755',1,35,'Cuando conozco gente en una fiesta, es más probable que recuerde...','Cómo es su apariencia.','Lo que dice de sí mismo.'),(36,'2023-11-21 19:01:23.618985',NULL,'2023-11-21 19:01:23.618985',1,36,'Cuando estoy aprendiendo un tema, prefiero...','Mantenerme concentrado en ese tema, aprendiendo lo más que pueda de él.','Hacer conexiones entre ese tema y temas relacionados.'),(37,'2023-11-21 19:01:23.620197',NULL,'2023-11-21 19:01:23.620197',1,37,'Me considero...','Abierto.','Reservado.'),(38,'2023-11-21 19:01:23.621531',NULL,'2023-11-21 19:01:23.621531',1,38,'Prefiero cursos que dan más importancia a...','Material concreto (hechos, datos).','Material abstracto (conceptos, teorías).'),(39,'2023-11-21 19:01:23.622860',NULL,'2023-11-21 19:01:23.622860',1,39,'Para divertirme, prefiero.','Ver televisión.','Leer un libro.'),(40,'2023-11-21 19:01:23.624121',NULL,'2023-11-21 19:01:23.624121',1,40,'Algunos profesores inician sus clases haciendo un bosquejo de lo que enseñarán. Esos bosquejos son..','Algo útiles para mí.','Muy útiles para mí.'),(41,'2023-11-21 19:01:23.625368',NULL,'2023-11-21 19:01:23.625368',1,41,'La idea de hacer una tarea en grupo con una sola calificación para todos...','Me parece bien.','No me parece bien.'),(42,'2023-11-21 19:01:23.626591',NULL,'2023-11-21 19:01:23.626591',1,42,'Cuando hago grandes cálculos...','Tiendo a repetir todos mis pasos y revisar cuidadosamente mi trabajo.','Me cansa hacer su revisión y tengo que esforzarme para hacerlo.'),(43,'2023-11-21 19:01:23.627820',NULL,'2023-11-21 19:01:23.627820',1,43,'Tiendo a recordar lugares en los que he estado...','Fácilmente y con bastante exactitud.','Con dificultad y sin mucho detalle.'),(44,'2023-11-21 19:01:23.629051',NULL,'2023-11-21 19:01:23.629051',1,44,'Cuando resuelvo problemas en grupo, es más probable que yo...','Piense en los pasos para la solución de los problemas.','Piense en las posibles consecuencias o aplicaciones de la solución en un amplio rango de campos.');
/*!40000 ALTER TABLE `preguntas` ENABLE KEYS */;
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
