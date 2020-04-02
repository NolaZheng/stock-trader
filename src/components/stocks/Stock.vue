<template>
    <div class="col-md-4">
        <div class="card bg-light">         
            <div class="card-body text-center">
                <h4 class="card-title">{{stock.name}}</h4>
                <h6 class="card-subtitle mb-2 text-muted">(Price: {{stock.price}})</h6>
                <div class="pull-left">
                    <input type="number" class="form-control text-center" placeholder="0" min="0" v-model="quantity" :class="{danger: checkFunds}">
                </div>
                <div class="pull-right">
                    <button class="btn" :class="toggleBtn" @click="buyStock" :disabled="checkFunds || quantity <= 0 || !Number.isInteger(+quantity)">{{checkFunds? 'Insufficient Funds' : 'BUY'}}</button>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    props:['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };

            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    },
    computed: {
        //檢查有沒有大於資金
        funds() {
            return this.$store.getters.funds;
        },

        checkFunds() {
            return this.quantity * this.stock.price > this.funds;
        },

        //按鈕變色
        toggleBtn() {
            if (this.quantity * this.stock.price > this.funds) {
                return 'btn-danger';
            } else return 'btn-success';
        },
        
    },
    
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
    .form-control:focus {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .card {
        margin-top: 20px;
    }
    .danger {
        border: 1px solid red;
    }
</style>