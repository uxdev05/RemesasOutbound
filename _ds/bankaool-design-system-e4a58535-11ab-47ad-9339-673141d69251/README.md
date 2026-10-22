# Bankaool Design System · DS 3.0

Sistema de diseño vivo para **Bankaool**, un banco 100% digital enfocado en experiencias financieras simples, transparentes y humanas para personas usuarias en México.

> **Estética en una frase:** banca cálida y editorial — superficies crema, acento terracota y tipografía con personalidad sobre una estructura Material Design 3 disciplinada. Confianza sin frialdad corporativa.

Este sistema (**DS 3.0**) está construido sobre **Material Design 3 (MD3)** con una capa de marca Bankaool encima. Su consumidor principal es la **app móvil de Bankaool**, implementada en **Flutter**. Las variables de Figma se exportan como `tokens.json` y un script genera las clases estáticas Dart (`BankaoolColors`, `BankaoolTypography`, `BankaoolSpacing`, `BankaoolRadius`, `BankaoolIconSize`) que consumen los widgets.

La voz es **cercana, directa, sin jerga bancaria tradicional**. El tono es cálido, plano y transparente, con tuteo (segunda persona **tú**).

---

## Fuentes / Sources

Este documento se reconstruyó a partir de la biblioteca de Figma **"Bankaool app DS 3.0"** y la carpeta de contexto del equipo. Referencias:

- **Figma** — [Bankaool app DS 3.0](https://www.figma.com/design/73IRIII3GiKECjvw8ukaxP/Bankaool-app-DS--3.0-) · colecciones de variables: `✹ Primitive colors` (48) · `✻ Semantic colors` (54) · `✻ Size` (43) · `✹|✻ Typography` (49) · `✻ Icon size` · `✐ UX Writing` (92).
- **`DESIGN.md`** — principios, tokens y patrones (núcleo normativo).
- **`COMPONENTS.md`** — catálogo de 68 component sets.
- **`content_style_guide.md`** — guía de voz, tono y microcopy (ES · EN · ZH).
- **`research-banka00l-consolidado.md`** — contexto de negocio, personas, JTBD y DesignOps.

> **Fuente de verdad:** ante cualquier conflicto, mandan las fuentes DS 3.0 anteriores. Los valores de tokens de este documento y de `colors_and_type.css` se alinean 1:1 con las variables de Figma.

---

## Índice de archivos

| Archivo | Propósito |
| --- | --- |
| `README.md` | Este archivo — contexto, fundamentos, voz, patrones, componentes, research. |
| `SKILL.md` | Manifiesto de skill para el agente. "Usa la skill bankaool-design". |
| `colors_and_type.css` | Todas las variables CSS — primitivos, roles semánticos, tipografía, spacing, radii, iconos, elevación. |
| `assets/logos/` | Wordmark, isotipo "B", lockup Bankaool ID (negro + blanco). |
| `assets/illustrations/` | Mascota Ajool *(pendiente de verificar, ver abajo)* y hero "puffy card". |
| `preview/` | Tarjetas HTML que pueblan la pestaña de Design System. |
| `ui_kits/app/` | UI kit de la app móvil — componentes JSX + demo navegable de 5 pantallas. |

---

## Fundamentos de contenido / Voice & tone

**Idioma.** Español (México) base; EN y ZH derivan del ES. Tuteo siempre (**tú / tu**), nunca "usted". Tono **cercano, directo, transparente**. Sin jerga bancaria: no *"retiro inmediato programado bajo política RCE-19"* — sí *"tu dinero, cuando lo necesites"*.

### Los 4 pilares de comunicación

Cada pieza de texto refleja **al menos uno**:

- **Humana** — empática y accesible. Habla como persona, no como sistema. *"Tranqui, tu dinero sigue ahí. Vuelve a intentar el pago."*
- **Revolucionaria** — atrevida, pionera. Rompe con la banca tradicional. *"Tu primer depósito, sin vueltas."*
- **Transparente** — di lo que es, sin letra chica disfrazada. *"Esta transferencia tiene una comisión de $X."*
- **Glocal** — natural y cercana al contexto del usuario. *"Listo, ya quedó."*

### Reglas de estilo (no negociables)

- **Tuteo** siempre — "tu cuenta", "puedes" (nunca "su cuenta", "usted puede").
- **Voz activa** y **tiempos simples** (presente / imperativo). Sin gerundios como copy final ("Procesamos tu pago", no "Estamos procesando…"). Sin pasiva ("Creamos tu cuenta", no "Tu cuenta fue creada").
- **CTAs: verbo en infinitivo + objeto, máx 4 palabras** — "Confirmar pago", "Ver movimientos". Nunca "Aceptar", "OK", "Continuar con el proceso".
- **Sentence case** en todo: botones, títulos, alertas. *"Cerrar sesión"*, no *"Cerrar Sesión"*. UPPERCASE solo para micro-labels de foundations (`BASE`, `SEMANTIC`) y el chip de portada ("APP").
- **Errores con salida:** `[Qué falló]. [Por qué]. [Qué hacer].` Nunca "Ha ocurrido un error inesperado". Validación inline: `[Campo] [requisito]` → *"El CLABE debe tener 18 dígitos"*.
- **Éxito** en pasado simple, específico y breve: *"Pago enviado"*, *"Cambios guardados"* — no *"¡Operación completada exitosamente!"*.

### Puntuación y formato

Puntuación española: apertura *¿* y *¡*. Ellipsis con glifo único *…*. Em dash *—* para incisos. Moneda `$0,000.00` (coma + punto mexicano, sin sufijo "MXN" en copy inline). Teléfono `+52 55 1223 4332`. Fechas `13 ene 2025` (mes en minúscula). Hora `22:15h`.

### Lo que NO hacemos

- Sin teatro de disculpas ("Lo sentimos por las molestias…"). Disculpa una vez, da la solución.
- Máximo un ¡! por pantalla, reservado a wins claros ("¡Operación exitosa!").
- **Sin emoji.** La expresión de marca viene de ilustraciones y color, no de 🎉.
- Sin tier-speak ("Premium / Plus / Pro"). Sin anglicismos cuando existe el español ("correo" no "e-mail", "toca/presiona" no "click", "cargando" no "loading").

### Longitud (benchmarks)

CTA 2–3 palabras (máx 4) · título de pantalla 3–5 palabras (máx 40 car.) · error de validación 8–12 palabras · mensaje de sistema 12–18 palabras · notificación (título) 4–6 palabras. Oraciones de **8 palabras o menos** alcanzan ~100% de comprensión.

> **Multilingüe:** ES es la base; EN mantiene el tono directo; ZH suele requerir dos versiones (UI corta + explicativa). La comunidad china es un segmento sensible — cuida los encuadres. Extranjeros en MX: no asumas conocimiento de CLABE / SPEI / RFC, explica el dato. Traducciones generadas por IA quedan como **propuesta por validar**.

> **Caja de sensibilidad financiera:** cualquier copy que toque montos, comisiones, errores en flujos de dinero, términos regulatorios o datos sensibles requiere **revisión humana y validación de Legal/Producto** antes de producción.

---

## Fundamentos visuales / Visual foundations

### Arquitectura de color

Dos capas: **primitivos** (hex crudo, privados del sistema) → **semánticos** (roles con alias a primitivos, en modos Light / Dark). En producto se consumen **solo los semánticos**.

**Primitivos** — familias con stops `100 · 300 · 500 · 700 · 900 · 1000` (Gray añade `200` y `800`):

- **Gray** `#FBFAF6 · #EFEDE8 · #E2DFD9 · #BDB8B2 · #6F6B66 · #43403C · #2B2A28`
- **Blue** `#EBF0FA · #C6D5F1 · #88A7E1 · #4C7AD2 · #28519F · #14284D`
- **Pink** `#FBE0E8 · #F094B0 · #E3396D · #BC1B4C · #8F143A · #670E2A`
- **Orange** `#FCECE3 · #F7C7AC · #EE8E56 · #D55C15 · #9E4410 · #6B2E0B`
- **Green** `#E5F0ED · #BCD7D0 · #60A08F · #416D61 · #223933 · #0F1A17`
- **Yellow** `#F2E9D8 · #F8D89B · #F2B543 · #C4840E · #644407 · #342304`
- **Neutros / marca** White `#FFFFFF` · Black `#000000` · WhatsApp `#25D366`.

### Reglas de color

- **Primary** es el near-black `#2B2A28` (Gray/1000), **no azul**. Botones filled, barras de navegación, texto principal. El **azul es acento secundario** `#88A7E1` (Bankaool ID, info, acciones secundarias).
- **Accent** es el **terracota** `#EE8E56` (Orange/500) — destacados, categorías, avatares. *(Nota de migración: el peach `#FDAD72` ya no es el acento; hoy es únicamente el stop naranja del gradiente hero.)*
- **Status** en pares pastel + solid: **info** azul · **success** verde · **warning** amarillo/ámbar · **error** rosa (notablemente *rosa*, no rojo — más suave). El texto sobre error pastel es **negro**.
- **Disabled** siempre neutral (`#EFEDE8` fondo, `#BDB8B2` contenido) — nunca color.

### Superficies

- **Fondo principal** (`base/100`) es blanco `#FFFFFF` en light. **`base/200`** es el crema `#FBFAF6` (contenedores secundarios). **`base/300`** es `#E2DFD9` (superficies terciarias). En dark: `#2B2A28 → #43403C → #6F6B66`.
- El sistema es **plano con borde**: la elevación se comunica por contraste de superficie (`base 100→200→300`) y hairlines de **1px** en `#E2DFD9`, no por sombra.

### Gradientes

- **Gradiente de marca** vertical: `#96CBFF → #FDAD72` (blue → peach). Siempre vertical, nunca horizontal.
- Casi nunca se muestra crudo — va **velado** por un wash blanco `rgba(251,250,246, 0.5→1)` (light) o near-black `rgba(43,42,40, 0.86→1)` (dark). Da el efecto "brillo de color detrás del crema" (Cover, headers de perfil).

### Tipografía

- **Body** — **Figtree** siempre (Google Font, pública). Regular / Medium / Semibold / Bold / Extrabold. Body strong usa **Neulis Sans** (privada).
- **Headings (H1–H6)** — **Neulis Neue** (clásica, privada). Títulos en app, labels tabulares, microlabels.
- **Display / expresiva** — **Neulis Cursive** (privada). Momentos editoriales: portadas, marketing, títulos de app-bar cálidos.
- **Mono** — **Cousine** (dev docs y bloques de código solamente).

> **Sustitución:** las tres faces Neulis (Sans, Neue, Cursive) no están en Google Fonts. Hasta que se suban a `/fonts`, **Fraunces** funge como stand-in de toda la familia Neulis (contornos cálidos y humanistas). En Flutter deben empaquetarse en `pubspec.yaml` (`fonts:`); solo Figtree resuelve desde Google Fonts. Marca las sustituciones al equipo.

**Escala tipográfica** (size / line-height): H1 32/38 · H2 24/30 · H3 20/26 · H4 16/22 · H5 14/20 · H6 12/16 · Body large 20/26 · Body medium 18/22 · Body base 16/22 · Body small 14/20 · Caption 12/16.

### Forma & radii

`xs 4 · s 8 · m 12 · l 16 · xl 20 · 2xl 32 · full 9999`. Inputs/tags `xs`; botones/chips `s`; cards/contenedores `m`; contenedores grandes, sheets y list tiles `l`; **TextField y AppBar containers `xl` (20)**; hero y superficies destacadas `2xl` (32); pills, avatares, FAB e IconButton `full`. Las esquinas cuadradas casi no se usan.

### Spacing

Escala `✻ Size` donde el número ≈ valor × 10 (`space/400 = 16`). Valores de uso real: **content padding lateral = 16** · gap entre campos = 16 · gap entre bloques mayores = 24 · gap interno de TextField = 4.

### Iconos, elevación & motion

- **Icon sizes:** small 16 · medium 20 · **main 24** (default: AppBar, list, acciones) · extra-large 32 (ilustraciones, empty states).
- **Stroke:** borde estándar 1px · focus-ring 2px.
- **Elevación:** DS 3.0 **no define escala de sombras** en variables — la elevación va por color de superficie y borde. Reserva sombra real solo para FAB, la píldora de nav flotante y bottom-sheets sobre scrim. *(Escala de sombras: backlog.)*
- **Motion:** aún **sin tokens** en el DS (pendiente `MOTION.md`). Los defaults MD3 en el CSS (`120/200/400ms`, ease `cubic-bezier(0.2,0,0,1)`) son ayuda de prototipado, no norma. Sin rebotes ni spring — la marca es calma y estable.

---

## Iconografía / Iconography

**Sistema.** Librería de ~830 iconos con naming `icon_[nombre-kebab]` (p. ej. `icon_arrow-left-01`, `icon_money-send-02`, `icon_customer-support`), basada en **Hugeicons**: trazo 2px, remates redondeados, artboard ~24px. Dos variantes por icono: `Style=Stroke` (default) y `Style=Solid` (nav seleccionado, indicadores, FAB de WhatsApp).

**Uso.** Hasta que el equipo suba el set SVG exportado de Figma, se enlaza Hugeicons desde CDN para que los renders coincidan 1:1. Para prototipado rápido, **Lucide** (mismo trazo 2px) es sustituto aceptable en mocks — marca la sustitución. Los iconos heredan `currentColor`; nunca tienen color de marca propio. Container común: `IconContainer` — cuadrado redondeado (40×40) con fondo semántico y icono blanco de 24px; es la afordancia leading dominante en list-rows y cards. **Sin emoji.** Unicode solo para puntuación tipográfica (`—`, `…`, `·`).

**Logos.** Tres marcas en `/assets/logos`: el isotipo "B" (`logotype-black/white.svg`), el lockup **Bankaool ID** (`bankaool-id-black/white.svg`) y el wordmark "bankaool" (compuesto en Neulis). Existe también un escudo **OMNiSecurity** azul (marca del socio, no de Bankaool) usado solo inline en splash ("powered by OMNi").

---

## Imágenes / Imagery

- **Hero "puffy card"** — objeto acolchado quilted en gradiente azul/peach sosteniendo una tarjeta negra. Táctil, suave, amable.
- Imágenes siempre **cálidas y claras**, sobre blanco; nunca desaturadas ni duotono. Sin fotos de stock de personas, sin blobs de gradiente abstractos, sin ilustraciones isométricas de línea. Sin patrones/ruido/grain.
- **Avatares de personaje:** el componente Avatar expone 6 personajes Bankaool fotográficos (Girl 1–3, Boy 1–3) como instance swap, además de la variante de iniciales.

> **⚠ Ajool — pendiente de verificar.** El README anterior describía una mascota central: un ajolote de peluche turquesa con banda Bankaool ("Ajool"). **No aparece en ninguna fuente DS 3.0** (Figma, `DESIGN.md`, `COMPONENTS.md`). Se conserva `assets/illustrations/ajool-3d.png` y su tarjeta de preview marcada como no verificada, pero **debe confirmarse con el equipo de marca antes de usarla en producción**. Lo que el sistema sí documenta como personajes son los avatares Girl/Boy 1–3.

---

## Principios de diseño / Design principles

Siete principios derivados de una auditoría de congruencia sobre 33 flujos reales. Sostienen los patrones de la siguiente sección.

1. **Shell primero** — todo flujo operativo arranca con `Status bar + AppBar + content padding 16` antes de variar contenido. Evita pantallas de servicing sin AppBar (salvo documento/webview).
2. **State parity** — los estados equivalentes cambian *semántica*, no *arquitectura*. Modela `Default / Filled / Loading / Error / Blocked / Success` como variantes sobre el mismo widget tree; nunca un layout alterno.
3. **Modal solo interrumpe** — `AlertDialog` se reserva para interrupciones, permisos, bloqueos o decisiones críticas. Empty states recuperables van in-page.
4. **Modal expansivo para captura segura** — OTP y security code usan un `AlertDialog` casi full-height (`358×730 @ y=98`) con teclado numérico incrustado y backdrop `0.75`. Nunca un screen con AppBar estándar.
5. **CTA anclado a validez** — el primary CTA aparece cuando la acción es válida, en una zona inferior estable (botón full-width al bottom, o FAB `56×56` en captura numérica). No lo muestres activo en estados incompletos.
6. **Cards para data financiera** — la info bancaria se organiza en `ListCard` / `ListTile` (label / value / action), no en texto libre.
7. **Naming como contrato** — el nombre de pantalla es metadata normativa: `[Module] / [Flow] / [Screen] – [State]`.

---

## Patrones canónicos / Patterns

Ocho patrones extraídos de los flujos gold-standard; las medidas vienen de inspección directa de nodos.

1. **Form scaffold (captura)** — Shell `Status bar + AppBar` → content `padding 16 / gap 16` → campos `TextField 358×72` (gap interno 4) → CTA full-width al bottom. AppBar Medium con título `390×110`. *(Password entry, Confirm transfer.)*
2. **Amount entry (captura numérica)** — Recipient summary `358×104` → bloque Amount `358×208` (gap 24) → `FloatingActionButton 56×56` (aparece con monto válido) → `NumericKeyboard 390×256` (grid, gap 16, tecla 111×47). El teclado es **parte de la pantalla**, no del SO.
3. **Confirmation (revisión pre-envío)** — Header "Vas a transferir a" → card de selección de cuenta `358×226` → TextField concepto + referencia → CTA. Jerarquía: destinatario → monto → concepto → acción.
4. **Receipt (resultado)** — footer fijo: Content (pad 16, gap 24) con amount hero + `ListCard.Slot 358×280` + footer `176` (Buttons 142 + Home Indicator 34). `Pending / Failed` reutilizan el shell; solo cambia semántica de color y copy.
5. **Secure capture (OTP / security code)** — `AlertDialog 358×730 @ y=98` con keyboard incrustado; `Processing` añade backdrop `0.75`. (Ver principio 4.)
6. **List-based servicing** — AppBar + título + selección vía `ListCard` + `Menu` dropdown + botón de descarga fijo al bottom en vistas de documento.
7. **Discovery / marketplace** — hero visual + título de categoría + `ListCard` de producto repetibles. Empty state in-page; redirect externo usa `AlertDialog`.
8. **Empty states** — recuperable → in-page con callout / action chips; bloqueante o interrupción → `AlertDialog`.

---

## Referencia de componentes / Components

Inventario: **68 component sets** (excluye la librería de ~830 iconos). Cada componente mapea a un widget Flutter. Los valores entre `[corchetes]` son las propiedades reales de Figma. Detalle completo en `COMPONENTS.md`.

**1 · Actions** — `Button` [Filled / Outlined / Text] × [Default / Medium / Small] × 6 estados (un solo Filled por pantalla, full-width al bottom en flujos transaccionales); `IconButton` [Standard / Outlined / Filled], radio full, soporta `Selected`; `FloatingActionButton` [Small / Regular / Large / Extended].

**2 · Inputs & forms** — `TextField` `358×72`, radio xl (20), slot dual trailing; `TextArea` (multilínea); `TextField number` (montos, alimentado por NumericKeyboard); `Textfield.OTP` / `OTP digit` [Number / Placeholder / Hidden]; `Textfield.Security code`; `SearchBar`; `Dropdown` (despliega Menu); `VoiceBar` [Idle / Listening / Transcribed] (dictado en tiempo real); `NumericKeyboard.Key`.

**3 · Selection** — `Checkbox` (+ `Indeterminate`), `CheckboxContainer`, `RadioButton`, `Switch` (trailing de ListTile), `SegmentedButton` [2 / 3 segmentos].

**4 · Chips** — `ActionChip`, `AssistChip`, `FilterChip`, `InputChip`, `StatusChip` [error / success / info / warning] (mapea a `*/bg/pastel` + `*/content/pastel`).

**5 · Communication** — `Banner` [Blue / Accent / Pink / Yellow]; `MaterialBanner` (integra status bar, estado semántico completo); `Callout` [Compact / Extended] × [Warning / Informative / Success / Error / Neutral]; `SnackBar` [Success / Error]; `Tooltip` (posición + alineación); familia `AlertDialog` (Notices, Blocks & Errors, Warnings, Permissions, OTP, Security code, Template).

**6 · Containers & lists** — `ListCard` [Elevated / Filled / Outlined] × [Rows 1–7], radio m; `ListTile` (leading [None / Icon / IconContainer / Avatar] + content + trailing [None / Text / Badge / Icon / Switch]); `BottomSheet` [Persistent / Modal]; `Avatar` [Image / Initial] × 4 tamaños × [Square / Circle]; `IconContainer` × 7 tonos semánticos; `Badge` [Large / Small].

**7 · Navigation** — `AppBar` [Small centered `390×76` / Medium `390×110` / Large / Search] × [Flat / On scroll]; `Menu` [1–3 grupos]; barra de navegación inferior + items.

**8 · Progress & loaders** — Linear/Circular determinate + indeterminate; `CustomLoader` (marca); familia `Skeleton` (Line / Circle / Thumbnail).

**9 · Specialized (banking)** — `Stepper.bk` (multi-paso: account opening, onboarding); `FlutterStepper` [Vertical / Horizontal]; `Splash`; `FullScreen` (onboarding inmersivo); familia `Logo` (BankaoolID, Isotype, OMNiSecurity, Logotype).

**10 · Foundational** — building blocks internos (`.Content`, `.Leading element`, `.Trailing element`, `.Component banner`) que componen otros; no se consumen directo en producto.

**Estados estándar del sistema:** `Default · Filled · Loading · Error · Empty · Blocked · Success · Failed · No connection · Disabled`. No todos los componentes los implementan, pero un estado equivalente en dos flujos se construye igual.

---

## Contexto de negocio / Product context

**Visión:** "Ser el ecosistema financiero simple, transparente y digital". Los tres adjetivos son criterios de aceptación de experiencia: cada flujo debe defenderse contra *¿es simple?, ¿es transparente?, ¿es nativo digital?*. **Valores:** finanzas centradas en personas · educación financiera · inclusión · revolución digital.

**Plataformas del ecosistema:**

- **App Bankaool Móvil** — cuentas, detalle financiero, transacciones. Canal principal B2C, mobile-first. *(Es el consumidor de este DS.)*
- **Banca en Línea (BEL)** — gestión financiera web/escritorio. Canal B2B operativo (masivas, nómina).
- **Host to Host (H2H)** — conexión ERP↔banco para tesorería (SPEI hasta 300,000 operaciones).
- **Hub Operativo** — back-office interno del banco.
- **Bankaool ID** — identidad digital; reconocimiento facial para autorizar movimientos. Capa de seguridad transversal.
- **Website** — vitrina de features (Cofres, Inversión, Pagos de Servicios, Tarjeta Virtual/Física).

### Personas y arquetipos

- **B2C — "La millennial digital que aspira a más":** PF, 25–34, mobile-first, financieramente activa con educación financiera práctica. Mayoría mujeres (~60%), CDMX y Chihuahua. Quiere control y simplicidad, busca dar el salto a ahorro/inversión, y exige seguridad que no estorbe.
- **B2B — "El operador/dueño que mezcla mundos":** PF con actividad empresarial o PyME micro. Opera flujo de caja diario, paga proveedores y nómina, y arrastra el dolor de no separar lo personal de lo del negocio. Canal: BEL + app.
- **Segmento sensible — comunidad china en México:** adopción digital máxima con abandono inmediato si falla la robustez mobile-first; baja lealtad bancaria; la confianza y reputación pesan. Cuidado con el lenguaje y los encuadres.

### Jobs-to-be-Done (extracto)

- **B2C:** transferir sin fricción; guardar y reutilizar contactos; pagar servicios y compras; ahorrar con propósito (Cofres); empezar a invertir; autorizar seguro con Bankaool ID; entender términos financieros.
- **B2B:** dispersar pagos y nómina en lote; administrar beneficiarios con seguridad; validar el archivo antes de enviar; controlar quién autoriza qué; operar desde el ERP (H2H); ver estado y reconciliar; abrir cuenta empresarial rápido.

### Oportunidades de diseño priorizadas

1. **Frontera personal/empresarial como producto** — separar lo personal de lo del negocio; dolor transversal que ningún competidor resuelve bien.
2. **Transparencia operativa en dispersión** — resumen de validaciones, campo concepto, estados claros, historial segmentado.
3. **Onboarding y alta veloces** — terreno ya medido contra 14 competidores.
4. **Seguridad fluida con Bankaool ID** — protección que no frene la operación.
5. **Educación financiera contextual** — puente hacia ahorro/inversión.

> **DesignOps:** el área opera un modelo de 4 fases (Demanda · Descubrimiento · Desarrollo · Despliegue) con tres funciones (UX Research, UX Design, UX Writing). El handoff ya incluye **design tokens exportables** y **checklist de estados** (éxito, error, vacío, loading, edge cases). El acelerador no es crear proceso, sino instrumentar la trazabilidad investigación → decisión → métrica.

---

## Deuda conocida / Accessibility

**Backlog normativo** (no bloquea MVP): typo `AccoutStatement`; espacio inicial en `" Clarification details"`; guiones `-` en vez de en-dash `–`; `snake_Case` fuera de convención en Account Statements; empty state recuperable dentro de modal en `Recipient selection`; duplicado `Product list – Loading`.

**Accesibilidad:** soporte Light / Dark nativo vía la colección de semánticos; focus-ring de 2px. **Pendiente:** auditoría de contraste WCAG token por token (`base/content` sobre `base/100`, pares `*/content` sobre sus `*/bg`). Iconografía siempre con `semanticsLabel` en Flutter.

---

## Productos Bankaool

| Superficie | Estado aquí |
| --- | --- |
| **App móvil (Flutter, iOS + Android)** | Recreada como UI kit de 5 pantallas en `ui_kits/app/` |
| Banca en Línea (BEL) — web B2B | No en el Figma del app DS — sin recreación |
| Website (bankaool.com) | No provisto — sin recreación |

Ver `preview/` para las tarjetas de la pestaña de Design System, y `ui_kits/app/index.html` para el demo navegable de la app.
