const en = `
billingPage::*** billingPage ***
amount_payed::Amount paid
last_payment_date::Last payment date
order_completed::ORDERS COMPLETED
order_date::Delivery note date
orders_with_payments_not_do_it::ORDERS WITH PENDING PAYMENTS
pending_collection::Pending collection
selected_optic::Selected optics
subtitle_order_completed::Paid orders that are not in a transaction.
subtitle_orders_with_payments_not_do_it::List of orders with pending payment
total_price::Total price
title_block_by_country::Block hours by country
select_country::Select the country
end_date_must_be_after_start_date::The end date has to be longer than the initial date.
myCustomersSearch::Search my customers
customersSearch::Search Customers
customerSearch::Search Customers
search_customer::Search Customer
1CU-C17::Clip Martin Green Forest
1CU-C1P12::Clip Martin Kenya
1CU-C1P13::Clip Martin Highlands
1TU-C17::Varillas Green Forest
1TU-P12::Varillas Kenya
1TU-P13::Varillas Highlands
2CU-C17::Clip Memphis Green Forest
2CU-C1P12::Clip Memphis Kenya
2CU-C1P13::Clip Memphis Highlands
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
1CU-C1 + 1CU-DA::Martin Solar Black Base ClipBlue Gradient Polarized
1CU-C1 + 1CU-DC::Martin Light Blue Polarized Solar Clip
1CU-C1 + 1CU-DF::Martin Wine Polarized Gradient Solar Clip
1CU-C1 + 1CU-DL::Martin Solar Black Base Clip Light Lilac Polarized
1CU-C1 + 1CU-DM::Martin Brown Polarized Gradient Solar Clip
1CU-C1 + 1CU-EC::Martin Copper Reflective Polarized Solar Clip
1CU-C1 + 1CU-EL::Martin Purple Reflective Polarized Solar Clip
1CU-C1 + 1CU-EP::Martin Mirror Reflective Polarized Solar Clip
1CU-C1 + 1CU-ER::Martin fuchsia Reflective Polarized Solar Clip
1CU-C1 + 1CU-EV::Martin Green Reflective Polarized Solar Clip
1CU-C10::Martin Marpat Clip
1CU-C11::Martin Mustard Clip
1CU-C12::Martin Iced Coffee Clip
1CU-C13::Martin Oliver Clip
1CU-C14::Martin Valentina Clip
1CU-C15::Martin Red Sunset Clip
1CU-C16::Martin White Polar Clip
1CU-C1B::Martin Blue Solar Clip Polarized
1CU-C1BL::Martin Black Solar Clip Polarized
1CU-C1CN::Martin Night Driving Clip
1CU-C1O::Martin Orange Solar Clip Polarized
1CU-C1P1::Martin Mahogany Clip
1CU-C1P10::Martin Brunch Vibes Clip
1CU-C1P11::Martin Sailor Clip
1CU-C1P2::Martin Zebra Clip
1CU-C1P3::Martin Hawaii Clip
1CU-C1P4::Martin Polka Dots Clip
1CU-C1P5::Martin Marble Blue Clip
1CU-C1P6::Martin Puzzle Clip
1CU-C1P7::Martin Garlan Clip
1CU-C1P8::Martin Valery Clip
1CU-C1P9::Martin Velvet Clip
1CU-C1PP::Martin Screen Protection Clip
1CU-C2::Martin Carey Clip
1CU-C3::Martin Navy Clip
1CU-C4::Martin Rioja Clip
1CU-C5::Martin Lemon Yellow Clip
1CU-C6::Martin Soft Pink Clip
1CU-C7::Martin Pistachio Green Clip
1CU-C8::Martin Pale Purple VeryPery Clip
1CU-C9::Martin Carey Sea Clip
1TU-C10::Marpat Temples
1TU-C11::Mustard Temples
1TU-C12::Iced Coffee Temples
1TU-C13::Oliver Temples
1TU-C14::Valentina Temples
1TU-C15::Red Sunset Temples
1TU-C16::White Polar Temples
1TU-C1P4::Red Spots Temples
1TU-C2::Carey Temples
1TU-C3::Navy Temples
1TU-C4::Rioja Temples
1TU-C5::Lemon Yellow Temples
1TU-C6::Soft Pink Temples
1TU-C7::Pistachio Green Temples
1TU-C8::Pale Purple Verypery Temples
1TU-C9::Carey Sea Temples
1TU-P1::Mahogany Temples
1TU-P10::Brunch Vibes Temples
1TU-P11::Sailor Temples
1TU-P2::Zebra Temples
1TU-P3::Hawaii Temples
1TU-P4::Polka Dots Temples
1TU-P5::Marble Blue Temples
1TU-P6::Puzzle Temples
1TU-P7::Garlan Temples
1TU-P8::Valery Temples
1TU-P9::Velvet Temples
2CU-C1 + 2CU-DA::Black Base Clip Memphis Solar Blue Gradient Polarized
2CU-C1 + 2CU-DC::Memphis Light Blue Polarized Solar Clip
2CU-C1 + 2CU-DF::Memphis Wine Polarized Gradient Solar Clip
2CU-C1 + 2CU-DL::Black Base Clip Memphis Solar Light Lilac Polarized
2CU-C1 + 2CU-DM::Memphis Brown Polarized Gradient Solar Clip
2CU-C1 + 2CU-EC::Memphis Copper Reflective Polarized Solar Clip
2CU-C1 + 2CU-EL::Memphis Purple Reflective Polarized Solar Clip
2CU-C1 + 2CU-EP::Memphis Mirror Reflective Polarized Solar Clip
2CU-C1 + 2CU-ER::Memphis fuchsia Reflective Polarized Solar Clip
2CU-C1 + 2CU-EV::Memphis Green Reflective Polarized Solar Clip
2CU-C10::Memphis Marpat Clip
2CU-C11::Memphis Mustard Clip
2CU-C12::Memphis Iced Coffee Clip
2CU-C13::Memphis Oliver Clip
2CU-C14::Memphis Valentina Clip
2CU-C15::Memphis Red Sunset Clip
2CU-C16::Memphis White Polar Clip
2CU-C1B::Memphis Blue Solar Clip Polarized
2CU-C1BL::Memphis Black Solar Clip Polarized
2CU-C1CN::Memphis Night Driving Clip
2CU-C1O::Memphis Orange Solar Clip Polarized
2CU-C1P1::Memphis Mahogany Clip
2CU-C1P10::Memphis Brunch Vibes Clip
2CU-C1P11::Memphis Sailor Clip
2CU-C1P14::Memphis Valery Clip
2CU-C1P15::Memphis Velvet Clip
2CU-C1P2::Memphis Zebra Clip
2CU-C1P3::Memphis Hawaii Clip
2CU-C1P4::Memphis Polka dots Clip
2CU-C1P5::Memphis Marble Blue Clip
2CU-C1P6::Memphis Puzzle CLip
2CU-C1P7::Memphis Garlan Clip
2CU-C1P8::Memphis Valery Clip
2CU-C1P9::Memphis Velvet Clip
2CU-C1PP::Memphis Screen Protection Clip
2CU-C2::Memphis Carey Clip
2CU-C3::Memphis Navy Clip
2CU-C4::Memphis Rioja Clip
2CU-C5::Memphis Lemon Yellow Clip
2CU-C6::Memphis Soft Pink Clip
2CU-C7::Memphis Pistachio Green Clip
2CU-C8::Memphis Pale Purple VeryPery Clip
2CU-C9::Memphis Carey Sea Clip
accessories_design_title::Design Accessories
accessories_functional_title::Functional Accessories
anti_reflective::Anti-reflective
associated_optics::Associated Optician
basicProgressives::Basic Progressive
blue_control::Control Blue
choose_your_convination::Choose your combination:
CICU-01::Martin frame
CICU-02::Memphis frame
clips_resume_title::Clips:
cloth::Cloth: Microfiber Suede
comment_hint::<b>Shift ⇧ + Enter ↵</b> to make a line break
comment_optic::Comments
completed_form::Completed form
customize::Customize
description_clip_functional::Has the customer purchased the FIRST additional clip for XXX?
design::Design
dont_send_btn::Don't send
eliteProgressives::Elite Progressive
error_num_min::Enter a number greater than or equal to the number calculated based on the products entered
finalPage::End Page
flipo_client::FLiPO’s customer
frame_resume_title::Frame:
frame_title::Frames
functional::Funtional
go_to::Proceed
gretting::Dear
gretting_subtitle::Order form for
invoice_resume_title::Invoice:
invoicedToTheCustomer::Invoiced to Customer
lenses_type_resume_title::Lens type:
mediumProgressives::Medium Progressive
monofocalManufacture::Monofocal Manufactured
monofocalorProgressive::Monofocal or Progressive
monofocalStock::Monofocal Stock
no::No
not_go_to::Don’t proceed
pack_curioso::Curious Pack
pack_flipante::Amazing Pack
pack_flipante_no_caja::Amazing without box
pack_full::Pack Full
pack_title::Packs
packs_resume_title::Pack:
placeholder_text::Type your answer here
pouch::Pouch: Clip holster
press_enter::press <b>Enter ↵</b>
progressiveTop::Top Progressive
reduction_resume_title::Lens Reduction:
resume::Summary
review::Review
sale_stock::Sale Stock
sending::Sending...
sheath::Sheath
sold_data::Sale data
standard_clip::Standard Clip
start::Start
sumbit::Send
talc_of::Talc of:
temples::Temple
temples_resume_title::Temples:
temples_title::Temples
there_was_a_problem::There was a problem
title_final_form::You have completed the form for the frames and accessories     Remember, If Flipo provides the lenses, the lens form is pending
title_insert_data_customer::Enter the customer's details
title_isFLiPO::Have they purchased a FLiPO product
titleFileBlock::Upload the graduation excel file
type_of_treatment::What type of lens treatment?
will_FLiPO_make_lenses::Will FLiPO provide the lenses?
yes::Yes
total_value::Total value
comment_payment::If there are any details not covered in the previous questions, or the cliente have chosen more accessories, please add them in the comments below
out_of_stock::Out of stock
has_financing::Has the customer requested financing?
financing::Financing
yes_formPage::Yes
no_formPage::No
spain::Spain
portugal::Portugal
england::England
copyright::All rights reserved
address::Address
active::Active
inactive::Inactive
back_dashboard::Back to Dashboard
status_todo::To-Do
status_to_pay::To-Pay
status_not_assist::Not Attended
status_assist::Attended
status_notify_not_assist::Cancelled by client
status_paid::Paid
status_wrong_team::Internal mistake
status_not_buy::Didn't buy
status_optician_rescheduled::Rescheduled By Optician
status_sell_stock::Stock Sale
back_to::Back to
back::Back
optic::Optician
for_see::For see...
italy::Italy
appointments::Appointments
conversion::Conversion Rate
globalStats::Global Stats
lastMonth::Last 30 days
opticName::Optician’s Name
opticSearch::Optician Search
sales::Sales
addendum::Addendum
aisle::Corridor
axis::Shaft
base::Base
corto::Short
cylinder::Cylinder
gretting_lenses::Order lens form
info_esc_form_lenses_1::Remember that by pressing the
info_esc_form_lenses_2::key, you can view the summary of the form.
largo::Long
left_eye_graduation_title_1::Left Eye
left_eye_offset::Left Eye Offset (mm)
maximum_distance::Maximum Distance (cm)
medio::Medium
mounting_dimensions::Dimensions
od_DNP::DNP Right Eye
od_height::Height Right Eye
oi_DNP::DNP Left Eye
oi_height::Height Left Eye
prism_axis::Axis Prism
prism_value::Prism value
progressive_top_range::Progressive Top Range
right_eye_graduation_title_1::Right Eye
right_eye_offset::Right Eye Offset (mm)
size::Size
sphere::Sphere
checkCredentials::Invalid credentials. Check them.
invalidCredentials::Invalid credentials
loginButton::Connect
loginWelcome::Welcome!
typeCredentials::Introduce your credentials
yourPassword::Your password
yourUsername::Your user
basics::Basics
choose_reason::Choose a reason
docs::Documentation
models::Models
my_optics::My Optician
next_time::Next time
other::Other
pricing::Pricing
product::Product
reason::Reason
state_order_assigned::error
state_order_cancel::error
state_order_confirmed::error
state_order_done::error
state_order_draft::error
state_order_for_prepare::Order to prepare
state_order_prepared::Order prepared - waiting for lenses
state_order_preparing::Order in preparation
state_order_sended::Order sent
state_order_total_prepared::Order prepared
state_order_waiting::error
<25::Menor than 25
>45::Greater than 45
25<X<45::Between 25 and 45
admin_users_active::Active
admin_users_create::Create User
admin_users_delete_confirm::Do you want to delete this User?
admin_users_edit::Edit user
admin_users_name::Name
admin_users_optics::Optician
admin_users_optics_select::Select your optician(s)
admin_users_optics_suggested::Suggested opticians
admin_users_password::Password
admin_users_phone::Phone
admin_users_roles::Roles
admin_users_roles_select::Select the role
admin_users_username::Username
admin_zone::Admin Zone
age::Age
agenda::Agenda
analytics::Analytics
appointment_comment::Quote Comments
appointments_filter::Filter appointments by State:
appointments_filter_info::You can filter the appointments by state and create time blocks
appointments_states::Appointments States
change_status_wrong::Change status in case you made a mistake
client_from::Customer of
comment_appointment::Appointment Commented.
comment_appointment_any::This appointment has been commented
commenting_appointment_of ::Comentando Cita de:
conversion_graph::Appointments Conversion Graph
conversion_graph_converted::Converted
conversion_graph_failed::Failed
conversion_graph_rate_short::Conversion
conversion_graph_total::Total
conversion_graph_unit::Conversion rate
country::Country
create_appointment::Appointment created
create_block::Create Time Block
create_block_full::Is it all day long?
create_customer::Create client
created_appointment::The quote was created
created_user::User created
customer_code::Customer Code
customer_created::Client created
data_not_buy::Mention No purchase
day::Day
delete::Delete
delete_block::Do you want to remove this block?
edit::Edit
editing_appointment_of::Editing Appointment of:
email::Email
end_date::Ends
fill_form::Complete
fill_form_lenses_now::Do you want to fill in the lens form now?
fill_now::Fill now
form_create_block_full::Is it all day?
form_end_date::End Date
form_filter::Filter
form_for_fill::Form to fill out
form_lenses_for_fill::Lens form to fill out
form_reset::Restore
form_sell_stock::Stock SalesForm
form_start_date::Start Date
get_support::Get help on WhatsApp
has_assisted::Attended.
has_bought::Purchased
has_not_assisted::Not attended.
has_not_bought::Not purchased
has_not_payed::Not paid
has_payed::Paid.
home::Dashboard
information::Information
is_assisted::Have they attended?
is_buy::Have they purchased?
is_flipo_client::Are you a Flipo customer?
later::Later
lenses_type_select::Graduación hecha al cliente
logout::Logout
maps::Go to Maps
modified_user::Modified user
month::Month
myOptics::My Optics
next::Next
no_spaces::There can be no spaces
notFound::Not found
num_appointment::Appointment No.
num_order::Order No.
optic_history::Viewed Opticians
optic_history_action::Show
payments::Payments
pending_form::Appointments with pending form
pending_lenses_form::Pending lens form
phone_number::Phone Number
post_code::Postal Code
prev::Prev
privacy::Privacy policy
reason_for_not_purchasing::Reason for not purchasing
remember_fill_lenses_form::Reduction:
required::Required
restore_appointment::Click to edit the Appointment.
restore_appointment_todo::This appointment is now pending.
save::Save
select_age::Select the age
select_customer::Select the client
start_date::Starts
state::State
there_can_be_no_gaps::There can be no spaces
this_month::This month
this_week::This week
title_modal_remember_fill_form::Remember to fill in the pending form!
today::today
total_appointments::Total Appointments
unsold_appointment_panel_toggle::Comments
unsold_appointment_panel_toggle_error::You can only use this function if the Appointment did not result in a sale.
unsold_appointment_panel_toggle_info::Fill in information about this appointment without sale.
update_appointment::Appointment Updated.
update_appointment_any::This appointment has been updated.
update_appointment_canceled::This appointment has been cancelled.
update_appointment_confirmed::This appointment has been confirmed.
update_appointment_error::This appointment is no longer modifiable.
update_appointment_not_buy::This appointment has been set as not Payed.
update_appointment_payed::This appointment has been set as Payed.
updatedLang::You updated the language of the ERP.
updatedLangTo::Language changed to
user_already_exists::User already exists
user_last_name::Surnames
user_list::User List
view_orders::View Orders
week::Week
without_info_graduation::No graduation information
workWeek::Work Week
form_title::Block title (optional)
gama_basica::Basic Tier
gama_media::Medium Tier
gama_elite::Elite Tier
gama_top::Top Tier
blocked::Locked
title_must_not_be_empty::The title must not be empty
accessories::Accessories
accessory::Accessory
advanced_filters::Advanced Filters
all_elems::All
antireflective::Anti-reflective
appointment::Appointment
appointment_date::Comments of the Appointment
are_you_want_fill_lenses_form::Do you want to fill in the lens form now?
at::at
back_orders::Back to Orders
behindhand::Behind hand
billed::Billed
called::Called
canceled::Canceled
card::Card
cash::Cash
category_monofocales::Monofocal
category_progresivas::Progressive
choose_property::Choose a property
choose_value::Choose a value
clear_all::Clear All
close_distance::Close distance
coming_soon::Coming soon
comment::Comment
comment_of_optic::Optician’s Comment
confirmed::Confirmed
created_on::Created on
cuppon::Coupon
date::Date
date_form::Form date
date_order::Date order
decenter::Decenter
degree::Degree
delivered_customer::Delivered customer
delivered_local::Delivered local
details::Details
error::Error
eyes::Eyes
eyes_form_not_filled::Lenses form not filled yet
form_of::Form of
graduation::Graduation
hall::Hall
in_preparation::Being prepared
last_30_days::last 30 days
last_elems::Last
left::Left
lens_form::Lens form
lens_order::Lens Order
lens_provider::Lens Provider
lense::Lens
lense_form_with_id::Lens Form with ID
lense_order_with_id::Lens Order with ID
lenses::Lenses
lenses_type::Lenses type
lost::Lost
monofocales::monofocal
more_late::Later
mount::Frame
my_last_orders::My Last Orders
name::Name
new_order::New Order
no_comment::No comment
none::None
not_available::Not available
not_filled_yet::Not filled yet
not_graduated::Not graduated
optic_added::Optician Added
optic_select::Select your optician
order::Order
order_num::Num. Delivery note
order_of::Order of
order_status::Order Status
ordered_lenses::Lenses Ordered
paid::Paid
paid_with::Paid with
payment_page::Page Payment
payments_record::payments on record
pending::Pending
pending_payment::Pending Payment
progresivas::progressive
phone::Telephone number
price::Price
processed::Processed
property::Property
received::Received
recent_payments::Recent Payments
reduction::Reduction
refund_accepted::Refund Accepted
refund_rejected::Refund Rejected
refund_requested::Refund requested
right::Right
search::Search
search_by::Search by
search_optics::Search Optician
select_date::Select Date
select_optic::Select an Optician
seller::Seller
sent::Sent
showing::Showing
status::Status
status_online::Paid Online
status_optical_error::Failed by Optician
status_optical_rescheduling::Rescheduled by Optician
status_unknown::Unknown
talc::Talc
total_paid::Total paid
total_spent::Total spent
treatment::Treatment
type_word::Tipo
value::Value
view_optic::View Optician
view_order::View Order
watchlist_added::is now in your watchlist
watchlist_cleared_desc::Watchlist has been cleared
watchlist_cleared_title::Watchlist cleared
without_frame::Without frame
add::Add
add_device::Add new device
amount::Amount
amount_to_pay::Amount to pay
available_tpv::Available TPV's
choose_payment_type::Choose payment type
complementary::Complementary payment
confirm::CONFIRM
confirmation::Confirmation
could_not_be_connected::Could not be connected to the device
deposit::Payment and deposit
deposit_greater_than::Deposit must be greater than
device_version::Device version
enter_key::Enter the key
failed_attempt::Failed attempt
full::Full Payment
n_serial::Nº serial
order_details::Order details
payment_greater_than::Payment must be equal or greater than
payment_type::Payment type
perfect::Perfect!
recommendations::RECOMMENDATIONS
remaining_to_be_paid::Remaining amount to be paid
remember_that::the customer will have to pay when they come to pick up their order.
review_tpv::Check your TPV to make the payment
start_payment::Start payment
terminal_connected::Terminal connected
title_remember_that::Remember that
transfer_failed::Transfer failed!
call_issuer::The card was declined for an unknown reason
offline_pin_required::The card was declined because it requires a PIN
online_or_offline_pin_required::The card was declined because it requires a PIN
generic_decline::Your card was declined
incorrect_pin::The PIN entered is incorrect.
withdrawal_count_limit_exceeded::The customer has exceeded the balance or credit limit available on their card
pin_try_exceeded::The allowable number of PIN tries was exceeded
try_again::Try again
with_card::By card
with_cash::In cash
you_will_pay::You are going to pay
transfer_success::Transfer completed successfully
success::Success
billing::Billing
block_by_country::Block by Country
dashboard::Home
orders::Orders
transactions::Transactions
billings::billings
instructions1::MAKE SURE THE TERMINAL BATTERY IS CHARGED.
instructions2::TURN ON THE DEVICE.
instructions3::GO TO TERMINAL SETTINGS, FOR THIS YOU MUST SLIDE YOUR FINGER FROM THE LEFT EDGE OF THE SCREEN TO THE RIGHT, AT WHICH POINT A PANEL WILL OPEN.
instructions4::NEXT, YOU MUST SELECT SETTINGS AND ENTER THE FOLLOWING PIN: 07139. DIFFERENT OPTIONS WILL APPEAR. SELECT "NETWORK" AND CONNECT TO YOUR WI-FI.
instructions5::ONCE YOU HAVE THE WI-FI CONNECTED, RETURN TO THE PREVIOUS MENU AND SELECT THE OPTION "GENERATE A PAIRING CODE". A KEY WILL BE GENERATED THAT YOU MUST ENTER IN THE APPLICATION.
instructions6::THE PLACE TO ENTER THIS CODE IS IN THE FOLLOWING WINDOW OF THE FORM "ADD NEW DEVICE". ONCE ENTERED AND CONNECTED CORRECTLY IT WILL APPEAR IN "AVAILABLE TPV'S".
instructions7::SELECT THE TPV AND MAKE THE PAYMENT.
instructions8::IN THIS WAY THE TPV IS PAIRED AND ASSOCIATED WITH YOUR OPTIC. IN THE SUCCESSIVE OPERATIONS YOU CARRY OUT, YOU WILL ONLY NEED TO CONNECT IT TO YOUR WIFI NETWORK.
form_age::Age
form_email::Email
form_is_flipo_client::Are you a Flipo customer?
form_last_name::Last Name
form_post_code::Postal Code
form_select_age::Select age
form_users_name::First Name
form_users_phone::Telephone number
user_exists::The client exists
user_not_exists::There is no customer with this phone number
wizard_reminder_1::Remember that when you press the
wizard_ESC::ESC
wizard_reminder_3::you can see the summary of the steps,
wizard_reminder_4::clips
wizard_reminder_5::and,
wizard_reminder_6::packs
wizard_reminder_7::that you
wizard_reminder_8::have selected.
cos_list_tab_1::Select the products
cos_list_tab_2::Choose the options
cos_list_tab_3::Summary and promotions
coic_title_1::Please add the products to be ordered:
coic_title_2::Here you can add products to complete your order to FLiPO
coic_description_1::The usual packs: Curious, Full, Flipante
coic_description_2::Buy accessories individually, not associated with Packs
c_title_pack::Packs
c_title_accessories::Individual Accessories
c_title_notFLIPO::Not FLiPO Sales
c_desc_pack::The usual packs: Curious, Full, Flipante
c_desc_accessories::Buy accessories individually, not associated with Packs
c_desc_notFLIPO::Register here sales that are not FLiPO products.
c_customer_info_title::Appointment Information:
c_order_resume_title::Summary of the products in this order
b_order_resume_title::Add more products
b_order_resume_continue_title1::CONTINUE
b_order_resume_continue_title2::READY TO PAY
c_promotions_title::Promotions applicable for this appointment:
c_title_order_list::Your Order
b_title_order_list::CONTINUE
c_accessories_order_list_title1::Accessories
c_accessories_order_list_title2::Extra Accessories
c_order_item_title::Select a product to start
c_order_item_subtitle::Customize the products to send in the order:
c_pack_details_title::This Pack includes:
list_flipante::Amazing Pack
list_full::FULL Pack
list_curioso::Curious Pack
m_title_pack_additional::(Additional Clip 10 €)
list_temples::Temples
list_functional::Functional Clips
list_packaging::Cases
list_design::Design Clips
repairation::Repair
list_functional_design::Functional Design Clips
m_not_flipo::Not Available for Stock Sale Type
b_not_flipo::CONTINUE
c_type_lens_exist::This section cannot be changed in an existing order.
c_form_lens_title::Lens Form
c_from_lens_q1::Who will handle the lenses?
c_from_lens_q2::Type of Lens
c_from_lens_q3::Treatment
c_from_lens_q4::Treatment Reduction
c_lens_options1::Stock Monofocal
c_lens_options2::Manufactured Monofocal
c_lens_options3::Reinforced Monofocal
c_lens_options4::Basic Progressive
c_lens_options5::Mid Progressive
c_lens_options6::Elite Progressive
c_lens_options7::Top Progressive
c_lens_options8::Occupational
c_lens_seller_option1::Associated Optician
c_lens_seller_option2::FLiPO
c_lens_seller_option3::None
c_anti_reflective::Anti-reflective
c_anti_reflective_plus::Anti-reflective Plus
c_blue_control::Blue Control
c_promotions_step1::Applied Promotions
c_promotions_step2::Applicable Promotions
c_lens_type_advice1::No pack available
b_resume_status_product::Complete
b_resume_status_product2::Incomplete
b_resume_status_product3::Mandatory
b_status_product::Completed
b_status_product2::Incomplete
b_status_product3::Mandatory
s_m_title1::One (1) functional clip
s_m_title2::functional clips
s_m_title3::or one (1) design clip
s_m_title4::or
s_m_title5::or
s_m_title6::design clips (to choose) + matching temples
s_m_title7::One (1) set of temples
m_number_1::One (1)
m_number_2::Two (2)
m_number_3::Three (3)
m_number_4::Four (4)
m_number_5::Five (5)
m_number_6::Six (6)
m_number_7::Seven (7)
m_number_8::Eight (8)
m_number_9::Nine (9)
m_number_10::Ten (10)
m_number_11::Eleven (11)
m_number_12::Twelve (12)
m_number_13::Thirteen (13)
m_number_14::Fourteen (14)
m_number_15::Fifteen (15)
m_number_16::Sixteen (16)
m_number_17::Seventeen (17)
m_number_18::Eighteen (18)
m_number_19::Nineteen (19)
m_number_20::Twenty (20)
m_menu_type_lens::Type of Lenses
m_menu_type_frame::Type of Frame
m_menu_type_functional::Functional Clip
m_menu_type_design::Design Clip
m_menu_type_temples::Temples
m_menu_type_packaging::Packaging
i_h_cupon::Discount code or gift card
b_application_promotion::Apply
b_delete_promotion::Delete
b_add_promotion::Apply
m_title_list::ORDER LIST
sm_title_list::Client
m_column_billing_list::PRODUCT
m_column_billing_list2::QUANTITY
m_column_billing_list3::Total
m_title_aditional::Additional Accessories (promotions)
m_title_subtotal::Subtotal
m_title_disc::Discount
b_title_back_list::Configure
b_title_back_list2::Configure Order
b_title_back_list3::Continue
b_title_back_list4::CONTINUE
m_title_selection::Your Selection
m_title_pack_selection::Selected Pack
m_title_pack_selection2::Type of Pack:
m_title_selection2::Frame:
m_title_selection3::Not yet selected
m_title_selection4::Price:
m_title_selection5::Type of Lenses
m_title_selection6::Not configured
m_title_selection7::Treatment:
m_title_selection8::Not specified:
m_title_selection9::Reduction Treatment:
m_title_selection10::Does not apply
m_title_selection11::Pack Accessories
m_title_selection12::Note:
m_title_selection13::Only configured accessories for this pack are shown below.
m_title_selection14::SKU:
m_title_selection15_accesory::Accessory:
m_title_selection17::Treatment:
m_title_selection18::Reduction:
m_resume_submit_title::Order Summary
m_payment_title::Choose a payment method
c_payment_type_title::FLiPO POS terminal
c_payment_type_subtitle::payment through our POS terminal
c_payment_type_subtitle2::cash payment
c_payment_type_subtitle3::CASH
c_payment_type_subtitle4::payment through our POS terminal
c_paymenet_input::CASH PAYMENT
c_paymenet_input2::TOTAL TO PAY DOJO
c_amount_currency::Currency
c_process_payment::We are processing your payment
m_title_selection19::Type:
m_title_completed_selection20::The pack is fully configured and ready.
m_title_completed_selection21::The pack is not yet fully configured.
m_title_completed_selection22::Additional Accessories
m_title_completed_selection23::Selected Accessories
m_title_selection24::Promotion:
m_title_selection25::Frame:
m_title_selection26::No frame selected
m_title_selection27::Important:
m_title_selection28::Once you confirm this order, it cannot be modified. The order will be created and processed immediately.
m_title_selection29::Total Price:
m_title_selection30::Confirm Order
m_title_selection31::Cancel
m_title_selection32::Confirm
m_type_no_frame::Please select a frame type
c_form_eye_title::Eye Form
m_form_eye::Sphere
m_form_eye2::Cylinder
m_form_eye3::Axis
m_form_eye4::Addition
m_form_eye5::Prism Axis
m_form_eye6::Prism Value
m_form_eye7::Frame/Customer Centering
m_form_eye8::AVAILABLE CORRIDORS FOR PROGRESSIVE RANGE
m_form_eye9::Corridor
m_form_eye10::Short
m_form_eye11::Long
m_form_eye12::ADDITIONAL DATA FOR TOP RANGE PROGRESSIVE (OPTIONAL)
m_form_eye13::Submit
m_form_eye14::DNP
m_form_eye15::Height
m_form_eye16::No prism
m_form_eye17::Prism Value
m_form_eye18::Decentration
m_form_eye19::Maximum Distance (cm)
m_form_eye20::Additional comments on the prescription
m_form_eye21::Prescription Details
m_form_eye22::Delivery Note:
m_form_eye23::Sphere:
m_form_eye24::Prism Axis:
m_form_eye25::Axis Value:
m_form_eye26::Aisle: Short
m_form_eye27::Aisle: Long
m_form_eye_title::Lens order form:
m_error_stock_title::Sorry
m_error_stock_subtitle::We are having problems, please try again later
t_clip_additional::Additional accessory
REMINDER_TITLE::REMEMBER THAT
REMINDER_MESSAGE::We need you to complete the lens graduation form to prepare your order. Would you like to do it now?
YES_BUTTON::YES
NO_BUTTON::NO
m_acdemy_title::ERP Academy Tutorials
m_acdemy_subtitle::FLiPO Tutorials
m_acdemy_title_card1::Softr Tutorial for Beginners
m_acdemy_desc_card2::Softr is one of the leading tools for building internal applications and portals for your company or organization using your data from Airtable, Google Sheets, SmartSuite, and other popular data sources.
m_acdemy_title_card2::Google Sheets Tables
m_new_table_order_s1::Order Number
m_new_table_order_s2::Customer Name
m_new_table_order_s3::Remove Filters
m_new_table_order_c1::No. Document
m_new_table_order_c2::Client
m_new_table_order_c3::Creation
m_new_table_order_c4::Last Payment
m_new_table_order_c5::Paid
m_new_table_order_c6::Total Price
m_new_table_order_c7::Graduation
m_new_table_order_c8::Order
m_new_table_order_c9::Payment
m_new_payment_dojo_1::Remaining time:
m_new_payment_dojo_2::seconds
m_new_payment_dojo_3::IS THIS THE CORRECT SIGNATURE?
m_new_payment_dojo_4::DECLINED
m_new_payment_dojo_5::PIN ENTRY
m_new_payment_dojo_6::We are having trouble processing the payment response.
m_new_payment_dojo_7::Communication error with the terminal. Please check if the transaction was completed. PLEASE CONTACT YOUR FLIPO MANAGER
m_new_payment_dojo_8::CONTINUE
m_new_payment_dojo_9::POS not available
m_new_payment_dojo_10::Try again in 10 seconds or check the screen and cables of the terminal. If the problem persists, contact support.
m_new_payment_dojo_11::Terminal connection error
m_new_payment_dojo_12::Has the payment been recorded correctly?
m_new_payment_dojo_13::WE ARE INITIATING THE PAYMENT
CALENDAR::CALENDAR
ORDERS::ORDERS
APPOINTMENT::APPOINTMENT
modal_additional_accessory_title::Additional Accessory
modal_additional_accessory_question::Would you like to add an additional accessory to the pack for 10 euros?
modal_additional_accessory_description::Enhance your pack by adding an additional accessory for only 10 euros.
product_list_packs_new_frames::New Collection
product_list_packs_old_frames::Martin and Memphis
tour_b_1::Prev
tour_b_2::Next
tour_c_title_1::Your Order Progress
tour_c_subtitle_1::This header shows you how your order is progressing. There are a total of three steps that you need to complete.
tour_c_title_2::Packs List
tour_c_subtitle_2::This section shows a list of product cards in the category
tour_c_subtitle_2_2::Packs
tour_c_subtitle_2_3::. You can click on the Packs card to get more details.
tour_c_title_3::NOT FLIPO' Sale
tour_c_subtitle_3::This section is exclusively for registering sales that do not belong to
tour_c_subtitle_3_1::FLIPO
tour_c_subtitle_3_2::. Please use this area for sales unrelated to our standard products.
product_cards_accessories_title::Accessories List
product_cards_accessories_subtitle_1::This section shows a list of product cards in the category
product_cards_accessories_highlight::Accessories
product_cards_accessories_subtitle_2::You can click on the Packs card to get more details.
product_list_title::Selected Products List
product_list_subtitle_1::This card shows a list of products where the items you choose from the categories
product_list_highlight_1::Accessories
product_list_highlight_2::Packs
product_list_subtitle_2::will be reflected here.
product_list_actions::You will be able to: Remove, Add, and view the quantity of each.
continue_button_title::“Continue” Button
continue_button_subtitle::The “Continue” button will activate once you’ve added something to your order. You can use this button to move to the next step of your order and continue with the checkout process.
order_summary_title::Order Summary
order_summary_subtitle_1::This card shows a summary of your order. Next to each product, there is a
order_summary_label::label
order_summary_subtitle_2::that indicates the product status: "mandatory", "incomplete", or "completed". This helps you easily identify which items you need to complete before finalizing your order.
customization_section_title::Customization Section
customization_section_subtitle_1::This section allows you to finish customizing your entire product, including:
customization_section_highlight_1::Lens Type
customization_section_highlight_2::Frame Type
customization_section_highlight_3::Functional Accessory
customization_section_highlight_4::Design Clip
customization_section_highlight_5::temples
customization_section_subtitle_2::. Each option shows its status as "mandatory", "incomplete", or "completed", so you can track your customization progress.
client_info_card_title::Client Information Card
client_info_card_subtitle_1::This card provides information about the client associated with the appointment. It includes details like the appointment date, the client type (either
client_info_card_highlight_1::FLIPO
client_info_card_highlight_2::OPTIC
client_info_card_subtitle_2::), and the promotions that apply to this client. This helps give you a clear view of the client’s preferences and benefits for their appointment.
product_configuration_card_title::Product Configuration Card
product_configuration_card_subtitle_1::This card shows all the required options for configuring the product, which may vary depending on the type. You can select different features and accessories to personalize your product to your specific needs.
product_configuration_panel_title::Accessories Configuration Panel
product_configuration_panel_subtitle_1::This panel allows you to adjust the settings of the selected accessories in a customized way. Here, you’ll clearly see the available options and set the maximum quantity you can add to your selection, ensuring you get the exact configuration you need.
product_configuration_panel_strong::Click on the panel to discover more details and options.
product_personalize_panel_title::Accessories Configuration Panel
product_personalize_panel_subtitle_1::This panel offers two key functions:
product_personalize_function_1::1. "+" and "-" buttons that let you increase or decrease the quantity of the same product.
product_personalize_function_2::2. A "Customize" button that allows you to modify the selected product according to your preferences.
customize_button::Customize
title_select_combination::Choose Your Combination
close_button::Close
without_stock::Out of stock
Scroll_to_see_more_products::Scroll to see more products
order_comment_placeholder::Add a comment to the order
order_comment_label::Order Comment
payment_less_than_remaining::Payment Less Than Remaining
actions_table_orders_billing::Actions
to_mark_as_billing::¿Do you want to mark this order as billed?
enter_billin_number::Enter the billing number
billing_number::Billing number
enter_billing_number_placeholder::Enter the billing number
cancel_billing::Cancel billing
Accept_billing::Accept billing
processing_please_wait::Processing, please wait...
order_marked_as_billed::Order marked as billed
payment_issue::We are sorry that you had trouble paying with your card. Below we offer a series of recommendations to avoid this situation from happening again:
card_active::Check that your card is active and has not expired. You can check the status of your card with your bank or on your bank's mobile app.
check_details::Make sure you have entered your card details correctly, such as the number, expiration date, and security code. Ensure that there are no spaces or special characters between the digits.
check_balance::Make sure you have sufficient balance in your account to make the payment. If your card has a credit limit, ensure you have not exceeded it.
sms_verification::If your card has the option for secure payment or SMS verification, ensure you have coverage and that you receive the confirmation code on your mobile phone. Enter the code within the indicated time frame and do not share it with anyone.
blocked_card::If you have made several failed payment attempts, it is possible that your card has been temporarily blocked for security reasons. In that case, contact your bank to unblock it and use it again.
alternate_payment::If the problem persists, you can try paying with another card or using another payment method available on our website. You can also contact our customer service for help with any questions or issues.
try_again_message::Try again
m_not_flipo_mudle_alert::Finish configuring the data
add_clip_modal_title::Add Additional Clip
add_clip_modal_description::You can add an additional clip to your order for
add_clip_modal_price::10 euros.
add_clip_modal_add_button::Click on "Add to Order" to confirm.
completar_label::Complete
completado_label::Completed
no_aplica_label::Not Applicable
OD::(RE)
OI::(LE)
D::R
I::L
confirm_all_data_lenses::Make sure to fill in all fields
m_order_pending_table::You have no pending orders
sphere_required_field::Required field for sphere
sphere_value_field::Invalid value for sphere
sphere_min_value::Minimum value is -20 for sphere
sphere_max_value::Maximum value is 20 for sphere
sphere_multiple_of_025::Value must be a multiple of 0.25 for sphere
cylinder_required_field::Required field for cylinder
cylinder_value_field::Value must be a valid number for cylinder
cylinder_min_value::Minimum value is -6 for cylinder
cylinder_max_value::Maximum value is 6 for cylinder
axis_required_field::Required field for axis
axis_min_value::Minimum value is 0 for axis
axis_max_value::Maximum value is 180 for axis
mounting_data_required_field::Required field for mounting data
mounting_data_min_value::Minimum value is 20 for mounting data
mounting_data_max_value::Maximum value is 45 for mounting data
height_data_required_field::Required field for height data
height_data_min_value::Minimum value is 10 for height data
height_data_max_value::Maximum value is 40 for height data
firstName_required::First name is required
lastName_required::Last names are required
phoneNumber_required::Phone number is required
email_invalid::Invalid email
email_required::Email is required
400001::Carey Temples
400002::Navy Blue Temples
400003::Rioja Red Temples
400004::Lemon Yellow Temples
400005::Pale Pink Temples
400006::Pistachio Green Temples
400007::Pale Purple Verypery Temples
400008::Iced Coffee Temples
400009::Olive Green Temples
400010::Valentina Temples
400011::Red Sunset Temples
400012::White Polar Temples
400013::Green Forest Temples
400014::Mahogany Temples
400015::Zebra Temples
400016::Hawaii Temples
400017::Marble Blue Temples
400018::Puzzle Temples
400019::Brunch Vibes Temples
400020::Sailor Temples
400021::Kenya Temples
400022::Highlands Temples
400023::Black Temples
400024::Chocolate Temples
400025::Red Passion Temples
400026::Valparaiso Temples
400027::Black Flowers Temples
200001::Original Clip (Nilo) Blue Solar Mirror
200002::Original Clip (Nilo) Black Solar
200003::Original Clip (Nilo) Night Driving
200004::Original Clip (Nilo) Orange Mirror
200005::Original Clip (Nilo) Screen Protection
200006::Model C Clip (Ivy) Blue Mirror
200007::Model C Clip (Ivy) Black Solar
200008::Model C Clip (Ivy) Night Driving
200009::Model C Clip (Ivy) Orange Mirror
200010::Model C Clip (Ivy) Screen Protection
200011::Model A Clip (Dante) Blue Mirror
200012::Model A Clip (Dante) Black Solar
200013::Model A Clip (Dante) Night Driving
200014::Model A Clip (Dante) Orange Mirror
200015::Model A Clip (Dante) Screen Protection
200016::Model D Clip (Siena) Blue Mirror
200017::Model D Clip (Siena) Black Solar
200018::Model D Clip (Siena) Night Driving
200019::Model D Clip (Siena) Orange Mirror
200020::Model D Clip (Siena) Screen Protection
0300014 + 0500011::Original Clip (Nilo) Blue Gradient Polarized Solar
0300014 + 0500012::Original Clip (Nilo) Brown Gradient Polarized Solar
0300014 + 0500013::Original Clip (Nilo) Wine Gradient Polarized Solar
0300014 + 0500014::Original Clip (Nilo) Copper Reflective Polarized Solar
0300014 + 0500015::Original Clip (Nilo) Fuchsia Reflective Polarized Solar
0300014 + 0500016::Original Clip (Nilo) Purple Reflective Polarized Solar
0300014 + 0500017::Original Clip (Nilo) Silver Mirror Polarized Solar
0300014 + 0500018::Original Clip (Nilo) Green Reflective Polarized Solar
0300014 + 0500019::Original Clip (Nilo) Light Blue Polarized Solar
0300014 + 0500020::Original Clip (Nilo) Light Purple Polarized Solar
0300037 + 0500021::Model C Clip (Ivy) Blue Gradient Polarized Solar
0300037 + 0500022::Model C Clip (Ivy) Brown Gradient Polarized Solar
0300037 + 0500023::Model C Clip (Ivy) Wine Gradient Polarized Solar
0300037 + 0500024::Model C Clip (Ivy) Copper Reflective Polarized Solar
0300037 + 0500025::Model C Clip (Ivy) Fuchsia Reflective Polarized Solar
0300037 + 0500026::Model C Clip (Ivy) Purple Reflective Polarized Solar
0300037 + 0500027::Model C Clip (Ivy) Silver Mirror Polarized Solar
0300037 + 0500028::Model C Clip (Ivy) Green Reflective Polarized Solar
0300037 + 0500029::Model C Clip (Ivy) Light Blue Polarized Solar
0300037 + 0500030::Model C Clip (Ivy) Light Purple Polarized Solar
0300060 + 0500031::Model A Clip (Dante) Blue Gradient Polarized Solar
0300060 + 0500037::Model A Clip (Dante) Brown Gradient Polarized Solar
0300060 + 0500038::Model A Clip (Dante) Wine Gradient Polarized Solar
0300060 + 0500039::Model A Clip (Dante) Copper Reflective Polarized Solar
0300060 + 0500040::Model A Clip (Dante) Fuchsia Reflective Polarized Solar
0300060 + 0500041::Model A Clip (Dante) Purple Reflective Polarized Solar
0300060 + 0500042::Model A Clip (Dante) Silver Mirror Polarized Solar
0300060 + 0500043::Model A Clip (Dante) Green Reflective Polarized Solar
0300060 + 0500044::Model A Clip (Dante) Light Blue Polarized Solar
0300060 + 0500045::Model A Clip (Dante) Light Purple Polarized Solar
0300083 + 0500051::Model D Clip (Siena) Blue Gradient Polarized Solar
0300083 + 0500052::Model D Clip (Siena) Brown Gradient Polarized Solar
0300083 + 0500053::Model D Clip (Siena) Wine Gradient Polarized Solar
0300083 + 0500054::Model D Clip (Siena) Copper Reflective Polarized Solar
0300083 + 0500055::Model D Clip (Siena) Fuchsia Reflective Polarized Solar
0300083 + 0500056::Model D Clip (Siena) Purple Reflective Polarized Solar
0300083 + 0500057::Model D Clip (Siena) Silver Mirror Polarized Solar
0300083 + 0500058::Model D Clip (Siena) Green Reflective Polarized Solar
0300083 + 0500059::Model D Clip (Siena) Light Blue Polarized Solar
0300083 + 0500060::Model D Clip (Siena) Light Purple Polarized Solar
300001::Original Clip (Nilo) Carey
300002::Original Clip (Nilo) Navy Blue
300003::Original Clip (Nilo) Rioja
300004::Original Clip (Nilo) Lemon Yellow
300005::Original Clip (Nilo) Pale Pink
300006::Original Clip (Nilo) Pistachio Green
300007::Original Clip (Nilo) Pale Purple Verypery
300008::Original Clip (Nilo) Iced Coffee
300009::Original Clip (Nilo) Olive Green
300010::Original Clip (Nilo) Valentina
300011::Original Clip (Nilo) Red Sunset
300012::Original Clip (Nilo) White Polar
300013::Original Clip (Nilo) Green Forest
300014::Original Clip (Nilo) Black Base
300015::Original Clip (Nilo) Mahogany
300016::Original Clip (Nilo) Zebra
300017::Original Clip (Nilo) Hawaii
300018::Original Clip (Nilo) Marble Blue
300019::Original Clip (Nilo) Puzzle
300020::Original Clip (Nilo) Brunch Vibes
300021::Original Clip (Nilo) Sailor
300022::Original Clip (Nilo) Kenya
300023::Original Clip (Nilo) Highlands
300024::Model C Clip (Ivy) Carey
300025::Model C Clip (Ivy) Navy Blue
300026::Model C Clip (Ivy) Rioja Red
300027::Model C Clip (Ivy) Lemon Yellow
300028::Model C Clip (Ivy) Pale Pink
300029::Model C Clip (Ivy) Pistachio Green
300030::Model C Clip (Ivy) Pale Purple Verypery
300031::Model C Clip (Ivy) Iced Coffee
300032::Model C Clip (Ivy) Olive Green
300033::Model C Clip (Ivy) Valentina
300034::Model C Clip (Ivy) Red Sunset
300035::Model C Clip (Ivy) White Polar
300036::Model C Clip (Ivy) Green Forest
300037::Model C Clip (Ivy) Black Base
300038::Model C Clip (Ivy) Mahogany
300039::Model C Clip (Ivy) Zebra
300040::Model C Clip (Ivy) Hawaii
300041::Model C Clip (Ivy) Marble Blue
300042::Model C Clip (Ivy) Puzzle
300043::Model C Clip (Ivy) Brunch Vibes
300044::Model C Clip (Ivy) Sailor
300045::Model C Clip (Ivy) Kenya
300046::Model C Clip (Ivy) Highlands
300047::Model A Clip (Dante) Carey
300048::Model A Clip (Dante) Navy Blue
300049::Model A Clip (Dante) Rioja Red
300050::Model A Clip (Dante) Lemon Yellow
300051::Model A Clip (Dante) Pale Pink
300052::Model A Clip (Dante) Pistachio Green
300053::Model A Clip (Dante) Pale Purple Verypery
300054::Model A Clip (Dante) Iced Coffee
300055::Model A Clip (Dante) Olive Green
300056::Model A Clip (Dante) Valentina
300057::Model A Clip (Dante) Red Sunset
300058::Model A Clip (Dante) White Polar
300059::Model A Clip (Dante) Green Forest
300060::Model A Clip (Dante) Black Base
300061::Model A Clip (Dante) Mahogany
300062::Model A Clip (Dante) Zebra
300063::Model A Clip (Dante) Hawaii
300064::Model A Clip (Dante) Marble Blue
300065::Model A Clip (Dante) Puzzle
300066::Model A Clip (Dante) Brunch Vibes
300067::Model A Clip (Dante) Sailor
300068::Model A Clip (Dante) Kenya
300069::Model A Clip (Dante) Highlands
300070::Model D Clip (Siena) Carey
300071::Model D Clip (Siena) Navy Blue
300072::Model D Clip (Siena) Rioja Red
300073::Model D Clip (Siena) Lemon Yellow
300074::Model D Clip (Siena) Pale Pink
300075::Model D Clip (Siena) Pistachio Green
300076::Model D Clip (Siena) Pale Purple Verypery
300077::Model D Clip (Siena) Iced Coffee
300078::Model D Clip (Siena) Olive Green
300079::Model D Clip (Siena) Valentina
300080::Model D Clip (Siena) Red Sunset
300081::Model D Clip (Siena) White Polar
300082::Model D Clip (Siena) Green Forest
300083::Model D Clip (Siena) Black Base
300084::Model D Clip (Siena) Mahogany
300085::Model D Clip (Siena) Zebra
300086::Model D Clip (Siena) Hawaii
300087::Model D Clip (Siena) Marble Blue
300088::Model D Clip (Siena) Puzzle
300089::Model D Clip (Siena) Brunch Vibes
300090::Model D Clip (Siena) Sailor
300091::Model D Clip (Siena) Kenya
300092::Model D Clip (Siena) Highlands
300093::Original Clip (Nilo) Chocolate
300094::Original Clip (Nilo) Red Passion
300095::Original Clip (Nilo) Valparaiso
300096::Original Clip (Nilo) Black Flowers
300097::Model C Clip (Ivy) Chocolate
300098::Model C Clip (Ivy) Red Passion
300099::Model C Clip (Ivy) Valparaiso
300100::Model C Clip (Ivy) Black Flowers
300101::Model A Clip (Dante) Chocolate
300102::Model A Clip (Dante) Red Passion
300103::Model A Clip (Dante) Valparaiso
300104::Model A Clip (Dante) Black Flowers
300105::Model D Clip (Siena) Chocolate
300106::Model D Clip (Siena) Red Passion
300107::Model D Clip (Siena) Valparaiso
300108::Model D Clip (Siena) Black Flowers
100001::Original Frame (Nilo) Black
100002::Original Frame (Nilo) Light
100003::Frame Model C (Ivy) Black
100004::Frame Model C (Ivy) Light
100005::Frame Model A (Dante) Black
100006::Frame Model A (Dante) Light
100007::Frame Model D (Siena) Black
100008::Frame Model D (Siena) Light


`;
export default en;
