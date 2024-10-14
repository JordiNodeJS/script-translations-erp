const es = `
billingPage::*** billingPage ***
amount_payed::Cantidad pagada
last_payment_date::Fecha del último pago
order_completed::PEDIDOS COBRADOS AL 100%
order_date::Fecha del Albarán
orders_with_payments_not_do_it::PEDIDOS CON PAGOS PENDIENTES
pending_collection::Pendiente de cobro
selected_optic::Óptica seleccionada
subtitle_order_completed::Pedidos que han sido pagados al 100% y no están en una transacción.
subtitle_orders_with_payments_not_do_it::Listado de pedidos pendientes de pago
total_price::Precio total
title_block_by_country::Bloqueo de horas por país
select_country::Selecciona el país
end_date_must_be_after_start_date::La fecha final tiene que ser mayor que la fecha inicial.
myCustomersSearch::Buscar mis clientes
customersSearch::Buscar Clientes
myOptics::Mis Ópticas
search_customer::Buscar Cliente
1CU-C17::Clip Martin Green Forest
1CU-C1P12::Clip Martin Kenya
1CU-C1P13::Clip Martin Highlands
1CU-C18::Clip Martin Chocolate
1CU-C1P21::Clip Martin Black Flowers
1CU-C19::Clip Martin Red Passion
1CU-C1P20::Clip Martin Valparaíso
1TU-C18::Varillas Chocolate
1TU-P21::Varillas Black Flowers
1TU-C19::Varillas Red Passion
1TU-P20::Varillas Valparaíso
1TU-C17::Varillas Green Forest
1TU-P12::Varillas Kenya
1TU-P13::Varillas Highlands
2CU-C18::Clip Memphis Chocolate
2CU-C1P21::Clip Memphis Black Flowers
2CU-C19::Clip Memphis Red Passion
2CU-C1P20::Clip Memphis Valparaíso
2CU-C17::Clip Memphis Green Forest
2CU-C1P12::Clip Memphis Kenya
2CU-C1P13::Clip Memphis Highlands
1CU-C1 + 1CU-DA::Clip Base Negra Martin Solar Azul Degradado Polarizado
1CU-C1 + 1CU-DC::Clip Martin Solar Azul Claro Polarizado
1CU-C1 + 1CU-DF::Clip Martin Vino Degradado Polarizado
1CU-C1 + 1CU-DL::Clip Base Negra Martin Solar Lila Claro Polarizado
1CU-C1 + 1CU-DM::Clip Martin Solar Marrón Degradado Polarizado
1CU-C1 + 1CU-EC::Clip Martin Solar Cobre Reflective Polarizado
1CU-C1 + 1CU-EL::Clip Martin Solar Morado Reflective Polarizado
1CU-C1 + 1CU-EP::Clip Martin Solar Mirror Reflective Polarizado
1CU-C1 + 1CU-ER::Clip Martin Solar Fucsia Reflective Polarizado
1CU-C1 + 1CU-EV::Clip Martin Verde Reflective Polarizado
1CU-C10::Clip Martin Marpat
1CU-C11::Clip Martin Mustard
1CU-C12::Clip Martin Iced Coffee
1CU-C13::Clip Martin Verde Olive
1CU-C14::Clip Martin Valentina
1CU-C15::Clip Martin Red Sunset
1CU-C16::Clip Martin White Polar
1CU-C1B::Clip Martin Espejo Solar Azul
1CU-C1BL::Clip Martin Solar Negro
1CU-C1CN::Clip Martin Conducción Nocturna
1CU-C1O::Clip Martin Espejo Solar Naranja
1CU-C1P1::Clip Martin Caoba
1CU-C1P10::Clip Martin Brunch Vibes
1CU-C1P11::Clip Martin Sailor
1CU-C1P2::Clip Martin Zebra
1CU-C1P3::Clip Martin Hawai
1CU-C1P4::Clip Martin Lunares
1CU-C1P5::Clip Martin Azul Mármol
1CU-C1P6::Clip Martin Puzzle
1CU-C1P7::Clip Martin Garlan
1CU-C1P8::Clip Martin Valery
1CU-C1P9::Clip Martin Velvet
1CU-C1PP::Clip Martin Protección de Pantalla
1CU-C2::Clip Martin Carey
1CU-C3::Clip Martin Azul Navy
1CU-C4::Clip Martin Rojo Rioja
1CU-C5::Clip Martin Amarillo Limón
1CU-C6::Clip Martin Rosa Pálido
1CU-C7::Clip Martin Verde Pistacho
1CU-C8::Clip Martin Lila Very Peri
1CU-C9::Clip Martin Carey Mar
1TU-C10::Varillas Marpat
1TU-C11::Varillas Mustard
1TU-C12::Varillas Iced Coffee
1TU-C13::Varillas Verde Olive
1TU-C14::Varillas Valentina
1TU-C15::Varillas Red Sunset
1TU-C16::Varillas White Polar
1TU-C1P4::Varillas Red Points
1TU-C2::Varillas Carey
1TU-C3::Varillas Azul Navy
1TU-C4::Varillas Rojo Rioja
1TU-C5::Varillas Amarillo Limón
1TU-C6::Varillas Rosa Pálido
1TU-C7::Varillas Verde Pistacho
1TU-C8::Varillas Lila Very Peri
1TU-C9::Varillas Carey Mar
1TU-P1::Varillas Caoba
1TU-P10::Varillas Brunch Vibes
1TU-P11::Varillas Sailor
1TU-P2::Varillas Zebra
1TU-P3::Varillas Hawai
1TU-P4::Varillas Lunares
1TU-P5::Varillas Azul Mármol
1TU-P6::Varillas Puzzle
1TU-P7::Varillas Garlan
1TU-P8::Varillas Valery
1TU-P9::Varillas Velvet
2CU-C1 + 2CU-DA::Clip Base Negra Memphis Solar Azul Degradado Polarizado
2CU-C1 + 2CU-DC::Clip Memphis Solar Azul Claro Polarizado
2CU-C1 + 2CU-DF::Clip Memphis Solar Vino Degradado Polarizado
2CU-C1 + 2CU-DL::Clip Base Negra Memphis Solar Lila Claro Polarizado
2CU-C1 + 2CU-DM::Clip Memphis Solar Marrón Degradado Polarizado
2CU-C1 + 2CU-EC::Clip Memphis Solar Cobre Reflective Polarizado
2CU-C1 + 2CU-EL::Clip Memphis Solar Morado Reflective Polarizado
2CU-C1 + 2CU-EP::Clip Memphis Solar Mirror Reflective Polarizado
2CU-C1 + 2CU-ER::Clip Memphis Solar Fucsia Reflective Polarizado
2CU-C1 + 2CU-EV::Clip Memphis Solar Verde Reflective Polarizado
2CU-C10::Clip Memphis Marpat
2CU-C11::Clip Memphis Mustard
2CU-C12::Clip Memphis Iced Coffee
2CU-C13::Clip Memphis Verde Olive
2CU-C14::Clip Memphis Valentina
2CU-C15::Clip Memphis Red Sunset
2CU-C16::Clip Memphis White Polar
2CU-C1B::Clip Memphis Espejo Solar Azul
2CU-C1BL::Clip Memphis Solar Negro
2CU-C1CN::Clip Memphis Conducción Nocturna
2CU-C1O::Clip Memphis Espejo Solar Naranja
2CU-C1P1::Clip Memphis Caoba
2CU-C1P10::Clip Memphis Brunch Vibes
2CU-C1P11::Clip Memphis Sailor
2CU-C1P14::Clip Memphis Valery
2CU-C1P15::Clip Memphis Velvet
2CU-C1P2::Clip Memphis Zebra
2CU-C1P3::Clip Memphis Hawai
2CU-C1P4::Clip Memphis Lunares
2CU-C1P5::Clip Memphis Azul Mármol
2CU-C1P6::Clip Memphis Puzzle
2CU-C1P7::Clip Memphis Garlan
2CU-C1P8::Clip Memphis Valery
2CU-C1P9::Clip Memphis Velvet
2CU-C1PP::Clip Memphis Protección de Pantalla
2CU-C2::Clip Memphis Carey
2CU-C3::Clip Memphis  Azul Navy
2CU-C4::Clip Memphis Rojo Rioja
2CU-C5::Clip Memphis Amarillo Limón
2CU-C6::Clip Memphis Rosa Pálido
2CU-C7::Clip Memphis Verde Pistacho
2CU-C8::Clip Memphis Lila Very Peri
2CU-C9::Clip Memphis Carey Mar
accessories_design_title::Accesorios de Diseño
accessories_functional_title::Accesorios Funcionales
anti_reflective::Antirreflejante
associated_optics::Óptico asociada
basicProgressives::Progresivas Básica
blue_control::Blue Control
choose_your_convination::Elige tu combinación:
CICU-01::Montura Martin
CICU-02::Montura Memphis
clips_resume_title::Clips:
cloth::Cloth: Microfibra Gamuza
comment_hint::<b>Shift ⇧ + Enter ↵</b> para hacer un salto de línea
comment_optic::Comentario
completed_form::Formulario completado
customize::Personalizar
description_clip_functional::¿El cliente ha comprado el PRIMER clip adicional por XXX?
design::Diseño
dont_send_btn::No enviar
eliteProgressives::Progresivas Élite
error_num_min::Introduce un numero mayor o igual al calculado a base de los productos introducidos
finalPage::Página Final
flipo_client::Cliente FLiPO
frame_resume_title::Montura:
frame_title::Monturas
functional::Funcional
go_to::Avanzar
gretting::Hola
gretting_subtitle::Formulario del pedido para
invoice_resume_title::Factura
invoicedToTheCustomer::Facturado al Cliente
lenses_type_resume_title::Tipo de Lente:
mediumProgressives::Progresivas Media
monofocalManufacture::Monofocales Fabricación
monofocalorProgressive::Monofocales o Progresivas
monofocalStock::Monofocal Stock
no::No
not_go_to::No avanzar
pack_curioso::Pack Curioso
pack_flipante::Pack FLiPANTE
pack_flipante_no_caja::Flipante sin caja
pack_full::Pack Full
pack_title::Packs
packs_resume_title::Pack:
placeholder_text::Escriba aquí su respuesta
pouch::Pouch: Funda de clip
press_enter::pulsa <b>Enter ↵</b>
progressiveTop::Progresivas Top
reduction_resume_title::Reducción:
resume::Resumen
review::Revisión
sale_stock::Venta Stock
sending::Enviando...
sheath::Funda
sold_data::Datos de la venta
standard_clip::Clip Estándar
start::Comenzar
sumbit::Enviar
talc_of::Talco de:
temples::Varillas
temples_resume_title::Varillas:
temples_title::Varillas
there_was_a_problem::Hubo un problema
title_final_form::Ya has terminado el formulario de montura y accesorios !    ! Recuerda que, en caso de que FLiPO realice las lentes, aún queda pendiente el formulario de lentes.
title_insert_data_customer::Introduce los datos del cliente
title_isFLiPO::¿La montura vendida ha sido FLiPO?
titleFileBlock::Sube el archivo de excel de la graduación
type_of_treatment::¿Que tipo de tratamiento es?
will_FLiPO_make_lenses::¿Quien se encargará de los cristales?
yes::Sí
total_value::Valor total
comment_payment::Cualquier detalle que no este contemplado en el las preguntas anteriores, o si el cliente ha elegido añadir productos, puedes detallarlos aquí:
out_of_stock::Agotado
has_financing::¿El cliente ha solicitado financiación?
financing::Financiación
yes_formPage::Sí
no_formPage::No
spain::España
portugal::Portugal
england::Inglaterra
copyright::Todos los derechos reservados
address::Dirección
active::Activo
inactive::Inactivo
back_dashboard::Volver al Inicio
status_todo::Pendiente
status_to_pay::Por Pagar
status_not_assist::No Asistido
status_assist::Asistido
status_notify_not_assist::Cancelado por el cliente
status_paid::Pagado
status_wrong_team::Error interno
status_not_buy::No compró
status_optician_rescheduled::Reprogramado por el óptico
status_sell_stock::Venta de stock
back_to::Volver a
back::Atrás
optic::Óptica
for_see::Para ver...
italy::Italia
appointments::Citas
conversion::Tasa de Conversión
globalStats::Estadísticas globales
lastMonth::Últimos 30 días
opticName::Nombre Óptica
opticSearch::Buscar Óptica
sales::Ventas
addendum::Adición
aisle::Pasillo
axis::Eje
base::Base
corto::Corto
cylinder::Cilindro
gretting_lenses::Formulario para pedir lentes del pedido
info_esc_form_lenses_1::Recuerda que al apretar la tecla
info_esc_form_lenses_2::puedes ver el resúmen del formulario
largo::Largo
left_eye_graduation_title_1::Ojo Izquierdo
left_eye_offset::Descentramiento Ojo Izquierdo (mm)
maximum_distance::Distancia Máxima (cm)
medio::Medio
mounting_dimensions::Dimensiones de Montaje
od_DNP::DNP Ojo Derecho
od_height::Altura Ojo Derecho
oi_DNP::DNP Ojo Izquierdo
oi_height::Altura Ojo Izquierdo
prism_axis::Eje Prisma
prism_value::Valor Prisma
progressive_top_range::Progresivo Gama Top
right_eye_graduation_title_1::Ojo Derecho
right_eye_offset::Descentramiento Ojo Derecho (mm)
size::Tamaño
sphere::Esfera
checkCredentials::Credenciales inválidas. Compruébalas.
invalidCredentials::Credenciales inválidas
loginButton::Conectar
loginWelcome::¡Bienvenid@!
typeCredentials::Introduce tus credenciales
yourPassword::Tu constraseña
yourUsername::Tu usuario
basics::Bases
choose_reason::Elige una razón
docs::Documentación
models::Modelos
my_optics::Mis Ópticas
next_time::Próxima vez
other::Otros
pricing::Precios
product::Producto
reason::Razón
state_order_assigned::error
state_order_cancel::error
state_order_confirmed::error
state_order_done::error
state_order_draft::error
state_order_for_prepare::Pedido a preparar
state_order_prepared::Pedido preparado - Esperando lentes
state_order_preparing::Pedido en preparación
state_order_sended::Pedido enviado
state_order_total_prepared::Pedido preparado
state_order_waiting::error
<25::Menor de 25
>45::Mayor de 45
25<X<45::Entre 25 y 45
admin_users_active::Activo
admin_users_create::Crear Usuario
admin_users_delete_confirm::¿Quieres eliminar este usuario?
admin_users_edit::Editar usuario
admin_users_name::Nombre
admin_users_optics::Ópticas
admin_users_optics_select::Selecciona tu/s óptica/s
admin_users_optics_suggested::Óptica sugerida
admin_users_password::Contraseña
admin_users_phone::Teléfono
admin_users_roles::Roles
admin_users_roles_select::Selecciona el rol
admin_users_username::Nombre de usuario
admin_zone::Zona Admin
age::Edad
agenda::Agenda
analytics::Analíticas
appointment_comment::Comentarios de la Cita
appointments_filter::Filtrar citas por Estado:
appointments_filter_info::Puedes filtrar las citas por estado y crear bloqueos de tiempo para bloquear
appointments_states::Estados de las Citas
change_status_wrong::Cambiar estado por si te has equivocado
client_from::Cliente de
comment_appointment::Cita Comentada.
comment_appointment_any::La cita se ha comentado.
commenting_appointment_of ::Comentando Cita de:
conversion_graph::Gráfico de Conversión de Citas
conversion_graph_converted::Convertidas
conversion_graph_failed::Falladas
conversion_graph_rate_short::Conversión
conversion_graph_total::Total
conversion_graph_unit::Tasa de Conversión
country::País
create_appointment::Crear Cita
create_block::Crear Bloqueo Horario
create_block_full::¿Es durante todo el día?
create_customer::Crear cliente
created_appointment::Se creo la cita
created_user::Usuario creado
customer_code::Código Cliente
customer_created::Cliente creado
customerSearch::Buscar Clientes
dashboard::Inicio
data_not_buy::Menciona la No compra
day::Día
delete::Eliminar
delete_block::¿Quieres eliminar este bloqueo?
edit::Editar
editing_appointment_of::Editando Cita de:
email::Correo electrónico
end_date::Termina el
fill_form::Completar
fill_form_lenses_now::¿Quieres rellenar ya el formulario de lentes?
fill_now::Rellenar ahora
form_create_block_full::¿Es durante todo el día?
form_end_date::Termina el
form_filter::Filtrar
form_for_fill::Formulario para rellenar
form_lenses_for_fill::Formulario de lentes para rellenar
form_reset::Restablecer
form_sell_stock::Formulario Ventas Stock
form_start_date::Empieza el
get_support::Consigue ayuda por WhatsApp
has_assisted::Ha asistido.
has_bought::Ha comprado
has_not_assisted::No ha asistido.
has_not_bought::No ha comprado
has_not_payed::No ha pagado
has_payed::Ha pagado.
home::Inicio
information::Información
is_assisted::¿Ha asistido?
is_buy::¿Ha comprado?
is_flipo_client::¿Es cliente de Flipo?
later::Más tarde
lenses_type_select::Customized graduation
logout::Salir
maps::Ver en Maps
modified_user::Usuario modificado
month::Mes
next::Siguiente
no_spaces::No puede haber espacios
notFound::No encontrado
num_appointment::Num. Cita
num_order::Num. Pedido
optic_history::Opticas Visitadas
optic_history_action::Mostrar
payments::Pagos
pending_form::Citas con formulario pendiente
pending_lenses_form::Formulario de lentes pendientes
phone_number::Número de teléfono
post_code::Código Postal
prev::Anterior
privacy::Política de Privacidad
reason_for_not_purchasing::Motivo no compra
remember_fill_lenses_form::Recuerda rellenar el formulario de lentes
required::Obligatorio
restore_appointment::Haz click para editar la Cita.
restore_appointment_todo::La cita se ha marcado como pendiente.
save::Guardar
select_age::Selecciona la edad
select_customer::Seleccione el cliente
start_date::Empieza el
state::Estado
there_can_be_no_gaps::No puede haber espacios
this_month::Este mes
this_week::Esta semana
title_modal_remember_fill_form::Recuerda rellenar los formularios que tienes pendientes!
today::Hoy
total_appointments::Citas Totales
unsold_appointment_panel_toggle::Comentarios
unsold_appointment_panel_toggle_error::Solo puedes usar esta función si la Cita no resulto en venta.
unsold_appointment_panel_toggle_info::Rellena información sobre esta cita que no resultó en venta.
update_appointment::Cita Actualizada.
update_appointment_any::La cita se ha actualizado.
update_appointment_canceled::Se ha cancelado la cita.
update_appointment_confirmed::Se ha confirmado la cita.
update_appointment_error::Esta cita ya no es modificable.
update_appointment_not_buy::La cita se ha marcado como No Compra.
update_appointment_payed::La cita se ha marcado como Pagada.
updatedLang::Has actualizado el idioma del ERP.
updatedLangTo::Idioma cambiado a
user_already_exists::El usuario ya existe
user_last_name::Apellido(s)
user_list::Lista de Usuarios
view_orders::Ver pedidos
week::Semana
without_info_graduation::Sin información de la graduación
workWeek::Semana Laboral
form_title::Título del bloque (opcional)
gama_basica::Gama Básica
gama_media::Gama Media
gama_elite::Gama Élite
gama_top::Gama Top
blocked::Bloqueado
title_must_not_be_empty::El título no debe estar vacío
accessories::Accesorios
accessory::Accesorio
advanced_filters::Filtros avanzados
all_elems::Todos
antireflective::Antirreflectante
appointment::Cita
appointment_date::Fecha de la cita
are_you_want_fill_lenses_form::¿Quieres rellenar el formulario de lentes?
at::a las
back_orders::Volver a Pedidos
behindhand::Detrás de la mano
billed::Facturado
called::Llamado
canceled::Cancelado
card::Tarjeta
cash::Efectivo
category_monofocales::Monofocal
category_progresivas::Progressive
choose_property::Elige una propiedad
choose_value::Elige un valor
clear_all::Borrar todo
close_distance::Distancia de cierre
coming_soon::Próximamente
comment::Comentario
comment_of_optic::Comentario Óptico
confirmed::Confirmado
created_on::Creado el
cuppon::Cupón
date::Fecha
date_form::Fecha Formulario
date_order::Fecha Pedido
decenter::Decentro
degree::Grado
delivered_customer::Cliente entregado
delivered_local::Local entregado
details::Detalles
error::Error
eyes::Ojos
eyes_form_not_filled::Formulario de ojos no rellenado todavía
form_of::Forma de
graduation::Graduación
hall::Sala
in_preparation::En preparación
last_30_days::últimos 30 días
last_elems::Últimos
left::Izquierda
lens_form::Formulario de lentes
lens_order::Pedido de lente
lens_provider::Proveedor de lentes
lense::Lente
lense_form_with_id::Formulario con ID
lense_order_with_id::Pedido de la lente con ID
lenses::Lentes
lenses_type::Tipo de lentes
lost::Perdido
monofocales::monofocales
more_late::Más tarde
mount::Modelo
my_last_orders::Mis últimos pedidos
name::Nombre
new_order::Nuevo pedido
no_comment::Sin comentario
none::Ninguno
not_available::No disponible
not_filled_yet::Aún no rellenado
not_graduated::No graduado
optic_added::Óptica añadida
optic_select::Seleccione su óptica
order::Pedido
order_num::Num. Albaran
order_of::Pedido de
order_status::Estado del pedido
ordered_lenses::Lentes pedidas
paid::Pagado
paid_with::Pagado con
payment_page::Página de Pago
payments_record::Pagos registrados
pending::Pendiente
pending_payment::Pendiente de pago
progresivas::Progresivas
phone::Teléfono
price::Precio
processed::Procesado
property::Propiedad
received::Recibido
recent_payments::Pagos recientes
reduction::Reducción
refund_accepted::Reembolso aceptado
refund_rejected::Reembolso rechazado
refund_requested::Reembolso solicitado
right::Derecha
search::Buscar
search_by::Buscar por
search_optics::Buscar óptica
select_date::Elegir fecha
select_optic::Selecciona una óptica
seller::Vendedor
sent::Enviado
showing::Mostrando
status::Estado
status_online::Pagado en línea
status_optical_error::Fallado por Óptica
status_optical_rescheduling::Reagendado por Óptica
status_unknown::Desconocido
talc::Talco
total_paid::Total pagado
total_spent::Total gastado
treatment::Tratamiento
type_word::Tipo
value::Valor
view_optic::Ver Óptica
view_order::Ver pedido
watchlist_added::ahora está en su lista de seguimiento
watchlist_cleared_desc::Se ha borrado la lista de seguimiento
watchlist_cleared_title::Lista de seguimiento limpiada
without_frame::Sin montura
add::Añadir
add_device::Añadir nuevo dispositivo
amount::Cantidad
amount_to_pay::Cantidad a pagar
available_tpv::TPV's disponible
choose_payment_type::Elige el tipo de pago
complementary::Pago complementario
confirm::CONFIRMAR
confirmation::Confirmación
could_not_be_connected::No se pudo conectar con el dispositivo
deposit::Paga y señal
deposit_greater_than::La paga y señal debe ser mayor a
device_version::Versión del dispositivo
enter_key::Introduzca la clave
failed_attempt::Intento fallido
full::Pago Completo
n_serial::Nº de serie
order_details::Detalles del pedido
payment_greater_than::El pago debe ser igual o mayor a
payment_type::Tipo de pago
perfect::¡Perfecto!
recommendations::RECOMENDACIONES
remaining_to_be_paid::Falta por pagar
remember_that::el cliente tendrá que pagar cuando pase a recojer su pedido.
review_tpv::Revisa tu TPV para realizar el pago
start_payment::Iniciar pago
terminal_connected::Terminal conectada
title_remember_that::Recuerda que
transfer_failed::¡Transferencia fallida!
call_issuer::La tarjeta fue rechazada por un motivo desconocido
offline_pin_required::La tarjeta fue rechazada porque requiere un PIN
online_or_offline_pin_required::La tarjeta fue rechazada porque requiere un PIN
generic_decline::Su tarjeta fue rechazada
incorrect_pin::El PIN ingresado es incorrecto
withdrawal_count_limit_exceeded::El cliente ha superado el saldo o límite de crédito disponible en su tarjeta
pin_try_exceeded::Se superó el número permitido de intentos de PIN
try_again::Inténtalo de nuevo
with_card::Con tarjeta
with_cash::En efectivo
you_will_pay::Va a pagar
transfer_success::Transferancia realizada corréctamente
success::Éxito
billing::Facturación
block_by_country::Bloquear por País
orders::Pedidos
transactions::Transacciones
billings::Facturaciones
instructions1::ASEGÚRATE DE TENER LA BATERÍA DE LA TERMINAL CARGADA.
instructions2::ENCIENDE EL DISPOSITIVO.
instructions3::VE A CONFIGURACIÓN DE LA TERMINAL, PARA ESO DEBES DESLIZAR EL DEDO DEL MARGEN IZQUIERDO DE LA PANTALLA HACIA LA DERECHA, MOMENTO EN EL QUE SE ABRIRÁ UN PANEL.
instructions4::A CONTINUACIÓN, DEBES SELECCIONAR CONFIGURACIÓN E INTRODUCIR EL SIGUIENTE PIN: 07139. APARECERÁN DIFERENTES OPCIONES. SELECCIONA "RED" Y CONÉCTATE A TU WI-FI.
instructions5::UNA VEZ TENGAS EL WI-FI CONECTADO, VUELVE AL MENÚ ANTERIOR Y SELECCIONA LA OPCIÓN "GENERA UN CÓDIGO DE EMPAREJAMIENTO". SE GENERARÁ UNA CLAVE QUE DEBERÁS INTRODUCIR EN LA APLICACIÓN.
instructions6::EL LUGAR PARA INTRODUCIR ESTE CÓDIGO SE ENCUENTRA EN LA SIGUIENTE VENTANA DEL FORMULARIO "AÑADIR NUEVO DISPOSITIVO". UNA VEZ INTRODUCIDO Y CONECTADO CORRECTAMENTE APARECERÁ EN "TPV'S DISPONIBLES".
instructions7::SELECCIONA EL TPV Y REALIZA EL PAGO.
instructions8::DE ESTA FORMA EL TPV QUEDA EMPAREJADO Y ASOCIADO A SU ÓPTICA. EN LAS SUCESIVAS OPERACIONES QUE REALICE SÓLO NECESITARÁ CONECTARLO A SU RED WIFI.
form_age::Edad
form_email::Correo electrónico
form_is_flipo_client::¿Es cliente de Flipo?
form_last_name::Apellido(s)
form_post_code::Código Postal
form_select_age::Selecciona la edad
form_users_name::Nombre
form_users_phone::Teléfono
user_exists::El cliente existe
user_not_exists::No hay ningún cliente con ese numero de teléfono
wizard_reminder_1::Recuerda que al apretar la tecla
wizard_ESC::ESC
wizard_reminder_3::puedes ver el resumen de los pasos,
wizard_reminder_4::clips
wizard_reminder_5::y
wizard_reminder_6::packs
wizard_reminder_7::que llevas
wizard_reminder_8::seleccionados.
cos_list_tab_1::Selecciona los productos
cos_list_tab_2::Elige las opciones
cos_list_tab_3::Resumen y promociones
coic_title_1::Por favor agregue los productos a ser solicitados:
coic_title_2::Aquí podrá agregar los productos para completar su orden a FLiPO
coic_description_1::Los packs de siempre, curioso, Full, Flipante
coic_description_2::Compra accesorios de forma individual, no asociados a Packs
c_title_pack::Packs
c_title_accessories::Accesorios Individuales
c_title_notFLIPO::Venta Not FLiPO
c_desc_pack::Los packs de siempre, curioso, Full, Flipante
c_desc_accessories::Compra accesorios de forma individual, no asociados a Packs
c_desc_notFLIPO::Registra aquí las ventas que no sean de productos FLiPO.
c_customer_info_title::Información sobre la cita:
c_order_resume_title::Resumen de los productos en esta orden
b_order_resume_title::Añadir mas productos
b_order_resume_continue_title1::CONTINUAR
b_order_resume_continue_title2::LISTO PARA PAGAR
c_promotions_title::Promociones que aplican para esta cita:
c_title_order_list::Tu Orden
b_title_order_list::CONTINUAR
c_accessories_order_list_title1::Accesorios
c_accessories_order_list_title2::Accesorios Extra
c_order_item_title::Selecciona un producto para comenzar
c_order_item_subtitle::Personaliza los productos a enviar en la orden:
c_pack_details_title::Este Pack incluye:
list_flipante::Pack FLiPANTE
list_full::Pack FULL
list_curioso::Pack Curioso
m_title_pack_additional::(Clip adicional 10 €)
list_temples::Varillas
list_functional::Clips Funcionales
list_packaging::Fundas
list_design::Clips de Diseño
repairation::Reparacion
list_functional_design::Clips Funcional de diseño
m_not_flipo::No Disponible para Tipo Venta Stock
b_not_flipo::CONTINUAR
c_type_lens_exist::Esta sección no se puede cambiar en una orden existente.
c_form_lens_title::Formulario de lentes
c_from_lens_q1::¿Quién se encargará de los cristales?
c_from_lens_q2::Tipo de Lente
c_from_lens_q3::Tratamiento
c_from_lens_q4::Reducción del Tratamiento
c_lens_options1::Monofocal Stock
c_lens_options2::Monofocales Fabricación
c_lens_options3::Monofocal de refuerzo
c_lens_options4::Progresivas Básica
c_lens_options5::Progresivas Media
c_lens_options6::Progresivas Élite
c_lens_options7::Progresivas Top
c_lens_options8::Ocupacionales
c_lens_seller_option1::Óptico asociada
c_lens_seller_option2::FLiPO
c_lens_seller_option3::Ninguno
c_anti_reflective::Antireflective
c_anti_reflective_plus::Antireflective Plus
c_blue_control::Blue Control
c_promotions_step1::Promociones aplicadas
c_promotions_step2::Promociones aplicables
c_lens_type_advice1::No hay un pack
b_resume_status_product::Completo
b_resume_status_product2::Sin Completar
b_resume_status_product3::Obligatorio
b_status_product::Completado
b_status_product2::Sin Completar
b_status_product3::Obligatorio
s_m_title1::Un (1) clip funcional
s_m_title2::clips funcionales
s_m_title3::o un (1) clip de diseño
s_m_title4::u
s_m_title5::o
s_m_title6::clips de diseño (a elegir) + varillas a juego
s_m_title7::Un (1) set de varillas
m_number_1::Un (1)
m_number_2::Dos (2)
m_number_3::Tres (3)
m_number_4::Cuatro (4)
m_number_5::Cinco (5)
m_number_6::Seis (6)
m_number_7::Siete (7)
m_number_8::Ocho (8)
m_number_9::Nueve (9)
m_number_10::Diez (10)
m_number_11::Once (11)
m_number_12::Doce (12)
m_number_13::Trece (13)
m_number_14::Catorce (14)
m_number_15::Quince (15)
m_number_16::Dieciséis (16)
m_number_17::Diecisiete (17)
m_number_18::Dieciocho (18)
m_number_19::Diecinueve (19)
m_number_20::Veinte (20)
m_menu_type_lens::Tipo de lentes
m_menu_type_frame::Tipo de montura
m_menu_type_functional::Clip funcional
m_menu_type_design::Clip de diseño
m_menu_type_temples::Varillas
m_menu_type_packaging::Packaging
i_h_cupon::Código de descuento o tarjeta regalo
b_application_promotion::Aplicar
b_delete_promotion::Eliminar
b_add_promotion::Aplicar
m_title_list::LISTA DE PEDIDO
sm_title_list::Cliente
m_column_billing_list::PRODUCTO
m_column_billing_list2::CANTIDAD
m_column_billing_list3::Total
m_title_aditional::Accessorios adicionales (promociones)
m_title_subtotal::Subtotal
m_title_disc::Descuento
b_title_back_list::Configurar
b_title_back_list2::Configurar Pedido
b_title_back_list3::Continuar
b_title_back_list4::CONTINUAR
m_title_selection::Su selección
m_title_pack_selection::Pack seleccionado
m_title_pack_selection2::Tipo de pack:
m_title_selection2::Montura:
m_title_selection3::Aún no seleccionado
m_title_selection4::Precio:
m_title_selection5::Tipo de lentes
m_title_selection6::No configurado
m_title_selection7::Tratamiento:
m_title_selection8::No especificado:
m_title_selection9::Tratamiento de reducción:
m_title_selection10::No se aplica
m_title_selection11::Accesorios del Pack
m_title_selection12::Nota:
m_title_selection13::A continuación sólo se muestran los accesorios configurados para este pack.
m_title_selection14::SKU:
m_title_selection15_accesory::Accesorio:
m_title_selection17::Tratamiento:
m_title_selection18::Reducción:
m_resume_submit_title::Resumen de la orden
m_payment_title::Elige un método de pago
c_payment_type_title::TPV FLiPO
c_payment_type_subtitle::pago a través de nuestro tpv
c_payment_type_subtitle2::pago en efectivo
c_payment_type_subtitle3::EFECTIVO
c_payment_type_subtitle4::pago con stripe
c_paymenet_input::PAGO EN EFECTIVO
c_paymenet_input2::TOTAL A PAGAR DOJO
c_amount_currency::Moneda
c_process_payment::Estamos procesando tu pago
m_title_selection19::Tipo:
m_title_completed_selection20::El pack está completamente configurado y listo.
m_title_completed_selection21::El pack aún no está completamente configurado.
m_title_completed_selection22::Accesorios Adicionales
m_title_completed_selection23::Accesorios Seleccionados
m_title_selection24::Promoción:
m_title_selection25::Montura:
m_title_selection26::No se ha seleccionado montura
m_title_selection27::Importante:
m_title_selection28::Una vez que confirme este pedido, no podrá agregar nuevos productos ni modificar las cantidades. Sin embargo, podrá ajustar las configuraciones de los productos ya incluidos en el pedido. El pedido se creará y procesará inmediatamente
m_title_selection29::Precio Total:
m_title_selection30::Confirmar Pedido
m_title_selection31::Cancelar
m_title_selection32::Confirmar
m_type_no_frame::Por favor seleccione un tipo de montura
c_form_eye_title::Formulario de ojos
m_form_eye::Esfera
m_form_eye2::Cilindro
m_form_eye3::Eje
m_form_eye4::Adición
m_form_eye5::Eje del Prisma
m_form_eye6::Valor del Prisma
m_form_eye7::Centrado Montura/Cliente
m_form_eye8::PASILLOS DISPONIBLES PARA GAMA PROGRESIVO
m_form_eye9::Pasillo
m_form_eye10::Corto
m_form_eye11::Largo
m_form_eye12::DATOS ADICIONALES PARA PROGRESIVO GAMA TOP (OPCIONAL)
m_form_eye13::Enviar
m_form_eye14::DNP
m_form_eye15::Altura
m_form_eye16::Sin prisma
m_form_eye17::Valor del Prisma
m_form_eye18::Decentramiento
m_form_eye19::Distancia Máxima (cm)
m_form_eye20::Comentarios adicionales sobre la graduacción
m_form_eye21::Detalles de la graduacción
m_form_eye22::Albarán:
m_form_eye23::Esfera:
m_form_eye24::Eje del Prima:
m_form_eye25::Valor del Eje:
m_form_eye26::Pasillo: Corto
m_form_eye27::Pasillo: Largo
REMINDER_TITLE::RECUERDA QUE
REMINDER_MESSAGE::Necesitamos que completes el formulario de graduación de lentes para preparar tu pedido. ¿Te gustaría hacerlo ahora?
YES_BUTTON::SÍ
NO_BUTTON::NO
m_form_eye_title::Formulario de lentes pedido:
m_acdemy_title::ERP Academy Tutorials
m_acdemy_subtitle::FLiPO Tutorials
m_acdemy_title_card1::Softr Tutorial for Beginners
m_acdemy_desc_card2::Softr is one of the leading tools for building internal applications and portals for your company or organization using your data from Airtable, Google Sheets, SmartSuite and other popular data sources.
m_acdemy_title_card2::Google Sheets Tables
m_error_stock_title::Disculpa
m_error_stock_subtitle::Estamos teniendo Problemas intentalo mas tarde
m_new_table_order_s1::Número de Pedido
m_new_table_order_s2::Nombre del Cliente
m_new_table_order_s3::Eliminar Filtros
m_new_table_order_c1::N.º Albarán
m_new_table_order_c2::Cliente
m_new_table_order_c3::Creación
m_new_table_order_c4::Último Pago
m_new_table_order_c5::Pagado
m_new_table_order_c6::Precio Total
m_new_table_order_c7::Graduación
m_new_table_order_c8::Pedido
m_new_table_order_c9::Pago
m_new_payment_dojo_1::Tiempo restante:
m_new_payment_dojo_2::segundos
m_new_payment_dojo_3::ES LA FIRMA CORRECTA?
m_new_payment_dojo_4::DECLINED
m_new_payment_dojo_5::INGRESO DE PIN
m_new_payment_dojo_6::Tenemos problemas para procesar la respuesta del pago.
m_new_payment_dojo_7::Error de comunicación con la terminal. Por favor, verifica si la transacción se completó. POR FAVOR CONTACTA CON TU GESTOR FLIPO
m_new_payment_dojo_8::CONTINUAR
m_new_payment_dojo_9::TPV no disponible
m_new_payment_dojo_10::Intenta de nuevo en 10 segundos o revisa la pantalla y cables del terminal. Si el problema sigue, contacta soporte.
m_new_payment_dojo_11::Error de conexión con el terminal
m_new_payment_dojo_12::¿Se ha registrado correctamente el pago?
m_new_payment_dojo_13::ESTAMOS INICIANDO EL PAGO
CALENDAR::CALENDARIO
ORDERS::PEDIDOS
APPOINTMENT::CITA
t_clip_additional::Accesorio adicional
modal_additional_accessory_title::Accesorio adicional
modal_additional_accessory_question::¿Desea agregar un accesorio adicional al pack por 10 euros?
modal_additional_accessory_description::Puede mejorar su pack añadiendo un accesorio adicional por solo 10 euros.
product_list_packs_new_frames::Nueva Colección
product_list_packs_old_frames::Martin y Memphis
tour_b_1::Ant
tour_b_2::Sig
tour_c_title_1::Progreso de tu Pedido
tour_c_subtitle_1::Este encabezado te muestra cómo va tu pedido. Tiene un total de tres pasos que debes completar
tour_c_title_2::Lista de Packs
tour_c_subtitle_2::Esta sección muestra una lista de tarjetas de productos en la categoría
tour_c_subtitle_2_2::Packs
tour_c_subtitle_2_3::. Puedes hacer clic en la tarjeta de Packs para obtener más detalles.
tour_c_title_3::Venta 'NOT FLIPO'
tour_c_subtitle_3::Esta sección está destinada exclusivamente para registrar ventas que no pertenezcan a
tour_c_subtitle_3_1::FLIPO
tour_c_subtitle_3_2::. Por favor, utilice esta área para ventas no relacionadas con nuestros productos estándares.
product_cards_accessories_title::Lista de Accesorios
product_cards_accessories_subtitle_1::Esta sección muestra una lista de tarjetas de productos en la categoría
product_cards_accessories_highlight::Accesorios
product_cards_accessories_subtitle_2::Puedes hacer clic en la tarjeta de Packs para obtener más detalles.
product_list_title::Lista de Productos Seleccionados
product_list_subtitle_1::Esta tarjeta muestra una lista de productos donde los artículos que elijas de las categorías
product_list_highlight_1::Accesorios
product_list_highlight_2::Packs
product_list_subtitle_2::se reflejarán aquí.
product_list_actions::Podrás: Eliminar, Añadir y ver la cantidad de cada uno.
continue_button_title::Botón "Continuar"
continue_button_subtitle::El botón "Continuar" se activará una vez que hayas agregado algo a tu orden. Puedes usar este botón para avanzar al siguiente paso de tu pedido y continuar con el proceso de compra.
order_summary_title::Resumen de tu orden
order_summary_subtitle_1::Esta tarjeta muestra un resumen de tu orden. Al lado de cada producto, hay una
order_summary_label::etiqueta
order_summary_subtitle_2::que indica el estado del producto: "obligatorio", "sin completar" o "completado". Esto te ayuda a identificar fácilmente qué elementos necesitas completar antes de finalizar tu pedido.
customization_section_title::Sección de Personalización
customization_section_subtitle_1::Esta sección te permite terminar de personalizar todo tu producto, incluyendo:
customization_section_highlight_1::Tipo de Lentes
customization_section_highlight_2::Tipo de Montura
customization_section_highlight_3::Accesorio Funcional
customization_section_highlight_4::Clip de Diseño
customization_section_highlight_5::varillas
customization_section_subtitle_2::. Cada opción muestra su estado de "obligatorio", "sin completar" o "completado", para que puedas seguir el progreso de tu personalización.
client_info_card_title::Tarjeta de Información del Cliente
client_info_card_subtitle_1::Esta tarjeta te proporciona información sobre el cliente asociado a la cita. Incluye detalles como la fecha de la cita, el tipo de cliente (ya sea
client_info_card_highlight_1::FLIPO
client_info_card_highlight_2::OPTIC
client_info_card_subtitle_2::), y las promociones que aplican para este cliente. Esto te ayuda a tener una visión clara de las preferencias y beneficios del cliente para su cita.
product_configuration_card_title::Tarjeta de Configuración del Producto
product_configuration_card_subtitle_1::Esta tarjeta muestra todas las opciones requeridas para configurar el producto, las cuales pueden variar según los distintos tipos. Puedes seleccionar diferentes características y accesorios para personalizar tu producto a tus necesidades específicas.
product_configuration_panel_title::Panel de Configuración de Accesorios
product_configuration_panel_subtitle_1::Este panel te permite ajustar las configuraciones de los accesorios seleccionados de manera personalizada. Aquí podrás visualizar de forma clara las opciones disponibles y establecer la cantidad máxima que puedes añadir a tu selección, asegurándote de obtener la configuración exacta que necesitas.
product_configuration_panel_strong::Haz clic en el panel para descubrir más detalles y opciones.
product_personalize_panel_title::Panel de Configuración de Accesorios
product_personalize_panel_subtitle_1::Este panel ofrece dos funciones clave:
product_personalize_function_1::1. Botones de "+" y "-" que te permiten aumentar o reducir la cantidad del mismo producto.
product_personalize_function_2::2. Un botón de "Personalizar" que te permite modificar el producto seleccionado de acuerdo a tus preferencias.
customize_button::Personalizar
title_select_combination::Elige Tu Combinacion
close_button::Cerrar
without_stock::Sin Stock
Scroll_to_see_more_products::Desplázate para ver más productos
order_comment_placeholder::Añade un comentario a tu pedido
order_comment_label::Comentario del pedido
payment_less_than_remaining::Pago Menor que el Restante
actions_table_orders_billing::Acciones
to_mark_as_billing::Marcar como facturado
enter_billin_number::Introduce el número de factura
billing_number::Número de factura
enter_billing_number_placeholder::Introduce el número de factura
cancel_billing::Cancelar facturación
Accept_billing::Aceptar facturación
processing_please_wait::Procesando, por favor espere
order_marked_as_billed::Orden marcada como facturada
payment_issue::Lamentamos que haya tenido problemas al pagar con su tarjeta. A continuación, le ofrecemos una serie de recomendaciones para evitar que se repita esta situación:
card_active::Verifique que su tarjeta esté activa y que no haya caducado. Puede consultar el estado de su tarjeta en su banco o en la aplicación móvil de su entidad financiera.
check_details::Compruebe que haya introducido correctamente los datos de su tarjeta, como el número, la fecha de caducidad y el código de seguridad. Asegúrese de que no haya espacios ni caracteres especiales entre los dígitos.
check_balance::Asegúrese de que tenga saldo suficiente en su cuenta para realizar el pago. Si su tarjeta tiene un límite de crédito, compruebe que no lo haya superado.
sms_verification::Si su tarjeta tiene habilitada la opción de pago seguro o de verificación por SMS, asegúrese de que tenga cobertura y de que reciba el código de confirmación en su teléfono móvil. Introduzca el código en el plazo indicado y no lo comparta con nadie.
blocked_card::Si ha realizado varios intentos fallidos de pago, es posible que su tarjeta haya sido bloqueada temporalmente por motivos de seguridad. En ese caso, póngase en contacto con su banco para desbloquearla y poder volver a utilizarla.
alternate_payment::Si el problema persiste, puede intentar pagar con otra tarjeta o con otro método de pago disponible en nuestra página web. También puede contactar con nuestro servicio de atención al cliente para que le ayudemos a resolver cualquier duda o incidencia.
try_again_message::Vuelve a intentarlo
transaction_cancelled::Transacción cancelada
transaction_declined::Transacción rechazada
m_not_flipo_mudle_alert::Termina de configurar los datos
add_clip_modal_title::Agregar Clip Adicional
add_clip_modal_description::Puedes añadir un clip adicional a tu orden por
add_clip_modal_price::10 euros.
add_clip_modal_add_button::Haz clic en "Agregar a la Orden" para confirmarlo.
completar_label::Completar
completado_label::Completado
no_aplica_label::No Aplica
OD::(OD)
OI::(OI)
D::D
I::I
confirm_all_data_lenses::Asegurate de llenar todos los campos
m_order_pending_table::No tienes órdenes pendientes
m_modal_stock_sale::Nombre es obligatorio
m_modal_stock_sale2::Apellidos son obligatorios
m_modal_stock_sale3::Teléfono es obligatorio
m_modal_stock_sale4::Correo electrónico no válido
m_modal_stock_sale5::Correo electrónico es obligatorio
sphere_required_field::Campo requerido para esfera
sphere_value_field::Valor inválido para esfera
sphere_min_value::Valor mínimo es -20 para esfera
sphere_max_value::Valor máximo es 20 para esfera
sphere_multiple_of_025::El valor debe ser un múltiplo de 0.25 para esfera
cylinder_required_field::Campo requerido para cilindro
cylinder_value_field::El valor debe ser un número válido para cilindro
cylinder_min_value::Valor mínimo es -6 para cilindro
cylinder_max_value::Valor máximo es 6 para cilindro
axis_required_field::Campo requerido para eje
axis_min_value::Valor mínimo es 0 para eje
axis_max_value::Valor máximo es 180 para eje
mounting_data_required_field::Campo requerido para datos de montaje
mounting_data_min_value::Valor mínimo es 20 para datos de montaje
mounting_data_max_value::Valor máximo es 45 para datos de montaje
height_data_required_field::Campo requerido para datos de altura
height_data_min_value::Valor mínimo es 10 para datos de altura
height_data_max_value::Valor máximo es 40 para datos de altura
firstName_required::Nombre es obligatorio
lastName_required::Apellidos son obligatorios
phoneNumber_required::Teléfono es obligatorio
email_invalid::Correo electrónico no válido
email_required::Correo electrónico es obligatorio
400001::Varillas Carey
400002::Varillas Azul Navy
400003::Varillas Rojo Rioja
400004::Varillas Amarillo Limón
400005::Varillas Rosa Pálido
400006::Varillas Verde Pistacho
400007::Varillas Lila Very Peri
400008::Varillas Iced Coffee
400009::Varillas Verde Olive
400010::Varillas Valentina
400011::Varillas Red Sunset
400012::Varillas White Polar
400013::Varillas Green Forest
400014::Varillas Caoba
400015::Varillas Zebra
400016::Varillas Hawai
400017::Varillas Azul Mármol
400018::Varillas Puzzle
400019::Varillas Brunch Vibes
400020::Varillas Sailor
400021::Varillas Kenia
400022::Varillas Highlands
400023::Varillas Negras
400024::Varillas Chocolate
400025::Varillas Red Passion
400026::Varillas Valparaiso
400027::Varillas Black Flowers
200001::Clip Original (Nilo) Espejo Solar Azul
200002::Clip Original (Nilo) Solar Negro
200003::Clip Original (Nilo) Conducción Nocturna
200004::Clip Original (Nilo) Espejo Naranja
200005::Clip Original (Nilo) Proteción Pantalla
200006::Clip Model C (Ivy) Espejo Azul
200007::Clip Model C (Ivy) Solar Negro
200008::Clip Model C (Ivy) Conducción Nocturna
200009::Clip Model C (Ivy) Espejo Naranja
200010::Clip Model C (Ivy) Proteción Pantalla
200011::Clip Model A (Dante) Espejo Azul
200012::Clip Model A (Dante) Solar Negro
200013::Clip Model A (Dante) Conducción Nocturna
200014::Clip Model A (Dante) Espejo Naranja
200015::Clip Model A (Dante) Proteción Pantalla
200016::Clip Model D (Siena) Espejo Azul
200017::Clip Model D (Siena) Solar Negro
200018::Clip Model D (Siena) Conducción Nocturna
200019::Clip Model D (Siena) Espejo Naranja
200020::Clip Model D (Siena) Proteción Pantalla
0300014 + 0500011::Clip Original (Nilo) Solar Azul Degradado Polarizado
0300014 + 0500012::Clip Original (Nilo) Solar Marrón Degradado Polarizado
0300014 + 0500013::Clip Original (Nilo) Solar Vino Degradado Polarizado
0300014 + 0500014::Clip Original (Nilo) Solar Cobre Reflective Polarizado
0300014 + 0500015::Clip Original (Nilo) Solar Fucsia Reflective polarizado
0300014 + 0500016::Clip Original (Nilo) Solar Morado Reflective Polarizado
0300014 + 0500017::Clip Original (Nilo) Solar Plateado Mirror Polarizado
0300014 + 0500018::Clip Original (Nilo) Solar Verde Reflective Polarizado
0300014 + 0500019::Clip Original (Nilo) Solar Azul Claro Polarizado
0300014 + 0500020::Clip Original (Nilo) Solar Lila Claro Polarizado
0300037 + 0500021::Clip Model C (Ivy) Solar Azul Degradado Polarizado
0300037 + 0500022::Clip Model C (Ivy) Solar Marrón Degradado Polarizado
0300037 + 0500023::Clip Model C (Ivy) Solar Vino Degradado Polarizado
0300037 + 0500024::Clip Model C (Ivy) Solar Cobre Reflective Polarizado
0300037 + 0500025::Clip Model C (Ivy) Solar Fucsia Reflective polarizado
0300037 + 0500026::Clip Model C (Ivy) Solar Morado Reflective Polarizado
0300037 + 0500027::Clip Model C (Ivy) Solar Plateado Mirror Polarizado
0300037 + 0500028::Clip Model C (Ivy) Solar Verde Reflective Polarizado
0300037 + 0500029::Clip Model C (Ivy) Solar Azul Claro Polarizado
0300037 + 0500030::Clip Model C (Ivy) Solar Lila Claro Polarizado
0300060 + 0500031::Clip Model A (Dante) Solar Azul Degradado Polarizado
0300060 + 0500037::Clip Model A (Dante) Solar Marrón Degradado Polarizado
0300060 + 0500038::Clip Model A (Dante) Solar Vino Degradado Polarizado
0300060 + 0500039::Clip Model A (Dante) Solar Cobre Reflective Polarizado
0300060 + 0500040::Clip Model A (Dante) Solar Fucsia Reflective polarizado
0300060 + 0500041::Clip Model A (Dante) Solar Morado Reflective Polarizado
0300060 + 0500042::Clip Model A (Dante) Solar Plateado Mirror Polarizado
0300060 + 0500043::Clip Model A (Dante) Solar Verde Reflective Polarizado
0300060 + 0500044::Clip Model A (Dante) Solar Azul Claro Polarizado
0300060 + 0500045::Clip Model A (Dante) Solar Lila Claro Polarizado
0300083 + 0500051::Clip Model D (Siena) Solar Azul Degradado Polarizado
0300083 + 0500052::Clip Model D (Siena) Solar Marrón Degradado Polarizado
0300083 + 0500053::Clip Model D (Siena) Solar Vino Degradado Polarizado
0300083 + 0500054::Clip Model D (Siena) Solar Cobre Reflective Polarizado
0300083 + 0500055::Clip Model D (Siena) Solar Fucsia Reflective polarizado
0300083 + 0500056::Clip Model D (Siena) Solar Morado Reflective Polarizado
0300083 + 0500057::Clip Model D (Siena) Solar Plateado Mirror Polarizado
0300083 + 0500058::Clip Model D (Siena) Solar Verde Reflective Polarizado
0300083 + 0500059::Clip Model D (Siena) Solar Azul Claro Polarizado
0300083 + 0500060::Clip Model D (Siena) Solar Lila Claro Polarizado
300001::Clip Original (Nilo) Carey
300002::Clip Original (Nilo) Azul Navy
300003::Clip Original (Nilo) Rioja
300004::Clip Original (Nilo) Amarillo Limón
300005::Clip Original (Nilo) Rosa Pálido
300006::Clip Original (Nilo) Verde Pistacho
300007::Clip Original (Nilo) Lila Very Peri
300008::Clip Original (Nilo) Iced Coffee
300009::Clip Original (Nilo) Verde Olive
300010::Clip Original (Nilo) Valentina
300011::Clip Original (Nilo) Red Sunset
300012::Clip Original (Nilo) White Polar
300013::Clip Original (Nilo) Green Forest
300014::Clip Original (Nilo) Base Negra
300015::Clip Original (Nilo) Caoba
300016::Clip Original (Nilo) Zebra
300017::Clip Original (Nilo) Hawai
300018::Clip Original (Nilo) Azul Mármol
300019::Clip Original (Nilo) Puzzle
300020::Clip Original (Nilo) Brunch Vibes
300021::Clip Original (Nilo) Sailor
300022::Clip Original (Nilo) Kenia
300023::Clip Original (Nilo) Highlands
300024::Clip Model C (Ivy) Carey
300025::Clip Model C (Ivy) Azul Navy
300026::Clip Model C (Ivy) Rojo Rioja
300027::Clip Model C (Ivy) Amarillo Limón
300028::Clip Model C (Ivy) Rosa Pálido
300029::Clip Model C (Ivy) Verde Pistacho
300030::Clip Model C (Ivy) Lila Very Peri
300031::Clip Model C (Ivy) Iced Coffee
300032::Clip Model C (Ivy) Verde Olive
300033::Clip Model C (Ivy) Valentina
300034::Clip Model C (Ivy) Red Sunset
300035::Clip Model C (Ivy) White Polar
300036::Clip Model C (Ivy) Green Forest
300037::Clip Model C (Ivy) Base Negra
300038::Clip Model C (Ivy) Caoba
300039::Clip Model C (Ivy) Zebra
300040::Clip Model C (Ivy) Hawai
300041::Clip Model C (Ivy) Azul Mármol
300042::Clip Model C (Ivy) Puzzle
300043::Clip Model C (Ivy) Brunch Vibes
300044::Clip Model C (Ivy) Sailor
300045::Clip Model C (Ivy) Kenia
300046::Clip Model C (Ivy) Highlands
300047::Clip Model A (Dante) Carey
300048::Clip Model A (Dante) Azul Navy
300049::Clip Model A (Dante) Rojo Rioja
300050::Clip Model A (Dante) Amarillo Limón
300051::Clip Model A (Dante) Rosa Pálido
300052::Clip Model A (Dante) Verde Pistacho
300053::Clip Model A (Dante) Lila Very Peri
300054::Clip Model A (Dante) Iced Coffee
300055::Clip Model A (Dante) Verde Olive
300056::Clip Model A (Dante) Valentina
300057::Clip Model A (Dante) Red Sunset
300058::Clip Model A (Dante) White Polar
300059::Clip Model A (Dante) Green Forest
300060::Clip Model A (Dante) Base Negra
300061::Clip Model A (Dante) Caoba
300062::Clip Model A (Dante) Zebra
300063::Clip Model A (Dante) Hawai
300064::Clip Model A (Dante) Azul Mármol
300065::Clip Model A (Dante) Puzzle
300066::Clip Model A (Dante) Brunch Vibes
300067::Clip Model A (Dante) Sailor
300068::Clip Model A (Dante) Kenia
300069::Clip Model A (Dante) Highlands
300070::Clip Model D (Siena) Carey
300071::Clip Model D (Siena) Azul Navy
300072::Clip Model D (Siena) Rojo Rioja
300073::Clip Model D (Siena) Amarillo Limón
300074::Clip Model D (Siena) Rosa Pálido
300075::Clip Model D (Siena) Verde Pistacho
300076::Clip Model D (Siena) Lila Very Peri
300077::Clip Model D (Siena) Iced Coffee
300078::Clip Model D (Siena) Verde Olive
300079::Clip Model D (Siena) Valentina
300080::Clip Model D (Siena) Red Sunset
300081::Clip Model D (Siena) White Polar
300082::Clip Model D (Siena) Green Forest
300083::Clip Model D (Siena) Base Negra
300084::Clip Model D (Siena) Caoba
300085::Clip Model D (Siena) Zebra
300086::Clip Model D (Siena) Hawai
300087::Clip Model D (Siena) Azul Mármol
300088::Clip Model D (Siena) Puzzle
300089::Clip Model D (Siena) Brunch Vibes
300090::Clip Model D (Siena) Sailor
300091::Clip Model D (Siena) Kenia
300092::Clip Model D (Siena) Highlands
300093::Clip Original (Nilo) Chocolate
300094::Clip Original (Nilo) Red Passion
300095::Clip Original (Nilo) Valparaiso
300096::Clip Original (Nilo) Black Flowers
300097::Clip Model C (Ivy) Chocolate
300098::Clip Model C (Ivy) Red Passion
300099::Clip Model C (Ivy) Valparaiso
300100::Clip Model C (Ivy) Black Flowers
300101::Clip Model A (Dante) Chocolate
300102::Clip Model A (Dante) Red Passion
300103::Clip Model A (Dante) Valparaiso
300104::Clip Model A (Dante) Black Flowers
300105::Clip Model D (Siena) Chocolate
300106::Clip Model D (Siena) Red Passion
300107::Clip Model D (Siena) Valparaiso
300108::Clip Model D (Siena) Black Flowers
100001::Montura Original (Nilo) Negra
100002::Montura Original (Nilo) Light
100003::Montura Model C (Ivy) Negra
100004::Montura Model C (Ivy) Light
100005::Montura Model A (Dante) Negro
100006::Montura Model A (Dante) Light
100007::Montura Model D (Siena) Negro
100008::Montura Model D (Siena) Light
`;

export default es;
