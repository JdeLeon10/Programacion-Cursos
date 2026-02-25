-- Eliminar bd de ser necesario
DROP DATABASE IF EXISTS supermercado_db;

-- Eliminar sp de ser necesario
DROP PROCEDURE IF EXISTS sp_inventario_existencias;

CREATE DATABASE supermercado_db;

USE supermercado_db;

CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    codigo_producto VARCHAR(50) NOT NULL UNIQUE,
    nombre_producto VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    sub_categoria VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL
);

CREATE TABLE inventario (
    id_inventario INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    fecha_ingreso DATE NOT NULL,
    cantidad INT NOT NULL,
    costo DECIMAL(10,2) NOT NULL,
    fecha_vencimiento DATE,

  id_producto INT,
    CONSTRAINT fk_producto FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
    ON DELETE CASCADE
  ON UPDATE CASCADE
);

-- Data inicial productos e inventario
INSERT INTO productos (codigo_producto, nombre_producto, categoria, sub_categoria, marca) VALUES
('PRD-0001', 'Leche Entera 1L', 'Lácteos', 'Leche', 'Dos Pinos'),
('PRD-0002', 'Yogurt Fresa 200ml', 'Lácteos', 'Yogurt', 'Nestlé'),
('PRD-0003', 'Arroz Blanco 1kg', 'Abarrotes', 'Granos', 'Gallo'),
('PRD-0004', 'Frijol Negro 1kg', 'Abarrotes', 'Granos', 'Diana'),
('PRD-0005', 'Aceite Vegetal 900ml',  'Abarrotes', 'Aceites', 'Ideal');

INSERT INTO inventario (fecha_ingreso, cantidad, costo, fecha_vencimiento, id_producto) VALUES
('2026-01-10', 120,  6.50, '2026-07-10', (SELECT id_producto FROM productos WHERE codigo_producto='PRD-0001')),
('2026-01-15', 200,  3.25, '2026-06-15', (SELECT id_producto FROM productos WHERE codigo_producto='PRD-0002')),
('2026-01-08',  90,  9.75,  '2027-05-20', (SELECT id_producto FROM productos WHERE codigo_producto='PRD-0003')),
('2026-01-20',  70, 12.50,  '2027-02-21', (SELECT id_producto FROM productos WHERE codigo_producto='PRD-0004')),
('2026-01-25',  50, 18.90, '2027-01-25', (SELECT id_producto FROM productos WHERE codigo_producto='PRD-0005'));

select * from productos;
select * from inventario;

-- Existencia de productos
DELIMITER $$

CREATE PROCEDURE sp_inventario_existencias()
BEGIN
  SELECT
    p.codigo_producto,
    p.nombre_producto,
    SUM(i.cantidad) AS existencia_total
  FROM productos p
  INNER JOIN inventario i
    ON i.id_producto = p.id_producto
  GROUP BY p.id_producto, p.codigo_producto, p.nombre_producto
  HAVING SUM(i.cantidad) > 0
  ORDER BY p.codigo_producto;
END $$

DELIMITER ;

-- Llamar al SP
CALL sp_inventario_existencias();
