/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id_user` varchar(100) NOT NULL,
  `firstname_user` varchar(30) NOT NULL,
  `lastname_user` varchar(10) NOT NULL,
  `username_user` varchar(30) DEFAULT NULL,
  `password_user` varchar(100) DEFAULT NULL,
  `created_date_user` datetime DEFAULT NULL,
  `modified_date_user` datetime DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
INSERT INTO `User` VALUES ('fc11e7d0-1cbd-11ea-ad16-27b5f18c7f9d','herii','purnama','heriipurnama','sha1$7ed386dd$1$45809605e36c742f00b4582b2635218548f9074b','2019-12-12 16:01:29','2019-12-12 16:01:29');
