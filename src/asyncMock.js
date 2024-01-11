const products = [
  {
    id: "1",
    name: "Iphone 14",
    price: 1000,
    category: "celulars",
    img: "https://www.macstation.com.ar/img/productos/3119-2.jpg",
    stock: 25,
    description:
      "El iPhone 14 viene con el sistema de dos cámaras más impresionante en un iPhone, para que tomes fotos espectaculares con mucha o poca luz. Y te da más tranquilidad gracias a una funcionalidad de seguridad que salva vidas.",
  },
  {
    id: "2",
    name: "Iphone 15",
    price: 1500,
    category: "celulars",
    img: "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-15-pro-max/gallery/white-titanium-1.jpg",
    stock: 15,
    description:
      "El iPhone 15 viene con la Dynamic Island, cámara gran angular de 48 MP, entrada USB-C y un resistente vidrio con infusión de color en un diseño de aluminio.",
  },
  {
    id: "3",
    name: "Ipad 9na gen",
    price: 2000,
    category: "tablets",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_883063-MLA72121884357_102023-F.webp",
    stock: 10,
    description:
      "Lleno de potencia, muy fácil de usar y versátil. El nuevo iPad viene con una espectacular pantalla Retina de 10.2 pulgadas, el potente chip A13 Bionic y una cámara frontal ultra gran angular con Encuadre Centrado. Además, es compatible con el Apple Pencil y el Smart Keyboard.",
  },
  {
    id: "4",
    name: "Macbook Air",
    price: 5000,
    category: "notebooks",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_684862-MLA46516504419_062021-F.webp",
    stock: 10,
    description:
      "La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos. Además, el Neural Engine de 16 núcleos se encarga de acelerar todos los procesos de aprendizaje automático.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};


export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 500);
  });
};
