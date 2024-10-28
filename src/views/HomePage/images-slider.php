<div class="image-slide-ctn">
    <button class="prev-button">
        <i class="fa-solid fa-angle-left"></i>
    </button>

    <ul class="image-list">
        <?php foreach ($this->imageList as $image) { ?>
            <li>
                <img src="<?= $image['source'] ?>" alt="<?= $image['title'] ?>" />
            </li>
        <?php } ?>
    </ul>

    <ul class="progress-bar">
        <?php for ($i = 0; $i < count($this->imageList); $i++) { ?>
            <li class="dot<?= $i === 0 ? ' active' : '' ?>" data-index="<?= $i ?>"></li>
        <?php } ?>
    </ul>

    <button class="next-button">
        <i class="fa-solid fa-angle-right"></i>
    </button>
</div>
