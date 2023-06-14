<?php

class SearchProductApiModel {
    
    public function searchProducts() {

            const url = `/api/search-product?q=${this.searchInput.value}`;

            const productList = await fetch(url, {
                method: "GET",
            }).then((res) => res.json());
            

}}
