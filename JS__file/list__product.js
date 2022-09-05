Vue.component("cart", {
  props: ["cartItems", "visibility"],
  template: `
        <div class="cart-block" v-show="visibility">
            <cart-item v-for="item of cartItems" :key="item.id_product" :img="img" :cart-item="item">
            </cart-item>
        </div>
    `,
});

Vue.component("cart-item", {
  props: ["cartItem"],
  template: `
    <div class="cart-item">
                    <div class="img-basket"><img :src="cartItem.img" alt="No img"></div>
                    <div>
                        <div>
                            <div class="product-title">{{ cartItem.product_name }}</div>
                            <div class="product-quantity">Кол-во: {{ cartItem.quantity }}</div>
                        </div>
                    </div>
                    <div class="right-block">
                        <div class="product-price">{{cartItem.quantity*cartItem.price}} руб.</div>
                        <button class="del-btn" @click="$root.remove(cartItem)">&times;</button>
                    </div>
                </div>
    `,
});

Vue.component("products", {
  props: ["products"],
  template: `<div class="products">
                <product v-for="item of products" 
                :key="item.id_product" 
                :img="img"
                :product="item"></product>
               </div>`,
});

//карточка товара
Vue.component("product", {
  props: ["product"],
  template: `
            <div class="goods-item">
                <img :src="product.img" alt="No loaded img">
                <div class="goods-item-text">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}} руб.</p>
                    <button class="buy-btn cart-button" @click="$parent.$emit('add-product', product)">Купить</button>
                </div>
            </div>
    `,
});
