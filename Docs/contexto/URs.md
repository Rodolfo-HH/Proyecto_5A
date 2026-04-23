# Requerimientos del Usuario (URS)


## Módulo: Registro de Usuario

URS-01
El sistema debe permitir al usuario registrarse ingresando:

Nombre
Correo electrónico
Contraseña
Teléfono
Dirección

URS-02
El sistema debe validar que el correo electrónico no esté previamente registrado.

URS-03
El sistema debe asignar automáticamente el rol de Cliente al usuario registrado.

## Módulo: Inicio de Sesión

URS-04
El sistema debe permitir al usuario iniciar sesión mediante:

Correo electrónico
Contraseña

URS-05
El sistema debe validar que las credenciales sean correctas.

URS-06
El sistema debe redirigir al usuario a la pantalla correspondiente según su rol.

## Módulo: Recuperación de Contraseña

URS-07
El sistema debe permitir al usuario recuperar su contraseña mediante su correo electrónico.

## Módulo: Catálogo de Productos

URS-08
El sistema debe mostrar un catálogo de productos disponibles.

URS-09
Los productos deben estar organizados por categoría:

Res
Cerdo

URS-10
El sistema debe mostrar información del producto:

Nombre
Precio

## Módulo: Pedidos

URS-11
El sistema debe permitir al cliente realizar pedidos de productos.

URS-12
El sistema debe registrar la relación entre usuario y producto.

URS-13
El sistema debe almacenar la fecha del pedido.

## Módulo: Administración (Administrador)

URS-14
El sistema debe permitir al administrador:

Agregar productos
Editar productos
Eliminar productos

URS-15
El sistema debe permitir al administrador crear usuarios con roles:

Cajero
Administrador

## Módulo: Gestión de Pedidos (Cajero)

URS-16
El sistema debe permitir al cajero visualizar los pedidos realizados.

URS-17
El sistema debe permitir al cajero gestionar los pedidos.

Seguridad

URS-18
El sistema debe restringir el acceso a funciones según el rol del usuario.

URS-19
El sistema debe proteger la información de los usuarios.