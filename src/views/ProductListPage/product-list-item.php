<li class="product-list-item">
	<a href="/product?id=<?= $product["product_id"] ?>">
		<div class="thumb">
			<img src="<?= $product["thumb"] ?>" alt="">
		</div>

		<p class="label"><?= $product["label"] ?></p>

		<!-- Cost -->
		<p class="cost">
			<span class="old">
				<?= $product["deal_cost"]
      ? number_format($product["cost"], 0, ".", ",") . " đ"
      : "" ?>
			</span>

			<span class="current">
				<?= $product["deal_cost"]
      ? number_format($product["cost"] - $product["deal_cost"], 0, ".", ",") .
        " đ"
      : number_format($product["cost"], 0, ".", ",") . " đ" ?>
			</span>
		</p>

		<!-- Detail product -->
		<ul class="detail">
			<?php if ($product["processor"]) { ?>
				<li>
					<span>CPU:</span>
					<span><?= $product["processor"] ?></span>
				</li>
			<?php } ?>
			
			<?php if ($product["monitor_width"] && $product["monitor_height"]) { ?>
				<li>
					<span>Màn hình:</span>
					<span>
						<?= $product["monitor_height"] ? $product["monitor_height"] : "0" ?>
						x
						<?= $product["monitor_width"] ? $product["monitor_width"] : "0" ?>
					</span>
				</li>
			<?php } ?>

			<?php if ($product["memory"]) { ?>
				<li>
					<span>RAM:</span>
					<span><?= round($product["memory"] / 1024) ?>GB</span>
				</li>
			<?php } ?>

			<?php if ($product["storage"]) { ?>
				<li>
					<span>ROM:</span>
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
