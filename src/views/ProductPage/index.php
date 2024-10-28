<link rel="stylesheet" href="./src/styles/css/ProductPage/styles.css">

<section class="product-info">
    <h2 class="name">
        Sản phẩm <?= $this->productInfo['label'] ?>
    </h2>


    <?php include_once __DIR__ . '/./product-introduce.php'; ?>
</section>

<script src="/src/assets/js/ProductPage.js"></script>
