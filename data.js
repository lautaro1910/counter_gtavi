// ─────────────────────────────────────────────────────────────
//  THE ONLY FILE YOU NEED TO EDIT.
//  Add a line to `deposits` every time someone saves money,
//  then refresh the page.
// ─────────────────────────────────────────────────────────────

window.GOAL = {
  title: "PS5 + GTA VI",
  subtitle: "Dale que se puedeee.",

  target: 2000,        // precio total de la meta
  currency: "USD",     // código ISO: USD, ARS, EUR...
  locale: "es-AR",     // formato de números y fechas: "es-AR", "en-US"...

  people: [
    { id: "me",     name: "Lauta", color: "#3ee6d2", image: "images/gta-6-vehicles-nissan-skyline.jpg" },
    { id: "friend", name: "Nica",  color: "#ff5fa2", image: "images/ULTIMATE_EDITION_GROTTI_CHEETAH_02.0rkrlsu_dg~ww.jpg" },
  ],

  // Background soundtrack (YouTube video ID)
  soundtrack: {
    youtubeId: "5dPwBWvmcbQ",
    label: "Vice City Radio",
  },

  // Used across the page: hero background (rotates), showcase gallery.
  // `hero: false` keeps an image out of the rotating background.
  mapImage: "images/Leonida_Map_Poster.08ir77j-.26ny.avif",
  gallery: [
    { src: "images/Official_Cover_Art_landscape.12.uu2irr.2_a.avif",            caption: "La meta" },
    { src: "images/Vice_City_Postcard_landscape.0v2njmlk2n-qm.avif",            caption: "Welcome to Vice City" },
    { src: "images/Leonida_Map_Poster.08ir77j-.26ny.avif",                      caption: "El mapa de Leonida", hero: false },
    { src: "images/gta-6-street-scene.avif",                                    caption: "Vida callejera" },
    { src: "images/Jason_and_Lucia_01_landscape.12x2gvspcm_3m.avif",            caption: "Jason & Lucia" },
    { src: "images/Boobie_Ike_landscape.0ldnbn87k-8mq.avif",                    caption: "Boobie Ike" },
    { src: "images/gta-6-vehicles-nissan-skyline.jpg",                          caption: "Night run" },
    { src: "images/ULTIMATE_EDITION_GROTTI_CHEETAH_02.0rkrlsu_dg~ww.jpg",       caption: "Grotti Cheetah" },
    { src: "images/Jason_Lucia_Lock_And_Load_With_Logos_landscape.13z.1pzvhq5dn.avif", caption: "Lock and load" },
  ],

  // { who: <people.id>, amount: <number>, date: "YYYY-MM-DD", note: "optional" }
  deposits: [
    { who: "me",     amount: 50, date: "2026-11-24", note: "Primer depósito" },
    { who: "friend", amount: 50, date: "2026-11-24", note: "Primer depósito" },
  ],
};
