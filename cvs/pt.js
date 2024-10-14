const pt = `
billingPage::*** billingPage ***
amount_payed::Quantidade paga
last_payment_date::Data do último pagamento
order_completed::PEDIDOS COBRADOS A 100%
order_date::Data da nota de entrega
orders_with_payments_not_do_it::PEDIDOS COM PAGAMENTOS PENDENTES
pending_collection::Pendente de cobrança
selected_optic::Óptica selecionada
subtitle_order_completed::Pedidos que foram pagos 100% e não estão em uma transação.
subtitle_orders_with_payments_not_do_it::Lista de pedidos pendentes de pagamento
total_price::Preço total
blockByCountryPage::*** blockByCountryPage ***
title_block_by_country::Horário de bloqueio por país
select_country::Selecione o país
end_date_must_be_after_start_date::A data final tem de ser mais longa do que a data inicial.
customerPage::*** customerPage ***
myCustomersSearch::Pesquisar os meus clientes
customersSearch::Pesquisar Clientes
customerSearch::Pesquisar Clientes
myOptics::As minhas Ópticas
formPage::*** formPage ***
1CU-C18::Clip Martin Chocolate
1CU-C1P21::Clip Martin Black Flowers
1CU-C19::Clip Martin Red Passion
1CU-C1P20::Clip Martin Valparaíso
1TU-C18::Varillas Chocolate
1TU-P21::Varillas Black Flowers
1TU-C19::Varillas Red Passion
1TU-P20::Varillas Valparaíso
2CU-C18::Clip Memphis Chocolate
2CU-C1P21::Clip Memphis Black Flowers
2CU-C19::Clip Memphis Red Passion
2CU-C1P20::Clip Memphis Valparaíso
1CU-C1 + 1CU-DA::Clip Base Preto Martin Solar Azul Gradiente Polarizado
1CU-C1 + 1CU-DC::Clip Martin Solar Azul Claro Polarizado
1CU-C1 + 1CU-DF::Clip Martin Vinho Gradiente Polarizado
1CU-C1 + 1CU-DL::Martin Solar Black Base Clip Light Lilás Polarizado
1CU-C1 + 1CU-DM::Clip Martin Solar Castanho Gradiente Polarizado
1CU-C1 + 1CU-EC::Clip Martin Solar Cobre Refletor Polarizado
1CU-C1 + 1CU-EL::Clip Martin Solar Púrpura Refletor Polarizado
1CU-C1 + 1CU-EP::Clip Martin Solar Mirror Refletor Polarizado
1CU-C1 + 1CU-ER::Clip Martin Solar Fúcsia Refletor Polarizado
1CU-C1 + 1CU-EV::Clip Martin Verde Refletor Polarizado
1CU-C10::Clipe Martin Marpat
1CU-C11::Clipe Martin Mustard
1CU-C12::Clipe Martin Iced Coffee
1CU-C13::Clipe Martin verde azeitona
1CU-C14::Clipe Martin Valentina
1CU-C15::Clipe Martin Red Sunset
1CU-C16::Clipe Martin White Polar
1CU-C1B::Clipe Martin Solar Mirror Azul
1CU-C1BL::Clipe Martin Solar Preto
1CU-C1CN::Clipe Martin Night Driving
1CU-C1O::Clipe Martin Solar Mirror Laranja
1CU-C1P1::Clipe Martin de mogno
1CU-C1P10::Clipe Martin Brunch Vibes
1CU-C1P11::Clipe Martin Sailor
1CU-C1P2::Clipe Martin Zebra
1CU-C1P3::Clipe Martin Hawaii
1CU-C1P4::Clipe Martin Polka Dots
1CU-C1P5::Clipe Martin Mármore azul
1CU-C1P6::Clipe Martin Puzzle
1CU-C1P7::Clipe Martin Garlan
1CU-C1P8::Clipe Martin Valery
1CU-C1P9::Clipe Martin Velvet
1CU-C1PP::Clipe Martin de proteção do ecrã
1CU-C2::Clipe Martin Carey
1CU-C3::Clipe Martin azul-marinho
1CU-C4::Clipe Martin Tinto Rioja
1CU-C5::Clipe Martin Amarelo Limão
1CU-C6::Clipe Martin Rosa Pálido
1CU-C7::Clipe Martin Verde Pistácio
1CU-C8::Clipe Martin Lila Very Peri
1CU-C9::Clipe Martin Carey Mar
1TU-C10::Hastes Marpat
1TU-C11::Hastes Mustard
1TU-C12::Hastes Iced Coffee
1TU-C13::Hastes Verde azeitona
1TU-C14::Hastes Valentina
1TU-C15::Hastes Red Sunset
1TU-C16::Hastes White Polar
1TU-C1P4::Hastes Red Points
1TU-C2::Hastes Carey
1TU-C3::Hastes azul-marinho
1TU-C4::Hastes Rioja Tinto
1TU-C5::Hastes Amarelo limão
1TU-C6::Hastes cor-de-rosa pálido
1TU-C7::Hastes verdes de pistácio
1TU-C8::Hastes Lila Very Peri
1TU-C9::Hastes Carey Mar
1TU-P1::Hastes em mogno
1TU-P10::Hastes Brunch Vibes
1TU-P11::Hastes Marinero
1TU-P2::Hastes de zebra
1TU-P3::Hastes do Havai
1TU-P4::Hastes de bolinhas
1TU-P5::Hastes de mármore azul
1TU-P6::Hastes de puzzle
1TU-P7::Hastes Garlan
1TU-P8::Hastes Valery
1TU-P9::Hastes Velvet
2CU-C1 + 2CU-DA::Clip Base Preto Memphis Solar Azul Gradiente Polarizado
2CU-C1 + 2CU-DC::Clip Memphis Solar Azul Claro Polarizado
2CU-C1 + 2CU-DF::Clip Memphis Solar Vinho Gradiente Polarizado
2CU-C1 + 2CU-DL::Clip Base Preta Memphis Solar Light Lilás Polarizada
2CU-C1 + 2CU-DM::Clip Memphis Solar Castanho Gradiente Polarizado
2CU-C1 + 2CU-EC::Clip Memphis Solar Cobre Refletor Polarizado
2CU-C1 + 2CU-EL::Clip Memphis Solar Púrpura Refletor Polarizado
2CU-C1 + 2CU-EP::Clip Memphis Solar Mirror Refletor Polarizado
2CU-C1 + 2CU-ER::Clip Memphis Solar Fúcsia Refletor Polarizado
2CU-C1 + 2CU-EV::Clip Memphis Solar Verde Refletor Polarizado
2CU-C10::Clipe Memphis Marpat
2CU-C11::Clipe Memphis Mustard
2CU-C12::Clipe Memphis Iced Coffee
2CU-C13::Clipe Memphis Verde Azeitona
2CU-C14::Clipe Memphis Valentina
2CU-C15::Clipe Memphis Red Sunset
2CU-C16::Clipe Memphis White Polar
2CU-C1B::Clipe Memphis Solar Mirror Azul
2CU-C1BL::Clipe Memphis Solar Preto
2CU-C1CN::Clipe Memphis Night Driving
2CU-C1O::Clipe Memphis Sun Mirror Laranja
2CU-C1P1::Clipe Memphis Mahogany
2CU-C1P10::Clipe Memphis Brunch Vibes
2CU-C1P11::Clipe Memphis Sailor
2CU-C1P14::Clipe Memphis Valery
2CU-C1P15::Clipe Memphis Velvet
2CU-C1P2::Clipe Memphis de zebra
2CU-C1P3::Clipe Memphis Hawaii
2CU-C1P4::Clipe Memphis de bolinhas
2CU-C1P5::Clipe Memphis de mármore azul
2CU-C1P6::Clipe Memphis Puzzle
2CU-C1P7::Clipe Memphis Garlan
2CU-C1P8::Clipe Memphis Valery
2CU-C1P9::Clipe Memphis Velvet
2CU-C1PP::Clipe Memphis Proteção de ecrã
2CU-C2::Clipe Memphis Carey
2CU-C3::Clipe Memphis Azul Marinho
2CU-C4::Clipe Memphis Tinto Rioja
2CU-C5::Clipe Memphis Amarelo Limão
2CU-C6::Clipe Memphis Rosa Pálido
2CU-C7::Clipe Memphis Verde Pistácio
2CU-C8::Clipe Memphis Lila Muito Peri
2CU-C9::Clipe Memphis Carey Mar
accessories_design_title::Acessórios de design
accessories_functional_title::Acessórios funcionais
anti_reflective::Antirreflexo
associated_optics::Ótica associada
basicProgressives::Progressivo Básico
blue_control::Blue Control
choose_your_convination::Escolha sua combinação:
CICU-01::Martin montar
CICU-02::Memphis montar
clips_resume_title::Clipes:
cloth::Pano: camurça de microfibra
comment_hint::<b>Shift ⇧ + Enter ↵</b> para fazer um salto de linha
comment_optic::Comentários
completed_form::Formulário preenchido
customize::Personalização
description_clip_functional::O cliente comprou o PRIMEIRO clipe adicional por XXX?
design::Diseño
dont_send_btn::Não enviar
eliteProgressives::Progressistas de Elite
error_num_min::Introduzir um número maior ou igual ao número calculado com base nos produtos introduzidos
finalPage::Página Final
flipo_client::Cliente FLiPO
frame_resume_title::Armações:
frame_title::Quadros
functional::Funcional
go_to::Avançar
gretting::Olá
gretting_subtitle::Formulário de pedido para
invoice_resume_title::Fatura
invoicedToTheCustomer::Cobrado ao Cliente
lenses_type_resume_title::Tipo de lente:
mediumProgressives::Médios Progressivos
monofocalManufacture::Fabricação monofocal
monofocalorProgressive::Monofocal ou Progressiva
monofocalStock::Monofocal Stock
no::Não
not_go_to::Não Avance
pack_curioso::Pacote Curioso
pack_flipante::Pacote FLiPANTE
pack_flipante_no_caja::Flipante (sem caixa)
pack_full::Pacote Full
pack_title::Pacotes
packs_resume_title::Pacote:
placeholder_text::Escreva aqui a sua resposta
pouch::Bolsa: coldre de clipe
press_enter::pressione <b>Enter ↵</b>
progressiveTop::Progressivas Top
reduction_resume_title::Redução:
resume::Resumo
review::Revisão
sale_stock::Estoque de venda
sending::Enviando...
sheath::Bainha
sold_data::Dados de venda
standard_clip::Clipe padrão
start::Começar
sumbit::Enviar
talc_of::Talco de:
temples::Hastes
temples_resume_title::Hastes:
temples_title::Hastes
there_was_a_problem::Houve um problema
title_final_form::Já preencheu o formulário para molduras e acessórios!    ! Lembre-se de que, no caso de a FLiPO fabricar as lentes, o formulário das lentes ainda está pendente.
title_insert_data_customer::Introduzir dados do cliente
title_isFLiPO::O suporte vendido foi FLiPO?
titleFileBlock::Carregar o ficheiro Excel da licenciatura
type_of_treatment::Que tipo de tratamento é?
will_FLiPO_make_lenses::Quem se encarregará das lentes?
yes::Sim
total_value::Valor total
comment_payment::Qualquer detalhe que não esteja contemplado nas perguntas anteriores, ou se o cliente escolheu adicionar produtos, poderão detalhá-los aqui:
out_of_stock::Esgotado
has_financing::O cliente solicitou financiamento?
financing::Financiamento
yes_formPage::Sim
no_formPage::Não
global::*** global ***
spain::Espanha
portugal::Portugal
england::Inglaterra
copyright::Todos os direitos reservados
address::Endereço
active::Ativo
inactive::Inativo
back_dashboard::Voltar para o Início
status_todo::Pendente
status_to_pay::A pagar
status_not_assist::Não compareceu
status_assist::Compareceu
status_notify_not_assist::Cancelado pelo cliente
status_paid::Pago
status_wrong_team::Erro interno
status_not_buy::Não comprou
status_optician_rescheduled::Reagendado pelo Óptico
status_sell_stock::Stock de venda
back_to::Volver a
back::Voltar
optic::Óptica
for_see::Para ver...
italy::Itália
homePage::*** homePage ***
appointments::Agendamentos
conversion::Taxa de Conversão
globalStats::Estatísticas globais
lastMonth::Últimos 30 dias
opticName::Nome da Ótica
opticSearch::Pesquisa de Óptica
sales::Vendas
lensesFormPage::*** lensesFormPage ***
addendum::Adenda
aisle::Aisle
axis::Eixo
base::Base
corto::Curto
cylinder::Cilindro
gretting_lenses::Formulário de pedido de encomenda de lentes
info_esc_form_lenses_1::Lembre-se que, ao pressionar a tecla
info_esc_form_lenses_2::pode visualizar o resumo do formulário.
largo::Longo
left_eye_graduation_title_1::Olho Esquerdo
left_eye_offset::Desvio do olho esquerdo (mm)
maximum_distance::Distância máxima (cm)
medio::Médio
mounting_dimensions::Dimensões de montagem
od_DNP::DNP Olho direito
od_height::Altura do olho direito
oi_DNP::DNP Olho Esquerdo
oi_height::Altura do olho esquerdo
prism_axis::Eixo do prisma
prism_value::Valor do prisma
progressive_top_range::Gama superior progressiva
right_eye_graduation_title_1::Olho Direito
right_eye_offset::Desvio do olho direito (mm)
size::Tamanho
sphere::Esfera
loginPage::*** loginPage ***
checkCredentials::Credenciais inválidas. Verifique-as.
invalidCredentials::Credenciais inválidas
loginButton::Entrar
loginWelcome::Bem-vind@!
typeCredentials::Digite as suas credenciais
yourPassword::A sua senha
yourUsername::O seu nome de usuário
odooStates::*** odooStates ***
basics::Basics
choose_reason::Escolha um motivo
docs::Documentação
models::Modelos
my_optics::Minha Optica
next_time::Próxima vez
other::Outros
pricing::Preços
product::Produto
reason::Motivo
state_order_assigned::erro
state_order_cancel::erro
state_order_confirmed::erro
state_order_done::erro
state_order_draft::erro
state_order_for_prepare::Ordem para preparar
state_order_prepared::Pedido preparado - Aguardando lentes
state_order_preparing::Pedido em preparação
state_order_sended::Pedido enviado
state_order_total_prepared::Pedido preparado
state_order_waiting::erro
opticPage::*** opticPage ***
<25::Menor a 25
>45::Maior do que 45
25<X<45::Entre 25 e 45
admin_users_active::Ativo
admin_users_create::Criar usuário
admin_users_delete_confirm::Deseja excluir este usuário?
admin_users_edit::Editar usuário
admin_users_name::Nome
admin_users_optics::Ópticas
admin_users_optics_select::Selecione seu(s) oftalmologista(s)
admin_users_optics_suggested::Óptica sugerida
admin_users_password::Senha
admin_users_phone::Telefone
admin_users_roles::Funções
admin_users_roles_select::Selecione a função
admin_users_username::Nome de usuário
admin_zone::Zona Admin
age::Idade
agenda::Agenda
analytics::Análise
appointment_comment::Cotar comentários
appointments_filter::Filtrar agendamentos por status:
appointments_filter_info::Pode filtrar os agendamentos por status e criar bloqueios de tempo
appointments_states::Estados dos Agendamentos
change_status_wrong::Alterar o estatuto no caso de ter cometido um erro
client_from::Cliente de
comment_appointment::Citação comentada.
comment_appointment_any::A citação foi comentada.
commenting_appointment_of ::Comentando a nomeação de:
conversion_graph::Gráfico de Conversão de Agendamentos
conversion_graph_converted::Convertidos
conversion_graph_failed::Falhados
conversion_graph_rate_short::Conversão
conversion_graph_total::Total
conversion_graph_unit::Taxa de Conversão
country::País
create_appointment::Criar marcação
create_block::Criar Bloqueio de Horário
create_block_full::É o dia todo?
create_customer::Criar cliente
created_appointment::A nomeação foi criada
created_user::Usuário criado
customer_code::Código do cliente
customer_created::Cliente criado
dashboard::Início
data_not_buy::Mencionar a compra Não
day::Dia
delete::Excluir
delete_block::Deseja excluir este Bloqueio?
edit::Editar
editing_appointment_of::Editar nomeação por:
email::Email
end_date::Termina
fill_form::Completar
fill_form_lenses_now::Quer preencher o formulário da lente agora?
fill_now::Preencher agora
form_create_block_full::É durante o dia todo?
form_end_date::Data de término
form_filter::Filtro
form_for_fill::Formulário para preencher
form_lenses_for_fill::Formulário de lentes para preencher
form_reset::Reset
form_sell_stock::Formulário de venda de existências
form_start_date::Data de início
get_support::Obtenha ajuda pelo WhatsApp
has_assisted::Assistiu.
has_bought::Comprou
has_not_assisted::Não compareceu
has_not_bought::Não comprou
has_not_payed::Não pagou
has_payed::Pagou.
home::Início
information::Informação
is_assisted::Já participou?
is_buy::Já compraste?
is_flipo_client::Você é cliente Flipo?
later::Mais tarde
lenses_type_select::Formatura personalizada
logout::Sair
maps::Ver no Maps
modified_user::Usuário modificado
month::Mês
next::Próximo
no_spaces::Não pode haver espaços
notFound::Não encontrado
num_appointment::Num. Marcação
num_order::Num. Ordem
optic_history::Ópticas Visitadas
optic_history_action::Mostrar
payments::Pagamentos
pending_form::Agendamentos com formulário pendente
pending_lenses_form::Forma da lente pendente
phone_number::Número de telefone
post_code::Código postal
prev::Anterior
privacy::Política de Privacidade
reason_for_not_purchasing::Motivo para não comprar
remember_fill_lenses_form::Não se esqueça de preencher o formulário da lente
required::Obrigatório
restore_appointment::Clique para mudar para Pendente
restore_appointment_todo::A marcação foi assinalada como pendente
save::Salvar
search_customer::Pesquisar Cliente
select_age::Selecione a idade
select_customer::Selecionar o cliente
start_date::Inicia o
state::Estado
there_can_be_no_gaps::Não pode haver lacunas
this_month::Este mês
this_week::Esta semana
title_modal_remember_fill_form::Não se esqueça de preencher os formulários que tem pendentes!
today::Hoje
total_appointments::Total de Citas
unsold_appointment_panel_toggle::Comentários
unsold_appointment_panel_toggle_error::Só pode utilizar esta função se a marcação não tiver resultado numa venda.
unsold_appointment_panel_toggle_info::Preencher informações sobre esta marcação que não resultou numa venda.
update_appointment::A marcação foi actualizada
update_appointment_any::The quote has been updated.
update_appointment_canceled::A marcação foi cancelada
update_appointment_confirmed::A marcação foi confirmada
update_appointment_error::Esta marcação já não é modificável
update_appointment_not_buy::A marcação foi assinalada como Não paga
update_appointment_payed::A marcação foi assinalada como paga
updatedLang::Atualizou o idioma do ERP.
updatedLangTo::Idioma alterado para
user_already_exists::O usuário já existe
user_last_name::Sobrenome
user_list::Lista de Usuários
view_orders::Ver encomendas
week::Semana
without_info_graduation::Não há informações sobre a graduação
workWeek::Semana de trabalho
form_title::Título do bloco (opcional)
gama_basica::Nível Básico
gama_media::Nível Médio
gama_elite::Nível Elite
gama_top::Nível Superior
blocked::Bloqueado
title_must_not_be_empty::O título não deve estar vazio
orderPage::*** orderPage ***
accessories::Acessórios
accessory::Acessório
advanced_filters::Filtros avançados
all_elems::Todos
antireflective::Antirreflexo
appointment::Nomeação
appointment_date::Comentários sobre a marcação de consultas
are_you_want_fill_lenses_form::Quer preencher o formulário da lente agora?
at::em
back_orders::Voltar aos pedidos
behindhand::Atrás da mão
billed::facturado
called::Chamado
canceled::Cancelado
card::Cartão
cash::Dinheiro
category_monofocales::Monofocal
category_progresivas::Progressive
choose_property::Escolher uma propriedade
choose_value::Escolher um valor
clear_all::Limpar tudo
close_distance::Distância de fecho
coming_soon::Em breve
comment::Comentário
comment_of_optic::Comentário do ótico
confirmed::Confirmed
created_on::Criado em
cuppon::Cupão
date::Data
date_form::Data Formulário
date_order::Ordem de data
decenter::No centro
degree::Grau
delivered_customer::Delivered customer
delivered_local::Entregue localmente
details::Detalhes
error::Erro
eyes::Olhos
eyes_form_not_filled::O formulário Eyes ainda não foi preenchido
form_of::Fabrico
graduation::Gama superior
hall::Graduação
in_preparation::salão
last_30_days::últimos 30 dias
last_elems::Último
left::Esquerda
lens_form::Forma de Lente
lens_order::Ordem da lente
lens_provider::Lens Provider
lense::Lente
lense_form_with_id::Formulário de lente com ID
lense_order_with_id::Ordem de lente com ID
lenses::Lenses
lenses_type::Tipo de lente
lost::Gama média
monofocales::monofocais
more_late::Mais tarde
mount::Model
my_last_orders::As minhas últimas encomendas
name::Nome
new_order::Nova ordem
no_comment::Sem comentário
none::Nenhum
not_available::Não disponível
not_filled_yet::Ainda não preenchido
not_graduated::Não graduado
optic_added::Ótica adicionada
optic_select::Selecionar a sua ótica
order::Ordem
order_num::Num. Nota de entrega
order_of::Order of
order_status::Estado da encomenda
ordered_lenses::Ordered Lenses
paid::Pago
paid_with::Pago com
payment_page::Página de pagamento
payments_record::pagamentos em registo
pending::Pendente
pending_payment::Pendente de pago
progresivas::progressivo
phone::Telefone
price::Preço
processed::Proccessed
property::Propriedade
received::Recebido
recent_payments::Pagamentos recentes
reduction::Redução
refund_accepted::Refund Accepted
refund_rejected::Reembolso rejeitado
refund_requested::Reembolso solicitado
right::Right
search::Search
search_by::Pesquisar por
search_optics::Pesquisar ótica
select_date::Selecionar data
select_optic::Selecionar uma ótica
seller::Vendedor
sent::Enviado
showing::Showing
status::Estado
status_online::Pago em linha
status_optical_error::Falha por parte da Ótica
status_optical_rescheduling::Reprogramado por ótica
status_unknown::Desconhecido
talc::Talc
total_paid::Total pago
total_spent::Total gasto
treatment::Tratamento
type_word::Tipo
value::Valor
view_optic::Veja Óptica
view_order::Ver pedido
watchlist_added::está agora na sua lista de observação
watchlist_cleared_desc::A lista de observação foi limpa
watchlist_cleared_title::Lista de observação limpa
without_frame::Sem armação
paymentPage::*** paymentPage ***
add::Adicionar
add_device::Adicionar novo dispositivo
amount::Quantidade
amount_to_pay::Quantidade a pagar
available_tpv::TPV's disponível
choose_payment_type::Escolha o tipo de pagamento
complementary::Pagamento complementar
confirm::CONFIRMAR
confirmation::Confirmação
could_not_be_connected::Não foi possível conectar-se ao dispositivo
deposit::Pagamento e depósito
deposit_greater_than::O depósito deve ser maior que
device_version::Versão do dispositivo
enter_key::Insira a chave
failed_attempt::Tentativa falhou
full::Pagamento integral
n_serial::Nº série
order_details::Detalhes do pedido
payment_greater_than::O pagamento deve ser igual ou maior que
payment_type::Tipo de pagamento
perfect::Perfeito!
recommendations::RECOMENDAÇÕES
remaining_to_be_paid::Falta pagar
remember_that::the customer will have to pay when they come to pick up their order.
review_tpv::Verifique seu TPV para fazer o pagamento
transfer_failed::Falha na transferência!
call_issuer::O cartão foi recusado por um motivo desconhecido.
offline_pin_required::O cartão foi recusado porque exige um PIN
online_or_offline_pin_required::O cartão foi recusado porque exige um PIN
generic_decline::Seu cartão foi recusado
incorrect_pin::O PIN inserido está incorreto.
withdrawal_count_limit_exceeded::O cliente excedeu o saldo ou limite de crédito disponível no cartão
pin_try_exceeded::O número permitido de tentativas de PIN foi excedido
try_again::Tente novamente
with_card::Com cartão
with_cash::Com dinheiro
you_will_pay::Você vai pagar
transfer_success::Transferência concluída com sucesso
success::Sucesso
sidebar::*** sidebar ***
billing::Cobrança
block_by_country::Bloquear por País
orders::Ordens
transactions::Transações
billings::Faturas
tpvInstructions::*** tpvInstructions ***
instructions1::CERTIFIQUE-SE DE QUE A BATERIA DO TERMINAL ESTÁ CARREGADA.
instructions2::LIGUE O DISPOSITIVO.
instructions3::VÁ PARA AS CONFIGURAÇÕES DO TERMINAL, PARA ISSO VOCÊ DEVE DESLIZAR O DEDO DA BORDA ESQUERDA DA TELA PARA A DIREITA, MOMENTO EM QUE UM PAINEL SE ABRIRÁ.
instructions4::EM SEGUIDA, VOCÊ DEVE SELECIONAR CONFIGURAÇÕES E INSERIR O SEGUINTE PIN: 07139. DIFERENTES OPÇÕES APARECERÃO. SELECIONE "REDE" E CONECTE-SE AO SEU WI-FI.
instructions5::APÓS CONECTAR O WI-FI, VOLTE AO MENU ANTERIOR E SELECIONE A OPÇÃO "GERAR UM CÓDIGO DE EMPARELHAMENTO". UMA CHAVE SERÁ GERADA QUE VOCÊ DEVERÁ INSERIR NA APLICAÇÃO.
instructions6::O LOCAL PARA INSERIR ESTE CÓDIGO ESTÁ NA JANELA SEGUINTE DO FORMULÁRIO "ADICIONAR NOVO DISPOSITIVO". UMA VEZ INSERIDO E CONECTADO CORRETAMENTE, ELE APARECERÁ EM "TPV'S DISPONÍVEIS".
instructions7::SELECIONE O TPV E FAÇA O PAGAMENTO.
instructions8::DESTA FORMA, O TPV FICA EMPARELHADO E ASSOCIADO À SUA ÓPTICA. NAS OPERAÇÕES SUCESSIVAS QUE REALIZAR, SÓ PRECISARÁ CONECTÁ-LO À SUA REDE WIFI.
userListPage::*** userListPage ***
form_age::Idade
form_email::Endereço eletrónico
form_is_flipo_client::É um cliente Flipo?
form_last_name::Apellidos
form_post_code::Código postal
form_select_age::Selecionar idade
form_users_name::Nome
form_users_phone::Telefone
user_exists::O cliente existe
user_not_exists::Não existe nenhum cliente com este número de telefone
wizard::*** wizard ***
wizard_reminder_1::Lembre-se de que quando premir o botão
wizard_ESC::ESC
wizard_reminder_3::pode ver o resumo dos passos,
wizard_reminder_4::clips
wizard_reminder_5::e
wizard_reminder_6::packs
wizard_reminder_7::trasporta
wizard_reminder_8::seleccionado
newSystemOrder::*** newSystemOrder ***
cardOrdersSettings::*** cardOrdersSettings ***
cos_list_tab_1::Selecionar os produtos
cos_list_tab_2::Selecionar as opções
cos_list_tab_3::Resumo e promoções
coic_title_1::Por favor, adicione os produtos a serem solicitados:
coic_title_2::Aqui poderá adicionar os produtos para completar a sua encomenda à FLiPO
coic_description_1::Os packs de sempre: Curioso, Full, Flipante
coic_description_2::Compre acessórios individualmente, não associados a Packs
c_title_pack::Packs
c_title_accessories::Acessórios Individuais
c_title_notFLIPO::Venda Não FLiPO
c_desc_pack::Os packs de sempre: Curioso, Full, Flipante
c_desc_accessories::Compre acessórios individualmente, não associados a Packs
c_desc_notFLIPO::Registe aqui as vendas que não sejam de produtos FLiPO.
orderSystem::*** orderSystem ***
c_customer_info_title::Informações sobre a consulta:
c_order_resume_title::Resumo dos produtos nesta encomenda
b_order_resume_title::Adicionar mais produtos
b_order_resume_continue_title1::CONTINUAR
b_order_resume_continue_title2::PRONTO PARA PAGAR
c_promotions_title::Promoções aplicáveis para esta consulta:
c_title_order_list::A tua Encomenda
b_title_order_list::CONTINUAR
c_accessories_order_list_title1::Acessórios
c_accessories_order_list_title2::Acessórios Extra
c_order_item_title::Seleciona um produto para começar
c_order_item_subtitle::Personaliza os produtos a enviar na encomenda:
c_pack_details_title::Este Pack inclui:
list_flipante::Pacote FLiPANTE
list_full::Pacote FULL
list_curioso::Pacote Curioso
m_title_pack_additional::(Clip adicional 10 €)
list_temples::Varas
list_functional::Clipes Funcionais
list_packaging::Capas
list_design::Clipes de Design
repairation::Reparação
list_functional_design::Clip Funcional de Design
m_not_flipo::Não Disponível para Tipo Venda Stock
b_not_flipo::CONTINUAR
c_type_lens_exist::Esta secção não pode ser alterada numa encomenda existente.
c_form_lens_title::Formulário de lentes
c_from_lens_q1::Quem se encarregará das lentes?
c_from_lens_q2::Tipo de Lente
c_from_lens_q3::Tratamento
c_from_lens_q4::Redução do Tratamento
c_lens_options1::Monofocal Stock
c_lens_options2::Monofocais Fabrico
c_lens_options3::Monofocal de Suporte
c_lens_options4::Progressivas Básica
c_lens_options5::Progressivas Média
c_lens_options6::Progressivas Elite
c_lens_options7::Progressivas Top
c_lens_options8::Ocupacionais
c_lens_seller_option1::Ótico Associado
c_lens_seller_option2::FLiPO
c_lens_seller_option3::Nenhum
c_anti_reflective::Antirreflexo
c_anti_reflective_plus::Antirreflexo Plus
c_blue_control::Controlo Azul
c_promotions_step1::Promoções Aplicadas
c_promotions_step2::Promoções Aplicáveis
c_lens_type_advice1::Não há um pacote
b_resume_status_product::Completo
b_resume_status_product2::Incompleto
b_resume_status_product3::Obrigatório
b_status_product::Completado
b_status_product2::Incompleto
b_status_product3::Obrigatório
s_m_title1::Um (1) clip funcional
s_m_title2::clips funcionais
s_m_title3::ou um (1) clip de design
s_m_title4::ou
s_m_title5::ou
s_m_title6::clips de design (à escolha) + varas a combinar
s_m_title7::Um (1) conjunto de varas
m_number_1::Um (1)
m_number_2::Dois (2)
m_number_3::Três (3)
m_number_4::Quatro (4)
m_number_5::Cinco (5)
m_number_6::Seis (6)
m_number_7::Sete (7)
m_number_8::Oito (8)
m_number_9::Nove (9)
m_number_10::Dez (10)
m_number_11::Onze (11)
m_number_12::Doze (12)
m_number_13::Treze (13)
m_number_14::Catorze (14)
m_number_15::Quinze (15)
m_number_16::Dezasseis (16)
m_number_17::Dezassete (17)
m_number_18::Dezoito (18)
m_number_19::Dezanove (19)
m_number_20::Vinte (20)
m_menu_type_lens::Tipo de Lentes
m_menu_type_frame::Tipo de Armação
m_menu_type_functional::Acessório Funcional
m_menu_type_design::Clip de Design
m_menu_type_temples::Varas
m_menu_type_packaging::Embalagem
codigo_descuento_tarjeta_regalo::*** codigo_descuento_tarjeta_regalo ***
i_h_cupon::Código de desconto ou cartão de oferta
b_application_promotion::Aplicar
b_delete_promotion::Eliminar
b_add_promotion::Aplicar
m_title_list::LISTA DE ENCOMENDAS
sm_title_list::Cliente
m_column_billing_list::PRODUTO
m_column_billing_list2::QUANTIDADE
m_column_billing_list3::Total
m_title_aditional::Acessórios adicionais (promoções)
m_title_subtotal::Subtotal
m_title_disc::Desconto
b_title_back_list::Configurar
b_title_back_list2::Configurar Encomenda
b_title_back_list3::Continuar
b_title_back_list4::CONTINUAR
m_title_selection::A tua seleção
m_title_pack_selection::Pack selecionado
m_title_pack_selection2::Tipo de pack:
m_title_selection2::Armação:
m_title_selection3::Ainda não selecionado
m_title_selection4::Preço:
m_title_selection5::Tipo de lentes
m_title_selection6::Não configurado
m_title_selection7::Tratamento:
m_title_selection8::Não especificado:
m_title_selection9::Tratamento de redução:
m_title_selection10::Não se aplica
m_title_selection11::Acessórios do Pack
m_title_selection12::Nota:
m_title_selection13::Abaixo estão apenas os acessórios configurados para este pack.
m_title_selection14::SKU:
m_title_selection15_accesory::Acessório:
m_title_selection17::Tratamento:
m_title_selection18::Redução:
m_resume_submit_title::Resumo da encomenda
m_payment_title::Escolha um método de pagamento
c_payment_type_title::POS FLiPO
c_payment_type_subtitle::pagamento através do nosso POS
c_payment_type_subtitle2::pagamento em dinheiro
c_payment_type_subtitle3::DINHEIRO
c_payment_type_subtitle4::pagamento através do nosso POS
c_paymenet_input::PAGAMENTO EM DINHEIRO
c_paymenet_input2::TOTAL A PAGAR DOJO
c_amount_currency::Moeda
c_process_payment::Estamos a processar o seu pagamento
m_title_selection19::Tipo:
m_title_completed_selection20::O pacote está totalmente configurado e pronto.
m_title_completed_selection21::O pacote ainda não está totalmente configurado.
m_title_completed_selection22::Acessórios Adicionais
m_title_completed_selection23::Acessórios Selecionados
m_title_selection24::Promoção:
m_title_selection25::Armação:
m_title_selection26::Nenhuma armação selecionada
m_title_selection27::Importante:
m_title_selection28::Depois de confirmar este pedido, não poderá ser modificado. O pedido será criado e processado imediatamente.
m_title_selection29::Preço Total:
m_title_selection30::Confirmar Pedido
m_title_selection31::Cancelar
m_title_selection32::Confirmar
m_type_no_frame::Por favor selecione um tipo de armação
new_form_eye::*** new_form_eye ***
c_form_eye_title::Formulário dos Olhos
m_form_eye::Esfera
m_form_eye2::Cilindro
m_form_eye3::Eixo
m_form_eye4::Adição
m_form_eye5::Eixo do Prisma
m_form_eye6::Valor do Prisma
m_form_eye7::Centragem da Armação/Cliente
m_form_eye8::CORREDORES DISPONÍVEIS PARA GAMA PROGRESSIVA
m_form_eye9::Corredor
m_form_eye10::Curto
m_form_eye11::Longo
m_form_eye12::DADOS ADICIONAIS PARA GAMA PROGRESSIVA TOP (OPCIONAL)
m_form_eye13::Enviar
m_form_eye14::DNP
m_form_eye15::Altura
m_form_eye16::Sem prisma
m_form_eye17::Valor do Prisma
m_form_eye18::Descentralização
m_form_eye19::Distância Máxima (cm)
m_form_eye20::Comentários adicionais sobre a graduação
m_form_eye21::Detalhes da Graduação
m_form_eye22::Guia de Remessa:
m_form_eye23::Esfera:
m_form_eye24::Eixo do Prisma:
m_form_eye25::Valor do Eixo:
m_form_eye26::Corredor: Curto
m_form_eye27::Corredor: Longo
m_form_eye_title::Formulário de pedido de lentes:
m_error_stock_title::Desculpa
m_error_stock_subtitle::Estamos a ter problemas, tente mais tarde
t_clip_additional::Acessório adicional
REMINDER_TITLE::Lembre-se que
REMINDER_MESSAGE::Precisamos que completes o formulário de graduação das lentes para podermos preparar o teu pedido. Gostarias de fazê-lo agora?
YES_BUTTON::SIM
NO_BUTTON::NÃO
m_acdemy_title::Tutoriais da Academia ERP
m_acdemy_subtitle::Tutoriais FLiPO
m_acdemy_title_card1::Tutorial Softr para Iniciantes
m_acdemy_desc_card2::O Softr é uma das principais ferramentas para criar aplicações internas e portais para a sua empresa ou organização utilizando os seus dados de Airtable, Google Sheets, SmartSuite e outras fontes de dados populares.
m_acdemy_title_card2::Tabelas Google Sheets
m_new_table_order_s1::Número de Encomenda
m_new_table_order_s2::Nome do Cliente
m_new_table_order_s3::Remover Filtros
m_new_table_order_c1::Nº. Nota
m_new_table_order_c2::Cliente
m_new_table_order_c3::Criação
m_new_table_order_c4::Último Pagamento
m_new_table_order_c5::Pago
m_new_table_order_c6::Preço Total
m_new_table_order_c7::Graduação
m_new_table_order_c8::Pedido
m_new_table_order_c9::Pagamento
m_new_payment_dojo_1::Tempo restante:
m_new_payment_dojo_2::segundos
m_new_payment_dojo_3::É A ASSINATURA CORRETA?
m_new_payment_dojo_4::REJEITADO
m_new_payment_dojo_5::INSERÇÃO DO PIN
m_new_payment_dojo_6::Estamos com problemas para processar a resposta do pagamento.
m_new_payment_dojo_7::Erro de comunicação com o terminal. Por favor, verifique se a transação foi concluída. POR FAVOR CONTACTE O SEU GESTOR FLIPO
m_new_payment_dojo_8::CONTINUAR
m_new_payment_dojo_9::TPV não disponível
m_new_payment_dojo_10::Tente novamente em 10 segundos ou verifique a tela e os cabos do terminal. Se o problema persistir, contacte o suporte.
m_new_payment_dojo_11::Erro de conexão com o terminal
m_new_payment_dojo_12::O pagamento foi registrado corretamente?
m_new_payment_dojo_13::ESTAMOS INICIANDO O PAGAMENTO
CALENDAR::CALENDÁRIO
ORDERS::ENCOMENDAS
APPOINTMENT::COMPROMISSO
modal_additional_accessory_title::Acessório adicional
modal_additional_accessory_question::Deseja adicionar um acessório adicional ao pack por 10 euros?
modal_additional_accessory_description::Melhore o seu pack adicionando um acessório adicional por apenas 10 euros.
product_list_packs_new_frames::Nova coleção
product_list_packs_old_frames::Martin e Memphis
tour_b_1::Ant
tour_b_2::Seg
tour_c_title_1::Progresso da Sua Encomenda
tour_c_subtitle_1::Este cabeçalho mostra como está o andamento da sua encomenda. Tem um total de três etapas que deves completar.
tour_c_title_2::Lista de Packs
tour_c_subtitle_2::Esta secção apresenta uma lista de cartões de produtos na categoria
tour_c_subtitle_2_2::Packs
tour_c_subtitle_2_3::. Podes clicar no cartão dos Packs para obter mais detalhes.
tour_c_title_3::Venda 'NOT FLIPO'
tour_c_subtitle_3::Esta secção é destinada exclusivamente ao registo de vendas que não pertencem a
tour_c_subtitle_3_1::FLIPO
tour_c_subtitle_3_2::. Por favor, utilize esta área para vendas que não estejam relacionadas com os nossos produtos padrão.
product_cards_accessories_title::Lista de Acessórios
product_cards_accessories_subtitle_1::Esta secção apresenta uma lista de cartões de produtos na categoria
product_cards_accessories_highlight::Acessórios
product_cards_accessories_subtitle_2::Podes clicar no cartão de Packs para obter mais detalhes.
product_list_title::Lista de Produtos Selecionados
product_list_subtitle_1::Este cartão mostra uma lista de produtos em que os itens que escolheres das categorias
product_list_highlight_1::Acessórios
product_list_highlight_2::Packs
product_list_subtitle_2::serão refletidos aqui.
product_list_actions::Poderás: Eliminar, Adicionar e ver a quantidade de cada um.
continue_button_title::Botão "Continuar"
continue_button_subtitle::O botão "Continuar" será ativado assim que adicionares algo à tua encomenda. Podes usar este botão para avançar para a próxima etapa do teu pedido e continuar com o processo de compra.
order_summary_title::Resumo da tua encomenda
order_summary_subtitle_1::Este cartão apresenta um resumo da tua encomenda. Ao lado de cada produto, há uma
order_summary_label::etiqueta
order_summary_subtitle_2::que indica o estado do produto: "obrigatório", "não concluído" ou "concluído". Isto ajuda-te a identificar facilmente quais itens precisas finalizar antes de concluires a tua encomenda.
customization_section_title::Secção de Personalização
customization_section_subtitle_1::Esta secção permite-te personalizar completamente o teu produto, incluindo:
customization_section_highlight_1::Tipo de Lentes
customization_section_highlight_2::Tipo de Armação
customization_section_highlight_3::Acessório Funcional
customization_section_highlight_4::Clip de Design
customization_section_highlight_5::hastes
customization_section_subtitle_2::. Cada opção mostra o seu estado de "obrigatório", "não concluído" ou "concluído", para que possas acompanhar o progresso da tua personalização.
client_info_card_title::Cartão de Informação do Cliente
client_info_card_subtitle_1::Este cartão fornece informações sobre o cliente associado à consulta. Inclui detalhes como a data da consulta, o tipo de cliente (seja
client_info_card_highlight_1::FLIPO
client_info_card_highlight_2::ÓPTICA
client_info_card_subtitle_2::), e as promoções aplicáveis a este cliente. Isto ajuda a teres uma visão clara das preferências e benefícios do cliente para a consulta.
product_configuration_card_title::Cartão de Configuração do Produto
product_configuration_card_subtitle_1::Este cartão exibe todas as opções necessárias para configurar o produto, que podem variar conforme os diferentes tipos. Podes selecionar diferentes características e acessórios para personalizar o teu produto conforme as tuas necessidades específicas.
product_configuration_panel_title::Painel de Configuração de Acessórios
product_configuration_panel_subtitle_1::Este painel permite ajustar as configurações dos acessórios selecionados de maneira personalizada. Aqui, poderás visualizar claramente as opções disponíveis e definir a quantidade máxima que podes adicionar à tua seleção, garantindo que obtenhas a configuração exata de que precisas.
product_configuration_panel_strong::Clica no painel para descobrir mais detalhes e opções.
product_personalize_panel_title::Painel de Configuração de Acessórios
product_personalize_panel_subtitle_1::Este painel oferece duas funções principais:
product_personalize_function_1::1. Botões "+" e "-" que permitem aumentar ou diminuir a quantidade do mesmo produto.
product_personalize_function_2::2. Um botão "Personalizar" que permite modificar o produto selecionado de acordo com as tuas preferências.
customize_button::Personalizar
title_select_combination::Escolha a sua combinação
close_button::Fechar
without_stock::Sem stock
Scroll_to_see_more_products::Deslize para ver mais produtos
order_comment_placeholder::Adicione um comentário à sua encomenda
order_comment_label::Comentário da encomenda
payment_less_than_remaining::Pagamento Inferior ao Restante
actions_table_orders_billing::Ações
to_mark_as_billing::Marcar como faturado
enter_billin_number::Introduza o número de faturação
billing_number::Número de faturação
enter_billing_number_placeholder::Introduza o número de faturação
cancel_billing::Cancelar faturação
Accept_billing::Aceitar faturação
processing_please_wait::A processar, por favor aguarde
order_marked_as_billed::Ordem marcada como faturada
payment_issue::Lamentamos que tenha tido problemas ao pagar com o seu cartão. A seguir, oferecemos uma série de recomendações para evitar que esta situação se repita:
card_active::Verifique se o seu cartão está ativo e não expirou. Você pode verificar o status do seu cartão no seu banco ou no aplicativo móvel do seu banco.
check_details::Certifique-se de ter inserido corretamente os dados do seu cartão, como o número, a data de validade e o código de segurança. Verifique se não há espaços ou caracteres especiais entre os números.
check_balance::Certifique-se de que tem saldo suficiente na sua conta para efetuar o pagamento. Se o seu cartão tem um limite de crédito, verifique se não o ultrapassou.
sms_verification::Se o seu cartão tem a opção de pagamento seguro ou verificação por SMS, certifique-se de que tem cobertura e de que recebe o código de confirmação no seu telemóvel. Insira o código dentro do prazo indicado e não o partilhe com ninguém.
blocked_card::Se fez várias tentativas de pagamento falhadas, é possível que o seu cartão tenha sido temporariamente bloqueado por razões de segurança. Nesse caso, contacte o seu banco para desbloqueá-lo e poder utilizá-lo novamente.
alternate_payment::Se o problema persistir, pode tentar pagar com outro cartão ou com outro método de pagamento disponível no nosso site. Também pode contactar o nosso serviço de apoio ao cliente para o ajudar a resolver qualquer dúvida ou incidente.
try_again_message::Tente novamente
transaction_cancelled::Transação cancelada
transaction_declined::Transação recusada
m_not_flipo_mudle_alert::Termina de configurar os dados
add_clip_modal_title::Adicionar Clipe Adicional
add_clip_modal_description::Você pode adicionar um clipe adicional ao seu pedido por
add_clip_modal_price::10 euros.
add_clip_modal_add_button::Clique em "Adicionar ao Pedido" para confirmar.
completar_label::Completar
completado_label::Completado
no_aplica_label::Não Aplicável
OD::(OD)
OI::(OE)
D::D
I::E
confirm_all_data_lenses::Certifique-se de preencher todos os campos
m_order_pending_table::Você não tem pedidos pendentes
sphere_required_field::Campo obrigatório para esfera
sphere_value_field::Valor inválido para esfera
sphere_min_value::O valor mínimo é -20 para esfera
sphere_max_value::O valor máximo é 20 para esfera
sphere_multiple_of_025::O valor deve ser um múltiplo de 0.25 para esfera
cylinder_required_field::Campo obrigatório para cilindro
cylinder_value_field::O valor deve ser um número válido para cilindro
cylinder_min_value::O valor mínimo é -6 para cilindro
cylinder_max_value::O valor máximo é 6 para cilindro
axis_required_field::Campo obrigatório para eixo
axis_min_value::O valor mínimo é 0 para eixo
axis_max_value::O valor máximo é 180 para eixo
mounting_data_required_field::Campo obrigatório para dados de montagem
mounting_data_min_value::O valor mínimo é 20 para dados de montagem
mounting_data_max_value::O valor máximo é 45 para dados de montagem
height_data_required_field::Campo obrigatório para dados de altura
height_data_min_value::O valor mínimo é 10 para dados de altura
height_data_max_value::O valor máximo é 40 para dados de altura
firstName_required::Nome é obrigatório
lastName_required::Sobrenomes são obrigatórios
phoneNumber_required::Telefone é obrigatório
email_invalid::Email inválido
email_required::Email é obrigatório
400001::Hastes Carey
400002::Hastes Navy
400003::Hastes Rioja
400004::Hastes Amarelo Limão
400005::Hastes Rosa Pálido
400006::Hastes Verde Pistácio
400007::Hastes Lilás Verypery
400008::Hastes Iced Coffee
400009::Hastes Verde Olive
400010::Hastes Valentina
400011::Hastes Red Sunset
400012::Hastes White Polar
400013::Hastes Green Forest
400014::Hastes Mogno
400015::Hastes Zebra
400016::Hastes Hawaii
400017::Hastes Azul Mármore
400018::Hastes Puzzle
400019::Hastes Brunch Vibes
400020::Hastes Sailor
400021::Hastes Kenya
400022::Hastes Highlands
400023::Hastes Pretas
400024::Hastes Chocolate
400025::Hastes Red Passion
400026::Hastes Valparaíso
400027::Hastes Black Flowers
200001::Clip Original (Nilo) Solar Espelho Azul
200002::Clip Original (Nilo) Solar Preto
200003::Clip Original (Nilo) de Condução Noturna
200004::Clip Original (Nilo) Solar Espelho Laranja
200005::Clip Original (Nilo) de Proteção de Tela
200006::Clip Model C (Ivy) Solar Espelho Azul
200007::Clip Model C (Ivy) Solar Preto
200008::Clip Model C (Ivy) de Condução Noturna
200009::Clip Model C (Ivy) Solar Espelho Laranja
200010::Clip Model C (Ivy) de Proteção de Tela
200011::Clip Model A (Dante) Solar Espelho Azul
200012::Clip Model A (Dante) Solar Preto
200013::Clip Model A (Dante) de Condução Noturna
200014::Clip Model A (Dante) Solar Espelho Laranja
200015::Clip Model A (Dante) de Proteção de Tela
200016::Clip Model D (Siena) Solar Espelho Azul
200017::Clip Model D (Siena) Solar Preto
200018::Clip Model D (Siena) de Condução Noturna
200019::Clip Model D (Siena) Solar Espelho Laranja
200020::Clip Model D (Siena) de Proteção de Tela
0300014 + 0500011::Clip Original (Nilo) Solar Azul Degradê Polarizado
0300014 + 0500012::Clip Original (Nilo) Solar Marrom Degradê Polarizado
0300014 + 0500013::Clip Original (Nilo) Solar Vinho Degradê Polarizado
0300014 + 0500014::Clip Original (Nilo) Solar Cobre Reflexivo Polarizado
0300014 + 0500015::Clip Original (Nilo) Solar Fucsia Reflexivo Polarizado
0300014 + 0500016::Clip Original (Nilo) Solar Roxo Reflexivo Polarizado
0300014 + 0500017::Clip Original (Nilo) Solar Espelho Reflexivo Polarizado
0300014 + 0500018::Clip Original (Nilo) Solar Verde Reflexivo Polarizado
0300014 + 0500019::Clip Original (Nilo) Solar Azul Claro Polarizado
0300014 + 0500020::Clip Original (Nilo) Solar Lila Claro Polarizado
0300037 + 0500021::Clip Model C (Ivy) Solar Azul Degradê Polarizado
0300037 + 0500022::Clip Model C (Ivy) Solar Marrom Degradê Polarizado
0300037 + 0500023::Clip Model C (Ivy) Solar Vinho Degradê Polarizado
0300037 + 0500024::Clip Model C (Ivy) Solar Cobre Reflexivo Polarizado
0300037 + 0500025::Clip Model C (Ivy) Solar Fucsia Reflexivo Polarizado
0300037 + 0500026::Clip Model C (Ivy) Solar Roxo Reflexivo Polarizado
0300037 + 0500027::Clip Model C (Ivy) Solar Espelho Reflexivo Polarizado
0300037 + 0500028::Clip Model C (Ivy) Solar Verde Reflexivo Polarizado
0300037 + 0500029::Clip Model C (Ivy) Solar Azul Claro Polarizado
0300037 + 0500030::Clip Model C (Ivy) Solar Lila Claro Polarizado
0300060 + 0500031::Clip Model A (Dante) Solar Azul Degradê Polarizado
0300060 + 0500037::Clip Model A (Dante) Solar Marrom Degradê Polarizado
0300060 + 0500038::Clip Model A (Dante) Solar Vinho Degradê Polarizado
0300060 + 0500039::Clip Model A (Dante) Solar Cobre Reflexivo Polarizado
0300060 + 0500040::Clip Model A (Dante) Solar Fucsia Reflexivo Polarizado
0300060 + 0500041::Clip Model A (Dante) Solar Roxo Reflexivo Polarizado
0300060 + 0500042::Clip Model A (Dante) Solar Espelho Reflexivo Polarizado
0300060 + 0500043::Clip Model A (Dante) Solar Verde Reflexivo Polarizado
0300060 + 0500044::Clip Model A (Dante) Solar Azul Claro Polarizado
0300060 + 0500045::Clip Model A (Dante) Solar Lila Claro Polarizado
0300083 + 0500051::Clip Model D (Siena) Solar Azul Degradê Polarizado
0300083 + 0500052::Clip Model D (Siena) Solar Marrom Degradê Polarizado
0300083 + 0500053::Clip Model D (Siena) Solar Vinho Degradê Polarizado
0300083 + 0500054::Clip Model D (Siena) Solar Cobre Reflexivo Polarizado
0300083 + 0500055::Clip Model D (Siena) Solar Fucsia Reflexivo Polarizado
0300083 + 0500056::Clip Model D (Siena) Solar Roxo Reflexivo Polarizado
0300083 + 0500057::Clip Model D (Siena) Solar Espelho Reflexivo Polarizado
0300083 + 0500058::Clip Model D (Siena) Solar Verde Reflexivo Polarizado
0300083 + 0500059::Clip Model D (Siena) Solar Azul Claro Polarizado
0300083 + 0500060::Clip Model D (Siena) Solar Lila Claro Polarizado
300001::Clip Original (Nilo) Carey
300002::Clip Original (Nilo) Navy
300003::Clip Original (Nilo) Rioja
300004::Clip Original (Nilo) Amarelo Limão
300005::Clip Original (Nilo) Rosa Pálido
300006::Clip Original (Nilo) Verde Pistácio
300007::Clip Original (Nilo) Lilás Verypery
300008::Clip Original (Nilo) Iced Coffee
300009::Clip Original (Nilo) Verde Olive
300010::Clip Original (Nilo) Valentina
300011::Clip Original (Nilo) Red Sunset
300012::Clip Original (Nilo) White Polar
300013::Clip Original (Nilo) Green Forest
300014::Clip Original (Nilo) Base Preta
300015::Clip Original (Nilo) Mogno
300016::Clip Original (Nilo) Zebra
300017::Clip Original (Nilo) Hawaii
300018::Clip Original (Nilo) Azul Mármore
300019::Clip Original (Nilo) Puzzle
300020::Clip Original (Nilo) Brunch Vibes
300021::Clip Original (Nilo) Sailor
300022::Clip Original (Nilo) Kenya
300023::Clip Original (Nilo) Highlands
300024::Clip Model C (Ivy) Carey
300025::Clip Model C (Ivy) Navy
300026::Clip Model C (Ivy) Rioja
300027::Clip Model C (Ivy) Amarelo Limão
300028::Clip Model C (Ivy) Rosa Pálido
300029::Clip Model C (Ivy) Verde Pistácio
300030::Clip Model C (Ivy) Lilás Verypery
300031::Clip Model C (Ivy) Iced Coffee
300032::Clip Model C (Ivy) Verde Olive
300033::Clip Model C (Ivy) Valentina
300034::Clip Model C (Ivy) Red Sunset
300035::Clip Model C (Ivy) White Polar
300036::Clip Model C (Ivy) Green Forest
300037::Clip Model C (Ivy) Base Preta
300038::Clip Model C (Ivy) Mogno
300039::Clip Model C (Ivy) Zebra
300040::Clip Model C (Ivy) Hawaii
300041::Clip Model C (Ivy) Azul Mármore
300042::Clip Model C (Ivy) Puzzle
300043::Clip Model C (Ivy) Brunch Vibes
300044::Clip Model C (Ivy) Sailor
300045::Clip Model C (Ivy) Kenya
300046::Clip Model C (Ivy) Highlands
300047::Clip Model A (Dante) Carey
300048::Clip Model A (Dante) Navy
300049::Clip Model A (Dante) Rioja
300050::Clip Model A (Dante) Amarelo Limão
300051::Clip Model A (Dante) Rosa Pálido
300052::Clip Model A (Dante) Verde Pistácio
300053::Clip Model A (Dante) Lilás Verypery
300054::Clip Model A (Dante) Iced Coffee
300055::Clip Model A (Dante) Verde Olive
300056::Clip Model A (Dante) Valentina
300057::Clip Model A (Dante) Red Sunset
300058::Clip Model A (Dante) White Polar
300059::Clip Model A (Dante) Green Forest
300060::Clip Model A (Dante) Base Preta
300061::Clip Model A (Dante) Mogno
300062::Clip Model A (Dante) Zebra
300063::Clip Model A (Dante) Hawaii
300064::Clip Model A (Dante) Azul Mármore
300065::Clip Model A (Dante) Puzzle
300066::Clip Model A (Dante) Brunch Vibes
300067::Clip Model A (Dante) Sailor
300068::Clip Model A (Dante) Kenya
300069::Clip Model A (Dante) Highlands
300070::Clip Model D (Siena) Carey
300071::Clip Model D (Siena) Navy
300072::Clip Model D (Siena) Rioja
300073::Clip Model D (Siena) Amarelo Limão
300074::Clip Model D (Siena) Rosa Pálido
300075::Clip Model D (Siena) Verde Pistácio
300076::Clip Model D (Siena) Lilás Verypery
300077::Clip Model D (Siena) Iced Coffee
300078::Clip Model D (Siena) Verde Olive
300079::Clip Model D (Siena) Valentina
300080::Clip Model D (Siena) Red Sunset
300081::Clip Model D (Siena) White Polar
300082::Clip Model D (Siena) Green Forest
300083::Clip Model D (Siena) Base Preta
300084::Clip Model D (Siena) Mogno
300085::Clip Model D (Siena) Zebra
300086::Clip Model D (Siena) Hawaii
300087::Clip Model D (Siena) Azul Mármore
300088::Clip Model D (Siena) Puzzle
300089::Clip Model D (Siena) Brunch Vibes
300090::Clip Model D (Siena) Sailor
300091::Clip Model D (Siena) Kenya
300092::Clip Model D (Siena) Highlands
300093::Clip Original (Nilo) Chocolate
300094::Clip Original (Nilo) Red Passion
300095::Clip Original (Nilo) Valparaíso
300096::Clip Original (Nilo) Black Flowers
300097::Clip Model C (Ivy) Chocolate
300098::Clip Model C (Ivy) Red Passion
300099::Clip Model C (Ivy) Valparaíso
300100::Clip Model C (Ivy) Black Flowers
300101::Clip Model A (Dante) Chocolate
300102::Clip Model A (Dante) Red Passion
300103::Clip Model A (Dante) Valparaíso
300104::Clip Model A (Dante) Black Flowers
300105::Clip Model D (Siena) Chocolate
300106::Clip Model D (Siena) Red Passion
300107::Clip Model D (Siena) Valparaíso
300108::Clip Model D (Siena) Black Flowers
100001::Armação Original (Nilo) Preta
100002::Armação Original (Nilo) Clara
100003::Armação Modelo C (Ivy) Preta
100004::Armação Modelo C (Ivy) Clara
100005::Armação Modelo A (Dante) Preta
100006::Armação Modelo A (Dante) Clara
100007::Armação Modelo D (Siena) Preta
100008::Armação Modelo D (Siena) Clara
`;

export default pt;
