/**
 * MOCK API ON PURE NODE JS (Zero-Dependency)
 * Node js Test for Backend or full stack developper
 * Module : App
 * Author: Andrea Porcella
 * Year : 2023
 */

/**
 * Define API Url
 */
const API = 'http://localhost:3000/products'

/**
 * Action to populate exsperience
 */
const populateProducts = async () => {
    const products = document.querySelector('#products')
    products.innerHTML = ''
    const res = await fetch(API)
    const data = await res.json()
    if(data.success && data.payload){
        console.info(data);
        for (const product of data.payload) {
            const item = document.createElement('product-item')
            for (const key of ['name', 'rrp', 'info']) {
                const span = document.createElement('span')
                span.slot = key
                span.textContent = product[key]
                item.appendChild(span)
            }
            products.appendChild(item)
        }
    } else {
        console.error(data);
    }

}

/**
 * Initialize event listener on button to fetch the list of products
 */
document.querySelector('#fetch').addEventListener('click', async () => {
    await populateProducts()
})

/**
 * Create custom element using template for display list of products
 */
customElements.define('product-item', class Item extends HTMLElement {
    constructor() {
        super()
        const itemTmpl = document.querySelector('#item').content
        this.attachShadow({ mode: 'open' }).appendChild(itemTmpl.cloneNode(true))
    }
})