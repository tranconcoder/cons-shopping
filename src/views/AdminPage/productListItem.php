<li class="product-item" data-id="<?= $product["productId"] ?>">
    <img class="thumb" src="<?= $product["thumb"] ?>" alt="">

    <p class="name"><?= $product["label"] ?></p>

    <div class="price">
        <span>Giá: </span>
        <p><?= $product["cost"] ?></p>
    </div>

    <label for="change-product-info-state" class="change-info" style="--primary: #29a329;">
        <p>Chỉnh sửa thông tin</p>
    </label>

    <button class="delete" style="--primary: #ff8000;">
        <p>Xóa sản phẩm</p>
    </button>
</li>
