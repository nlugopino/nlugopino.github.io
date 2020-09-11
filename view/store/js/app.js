var app = new Vue({
    el: '#app',
    data: {
        productos: [
            {
                id: 1,
                nombre: "Purina cat chow vida sana 1.5Kg",
                categoria: "Alimento",
                tipo: "Gato",
                detalle: "Dale a tu consentido la mejor nutrición, Purina cat chow vida sana 1.5Kg, productos recomendado para tu mascota.",
                stock: 5,
                img: "../img/prod/prod01.jpg",
                precio: 29750,
                preciold: 35000
            },
            {
                id: 2,
                nombre: "Purina dogourmet carne a la parrilla 2Kg",
                categoria: "Alimento",
                tipo: "Perro",
                detalle: "Dale a tu consentido la mejor nutrición, Purina dogourmet carne a la parrilla 2Kg, productos recomendado para tu mascota.",
                stock: 12,
                img: "../img/prod/prod02.jpg",
                precio: 20000,
                preciold: 0
            },
            {
                id: 3,
                nombre: "Purina dog chow cachorro 2Kg",
                categoria: "Alimento",
                tipo: "Perro",
                detalle: "Dale a tu consentido la mejor nutrición, Purina dog chow cachorro 2Kg, productos recomendado para tu mascota.",
                stock: 7,
                img: "../img/prod/prod03.jpg",
                precio: 29750,
                preciold: 35000
            },
            {
                id: 4,
                nombre: "Ringo croquetas adultos 20Kg",
                categoria: "Alimento",
                tipo: "Perro",
                detalle: "Dale a tu consentido la mejor nutrición, Ringo croquetas adultos 20Kg, productos recomendado para tu mascota.",
                stock: 4,
                img: "../img/prod/prod04.jpg",
                precio: 60000,
                preciold: 0
            },
            {
                id: 5,
                nombre: "Alimento humedo fancy feast surtido 85gx8un",
                categoria: "Alimento",
                tipo: "Gato",
                detalle: "Dale a tu consentido la mejor nutrición, Alimento humedo fancy feast surtido 85gx8un, productos recomendado para tu mascota.",
                stock: 6,
                img: "../img/prod/prod05.jpg",
                precio: 24565,
                preciold: 28900
            },
            {
                id: 6,
                nombre: "Mirringo adultos 8Kg",
                categoria: "Alimento",
                tipo: "Gato",
                detalle: "Dale a tu consentido la mejor nutrición, Mirringo adultos 8Kg, productos recomendado para tu mascota.",
                stock: 3,
                img: "../img/prod/prod06.jpg",
                precio: 49000,
                preciold: 0
            },
            {
                id: 7,
                nombre: "Alimento para perros nutrecan croquetas adultos 15Kg",
                categoria: "Alimento",
                tipo: "Perro",
                detalle: "Dale a tu consentido la mejor nutrición, Alimento para perros nutrecan croquetas adultos 15Kg, productos recomendado para tu mascota.",
                stock: 3,
                img: "../img/prod/prod07.jpg",
                precio: 35000,
                preciold: 0
            },
            {
                id: 8,
                nombre: "Alimento para perros dog chow adulto razas medianas y grandes 8Kg",
                categoria: "Alimento",
                tipo: "Perro",
                detalle: "Dale a tu consentido la mejor nutrición, Alimento para perros dog chow adulto razas medianas y grandes 8Kg, productos recomendado para tu mascota.",
                stock: 6,
                img: "../img/prod/prod08.jpg",
                precio: 67150,
                preciold: 79000
            },
            {
                id: 9,
                nombre: "Gatsy purina carne con arroz y maíz x3Kg",
                categoria: "Alimento",
                tipo: "Gato",
                detalle: "Dale a tu consentido la mejor nutrición, Gatsy purina carne con arroz y maíz x3Kg, productos recomendado para tu mascota.",
                stock: 10,
                img: "../img/prod/prod09.jpg",
                precio: 22950,
                preciold: 27000
            },
            {
                id: 10,
                nombre: "Pedigree Senior x 3Kg",
                categoria: "Alimento",
                tipo: "Perro",
                detalle: "Dale a tu consentido la mejor nutrición, Pedigree Senior x 3Kg, productos recomendado para tu mascota.",
                stock: 16,
                img: "../img/prod/prod10.jpg",
                precio: 25925,
                preciold: 30500
            },
            {
                id: 11,
                nombre: "Alimento para gatos nutrecat home 8Kg",
                categoria: "Alimento",
                tipo: "Gato",
                detalle: "Dale a tu consentido la mejor nutrición, Alimento para gatos nutrecat home 8Kg, productos recomendado para tu mascota.",
                stock: 8,
                img: "../img/prod/prod11.jpg",
                precio: 73000,
                preciold: 0
            },
            {
                id: 12,
                nombre: "Whiskas pollo x 1.5Kg",
                categoria: "Alimento",
                tipo: "Gato",
                detalle: "Dale a tu consentido la mejor nutrición, Whiskas pollo x 1.5Kg, productos recomendado para tu mascota.",
                stock: 10,
                img: "../img/prod/prod12.jpg",
                precio: 26000,
                preciold: 0
            },
            {
                id: 13,
                nombre: "Bozal protección para perro talla M & L",
                categoria: "Paseo",
                tipo: "Perro",
                detalle: "Por que tu consentido necesita lo mejor, Bozal protección para perro talla M & L, con esto siempre estará feliz.",
                stock: 12,
                img: "../img/prod/ace01.jpg",
                precio: 37900,
                preciold: 0
            },
            {
                id: 14,
                nombre: "Cama acolchada para gato mediana",
                categoria: "Bienestar",
                tipo: "Gato",
                detalle: "Por que tu consentido necesita lo mejor, Cama acolchada para gato mediana, con esto siempre estará feliz.",
                stock: 6,
                img: "../img/prod/ace03.jpg",
                precio: 70000,
                preciold: 0
            },
            {
                id: 15,
                nombre: "Removedor quita pelos guante, cepillo para mascotas",
                categoria: "Bienestar",
                tipo: "Perro",
                detalle: "Por que tu consentido necesita lo mejor, Removedor quita pelos guante, cepillo para mascotas, con esto siempre estará feliz.",
                stock: 7,
                img: "../img/prod/ace07.jpg",
                precio: 60000,
                preciold: 0
            },
            {
                id: 16,
                nombre: "Arenera sanitaria para gato",
                categoria: "Bienestar",
                tipo: "Gato",
                detalle: "Por que tu consentido necesita lo mejor, Arenera sanitaria para gato, con esto siempre estará feliz.",
                stock: 4,
                img: "../img/prod/ace10.jpg",
                precio: 90000,
                preciold: 0
            },
            {
                id: 17,
                nombre: "Correa reflectiva para perro mango acolchado",
                categoria: "Paseo",
                tipo: "Perro",
                detalle: "Por que tu consentido necesita lo mejor, Correa reflectiva para perro mango acolchado, con esto siempre estará feliz.",
                stock: 24,
                img: "../img/prod/ace09.jpg",
                precio: 37000,
                preciold: 0
            },
            {
                id: 18,
                nombre: "Pelota de movimiento castor juguete para gatos",
                categoria: "Juguetes",
                tipo: "Gato",
                detalle: "Por que tu consentido necesita lo mejor, Pelota de movimiento castor juguete para gatos, con esto siempre estará feliz.",
                stock: 10,
                img: "../img/prod/ace06.jpg",
                precio: 26000,
                preciold: 0
            },
            {
                id: 19,
                nombre: "Bozal de acero en canasta talla L & XL",
                categoria: "Paseo",
                tipo: "Perro",
                detalle: "Por que tu consentido necesita lo mejor, Bozal de acero en canasta talla L & XL, con esto siempre estará feliz.",
                stock: 8,
                img: "../img/prod/ace02.jpg",
                precio: 62000,
                preciold: 0
            },
            {
                id: 20,
                nombre: "Gimnasio para gatos altura 120Cm",
                categoria: "Bienestar",
                tipo: "Gato",
                detalle: "Por que tu consentido necesita lo mejor, Gimnasio para gatos altura 120Cm, con esto siempre estará feliz.",
                stock: 4,
                img: "../img/prod/ace08.jpg",
                precio: 434000,
                preciold: 0
            },
            {
                id: 21,
                nombre: "Cama acolchada para perro grandes",
                categoria: "Bienestar",
                tipo: "Perro",
                detalle: "Por que tu consentido necesita lo mejor, Cama acolchada para perro grandes, con esto siempre estará feliz.",
                stock: 6,
                img: "../img/prod/ace04.jpg",
                precio: 90000,
                preciold: 0
            },
            {
                id: 22,
                nombre: "Collar embudo Talla S para cuellos de 15 - 20Cm",
                categoria: "Bienestar",
                tipo: "Perro",
                detalle: "Por que tu consentido necesita lo mejor, Collar embudo Talla S para cuellos de 15 - 20Cm, con esto siempre estará feliz.",
                stock: 4,
                img: "../img/prod/ace12.jpg",
                precio: 31000,
                preciold: 0
            },
            {
                id: 23,
                nombre: "Juguete para perros cuerda, caucho natural",
                categoria: "Juguetes",
                tipo: "Perro",
                detalle: "Por que tu consentido necesita lo mejor, Juguete para perros cuerda, caucho natural, con esto siempre estará feliz.",
                stock: 6,
                img: "../img/prod/ace05.jpg",
                precio: 40000,
                preciold: 0
            },
            {
                id: 24,
                nombre: "Arena para gato KlinKat 10 Kg",
                categoria: "Bienestar",
                tipo: "Gato",
                detalle: "Por que tu consentido necesita lo mejor, Arena para gato KlinKat 10 Kg, caucho natural, con esto siempre estará feliz.",
                stock: 5,
                img: "../img/prod/ace11.jpg",
                precio: 100000,
                preciold: 0
            }
        ],
        verproducto: {
            id: "",
            nombre: "",
            categoria: "",
            detalle: "",
            tipo: "",
            stock: "",
            img: "",
            precio: "",
            preciold: ""
        },
        arraytempo: "",
        bdlocal: "store",
        msjlocal: "msjlocalstore",
        carrodecompras: "",
        tempcar: "",
        items: 0,
        datospersonales: {
            nombre: "Nelson Andres Lugo Pino",
            telefono: "3160000000",
            correo: "nlugopino@outlook.com",
            direccion: "Carrera 78 A # 100-25 Tr 2 Ap 402",
            barrio: "Florida",
            ciudad: "Bucaramanga"
        },
        subtotal: 0,
        costoenvio: 0,
        total: 0
    },
    methods: {
        agregarcarro(id) {
            var idprod = this.productos[id].id;

            var filtro = this.carrodecompras.filter(function (product) {
                return product.id === idprod;
            });

            if (filtro.length == 0) {
                this.carrodecompras.push({
                    id: this.productos[id].id,
                    nombre: this.productos[id].nombre,
                    categoria: this.productos[id].categoria,
                    tipo: this.productos[id].tipo,
                    detalle: this.productos[id].detalle,
                    cantidad: 1,
                    stock: this.productos[id].stock,
                    img: this.productos[id].img,
                    precio: this.productos[id].precio,
                    preciold: this.productos[id].preciold
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
                sessionStorage.setItem(this.bdlocal, JSON.stringify(this.carrodecompras));
                this.items++;
                $('#modalproducto').modal('hide');
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
                $('#modalproducto').modal('hide');
            }
        },
        quitardelcarro(id) {
            this.carrodecompras.splice(id, 1);
            sessionStorage.setItem(this.bdlocal, JSON.stringify(this.carrodecompras));
            this.items--;
        },
        calcularprecio(id) {
            var cantidad = event.target.value;
            var idpro = this.carrodecompras[id].id;
            var precio = 0;
            for (var i = 0; i < this.productos.length; i++) {
                if (idpro === this.productos[i].id) {
                    precio = this.productos[i].precio;
                }
            }
            var subtotal = cantidad * precio;

            this.carrodecompras[id].cantidad = cantidad;
            this.carrodecompras[id].precio = subtotal;
            sessionStorage.setItem(this.bdlocal, JSON.stringify(this.carrodecompras));
        },
        finalizarcompra() {
            var pedido = Math.floor(100000 + Math.random() * 900000);
            Swal.fire({
                imageUrl: '../img/publi/gracias.jpg',
                title: '¡Compra realizada con éxito!',
                text: 'Su numero de pedido es #' + pedido + ' estaremos en contacto con usted',
                footer: '<strong>Gracias por preferirnos 😊</strong>',
                cancelButtonText: 'Ver pedido!',
                confirmButtonColor: '#02b875',
                confirmButtonText: 'Volver a productos!',
                allowEscapeKey: false,
                allowOutsideClick: false
            }).then((result) => {
                this.carrodecompras = "";
                sessionStorage.removeItem(this.bdlocal);
                this.items = 0;
                window.location.href = 'productos.html';
            })
        },
        contacto() {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                },
                onDestroy: (toast) => {
                    location.reload();
                }
            })
            Toast.fire({
                icon: 'success',
                title: '¡Mensaje enviado!'
            })
        },
        viewproducto(id) {
            this.verproducto.index = id;
            this.verproducto.id = this.productos[id].id;
            this.verproducto.nombre = this.productos[id].nombre;
            this.verproducto.categoria = this.productos[id].categoria;
            this.verproducto.tipo = this.productos[id].tipo;
            this.verproducto.detalle = this.productos[id].detalle;
            this.verproducto.stock = this.productos[id].stock;
            this.verproducto.img = this.productos[id].img;
            this.verproducto.precio = this.productos[id].precio;
            this.verproducto.preciold = this.productos[id].preciold;
        },
        favorito(id) {
            if (document.getElementById("heart" + id).className.match(/(?:^|\s)fas fa-heart(?!\S)/)) {
                document.getElementById("heart" + id).className = "far fa-heart";
            } else {
                document.getElementById("heart" + id).className = "fas fa-heart";
            }
        },
        filtrotipo(tipo) {
            this.productos = this.arraytempo;

            var productos = this.productos.filter(function (product) {
                return product.tipo === tipo;
            });
            this.productos = productos;
        },
        filtrocategoria(categoria) {
            this.productos = this.arraytempo;

            var productos = this.productos.filter(function (product) {
                return product.categoria === categoria;
            });
            this.productos = productos;
        },
        cleanfiltro() {
            document.querySelectorAll('[name=tipo]').forEach((x) => x.checked = false);
            this.productos = this.arraytempo;
        }
    },
    computed: {
        subtotalcarro() {
            this.subtotal = 0;
            for (var i = 0; i < this.carrodecompras.length; i++) {
                this.subtotal = this.subtotal + this.carrodecompras[i].precio;
            }

            return this.subtotal;
        },
        envio() {
            this.costoenvio = 0;
            var cantprod = this.carrodecompras.length;
            var desc = 0;

            console.log(cantprod);
            console.log(this.subtotalcarro);

            if (cantprod == 1) {
                console.log("Caso 1");
                if (this.subtotalcarro <= 30000) {
                    this.costoenvio = 10000;
                } else if (this.subtotalcarro <= 60000) {
                    this.costoenvio = 14000;
                } else if (this.subtotalcarro < 150000) {
                    this.costoenvio = 18000;
                } else {
                    this.costoenvio = 0;
                }
            } else if (cantprod > 1) {
                console.log("Caso 2");
                if (this.subtotalcarro <= 50000) {
                    this.costoenvio = 15000;
                } else if (this.subtotalcarro < 150000) {
                    desc = this.subtotalcarro * 0.18;
                    this.costoenvio = desc;
                } else {
                    this.costoenvio = 0;
                }
            }
            return this.costoenvio;
        },
        totalcarro() {
            this.total = this.subtotalcarro + this.envio;
            return this.total;
        }
    },
    created() {
        this.arraytempo = this.productos;
        let BDLocal = JSON.parse(sessionStorage.getItem(this.bdlocal));
        if (BDLocal === null) {
            this.carrodecompras = [];
        } else {
            this.carrodecompras = BDLocal;
        }
        for (let i = 0; i < this.carrodecompras.length; i++) {
            this.items++;
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