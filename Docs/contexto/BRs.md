# Reglas de negocio de la aplicación web de la carnicería (CARNNY)


1. Acceso al sistema:
Solo los usuarios registrados con rol de administrador o cajera(o) podrán acceder a la aplicación
web mediante un nombre de usuario y contraseña válidos.

2. Roles y permisos:
El administrador tendrá acceso completo a todos los módulos del sistema, mientras que la
cajera(o) solo podrá acceder a las funciones relacionadas con ventas y clientes.

3. Gestión de productos:
Todo producto deberá estar asociado a una categoría y contar con un precio y una cantidad en
inventario para poder ser registrado en el sistema.

4. Control de inventario:
El inventario de productos deberá actualizarse automáticamente al registrar una venta,
descontando las existencias correspondientes.

5. Registro de ventas:
No se permitirá finalizar una venta si no se ha agregado al menos un producto a la misma.

6. Existencias insuficientes:
El sistema no permitirá realizar ventas de productos que no cuenten con existencias suficientes
en el inventario.

7. Promociones y descuentos:
Las promociones y descuentos solo podrán aplicarse si se encuentran vigentes y autorizados
por el administrador.

8. Clientes:
Todo cliente deberá estar registrado en el sistema para poder asociarlo a una venta, aunque el
registro podrá realizarse durante el proceso de venta.

9. Integridad de la información:
No se permitirá eliminar productos, clientes o usuarios que estén asociados a ventas
registradas, con el fin de mantener la integridad de la información.

10. Historial de ventas:
Todas las ventas deberán quedar registradas con fecha, hora y usuario responsable, y no
podrán ser modificadas una vez finalizadas.

11. Recetas:
Las recetas deberán estar relacionadas con al menos un producto del catálogo para su registro
en el sistema.

12. Promociones y novedades visibles:
Solo las promociones y novedades activas podrán ser visibles para los clientes en la aplicación
móvil complementaria.

13. Eliminación de registros:
La eliminación de registros deberá realizarse solo por usuarios autorizados y requerirá
confirmación previa.

14. Respaldo de información:
El administrador será responsable de realizar respaldos periódicos de la información del
sistema