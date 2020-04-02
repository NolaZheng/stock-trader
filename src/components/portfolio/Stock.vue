<template>
    <div class="col-md-4">
        <div class="card bg-warning">         
            <div class="card-body text-center">
                <h4 class="card-title">{{stock.name}}</h4>
                <h6 class="card-subtitle mb-2 text-muted">(Price: {{stock.price}} | Quantity: {{stock.quantity}})</h6>
                <div class="pull-left">
                    <input type="number" class="form-control text-center" placeholder="0" min="0" v-model.number="quantity" :class="{danger:checkQuantity}"> 
                </div>
                <div class="pull-right">
                    <button class="btn btn-danger" @click="sellStock" :disabled="checkQuantity || quantity <= 0 || !Number.isInteger(quantity)">{{checkQuantity? 'Not Enough Stocks' : 'SELL'}}</button>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import {mapActions} from 'vuex';

export default {
    props:['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        ...mapActions({
            sellHolder: 'sellStock' //portfolio裡的action
        }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.sellHolder(order);
            this.quantity = 0;
        }
    },
    computed: {
        //檢查有沒有大於擁有的數量
        checkQuantity() {
            return this.quantity > this.stock.quantity;
        }
    }
}
</script>

<style scoped>
    .btn {
        margin-top: 20px;
    }
    input {
        width: 35%;
        margin: 0 auto;
    }
    .card {
        margin-top: 20px;
    }
    .form-control:focus {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .danger {
        border: 1px solid red;
    }
</style>