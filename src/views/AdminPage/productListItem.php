<li class="product-item" data-id="<?= $product["productId"] ?>">
    <img class="thumb" src="<?= $product["thumb"] ?>" alt="">

    <input type="text" class="name" value="<?= $product["label"] ?>">

    <div class="price">
        <span>Giá: </span>
        <input type="text" value="<?= $product["cost"] ?>">
    </div>

    <button class="change-info" style="--primary: #29a329;">
        <p>Chỉnh sửa thông tin</p>
    </button>

    <button class="delete" style="--primary: #ff8000;">
        <p>Xóa sản phẩm</p>
    </button>
</li>
