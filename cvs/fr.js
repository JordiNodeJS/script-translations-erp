const fr = `
billingPage::*** billingPage ***
amount_payed::Montant payé
last_payment_date::Date du dernier paiement
order_completed::COMMANDES PAYÉES À 100%
order_date::Date de la commande
orders_with_payments_not_do_it::COMMANDES AVEC PAIEMENTS EN ATTENTE
pending_collection::En attente de paiement
selected_optic::Optique sélectionnée
subtitle_order_completed::Commandes qui ont été entièrement payées et ne sont pas dans une transaction.
subtitle_orders_with_payments_not_do_it::Liste des commandes en attente de paiement
total_price::Prix total
title_block_by_country::Bloqueo de horas por país
select_country::Sélectionnez le pays
end_date_must_be_after_start_date::La date de fin doit être postérieure à la date de début.
myCustomersSearch::Rechercher mes clients
customersSearch::Rechercher des clients
myOptics::Mes Optiques
search_customer::Rechercher un client
1CU-C18::Clip Martin Chocolat
1CU-C1P21::Clip Martin Black Flowers
1CU-C19::Clip Martin Red Passion
1CU-C1P20::Clip Martin Valparaíso
1TU-C18::Varillas Chocolat
1TU-P21::Varillas Black Flowers
1TU-C19::Varillas Red Passion
1TU-P20::Varillas Valparaíso
2CU-C18::Clip Memphis Chocolat
2CU-C1P21::Clip Memphis Black Flowers
2CU-C19::Clip Memphis Red Passion
2CU-C1P20::Clip Memphis Valparaíso
1CU-C1 + 1CU-DA::Clip Base Noire Martin Solaire Bleu Dégradé Polarisé
1CU-C1 + 1CU-DC::Clip Martin Solaire Bleu Clair Polarisé
1CU-C1 + 1CU-DF::Clip Martin Vin Dégradé Polarisé
1CU-C1 + 1CU-DL::Clip Base Noire Martin Solaire Lilas Clair Polarisé
1CU-C1 + 1CU-DM::Clip Martin Solaire Marron Dégradé Polarisé
1CU-C1 + 1CU-EC::Clip Martin Solaire Cuivre Réfléchissant Polarisé
1CU-C1 + 1CU-EL::Clip Martin Solaire Violet Réfléchissant Polarisé
1CU-C1 + 1CU-EP::Clip Martin Solaire Miroir Réfléchissant Polarisé
1CU-C1 + 1CU-ER::Clip Martin Solaire Fuchsia Réfléchissant Polarisé
1CU-C1 + 1CU-EV::Clip Martin Vert Réfléchissant Polarisé
1CU-C10::Clip Martin Marpat
1CU-C11::Clip Martin Moutarde
1CU-C12::Clip Martin Café Glacé
1CU-C13::Clip Martin Vert Olive
1CU-C14::Clip Martin Valentina
1CU-C15::Clip Martin Coucher de Soleil Rouge
1CU-C16::Clip Martin Blanc Polaire
1CU-C1B::Clip Martin Miroir Solaire Bleu
1CU-C1BL::Clip Martin Solaire Noir
1CU-C1CN::Clip Martin Conduite Nocturne
1CU-C1O::Clip Martin Miroir Solaire Orange
1CU-C1P1::Clip Martin Acajou
1CU-C1P10::Clip Martin Brunch Vibes
1CU-C1P11::Clip Martin Marin
1CU-C1P2::Clip Martin Zèbre
1CU-C1P3::Clip Martin Hawaï
1CU-C1P4::Clip Martin Pois
1CU-C1P5::Clip Martin Marbre Bleu
1CU-C1P6::Clip Martin Puzzle
1CU-C1P7::Clip Martin Garlan
1CU-C1P8::Clip Martin Valery
1CU-C1P9::Clip Martin Velours
1CU-C1PP::Clip Martin Protection d´Écran
1CU-C2::Clip Martin Écaille
1CU-C3::Clip Martin Bleu Marine
1CU-C4::Clip Martin Rouge Rioja
1CU-C5::Clip Martin Jaune Citron
1CU-C6::Clip Martin Rose Pâle
1CU-C7::Clip Martin Vert Pistache
1CU-C8::Clip Martin Lilas Very Peri
1CU-C9::Clip Martin Écaille de Mer
1TU-C10::Branches Marpat
1TU-C11::Branches Moutarde
1TU-C12::Branches Café Glacé
1TU-C13::Branches Vert Olive
1TU-C14::Branches Valentina
1TU-C15::Branches Coucher de Soleil Rouge
1TU-C16::Branches Blanc Polaire
1TU-C1P4::Branches Points Rouges
1TU-C2::Branches Écaille
1TU-C3::Branches Bleu Marine
1TU-C4::Branches Rouge Rioja
1TU-C5::Branches Jaune Citron
1TU-C6::Branches Rose Pâle
1TU-C7::Branches Vert Pistache
1TU-C8::Branches Lilas Very Peri
1TU-C9::Branches Écaille de Mer
1TU-P1::Branches Acajou
1TU-P10::Branches Brunch Vibes
1TU-P11::Branches Marin
1TU-P2::Branches Zèbre
1TU-P3::Branches Hawaï
1TU-P4::Branches Pois
1TU-P5::Branches Marbre Bleu
1TU-P6::Branches Puzzle
1TU-P7::Branches Garlan
1TU-P8::Branches Valery
1TU-P9::Branches Velours
2CU-C1 + 2CU-DA::Clip Base Noire Memphis Solaire Bleu Dégradé Polarisé
2CU-C1 + 2CU-DC::Clip Memphis Solaire Bleu Clair Polarisé
2CU-C1 + 2CU-DF::Clip Memphis Solaire Vin Dégradé Polarisé
2CU-C1 + 2CU-DL::Clip Base Noire Memphis Solaire Lilas Clair Polarisé
2CU-C1 + 2CU-DM::Clip Memphis Solaire Marron Dégradé Polarisé
2CU-C1 + 2CU-EC::Clip Memphis Solaire Cuivre Réfléchissant Polarisé
2CU-C1 + 2CU-EL::Clip Memphis Solaire Violet Réfléchissant Polarisé
2CU-C1 + 2CU-EP::Clip Memphis Solaire Miroir Réfléchissant Polarisé
2CU-C1 + 2CU-ER::Clip Memphis Solaire Fuchsia Réfléchissant Polarisé
2CU-C1 + 2CU-EV::Clip Memphis Solaire Vert Réfléchissant Polarisé
2CU-C10::Clip Memphis Marpat
2CU-C11::Clip Memphis Moutarde
2CU-C12::Clip Memphis Café Glacé
2CU-C13::Clip Memphis Vert Olive
2CU-C14::Clip Memphis Valentina
2CU-C15::Clip Memphis Coucher de Soleil Rouge
2CU-C16::Clip Memphis Blanc Polaire
2CU-C1B::Clip Memphis Miroir Solaire Bleu
2CU-C1BL::Clip Memphis Solaire Noir
2CU-C1CN::Clip Memphis Conduite Nocturne
2CU-C1O::Clip Memphis Miroir Solaire Orange
2CU-C1P1::Clip Memphis Acajou
2CU-C1P10::Clip Memphis Brunch Vibes
2CU-C1P11::Clip Memphis Marin
2CU-C1P14::Clip Memphis Valery
2CU-C1P15::Clip Memphis Velours
2CU-C1P2::Clip Memphis Zèbre
2CU-C1P3::Clip Memphis Hawaï
2CU-C1P4::Clip Memphis Pois
2CU-C1P5::Clip Memphis Marbre Bleu
2CU-C1P6::Clip Memphis Puzzle
2CU-C1P7::Clip Memphis Garlan
2CU-C1P8::Clip Memphis Valery
2CU-C1P9::Clip Memphis Velours
2CU-C1PP::Clip Memphis Protection d´Écran
2CU-C2::Clip Memphis Écaille
2CU-C3::Clip Memphis Bleu Marine
2CU-C4::Clip Memphis Rouge Rioja
2CU-C5::Clip Memphis Jaune Citron
2CU-C6::Clip Memphis Rose Pâle
2CU-C7::Clip Memphis Vert Pistache
2CU-C8::Clip Memphis Lilas Very Peri
2CU-C9::Clip Memphis Écaille de Mer
accessories_design_title::Accesorios de Diseño
accessories_functional_title::Accesorios Funcionales
anti_reflective::Antirreflejante
associated_optics::Optique associée
basicProgressives::Progresivas Básica
blue_control::Blue Control
choose_your_convination::Choisissez votre combinaison:
CICU-01::Monture Martin
CICU-02::Monture Memphis
clips_resume_title::Clips:
cloth::Cloth: Microfibra Gamuza
comment_hint::<b>Shift ⇧ + Enter ↵</b> pour faire un saut de ligne
comment_optic::Commentaire
completed_form::Formulaire complété
customize::Personnaliser
description_clip_functional::Le client a-t-il acheté le PREMIER clip supplémentaire pour XXX?
design::Design
dont_send_btn::Ne pas envoyer
eliteProgressives::Progresivas Élite
error_num_min::Entrez un nombre supérieur ou égal au calcul basé sur les produits saisis
finalPage::Page finale
flipo_client::Client FLiPO
frame_resume_title::Monture:
frame_title::Montures
functional::Fonctionnel
go_to::Avancer
gretting::Bonjour
gretting_subtitle::Formulaire de commande pour
invoice_resume_title::Facture
invoicedToTheCustomer::Facturé au client
lenses_type_resume_title::Type de lentille:
mediumProgressives::Progresivas Media
monofocalManufacture::Monofocales Fabricación
monofocalorProgressive::Monofocales o Progresivas
monofocalStock::Monofocal Stock
no::Non
not_go_to::Ne pas avancer
pack_curioso::Pack Curieux
pack_flipante::Pack FLiPANTE
pack_flipante_no_caja::Flipante sans boîte
pack_full::Pack Complet
pack_title::Packs
packs_resume_title::Pack:
placeholder_text::Écrivez votre réponse ici
pouch::Pouch: Étui de clip
press_enter::appuyez sur <b>Enter ↵</b>
progressiveTop::Progresivas Top
reduction_resume_title::Réduction:
resume::Résumé
review::Révision
sale_stock::Vente Stock
sending::Envoi en cours...
sheath::Étui
sold_data::Données de vente
standard_clip::Clip Standard
start::Commencer
sumbit::Envoyer
talc_of::Talc de:
temples::Varillas
temples_resume_title::Varillas:
temples_title::Varillas
there_was_a_problem::Il y a eu un problème
title_final_form::Vous avez terminé le formulaire de monture et d'accessoires !    ! N'oubliez pas que si FLiPO fabrique les verres, le formulaire de verres est encore à remplir.
title_insert_data_customer::Entrez les données du client
title_isFLiPO::La monture vendue est-elle FLiPO?
titleFileBlock::Téléchargez le fichier Excel de la prescription
type_of_treatment::Quel type de traitement est-ce?
will_FLiPO_make_lenses::Qui se chargera des verres?
yes::Oui
total_value::Valeur totale
comment_payment::Tout détail qui n'est pas pris en compte dans les questions précédentes, ou si le client a choisi d'ajouter des produits, vous pouvez les détailler ici :     - Clip Fonctionnel : 25€     - Clip de Design : 20€     - Varilla : 20€
out_of_stock::Épuisé
has_financing::Le client a-t-il demandé un financement?
financing::Financement
yes_formPage::Oui
no_formPage::Non
spain::Espagne
portugal::Portugal
england::Angleterre
copyright::Tous droits réservés
address::Adresse
active::Actif
inactive::Inactif
back_dashboard::Retour à l'accueil
status_todo::En attente
status_to_pay::À payer
status_not_assist::Non assisté
status_assist::Assisté
status_notify_not_assist::Annulé par le client
status_paid::Payé
status_wrong_team::Erreur interne
status_not_buy::N'a pas acheté
status_optician_rescheduled::Reprogrammé par l'opticien
status_sell_stock::Vente de stock
back_to::Retour à
back::Retour
optic::Optique
for_see::Pour voir...
italy::Italie
appointments::Rendez-vous
conversion::Taux de conversion
globalStats::Statistiques globales
lastMonth::Les 30 derniers jours
opticName::Nom de l'optique
opticSearch::Rechercher une optique
sales::Ventes
addendum::Addendum
aisle::Allée
axis::Axe
base::Base
corto::Court
cylinder::Cylindre
gretting_lenses::Formulaire pour commander des lentilles de la commande
info_esc_form_lenses_1::Rappelle-toi qu'en appuyant sur la touche
info_esc_form_lenses_2::tu peux voir le résumé du formulaire
largo::Long
left_eye_graduation_title_1::Œil Gauche
left_eye_offset::Décentrement Œil Gauche (mm)
maximum_distance::Distance Maximale (cm)
medio::Moyen
mounting_dimensions::Dimensions de Montage
od_DNP::DNP Œil Droit
od_height::Hauteur Œil Droit
oi_DNP::DNP Œil Gauche
oi_height::Hauteur Œil Gauche
prism_axis::Axe Prisme
prism_value::Valeur Prisme
progressive_top_range::Progressif Gamme Top
right_eye_graduation_title_1::Œil Droit
right_eye_offset::Décentrement Œil Droit (mm)
size::Taille
sphere::Sphère
checkCredentials::Identifiants invalides. Vérifiez-les.
invalidCredentials::Identifiants invalides
loginButton::Se connecter
loginWelcome::Bienvenue !
typeCredentials::Entrez vos identifiants
yourPassword::Votre mot de passe
yourUsername::Votre nom d'utilisateur
basics::Bases
choose_reason::Choisissez une raison
docs::Documentation
models::Modèles
my_optics::Mes Optiques
next_time::Prochaine fois
other::Autres
pricing::Prix
product::Produit
reason::Raison
state_order_assigned::erreur
state_order_cancel::erreur
state_order_confirmed::erreur
state_order_done::erreur
state_order_draft::erreur
state_order_for_prepare::Commande à préparer
state_order_prepared::Commande préparée - En attente de lentilles
state_order_preparing::Commande en préparation
state_order_sended::Commande envoyée
state_order_total_prepared::Commande préparée
state_order_waiting::erreur
<25::Moins de 25
>45::Plus de 45
25<X<45::Entre 25 et 45
admin_users_active::Actif
admin_users_create::Créer Utilisateur
admin_users_delete_confirm::Voulez-vous supprimer cet utilisateur ?
admin_users_edit::Modifier utilisateur
admin_users_name::Nom
admin_users_optics::Optiques
admin_users_optics_select::Sélectionnez votre/vos optique(s)
admin_users_optics_suggested::Optique suggérée
admin_users_password::Mot de passe
admin_users_phone::Téléphone
admin_users_roles::Rôles
admin_users_roles_select::Sélectionnez le rôle
admin_users_username::Nom d'utilisateur
admin_zone::Zone Admin
age::Âge
agenda::Agenda
analytics::Analyses
appointment_comment::Commentaires du Rendez-vous
appointments_filter::Filtrer les rendez-vous par État :
appointments_filter_info::Vous pouvez filtrer les rendez-vous par état et créer des blocages de temps pour bloquer
appointments_states::États des Rendez-vous
change_status_wrong::Changer l'état si vous vous êtes trompé
client_from::Client de
comment_appointment::Rendez-vous Commenté.
comment_appointment_any::Le rendez-vous a été commenté.
commenting_appointment_of ::Commentant le Rendez-vous de :
conversion_graph::Graphique de Conversion des Rendez-vous
conversion_graph_converted::Convertis
conversion_graph_failed::Échoués
conversion_graph_rate_short::Conversion
conversion_graph_total::Total
conversion_graph_unit::Taux de Conversion
country::Pays
create_appointment::Créer Rendez-vous
create_block::Créer Blocage Horaire
create_block_full::Est-ce pour toute la journée ?
create_customer::Créer client
created_appointment::Le rendez-vous a été créé
created_user::Utilisateur créé
customer_code::Code Client
customer_created::Client créé
customerSearch::Rechercher Clients
dashboard::Accueil
data_not_buy::Mentionner la Non-achat
day::Jour
delete::Supprimer
delete_block::Voulez-vous supprimer ce blocage ?
edit::Modifier
editing_appointment_of::Modification du Rendez-vous de :
email::Courriel
end_date::Se termine le
fill_form::Compléter
fill_form_lenses_now::Voulez-vous remplir le formulaire de lentilles maintenant ?
fill_now::Remplir maintenant
form_create_block_full::Est-ce pour toute la journée ?
form_end_date::Se termine le
form_filter::Filtrer
form_for_fill::Formulaire à remplir
form_lenses_for_fill::Formulaire de lentilles à remplir
form_reset::Réinitialiser
form_sell_stock::Formulaire Vente Stock
form_start_date::Commence le
get_support::Obtenez de l'aide par WhatsApp
has_assisted::A assisté.
has_bought::A acheté
has_not_assisted::N'a pas assisté.
has_not_bought::N'a pas acheté
has_not_payed::N'a pas payé
has_payed::A payé.
home::Accueil
information::Information
is_assisted::A-t-il assisté ?
is_buy::A-t-il acheté ?
is_flipo_client::Est-il client de Flipo ?
later::Plus tard
lenses_type_select::Graduation personnalisée
logout::Se déconnecter
maps::Voir sur Maps
modified_user::Utilisateur modifié
month::Mois
next::Suivant
no_spaces::Il ne peut pas y avoir d'espaces
notFound::Non trouvé
num_appointment::Num. Rendez-vous
num_order::Num. Commande
optic_history::Optiques Visitées
optic_history_action::Afficher
payments::Paiements
pending_form::Rendez-vous avec formulaire en attente
pending_lenses_form::Formulaire de lentilles en attente
phone_number::Numéro de téléphone
post_code::Code Postal
prev::Précédent
privacy::Politique de Confidentialité
reason_for_not_purchasing::Raison de non-achat
remember_fill_lenses_form::N'oubliez pas de remplir le formulaire de lentilles
required::Obligatoire
restore_appointment::Cliquez pour modifier le Rendez-vous.
restore_appointment_todo::Le rendez-vous a été marqué comme en attente.
save::Enregistrer
select_age::Sélectionnez l'âge
select_customer::Sélectionnez le client
start_date::Commence le
state::État
there_can_be_no_gaps::Il ne peut pas y avoir d'espaces
this_month::Ce mois-ci
this_week::Cette semaine
title_modal_remember_fill_form::N'oubliez pas de remplir les formulaires en attente !
today::Aujourd'hui
total_appointments::Total des Rendez-vous
unsold_appointment_panel_toggle::Commentaires
unsold_appointment_panel_toggle_error::Vous ne pouvez utiliser cette fonction que si le Rendez-vous n'a pas abouti à une vente.
unsold_appointment_panel_toggle_info::Remplissez des informations sur ce rendez-vous qui n'a pas abouti à une vente.
update_appointment::Rendez-vous Mis à Jour.
update_appointment_any::Le rendez-vous a été mis à jour.
update_appointment_canceled::Le rendez-vous a été annulé.
update_appointment_confirmed::Le rendez-vous a été confirmé.
update_appointment_error::Ce rendez-vous n'est plus modifiable.
update_appointment_not_buy::Le rendez-vous a été marqué comme Non-achat.
update_appointment_payed::Le rendez-vous a été marqué comme Payé.
updatedLang::Vous avez mis à jour la langue de l'ERP.
updatedLangTo::Langue changée en
user_already_exists::L'utilisateur existe déjà
user_last_name::Nom(s)
user_list::Liste des Utilisateurs
view_orders::Voir les commandes
week::Semaine
without_info_graduation::Sans information sur la graduation
workWeek::Semaine de Travail
form_title::Titre du bloc (optionnel)
gama_basica::Gamme Basique
gama_media::Gamme Moyenne
gama_elite::Gamme Élite
gama_top::Gamme Top
blocked::Bloqué
title_must_not_be_empty::Le titre ne doit pas être vide
accessories::Accessoires
accessory::Accessoire
advanced_filters::Filtres avancés
all_elems::Tous
antireflective::Antireflet
appointment::Rendez-vous
appointment_date::Date du rendez-vous
are_you_want_fill_lenses_form::Voulez-vous remplir le formulaire de lentilles?
at::à
back_orders::Retour aux commandes
behindhand::En retard
billed::Facturé
called::Appelé
canceled::Annulé
card::Carte
cash::Espèces
category_monofocales::Monofocal
category_progresivas::Progressif
choose_property::Choisissez une propriété
choose_value::Choisissez une valeur
clear_all::Tout effacer
close_distance::Distance de fermeture
coming_soon::Bientôt disponible
comment::Commentaire
comment_of_optic::Commentaire optique
confirmed::Confirmé
created_on::Créé le
cuppon::Coupon
date::Date
date_form::Date du formulaire
date_order::Date de la commande
decenter::Décalage
degree::Degré
delivered_customer::Client livré
delivered_local::Local livré
details::Détails
error::Erreur
eyes::Yeux
eyes_form_not_filled::Formulaire des yeux non rempli
form_of::Forme de
graduation::Graduation
hall::Salle
in_preparation::En préparation
last_30_days::30 derniers jours
last_elems::Derniers
left::Gauche
lens_form::Formulaire de lentilles
lens_order::Commande de lentilles
lens_provider::Fournisseur de lentilles
lense::Lentille
lense_form_with_id::Formulaire avec ID
lense_order_with_id::Commande de lentilles avec ID
lenses::Lentilles
lenses_type::Type de lentilles
lost::Perdu
monofocales::Monofocales
more_late::Plus tard
mount::Monture
my_last_orders::Mes dernières commandes
name::Nom
new_order::Nouvelle commande
no_comment::Pas de commentaire
none::Aucun
not_available::Non disponible
not_filled_yet::Pas encore rempli
not_graduated::Non gradué
optic_added::Optique ajoutée
optic_select::Sélectionnez votre optique
order::Commande
order_num::Num. Bon de livraison
order_of::Commande de
order_status::Statut de la commande
ordered_lenses::Lentilles commandées
paid::Payé
paid_with::Payé avec
payment_page::Page de paiement
payments_record::Paiements enregistrés
pending::En attente
pending_payment::En attente de paiement
progresivas::Progressives
phone::Téléphone
price::Prix
processed::Traité
property::Propriété
received::Reçu
recent_payments::Paiements récents
reduction::Réduction
refund_accepted::Remboursement accepté
refund_rejected::Remboursement rejeté
refund_requested::Remboursement demandé
right::Droite
search::Rechercher
search_by::Rechercher par
search_optics::Rechercher optique
select_date::Choisir une date
select_optic::Sélectionnez une optique
seller::Vendeur
sent::Envoyé
showing::Affichage
status::Statut
status_online::Payé en ligne
status_optical_error::Erreur optique
status_optical_rescheduling::Replanifié par l'optique
status_unknown::Inconnu
talc::Talc
total_paid::Total payé
total_spent::Total dépensé
treatment::Traitement
type_word::Type
value::Valeur
view_optic::Voir optique
view_order::Voir commande
watchlist_added::ajouté à votre liste de surveillance
watchlist_cleared_desc::La liste de surveillance a été effacée
watchlist_cleared_title::Liste de surveillance effacée
without_frame::Sans monture
add::Ajouter
add_device::Ajouter un nouvel appareil
amount::Montant
amount_to_pay::Montant à payer
available_tpv::TPV disponible
choose_payment_type::Choisissez le type de paiement
complementary::Paiement complémentaire
confirm::CONFIRMER
confirmation::Confirmation
could_not_be_connected::Impossible de se connecter à l'appareil
deposit::Acompte
deposit_greater_than::L'acompte doit être supérieur à
device_version::Version de l'appareil
enter_key::Entrez la clé
failed_attempt::Tentative échouée
full::Paiement complet
n_serial::N° de série
order_details::Détails de la commande
payment_greater_than::Le paiement doit être égal ou supérieur à
payment_type::Type de paiement
perfect::Parfait!
recommendations::RECOMMANDATIONS
remaining_to_be_paid::Reste à payer
remember_that::le client devra payer lorsqu'il viendra récupérer sa commande.
review_tpv::Vérifiez votre TPV pour effectuer le paiement
start_payment::Commencer le paiement
terminal_connected::Terminal connecté
title_remember_that::Rappelez-vous que
transfer_failed::Transfert échoué!
call_issuer::La carte a été refusée pour une raison inconnue
offline_pin_required::La carte a été refusée car elle nécessite un code PIN
online_or_offline_pin_required::La carte a été refusée car elle nécessite un code PIN
generic_decline::Votre carte a été refusée
incorrect_pin::Le code PIN saisi est incorrect
withdrawal_count_limit_exceeded::Le client a dépassé le solde ou la limite de crédit disponible sur sa carte
pin_try_exceeded::Le nombre de tentatives de code PIN autorisées a été dépassé
try_again::Réessayez
with_card::Avec carte
with_cash::En espèces
you_will_pay::Vous allez payer
transfer_success::Transfert réussi
success::Succès
billing::Facturation
block_by_country::Bloquer par Pays
orders::Commandes
transactions::Transactions
instructions1::ASSUREZ-VOUS QUE LA BATTERIE DU TERMINAL EST CHARGÉE.
instructions2::ALLUMEZ L'APPAREIL.
instructions3::ALLEZ DANS LES PARAMÈTRES DU TERMINAL, POUR CELA, VOUS DEVEZ GLISSER VOTRE DOIGT DU BORD GAUCHE DE L'ÉCRAN VERS LA DROITE, CE QUI OUVRIRA UN PANNEAU.
instructions4::ENSUITE, VOUS DEVEZ SÉLECTIONNER PARAMÈTRES ET ENTRER LE PIN SUIVANT : 07139. DIFFÉRENTES OPTIONS APPARAÎTRONT. SÉLECTIONNEZ "RÉSEAU" ET CONNECTEZ-VOUS À VOTRE WI-FI.
instructions5::UNE FOIS QUE VOUS ÊTES CONNECTÉ AU WI-FI, RETOURNEZ AU MENU PRÉCÉDENT ET SÉLECTIONNEZ L'OPTION "GÉNÉRER UN CODE D'APPARIEMENT". UNE CLÉ SERA GÉNÉRÉE QUE VOUS DEVEZ ENTRER DANS L'APPLICATION.
instructions6::L'ENDROIT POUR ENTRER CE CODE SE TROUVE DANS LA FENÊTRE SUIVANTE DU FORMULAIRE "AJOUTER UN NOUVEL APPAREIL". UNE FOIS ENTRÉ ET CONNECTÉ CORRECTEMENT, IL APPARAÎTRA DANS "TPV DISPONIBLES".
instructions7::SÉLECTIONNEZ LE TPV ET EFFECTUEZ LE PAIEMENT.
instructions8::DE CETTE FAÇON, LE TPV EST APPARIÉ ET ASSOCIÉ À VOTRE OPTIQUE. POUR LES OPÉRATIONS FUTURES, VOUS AUREZ SEULEMENT BESOIN DE LE CONNECTER À VOTRE RÉSEAU WIFI.
form_age::Âge
form_email::Courriel
form_is_flipo_client::Est-ce un client de Flipo?
form_last_name::Nom(s) de famille
form_post_code::Code Postal
form_select_age::Sélectionnez l'âge
form_users_name::Nom
form_users_phone::Téléphone
user_exists::Le client existe
user_not_exists::Aucun client avec ce numéro de téléphone
wizard_reminder_1::N'oubliez pas qu'en appuyant sur la touche
wizard_ESC::ESC
wizard_reminder_3::vous pouvez voir le résumé des étapes,
wizard_reminder_4::clips
wizard_reminder_5::et
wizard_reminder_6::packs
wizard_reminder_7::que vous avez
wizard_reminder_8::sélectionnés.
cos_list_tab_1::Sélectionner les produits
cos_list_tab_2::Choisir les options
cos_list_tab_3::Résumé et promotions
coic_title_1::Veuillez ajouter les produits à commander
coic_title_2::Ici, vous pourrez ajouter les produits pour compléter votre commande à FLiPO
coic_description_1::Les packs habituels : Curioso, Full, Flipante
coic_description_2::Achetez des accessoires individuellement, non associés aux packs
c_title_pack::Packs
c_title_accessories::Accessoires Individuels
c_title_notFLIPO::Vente Non FLiPO
c_desc_pack::Les packs habituels : Curieux, Full, Flipante
c_desc_accessories::Achetez des accessoires individuellement, non associés aux packs
c_desc_notFLIPO::Enregistrez ici les ventes qui ne sont pas de produits FLiPO.
c_customer_info_title::Informations sur le rendez-vous :
c_order_resume_title::Résumé des produits dans cette commande
b_order_resume_title::Ajouter plus de produits
b_order_resume_continue_title1::CONTINUER
b_order_resume_continue_title2::PRÊT À PAYER
c_promotions_title::Promotions applicables pour ce rendez-vous :
c_title_order_list::Votre Commande
b_title_order_list::CONTINUER
c_accessories_order_list_title1::Accessoires
c_accessories_order_list_title2::Accessoires Supplémentaires
c_order_item_title::Sélectionnez un produit pour commencer
c_order_item_subtitle::Personnalisez les produits à envoyer dans la commande :
c_pack_details_title::Ce Pack inclut :
list_flipante::Pack FLiPANTE
list_full::Pack Complet
list_curioso::Pack Curieux
m_title_pack_additional::(Clip supplémentaire 10 €)
list_temples::Branches
list_functional::Clips Fonctionnels
list_packaging::Étuis
list_design::Clips de Design
repairation::Réparation
list_functional_design::Clips Fonctionnels de Design
m_not_flipo::Non Disponible pour Type de Vente Stock
b_not_flipo::CONTINUER
c_type_lens_exist::Cette section ne peut pas être modifiée dans une commande existante.
c_form_lens_title::Formulaire de lentilles
c_from_lens_q1::Qui s’occupera des verres ?
c_from_lens_q2::Type de Verre
c_from_lens_q3::Traitement
c_from_lens_q4::Réduction du Traitement
c_lens_options1::Monofocal Stock
c_lens_options2::Monofocales de Fabrication
c_lens_options3::Monofocal de renforcement
c_lens_options4::Progressives de Base
c_lens_options5::Progressives Moyennes
c_lens_options6::Progressives Élite
c_lens_options7::Progressives Top
c_lens_options8::Occupationnelles
c_lens_seller_option1::Opticien associé
c_lens_seller_option2::FLiPO
c_lens_seller_option3::Aucun
c_anti_reflective::Antireflet
c_anti_reflective_plus::Antireflet Plus
c_blue_control::Contrôle Bleu
c_promotions_step1::Promotions appliquées
c_promotions_step2::Promotions applicables
c_lens_type_advice1::Pas de pack
b_resume_status_product::Complet
b_resume_status_product2::Incomplet
b_resume_status_product3::Obligatoire
b_status_product::Terminé
b_status_product2::Incomplet
b_status_product3::Obligatoire
s_m_title1::Un (1) clip fonctionnel
s_m_title2::clips fonctionnels
s_m_title3::ou un (1) clip de design
s_m_title4::ou
s_m_title5::ou
s_m_title6::clips de design (à choisir) + branches assorties
s_m_title7::Un (1) set de branches
m_number_1::Un (1)
m_number_2::Deux (2)
m_number_3::Trois (3)
m_number_4::Quatre (4)
m_number_5::Cinq (5)
m_number_6::Six (6)
m_number_7::Sept (7)
m_number_8::Huit (8)
m_number_9::Neuf (9)
m_number_10::Dix (10)
m_number_11::Onze (11)
m_number_12::Douze (12)
m_number_13::Treize (13)
m_number_14::Quatorze (14)
m_number_15::Quinze (15)
m_number_16::Seize (16)
m_number_17::Dix-sept (17)
m_number_18::Dix-huit (18)
m_number_19::Dix-neuf (19)
m_number_20::Vingt (20)
m_menu_type_lens::Type de Verres
m_menu_type_frame::Type de Monture
m_menu_type_functional::Accessoire Fonctionnel
m_menu_type_design::Clip de Design
m_menu_type_temples::Branches
m_menu_type_packaging::Emballage
i_h_cupon::Code de réduction ou carte cadeau
b_application_promotion::Appliquer
b_delete_promotion::Supprimer
b_add_promotion::Appliquer
m_title_list::LISTE DE COMMANDE
sm_title_list::Client
m_column_billing_list::PRODUIT
m_column_billing_list2::QUANTITÉ
m_column_billing_list3::Total
m_title_aditional::Accessoires supplémentaires (promotions)
m_title_subtotal::Sous-total
m_title_disc::Remise
b_title_back_list::Configurer
b_title_back_list2::Configurer la Commande
b_title_back_list3::Continuer
b_title_back_list4::CONTINUER
m_title_selection::Votre sélection
m_title_pack_selection::Pack sélectionné
m_title_pack_selection2::Type de pack :
m_title_selection2::Monture :
m_title_selection3::Pas encore sélectionné
m_title_selection4::Prix :
m_title_selection5::Type de verres
m_title_selection6::Non configuré
m_title_selection7::Traitement :
m_title_selection8::Non spécifié :
m_title_selection9::Traitement de réduction :
m_title_selection10::Ne s’applique pas
m_title_selection11::Accessoires du Pack
m_title_selection12::Remarque :
m_title_selection13::Seuls les accessoires configurés pour ce pack sont affichés ci-dessous.
m_title_selection14::SKU :
m_title_selection15_accesory::Accessoire :
m_title_selection17::Traitement :
m_title_selection18::Réduction :
m_resume_submit_title::Résumé de la commande
m_payment_title::Choisissez un mode de paiement
c_payment_type_title::Terminal de paiement FLiPO
c_payment_type_subtitle::paiement via notre terminal de paiement
c_payment_type_subtitle2::paiement en espèces
c_payment_type_subtitle3::ESPÈCES
c_payment_type_subtitle4::paiement via notre terminal de paiement
c_paymenet_input::PAIEMENT EN ESPÈCES
c_paymenet_input2::TOTAL À PAYER DOJO
c_amount_currency::Monnaie
c_process_payment::Nous traitons votre paiement
m_title_selection19::Type :
m_title_completed_selection20::Le pack est entièrement configuré et prêt.
m_title_completed_selection21::Le pack n'est pas encore entièrement configuré.
m_title_completed_selection22::Accessoires supplémentaires
m_title_completed_selection23::Accessoires sélectionnés
m_title_selection24::Promotion :
m_title_selection25::Monture :
m_title_selection26::Aucune monture sélectionnée
m_title_selection27::Important :
m_title_selection28::Une fois que vous confirmez cette commande, elle ne peut pas être modifiée. La commande sera créée et traitée immédiatement.
m_title_selection29::Prix total :
m_title_selection30::Confirmer la commande
m_title_selection31::Annuler
m_title_selection32::Confirmer
m_type_no_frame::Veuillez sélectionner un type de monture
c_form_eye_title::Formulaire des Yeux
m_form_eye::Sphère
m_form_eye2::Cylindre
m_form_eye3::Axe
m_form_eye4::Addition
m_form_eye5::Axe du Prisme
m_form_eye6::Valeur du Prisme
m_form_eye7::Centrage Monture/Client
m_form_eye8::COULOIRS DISPONIBLES POUR LA GAMME PROGRESSIVE
m_form_eye9::Couloir
m_form_eye10::Court
m_form_eye11::Long
m_form_eye12::DONNÉES SUPPLÉMENTAIRES POUR LA GAMME PROGRESSIVE TOP (FACULTATIF)
m_form_eye13::Envoyer
m_form_eye14::DNP
m_form_eye15::Hauteur
m_form_eye16::Sans prisme
m_form_eye17::Valeur du Prisme
m_form_eye18::Décentrement
m_form_eye19::Distance Maximale (cm)
m_form_eye20::Commentaires supplémentaires sur la prescription
m_form_eye21::Détails de la Prescription
m_form_eye22::Bon de Livraison:
m_form_eye23::Sphère:
m_form_eye24::Axe du Prisme:
m_form_eye25::Valeur de l’Axe:
m_form_eye26::Couloir: Court
m_form_eye27::Couloir: Long
m_form_eye_title::Formulaire de commande de lentilles:
m_error_stock_title::Désolé
m_error_stock_subtitle::Nous rencontrons des problèmes, veuillez réessayer plus tard
t_clip_additional::Accessoire supplémentaire
REMINDER_TITLE::RAPPELE-TOI QUE
REMINDER_MESSAGE::Nous avons besoin que vous complétiez le formulaire de graduation des lentilles pour pouvoir préparer votre commande. Souhaitez-vous le faire maintenant ?
YES_BUTTON::OUI
NO_BUTTON::NON
m_acdemy_title::Tutoriels ERP Academy
m_acdemy_subtitle::Tutoriels FLiPO
m_acdemy_title_card1::Tutoriel Softr pour Débutants
m_acdemy_desc_card2::Softr est l'un des principaux outils pour créer des applications internes et des portails pour votre entreprise ou organisation en utilisant vos données provenant d'Airtable, Google Sheets, SmartSuite et d'autres sources de données populaires.
m_acdemy_title_card2::Tableaux Google Sheets
m_new_table_order_s1::Numéro de Commande
m_new_table_order_s2::Nom du Client
m_new_table_order_s3::Supprimer les Filtres
m_new_table_order_c1::Nº. Bon
m_new_table_order_c2::Client
m_new_table_order_c3::Création
m_new_table_order_c4::Dernier Paiement
m_new_table_order_c5::Payé
m_new_table_order_c6::Prix Total
m_new_table_order_c7::Graduation
m_new_table_order_c8::Commande
m_new_table_order_c9::Paiement
m_new_payment_dojo_1::Temps restant :
m_new_payment_dojo_2::secondes
m_new_payment_dojo_3::EST-CE LA BONNE SIGNATURE ?
m_new_payment_dojo_4::REFUSÉ
m_new_payment_dojo_5::SAISIE DU PIN
m_new_payment_dojo_6::Nous rencontrons des problèmes pour traiter la réponse du paiement.
m_new_payment_dojo_7::Erreur de communication avec le terminal. Veuillez vérifier si la transaction a été complétée. VEUILLEZ CONTACTER VOTRE GESTIONNAIRE FLIPO
m_new_payment_dojo_8::CONTINUER
m_new_payment_dojo_9::TPV non disponible
m_new_payment_dojo_10::Réessayez dans 10 secondes ou vérifiez l'écran et les câbles du terminal. Si le problème persiste, contactez le support.
m_new_payment_dojo_11::Erreur de connexion avec le terminal
m_new_payment_dojo_12::Le paiement a-t-il été enregistré correctement ?
m_new_payment_dojo_13::NOUS COMMENÇONS LE PAIEMENT
CALENDAR::CALENDRIER
ORDERS::COMMANDES
APPOINTMENT::RENDEZ-VOUS
modal_additional_accessory_title::Accessoire supplémentaire
modal_additional_accessory_question::Souhaitez-vous ajouter un accessoire supplémentaire au pack pour 10 euros ?
modal_additional_accessory_description::Améliorez votre pack en ajoutant un accessoire supplémentaire pour seulement 10 euros.
product_list_packs_new_frames::Nouvelle collection
product_list_packs_old_frames::Martin et Memphis
tour_b_1::Préc
tour_b_2::Suiv
tour_c_title_1::Progression de votre commande
tour_c_subtitle_1::Ce titre vous montre comment progresse votre commande. Il y a un total de trois étapes que vous devez compléter.
tour_c_title_2::Liste des Packs
tour_c_subtitle_2::Cette section affiche une liste de cartes produits dans la catégorie
tour_c_subtitle_2_2::Packs
tour_c_subtitle_2_3::. Vous pouvez cliquer sur la carte des Packs pour obtenir plus de détails.
tour_c_title_3::Vente 'NOT FLIPO'
tour_c_subtitle_3::Cette section est exclusivement destinée à enregistrer des ventes qui ne concernent pas
tour_c_subtitle_3_1::FLIPO
tour_c_subtitle_3_2::. Veuillez utiliser cette section pour les ventes non liées à nos produits standards.
product_cards_accessories_title::Liste des Accessoires
product_cards_accessories_subtitle_1::Cette section affiche une liste de cartes produits dans la catégorie
product_cards_accessories_highlight::Accessoires
product_cards_accessories_subtitle_2::Vous pouvez cliquer sur la carte des Packs pour obtenir plus de détails.
product_list_title::Liste des Produits Sélectionnés
product_list_subtitle_1::Cette carte affiche une liste de produits où les articles que vous choisissez dans les catégories
product_list_highlight_1::Accessoires
product_list_highlight_2::Packs
product_list_subtitle_2::seront affichés ici.
product_list_actions::Vous pourrez : Supprimer, Ajouter et voir la quantité de chaque produit.
continue_button_title::Bouton "Continuer"
continue_button_subtitle::Le bouton "Continuer" s’activera une fois que vous aurez ajouté quelque chose à votre commande. Vous pouvez utiliser ce bouton pour passer à l’étape suivante de votre commande et continuer le processus d’achat.
order_summary_title::Résumé de votre commande
order_summary_subtitle_1::Cette carte affiche un résumé de votre commande. À côté de chaque produit, il y a une
order_summary_label::étiquette
order_summary_subtitle_2::qui indique l’état du produit : "obligatoire", "non complété" ou "complété". Cela vous aide à identifier facilement les éléments que vous devez compléter avant de finaliser votre commande.
customization_section_title::Section de Personnalisation
customization_section_subtitle_1::Cette section vous permet de terminer la personnalisation de votre produit, incluant :
customization_section_highlight_1::Type de Verres
customization_section_highlight_2::Type de Monture
customization_section_highlight_3::Accessoire Fonctionnel
customization_section_highlight_4::Clip de Design
customization_section_highlight_5::branches
customization_section_subtitle_2::. Chaque option indique son état : "obligatoire", "non complété" ou "complété", afin que vous puissiez suivre l’avancement de votre personnalisation.
client_info_card_title::Carte d’Information du Client
client_info_card_subtitle_1::Cette carte vous fournit des informations sur le client associé au rendez-vous. Elle inclut des détails tels que la date du rendez-vous, le type de client (soit
client_info_card_highlight_1::FLIPO
client_info_card_highlight_2::OPTIC
client_info_card_subtitle_2::), et les promotions qui s’appliquent à ce client. Cela vous aide à avoir une vue claire des préférences et avantages du client pour son rendez-vous.
product_configuration_card_title::Carte de Configuration du Produit
product_configuration_card_subtitle_1::Cette carte affiche toutes les options requises pour configurer le produit, qui peuvent varier selon les types. Vous pouvez sélectionner différentes caractéristiques et accessoires pour personnaliser votre produit selon vos besoins spécifiques.
product_configuration_panel_title::Panneau de Configuration des Accessoires
product_configuration_panel_subtitle_1::Ce panneau vous permet d’ajuster les paramètres des accessoires sélectionnés de manière personnalisée. Ici, vous verrez clairement les options disponibles et pourrez définir la quantité maximale à ajouter à votre sélection, assurant que vous obteniez la configuration exacte dont vous avez besoin.
product_configuration_panel_strong::Cliquez sur le panneau pour découvrir plus de détails et d’options.
product_personalize_panel_title::Panneau de Configuration des Accessoires
product_personalize_panel_subtitle_1::Ce panneau propose deux fonctions principales :
product_personalize_function_1::1. Des boutons "+" et "-" qui vous permettent d’augmenter ou de réduire la quantité du même produit.
product_personalize_function_2::2. Un bouton "Personnaliser" qui vous permet de modifier le produit sélectionné selon vos préférences.
customize_button::Personnaliser
title_select_combination::Choisissez votre combinaison
close_button::Fermer
without_stock::Sans stock
Scroll_to_see_more_products::Faites défiler pour voir plus de produits
order_comment_placeholder::Ajouter un commentaire à la commande
order_comment_label::Commentaire de la commande
payment_less_than_remaining::Paiement Moins Que le Reste
order_marked_as_billed::Commande marquée comme facturée
payment_issue::Nous sommes désolés que vous ayez rencontré des problèmes lors du paiement avec votre carte. Voici quelques recommandations pour éviter que cela ne se reproduise :
card_active::Vérifiez que votre carte est active et qu'elle n'a pas expiré. Vous pouvez consulter l'état de votre carte auprès de votre banque ou sur l'application mobile de votre établissement financier.
check_details::Assurez-vous d'avoir correctement saisi les informations de votre carte, comme le numéro, la date d'expiration et le code de sécurité. Vérifiez qu'il n'y a pas d'espaces ni de caractères spéciaux entre les chiffres.
check_balance::Assurez-vous d'avoir un solde suffisant sur votre compte pour effectuer le paiement. Si votre carte a une limite de crédit, vérifiez que vous ne l'avez pas dépassée.
sms_verification::Si votre carte a activé l'option de paiement sécurisé ou la vérification par SMS, assurez-vous que vous avez une couverture et que vous recevez le code de confirmation sur votre téléphone portable. Saisissez le code dans le délai imparti et ne le partagez avec personne.
blocked_card::Si vous avez effectué plusieurs tentatives de paiement infructueuses, il est possible que votre carte ait été temporairement bloquée pour des raisons de sécurité. Dans ce cas, contactez votre banque pour la débloquer et pouvoir l'utiliser à nouveau.
alternate_payment::Si le problème persiste, vous pouvez essayer de payer avec une autre carte ou un autre moyen de paiement disponible sur notre site web. Vous pouvez également contacter notre service client pour obtenir de l'aide.
try_again_message::Réessayez
transaction_cancelled::Transaction annulée
transaction_declined::Transaction refusée
m_not_flipo_mudle_alert::Termine de configurer les données
add_clip_modal_title::Ajouter un Clip Supplémentaire
add_clip_modal_description::Vous pouvez ajouter un clip supplémentaire à votre commande pour
add_clip_modal_price::10 euros.
add_clip_modal_add_button::Cliquez sur "Ajouter à la Commande" pour confirmer.
completar_label::Compléter
completado_label::Complété
no_aplica_label::Non applicable
OD::(OD)
OI::(OG)
D::D
I::G
confirm_all_data_lenses::Assurez-vous de remplir tous les champs
m_order_pending_table::Vous n'avez pas de commandes en attente
sphere_required_field::Champ requis pour la sphère
sphere_value_field::Valeur invalide pour la sphère
sphere_min_value::La valeur minimale est -20 pour la sphère
sphere_max_value::La valeur maximale est 20 pour la sphère
sphere_multiple_of_025::La valeur doit être un multiple de 0.25 pour la sphère
cylinder_required_field::Champ requis pour le cylindre
cylinder_value_field::La valeur doit être un nombre valide pour le cylindre
cylinder_min_value::La valeur minimale est -6 pour le cylindre
cylinder_max_value::La valeur maximale est 6 pour le cylindre
axis_required_field::Champ requis pour l'axe
axis_min_value::La valeur minimale est 0 pour l'axe
axis_max_value::La valeur maximale est 180 pour l'axe
mounting_data_required_field::Champ requis pour les données de montage
mounting_data_min_value::La valeur minimale est 20 pour les données de montage
mounting_data_max_value::La valeur maximale est 45 pour les données de montage
height_data_required_field::Champ requis pour les données de hauteur
height_data_min_value::La valeur minimale est 10 pour les données de hauteur
height_data_max_value::La valeur maximale est 40 pour les données de hauteur
firstName_required::Le prénom est obligatoire
lastName_required::Les noms de famille sont obligatoires
phoneNumber_required::Le téléphone est obligatoire
email_invalid::Email invalide
email_required::L'email est obligatoire
400001::Branches Écaille
400002::Branches Navy
400003::Branches Rioja
400004::Branches Citron Jaune
400005::Branches Rose Pâle
400006::Branches Vert Pistache
400007::Branches Lilla Verypery
400008::Branches Iced Coffee
400009::Branches Vert Olive
400010::Branches Valentina
400011::Branches Red Sunset
400012::Branches White Polar
400013::Branches Green Forest
400014::Branches Acajou
400015::Branches Zebra
400016::Branches Hawaii
400017::Branches Marbre Bleu
400018::Branches Puzzle
400019::Branches Brunch Vibes
400020::Branches Sailor
400021::Branches Kenya
400022::Branches Highlands
400023::Branches Noires
400024::Branches Chocolate
400025::Branches Red Passion
400026::Branches Valparaiso
400027::Branches Black Flowers
200001::Clip Original (Nilo) Solaire Miroir Bleu
200002::Clip Original (Nilo) Solaire Noir
200003::Clip Original (Nilo) de Conduite Nocturne
200004::Clip Original (Nilo) Solaire Miroir Orange
200005::Clip Original (Nilo) de Protection pour les Écrans
200006::Clip Model C (Ivy) Solaire Miroir Bleu
200007::Clip Model C (Ivy) Solaire Noir
200008::Clip Model C (Ivy) de Conduite Nocturne
200009::Clip Model C (Ivy) Solaire Miroir Orange
200010::Clip Model C (Ivy) de Protection pour les Écrans
200011::Clip Model A (Dante) Solaire Miroir Bleu
200012::Clip Model A (Dante) Solaire Noir
200013::Clip Model A (Dante) de Conduite Nocturne
200014::Clip Model A (Dante) Solaire Miroir Orange
200015::Clip Model A (Dante) de Protection pour les Écrans
200016::Clip Model D (Siena) Solaire Miroir Bleu
200017::Clip Model D (Siena) Solaire Noir
200018::Clip Model D (Siena) de Conduite Nocturne
200019::Clip Model D (Siena) Solaire Miroir Orange
200020::Clip Model D (Siena) de Protection pour les Écrans
0300014 + 0500011::Clip Original (Nilo) Solaire Bleu Dégradé Polarisé
0300014 + 0500012::Clip Original (Nilo) Solaire Marron Dégradé Polarisé
0300014 + 0500013::Clip Original (Nilo) Solaire Vin Dégradé Polarisé
0300014 + 0500014::Clip Original (Nilo) Solaire Cuivre Réfléchissant Polarisé
0300014 + 0500015::Clip Original (Nilo) Solaire Fuchsia Réfléchissant Polarisé
0300014 + 0500016::Clip Original (Nilo) Solaire Violet Réfléchissant Polarisé
0300014 + 0500017::Clip Original (Nilo) Solaire Miroir Réfléchissant Polarisé
0300014 + 0500018::Clip Original (Nilo) Solaire Vert Réfléchissant Polarisé
0300014 + 0500019::Clip Original (Nilo) Solaire Bleu Clair Polarisé
0300014 + 0500020::Clip Original (Nilo) Solaire Lilas Clair Polarisé
0300037 + 0500021::Clip Model C (Ivy) Solaire Bleu Dégradé Polarisé
0300037 + 0500022::Clip Model C (Ivy) Solaire Marron Dégradé Polarisé
0300037 + 0500023::Clip Model C (Ivy) Solaire Vin Dégradé Polarisé
0300037 + 0500024::Clip Model C (Ivy) Solaire Cuivre Réfléchissant Polarisé
0300037 + 0500025::Clip Model C (Ivy) Solaire Fuchsia Réfléchissant Polarisé
0300037 + 0500026::Clip Model C (Ivy) Solaire Violet Réfléchissant Polarisé
0300037 + 0500027::Clip Model C (Ivy) Solaire Miroir Réfléchissant Polarisé
0300037 + 0500028::Clip Model C (Ivy) Solaire Vert Réfléchissant Polarisé
0300037 + 0500029::Clip Model C (Ivy) Solaire Bleu Clair Polarisé
0300037 + 0500030::Clip Model C (Ivy) Solaire Lilas Clair Polarisé
0300060 + 0500031::Clip Model A (Dante) Solaire Bleu Dégradé Polarisé
0300060 + 0500037::Clip Model A (Dante) Solaire Marron Dégradé Polarisé
0300060 + 0500038::Clip Model A (Dante) Solaire Vin Dégradé Polarisé
0300060 + 0500039::Clip Model A (Dante) Solaire Cuivre Réfléchissant Polarisé
0300060 + 0500040::Clip Model A (Dante) Solaire Fuchsia Réfléchissant Polarisé
0300060 + 0500041::Clip Model A (Dante) Solaire Violet Réfléchissant Polarisé
0300060 + 0500042::Clip Model A (Dante) Solaire Miroir Réfléchissant Polarisé
0300060 + 0500043::Clip Model A (Dante) Solaire Vert Réfléchissant Polarisé
0300060 + 0500044::Clip Model A (Dante) Solaire Bleu Clair Polarisé
0300060 + 0500045::Clip Model A (Dante) Solaire Lilas Clair Polarisé
0300083 + 0500051::Clip Model D (Siena) Solaire Bleu Dégradé Polarisé
0300083 + 0500052::Clip Model D (Siena) Solaire Marron Dégradé Polarisé
0300083 + 0500053::Clip Model D (Siena) Solaire Vin Dégradé Polarisé
0300083 + 0500054::Clip Model D (Siena) Solaire Cuivre Réfléchissant Polarisé
0300083 + 0500055::Clip Model D (Siena) Solaire Fuchsia Réfléchissant Polarisé
0300083 + 0500056::Clip Model D (Siena) Solaire Violet Réfléchissant Polarisé
0300083 + 0500057::Clip Model D (Siena) Solaire Miroir Réfléchissant Polarisé
0300083 + 0500058::Clip Model D (Siena) Solaire Vert Réfléchissant Polarisé
0300083 + 0500059::Clip Model D (Siena) Solaire Bleu Clair Polarisé
0300083 + 0500060::Clip Model D (Siena) Solaire Lilas Clair Polarisé
300001::Clip Original (Nilo) Écaille
300002::Clip Original (Nilo) Navy
300003::Clip Original (Nilo) Rioja
300004::Clip Original (Nilo) Citron Jaune
300005::Clip Original (Nilo) Rose Pâle
300006::Clip Original (Nilo) Vert Pistache
300007::Clip Original (Nilo) Lilla Verypery
300008::Clip Original (Nilo) Iced Coffee
300009::Clip Original (Nilo) Vert Olive
300010::Clip Original (Nilo) Valentina
300011::Clip Original (Nilo) Red Sunset
300012::Clip Original (Nilo) White Polar
300013::Clip Original (Nilo) Green Forest
300014::Clip Original (Nilo) Base Noire
300015::Clip Original (Nilo) Acajou
300016::Clip Original (Nilo) Zebra
300017::Clip Original (Nilo) Hawaii
300018::Clip Original (Nilo) Marbre Bleu
300019::Clip Original (Nilo) Puzzle
300020::Clip Original (Nilo) Brunch Vibes
300021::Clip Original (Nilo) Sailor
300022::Clip Original (Nilo) Kenya
300023::Clip Original (Nilo) Highlands
300024::Clip Model C (Ivy) Écaille
300025::Clip Model C (Ivy) Navy
300026::Clip Model C (Ivy) Rioja
300027::Clip Model C (Ivy) Citron Jaune
300028::Clip Model C (Ivy) Rose Pâle
300029::Clip Model C (Ivy) Vert Pistache
300030::Clip Model C (Ivy) Lilla Verypery
300031::Clip Model C (Ivy) Iced Coffee
300032::Clip Model C (Ivy) Vert Olive
300033::Clip Model C (Ivy) Valentina
300034::Clip Model C (Ivy) Red Sunset
300035::Clip Model C (Ivy) White Polar
300036::Clip Model C (Ivy) Green Forest
300037::Clip Model C (Ivy) Base Noire
300038::Clip Model C (Ivy) Acajou
300039::Clip Model C (Ivy) Zebra
300040::Clip Model C (Ivy) Hawaii
300041::Clip Model C (Ivy) Marbre Bleu
300042::Clip Model C (Ivy) Puzzle
300043::Clip Model C (Ivy) Brunch Vibes
300044::Clip Model C (Ivy) Sailor
300045::Clip Model C (Ivy) Kenya
300046::Clip Model C (Ivy) Highlands
300047::Clip Model A (Dante) Écaille
300048::Clip Model A (Dante) Navy
300049::Clip Model A (Dante) Rioja
300050::Clip Model A (Dante) Citron Jaune
300051::Clip Model A (Dante) Rose Pâle
300052::Clip Model A (Dante) Vert Pistache
300053::Clip Model A (Dante) Lilla Verypery
300054::Clip Model A (Dante) Iced Coffee
300055::Clip Model A (Dante) Vert Olive
300056::Clip Model A (Dante) Valentina
300057::Clip Model A (Dante) Red Sunset
300058::Clip Model A (Dante) White Polar
300059::Clip Model A (Dante) Green Forest
300060::Clip Model A (Dante) Base Noire
300061::Clip Model A (Dante) Acajou
300062::Clip Model A (Dante) Zebra
300063::Clip Model A (Dante) Hawaii
300064::Clip Model A (Dante) Marbre Bleu
300065::Clip Model A (Dante) Puzzle
300066::Clip Model A (Dante) Brunch Vibes
300067::Clip Model A (Dante) Sailor
300068::Clip Model A (Dante) Kenya
300069::Clip Model A (Dante) Highlands
300070::Clip Model D (Siena) Écaille
300071::Clip Model D (Siena) Navy
300072::Clip Model D (Siena) Rioja
300073::Clip Model D (Siena) Citron Jaune
300074::Clip Model D (Siena) Rose Pâle
300075::Clip Model D (Siena) Vert Pistache
300076::Clip Model D (Siena) Lilla Verypery
300077::Clip Model D (Siena) Iced Coffee
300078::Clip Model D (Siena) Vert Olive
300079::Clip Model D (Siena) Valentina
300080::Clip Model D (Siena) Red Sunset
300081::Clip Model D (Siena) White Polar
300082::Clip Model D (Siena) Green Forest
300083::Clip Model D (Siena) Base Noire
300084::Clip Model D (Siena) Acajou
300085::Clip Model D (Siena) Zebra
300086::Clip Model D (Siena) Hawaii
300087::Clip Model D (Siena) Marbre Bleu
300088::Clip Model D (Siena) Puzzle
300089::Clip Model D (Siena) Brunch Vibes
300090::Clip Model D (Siena) Sailor
300091::Clip Model D (Siena) Kenya
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
100001::Monture Originale (Nilo) Noire
100002::Monture Originale (Nilo) Claire
100003::Monture Modèle C (Ivy) Noire
100004::Monture Modèle C (Ivy) Claire
100005::Monture Modèle A (Dante) Noire
100006::Monture Modèle A (Dante) Claire
100007::Monture Modèle D (Siena) Noire
100008::Monture Modèle D (Siena) Claire

`;
export default fr;
