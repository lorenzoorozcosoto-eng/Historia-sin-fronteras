-- Esquema de Historia Sin Fronteras (generado con npm run exportar-bd)
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS `categorias` (
  `id_categoria` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`),
  UNIQUE KEY `uq_categorias_nombre` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `consultas_ia` (
  `id_consulta` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `origen` enum('texto','rapida','imagen','voz') NOT NULL DEFAULT 'texto',
  `pregunta` text NOT NULL,
  `respuesta` text DEFAULT NULL,
  `es_favorita` tinyint(1) NOT NULL DEFAULT 0,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_consulta`),
  KEY `idx_ia_usuario` (`id_usuario`,`fecha`),
  CONSTRAINT `fk_ia_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `contenidos` (
  `id_contenido` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_pais` smallint(5) unsigned NOT NULL,
  `id_categoria` tinyint(3) unsigned NOT NULL,
  `slug` varchar(60) NOT NULL,
  `titulo` varchar(120) NOT NULL,
  `subtitulo` varchar(255) DEFAULT NULL,
  `icono` varchar(16) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `dato_curioso` text DEFAULT NULL,
  `lugares` varchar(255) DEFAULT NULL,
  `imagen_url` varchar(500) DEFAULT NULL,
  `texto_audio` text DEFAULT NULL,
  `orden` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_contenido`),
  UNIQUE KEY `uq_contenido_pais_slug` (`id_pais`,`slug`),
  KEY `idx_contenidos_categoria` (`id_categoria`),
  CONSTRAINT `fk_contenidos_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`) ON UPDATE CASCADE,
  CONSTRAINT `fk_contenidos_pais` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id_pais`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `grupo_estudiantes` (
  `id_grupo` int(10) unsigned NOT NULL,
  `id_estudiante` int(10) unsigned NOT NULL,
  `fecha_union` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_grupo`,`id_estudiante`),
  KEY `idx_ge_estudiante` (`id_estudiante`),
  CONSTRAINT `fk_ge_estudiante` FOREIGN KEY (`id_estudiante`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE,
  CONSTRAINT `fk_ge_grupo` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`id_grupo`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `grupos` (
  `id_grupo` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_docente` int(10) unsigned NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `codigo_acceso` varchar(12) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_grupo`),
  UNIQUE KEY `uq_grupos_codigo` (`codigo_acceso`),
  KEY `idx_grupos_docente` (`id_docente`),
  CONSTRAINT `fk_grupos_docente` FOREIGN KEY (`id_docente`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `intentos_respuesta` (
  `id_intento` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `id_pregunta` int(10) unsigned NOT NULL,
  `id_respuesta` int(10) unsigned DEFAULT NULL,
  `es_correcta` tinyint(1) NOT NULL DEFAULT 0,
  `puntos_ganados` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_intento`),
  KEY `idx_intentos_usuario` (`id_usuario`,`fecha`),
  KEY `idx_intentos_pregunta` (`id_pregunta`),
  KEY `idx_intentos_respuesta` (`id_respuesta`),
  CONSTRAINT `fk_intentos_pregunta` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id_pregunta`) ON DELETE CASCADE,
  CONSTRAINT `fk_intentos_respuesta` FOREIGN KEY (`id_respuesta`) REFERENCES `respuestas` (`id_respuesta`) ON DELETE SET NULL,
  CONSTRAINT `fk_intentos_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `logros` (
  `id_logro` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `icono` varchar(16) DEFAULT NULL,
  `criterio` enum('puntos','contenidos_completados','paises_completados','racha_dias','nivel','manual') NOT NULL DEFAULT 'manual',
  `valor_requerido` int(10) unsigned NOT NULL DEFAULT 0,
  `puntos_recompensa` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_logro`),
  UNIQUE KEY `uq_logros_nombre` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `niveles` (
  `id_nivel` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `numero` smallint(5) unsigned NOT NULL,
  `dificultad` enum('Básica','Intermedia','Avanzada','Experta','Maestra') NOT NULL,
  `preguntas_por_nivel` tinyint(3) unsigned NOT NULL DEFAULT 20,
  `vidas_iniciales` tinyint(3) unsigned NOT NULL DEFAULT 10,
  PRIMARY KEY (`id_nivel`),
  UNIQUE KEY `uq_niveles_numero` (`numero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `paises` (
  `id_pais` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `id_region` tinyint(3) unsigned NOT NULL,
  `codigo_iso` char(2) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `bandera` varchar(16) DEFAULT NULL,
  `pagina_url` varchar(100) DEFAULT NULL,
  `disponible` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_pais`),
  UNIQUE KEY `uq_paises_iso` (`codigo_iso`),
  UNIQUE KEY `uq_paises_nombre` (`nombre`),
  KEY `idx_paises_region` (`id_region`),
  CONSTRAINT `fk_paises_region` FOREIGN KEY (`id_region`) REFERENCES `regiones` (`id_region`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `preguntas` (
  `id_pregunta` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo` enum('mini_reto','recuperacion','reto_final','nivel') NOT NULL,
  `id_contenido` int(10) unsigned DEFAULT NULL,
  `id_pais` smallint(5) unsigned DEFAULT NULL,
  `id_nivel` smallint(5) unsigned DEFAULT NULL,
  `id_categoria` tinyint(3) unsigned DEFAULT NULL,
  `enunciado` varchar(500) NOT NULL,
  `puntos` tinyint(3) unsigned NOT NULL DEFAULT 10,
  `activa` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_pregunta`),
  KEY `idx_preguntas_tipo` (`tipo`),
  KEY `idx_preguntas_contenido` (`id_contenido`),
  KEY `idx_preguntas_pais` (`id_pais`),
  KEY `idx_preguntas_nivel` (`id_nivel`),
  KEY `idx_preguntas_categoria` (`id_categoria`),
  CONSTRAINT `fk_preguntas_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`) ON DELETE SET NULL,
  CONSTRAINT `fk_preguntas_contenido` FOREIGN KEY (`id_contenido`) REFERENCES `contenidos` (`id_contenido`) ON DELETE CASCADE,
  CONSTRAINT `fk_preguntas_nivel` FOREIGN KEY (`id_nivel`) REFERENCES `niveles` (`id_nivel`) ON DELETE CASCADE,
  CONSTRAINT `fk_preguntas_pais` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id_pais`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `progreso_contenido` (
  `id_progreso_contenido` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `id_contenido` int(10) unsigned NOT NULL,
  `preguntas_respondidas` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `respuestas_correctas` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `completado` tinyint(1) NOT NULL DEFAULT 0,
  `fecha_completado` datetime DEFAULT NULL,
  PRIMARY KEY (`id_progreso_contenido`),
  UNIQUE KEY `uq_progcont_usuario_contenido` (`id_usuario`,`id_contenido`),
  KEY `idx_progcont_contenido` (`id_contenido`),
  CONSTRAINT `fk_progcont_contenido` FOREIGN KEY (`id_contenido`) REFERENCES `contenidos` (`id_contenido`) ON DELETE CASCADE,
  CONSTRAINT `fk_progcont_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `progreso_nivel` (
  `id_progreso_nivel` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `id_nivel` smallint(5) unsigned NOT NULL,
  `estado` enum('en_curso','completado','perdido') NOT NULL DEFAULT 'en_curso',
  `respuestas_correctas` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `reto1_superado` tinyint(1) NOT NULL DEFAULT 0,
  `reto2_superado` tinyint(1) NOT NULL DEFAULT 0,
  `intentos` smallint(5) unsigned NOT NULL DEFAULT 1,
  `fecha_actualizacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_progreso_nivel`),
  UNIQUE KEY `uq_prognivel_usuario_nivel` (`id_usuario`,`id_nivel`),
  KEY `idx_prognivel_nivel` (`id_nivel`),
  CONSTRAINT `fk_prognivel_nivel` FOREIGN KEY (`id_nivel`) REFERENCES `niveles` (`id_nivel`) ON DELETE CASCADE,
  CONSTRAINT `fk_prognivel_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `progreso_pais` (
  `id_progreso` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `id_pais` smallint(5) unsigned NOT NULL,
  `puntos` int(10) unsigned NOT NULL DEFAULT 0,
  `vidas` tinyint(3) unsigned NOT NULL DEFAULT 5,
  `racha` smallint(5) unsigned NOT NULL DEFAULT 0,
  `respuestas_correctas` int(10) unsigned NOT NULL DEFAULT 0,
  `contenidos_completados` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `bloqueado_por_vidas` tinyint(1) NOT NULL DEFAULT 0,
  `reto_final_desbloqueado` tinyint(1) NOT NULL DEFAULT 0,
  `rondas_completadas` smallint(5) unsigned NOT NULL DEFAULT 0,
  `puntos_acumulados` int(10) unsigned NOT NULL DEFAULT 0,
  `correctas_acumuladas` int(10) unsigned NOT NULL DEFAULT 0,
  `fecha_actualizacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `vidas_agotadas_en` datetime DEFAULT NULL,
  PRIMARY KEY (`id_progreso`),
  UNIQUE KEY `uq_progreso_usuario_pais` (`id_usuario`,`id_pais`),
  KEY `idx_progreso_pais` (`id_pais`),
  CONSTRAINT `fk_progpais_pais` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id_pais`) ON DELETE CASCADE,
  CONSTRAINT `fk_progpais_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `progreso_tema` (
  `id_usuario` int(10) unsigned NOT NULL,
  `id_pais` smallint(5) unsigned NOT NULL,
  `tema` varchar(60) NOT NULL,
  `correctas` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `total` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`,`id_pais`,`tema`),
  KEY `fk_ptema_pais` (`id_pais`),
  CONSTRAINT `fk_ptema_pais` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id_pais`) ON DELETE CASCADE,
  CONSTRAINT `fk_ptema_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `rangos` (
  `id_rango` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `puntos_minimos` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_rango`),
  UNIQUE KEY `uq_rangos_nombre` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `recuperaciones_vidas` (
  `id_recuperacion` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `id_pais` smallint(5) unsigned NOT NULL,
  `aciertos` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `total_preguntas` tinyint(3) unsigned NOT NULL DEFAULT 5,
  `aprobado` tinyint(1) NOT NULL DEFAULT 0,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_recuperacion`),
  KEY `idx_recup_usuario` (`id_usuario`),
  KEY `idx_recup_pais` (`id_pais`),
  CONSTRAINT `fk_recup_pais` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id_pais`) ON DELETE CASCADE,
  CONSTRAINT `fk_recup_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `regiones` (
  `id_region` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) NOT NULL,
  PRIMARY KEY (`id_region`),
  UNIQUE KEY `uq_regiones_nombre` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `respuestas` (
  `id_respuesta` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_pregunta` int(10) unsigned NOT NULL,
  `texto` varchar(300) NOT NULL,
  `es_correcta` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_respuesta`),
  KEY `idx_respuestas_pregunta` (`id_pregunta`),
  CONSTRAINT `fk_respuestas_pregunta` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id_pregunta`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `roles` (
  `id_rol` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_rol`),
  UNIQUE KEY `uq_roles_nombre` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `rondas_reto_final` (
  `id_ronda` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `id_pais` smallint(5) unsigned NOT NULL,
  `puntos` int(10) unsigned NOT NULL DEFAULT 0,
  `correctas` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `total_preguntas` tinyint(3) unsigned NOT NULL DEFAULT 30,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_ronda`),
  KEY `idx_rondas_usuario` (`id_usuario`),
  KEY `idx_rondas_pais` (`id_pais`),
  CONSTRAINT `fk_rondas_pais` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id_pais`) ON DELETE CASCADE,
  CONSTRAINT `fk_rondas_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `usuario_logro` (
  `id_usuario` int(10) unsigned NOT NULL,
  `id_logro` smallint(5) unsigned NOT NULL,
  `fecha_obtenido` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`,`id_logro`),
  KEY `idx_ul_logro` (`id_logro`),
  CONSTRAINT `fk_ul_logro` FOREIGN KEY (`id_logro`) REFERENCES `logros` (`id_logro`) ON DELETE CASCADE,
  CONSTRAINT `fk_ul_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `usuario_preferencias` (
  `id_usuario` int(10) unsigned NOT NULL,
  `nivel_conocimiento` enum('principiante','intermedio','avanzado') NOT NULL DEFAULT 'principiante',
  `motivacion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  CONSTRAINT `fk_pref_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `usuario_region_interes` (
  `id_usuario` int(10) unsigned NOT NULL,
  `id_region` tinyint(3) unsigned NOT NULL,
  PRIMARY KEY (`id_usuario`,`id_region`),
  KEY `fk_uri_region` (`id_region`),
  CONSTRAINT `fk_uri_region` FOREIGN KEY (`id_region`) REFERENCES `regiones` (`id_region`) ON DELETE CASCADE,
  CONSTRAINT `fk_uri_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_rol` tinyint(3) unsigned NOT NULL DEFAULT 1,
  `id_rango` tinyint(3) unsigned NOT NULL DEFAULT 1,
  `nombre_completo` varchar(120) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `nombre_usuario` varchar(40) NOT NULL,
  `contrasena_hash` varchar(255) DEFAULT NULL,
  `google_id` varchar(40) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `acepto_terminos` tinyint(1) NOT NULL DEFAULT 0,
  `puntos_totales` int(10) unsigned NOT NULL DEFAULT 0,
  `racha_dias` smallint(5) unsigned NOT NULL DEFAULT 0,
  `ultima_actividad` date DEFAULT NULL,
  `estado` enum('activo','inactivo','bloqueado') NOT NULL DEFAULT 'activo',
  `fecha_registro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ultimo_acceso` datetime DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `uq_usuarios_correo` (`correo`),
  UNIQUE KEY `uq_usuarios_usuario` (`nombre_usuario`),
  UNIQUE KEY `google_id` (`google_id`),
  KEY `idx_usuarios_rol` (`id_rol`),
  KEY `idx_usuarios_rango` (`id_rango`),
  CONSTRAINT `fk_usuarios_rango` FOREIGN KEY (`id_rango`) REFERENCES `rangos` (`id_rango`) ON UPDATE CASCADE,
  CONSTRAINT `fk_usuarios_rol` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Datos de roles
INSERT IGNORE INTO `roles` (`id_rol`, `nombre`, `descripcion`) VALUES (1, 'Estudiante', 'Aprende historia y cultura, completa retos y gana logros.');
INSERT IGNORE INTO `roles` (`id_rol`, `nombre`, `descripcion`) VALUES (2, 'Docente', 'Guía a los estudiantes y usa los contenidos como apoyo para sus clases.');
INSERT IGNORE INTO `roles` (`id_rol`, `nombre`, `descripcion`) VALUES (3, 'Administrador', 'Gestiona usuarios y contenidos y revisa los datos de la plataforma.');

-- Datos de regiones
INSERT IGNORE INTO `regiones` (`id_region`, `nombre`) VALUES (1, 'África');
INSERT IGNORE INTO `regiones` (`id_region`, `nombre`) VALUES (2, 'América');
INSERT IGNORE INTO `regiones` (`id_region`, `nombre`) VALUES (3, 'Asia');
INSERT IGNORE INTO `regiones` (`id_region`, `nombre`) VALUES (4, 'Europa');
INSERT IGNORE INTO `regiones` (`id_region`, `nombre`) VALUES (5, 'Oceanía');

-- Datos de paises
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (1, 2, 'CO', 'Colombia', '🇨🇴', 'colombia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (2, 2, 'MX', 'México', '🇲🇽', 'mexico.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (3, 2, 'BR', 'Brasil', '🇧🇷', 'brasil.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (4, 2, 'AR', 'Argentina', '🇦🇷', 'argentina.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (5, 2, 'PE', 'Perú', '🇵🇪', 'peru.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (6, 2, 'US', 'Estados Unidos', '🇺🇸', 'estados_unidos.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (7, 2, 'CA', 'Canadá', '🇨🇦', 'canada.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (8, 4, 'DE', 'Alemania', '🇩🇪', 'alemania.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (9, 4, 'FR', 'Francia', '🇫🇷', 'francia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (10, 4, 'IT', 'Italia', '🇮🇹', 'italia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (11, 4, 'ES', 'España', '🇪🇸', 'espana.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (12, 4, 'RU', 'Rusia', '🇷🇺', 'rusia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (13, 3, 'CN', 'China', '🇨🇳', 'china.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (14, 3, 'JP', 'Japón', '🇯🇵', 'japon.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (15, 3, 'KR', 'Corea del Sur', '🇰🇷', NULL, 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (16, 1, 'MA', 'Marruecos', '🇲🇦', 'marruecos.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (17, 1, 'EG', 'Egipto', '🇪🇬', 'egipto.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (18, 1, 'ZA', 'Sudáfrica', '🇿🇦', 'sudafrica.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (19, 4, 'GR', 'Grecia', '🇬🇷', NULL, 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (20, 3, 'IN', 'India', '🇮🇳', NULL, 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (21, 5, 'AU', 'Australia', '🇦🇺', NULL, 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (22, 2, 'PY', 'Paraguay', '🇵🇾', 'paraguay.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (23, 2, 'UY', 'Uruguay', '🇺🇾', 'uruguay.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (24, 2, 'BO', 'Bolivia', '🇧🇴', 'bolivia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (25, 2, 'CL', 'Chile', '🇨🇱', 'chile.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (26, 2, 'EC', 'Ecuador', '🇪🇨', 'ecuador.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (27, 2, 'SR', 'Surinam', '🇸🇷', 'surinam.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (28, 2, 'GY', 'Guyana', '🇬🇾', 'guyana.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (29, 2, 'VE', 'Venezuela', '🇻🇪', 'venezuela.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (31, 2, 'GT', 'Guatemala', '🇬🇹', 'guatemala.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (32, 3, 'PK', 'Pakistán', '🇵🇰', 'pakistan.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (33, 3, 'ID', 'Indonesia', '🇮🇩', 'indonesia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (34, 3, 'PH', 'Filipinas', '🇵🇭', 'filipinas.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (35, 1, 'ET', 'Etiopía', '🇪🇹', 'etiopia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (36, 3, 'BD', 'Bangladés', '🇧🇩', 'banglades.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (37, 1, 'NG', 'Nigeria', '🇳🇬', 'nigeria.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (38, 3, 'TR', 'Turquía', '🇹🇷', 'turquia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (39, 3, 'IR', 'Irán', '🇮🇷', 'iran.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (40, 3, 'VN', 'Vietnam', '🇻🇳', 'vietnam.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (41, 1, 'CD', 'República Democrática del Congo', '🇨🇩', 'republica-democratica-del-congo.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (42, 4, 'GB', 'Reino Unido', '🇬🇧', 'reino-unido.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (43, 3, 'TH', 'Tailandia', '🇹🇭', 'tailandia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (44, 1, 'KE', 'Kenia', '🇰🇪', 'kenia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (45, 3, 'MM', 'Birmania (Myanmar)', '🇲🇲', 'birmania.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (46, 1, 'TZ', 'Tanzania', '🇹🇿', 'tanzania.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (47, 3, 'MY', 'Malasia', '🇲🇾', 'malasia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (48, 3, 'UZ', 'Uzbekistán', '🇺🇿', 'uzbekistan.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (49, 3, 'AF', 'Afganistán', '🇦🇫', 'afganistan.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (50, 3, 'IQ', 'Irak', '🇮🇶', 'irak.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (51, 3, 'SA', 'Arabia Saudí', '🇸🇦', 'arabia-saudi.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (52, 3, 'KZ', 'Kazajistán', '🇰🇿', 'kazajistan.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (53, 3, 'LK', 'Sri Lanka', '🇱🇰', 'sri-lanka.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (54, 3, 'NP', 'Nepal', '🇳🇵', 'nepal.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (55, 3, 'YE', 'Yemen', '🇾🇪', 'yemen.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (56, 3, 'JO', 'Jordania', '🇯🇴', 'jordania.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (57, 3, 'IL', 'Israel', '🇮🇱', 'israel.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (58, 3, 'KH', 'Camboya', '🇰🇭', 'camboya.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (59, 3, 'SY', 'Siria', '🇸🇾', 'siria.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (60, 3, 'PS', 'Palestina', '🇵🇸', 'palestina.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (61, 3, 'MN', 'Mongolia', '🇲🇳', 'mongolia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (62, 3, 'KP', 'Corea del Norte', '🇰🇵', 'corea-del-norte.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (63, 3, 'LB', 'Líbano', '🇱🇧', 'libano.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (64, 3, 'CY', 'Chipre', '🇨🇾', 'chipre.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (65, 3, 'AZ', 'Azerbaiyán', '🇦🇿', 'azerbaiyan.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (66, 3, 'AM', 'Armenia', '🇦🇲', 'armenia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (67, 3, 'GE', 'Georgia', '🇬🇪', 'georgia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (68, 3, 'KG', 'Kirguistán', '🇰🇬', 'kirguistan.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (69, 3, 'TJ', 'Tayikistán', '🇹🇯', 'tayikistan.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (70, 3, 'SG', 'Singapur', '🇸🇬', 'singapur.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (71, 3, 'LA', 'Laos', '🇱🇦', 'laos.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (72, 3, 'AE', 'Emiratos Árabes Unidos', '🇦🇪', 'emiratos-arabes-unidos.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (73, 3, 'BH', 'Baréin', '🇧🇭', 'barein.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (74, 3, 'QA', 'Catar', '🇶🇦', 'catar.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (75, 3, 'KW', 'Kuwait', '🇰🇼', 'kuwait.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (76, 3, 'OM', 'Omán', '🇴🇲', 'oman.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (77, 3, 'TL', 'Timor Oriental', '🇹🇱', 'timor-oriental.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (78, 3, 'MV', 'Maldivas', '🇲🇻', 'maldivas.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (79, 3, 'BN', 'Brunéi', '🇧🇳', 'brunei.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (80, 3, 'BT', 'Bután', '🇧🇹', 'butan.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (81, 3, 'TM', 'Turkmenistán', '🇹🇲', 'turkmenistan.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (82, 4, 'BE', 'Bélgica', '🇧🇪', 'belgica.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (83, 4, 'NL', 'Países Bajos', '🇳🇱', 'paises-bajos.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (84, 4, 'UA', 'Ucrania', '🇺🇦', 'ucrania.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (85, 4, 'PL', 'Polonia', '🇵🇱', 'polonia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (86, 4, 'RO', 'Rumanía', '🇷🇴', 'rumania.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (87, 4, 'PT', 'Portugal', '🇵🇹', 'portugal.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (88, 4, 'SE', 'Suecia', '🇸🇪', 'suecia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (89, 4, 'RS', 'Serbia', '🇷🇸', 'serbia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (90, 4, 'CH', 'Suiza', '🇨🇭', 'suiza.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (91, 4, 'AT', 'Austria', '🇦🇹', 'austria.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (92, 4, 'HU', 'Hungría', '🇭🇺', 'hungria.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (93, 4, 'CZ', 'Chequia', '🇨🇿', 'chequia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (94, 4, 'NO', 'Noruega', '🇳🇴', 'noruega.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (95, 4, 'FI', 'Finlandia', '🇫🇮', 'finlandia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (96, 4, 'DK', 'Dinamarca', '🇩🇰', 'dinamarca.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (97, 4, 'BG', 'Bulgaria', '🇧🇬', 'bulgaria.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (98, 4, 'BA', 'Bosnia y Herzegovina', '🇧🇦', 'bosnia-y-herzegovina.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (99, 4, 'HR', 'Croacia', '🇭🇷', 'croacia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (100, 4, 'SK', 'Eslovaquia', '🇸🇰', 'eslovaquia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (101, 4, 'BY', 'Bielorrusia', '🇧🇾', 'bielorrusia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (102, 4, 'IE', 'Irlanda', '🇮🇪', 'irlanda.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (103, 4, 'EE', 'Estonia', '🇪🇪', 'estonia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (104, 4, 'LV', 'Letonia', '🇱🇻', 'letonia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (105, 4, 'SI', 'Eslovenia', '🇸🇮', 'eslovenia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (106, 4, 'LT', 'Lituania', '🇱🇹', 'lituania.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (107, 4, 'AL', 'Albania', '🇦🇱', 'albania.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (108, 4, 'MT', 'Malta', '🇲🇹', 'malta.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (109, 4, 'LU', 'Luxemburgo', '🇱🇺', 'luxemburgo.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (110, 4, 'ME', 'Montenegro', '🇲🇪', 'montenegro.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (111, 4, 'MD', 'Moldavia', '🇲🇩', 'moldavia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (112, 4, 'MK', 'Macedonia del Norte', '🇲🇰', 'macedonia-del-norte.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (113, 4, 'VA', 'Ciudad del Vaticano', '🇻🇦', 'ciudad-del-vaticano.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (114, 4, 'SM', 'San Marino', '🇸🇲', 'san-marino.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (115, 4, 'LI', 'Liechtenstein', '🇱🇮', 'liechtenstein.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (116, 4, 'MC', 'Mónaco', '🇲🇨', 'monaco.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (117, 4, 'AD', 'Andorra', '🇦🇩', 'andorra.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (118, 4, 'IS', 'Islandia', '🇮🇸', 'islandia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (119, 1, 'AO', 'Angola', '🇦🇴', 'angola.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (120, 1, 'UG', 'Uganda', '🇺🇬', 'uganda.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (121, 1, 'SD', 'Sudán', '🇸🇩', 'sudan.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (122, 1, 'DZ', 'Argelia', '🇩🇿', 'argelia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (123, 1, 'CM', 'Camerún', '🇨🇲', 'camerun.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (124, 1, 'MG', 'Madagascar', '🇲🇬', 'madagascar.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (125, 1, 'CI', 'Costa de Marfil', '🇨🇮', 'costa-de-marfil.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (126, 1, 'MZ', 'Mozambique', '🇲🇿', 'mozambique.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (127, 1, 'GH', 'Ghana', '🇬🇭', 'ghana.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (128, 1, 'SN', 'Senegal', '🇸🇳', 'senegal.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (129, 1, 'ZM', 'Zambia', '🇿🇲', 'zambia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (130, 1, 'MW', 'Malaui', '🇲🇼', 'malaui.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (131, 1, 'ML', 'Malí', '🇲🇱', 'mali.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (132, 1, 'NE', 'Níger', '🇳🇪', 'niger.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (133, 1, 'GN', 'Guinea', '🇬🇳', 'guinea.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (134, 1, 'BF', 'Burkina Faso', '🇧🇫', 'burkina-faso.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (135, 1, 'ZW', 'Zimbabue', '🇿🇼', 'zimbabue.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (136, 1, 'SO', 'Somalia', '🇸🇴', 'somalia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (137, 1, 'TD', 'Chad', '🇹🇩', 'chad.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (138, 1, 'SS', 'Sudán del Sur', '🇸🇸', 'sudan-del-sur.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (139, 1, 'TN', 'Túnez', '🇹🇳', 'tunez.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (140, 1, 'BI', 'Burundi', '🇧🇮', 'burundi.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (141, 1, 'BJ', 'Benín', '🇧🇯', 'benin.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (142, 1, 'RW', 'Ruanda', '🇷🇼', 'ruanda.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (143, 1, 'CF', 'República Centroafricana', '🇨🇫', 'republica-centroafricana.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (144, 1, 'LR', 'Liberia', '🇱🇷', 'liberia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (145, 1, 'LY', 'Libia', '🇱🇾', 'libia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (146, 1, 'SL', 'Sierra Leona', '🇸🇱', 'sierra-leona.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (147, 1, 'TG', 'Togo', '🇹🇬', 'togo.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (148, 1, 'ER', 'Eritrea', '🇪🇷', 'eritrea.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (149, 2, 'CU', 'Cuba', '🇨🇺', 'cuba.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (150, 2, 'HN', 'Honduras', '🇭🇳', 'honduras.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (151, 2, 'PA', 'Panamá', '🇵🇦', 'panama.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (152, 2, 'CR', 'Costa Rica', '🇨🇷', 'costa-rica.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (153, 2, 'JM', 'Jamaica', '🇯🇲', 'jamaica.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (154, 2, 'HT', 'Haití', '🇭🇹', 'haiti.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (155, 2, 'DO', 'República Dominicana', '🇩🇴', 'republica-dominicana.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (156, 2, 'SV', 'El Salvador', '🇸🇻', 'el-salvador.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (157, 2, 'NI', 'Nicaragua', '🇳🇮', 'nicaragua.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (158, 2, 'BB', 'Barbados', '🇧🇧', 'barbados.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (159, 2, 'BS', 'Bahamas', '🇧🇸', 'bahamas.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (160, 2, 'BZ', 'Belice', '🇧🇿', 'belice.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (161, 2, 'TT', 'Trinidad y Tobago', '🇹🇹', 'trinidad-y-tobago.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (162, 2, 'AG', 'Antigua y Barbuda', '🇦🇬', 'antigua-y-barbuda.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (163, 2, 'KN', 'San Cristóbal y Nieves', '🇰🇳', 'san-cristobal-y-nieves.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (164, 2, 'DM', 'Dominica', '🇩🇲', 'dominica.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (165, 2, 'VC', 'San Vicente y las Granadinas', '🇻🇨', 'san-vicente-y-las-granadinas.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (166, 2, 'GD', 'Granada', '🇬🇩', 'granada.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (167, 2, 'LC', 'Santa Lucía', '🇱🇨', 'santa-lucia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (168, 5, 'WS', 'Samoa', '🇼🇸', 'samoa.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (169, 5, 'FJ', 'Fiyi', '🇫🇯', 'fiyi.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (170, 5, 'PG', 'Papúa Nueva Guinea', '🇵🇬', 'papua-nueva-guinea.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (171, 5, 'NZ', 'Nueva Zelanda', '🇳🇿', 'nueva-zelanda.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (172, 5, 'FM', 'Micronesia', '🇫🇲', 'micronesia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (173, 5, 'PW', 'Palaos', '🇵🇼', 'palaos.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (174, 5, 'TV', 'Tuvalu', '🇹🇻', 'tuvalu.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (175, 5, 'NR', 'Nauru', '🇳🇷', 'nauru.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (176, 5, 'KI', 'Kiribati', '🇰🇮', 'kiribati.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (177, 5, 'SB', 'Islas Salomón', '🇸🇧', 'islas-salomon.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (178, 5, 'VU', 'Vanuatu', '🇻🇺', 'vanuatu.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (179, 5, 'TO', 'Tonga', '🇹🇴', 'tonga.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (180, 5, 'MH', 'Islas Marshall', '🇲🇭', 'islas-marshall.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (181, 1, 'LS', 'Lesoto', '🇱🇸', 'lesoto.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (182, 1, 'BW', 'Botsuana', '🇧🇼', 'botsuana.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (183, 1, 'NA', 'Namibia', '🇳🇦', 'namibia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (184, 1, 'MR', 'Mauritania', '🇲🇷', 'mauritania.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (185, 1, 'GQ', 'Guinea Ecuatorial', '🇬🇶', 'guinea-ecuatorial.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (186, 1, 'GW', 'Guinea-Bisáu', '🇬🇼', 'guinea-bisau.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (187, 1, 'GA', 'Gabón', '🇬🇦', 'gabon.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (188, 1, 'GM', 'Gambia', '🇬🇲', 'gambia.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (189, 1, 'CV', 'Cabo Verde', '🇨🇻', 'cabo-verde.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (190, 1, 'SZ', 'Esuatini', '🇸🇿', 'esuatini.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (191, 1, 'DJ', 'Yibuti', '🇩🇯', 'yibuti.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (192, 1, 'CG', 'República del Congo', '🇨🇬', 'republica-del-congo.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (193, 1, 'ST', 'Santo Tomé y Príncipe', '🇸🇹', 'santo-tome-y-principe.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (194, 1, 'SC', 'Seychelles', '🇸🇨', 'seychelles.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (195, 1, 'MU', 'Mauricio', '🇲🇺', 'mauricio.html', 1);
INSERT IGNORE INTO `paises` (`id_pais`, `id_region`, `codigo_iso`, `nombre`, `bandera`, `pagina_url`, `disponible`) VALUES (196, 1, 'KM', 'Comoras', '🇰🇲', 'comoras.html', 1);

-- Datos de categorias
INSERT IGNORE INTO `categorias` (`id_categoria`, `nombre`, `descripcion`) VALUES (1, 'Historia', 'Acontecimientos, procesos y personajes históricos.');
INSERT IGNORE INTO `categorias` (`id_categoria`, `nombre`, `descripcion`) VALUES (2, 'Cultura', 'Costumbres, tradiciones, gastronomía, música, fiestas, arte y monumentos.');
INSERT IGNORE INTO `categorias` (`id_categoria`, `nombre`, `descripcion`) VALUES (3, 'Geografía', 'Capitales, ubicación y aspectos geográficos (modo por niveles).');

-- Datos de niveles
INSERT IGNORE INTO `niveles` (`id_nivel`, `numero`, `dificultad`, `preguntas_por_nivel`, `vidas_iniciales`) VALUES (1, 1, 'Básica', 20, 10);
INSERT IGNORE INTO `niveles` (`id_nivel`, `numero`, `dificultad`, `preguntas_por_nivel`, `vidas_iniciales`) VALUES (2, 2, 'Básica', 20, 10);
INSERT IGNORE INTO `niveles` (`id_nivel`, `numero`, `dificultad`, `preguntas_por_nivel`, `vidas_iniciales`) VALUES (3, 3, 'Básica', 20, 10);

-- Datos de rangos
INSERT IGNORE INTO `rangos` (`id_rango`, `nombre`, `puntos_minimos`) VALUES (1, 'Explorador', 0);
INSERT IGNORE INTO `rangos` (`id_rango`, `nombre`, `puntos_minimos`) VALUES (2, 'Aventurero', 500);
INSERT IGNORE INTO `rangos` (`id_rango`, `nombre`, `puntos_minimos`) VALUES (3, 'Viajero', 1500);
INSERT IGNORE INTO `rangos` (`id_rango`, `nombre`, `puntos_minimos`) VALUES (4, 'Historiador', 3000);
INSERT IGNORE INTO `rangos` (`id_rango`, `nombre`, `puntos_minimos`) VALUES (5, 'Explorador mundial', 6000);

-- Datos de logros
INSERT IGNORE INTO `logros` (`id_logro`, `nombre`, `descripcion`, `icono`, `criterio`, `valor_requerido`, `puntos_recompensa`) VALUES (1, 'Primer paso', 'Completa tu primer tema.', '👣', 'contenidos_completados', 1, 10);
INSERT IGNORE INTO `logros` (`id_logro`, `nombre`, `descripcion`, `icono`, `criterio`, `valor_requerido`, `puntos_recompensa`) VALUES (2, 'Explorador curioso', 'Completa 7 temas.', '🧭', 'contenidos_completados', 7, 50);
INSERT IGNORE INTO `logros` (`id_logro`, `nombre`, `descripcion`, `icono`, `criterio`, `valor_requerido`, `puntos_recompensa`) VALUES (3, 'Viajero del mundo', 'Termina todos los temas de un país.', '🌍', 'paises_completados', 1, 100);
INSERT IGNORE INTO `logros` (`id_logro`, `nombre`, `descripcion`, `icono`, `criterio`, `valor_requerido`, `puntos_recompensa`) VALUES (4, 'Gran viajero', 'Termina todos los temas de 3 países.', '✈️', 'paises_completados', 3, 300);
INSERT IGNORE INTO `logros` (`id_logro`, `nombre`, `descripcion`, `icono`, `criterio`, `valor_requerido`, `puntos_recompensa`) VALUES (5, 'Constante', 'Juega 7 días seguidos.', '🔥', 'racha_dias', 7, 70);
INSERT IGNORE INTO `logros` (`id_logro`, `nombre`, `descripcion`, `icono`, `criterio`, `valor_requerido`, `puntos_recompensa`) VALUES (6, 'Mil puntos', 'Alcanza 1000 puntos.', '⭐', 'puntos', 1000, 100);
INSERT IGNORE INTO `logros` (`id_logro`, `nombre`, `descripcion`, `icono`, `criterio`, `valor_requerido`, `puntos_recompensa`) VALUES (7, 'Semilla de historia', 'Alcanza 100 puntos.', '🌱', 'puntos', 100, 10);
INSERT IGNORE INTO `logros` (`id_logro`, `nombre`, `descripcion`, `icono`, `criterio`, `valor_requerido`, `puntos_recompensa`) VALUES (8, 'Cazador de datos', 'Alcanza 500 puntos.', '🏹', 'puntos', 500, 30);
INSERT IGNORE INTO `logros` (`id_logro`, `nombre`, `descripcion`, `icono`, `criterio`, `valor_requerido`, `puntos_recompensa`) VALUES (9, 'Maestro del pasado', 'Alcanza 3.000 puntos.', '🏛️', 'puntos', 3000, 200);
INSERT IGNORE INTO `logros` (`id_logro`, `nombre`, `descripcion`, `icono`, `criterio`, `valor_requerido`, `puntos_recompensa`) VALUES (10, 'Leyenda de la historia', 'Alcanza 6.000 puntos.', '👑', 'puntos', 6000, 400);
INSERT IGNORE INTO `logros` (`id_logro`, `nombre`, `descripcion`, `icono`, `criterio`, `valor_requerido`, `puntos_recompensa`) VALUES (11, 'Estudioso', 'Completa 12 temas.', '📚', 'contenidos_completados', 12, 80);
INSERT IGNORE INTO `logros` (`id_logro`, `nombre`, `descripcion`, `icono`, `criterio`, `valor_requerido`, `puntos_recompensa`) VALUES (12, 'Ronda perfecta', 'Acierta todas las preguntas de un reto.', '🎯', 'manual', 0, 20);
INSERT IGNORE INTO `logros` (`id_logro`, `nombre`, `descripcion`, `icono`, `criterio`, `valor_requerido`, `puntos_recompensa`) VALUES (13, 'Imparable', 'Acierta 5 preguntas seguidas.', '⚡', 'manual', 0, 20);

CREATE OR REPLACE VIEW `vista_ranking` AS select `u`.`id_usuario` AS `id_usuario`,`u`.`nombre_usuario` AS `nombre_usuario`,`r`.`nombre` AS `rango`,`u`.`puntos_totales` AS `puntos_totales`,count(distinct `ul`.`id_logro`) AS `logros`,count(distinct `pp`.`id_pais`) AS `paises_visitados` from ((((`usuarios` `u` join `roles` `ro` on(`ro`.`id_rol` = `u`.`id_rol` and `ro`.`nombre` = 'Estudiante')) join `rangos` `r` on(`r`.`id_rango` = `u`.`id_rango`)) left join `usuario_logro` `ul` on(`ul`.`id_usuario` = `u`.`id_usuario`)) left join `progreso_pais` `pp` on(`pp`.`id_usuario` = `u`.`id_usuario`)) where `u`.`estado` = 'activo' group by `u`.`id_usuario`,`u`.`nombre_usuario`,`r`.`nombre`,`u`.`puntos_totales` order by `u`.`puntos_totales` desc;

SET FOREIGN_KEY_CHECKS = 1;
