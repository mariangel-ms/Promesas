# 🍕 Pizza Express

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modern-blue?style=for-the-badge&logo=css3)

**Pizza Express** no es solo una página de pedidos; es un simulador técnico diseñado para demostrar el control total sobre flujos asíncronos complejos en el entorno web. 

## 🎯 Objetivo del Proyecto
El propósito principal fue construir una interfaz que gestione múltiples estados de red simulados, garantizando una experiencia de usuario (UX) fluida mediante el uso de **Promesas** y **Funciones Asíncronas**.

## 🛠️ Stack Técnico & Arquitectura

### 🧠 Lógica (JavaScript)
- **Gestión de Estados**: Manejo de tres fases críticas: *Validación*, *Preparación* y *Entrega*.
- **Control de Concurrencia**: Uso de `async/await` para asegurar que la cocina siga un orden lógico (Bebida -> Plato -> Postre).
- **Simulación de API**: Implementación de retrasos controlados con `setTimeout` para replicar latencia de servidor real.

## 🚀 Flujo de la Aplicación

2. **Pedido**: El sistema consulta (simuladamente) el estatus del pedido.
3. **Cocina en Cascada**:
   - `await prepararBebida()` 🥤
   - `await prepararPizza()` 🍕
   - `await prepararPostre()` 🍰
4. **Finalización**: Se libera la interfaz y se notifica el éxito total.

**Desarrollado por Mariangel Martinez**