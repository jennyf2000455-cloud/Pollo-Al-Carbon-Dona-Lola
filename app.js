const CONFIG = {
  theme: "vivid",
  business: {
    name: "DOÑA LOLA",
    subtitle: "Pollos al carbón y antojitos",
    story: [
      "En Doña Lola preparamos pollo al carbón y platillos con sabor casero, pensados para compartir en familia.",
      "Nuestro menú combina paquetes completos y órdenes individuales con acompañamientos tradicionales como arroz, puré, tortillas, salsas y pico de gallo.",
      "Trabajamos cada día para servirte rápido, con porciones generosas y el auténtico sazón del norte.",
    ],
    address: "108 E Ocean Blvd",
    cityState: "Los Fresnos, TX 78566",
    phone: "(956) 233-2329",
    whatsapp: "9562332329",
    hours: {
      monday: "11:30 AM – 9:00 PM",
      tuesday: "11:30 AM – 9:00 PM",
      wednesday: "11:30 AM – 9:00 PM",
      thursday: "11:30 AM – 9:00 PM",
      friday: "11:30 AM – 9:00 PM",
      saturday: "11:30 AM – 9:00 PM",
      sunday: "11:30 AM – 9:00 PM",
    },
    note: "Horarios pueden variar en días festivos.",
  },
  assets: {
    logo: "",
    cover: "assets/logo-donalola.jpg",
    qr: "assets/qr.png",
  },
  menuNotes: [
    "Todo acompañado con arroz, puré de papa, tortilla, salsas y pico de gallo.",
    "Precios sujetos a cambio. Imágenes solo ilustrativas.",
  ],
  menu: [
    {
      category: "Paquetes",
      items: [
        {
          name: "Paquete #1",
          price: "$28.99",
          note: "½ Pollo, ½ Carne, 1 Salchicha, 2 Frijoles, 2 Complementos",
        },
        {
          name: "Paquete #2",
          price: "$35.00",
          note: "1 Pollo, Costilla de cerdo, 2 Salchichas, 2 Frijoles, 2 Complementos",
        },
        {
          name: "Paquete #3",
          price: "$37.00",
          note: "1 Pollo, ½ Libra de carne, 2 Salchichas, 2 Frijoles, 2 Complementos",
        },
        {
          name: "Paquete #4",
          price: "$39.99",
          note: "2 Pollos, 2 Salchichas, 4 Frijoles, 4 Complementos",
        },
        {
          name: "Paquete #5",
          price: "$40.00",
          note: "1 Pollo, 1 Libra de carne asada, 2 Salchichas, 2 Frijoles, 2 Complementos",
        },
        {
          name: "Paquete #6",
          price: "$45.00",
          note: "1 Libra de carne, 1 Orden de costilla, 4 Salchichas, 4 Quesadillas, 2 Frijoles, 4 Complementos",
        },
      ],
    },
    {
      category: "Especial",
      items: [
        {
          name: "Especial Doña Lola",
          price: "$49.99",
          note: "½ Pollo, ½ Carne, ½ Costilla, ½ Alitas, 4 Salchichas, 1 Quesadilla, 4 Frijoles, 4 Cebollitas, 4 Complementos",
        },
      ],
    },
    {
      category: "Menú individual",
      items: [
        { name: "1 Pollo", price: "$21.00" },
        { name: "½ Pollo", price: "$12.00" },
        { name: "1 lb de Carne", price: "$23.99" },
        { name: "½ Carne", price: "$14.00" },
        { name: "Piernas y Muslo", price: "$9.50" },
        { name: "Orden de Alitas", price: "$14.99" },
        { name: "½ Orden de Alitas", price: "$9.00" },
        { name: "Orden de Costilla", price: "$19.99" },
        { name: "½ Orden de Costilla", price: "$13.99" },
        { name: "Combo (Pollo, Carne, Salchicha)", price: "$10.99" },
        { name: "Combo Especial (Pollo, Carne, Salchicha, Costilla)", price: "$16.99" },
      ],
    },
    {
      category: "Complementos y extras",
      items: [
        { name: "Papa Especial", price: "$10.00" },
        { name: "Papa Regular", price: "$8.50" },
        { name: "Frijoles", price: "$1.75" },
        { name: "Quesadillas (2)", price: "$1.99" },
        { name: "Salchicha", price: "$1.50" },
        { name: "Guacamole", price: "$4.99" },
        { name: "Coca Lata", price: "$1.99" },
        { name: "Coca Mexicana", price: "$3.99" },
      ],
    },
  ],
};

const heroContent = document.querySelector("#hero-content");
const historiaContent = document.querySelector("#historia-content");
const datosContent = document.querySelector("#datos-content");
const menuContent = document.querySelector("#menu-content");
const accionesContent = document.querySelector("#acciones-content");
const footerContent = document.querySelector("#footer-content");

const createElement = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};

const loadImage = (src) =>
  new Promise((resolve) => {
    if (!src) {
      resolve(false);
      return;
    }
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });

const formatHours = (hours) => [
  { label: "Lunes", value: hours.monday },
  { label: "Martes", value: hours.tuesday },
  { label: "Miércoles", value: hours.wednesday },
  { label: "Jueves", value: hours.thursday },
  { label: "Viernes", value: hours.friday },
  { label: "Sábado", value: hours.saturday },
  { label: "Domingo", value: hours.sunday },
];

const renderHero = async () => {
  document.documentElement.dataset.theme = CONFIG.theme;

  const canShowLogo = await loadImage(CONFIG.assets.logo);
  const canShowCover = await loadImage(CONFIG.assets.cover);

  if (canShowCover) {
    const heroSection = document.querySelector("#top");
    heroSection.style.backgroundImage = `url(${CONFIG.assets.cover})`;
  }

  if (canShowLogo) {
    const logo = createElement("img", "hero-logo");
    logo.src = CONFIG.assets.logo;
    logo.alt = `${CONFIG.business.name} logo`;
    heroContent.appendChild(logo);
  }

  const title = createElement("h1", null, CONFIG.business.name);
  const subtitle = createElement("p", null, CONFIG.business.subtitle);
  heroContent.append(title, subtitle);

  const actions = createElement("div", "hero-actions");
  const menuButton = createElement("a", "button primary", "Ver Menú");
  menuButton.href = "#menu";

  const whatsappButton = createElement("a", "button secondary", "WhatsApp");
  whatsappButton.href = `https://wa.me/${CONFIG.business.whatsapp}`;
  whatsappButton.target = "_blank";
  whatsappButton.rel = "noopener";

  actions.append(menuButton, whatsappButton);
  heroContent.appendChild(actions);
};

const renderHistoria = () => {
  const title = createElement("h2", "section-title", "Nuestra historia");
  const subtitle = createElement(
    "p",
    "section-subtitle",
    "Sabor casero, tradición al carbón y atención rápida."
  );

  const grid = createElement("div", "story-grid");
  CONFIG.business.story.forEach((paragraph) => {
    const card = createElement("article", "card");
    card.appendChild(createElement("p", null, paragraph));
    grid.appendChild(card);
  });

  historiaContent.append(title, subtitle, grid);
};

const renderDatos = () => {
  const title = createElement("h2", "section-title", "Datos generales");
  const subtitle = createElement(
    "p",
    "section-subtitle",
    "Visítanos o llámanos para tus pedidos."
  );

  const grid = createElement("div", "data-grid");

  const addressCard = createElement("article", "card data-card");
  addressCard.append(
    createElement("h3", null, "Dirección"),
    createElement("p", null, CONFIG.business.address),
    createElement("p", null, CONFIG.business.cityState)
  );

  const hoursCard = createElement("article", "card data-card");
  hoursCard.appendChild(createElement("h3", null, "Horarios"));
  const hoursList = createElement("ul");
  formatHours(CONFIG.business.hours).forEach((entry) => {
    const item = createElement("li");
    item.textContent = `${entry.label}: ${entry.value}`;
    hoursList.appendChild(item);
  });
  hoursCard.append(hoursList);
  if (CONFIG.business.note) {
    hoursCard.appendChild(createElement("p", null, CONFIG.business.note));
  }

  const phoneCard = createElement("article", "card data-card");
  phoneCard.append(
    createElement("h3", null, "Teléfono"),
    createElement("p", null, CONFIG.business.phone),
    createElement("p", null, `WhatsApp: ${CONFIG.business.whatsapp}`)
  );

  grid.append(addressCard, hoursCard, phoneCard);
  datosContent.append(title, subtitle, grid);
};

const renderMenu = () => {
  const title = createElement("h2", "section-title", "Menú");
  const subtitle = createElement(
    "p",
    "section-subtitle",
    "Paquetes completos y órdenes individuales con todo el sabor."
  );
  const notes = createElement("div", "menu-notes");
  CONFIG.menuNotes.forEach((note) => {
    notes.appendChild(createElement("p", null, note));
  });

  const menuWrapper = createElement("div");
  CONFIG.menu.forEach((category) => {
    const section = createElement("div", "menu-category");
    section.appendChild(createElement("h3", null, category.category));

    if (category.note) {
      section.appendChild(createElement("p", "section-subtitle", category.note));
    }

    const list = createElement("div", "menu-list");
    category.items.forEach((item) => {
      const row = createElement("div", "menu-item");
      const info = createElement("div");
      info.appendChild(createElement("h4", null, item.name));
      if (item.note) {
        info.appendChild(createElement("p", null, item.note));
      }
      const price = createElement("span", null, item.price);
      row.append(info, price);
      list.appendChild(row);
    });

    section.appendChild(list);
    menuWrapper.appendChild(section);
  });

  menuContent.append(title, subtitle, notes, menuWrapper);
};

const renderAcciones = async () => {
  const title = createElement("h2", "section-title", "Acciones rápidas");
  const subtitle = createElement(
    "p",
    "section-subtitle",
    "Haz tu pedido o consulta el menú desde tu celular."
  );

  const grid = createElement("div", "actions-grid");

  const whatsappCard = createElement("div", "actions-card");
  whatsappCard.append(
    createElement("h3", null, "WhatsApp"),
    createElement("p", null, "Responde nuestro equipo al instante para pedidos y dudas."),
    createElement("a", "button primary", "Abrir WhatsApp")
  );
  const whatsappButton = whatsappCard.querySelector("a");
  whatsappButton.href = `https://wa.me/${CONFIG.business.whatsapp}`;
  whatsappButton.target = "_blank";
  whatsappButton.rel = "noopener";

  grid.appendChild(whatsappCard);

  const canShowQr = await loadImage(CONFIG.assets.qr);
  if (canShowQr) {
    const qrCard = createElement("div", "actions-card qr-block");
    const qrImg = createElement("img");
    qrImg.src = CONFIG.assets.qr;
    qrImg.alt = "Código QR del menú";
    qrCard.append(
      createElement("h3", null, "Código QR"),
      createElement("p", null, "Escanea para ver el menú"),
      qrImg
    );
    grid.appendChild(qrCard);
  }

  accionesContent.append(title, subtitle, grid);
};

const renderFooter = () => {
  const wrapper = createElement("div", "footer-content");
  wrapper.append(
    createElement("p", null, "Precios sujetos a cambio. Imágenes solo ilustrativas."),
    createElement("a", null, "Volver arriba")
  );
  wrapper.querySelector("a").href = "#top";
  footerContent.appendChild(wrapper);
};

const init = async () => {
  await renderHero();
  renderHistoria();
  renderDatos();
  renderMenu();
  await renderAcciones();
  renderFooter();
};

init();
