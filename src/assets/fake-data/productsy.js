const product_01_image_01 = require('../images/products/product-01 (1).jpg').default
const product_01_image_02 = require('../images/products/product-01 (2).jpg').default
const product_01_image_03 = require('../images/products/product-01 (3).jpg').default
const product_01_image_04 = require('../images/products/product-01 (4).jpg').default
const product_02_image_01 = require('../images/products/product-02 (1).jpg').default
const product_02_image_02 = require('../images/products/product-02 (2).jpg').default
const product_03_image_01 = require('../images/products/product-03 (1).jpg').default
const product_03_image_02 = require('../images/products/product-03 (2).jpg').default
const product_04_image_01 = require('../images/products/product-04 (1).jpg').default
const product_04_image_02 = require('../images/products/product-04 (2).jpg').default
const product_05_image_01 = require('../images/products/product-05 (1).jpg').default
const product_05_image_02 = require('../images/products/product-05 (2).jpg').default
const product_06_image_01 = require('../images/products/product-06 (1).jpg').default
const product_06_image_02 = require('../images/products/product-06 (2).jpg').default
const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
const product_07_image_02 = require('../images/products/product-07 (2).jpg').default
const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
const product_08_image_02 = require('../images/products/product-08 (2).jpg').default
const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
const product_09_image_02 = require('../images/products/product-09 (2).jpg').default
const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
const product_10_image_02 = require('../images/products/product-10 (2).jpg').default
/* const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
const product_12_image_02 = require('../images/products/product-12 (2).jpg').default */
const products = [
    {
        title: "FLY LONDON Zip Up Boots JALO882FLY NAOMI OFFWHITE",
        price: '26000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        image04: product_01_image_04,
        categorySlug: "cizme",
        colors: ["white", "black"],
        slug: "P141633001",
        size: ["35", "36", "37", "38", "39", "40"],
        description: 'Ako tražite hrabar i moderan izgled, ne dozvolite da pobegnete od ovih ženskih kožnih čizama sa rajsferšlusom. Kreirao Fli London <br><br>' +
"        Model: JALO882FLI <br>" +
"REF: FLIP144882001 <br>" +
"Materijal: Koža; <br>" +
"Postava: mikrofiber; <br>" +
"Uložak: mikrofiber; <br>" +
"Potplat: guma; <br>" +
"Visina pete: 5 cm; <br>"
    },
    {
        title: "Fly London P141941028",
        price: '11900',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "cizme",
        colors: ["white", "red", "blue"],
        slug: "P141941028",
        size: ["39", "40"],
        description: "Lice: Koža      <br>   Postava: Koža  <br>        Đon: Guma"
    },
    {
        title: "Fly London P142912003",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "cizme",
        colors: ["white", "red", "orange", "yellow"],
        slug: "P142912003",
        size: ["40"],
        description: "Lice: Koža      <br>   Postava: Koža  <br>        Đon: Guma"
    },
    {
        title: "Fly London P142912004",
        price: '12816',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "cizme",
        colors: ["white", "orange", "blue"],
        slug: "P142912004",
        size: ["xl"],
        description: "Lice: Koža      <br>   Postava: Koža  <br>        Đon: Guma"
    },
    {
        title: "Fly London P142912005",
        price: '12816',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "cizme",
        colors: ["white", "pink"],
        slug: "P142912005",
        size: ["42"],
        description: "Lice: Koža      <br>   Postava: Koža  <br>        Đon: Guma"
    },
    {
        title: "Fly London P142458034",
        price: '9240',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "cipele",
        colors: ["black"],
        slug: "P142458034",
        size: ["38", "39", "40"],
        description: "Lice: Koža      <br>   Postava: Koža  <br>        Đon: Guma"
    },
    {
        title: "Fly London P14319500",
        price: '8896',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "cipele",
        colors: ["white", "red", "orange", "blue"],
        slug: "P14319500",
        size: ["l", "xl"],
        description: "Lice: Koža      <br>   Postava: Koža  <br>        Đon: Guma"
    },
    {
        title: "Bearpawn 1962W-638 ELLE SHORT",
        price: '8000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "cizmice",
        colors: ["white", "red", "black"],
        slug: "1962W-638",
        size: ["s", "m", "xl"],
        description: "Visina osovine 20 cm    <br>    30 cm obima <br>        Gornji deo od antilopa <br>        NOVA smanjena konstrukcija <br>    Postava od mešavine ovčje kože i vune     <br>   Udobna podnožja od ovčije kože    <br>    Lagani potplat od duvane gume <br>       Obrađeno tehnologijom NeverVet®"
    },
    {
        title: "1963W-011 ELLE TALL ",
        price: '9600',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "cizmice",
        colors: ["white", "blue"],
        slug: "1963W",
        size: ["m"],
        description: "Visina osovine 20 cm    <br>    30 cm obima <br>        Gornji deo od antilopa <br>        NOVA smanjena konstrukcija <br>    Postava od mešavine ovčje kože i vune     <br>   Udobna podnožja od ovčije kože    <br>    Lagani potplat od duvane gume <br>       Obrađeno tehnologijom NeverVet®"
    },
    {
        title: "1963W-030 ELLE TALL",
        price: '9600',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "cizmice",
        colors: ["blue", "black"],
        slug: "1963W030",
        size: ["l"],
        description: "Visina osovine 20 cm    <br>    30 cm obima <br>        Gornji deo od antilopa <br>        NOVA smanjena konstrukcija <br>    Postava od mešavine ovčje kože i vune     <br>   Udobna podnožja od ovčije kože    <br>    Lagani potplat od duvane gume <br>       Obrađeno tehnologijom NeverVet®"
    },
   
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData