<link rel="stylesheet" href="/src/styles/css/OrderPage/styles.css">

<table class="order-table">
    <caption>Order</caption>

    <thead>
        <tr>
            <th>Mã đơn hàng</th>
            <th>Danh sách sản phẩm</th>
            <th>Địa chỉ</th>
            <th>Ghi chú</th>
            <th>Giá đơn hàng</th>
            <th>Hành động</th>
        </tr>
    </thead>

    <tbody>
        <?php $index = 1; ?>
        <?php foreach ($this->orderList as $orderId => $order) { ?>
            <tr data-order-id="<?= $orderId ?>">
                <td class="id">#<?= $index++ ?></td>
                <td class="products">
                    <ul>
                        <?php foreach ($order as $item) { ?>
                        <li>
                            <a href="/product?id=<?= $item["product_id"] ?>">
                                <?= $item["label"] ?>(<?= $item["count"] ?>)
                            </a>
                        </li>
                        <?php } ?>
                    </ul>
                </td>
                <td class="address">
                    <?= array_values($order)[0]["address"] ?>
                </td>
                <td class="note">
                    <?= array_values($order)[0]["note"] ?>
                </td>
                <td class="price">20.000.000đ</td>
                <td class="actions">
                    <div>
                        <button class="accept-button">
                            <i class="fa-solid fa-check"></i>
                        </button>
                        <button class="remove-button" style="--color: red;">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                    
                    <span class="order-id">Mã đơn hàng: <?= $orderId ?></span>
                </td>
            </tr>
        <?php } ?>
    </tbody>
</table>

<script src="/src/assets/js/OrderPage.js"></script>
