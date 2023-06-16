<input id="update-image-box-state" type="checkbox" hidden />

<div class="update-image-box">
    <label for="update-image-box-state" class="background"></label>

    <div class="box">
        <header class="header">
            <span>Bạn có muốn sử dụng ảnh mới này cho hình chiếu không?</span>
            <i class="fa-solid fa-xmark"></i>
        </header>

        <div class="body">
            <img alt="preview-img" id="preview-img">
            
            <div class="button-list">
                <button class="accept">
                    <p>Xác nhận</p>
                </button>

                <label for="update-image-box-state" class="deny">
                    <p>Hủy</p>
                </label>
            </div>
        </div>
    </div>
</div>

<section class="home-image-slide">
    <h3>Hình ảnh đầu trang chủ</h3>
    
    <!-- Add new image form -->
    <form class="add-new-image" method="POST">
        <div class="input-style-1">
            <div class="input-wrapper">
                <input
                    type="text"
                    name="image-name"
                    placeholder=" "
                />
                <p class="placeholder">Tên hình ảnh mới ...</p>
            </div>
            <p class="error-message"></p>
        </div>

        <input
            type="file"
            name="file"
            accept="image/png, image/jpg, image/jpeg"
            class="new-image-input"
        />

        <button class="submit" type="submit">
            <p>Thêm ảnh</p>
        </button>
    </form>

    <table>
        <thead>
            <tr>
                <th>Xem trước</th>
                <th>STT</th>
                <th>Tên hình ảnh</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            <?php $this->renderImageSlideInfo(); ?>
        </tbody>
    </table>
</section>
