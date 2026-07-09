# Git y GitHub

## Diferencia entre Git y GitHub

### Git

Git es una herramienta de control de versiones. Sirve para registrar los cambios que se realizan en el código fuente de un proyecto, permitiendo volver a versiones anteriores, comparar cambios y trabajar con ramas.

### GitHub

GitHub es una plataforma en la nube donde se hospedan repositorios Git. Permite guardar proyectos remotamente, colaborar con otras personas, revisar cambios, crear pull requests y manejar issues.

En resumen:

| Concepto | Descripción                                    |
| -------- | ---------------------------------------------- |
| Git      | Herramienta local de control de versiones      |
| GitHub   | Plataforma remota para alojar repositorios Git |

---

# Comandos básicos de terminal

Estos comandos se usan para moverse por carpetas, crear archivos, eliminarlos y consultar información desde la terminal.

## Navegación

| Comando             | Descripción                          | Ejemplo       |
| ------------------- | ------------------------------------ | ------------- |
| `ls`                | Lista archivos y carpetas existentes | `ls`          |
| `cd nombre-carpeta` | Entra a una carpeta existente        | `cd proyecto` |
| `cd ..`             | Regresa a la carpeta anterior        | `cd ..`       |
| `pwd`               | Muestra la ruta actual               | `pwd`         |
| `tree`              | Muestra la estructura de carpetas    | `tree`        |

## Archivos y carpetas

| Comando                | Descripción                | Ejemplo                    |
| ---------------------- | -------------------------- | -------------------------- |
| `mkdir nombre-carpeta` | Crea una carpeta           | `mkdir mi-proyecto`        |
| `touch nombre-archivo` | Crea un archivo            | `touch index.html`         |
| `cp archivo destino`   | Copia un archivo o carpeta | `cp index.html copia.html` |
| `mv archivo destino`   | Mueve o renombra archivos  | `mv viejo.txt nuevo.txt`   |
| `rm nombre-archivo`    | Elimina un archivo         | `rm notas.txt`             |
| `rmdir nombre-carpeta` | Elimina una carpeta vacía  | `rmdir carpeta-vacia`      |

---

# Comandos básicos de Git

## Inicializar o clonar un repositorio

| Comando         | Descripción                                              |
| --------------- | -------------------------------------------------------- |
| `git init`      | Inicializa un nuevo repositorio Git en la carpeta actual |
| `git clone url` | Clona un repositorio remoto en tu computadora            |

Ejemplo:

```bash
git init
```

```bash
git clone https://github.com/usuario/repositorio.git
```

## Revisar el estado del proyecto

| Comando              | Descripción                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `git status`         | Muestra archivos nuevos, modificados o listos para commit          |
| `git diff`           | Muestra los cambios realizados antes de agregarlos al staging area |
| `git log --oneline`  | Muestra el historial de commits en una línea                       |
| `git reflog`         | Muestra un historial más completo de movimientos en Git            |
| `git show commit-id` | Muestra detalles de un commit específico                           |

Ejemplo:

```bash
git status
git diff
git log --oneline
```

## Agregar y guardar cambios

Git trabaja normalmente en tres etapas:

| Etapa             | Descripción                                |
| ----------------- | ------------------------------------------ |
| Working Directory | Donde modificas tus archivos               |
| Staging Area      | Donde preparas los cambios con `git add`   |
| Local Repository  | Donde guardas los cambios con `git commit` |

Comandos principales:

| Comando                   | Descripción                                           |
| ------------------------- | ----------------------------------------------------- |
| `git add archivo`         | Agrega un archivo específico al staging area          |
| `git add .`               | Agrega todos los archivos modificados al staging area |
| `git commit -m "mensaje"` | Guarda los cambios en el repositorio local            |

Ejemplo:

```bash
git add index.html
git commit -m "Agregar pagina principal"
```

O para agregar todos los cambios:

```bash
git add .
git commit -m "Actualizar proyecto"
```

---

# Ramas en Git

Las ramas permiten trabajar en nuevas funcionalidades, correcciones o experimentos sin afectar directamente la rama principal.

## Comandos básicos de ramas

| Comando                       | Descripción                           |
| ----------------------------- | ------------------------------------- |
| `git branch`                  | Lista las ramas existentes            |
| `git branch nombre-rama`      | Crea una nueva rama                   |
| `git checkout nombre-rama`    | Cambia a una rama existente           |
| `git checkout -b nombre-rama` | Crea una rama nueva y se mueve a ella |
| `git branch -m nuevo-nombre`  | Cambia el nombre de la rama actual    |
| `git branch -d nombre-rama`   | Elimina una rama local                |

Ejemplo:

```bash
git checkout -b nueva-funcionalidad
```

Después de modificar archivos:

```bash
git add .
git commit -m "Agregar nueva funcionalidad"
```

Para volver a otra rama:

```bash
git checkout main
```

## Unir ramas

| Comando                 | Descripción                                    |
| ----------------------- | ---------------------------------------------- |
| `git merge nombre-rama` | Une los cambios de una rama con la rama actual |

Ejemplo:

```bash
git checkout main
git merge nueva-funcionalidad
```

---

# Deshacer cambios

Estos comandos deben usarse con cuidado, especialmente los que eliminan cambios.

| Comando                   | Descripción                                                  |
| ------------------------- | ------------------------------------------------------------ |
| `git checkout -- archivo` | Descarta cambios locales de un archivo antes de hacer commit |
| `git restore archivo`     | Forma moderna de descartar cambios locales de un archivo     |
| `git reset archivo`       | Quita un archivo del staging area, pero conserva los cambios |
| `git reset --hard`        | Descarta todos los cambios locales no guardados              |
| `git checkout commit-id`  | Permite moverse temporalmente a un commit específico         |

Ejemplo para quitar un archivo del staging area:

```bash
git reset index.html
```

Ejemplo para descartar cambios de un archivo:

```bash
git restore index.html
```

Importante: `git reset --hard` puede borrar cambios que no se han guardado en un commit.

---

# Archivo `.gitignore`

El archivo `.gitignore` sirve para indicar qué archivos o carpetas Git debe ignorar.

Se usa para evitar subir archivos innecesarios o sensibles, como dependencias, archivos temporales, configuraciones locales o credenciales.

## Crear un `.gitignore`

```bash
touch .gitignore
```

Dentro del archivo puedes escribir nombres de archivos o carpetas que quieres ignorar.

Ejemplo:

```gitignore
node_modules/
.env
dist/
*.log
```

Explicación:

| Patrón          | Significado                                      |
| --------------- | ------------------------------------------------ |
| `node_modules/` | Ignora la carpeta `node_modules`                 |
| `.env`          | Ignora el archivo `.env`                         |
| `dist/`         | Ignora la carpeta `dist`                         |
| `*.log`         | Ignora todos los archivos que terminen en `.log` |

---

# Repositorios remotos con GitHub

## Crear repositorio y conectarlo a GitHub

Después de crear un repositorio en GitHub, se conecta con el repositorio local usando `git remote add`.

```bash
git remote add origin https://github.com/usuario/repositorio.git
```

Luego se suben los cambios:

```bash
git push -u origin main
```

La opción `-u` guarda la relación entre la rama local y la rama remota. Después de usarla, normalmente puedes hacer simplemente:

```bash
git push
```

## Descargar cambios del repositorio remoto

| Comando     | Descripción                                                             |
| ----------- | ----------------------------------------------------------------------- |
| `git fetch` | Descarga información del repositorio remoto sin modificar tu rama local |
| `git pull`  | Descarga cambios remotos y los integra en tu rama local                 |
| `git merge` | Une cambios de otra rama con la rama actual                             |

Ejemplo:

```bash
git fetch
git pull
```

Diferencia importante:

| Comando     | Qué hace                                     |
| ----------- | -------------------------------------------- |
| `git fetch` | Solo consulta y descarga historial remoto    |
| `git pull`  | Descarga e integra cambios en tu rama actual |

---

# Conceptos importantes de GitHub

## Pull Request

Un pull request es una solicitud para integrar los cambios de una rama en otra rama, normalmente hacia `main`.

Se usa mucho cuando trabajas en una rama separada para solucionar un issue o agregar una funcionalidad. Luego, abres un pull request para que los cambios sean revisados antes de fusionarlos.

Flujo típico:

```bash
git checkout -b solucionar-error
# modificar archivos
git add .
git commit -m "Solucionar error"
git push -u origin solucionar-error
```

Después de subir la rama, se crea el pull request desde GitHub.

## Clone

Clonar significa copiar un repositorio remoto a tu computadora, incluyendo su historial de commits.

```bash
git clone https://github.com/usuario/repositorio.git
```

## Fork

Un fork es una copia de un repositorio en tu propia cuenta de GitHub. Se usa normalmente cuando quieres proponer cambios en un proyecto donde no tienes permisos directos de escritura.

Flujo básico con fork:

1. Haces fork del repositorio en GitHub.
2. Clonas tu fork en tu computadora.
3. Creas una rama nueva.
4. Haces cambios y commits.
5. Subes tu rama a GitHub.
6. Abres un pull request hacia el repositorio original.

---

# Flujo de trabajo completo de Git y GitHub

Este es un flujo común desde que inicias un proyecto hasta que subes cambios a GitHub.

## Proyecto nuevo local

```bash
mkdir mi-proyecto
cd mi-proyecto
git init
touch README.md
git add .
git commit -m "Primer commit"
git branch -M main
git remote add origin https://github.com/usuario/mi-proyecto.git
git push -u origin main
```

## Proyecto que ya existe en GitHub

```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

## Trabajo diario

```bash
git pull
git checkout -b nueva-rama
# modificar archivos
git status
git add .
git commit -m "Descripcion clara del cambio"
git push -u origin nueva-rama
```

Después, normalmente se abre un pull request en GitHub.

---
