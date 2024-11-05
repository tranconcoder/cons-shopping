<link rel="stylesheet" href="/src/styles/css/PaymentPage/styles.css">

<div class="payment-ctn">
    <header class="header">Thanh toán đơn hàng</header>

    <div class="body">
        <span class="order-id">Mã đơn hàng: <?= $_GET["orderId"] ?></span>

        <div class="card-number input-style-1">
            <div class="input-wrapper">
                <input id="card-number-input" type="number" name="username" placeholder=" ">
                <p class="placeholder">Số thẻ...</p>
            </div>
            <p class="error-message">Không được để trống trường này!</p>
        </div>

        <div class="card-number input-style-1">
            <div class="input-wrapper">
                <input id="expired-date-input" type="text" name="username" placeholder=" ">
                <p class="placeholder">Ngày hết hạn...</p>
            </div>
            <p class="error-message">Không được để trống trường này!</p>
        </div>

        <div class="card-number input-style-1">
            <div class="input-wrapper">
                <input id="cvv-input" type="number"  name="username" placeholder=" ">
                <p class="placeholder">Mã CVV...</p>
            </div>
            <p class="error-message">Không được để trống trường này!</p>
        </div>

        <img id="qr-code" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwP2UF4D2Zce5HH14rRICwLoJoqrKm_JaMBw&s" alt="" width="300px">
    </div>

    <footer class="footer">
        <span>Số tiền: <span>1.290.000đ</span></span>

        <button class="payment">Thanh toán</button>
    </footer>
</div>


<script src="/src/assets/js/PaymentPage.js"></script>
