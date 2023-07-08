<label for="add-product-box-state" class="add-product-button">
    <p>Thêm sản phẩm</p>
</label>

<input type="checkbox" id="add-product-box-state" hidden />
<form class="add-product-box-ctn" action="/api/add-product" method="POST" enctype="multipart/form-data">
    <div class="box">
        <header class="header">
            <span>Thêm sản phẩm</span>

            <label for="add-product-box-state">
                <i class="fa-solid fa-xmark"></i>
            </label>
        </header>

        <div class="body">
            <div class="input-style-1">
                <div class="input-wrapper">
                    <input
                        type="text"
                        name="label"
                        placeholder=" "
                        required
                    />
                    <p class="placeholder">Tên sản phẩm...</p>
                </div>
                <p class="error-message"></p>
            </div>
        
            <div class="input-style-1">
                <div class="input-wrapper">
                    <input
                        type="number"
                        name="cost"
                        placeholder=" "
                        required
                    />
                    <p class="placeholder">Giá sản phẩm...</p>
                </div>
                <p class="error-message"></p>
            </div>

            <div class="input-style-1">
                <div class="input-wrapper">
                    <input
                        type="text"
                        name="description"
                        placeholder=" "
                        required
                    />
                    <p class="placeholder">Mô tả sản phẩm...</p>
                </div>
                <p class="error-message"></p>
            </div>

            <div class="input-style-1">
                <div class="input-wrapper">
                    <input
                        type="number"
                        name="sizeHeight"
                        placeholder=" "
                    />
                    <p class="placeholder">Chiều cao sản phẩm...</p>
                </div>
            </div>
            
            <div class="input-style-1">
                <div class="input-wrapper">
                    <input
                        type="number"
                        name="sizeWidth"
                        placeholder=" "
                    />
                    <p class="placeholder">Chiều rộng sản phẩm...</p>
                </div>
            </div>

            <div class="input-style-1">
                <div class="input-wrapper">
                    <input
                        type="number"
                        name="monitorHeight"
                        placeholder=" "
                    />
                    <p class="placeholder">Màn hình Y...</p>
                </div>
            </div>

            <div class="input-style-1">
                <div class="input-wrapper">
                    <input
                        type="number"
                        name="monitorWidth"
                        placeholder=" "
                    />
                    <p class="placeholder">Màn hình X...</p>
                </div>
            </div>

            <div class="input-style-1">
                <div class="input-wrapper">
                    <input
                        type="text"
                        name="processor"
                        placeholder=" "
                    />
                    <p class="placeholder">Bộ xử lý.... <p>
                </div>
            </div>

            <div class="input-style-1">
                <div class="input-wrapper">
                    <input
                        type="number"
                        name="memory"
                        placeholder=" "
                    />
                    <p class="placeholder">Dung lượng RAM (Mb)...</p>
                </div>
            </div>

            <div class="input-style-1">
                <div class="input-wrapper">
                    <input
                        type="number"
                        name="storage"
                        placeholder=" "
                    />
                    <p class="placeholder">Bộ nhớ trong (Mb)...</p>
                </div>
            </div>

            <div class="input-style-1">
                <div class="input-wrapper">
                    <input
                        type="text"
                        name="color"
                        placeholder=" "
                    />
                    <p class="placeholder">Màu sắc ...</p>
                </div>
            </div>
            
            <select name="dealId">
                <option value="">Chọn khuyến mãi</option>
                <?php foreach ($this->dealList as $deal) { ?>
                    <option
                        value="<?= $deal["dealId"] ?>"
                    >
                        <?= $deal["title"] ?>
                    </option>
                <?php } ?>
            </select>

            <input
                type="file"
                name="file[]"
                accept="image/jpg, image/png, image/jpeg" 
                multiple
                required
            />

            <ul class="image-list"></ul>


            <button class="submit">
                <p>Thêm</p>
            </button>
        </div>
    </div>

    <label for="add-product-box-state" class="background"></label>
</form>
