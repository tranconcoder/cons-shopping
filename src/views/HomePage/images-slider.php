<div class="images-slider-ctn">
	<button class="prev-button">
		<i class="fa-solid fa-angle-left"></i>
	</button>
	
	<ul class="images-list">
		<?php foreach ($imageList as $image) { ?>
               <li>
                    <img
                         src="<?= $image['source'] ?>"
                         alt="<?= $image['title'] ?>">
               </li>          
          <?php } ?>
	</ul>

	<div class="progress-bar"></div>
	
	<button class="next-button">
		<i class="fa-solid fa-angle-right"></i>
	</button>
</div>