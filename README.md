# Cancionero · Tuna de la Universidad de Talca

App web para celular con las 94 canciones del cancionero de la Tuna UTAL (versión del 15-08-2026).

- Estilo de cada canción (pasodoble, vals, bolero, habanera… u otro), con compás y tempo.
- Letra y acordes, con cambio de tono y letra que se ajusta al ancho de la pantalla.
- Desplazamiento automático y pantalla siempre encendida mientras tocas.
- Simulación de estudiantina (guitarra, bandurria, laúd, contrabajo, pandereta) según el ritmo y el tempo.
- Posiciones y tablaturas sugeridas para bandurria y laúd.
- Funciona **sin conexión**: después de abrirla una vez con internet, se puede instalar en la pantalla de inicio.

## Instalar en el celular

1. Abre el link de GitHub Pages del repositorio.
2. iPhone/iPad (Safari): Compartir → **Agregar a pantalla de inicio**.
   Android (Chrome): menú ⋮ → **Instalar app** / **Agregar a la pantalla principal**.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa (canciones incluidas). |
| `sw.js` | Guarda la app en el teléfono para usarla sin internet. |
| `manifest.webmanifest`, `icon-*.png` | Nombre e ícono al instalarla. |
| `datos/canciones.json` | Las canciones en formato de datos, para futuras versiones. |

Las correcciones del grupo (tempo, tablaturas, grabaciones y videos) se hacen en la versión online del cancionero en Claude.
