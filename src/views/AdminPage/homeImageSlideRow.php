<tr>
    <td><?= $imageSlideInfo["order"] ?></td>
    <td class="thumb">
        <label>
            <img src="<?= $imageSlideInfo["source"] ?>" alt="preview">
            <input data-id="<?= $imageSlideInfo[
              "id"
            ] ?>" type="file" accept="image/jpeg, image/jpg, image/png" name="thumb" hidden />
        </label>
    </td>
    <td><?= $imageSlideInfo["title"] ?></td>
    <td>
        <button data-id="<?= $imageSlideInfo["id"] ?>">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </td>
</tr>
