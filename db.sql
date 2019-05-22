-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.16 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0 */;
/*!40101 SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para id9671562_db
DROP DATABASE IF EXISTS `id9671562_db`;
CREATE DATABASE IF NOT EXISTS `id9671562_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `id9671562_db`;

-- Volcando estructura para tabla id9671562_db.actuadores
DROP TABLE IF EXISTS `actuadores`;
CREATE TABLE IF NOT EXISTS `actuadores`
(
    `id`         int(10) unsigned                                             NOT NULL AUTO_INCREMENT,
    `ventilador` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

-- Volcando datos para la tabla id9671562_db.actuadores: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `actuadores`
    DISABLE KEYS */;
/*!40000 ALTER TABLE `actuadores`
    ENABLE KEYS */;

-- Volcando estructura para tabla id9671562_db.indicadores
DROP TABLE IF EXISTS `indicadores`;
CREATE TABLE IF NOT EXISTS `indicadores`
(
    `id`    int(10) unsigned                   NOT NULL AUTO_INCREMENT,
    `start` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

-- Volcando datos para la tabla id9671562_db.indicadores: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `indicadores`
    DISABLE KEYS */;
/*!40000 ALTER TABLE `indicadores`
    ENABLE KEYS */;

-- Volcando estructura para tabla id9671562_db.sensores
DROP TABLE IF EXISTS `sensores`;
CREATE TABLE IF NOT EXISTS `sensores`
(
    `id` int(10) unsigned                                             NOT NULL AUTO_INCREMENT,
    `ph` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 2
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

-- Volcando datos para la tabla id9671562_db.sensores: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `sensores`
    DISABLE KEYS */;
INSERT INTO `sensores` (`id`, `ph`)
VALUES (1, '12');
/*!40000 ALTER TABLE `sensores`
    ENABLE KEYS */;

/*!40101 SET SQL_MODE = IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS = IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT = @OLD_CHARACTER_SET_CLIENT */;
