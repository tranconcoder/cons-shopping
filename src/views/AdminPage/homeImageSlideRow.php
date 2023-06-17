<tr data-id="<?= $imageSlideInfo["id"] ?>">
    <td>
        <input name="order" type="number" value="<?= $imageSlideInfo[
          "order"
        ] ?>">
    </td>
    <td class="thumb">
        <label>
            <img src="<?= $imageSlideInfo["source"] ?>" alt="preview">
            <input data-id="<?= $imageSlideInfo[
              "id"
            ] ?>" type="file" accept="image/jpeg, image/jpg, image/png" name="thumb" hidden />
        </label>
    </td>
    <td>
        <input name="title" type="text" value="<?= $imageSlideInfo["title"] ?>">
    </td>
    <td class="action">
        <button data-id="<?= $imageSlideInfo["id"] ?>">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </td>
</tr>
