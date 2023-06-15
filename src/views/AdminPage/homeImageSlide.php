<input id="update-image-box-state" type="checkbox" hidden />

<div class="update-image-box">
    <label for="update-image-box-state" class="background"></label>

    <div class="box">
        <header class="header">
            <span>Bạn có muốn sử dụng ảnh mới này cho hình chiếu không?</span>
            <i class="fa-solid fa-xmark"></i>
        </header>

        <div class="body">
            <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/des-1920x450-4.jpg" alt="preview-img" id="preview-img">
            
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
