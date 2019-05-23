-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.16 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para id9671562_db
CREATE DATABASE IF NOT EXISTS `id9671562_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `id9671562_db`;

-- Volcando estructura para tabla id9671562_db.graficas
DROP TABLE IF EXISTS `graficas`;
CREATE TABLE IF NOT EXISTS `graficas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `dato` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `tiempo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla id9671562_db.graficas: ~17 rows (aproximadamente)
DELETE FROM `graficas`;
/*!40000 ALTER TABLE `graficas` DISABLE KEYS */;
INSERT INTO `graficas` (`id`, `nombre`, `dato`, `tiempo`) VALUES
	(1, 'TEMPERATURA', '2', '2019-05-23 00:09:05'),
	(2, 'TEMPERATURA', '3', '2019-05-23 00:09:05'),
	(3, 'TEMPERATURA', '5', '2019-05-23 00:09:05'),
	(4, 'VENTILADOR', '3.5', '2019-05-23 00:09:05'),
	(5, 'TEMPERATURA', '5', '2019-05-23 00:09:05'),
	(6, 'TEMPERATURA', '5', '2019-05-23 00:09:05'),
	(7, 'TEMPERATURA', '5', '2019-05-23 00:09:05'),
	(8, 'TEMPERATURA', '5', '2019-05-23 00:09:05'),
	(9, 'TEMPERATURA', '5', '2019-05-23 00:09:05'),
	(10, 'TEMPERATURA', '5', '2019-05-23 00:09:05'),
	(11, 'TEMPERATURA', '5', '2019-05-23 00:09:05'),
	(12, 'TEMPERATURA', '3.5', '2019-05-23 00:09:05'),
	(13, 'VENTILADOR', '3', '2019-05-23 00:37:27'),
	(14, 'VENTILADOR', '3.2', '2019-05-23 00:37:44'),
	(15, 'VENTILADOR', '3.2', '2019-05-23 00:38:20'),
	(16, 'VENTILADOR', '3.2', '2019-05-23 00:38:45'),
	(17, 'VENTILADOR', '3.2', '2019-05-23 00:38:51');
/*!40000 ALTER TABLE `graficas` ENABLE KEYS */;

-- Volcando estructura para tabla id9671562_db.indicadores
DROP TABLE IF EXISTS `indicadores`;
CREATE TABLE IF NOT EXISTS `indicadores` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `start` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `aire` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `enraizamiento` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `vegetativo` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `floracion` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `calefactor` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `ventilador` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `alertaTemperatura` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `humificador` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `deshumificador` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `alertaHumedad` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `bomba` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `alertaNivel` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `phElevado` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `phBajo` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `alertaPh` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla id9671562_db.indicadores: ~1 rows (aproximadamente)
DELETE FROM `indicadores`;
/*!40000 ALTER TABLE `indicadores` DISABLE KEYS */;
INSERT INTO `indicadores` (`id`, `start`, `aire`, `enraizamiento`, `vegetativo`, `floracion`, `calefactor`, `ventilador`, `alertaTemperatura`, `humificador`, `deshumificador`, `alertaHumedad`, `bomba`, `alertaNivel`, `phElevado`, `phBajo`, `alertaPh`) VALUES
	(1, '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
/*!40000 ALTER TABLE `indicadores` ENABLE KEYS */;

-- Volcando estructura para tabla id9671562_db.sensores
DROP TABLE IF EXISTS `sensores`;
CREATE TABLE IF NOT EXISTS `sensores` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `temperatura` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `humedad` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `nivel1` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `nivel2` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `ph` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla id9671562_db.sensores: ~1 rows (aproximadamente)
DELETE FROM `sensores`;
/*!40000 ALTER TABLE `sensores` DISABLE KEYS */;
INSERT INTO `sensores` (`id`, `temperatura`, `humedad`, `nivel1`, `nivel2`, `ph`) VALUES
	(1, '10', '2', '0', '0', '0');
/*!40000 ALTER TABLE `sensores` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
