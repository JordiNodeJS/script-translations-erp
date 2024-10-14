import { reorderAndAddMissingKeys } from "../ordenaTrans.js";

// locales/es.test.ts

const es = {
  // billingPage
  amount_payed: "Cantidad pagada",
  last_payment_date: "Fecha del último pago",
  order_completed: "PEDIDOS COBRADOS AL 100%",
  order_date: "Fecha del Albarán",
  orders_with_payments_not_do_it: "PEDIDOS CON PAGOS PENDIENTES",
  pending_collection: "Pendiente de cobro",
  selected_optic: "Óptica seleccionada",
  subtitle_order_completed:
    "Pedidos que han sido pagados al 100% y no están en una transacción.",
  subtitle_orders_with_payments_not_do_it:
    "Listado de pedidos pendientes de pago",
  total_price: "Precio total",

  // blockByCountryPage
  title_block_by_country: "Bloqueo de horas por país",
  select_country: "Selecciona el país",
  end_date_must_be_after_start_date:
    "La fecha final tiene que ser mayor que la fecha inicial.",

  // customerPage
  myCustomersSearch: "Buscar mis clientes",
  customersSearch: "Buscar Clientes",
  myOptics: "Mis Ópticas",
  search_customer: "Buscar Cliente",
};

const en = {
  // billingPage
  amount_payed: "Amount paid",
  last_payment_date: "Last payment date",
  order_completed: "ORDERS PAID 100%",
  order_date: "Order Date",
  orders_with_payments_not_do_it: "ORDERS WITH PENDING PAYMENTS",
  pending_collection: "Pending collection",
  selected_optic: "Selected optic",
  subtitle_order_completed:
    "Orders that have been paid 100% and are not in a transaction.",
  subtitle_orders_with_payments_not_do_it: "List of orders pending payment",
  total_price: "Total price",

  // blockByCountryPage
  title_block_by_country: "Block hours by country",
  select_country: "Select country",
  end_date_must_be_after_start_date:
    "The end date must be greater than the start date.",

  // customerPage
  myCustomersSearch: "Search my customers",
  customersSearch: "Search Customers",
  myOptics: "My Optics",
  search_customer: "Search Customer",
};

const originalContent = `
// billingPage
amount_payed: "Cantidad pagada",
last_payment_date: "Fecha del último pago",
order_completed: "PEDIDOS COBRADOS AL 100%",
order_date: "Fecha del Albarán",
orders_with_payments_not_do_it: "PEDIDOS CON PAGOS PENDIENTES",
pending_collection: "Pendiente de cobro",
selected_optic: "Óptica seleccionada",
subtitle_order_completed:
	"Pedidos que han sido pagados al 100% y no están en una transacción.",
subtitle_orders_with_payments_not_do_it:
	"Listado de pedidos pendientes de pago",
total_price: "Precio total",

// blockByCountryPage
title_block_by_country: "Bloqueo de horas por país",
select_country: "Selecciona el país",
end_date_must_be_after_start_date:
	"La fecha final tiene que ser mayor que la fecha inicial.",

// customerPage
myCustomersSearch: "Buscar mis clientes",
customersSearch: "Buscar Clientes",
myOptics: "Mis Ópticas",
search_customer: "Buscar Cliente",
`;

describe("reorderAndAddMissingKeys", () => {
  test("should reorder keys based on reference object", () => {
    const result = reorderAndAddMissingKeys(es, en, originalContent);
    const expectedOrder = Object.keys(es);
    const resultOrder = Object.keys(result).filter(
      (key) => !key.startsWith("__")
    );
    expect(resultOrder).toEqual(expectedOrder);
  });

  test("should add missing keys with empty string values", () => {
    const result = reorderAndAddMissingKeys(es, en, originalContent);
    const missingKeys = Object.keys(es).filter((key) => !(key in en));
    missingKeys.forEach((key) => {
      expect(result[key]).toBe("");
    });
  });

  test("should preserve comments and spacing", () => {
    const result = reorderAndAddMissingKeys(es, en, originalContent);
    const commentKeys = Object.keys(result).filter((key) =>
      key.startsWith("__comment_")
    );
    const spacingKeys = Object.keys(result).filter((key) =>
      key.startsWith("__spacing_")
    );

    commentKeys.forEach((key) => {
      expect(result[key]).toMatch(/\/\/.*/);
    });

    spacingKeys.forEach((key) => {
      expect(result[key]).toBe("\n");
    });
  });
});
