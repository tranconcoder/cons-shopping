<li class="product-list-item">
	<a href="/product?id=<?= $product["productId"] ?>">
		<div class="thumb">
			<img src="<?= $product["thumb"] ?>" alt="">
		</div>

		<p class="label"><?= $product["label"] ?></p>

		<!-- Cost -->
		<p class="cost">
			<span class="old">
				<?= $product["dealCost"]
      ? number_format($product["cost"], 0, ".", ",") . " đ"
      : "" ?>
			</span>

			<span class="current">
				<?= $product["dealCost"]
      ? number_format($product["cost"] - $product["dealCost"], 0, ".", ",") .
        " đ"
      : number_format($product["cost"], 0, ".", ",") . " đ" ?>
			</span>
		</p>

		<!-- Detail product -->
		<ul class="detail">
			<?php if ($product["processor"]) { ?>
				<li>
					<span>Cpu:</span>
					<span><?= $product["processor"] ?></span>
				</li>
			<?php } ?>
			
			<?php if ($product["monitorWidth"] && $product["monitorHeight"]) { ?>
				<li>
					<span>Màn hình:</span>
					<span>
						<?= $product["monitorHeight"] ? $product["monitorHeight"] : "0" ?>
						x
						<?= $product["monitorWidth"] ? $product["monitorWidth"] : "0" ?>
					</span>
				</li>
			<?php } ?>

			<?php if ($product["memory"]) { ?>
				<li>
					<span>Ram:</span>
					<span><?= round($product["memory"] / 1024) ?>GB</span>
				</li>
			<?php } ?>

			<?php if ($product["storage"]) { ?>
				<li>
					<span>Rom:</span>
					<span><?= round($product["storage"] / 1024) ?>GB</span>
				</li>
			<?php } ?>

			<?php if ($product["color"]) { ?>
				<li>
					<span>Màu sắc:</span>
					<span><?= $product["color"] ?></span>
				</li>
			<?php } ?>
		</ul>
	</a>
</li>
