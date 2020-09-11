var app = new Vue({
    el: '#app',
    data: {
        msjlocal: "msjlocalalamcen",
        bdlocalcliente: "bdclientes",
        bdlocalproveedor: "bdproveedor",
        bdlocalproducto: "bdproducto",
        /* locales para compra */
        bdlocalcomprageneral: "bdcomprageneral",
        bdlocaltempcomprageneral: "bdtempcomprageneral",
        bdlocaltempcompra: "bdtempcompra",
        bdlocalcompra: "bdcompra",
        bdlocallistacompra: "bdlistacompra",
        bdlocaldetallecompra: "bddatallecompra",
        bdlocallistpagocompra: "bdlistpagocompra",
        /* locales para POS */
        bdlocalpos: "bdpos",
        bdlocalclientpos: "bdclientpos",
        bdlocalfacturas: "bdfacturas",
        bdlocalfacturadetalle: "bdfacturadetalle",
        bdlocaltempfact: "bdtempfact",
        bdlocaltempfactdeta: "bdtempfactdeta",
        productos: [
            {
                "id": 1,
                "descripcion": "Acople flexible lavamanos y lavaplatos tipo ref: 380140001 grival",
                "uns": "Un",
                "codigo": 857707,
                "iva": 19,
                "stock": 8,
                "costo": 19000,
                "venta": 23750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 2,
                "descripcion": "Acople griflex lavamanos",
                "uns": "Un",
                "codigo": 600418,
                "iva": 19,
                "stock": 5,
                "costo": 11000,
                "venta": 13750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 3,
                "descripcion": "Agua stop tipo ref: 54149 grival",
                "uns": "Un",
                "codigo": 963050,
                "iva": 19,
                "stock": 14,
                "costo": 29000,
                "venta": 36250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 4,
                "descripcion": "Agua stop tipo ref: 9792grival",
                "uns": "Un",
                "codigo": 518800,
                "iva": 19,
                "stock": 19,
                "costo": 28000,
                "venta": 35000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 5,
                "descripcion": "Alambre negro x kilo",
                "uns": "Kl",
                "codigo": 349647,
                "iva": 19,
                "stock": 5,
                "costo": 23000,
                "venta": 28750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 6,
                "descripcion": "Alicate 8Pul tipo stanley",
                "uns": "Un",
                "codigo": 111615,
                "iva": 19,
                "stock": 19,
                "costo": 26000,
                "venta": 32500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 7,
                "descripcion": "Angulo de 2 x 1/4 x 6 mts.",
                "uns": "Un",
                "codigo": 401575,
                "iva": 19,
                "stock": 13,
                "costo": 16000,
                "venta": 20000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 8,
                "descripcion": "Angulos de 1 x 1/8Pul",
                "uns": "Un",
                "codigo": 215256,
                "iva": 19,
                "stock": 13,
                "costo": 20000,
                "venta": 25000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 9,
                "descripcion": "Angulos de 1/2Pul x 1/8Pul",
                "uns": "Un",
                "codigo": 622535,
                "iva": 19,
                "stock": 12,
                "costo": 18000,
                "venta": 22500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 10,
                "descripcion": "Anilina cafe carmelita",
                "uns": "Sb",
                "codigo": 645111,
                "iva": 19,
                "stock": 20,
                "costo": 12000,
                "venta": 15000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 11,
                "descripcion": "Anilina caoba",
                "uns": "Sb",
                "codigo": 343517,
                "iva": 19,
                "stock": 19,
                "costo": 12000,
                "venta": 15000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 12,
                "descripcion": "Anticorrosivo negro x galon tipo pintuco",
                "uns": "Gl",
                "codigo": 731808,
                "iva": 19,
                "stock": 10,
                "costo": 14000,
                "venta": 17500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 13,
                "descripcion": "Barniz para madera x galon",
                "uns": "Gl",
                "codigo": 406006,
                "iva": 19,
                "stock": 11,
                "costo": 27000,
                "venta": 33750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 14,
                "descripcion": "Barniz tipo every transparente para madera x galon",
                "uns": "Gl",
                "codigo": 775558,
                "iva": 19,
                "stock": 17,
                "costo": 13000,
                "venta": 16250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 15,
                "descripcion": "Boquilla o piton tramo para manguera",
                "uns": "Un",
                "codigo": 469131,
                "iva": 19,
                "stock": 17,
                "costo": 26000,
                "venta": 32500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 16,
                "descripcion": "Broca para muro 5/16",
                "uns": "Un",
                "codigo": 265920,
                "iva": 19,
                "stock": 8,
                "costo": 20000,
                "venta": 25000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 17,
                "descripcion": "Brocha para hierro de 2Pul",
                "uns": "Un",
                "codigo": 605868,
                "iva": 19,
                "stock": 9,
                "costo": 18000,
                "venta": 22500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 18,
                "descripcion": "Brocha para hierro de 4Pul",
                "uns": "Un",
                "codigo": 274717,
                "iva": 19,
                "stock": 10,
                "costo": 22000,
                "venta": 27500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 19,
                "descripcion": "Bugias nqf-1 box (guadaña)",
                "uns": "Un",
                "codigo": 503516,
                "iva": 19,
                "stock": 6,
                "costo": 21000,
                "venta": 26250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 20,
                "descripcion": "Cable cortacesped stihl 12,5 lbras negro 591 mts 3,3",
                "uns": "Rl",
                "codigo": 105588,
                "iva": 19,
                "stock": 8,
                "costo": 10000,
                "venta": 12500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 21,
                "descripcion": "Cajas de herramientas",
                "uns": "Un",
                "codigo": 680187,
                "iva": 19,
                "stock": 11,
                "costo": 17000,
                "venta": 21250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 22,
                "descripcion": "Cal viva x bulto de 50 kilos",
                "uns": "Bu",
                "codigo": 719528,
                "iva": 19,
                "stock": 16,
                "costo": 16000,
                "venta": 20000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 23,
                "descripcion": "Caretas protectora tipo arseg",
                "uns": "Un",
                "codigo": 522321,
                "iva": 19,
                "stock": 11,
                "costo": 28000,
                "venta": 35000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 24,
                "descripcion": "Cemento blanco x kilo",
                "uns": "Kl",
                "codigo": 115507,
                "iva": 19,
                "stock": 9,
                "costo": 17000,
                "venta": 21250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 25,
                "descripcion": "Cemento gris x 50 kilos tipo argos",
                "uns": "Bu",
                "codigo": 864170,
                "iva": 19,
                "stock": 11,
                "costo": 11000,
                "venta": 13750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 26,
                "descripcion": "Chazo anclaje 1/2 x 2Pul",
                "uns": "Un",
                "codigo": 159276,
                "iva": 19,
                "stock": 15,
                "costo": 16000,
                "venta": 20000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 27,
                "descripcion": "Chazo anclaje 1/4 x 2Pul",
                "uns": "Un",
                "codigo": 367270,
                "iva": 19,
                "stock": 17,
                "costo": 20000,
                "venta": 25000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 28,
                "descripcion": "Chazo anclaje 3/8 x 2 1/2Pul",
                "uns": "Un",
                "codigo": 383431,
                "iva": 19,
                "stock": 8,
                "costo": 29000,
                "venta": 36250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 29,
                "descripcion": "Chazo de expansion de 1/4 x 2",
                "uns": "Un",
                "codigo": 900294,
                "iva": 19,
                "stock": 14,
                "costo": 14000,
                "venta": 17500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 30,
                "descripcion": "Chazos plasticos de 3/8Pul",
                "uns": "Un",
                "codigo": 205991,
                "iva": 19,
                "stock": 9,
                "costo": 23000,
                "venta": 28750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 31,
                "descripcion": "Cinta de seguridad x 50 mts. (peligro)",
                "uns": "Rl",
                "codigo": 326231,
                "iva": 19,
                "stock": 9,
                "costo": 11000,
                "venta": 13750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 32,
                "descripcion": "Cinta de teflon",
                "uns": "Rl",
                "codigo": 259253,
                "iva": 19,
                "stock": 18,
                "costo": 17000,
                "venta": 21250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 33,
                "descripcion": "Cinta metrica x 5 mts. Tipo stanley",
                "uns": "Un",
                "codigo": 348391,
                "iva": 19,
                "stock": 16,
                "costo": 13000,
                "venta": 16250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 34,
                "descripcion": "Cinta metrica tipo komelon de 20 metros",
                "uns": "Un",
                "codigo": 514049,
                "iva": 19,
                "stock": 7,
                "costo": 21000,
                "venta": 26250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 35,
                "descripcion": "Cinta metrica tipo komelon x 30 metros",
                "uns": "Un",
                "codigo": 141534,
                "iva": 19,
                "stock": 14,
                "costo": 19000,
                "venta": 23750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 36,
                "descripcion": "Cinta tipo sika multiseal",
                "uns": "Rl",
                "codigo": 746647,
                "iva": 19,
                "stock": 19,
                "costo": 25000,
                "venta": 31250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 37,
                "descripcion": "Colbon madera x galon",
                "uns": "Gl",
                "codigo": 392931,
                "iva": 19,
                "stock": 10,
                "costo": 18000,
                "venta": 22500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 38,
                "descripcion": "Colecta gruesa - pieza 4 x 4 metros",
                "uns": "Un",
                "codigo": 567607,
                "iva": 19,
                "stock": 16,
                "costo": 28000,
                "venta": 35000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 39,
                "descripcion": "Conjunto griferia atlantis tipo ref: 806800001 grival",
                "uns": "Un",
                "codigo": 573529,
                "iva": 19,
                "stock": 12,
                "costo": 17000,
                "venta": 21250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 40,
                "descripcion": "Cortafrio tipo stanley",
                "uns": "Un",
                "codigo": 423142,
                "iva": 19,
                "stock": 7,
                "costo": 19000,
                "venta": 23750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 41,
                "descripcion": "Cuchilla de guadaña tipo bellota blandes (still)",
                "uns": "Un",
                "codigo": 106643,
                "iva": 19,
                "stock": 20,
                "costo": 20000,
                "venta": 25000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 42,
                "descripcion": "Destornillador de estrella tipo stanley",
                "uns": "Un",
                "codigo": 803358,
                "iva": 19,
                "stock": 5,
                "costo": 29000,
                "venta": 36250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 43,
                "descripcion": "Destornillador de pala  tipo stanley",
                "uns": "Un",
                "codigo": 718211,
                "iva": 19,
                "stock": 6,
                "costo": 14000,
                "venta": 17500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 44,
                "descripcion": "Disco para corte de metal (pulidora grande)",
                "uns": "Un",
                "codigo": 578337,
                "iva": 19,
                "stock": 6,
                "costo": 19000,
                "venta": 23750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 45,
                "descripcion": "Empaque desagues tipo ref: 020340001 grival",
                "uns": "Un",
                "codigo": 197453,
                "iva": 19,
                "stock": 18,
                "costo": 25000,
                "venta": 31250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 46,
                "descripcion": "Empaque sello unidad tipo ref: 18693331 grival",
                "uns": "Un",
                "codigo": 494585,
                "iva": 19,
                "stock": 20,
                "costo": 14000,
                "venta": 17500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 47,
                "descripcion": "Estuco listo tipo sika x 25 kilos",
                "uns": "Bu",
                "codigo": 338046,
                "iva": 19,
                "stock": 11,
                "costo": 17000,
                "venta": 21250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 48,
                "descripcion": "Estuco plástico rx x cuñete",
                "uns": "Cte",
                "codigo": 153384,
                "iva": 19,
                "stock": 11,
                "costo": 22000,
                "venta": 27500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 49,
                "descripcion": "Fiber sound tipo piramidal de 100 mm x 100 mm, espesor 70 mm",
                "uns": "Un",
                "codigo": 583214,
                "iva": 19,
                "stock": 5,
                "costo": 21000,
                "venta": 26250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 50,
                "descripcion": "Flexometro 3mt /10 global tipo stanley",
                "uns": "Un",
                "codigo": 833919,
                "iva": 19,
                "stock": 20,
                "costo": 22000,
                "venta": 27500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 51,
                "descripcion": "Flexometro metrico metalico de 7.5 mts.",
                "uns": "Un",
                "codigo": 905012,
                "iva": 19,
                "stock": 6,
                "costo": 19000,
                "venta": 23750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 52,
                "descripcion": "Griferia lavamanos tipo ref: 54149 grival",
                "uns": "Un",
                "codigo": 289172,
                "iva": 19,
                "stock": 12,
                "costo": 25000,
                "venta": 31250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 53,
                "descripcion": "Griferia orinal automatica tipo ref: 713000001grival",
                "uns": "Un",
                "codigo": 759796,
                "iva": 19,
                "stock": 12,
                "costo": 23000,
                "venta": 28750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 54,
                "descripcion": "Griferia orinal tipo grival",
                "uns": "Un",
                "codigo": 602804,
                "iva": 19,
                "stock": 9,
                "costo": 24000,
                "venta": 30000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 55,
                "descripcion": "Griferia para lavamanos tipo grival ref: 501400001",
                "uns": "Un",
                "codigo": 699405,
                "iva": 19,
                "stock": 18,
                "costo": 21000,
                "venta": 26250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 56,
                "descripcion": "Griferia sanitario tipo ref: 806320001 grival",
                "uns": "Un",
                "codigo": 150404,
                "iva": 19,
                "stock": 14,
                "costo": 25000,
                "venta": 31250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 57,
                "descripcion": "Grifo con sensor tipo grival ref: 70600",
                "uns": "Un",
                "codigo": 564149,
                "iva": 19,
                "stock": 18,
                "costo": 11000,
                "venta": 13750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 58,
                "descripcion": "Grifo tipo pesado tipo ref: 977210001 grival",
                "uns": "Un",
                "codigo": 168805,
                "iva": 19,
                "stock": 13,
                "costo": 16000,
                "venta": 20000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 59,
                "descripcion": "Guante tipo ingeniero largo",
                "uns": "Pr",
                "codigo": 502721,
                "iva": 19,
                "stock": 17,
                "costo": 20000,
                "venta": 25000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 60,
                "descripcion": "Hacha de pico tipo bombero",
                "uns": "Un",
                "codigo": 443171,
                "iva": 19,
                "stock": 18,
                "costo": 24000,
                "venta": 30000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 61,
                "descripcion": "Hoja de segueta tipo nichonson",
                "uns": "Un",
                "codigo": 886156,
                "iva": 19,
                "stock": 9,
                "costo": 15000,
                "venta": 18750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 62,
                "descripcion": "Jalon en acero o baliza (topografia)",
                "uns": "Un",
                "codigo": 177629,
                "iva": 19,
                "stock": 16,
                "costo": 22000,
                "venta": 27500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 63,
                "descripcion": "Juego de destornilladores tipo stanley",
                "uns": "Jg",
                "codigo": 566802,
                "iva": 19,
                "stock": 6,
                "costo": 26000,
                "venta": 32500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 64,
                "descripcion": "Kit lavaplatos tipo ref: 545600001 grival",
                "uns": "Kt",
                "codigo": 639776,
                "iva": 19,
                "stock": 13,
                "costo": 10000,
                "venta": 12500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 65,
                "descripcion": "Lamina calibre cr 0.85 20 1.22x2.44",
                "uns": "Un",
                "codigo": 578384,
                "iva": 19,
                "stock": 20,
                "costo": 26000,
                "venta": 32500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 66,
                "descripcion": "Lamina de triplex  20 mm tipo pizano",
                "uns": "Un",
                "codigo": 827535,
                "iva": 19,
                "stock": 10,
                "costo": 21000,
                "venta": 26250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 67,
                "descripcion": "Lamina de triplex 0.4 mm tipo pizano",
                "uns": "Un",
                "codigo": 275810,
                "iva": 19,
                "stock": 12,
                "costo": 20000,
                "venta": 25000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 68,
                "descripcion": "Lamina de triplex overlay 1,20 x 2,40 m",
                "uns": "Un",
                "codigo": 648399,
                "iva": 19,
                "stock": 8,
                "costo": 14000,
                "venta": 17500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 69,
                "descripcion": "Lavamanos blnco 40 cm ancho x profundidad 28 cm tipo corona",
                "uns": "Un",
                "codigo": 331259,
                "iva": 19,
                "stock": 5,
                "costo": 15000,
                "venta": 18750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 70,
                "descripcion": "Lija en tela no. 100 tipo abracol",
                "uns": "Mt",
                "codigo": 245520,
                "iva": 19,
                "stock": 19,
                "costo": 23000,
                "venta": 28750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 71,
                "descripcion": "Lija para agua no. 600 tipo abracol",
                "uns": "Pg",
                "codigo": 920588,
                "iva": 19,
                "stock": 5,
                "costo": 23000,
                "venta": 28750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 72,
                "descripcion": "Lija tipo agua no. 120 tipo abracol",
                "uns": "Pg",
                "codigo": 898876,
                "iva": 19,
                "stock": 6,
                "costo": 15000,
                "venta": 18750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 73,
                "descripcion": "Lija tipo agua no. 150 tipo abracol",
                "uns": "Hj",
                "codigo": 289629,
                "iva": 19,
                "stock": 12,
                "costo": 22000,
                "venta": 27500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 74,
                "descripcion": "Lija tipo agua no. 220 tipo abracol",
                "uns": "Hj",
                "codigo": 540719,
                "iva": 19,
                "stock": 20,
                "costo": 25000,
                "venta": 31250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 75,
                "descripcion": "Lija tipo agua no. 320 tipo abracol",
                "uns": "Hj",
                "codigo": 971506,
                "iva": 19,
                "stock": 16,
                "costo": 13000,
                "venta": 16250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 76,
                "descripcion": "Lija tipo agua no. 60 tipo abracol",
                "uns": "Pg",
                "codigo": 367593,
                "iva": 19,
                "stock": 18,
                "costo": 19000,
                "venta": 23750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 77,
                "descripcion": "Lija tipo agua no. 80 tipo abracol",
                "uns": "Mt",
                "codigo": 486110,
                "iva": 19,
                "stock": 17,
                "costo": 27000,
                "venta": 33750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 78,
                "descripcion": "Lima plana tipo incolma",
                "uns": "Un",
                "codigo": 317466,
                "iva": 19,
                "stock": 20,
                "costo": 21000,
                "venta": 26250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 79,
                "descripcion": "Lima redonda para motosierra sthil",
                "uns": "Un",
                "codigo": 750418,
                "iva": 19,
                "stock": 5,
                "costo": 24000,
                "venta": 30000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 80,
                "descripcion": "Llave para lavaplatos tipo grival ref: 50500",
                "uns": "Un",
                "codigo": 712583,
                "iva": 19,
                "stock": 7,
                "costo": 20000,
                "venta": 25000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 81,
                "descripcion": "Llave automatica para mesa tipo ref: 71100 grival",
                "uns": "Un",
                "codigo": 219240,
                "iva": 19,
                "stock": 16,
                "costo": 24000,
                "venta": 30000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 82,
                "descripcion": "Llave cocina liviana tipo ref: 977700001 grival",
                "uns": "Un",
                "codigo": 909967,
                "iva": 19,
                "stock": 6,
                "costo": 12000,
                "venta": 15000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 83,
                "descripcion": "Llave de bugia con estrias tipo stihl",
                "uns": "Un",
                "codigo": 408307,
                "iva": 19,
                "stock": 13,
                "costo": 19000,
                "venta": 23750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 84,
                "descripcion": "Llave de copa tipo stihl",
                "uns": "Un",
                "codigo": 205048,
                "iva": 19,
                "stock": 17,
                "costo": 16000,
                "venta": 20000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 85,
                "descripcion": "Llave de jardin pesada tipo ref. 977300001 grival",
                "uns": "Un",
                "codigo": 314585,
                "iva": 19,
                "stock": 6,
                "costo": 15000,
                "venta": 18750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 86,
                "descripcion": "Llave de pesto mediana 10Pul tipo stanley",
                "uns": "Un",
                "codigo": 767105,
                "iva": 19,
                "stock": 17,
                "costo": 14000,
                "venta": 17500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 87,
                "descripcion": "Llave espanner",
                "uns": "Un",
                "codigo": 762179,
                "iva": 19,
                "stock": 6,
                "costo": 16000,
                "venta": 20000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 88,
                "descripcion": "Llave individual cierre rapido tipo ref, 54149 grival",
                "uns": "Un",
                "codigo": 399332,
                "iva": 19,
                "stock": 14,
                "costo": 14000,
                "venta": 17500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 89,
                "descripcion": "Llave individual para lavamanos tipo ref: 511650001 grival",
                "uns": "Un",
                "codigo": 771021,
                "iva": 19,
                "stock": 15,
                "costo": 26000,
                "venta": 32500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 90,
                "descripcion": "Llave para lavaplatos tipo grival",
                "uns": "Un",
                "codigo": 985294,
                "iva": 19,
                "stock": 20,
                "costo": 19000,
                "venta": 23750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 91,
                "descripcion": "Machete barrigon 18Pul /20Pul niquelada",
                "uns": "Un",
                "codigo": 378008,
                "iva": 19,
                "stock": 15,
                "costo": 28000,
                "venta": 35000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 92,
                "descripcion": "Machete peinilla 16Pul tipo bellota",
                "uns": "Un",
                "codigo": 435085,
                "iva": 19,
                "stock": 13,
                "costo": 20000,
                "venta": 25000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 93,
                "descripcion": "Malla pollo x 1,8 mts x 36 mts",
                "uns": "Rl",
                "codigo": 150331,
                "iva": 19,
                "stock": 19,
                "costo": 29000,
                "venta": 36250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 94,
                "descripcion": "Malla zaranda 6x6x30 mts.",
                "uns": "Rl",
                "codigo": 584904,
                "iva": 19,
                "stock": 14,
                "costo": 12000,
                "venta": 15000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 95,
                "descripcion": "Manguera para lavamanos ref: 380140001 tipo grival",
                "uns": "Un",
                "codigo": 857664,
                "iva": 19,
                "stock": 10,
                "costo": 18000,
                "venta": 22500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 96,
                "descripcion": "Manguera sanitario tipo ref: 380130001 grival",
                "uns": "Un",
                "codigo": 345595,
                "iva": 19,
                "stock": 6,
                "costo": 14000,
                "venta": 17500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 97,
                "descripcion": "Manija sanitario tipo ref: 93500001 grival",
                "uns": "Un",
                "codigo": 330969,
                "iva": 19,
                "stock": 10,
                "costo": 25000,
                "venta": 31250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 98,
                "descripcion": "Marco para cegueta metalico tipo incolma",
                "uns": "Un",
                "codigo": 469560,
                "iva": 19,
                "stock": 15,
                "costo": 22000,
                "venta": 27500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 99,
                "descripcion": "Martillo mediano tipo stanley",
                "uns": "Un",
                "codigo": 692682,
                "iva": 19,
                "stock": 15,
                "costo": 21000,
                "venta": 26250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 100,
                "descripcion": "Masilla super x cuarto tipo poliescol",
                "uns": "Un",
                "codigo": 824899,
                "iva": 19,
                "stock": 9,
                "costo": 25000,
                "venta": 31250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 101,
                "descripcion": "Mezclador lavamanos 4Pul cj tipo ref: 511500001 grival",
                "uns": "Un",
                "codigo": 477604,
                "iva": 19,
                "stock": 8,
                "costo": 24000,
                "venta": 30000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 102,
                "descripcion": "Nivel en aluminio 12Pul tipo stanley-42072",
                "uns": "Un",
                "codigo": 713419,
                "iva": 19,
                "stock": 16,
                "costo": 21000,
                "venta": 26250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 103,
                "descripcion": "Palin (con cabo) tipo herragro",
                "uns": "Un",
                "codigo": 844525,
                "iva": 19,
                "stock": 6,
                "costo": 10000,
                "venta": 12500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 104,
                "descripcion": "Pegante industrial tipo axw",
                "uns": "Gl",
                "codigo": 753451,
                "iva": 19,
                "stock": 10,
                "costo": 12000,
                "venta": 15000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 105,
                "descripcion": "Pegante tipo boxer x galon",
                "uns": "Gl",
                "codigo": 633212,
                "iva": 19,
                "stock": 12,
                "costo": 10000,
                "venta": 12500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 106,
                "descripcion": "Peinilla 20 pulgadas tipo aguila corneta herragro",
                "uns": "Un",
                "codigo": 878486,
                "iva": 19,
                "stock": 15,
                "costo": 16000,
                "venta": 20000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 107,
                "descripcion": "Piedra de afilar",
                "uns": "Un",
                "codigo": 965544,
                "iva": 19,
                "stock": 12,
                "costo": 25000,
                "venta": 31250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 108,
                "descripcion": "Pintura anticorrosiva color gris tipo pintuco x galon",
                "uns": "Gl",
                "codigo": 259622,
                "iva": 19,
                "stock": 13,
                "costo": 21000,
                "venta": 26250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 109,
                "descripcion": "Pintura anticorrosiva tipo pintuco color rojo x galon",
                "uns": "Gl",
                "codigo": 273709,
                "iva": 19,
                "stock": 10,
                "costo": 29000,
                "venta": 36250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 110,
                "descripcion": "Pintura azul preparada según muestra x galon",
                "uns": "Gl",
                "codigo": 118128,
                "iva": 19,
                "stock": 15,
                "costo": 28000,
                "venta": 35000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 111,
                "descripcion": "Pintura en aceite color blanco tipo pintulan x galon",
                "uns": "Gl",
                "codigo": 398957,
                "iva": 19,
                "stock": 16,
                "costo": 17000,
                "venta": 21250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 112,
                "descripcion": "Pintura en aceite color negro tipo pintulan x galon",
                "uns": "Gl",
                "codigo": 285940,
                "iva": 19,
                "stock": 8,
                "costo": 25000,
                "venta": 31250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 113,
                "descripcion": "Pintura en aceite color verde colonial x galon (preparado)",
                "uns": "Gl",
                "codigo": 877337,
                "iva": 19,
                "stock": 11,
                "costo": 25000,
                "venta": 31250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 114,
                "descripcion": "Pintura en aceite x 1/4 tipo pintuco",
                "uns": "Un",
                "codigo": 236039,
                "iva": 19,
                "stock": 12,
                "costo": 14000,
                "venta": 17500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 115,
                "descripcion": "Pintura en vinilo tipo i color blanco arena, tipo pintulan tipo uno",
                "uns": "Cte",
                "codigo": 443684,
                "iva": 19,
                "stock": 6,
                "costo": 21000,
                "venta": 26250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 116,
                "descripcion": "Pintura en vinilo tipo i color blanco durazno tipo pintulan tipo uno",
                "uns": "Cte",
                "codigo": 544604,
                "iva": 19,
                "stock": 6,
                "costo": 19000,
                "venta": 23750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 117,
                "descripcion": "Pintura en vinilo tipo i color blanco hueso, tipo pintulan tipo uno",
                "uns": "Cte",
                "codigo": 747461,
                "iva": 19,
                "stock": 19,
                "costo": 28000,
                "venta": 35000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 118,
                "descripcion": "Pintura en vinilo tipo i color blanco tipo pintulan tipo uno",
                "uns": "Cte",
                "codigo": 545334,
                "iva": 19,
                "stock": 10,
                "costo": 28000,
                "venta": 35000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 119,
                "descripcion": "Pintura viniltex blanco tipo pintuco x galon",
                "uns": "Gl",
                "codigo": 219173,
                "iva": 19,
                "stock": 10,
                "costo": 13000,
                "venta": 16250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 120,
                "descripcion": "Plastico invernadero 7 mts. Ancho calibre 7",
                "uns": "Mt",
                "codigo": 230251,
                "iva": 19,
                "stock": 19,
                "costo": 25000,
                "venta": 31250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 121,
                "descripcion": "Polisombra 30%-40% negra",
                "uns": "Mt",
                "codigo": 310904,
                "iva": 19,
                "stock": 20,
                "costo": 17000,
                "venta": 21250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 122,
                "descripcion": "Promical x bulto",
                "uns": "Bu",
                "codigo": 976073,
                "iva": 19,
                "stock": 20,
                "costo": 19000,
                "venta": 23750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 123,
                "descripcion": "Puntilla 1 1/2Pul con cabeza",
                "uns": "Cj",
                "codigo": 580163,
                "iva": 19,
                "stock": 20,
                "costo": 23000,
                "venta": 28750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 124,
                "descripcion": "Puntilla 3/4 de pulgada",
                "uns": "Lb",
                "codigo": 248999,
                "iva": 19,
                "stock": 16,
                "costo": 10000,
                "venta": 12500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 125,
                "descripcion": "Puntilla 3/4 sin cabeza",
                "uns": "Cj",
                "codigo": 571804,
                "iva": 19,
                "stock": 6,
                "costo": 19000,
                "venta": 23750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 126,
                "descripcion": "Puntilla con cabeza de 1Pul",
                "uns": "Cj",
                "codigo": 228647,
                "iva": 19,
                "stock": 8,
                "costo": 29000,
                "venta": 36250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 127,
                "descripcion": "Puntilla de 2Pul con cabeza",
                "uns": "Lb",
                "codigo": 124987,
                "iva": 19,
                "stock": 10,
                "costo": 28000,
                "venta": 35000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 128,
                "descripcion": "Rack piso 1.20 mts.",
                "uns": "Un",
                "codigo": 941870,
                "iva": 19,
                "stock": 19,
                "costo": 18000,
                "venta": 22500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 129,
                "descripcion": "Rastrillo tipo grancampo",
                "uns": "Un",
                "codigo": 147012,
                "iva": 19,
                "stock": 9,
                "costo": 23000,
                "venta": 28750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 130,
                "descripcion": "Registro ducha tipo ref: 51490001 grival",
                "uns": "Un",
                "codigo": 490533,
                "iva": 19,
                "stock": 9,
                "costo": 24000,
                "venta": 30000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 131,
                "descripcion": "Rejilla sencilla 2Pul x 3Pul tipo ref: 937070001 grival",
                "uns": "Un",
                "codigo": 974782,
                "iva": 19,
                "stock": 13,
                "costo": 25000,
                "venta": 31250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 132,
                "descripcion": "Remache pop 6-4x5 cja x 250 uns.",
                "uns": "Cj",
                "codigo": 531381,
                "iva": 19,
                "stock": 8,
                "costo": 10000,
                "venta": 12500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 133,
                "descripcion": "Repuesto llave automatica ref: 14930001 grival",
                "uns": "Un",
                "codigo": 429085,
                "iva": 19,
                "stock": 16,
                "costo": 19000,
                "venta": 23750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 134,
                "descripcion": "Rodillo de felpa (pintar)",
                "uns": "Un",
                "codigo": 534474,
                "iva": 19,
                "stock": 17,
                "costo": 20000,
                "venta": 25000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 135,
                "descripcion": "Segueta trozadora con marco 24 plg",
                "uns": "Un",
                "codigo": 885838,
                "iva": 19,
                "stock": 5,
                "costo": 19000,
                "venta": 23750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 136,
                "descripcion": "Sellador x galon tipo every",
                "uns": "Gl",
                "codigo": 912058,
                "iva": 19,
                "stock": 16,
                "costo": 17000,
                "venta": 21250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 137,
                "descripcion": "Sello lengueta bajo consumo de agua tipo ref: 013310001 grival",
                "uns": "Un",
                "codigo": 922253,
                "iva": 19,
                "stock": 17,
                "costo": 18000,
                "venta": 22500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 138,
                "descripcion": "Sello lengueta tipo ref:010060001 grival",
                "uns": "Un",
                "codigo": 837763,
                "iva": 19,
                "stock": 9,
                "costo": 15000,
                "venta": 18750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 139,
                "descripcion": "Sifon orinal tipo ref: 933000001 grival",
                "uns": "Un",
                "codigo": 576280,
                "iva": 19,
                "stock": 11,
                "costo": 22000,
                "venta": 27500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 140,
                "descripcion": "Soldadura de 1/8 60-13 tipo wesarco",
                "uns": "Kl",
                "codigo": 642759,
                "iva": 19,
                "stock": 13,
                "costo": 12000,
                "venta": 15000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 141,
                "descripcion": "Soldadura de 3/32 60-13 tipo wesarco",
                "uns": "Kl",
                "codigo": 622931,
                "iva": 19,
                "stock": 16,
                "costo": 16000,
                "venta": 20000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 142,
                "descripcion": "Tablon en canero 2 pulgadas",
                "uns": "Un",
                "codigo": 805628,
                "iva": 19,
                "stock": 20,
                "costo": 17000,
                "venta": 21250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 143,
                "descripcion": "Tablon en cedro 2 pulgadas",
                "uns": "Un",
                "codigo": 128908,
                "iva": 19,
                "stock": 11,
                "costo": 27000,
                "venta": 33750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 144,
                "descripcion": "Telera de madera x 6 mtrs en roble",
                "uns": "Un",
                "codigo": 105441,
                "iva": 19,
                "stock": 8,
                "costo": 24000,
                "venta": 30000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 145,
                "descripcion": "Thiner x galon tipo every",
                "uns": "Gl",
                "codigo": 178889,
                "iva": 19,
                "stock": 19,
                "costo": 20000,
                "venta": 25000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 146,
                "descripcion": "Thiner 014 x galon",
                "uns": "Gl",
                "codigo": 579658,
                "iva": 19,
                "stock": 5,
                "costo": 23000,
                "venta": 28750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 147,
                "descripcion": "Tijeras grandes para podar trapp",
                "uns": "Un",
                "codigo": 334646,
                "iva": 19,
                "stock": 10,
                "costo": 16000,
                "venta": 20000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 148,
                "descripcion": "Tinner x botella",
                "uns": "Bt",
                "codigo": 894580,
                "iva": 19,
                "stock": 19,
                "costo": 28000,
                "venta": 35000,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 149,
                "descripcion": "Tornillo dray wall de 1Pul",
                "uns": "Un",
                "codigo": 768811,
                "iva": 19,
                "stock": 17,
                "costo": 25000,
                "venta": 31250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 150,
                "descripcion": "Tornillo dray wall de 1/2Pul",
                "uns": "Un",
                "codigo": 259360,
                "iva": 19,
                "stock": 14,
                "costo": 11000,
                "venta": 13750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 151,
                "descripcion": "Tornillos varios tamaños",
                "uns": "Un",
                "codigo": 441674,
                "iva": 19,
                "stock": 18,
                "costo": 13000,
                "venta": 16250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 152,
                "descripcion": "Tubo cuadrado de 1.1/2Pul x 1.1/2 2.0mm (40x40x2,0 mm)",
                "uns": "Un",
                "codigo": 121375,
                "iva": 19,
                "stock": 9,
                "costo": 22000,
                "venta": 27500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 153,
                "descripcion": "Tubo rectangulares de 80x40 x 2 mm",
                "uns": "Un",
                "codigo": 446558,
                "iva": 19,
                "stock": 18,
                "costo": 18000,
                "venta": 22500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 154,
                "descripcion": "Valvula bola 1/2Pul agua tipo ref: 797000001 grival",
                "uns": "Un",
                "codigo": 419564,
                "iva": 19,
                "stock": 9,
                "costo": 13000,
                "venta": 16250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 155,
                "descripcion": "Varilla de diametro 3/8 corrugada",
                "uns": "Un",
                "codigo": 504352,
                "iva": 19,
                "stock": 11,
                "costo": 15000,
                "venta": 18750,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 156,
                "descripcion": "Varillas de diametro 1/2 original liso redondo",
                "uns": "Un",
                "codigo": 904042,
                "iva": 19,
                "stock": 20,
                "costo": 22000,
                "venta": 27500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 157,
                "descripcion": "Visagra de 3/4 tipo botella",
                "uns": "Un",
                "codigo": 583293,
                "iva": 19,
                "stock": 18,
                "costo": 18000,
                "venta": 22500,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 158,
                "descripcion": "Yoyo para guadaña sthil",
                "uns": "Un",
                "codigo": 210832,
                "iva": 19,
                "stock": 19,
                "costo": 17000,
                "venta": 21250,
                "fechaingreso": "14/08/2020"
            },
            {
                "id": 159,
                "descripcion": "Yoyo trimmer para maruyama",
                "uns": "Un",
                "codigo": 125122,
                "iva": 19,
                "stock": 19,
                "costo": 12000,
                "venta": 15000,
                "fechaingreso": "14/08/2020"
            }
        ],
        clientes: [
            {
                id: 1,
                documento: 123456789,
                nombre: "Nelson Lugo",
                telefono: 3167489654,
                correo: "nlugo@gmail.com",
                descuento: 10
            },
            {
                id: 2,
                documento: 147852369,
                nombre: "Darwin Chinchilla",
                telefono: 3105896677,
                correo: "darwin@hotmail.com",
                descuento: 0
            },
            {
                id: 3,
                documento: 369852147,
                nombre: "Marlon Grajales",
                telefono: 3215874455,
                correo: "marlon@outlook.com",
                descuento: 0
            },
            {
                id: 4,
                documento: 987456321,
                nombre: "Fabio Castellanos",
                telefono: 3004589966,
                correo: "fabio@yahoo.com",
                descuento: 10
            },
            {
                id: 5,
                documento: 147369852,
                nombre: "Vanessa Carballo",
                telefono: 3125688877,
                correo: "vanessa@gamil.com"
            }
        ],
        addclient: {
            id: "",
            documento: "",
            nombre: "",
            telefono: "",
            correo: "",
            descuento: ""
        },
        proveedores: [
            {
                id: 1,
                nit: 852369741,
                nombre: "Homercenter",
                telefono: 3102026379,
                direccion: "Cra 21 # 45 - 02",
                ciudad: "Bucaramanga",
                correo: "proveedores@homecenter.co"
            },
            {
                id: 2,
                nit: 775566458,
                nombre: "Alfa",
                telefono: 3105896677,
                direccion: "Cl 5 # 3 - 15",
                ciudad: "Floridablanca",
                correo: "tiendasalfa@alfa.co"
            },
            {
                id: 3,
                nit: 996800567,
                nombre: "Almacenes madecentro",
                telefono: 6369801,
                direccion: " Cra 32 # 111 - 57",
                ciudad: "Floridablanca",
                correo: "madecentro@gmail.com"
            },
            {
                id: 4,
                nit: 885633004,
                nombre: "Ferretería Luis Penagos",
                telefono: 3004589966,
                direccion: " Cra 17 47 - 58",
                ciudad: "Bogota",
                correo: "ferreteria@luispenagos.com"
            },
            {
                id: 5,
                nit: 386599748,
                nombre: "Tecnica S.A.",
                telefono: 3125688877,
                direccion: "Bolivar # 44 - 98",
                ciudad: "Medellin",
                correo: "tecnicasa@tecnicasa.co"
            }
        ],
        addproveedores: {
            id: "",
            nit: "",
            nombre: "",
            telefono: "",
            direccion: "",
            ciudad: "",
            correo: ""
        },
        addproduct: {
            descripcion: "",
            uns: "",
            codigo: ""
        },
        /* Variables para Compra */
        comprageneral: {
            factura: "",
            nit: "",
            proveedor: "",
            fecha: "",
            subtotal: "",
            iva: "",
            total: ""
        },
        tepmcomprageneral: {
            factura: "",
            nit: "",
            proveedor: "",
            fecha: "",
            subtotal: "",
            iva: "",
            total: ""
        },
        compra: [],
        listadocompras: [
            {
                factura: "F859665",
                nit: 852369741,
                proveedor: "Homercenter",
                fecha: "2020-02-10",
                subtotal: 685260,
                iva: 160740,
                total: 846000,
                abono: 500000,
                estado: "Abono"
            },
            {
                factura: "FA-14635",
                nit: 775566458,
                proveedor: "Alfa",
                fecha: "2020-03-09",
                subtotal: 488430,
                iva: 114570,
                total: 603000,
                abono: 0,
                estado: "Debe"
            },
            {
                factura: "F-001588",
                nit: 386599748,
                proveedor: "Tecnica S.A.",
                fecha: "2020-04-24",
                subtotal: 529740,
                iva: 124260,
                total: 654000,
                abono: 0,
                estado: "Debe"
            },
            {
                factura: "F-556601",
                nit: 996800567,
                proveedor: "Almacenes madecentro",
                fecha: "2020-06-18",
                subtotal: 682830,
                iva: 160170,
                total: 843000,
                abono: 0,
                estado: "Debe"
            }
        ],
        templistadocompras: {
            factura: "",
            nit: "",
            proveedor: "",
            total: "",
            abono: "",
            saldo: "",
            recibo: "",
            pago: 0,
            fecha: ""
        },
        compradetallada: [
            {
                cantidad: "3",
                codigo: 600418,
                costo: 11000,
                descripcion: "Acople griflex lavamanos",
                factura: "F859665",
                id: 2,
                iva: 19,
                subtotal: 33000,
                uns: "Un",
                venta: 13750,
            },
            {
                cantidad: "3",
                codigo: 680187,
                costo: 17000,
                descripcion: "Cajas de herramientas",
                factura: "F859665",
                id: 21,
                iva: 19,
                subtotal: 51000,
                uns: "Un",
                venta: 21250,
            },
            {
                cantidad: "12",
                codigo: 205991,
                costo: 23000,
                descripcion: "Chazos plasticos de 3/8Pul",
                factura: "F859665",
                id: 30,
                iva: 19,
                subtotal: 276000,
                uns: "Un",
                venta: 28750,
            },
            {
                cantidad: "6",
                codigo: 578384,
                costo: 26000,
                descripcion: "Lamina calibre cr 0.85 20 1.22x2.44",
                factura: "F859665",
                id: 65,
                iva: 19,
                subtotal: 156000,
                uns: "Un",
                venta: 32500,
            },
            {
                cantidad: "6",
                codigo: 827535,
                costo: 21000,
                descripcion: "Lamina de triplex  20 mm tipo pizano",
                factura: "F859665",
                id: 66,
                iva: 19,
                subtotal: 126000,
                uns: "Un",
                venta: 26250,
            },
            {
                cantidad: "6",
                codigo: 275810,
                costo: 20000,
                descripcion: "Lamina de triplex 0.4 mm tipo pizano",
                factura: "F859665",
                id: 67,
                iva: 19,
                subtotal: 120000,
                uns: "Un",
                venta: 25000,
            },
            {
                cantidad: "6",
                codigo: 648399,
                costo: 14000,
                descripcion: "Lamina de triplex overlay 1,20 x 2,40 m",
                factura: "F859665",
                id: 68,
                iva: 19,
                subtotal: 84000,
                uns: "Un",
                venta: 17500,
            },
            {
                cantidad: "6",
                codigo: 115507,
                costo: 17000,
                descripcion: "Cemento blanco x kilo",
                factura: "FA-14635",
                id: 24,
                iva: 19,
                subtotal: 102000,
                uns: "Kl",
                venta: 21250,
            },
            {
                cantidad: "6",
                codigo: 864170,
                costo: 11000,
                descripcion: "Cemento gris x 50 kilos tipo argos",
                factura: "FA-14635",
                id: 25,
                iva: 19,
                subtotal: 66000,
                uns: "Bu",
                venta: 13750,
            },
            {
                cantidad: "3",
                codigo: 259622,
                costo: 21000,
                descripcion: "Pintura anticorrosiva color gris tipo pintuco x galon",
                factura: "FA-14635",
                id: 108,
                iva: 19,
                subtotal: 63000,
                uns: "Gl",
                venta: 26250,
            },
            {
                cantidad: "3",
                codigo: 273709,
                costo: 29000,
                descripcion: "Pintura anticorrosiva tipo pintuco color rojo x galon",
                factura: "FA-14635",
                id: 109,
                iva: 19,
                subtotal: 87000,
                uns: "Gl",
                venta: 36250,
            },
            {
                cantidad: "3",
                codigo: 118128,
                costo: 28000,
                descripcion: "Pintura azul preparada según muestra x galon",
                factura: "FA-14635",
                id: 110,
                iva: 19,
                subtotal: 84000,
                uns: "Gl",
                venta: 35000,
            },
            {
                cantidad: "3",
                codigo: 398957,
                costo: 17000,
                descripcion: "Pintura en aceite color blanco tipo pintulan x galon",
                factura: "FA-14635",
                id: 111,
                iva: 19,
                subtotal: 51000,
                uns: "Gl",
                venta: 21250,
            },
            {
                cantidad: "3",
                codigo: 285940,
                costo: 25000,
                descripcion: "Pintura en aceite color negro tipo pintulan x galon",
                factura: "FA-14635",
                id: 112,
                iva: 19,
                subtotal: 75000,
                uns: "Gl",
                venta: 31250,
            },
            {
                cantidad: "3",
                codigo: 877337,
                costo: 25000,
                descripcion: "Pintura en aceite color verde colonial x galon (preparado)",
                factura: "FA-14635",
                id: 113,
                iva: 19,
                subtotal: 75000,
                uns: "Gl",
                venta: 31250,
            },
            {
                cantidad: "6",
                codigo: 580163,
                costo: 23000,
                descripcion: "Puntilla 1 1/2Pul con cabeza",
                factura: "F-001588",
                id: 123,
                iva: 19,
                subtotal: 138000,
                uns: "Cj",
                venta: 28750,
            },
            {
                cantidad: "6",
                codigo: 248999,
                costo: 10000,
                descripcion: "Puntilla 3/4 de pulgada",
                factura: "F-001588",
                id: 124,
                iva: 19,
                subtotal: 60000,
                uns: "Lb",
                venta: 12500,
            },
            {
                cantidad: "6",
                codigo: 571804,
                costo: 19000,
                descripcion: "Puntilla 3/4 sin cabeza",
                factura: "F-001588",
                id: 125,
                iva: 19,
                subtotal: 114000,
                uns: "Cj",
                venta: 23750,
            },
            {
                cantidad: "6",
                codigo: 228647,
                costo: 29000,
                descripcion: "Puntilla con cabeza de 1Pul",
                factura: "F-001588",
                id: 126,
                iva: 19,
                subtotal: 174000,
                uns: "Cj",
                venta: 36250,
            },
            {
                cantidad: "6",
                codigo: 124987,
                costo: 28000,
                descripcion: "Puntilla de 2Pul con cabeza",
                factura: "F-001588",
                id: 127,
                iva: 19,
                subtotal: 168000,
                uns: "Lb",
                venta: 35000,
            },
            {
                cantidad: "6",
                codigo: 803358,
                costo: 29000,
                descripcion: "Destornillador de estrella tipo stanley",
                factura: "F-556601",
                id: 42,
                iva: 19,
                subtotal: 174000,
                uns: "Un",
                venta: 36250,
            },
            {
                cantidad: "6",
                codigo: 718211,
                costo: 14000,
                descripcion: "Destornillador de pala  tipo stanley",
                factura: "F-556601",
                id: 43,
                iva: 19,
                subtotal: 84000,
                uns: "Un",
                venta: 17500,
            },
            {
                cantidad: "6",
                codigo: 566802,
                costo: 26000,
                descripcion: "Juego de destornilladores tipo stanley",
                factura: "F-556601",
                id: 63,
                iva: 19,
                subtotal: 156000,
                uns: "Jg",
                venta: 32500,
            },
            {
                cantidad: "3",
                codigo: 349647,
                costo: 23000,
                descripcion: "Alambre negro x kilo",
                factura: "F-556601",
                id: 5,
                iva: 19,
                subtotal: 69000,
                uns: "Kl",
                venta: 28750,
            },
            {
                cantidad: "6",
                codigo: 265920,
                costo: 20000,
                descripcion: "Broca para muro 5/16",
                factura: "F-556601",
                id: 16,
                iva: 19,
                subtotal: 120000,
                uns: "Un",
                venta: 25000,
            },
            {
                cantidad: "6",
                codigo: 605868,
                costo: 18000,
                descripcion: "Brocha para hierro de 2Pul",
                factura: "F-556601",
                id: 17,
                iva: 19,
                subtotal: 108000,
                uns: "Un",
                venta: 22500,
            },
            {
                cantidad: "6",
                codigo: 274717,
                costo: 22000,
                descripcion: "Brocha para hierro de 4Pul",
                factura: "F-556601",
                id: 18,
                iva: 19,
                subtotal: 132000,
                uns: "Un",
                venta: 27500,
            }
        ],
        tempcompdetallada: [],
        edicompra: {
            id: "",
            codigo: "",
            descripcion: "",
            uns: "",
            iva: "",
            costo: "",
            cantidad: "",
            venta: "",
            subtotal: ""
        },
        listapagocompra: [
            {
                factura: "F859665",
                recibo: "RC-0584",
                pago: "500000",
                fecha: "2020-07-03"
            }
        ],
        indexedit: 0,
        cantitemcompra: 0,
        /* Fin Variables para Compra */
        fechaactual: "",
        /* Variables para POS */
        pos: [],
        clientepos: {
            id: 0,
            documento: 222222,
            nombre: "Cliente POS",
            telefono: 000001,
            correo: "NA",
            descuento: "",
            pago: "",
            recibo: ""
        },
        facturas: [],
        facturadetallada: [],
        tempfactura: {
            factura: "",
            documento: "",
            nombre: "",
            telefono: "",
            correo: "",
            fecha: "",
            pago: "",
            recibo: "",
            subtotal: "",
            descuento: "",
            total: "",
        },
        tempfactdetallada: [],
        cantitempos: 0,
        tempcantitempos: 0,
        productlimit: "",
        /* Fin Variables para POS */

        /* Variables para devolucion */
        devolucion: {
            factura: "",
            documento: "",
            nombre: "",
            telefono: "",
            correo: "",
            fecha: "",
            pago: "",
            recibo: "",
            subtotal: "",
            descuento: "",
            total: "",
        },
        devoluciondetallada: [],
        numfactura: ""
        /* Fin Variables para devolucion */
    },
    methods: {
        /* Metodos para modulo de POS */
        addproductPOS(index) {
            var idprod = this.productos[index].id;

            var filtro = this.pos.filter(function (product) {
                return product.id === idprod;
            });

            if (filtro.length == 0) {
                this.pos.push({
                    id: this.productos[index].id,
                    codigo: this.productos[index].codigo,
                    descripcion: this.productos[index].descripcion,
                    uns: this.productos[index].uns,
                    iva: this.productos[index].iva,
                    cantidad: 1,
                    venta: this.productos[index].venta,
                    subtotal: this.productos[index].venta,
                    canlimit: this.productos[index].stock
                })
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: false,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Producto agregado'
                })
            } else {
                for (let i = 0; i < this.pos.length; i++) {
                    if (filtro[0].id == this.pos[i].id) {
                        this.pos[i].cantidad++;
                        this.pos[i].suntotal = this.pos[i].cantidad * this.pos[i].venta;
                    }
                }
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: false,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Producto agregado'
                })
            }
            sessionStorage.setItem(this.bdlocalpos, JSON.stringify(this.pos));
            this.cantitempos = this.pos.length;
        },
        addposcodebarra(event) {
            var codebarra = event.target.value;
            var index = 0;
            var cantmax = 0;
            var cantpos = 0;
            var filtroprod = this.productos.filter(function (product) {
                return product.codigo == codebarra;
            });

            var filtropos = this.pos.filter(function (product) {
                return product.codigo == codebarra;
            });

            if (filtroprod.length != 0) {
                if (filtroprod[0].stock != 0) {
                    if (filtropos == 0) {
                        for (var i = 0; i < this.productos.length; i++) {
                            if (this.productos[i].codigo == codebarra) {
                                index = i;
                            }
                        }
                        this.pos.push({
                            id: this.productos[index].id,
                            codigo: this.productos[index].codigo,
                            descripcion: this.productos[index].descripcion,
                            uns: this.productos[index].uns,
                            iva: this.productos[index].iva,
                            cantidad: 1,
                            venta: this.productos[index].venta,
                            subtotal: this.productos[index].venta,
                            canlimit: this.productos[index].stock
                        })
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: false,
                            onOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                        Toast.fire({
                            icon: 'success',
                            title: 'Producto agregado'
                        })
                    } else {
                        for (var i = 0; i < this.productos.length; i++) {
                            if (this.productos[i].codigo == codebarra) {
                                cantpos = filtropos[0].cantidad;
                                cantmax = this.productos[i].stock;
                            }
                        }
                        if (cantpos != cantmax) {
                            for (let i = 0; i < this.pos.length; i++) {
                                if (filtropos[0].id == this.pos[i].id) {
                                    this.pos[i].cantidad++;
                                    this.pos[i].subtotal = this.pos[i].cantidad * this.pos[i].venta;
                                }
                            }
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: false,
                                onOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                            })
                            Toast.fire({
                                icon: 'success',
                                title: 'Producto agregado'
                            })
                        } else {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: false,
                                onOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                            })
                            Toast.fire({
                                icon: 'error',
                                title: 'No hay mas cantidades!'
                            })
                        }
                    }
                } else {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: false,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'No hay mas cantidades!'
                    })
                }
            } else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: false,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'error',
                    title: 'Producto no existe!'
                })
            }
            sessionStorage.setItem(this.bdlocalpos, JSON.stringify(this.pos));
            this.cantitempos = this.pos.length;
            document.getElementById("codebarra").value = "";
        },
        subtotalproductPOS(index) {
            var cantidad = 0, subtotal = 0, venta = 0, id = 0;
            id = this.pos[index].id;
            cantidad = parseInt(this.pos[index].cantidad);
            venta = this.pos[index].venta;
            if (cantidad <= 0) {
                cantidad = 1;
            }
            for (let i = 0; i < this.productos.length; i++) {
                if (this.productos[i].id == id) {
                    if (cantidad <= this.productos[i].stock) {
                        subtotal = venta * cantidad;
                        this.pos[index].subtotal = subtotal;
                        this.pos[index].cantidad = cantidad;
                    } else {
                        cantidad = this.productos[i].stock;
                        subtotal = venta * cantidad;
                        this.pos[index].subtotal = subtotal;
                        this.pos[index].cantidad = cantidad;
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: false,
                            onOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                        Toast.fire({
                            icon: 'info',
                            title: 'Stock disponible ' + cantidad
                        })
                    }
                }
            }
            sessionStorage.setItem(this.bdlocalpos, JSON.stringify(this.pos));
        },
        btn_addclientpos(index) {
            this.clientepos = {
                id: this.clientes[index].id,
                documento: this.clientes[index].documento,
                nombre: this.clientes[index].nombre,
                telefono: this.clientes[index].telefono,
                correo: this.clientes[index].correo,
                descuento: this.clientes[index].descuento,
                pago: "",
                recibo: ""
            }
            $('#modalcliente').modal('hide');
            sessionStorage.setItem(this.bdlocalclientpos, JSON.stringify(this.clientepos));
        },
        addfactura() {
            var items = this.pos.length;
            var fact = Math.floor(100000 + Math.random() * 900000)
            fact = "FC-" + fact;
            if (items != 0) {
                this.facturas.push({
                    factura: fact,
                    documento: this.clientepos.documento,
                    nombre: this.clientepos.nombre,
                    telefono: this.clientepos.telefono,
                    correo: this.clientepos.correo,
                    fecha: this.fechaactual,
                    pago: this.clientepos.pago,
                    recibo: this.clientepos.recibo,
                    subtotal: this.subtotalpos,
                    descuento: this.descuentopos,
                    total: this.totalpos,
                    devolucion: "no"
                })
                for (let i = 0; i < this.pos.length; i++) {
                    for (let j = 0; j < this.productos.length; j++) {
                        if (this.pos[i].id === this.productos[j].id) {
                            this.productos[j].stock = parseInt(this.productos[j].stock) - parseInt(this.pos[i].cantidad);
                        }
                    }
                    this.facturadetallada.push({
                        factura: fact,
                        id: this.pos[i].id,
                        codigo: this.pos[i].codigo,
                        descripcion: this.pos[i].descripcion,
                        uns: this.pos[i].uns,
                        iva: this.pos[i].iva,
                        cantidad: this.pos[i].cantidad,
                        venta: this.pos[i].venta,
                        subtotal: this.pos[i].subtotal
                    });
                }
                sessionStorage.setItem(this.bdlocalfacturas, JSON.stringify(this.facturas));
                sessionStorage.setItem(this.bdlocalfacturadetalle, JSON.stringify(this.facturadetallada));
                sessionStorage.setItem(this.bdlocalproducto, JSON.stringify(this.productos));
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 6000,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: '#Factura: ' + fact
                })

                this.clientepos = {
                    id: 0,
                    documento: 222222,
                    nombre: "Cliente POS",
                    telefono: 000001,
                    correo: "NA",
                    descuento: "",
                    pago: "",
                    recibo: ""
                }

                this.pos = [];
                sessionStorage.removeItem(this.bdlocalpos);
                sessionStorage.removeItem(this.bdlocalclientpos);
                this.cantitempos = 0;
            } else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: false,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'error',
                    title: 'No hay productos agregados'
                })
            }
        },
        quitarproductopos(index) {
            this.pos.splice(index, 1);
            sessionStorage.setItem(this.bdlocalpos, JSON.stringify(this.pos));
            this.cantitempos = this.pos.length;
        },
        cancelarpos() {
            Swal.fire({
                title: '¿Estás seguro de cancelar la venta?',
                text: "Toda la información ingresada se perderá!",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#18bc9c',
                cancelButtonColor: '#2c3e50',
                cancelButtonText: 'No, Cancelar!',
                confirmButtonText: 'Si, Continuar!',
                reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    this.clientepos = {
                        id: 0,
                        documento: 222222,
                        nombre: "Cliente POS",
                        telefono: 000001,
                        correo: "NA",
                        descuento: ""
                    }

                    this.pos = [];
                    /* Quitar de la base local */
                    sessionStorage.removeItem(this.bdlocalpos);
                    sessionStorage.removeItem(this.bdlocalclientpos);
                    this.cantitempos = 0;
                }
            })
        },
        viewfactdatallada(index) {
            this.tempfactdetallada = [];
            this.tempfactura = {
                factura: "",
                documento: "",
                nombre: "",
                telefono: "",
                correo: "",
                fecha: "",
                pago: "",
                recibo: "",
                subtotal: "",
                descuento: "",
                total: ""
            }
            this.cantitemcompra = 0;
            fact = this.facturas[index].factura;
            this.tempfactura = {
                factura: this.facturas[index].factura,
                documento: this.facturas[index].documento,
                nombre: this.facturas[index].nombre,
                telefono: this.facturas[index].telefono,
                correo: this.facturas[index].correo,
                fecha: this.facturas[index].fecha,
                pago: this.facturas[index].pago,
                recibo: this.facturas[index].recibo,
                subtotal: this.facturas[index].subtotal,
                descuento: this.facturas[index].descuento,
                total: this.facturas[index].total
            }

            for (let i = 0; i < this.facturadetallada.length; i++) {
                if (fact == this.facturadetallada[i].factura) {
                    this.tempfactdetallada.push({
                        id: this.facturadetallada[i].id,
                        factura: this.facturadetallada[i].factura,
                        codigo: this.facturadetallada[i].codigo,
                        descripcion: this.facturadetallada[i].descripcion,
                        uns: this.facturadetallada[i].uns,
                        iva: this.facturadetallada[i].iva,
                        cantidad: this.facturadetallada[i].cantidad,
                        venta: this.facturadetallada[i].venta,
                        subtotal: this.facturadetallada[i].subtotal
                    });
                }
            }
            sessionStorage.setItem(this.bdlocaltempfact, JSON.stringify(this.tempfactura));
            sessionStorage.setItem(this.bdlocaltempfactdeta, JSON.stringify(this.tempfactdetallada));
            window.location.href = "detallada.html";
        },
        /* Fin Metodos para modulo de POS */

        /* Metodos para modulo de compras */
        addcomprageneral() {
            if (this.compra.length != 0) {
                Swal.fire({
                    title: 'Guardar compra',
                    text: "¿Estás seguro de guardar la compra actual?",
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#18bc9c',
                    cancelButtonColor: '#2c3e50',
                    cancelButtonText: 'No, Cancelar!',
                    confirmButtonText: 'Si, Continuar!',
                    reverseButtons: true
                }).then((result) => {
                    if (result.value) {
                        this.comprageneral.subtotal = this.subtotalcompra;
                        this.comprageneral.iva = this.ivacompra;
                        this.comprageneral.total = this.totalcompra;
                        this.listadocompras.push({
                            factura: this.comprageneral.factura,
                            nit: this.comprageneral.nit,
                            proveedor: this.comprageneral.proveedor,
                            fecha: this.comprageneral.fecha,
                            subtotal: this.comprageneral.subtotal,
                            iva: this.comprageneral.iva,
                            total: this.comprageneral.total,
                            abono: 0,
                            estado: "Debe"
                        });

                        for (let i = 0; i < this.compra.length; i++) {
                            for (let j = 0; j < this.productos.length; j++) {
                                if (this.compra[i].id === this.productos[j].id) {
                                    this.productos[j].stock = parseInt(this.productos[j].stock) + parseInt(this.compra[i].cantidad);
                                    this.productos[j].costo = this.compra[i].costo;
                                    this.productos[j].venta = this.compra[i].venta;
                                }
                            }
                        }
                        sessionStorage.setItem(this.bdlocalproducto, JSON.stringify(this.productos));
                        for (let i = 0; i < this.compra.length; i++) {
                            this.compradetallada.push({
                                factura: this.comprageneral.factura,
                                id: this.compra[i].id,
                                codigo: this.compra[i].codigo,
                                descripcion: this.compra[i].descripcion,
                                uns: this.compra[i].uns,
                                iva: this.compra[i].iva,
                                costo: this.compra[i].costo,
                                cantidad: this.compra[i].cantidad,
                                venta: this.compra[i].venta,
                                subtotal: this.compra[i].subtotal
                            });
                        }
                        sessionStorage.setItem(this.bdlocallistacompra, JSON.stringify(this.listadocompras));
                        sessionStorage.setItem(this.bdlocaldetallecompra, JSON.stringify(this.compradetallada));

                        /* Quitar de la base local */
                        sessionStorage.removeItem(this.bdlocalcompra);
                        sessionStorage.removeItem(this.bdlocalcomprageneral);
                        this.cantitemcompra = 0;
                        this.compra = [];
                        this.comprageneral = {
                            factura: "",
                            nit: "",
                            proveedor: "",
                            fecha: "",
                            subtotal: "",
                            iva: "",
                            total: ""
                        };
                        /* Fin Quitar de la base local */

                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: false,
                            onOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                        Toast.fire({
                            icon: 'success',
                            title: 'Compra guardada con exito!'
                        })
                    }
                })
            } else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: false,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'error',
                    title: 'Ningun producto agregado'
                })
            }
            /*this.comprageneral.fecha = this.fechaactual.toLocaleDateString();
            this.comprageneral.subtotal = this.subtotalcompra();
            this.comprageneral.iva = this.ivacompra();
            this.comprageneral.total = this.totalcompra();*/
        },
        cancelarcompra() {
            Swal.fire({
                title: '¿Estás seguro de cancelar la compra?',
                text: "Toda la información ingresada se perderá!",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#18bc9c',
                cancelButtonColor: '#2c3e50',
                cancelButtonText: 'No, Cancelar!',
                confirmButtonText: 'Si, Continuar!',
                reverseButtons: true
            }).then((result) => {
                if (result.value) {

                }
            })
        },
        selectproveedor(index) {
            this.comprageneral.nit = this.proveedores[index].nit;
            this.comprageneral.proveedor = this.proveedores[index].nombre;
            sessionStorage.setItem(this.bdlocalcomprageneral, JSON.stringify(this.comprageneral));
            $('#modalproveedor').modal('hide');
        },
        selectfecha() {
            this.comprageneral.fecha = event.target.value;
            sessionStorage.setItem(this.bdlocalcomprageneral, JSON.stringify(this.comprageneral));
        },
        addproductcompra(index) {
            var idprod = this.productos[index].id;

            var filtro = this.compra.filter(function (product) {
                return product.id === idprod;
            });

            if (filtro.length == 0) {
                this.compra.push({
                    id: this.productos[index].id,
                    codigo: this.productos[index].codigo,
                    descripcion: this.productos[index].descripcion,
                    uns: this.productos[index].uns,
                    iva: this.productos[index].iva,
                    costo: this.productos[index].costo,
                    cantidad: 1,
                    venta: this.productos[index].venta,
                    subtotal: this.productos[index].costo
                })
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: false,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Producto agregado'
                })
                sessionStorage.setItem(this.bdlocalcompra, JSON.stringify(this.compra));

            } else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: false,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'info',
                    title: 'El producto ya ha sido agregado'
                })
            }
            this.cantitemcompra = this.compra.length;
        },
        addcodebarra(event) {
            var codebarra = event.target.value;
            var index = 0;
            var filtroprod = this.productos.filter(function (product) {
                return product.codigo == codebarra;
            });

            var filtrocomp = this.compra.filter(function (product) {
                return product.codigo == codebarra;
            });

            if (filtroprod.length != 0) {
                if (filtrocomp == 0) {
                    for (var i = 0; i < this.productos.length; i++) {
                        if (this.productos[i].codigo == codebarra) {
                            index = i;
                        }
                    }
                    this.compra.push({
                        id: this.productos[index].id,
                        codigo: this.productos[index].codigo,
                        descripcion: this.productos[index].descripcion,
                        uns: this.productos[index].uns,
                        iva: this.productos[index].iva,
                        costo: this.productos[index].costo,
                        cantidad: 1,
                        venta: this.productos[index].venta,
                        subtotal: this.productos[index].costo
                    })
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: false,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'success',
                        title: 'Producto agregado'
                    })
                    sessionStorage.setItem(this.bdlocalcompra, JSON.stringify(this.compra));
                } else {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: false,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'info',
                        title: 'El producto ya fue agregado'
                    })
                }
            } else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: false,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'error',
                    title: 'Producto no existe!'
                })
            }
            this.cantitemcompra = this.compra.length;
            document.getElementById("codebarra").value = "";
        },
        deletedecompra(index) {
            this.compra.splice(index, 1);
            this.cantitemcompra = this.compra.length;
            sessionStorage.setItem(this.bdlocalcompra, JSON.stringify(this.compra));
        },
        resetitemcompra(index) {
            var id = this.compra[index].id;
            Swal.fire({
                title: 'Restablecer',
                text: "Se restablecerá el costo y venta del producto al valor inicial!",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#18bc9c',
                cancelButtonColor: '#2c3e50',
                cancelButtonText: 'No, Cancelar!',
                confirmButtonText: 'Si, Continuar!',
                reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    for (let i = 0; i < this.productos.length; i++) {
                        if (this.productos[i].id == id) {
                            this.compra[index].costo = this.productos[i].costo;
                            this.compra[index].venta = this.productos[i].venta;
                        }
                    }
                    this.compra[index].subtotal = this.compra[index].costo * this.compra[index].cantidad;
                    sessionStorage.setItem(this.bdlocalcompra, JSON.stringify(this.compra));
                }
            })
        },
        subtotalproduct(index) {
            var costo = 0, cantidad = 0, subtotal = 0, venta = 0;
            costo = this.compra[index].costo;
            cantidad = this.compra[index].cantidad;
            venta = this.compra[index].venta;
            subtotal = costo * cantidad;
            this.compra[index].subtotal = subtotal;
            this.compra[index].costo = costo;
            this.compra[index].cantidad = cantidad;
            this.compra[index].venta = venta;
            sessionStorage.setItem(this.bdlocalcompra, JSON.stringify(this.compra));
        },
        viewcompradeta(factura) {
            this.tempcompdetallada = [];
            this.tepmcomprageneral = {
                factura: "",
                nit: "",
                proveedor: "",
                fecha: "",
                subtotal: "",
                iva: "",
                total: ""
            }
            this.cantitemcompra = 0;
            for (let i = 0; i < this.compradetallada.length; i++) {
                if (this.compradetallada[i].factura === factura) {
                    this.cantitemcompra++;
                    this.tempcompdetallada.push({
                        factura: this.compradetallada[i].factura,
                        id: this.compradetallada[i].id,
                        codigo: this.compradetallada[i].codigo,
                        descripcion: this.compradetallada[i].descripcion,
                        uns: this.compradetallada[i].uns,
                        iva: this.compradetallada[i].iva,
                        costo: this.compradetallada[i].costo,
                        cantidad: this.compradetallada[i].cantidad,
                        venta: this.compradetallada[i].venta,
                        subtotal: this.compradetallada[i].subtotal
                    });
                }
            }
            sessionStorage.setItem(this.bdlocaltempcompra, JSON.stringify(this.tempcompdetallada));
            for (let i = 0; i < this.listadocompras.length; i++) {
                if (this.listadocompras[i].factura === factura) {
                    this.tepmcomprageneral.factura = this.listadocompras[i].factura;
                    this.tepmcomprageneral.nit = this.listadocompras[i].nit;
                    this.tepmcomprageneral.proveedor = this.listadocompras[i].proveedor;
                    this.tepmcomprageneral.fecha = this.listadocompras[i].fecha;
                    this.tepmcomprageneral.subtotal = this.listadocompras[i].subtotal;
                    this.tepmcomprageneral.iva = this.listadocompras[i].iva;
                    this.tepmcomprageneral.total = this.listadocompras[i].total;
                }
            }
            sessionStorage.setItem(this.bdlocaltempcomprageneral, JSON.stringify(this.tepmcomprageneral));
            window.location.href = "detallada.html";
        },
        btn_addpagocompra(index) {
            this.templistadocompras.factura = this.listadocompras[index].factura;
            this.templistadocompras.nit = this.listadocompras[index].nit;
            this.templistadocompras.proveedor = this.listadocompras[index].proveedor;
            this.templistadocompras.total = this.listadocompras[index].total;
            this.templistadocompras.abono = this.listadocompras[index].abono
            this.templistadocompras.saldo = this.listadocompras[index].total - this.listadocompras[index].abono;
        },
        addpagocompra() {
            this.listapagocompra.push({
                factura: this.templistadocompras.factura,
                recibo: this.templistadocompras.recibo,
                pago: this.templistadocompras.pago,
                fecha: this.templistadocompras.fecha
            })

            for (let i = 0; i < this.listadocompras.length; i++) {
                if (this.listadocompras[i].factura === this.templistadocompras.factura) {
                    this.listadocompras[i].abono = parseInt(this.listadocompras[i].abono) + parseInt(this.templistadocompras.pago);
                    if (this.listadocompras[i].abono == this.listadocompras[i].total) {
                        this.listadocompras[i].estado = "Pago";
                    } else {
                        this.listadocompras[i].estado = "Abono";
                    }
                    sessionStorage.setItem(this.bdlocallistpagocompra, JSON.stringify(this.listapagocompra));
                    sessionStorage.setItem(this.bdlocallistacompra, JSON.stringify(this.listadocompras));
                    $('#modaladdpago').modal('hide');
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'success',
                        title: 'Pago agregado con exito'
                    })
                    this.templistadocompras = {
                        factura: "",
                        nit: "",
                        proveedor: "",
                        total: "",
                        abono: "",
                        saldo: "",
                        recibo: "",
                        pago: 0,
                        fecha: ""
                    }
                }
            }
        },
        /* Metodos para modulo de compras */

        /* Metodos para modulo de productos */
        addnewproduct() {
            var posicion = this.productos.length - 1;
            var ultimoid = this.productos[posicion].id + 1;

            this.productos.push({
                id: ultimoid,
                descripcion: this.addproduct.descripcion.toLowerCase(),
                uns: this.addproduct.uns,
                codigo: this.addproduct.codigo,
                iva: 19,
                stock: 0,
                costo: 0,
                venta: 0,
                fechaingreso: this.fechaactual
            })
            sessionStorage.setItem(this.bdlocalproducto, JSON.stringify(this.productos));
            $('#modalnewproducto').modal('hide');
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Producto creado con éxito'
            })
            this.addproduct = {
                descripcion: "",
                uns: "",
                codigo: ""
            }
        },
        btn_editproducto(index) {
            this.indexedit = index;
            this.addproduct.id = this.productos[index].id;
            this.addproduct.descripcion = this.productos[index].descripcion;
            this.addproduct.uns = this.productos[index].uns;
            this.addproduct.codigo = this.productos[index].codigo;
            this.addproduct.iva = this.productos[index].iva;
            this.addproduct.stock = this.productos[index].stock;
            this.addproduct.costo = this.productos[index].costo;
            this.addproduct.venta = this.productos[index].venta;
            this.addproduct.fechaingreso = this.productos[index].fechaingreso;
        },
        editproducto() {
            this.productos.splice(this.indexedit, 1, this.addproduct);
            sessionStorage.setItem(this.bdlocalproducto, JSON.stringify(this.productos));
            $('#modaleditproducto').modal('hide');
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Producto editado con éxito'
            })
            this.addproduct = {
                descripcion: "",
                uns: "",
                codigo: ""
            }
        },
        /* Fin Metodos para modulo de productos */

        /* Metodos para modulo de clientes */
        addnewclient() {
            var posicion = this.clientes.length - 1;
            var ultimoid = this.clientes[posicion].id + 1;

            this.clientes.push({
                id: ultimoid,
                documento: this.addclient.documento,
                nombre: this.addclient.nombre,
                telefono: this.addclient.telefono,
                correo: this.addclient.correo,
                descuento: this.addclient.descuento
            })
            sessionStorage.setItem(this.bdlocalcliente, JSON.stringify(this.clientes));
            $('#modalnewcliente').modal('hide');
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Cliente creado con éxito'
            })
            this.addclient = {
                id: "",
                documento: "",
                nombre: "",
                telefono: "",
                correo: "",
                descuento: ""
            }
        },
        btn_editcliente(index) {
            this.indexedit = index;
            this.addclient.id = this.clientes[index].id;
            this.addclient.documento = this.clientes[index].documento;
            this.addclient.nombre = this.clientes[index].nombre;
            this.addclient.telefono = this.clientes[index].telefono;
            this.addclient.correo = this.clientes[index].correo;
            this.addclient.descuento = this.clientes[index].descuento;
        },
        editcliente() {
            this.clientes.splice(this.indexedit, 1, this.addclient);
            sessionStorage.setItem(this.bdlocalcliente, JSON.stringify(this.clientes));
            $('#modaleditarcliente').modal('hide');
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Cliente editado con éxito'
            })
            this.addclient = {
                id: "",
                documento: "",
                nombre: "",
                telefono: "",
                correo: "",
                descuento: ""
            }
        },
        /* Fin Metodos para modulo de clientes */

        /* Metodos para modulo de proveedor */
        addnewproveedor() {
            var posicion = this.proveedores.length - 1;
            var ultimoid = this.proveedores[posicion].id + 1;

            this.proveedores.push({
                id: ultimoid,
                nit: this.addproveedores.nit,
                nombre: this.addproveedores.nombre,
                telefono: this.addproveedores.telefono,
                direccion: this.addproveedores.direccion,
                ciudad: this.addproveedores.ciudad,
                correo: this.addproveedores.correo,
            })
            sessionStorage.setItem(this.bdlocalproveedor, JSON.stringify(this.proveedores));
            $('#modalnewproveedor').modal('hide');
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Proveedor creado con éxito'
            })
            this.addproveedores = {
                id: "",
                nit: "",
                nombre: "",
                telefono: "",
                direccion: "",
                ciudad: "",
                correo: ""
            }
        },
        btn_editproveedor(index) {
            this.indexedit = index;
            this.addproveedores.id = this.proveedores[index].id;
            this.addproveedores.nit = this.proveedores[index].nit;
            this.addproveedores.nombre = this.proveedores[index].nombre;
            this.addproveedores.telefono = this.proveedores[index].telefono;
            this.addproveedores.direccion = this.proveedores[index].direccion;
            this.addproveedores.ciudad = this.proveedores[index].ciudad;
            this.addproveedores.correo = this.proveedores[index].correo;
        },
        editproveedor() {
            this.proveedores.splice(this.indexedit, 1, this.addproveedores);
            sessionStorage.setItem(this.bdlocalproveedor, JSON.stringify(this.proveedores));
            $('#modaleditarproveedor').modal('hide');
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Proveedor editado con éxito'
            })
            this.addproveedores = {
                id: "",
                nit: "",
                nombre: "",
                telefono: "",
                direccion: "",
                ciudad: "",
                correo: ""
            }
        },
        /* Fin Metodos para modulo de proveedor */

        /* Metodos opcionales */
        fecha_actual() {
            var fecha = new Date();
            var dia = fecha.getDate();
            var mes = fecha.getMonth() + 1;
            var anno = fecha.getFullYear();

            if (dia < 10) {
                dia = "0" + dia;
            }
            if (mes < 10) {
                mes = "0" + mes;
            }

            this.fechaactual = anno + "-" + mes + "-" + dia;

            return this.fechaactual;
        },
        /* Fin Metodos opcionales */

        /* Metodos para devolucion */
        buscarfactura() {
            var fact = "";
            this.devoluciondetallada = [];
            this.devolucion = {
                factura: "",
                documento: "",
                nombre: "",
                telefono: "",
                correo: "",
                fecha: "",
                pago: "",
                recibo: "",
                subtotal: "",
                descuento: "",
                total: ""
            }
            if (this.numfactura !== "") {
                for (let i = 0; i < this.facturas.length; i++) {
                    if (this.numfactura == this.facturas[i].factura) {
                        fact = this.facturas[i].factura;
                        if (this.facturas[i].devolucion == "no") {
                            this.devolucion = {
                                factura: this.facturas[i].factura,
                                documento: this.facturas[i].documento,
                                nombre: this.facturas[i].nombre,
                                telefono: this.facturas[i].telefono,
                                correo: this.facturas[i].correo,
                                fecha: this.facturas[i].fecha,
                                pago: this.facturas[i].pago,
                                recibo: this.facturas[i].recibo,
                                subtotal: this.facturas[i].subtotal,
                                descuento: this.facturas[i].descuento,
                                total: this.facturas[i].total,
                                devolucion: this.facturas[i].devolucion
                            }
                            for (let j = 0; j < this.facturadetallada.length; j++) {
                                if (this.numfactura == this.facturadetallada[j].factura) {
                                    this.devoluciondetallada.push({
                                        id: this.facturadetallada[j].id,
                                        factura: this.facturadetallada[j].factura,
                                        codigo: this.facturadetallada[j].codigo,
                                        descripcion: this.facturadetallada[j].descripcion,
                                        uns: this.facturadetallada[j].uns,
                                        iva: this.facturadetallada[j].iva,
                                        cantidad: this.facturadetallada[j].cantidad,
                                        venta: this.facturadetallada[j].venta,
                                        subtotal: this.facturadetallada[j].subtotal,
                                        cantdevo: 0
                                    });
                                }
                            }
                        } else {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                onOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                            })
                            Toast.fire({
                                icon: 'info',
                                title: 'Factura ya cuenta con devolución'
                            })
                        }
                    }
                }
                if (fact == "") {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'info',
                        title: 'Factura no encontrada'
                    })
                }
            }
        },
        guardardevolucion() {
            Swal.fire({
                title: '¿Estás seguro de guardar la devolución?',
                text: "Esta factura no se le podrá devolver mas productos!",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#18bc9c',
                cancelButtonColor: '#2c3e50',
                cancelButtonText: 'No, Cancelar!',
                confirmButtonText: 'Si, Continuar!',
                reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    for (let i = 0; i < this.devoluciondetallada.length; i++) {
                        for (let j = 0; j < this.productos.length; j++) {
                            if (this.devoluciondetallada[i].id == this.productos[j].id) {
                                this.productos[j].stock = this.devoluciondetallada[i].cantidad;
                            }
                        }
                    }
                    for (let i = 0; i < this.facturas.length; i++) {
                        if (this.facturas[i].factura == this.devolucion.factura) {
                            this.facturas[i].devolucion = "si";
                        }
                    }
                    this.devoluciondetallada = [];
                    this.devolucion = {
                        factura: "",
                        documento: "",
                        nombre: "",
                        telefono: "",
                        correo: "",
                        fecha: "",
                        pago: "",
                        recibo: "",
                        subtotal: "",
                        descuento: "",
                        total: ""
                    }
                    this.numfactura = ""
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'success',
                        title: 'Devolución guardada con exito!'
                    })
                    sessionStorage.setItem(this.bdlocalfacturas, JSON.stringify(this.facturas));
                    sessionStorage.setItem(this.bdlocalproducto, JSON.stringify(this.productos));
                }
            })
        }
        /* Fin Metodos para devolucion */
    },
    computed: {
        efectivocaja() {
            var total = 0;
            for (let i = 0; i < this.facturas.length; i++) {
                if (this.facturas[i].pago == "Efectivo") {
                    total = total + this.facturas[i].total;
                }
            }
            return total;
        },
        tarjetacaja() {
            var total = 0;
            for (let i = 0; i < this.facturas.length; i++) {
                if (this.facturas[i].pago == "T. Debito" || this.facturas[i].pago == "T. Credito") {
                    total = total + this.facturas[i].total;
                }
            }
            return total;
        },
        sistecreditoacaja() {
            var total = 0;
            for (let i = 0; i < this.facturas.length; i++) {
                if (this.facturas[i].pago == "Sistecredito") {
                    total = total + this.facturas[i].total;
                }
            }
            return total;
        },
        totalacaja() {
            var total = 0;
            for (let i = 0; i < this.facturas.length; i++) {
                total = total + this.facturas[i].total;
            }
            return total;
        },
        subtotalpos() {
            var subtotal = 0;
            for (let i = 0; i < this.pos.length; i++) {
                subtotal = subtotal + this.pos[i].subtotal;
            }
            return Math.round(subtotal);
        },
        descuentopos() {
            var descuento = 0;
            if (this.clientepos.descuento == "") {
                this.clientepos.descuento = 0;
            }
            descuento = this.subtotalpos * (parseInt(this.clientepos.descuento) * 1 / 100);
            return Math.round(descuento);
        },
        totalpos() {
            var total = this.subtotalpos - this.descuentopos;
            return total;
        },
        subtotalcompra() {
            var subtotal = 0;
            for (let i = 0; i < this.compra.length; i++) {
                subtotal = subtotal + this.compra[i].subtotal;
            }
            subtotal = subtotal - this.ivacompra;
            return Math.round(subtotal);
        },
        ivacompra() {
            var iva = 0;
            var subtotal = 0;
            for (let i = 0; i < this.compra.length; i++) {
                subtotal = subtotal + this.compra[i].subtotal;
            }
            iva = subtotal * 0.19;
            return Math.round(iva);
        },
        totalcompra() {
            var total = this.subtotalcompra + this.ivacompra;
            return total;
        }
    },
    created() {
        this.fecha_actual();
        let BDLocalclient = JSON.parse(sessionStorage.getItem(this.bdlocalcliente));
        if (BDLocalclient !== null) {
            this.clientes = BDLocalclient;
        }
        let BDLocalprovee = JSON.parse(sessionStorage.getItem(this.bdlocalproveedor));
        if (BDLocalprovee !== null) {
            this.proveedores = BDLocalprovee;
        }
        let BDLocalproducto = JSON.parse(sessionStorage.getItem(this.bdlocalproducto));
        if (BDLocalproducto !== null) {
            this.productos = BDLocalproducto;
        }
        /* locales para POS */
        let BDLocalpos = JSON.parse(sessionStorage.getItem(this.bdlocalpos));
        if (BDLocalpos !== null) {
            this.pos = BDLocalpos;
            this.cantitempos = this.pos.length;
        }
        let BDlocalclientpos = JSON.parse(sessionStorage.getItem(this.bdlocalclientpos));
        if (BDlocalclientpos !== null) {
            this.clientepos = BDlocalclientpos;
        }
        let BDlocalfacturas = JSON.parse(sessionStorage.getItem(this.bdlocalfacturas));
        if (BDlocalfacturas !== null) {
            this.facturas = BDlocalfacturas;
        }
        let BDlocalfacturadetalle = JSON.parse(sessionStorage.getItem(this.bdlocalfacturadetalle));
        if (BDlocalfacturadetalle !== null) {
            this.facturadetallada = BDlocalfacturadetalle;
        }
        let BDlocaltempfact = JSON.parse(sessionStorage.getItem(this.bdlocaltempfact));
        if (BDlocaltempfact !== null) {
            this.tempfactura = BDlocaltempfact;
        }
        let BDlocaltempfactdet = JSON.parse(sessionStorage.getItem(this.bdlocaltempfactdeta));
        if (BDlocaltempfactdet !== null) {
            this.tempfactdetallada = BDlocaltempfactdet;
            this.tempcantitempos = this.tempfactdetallada.length;
        }
        /* locales para compra */
        let BDLocalcompra = JSON.parse(sessionStorage.getItem(this.bdlocalcompra));
        if (BDLocalcompra !== null) {
            this.compra = BDLocalcompra;
            this.cantitemcompra = this.compra.length;
        }
        let BDLocalcomprageneral = JSON.parse(sessionStorage.getItem(this.bdlocalcomprageneral));
        if (BDLocalcomprageneral !== null) {
            this.comprageneral = BDLocalcomprageneral;
        }
        let BDLocallistacompra = JSON.parse(sessionStorage.getItem(this.bdlocallistacompra));
        if (BDLocallistacompra !== null) {
            this.listadocompras = BDLocallistacompra;
        }
        let BDLocaldetallecompra = JSON.parse(sessionStorage.getItem(this.bdlocaldetallecompra));
        if (BDLocaldetallecompra !== null) {
            this.compradetallada = BDLocaldetallecompra;
        }
        let BDLocaltempecompra = JSON.parse(sessionStorage.getItem(this.bdlocaltempcompra));
        if (BDLocaltempecompra !== null) {
            this.tempcompdetallada = BDLocaltempecompra;
            for (let i = 0; i < this.tempcompdetallada.length; i++) {
                this.cantitemcompra++;
            }
        }
        let BDLocaltempcomprageneral = JSON.parse(sessionStorage.getItem(this.bdlocaltempcomprageneral));
        if (BDLocaltempcomprageneral !== null) {
            this.tepmcomprageneral = BDLocaltempcomprageneral;
        }
        let BDLocallistpagocompra = JSON.parse(sessionStorage.getItem(this.bdlocallistpagocompra));
        if (BDLocallistpagocompra !== null) {
            this.listapagocompra = BDLocallistpagocompra;
        }

        let MSJLocal = sessionStorage.getItem(this.msjlocal);
        if (MSJLocal == null) {
            sessionStorage.setItem(this.msjlocal, JSON.stringify("true"));
            Swal.fire({
                title: 'Tenga en cuenta',
                text: "Esta pagina es un demo, puede realizar cualquier tipo de proceso que no tiene ninguna consecuencia.",
                icon: 'info',
                confirmButtonColor: '#4582ec',
                confirmButtonText: 'Ok, continuar!'
            }).then((result) => {
                if (result.isConfirmed) {

                }
            })
        }
    }
})

document.oncontextmenu = function(){
    return false;
}