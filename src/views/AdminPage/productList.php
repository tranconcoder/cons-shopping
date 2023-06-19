<section class="product-list-container">
    <ul class="product-list">
        <?php $this->renderProductList(); ?>
    </ul>

    <input type="checkbox" id="change-product-info-state">
    <div class="change-product-info">
        <form class="box" method="POST" action="/api/change-product-info">
            <input type="text" name="productId" hidden>

            <header class="header">
                <span>Sửa thông tin sản phẩm</span>

                <label for="change-product-info-state">
                    <i class="fa-solid fa-xmark"></i>
                </label>
            </header>

            <div class="body">
                <section class="section-1">
                    <img class="thumb" alt="">
                    <div class="common-info">
                        <input type="text" name="label" class="name">

                        <div class="cost">
                            <span>Giá: </span>
                            <input type="number" name="cost">
                        </div>


                        <div class="deal">
                            <span>Khuyến mãi: </span>
                            <select name="deal">
                                <option value="" selected>Không</option>
                                
                            </select>
                        </div>
                    </div>
                </section>

                <section class="section-2">
                    <table>
                        <tbody>
                            <tr>
                                <th>Hình ảnh</th>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section class="section-3">
                    <div class="product-info">
                        <h3>Thông tin sản phẩm</h3>

                        <ul class="info-list">
                             <li>
                                  <label>Chiều dài</label>
                                  <input type="text" name="sizeWidth"/>
                             </li>
                             <li>
                                  <label>Chiều rộng</label>
                                  <input type="text" name="sizeHeight"/>
                             </li>
                             <li>
                                  <label>Màn hình X</label>
                                  <input type="text" name="monitorWidth"/>
                             </li>
                             <li>
                                  <label>Màn hình Y</label>
                                  <input type="text" name="monitorHeight"/>
                             </li>
                             <li>
                                  <label>CPU</label>
                                  <input type="text" name="processor"/>
                             </li>
                             <li>
                                  <label>RAM (MB)</label>
                                  <input type="text" name="memory"/>
                             </li>
                             <li>
                                  <label>Bộ nhớ (MB)</label>
                                  <input type="text" name="storage"/>
                             </li>
                             <li>
                                  <label>Màu sắc</label>
                                  <input type="text" name="color"/>
                             </li>
                        </ul>
                    </div>
                </section>

            </div>

            <footer class="footer">
                <button type="submit">
                    <p>Cập nhật</p>
                </button>
            </footer>
        </form>

        <label for="change-product-info-state" class="background"></label>
    </div>
</section>
