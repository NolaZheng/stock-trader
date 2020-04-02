<template>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">StockTrader</router-link>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link to="/portfolio" active-class="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
                    <router-link to="/stocks" active-class="active" tag="li"><a class="nav-link">Stocks</a></router-link>

                    <strong class="navbar-text">Funds:{{funds | currency}}</strong>

                    <div class="row nav-right">
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="endDay">End Day</a>
                        </li>

                        <div class="nav-item dropdown">
                            <a 
                            class="nav-link dropdown-toggle" 
                            @click="isActive = !isActive"
                            href="#" id="navbarDropdown" 
                            role="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false">
                            Save & Load
                            </a>
                        
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                                <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
                            </div>
                            

                        </div>
                    </div>
                    
                </ul>
            
            </div>
        </nav>

</template>

<script>
import {mapActions} from 'vuex';
export default {
    data() {
        return{
            isActive: false
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    },
    methods: {
        ...mapActions({
            randomizeStocks:'randomizeStocks',
            fetchData:'loadData'
        }),
        endDay() {
            this.randomizeStocks();
        },
        saveData() {
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            };
            this.$http.put('data.json',data);
            
        },
        loadData() {
            this.fetchData();
        }
    }
}
</script>

<style scoped>
    .nav-right {
        position: absolute;
        right: 30px;
        margin-right: 10px;
    }
    .navbar-text {
        position: absolute;
        left: 45%;
    }
</style>