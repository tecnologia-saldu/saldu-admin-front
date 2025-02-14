# Saldu Admin Front

Saldu Admin Front es una aplicación web desarrollada en **Angular 18** con **Tailwind CSS**, diseñada para la gestión de actividades de Backoffice dentro de la organización **Saldu**. La plataforma permite realizar operaciones clave como:

- **Facturación**
- **Cargas masivas de productos**
- **Gestión de usuarios**
- **Gestión de productos**
- **Módulos adicionales en desarrollo** 🚀

## 🚀 Instalación y Configuración

### 1️⃣ Prerrequisitos

Antes de instalar el proyecto, asegúrate de tener las siguientes herramientas instaladas en tu computadora:

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- [Angular CLI](https://angular.io/cli) instalado globalmente:
  ```bash
  npm install -g @angular/cli
  ```
- [Git](https://git-scm.com/)

### 2️⃣ Clonar el repositorio

```bash
git clone https://github.com/tecnologia-saldu/saldu-admin-front.git
cd saldu-admin-front
```

### 3️⃣ Instalar dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:
```bash
npm install
```

### 4️⃣ Configuración del entorno

El proyecto requiere un archivo de configuración para las variables de entorno. Crea un archivo `.env` o revisa `environment.ts` dentro de `src/environments/` y ajusta las variables según sea necesario.

Ejemplo de configuración:
```ts
export const environment = {
  production: false,
  apiUrl: 'https://api.saldu.com/v1',
  authUrl: 'https://auth.saldu.com'
};
```

### 5️⃣ Ejecutar la aplicación

Para iniciar la aplicación en modo desarrollo, usa:
```bash
ng serve
```
La aplicación estará disponible en **http://localhost:4200**.

Si necesitas ejecutar la aplicación con un host diferente o un puerto específico:
```bash
ng serve --host=0.0.0.0 --port=4300
```

## 📦 Generación de Build

Para compilar el proyecto para producción, ejecuta:
```bash
ng build --configuration=production
```
Los archivos compilados estarán en la carpeta `dist/`.

## 📚 Estructura del Proyecto

```bash
saldu-admin-front/
│-- src/
│   │-- app/              # Módulos principales de la app
│   │-- assets/           # Archivos estáticos
│   │-- environments/     # Configuración de entornos
│   │-- styles.css        # Configuración de estilos con Tailwind
│-- angular.json          # Configuración del proyecto Angular
│-- package.json          # Dependencias y scripts
│-- README.md             # Este archivo 😉
```

## 🛠 Tecnologías Utilizadas

- **Angular 18** - Framework principal
- **Tailwind CSS** - Estilos y diseño responsivo
- **TypeScript** - Lenguaje principal
- **RxJS** - Manejo de eventos reactivos

## 🤝 Contribución

Si deseas contribuir al desarrollo del proyecto:
1. Haz un fork del repositorio
2. Crea una rama con tu feature: `git checkout -b feature/nueva-feature`
3. Realiza tus cambios y haz commit: `git commit -m "Agregada nueva feature"`
4. Sube los cambios: `git push origin feature/nueva-feature`
5. Abre un Pull Request 🚀

## 📄 Licencia

Este proyecto es propiedad de **Saldu**. Su uso está restringido a los miembros autorizados de la organización.

---

💡 **¡Gracias por contribuir y mejorar Saldu Admin Front!** 💡
