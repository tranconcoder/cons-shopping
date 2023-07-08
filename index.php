<?php
session_start();

// Include util
include_once __DIR__ . '/./src/assets/utils/index.php';
include_once './src/config/db/connect.php';
include_once __DIR__ . '/./src/controllers/layouts/Layout1.controller.php';

$uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';
$uri = explode('?', $uri, 2)[0];

switch ($uri) {
	case '/api/register':
		include_once __DIR__ .
			'/./src/controllers/apis/RegisterApi.controller.php';
		$registerApi = new RegisterApi();
		exit();

	case '/api/login':
		include_once __DIR__ .
			'/./src/controllers/apis/LoginApi.controller.php';
		$loginApi = new LoginApi($_POST['username'], $_POST['password']);
		exit();

	case '/api/logout':
		include_once __DIR__ .
			'/./src/controllers/apis/LogoutApi.controller.php';
		$logoutApi = new LogoutApi();
		exit();

	case '/api/search-product':
		include_once __DIR__ .
			'/./src/controllers/apis/SearchProductApi.controller.php';
		$searchProductApi = new SearchProductApi();
		exit();

	case '/api/change-image-slider':
		include_once __DIR__ .
			'/./src/controllers/apis/ChangeImageSliderApi.controller.php';
		$changeImageSliderApi = new ChangeImageSliderApiController();
		exit();

	case '/api/add-image-slider':
		include_once __DIR__ .
			'/./src/controllers/apis/AddImageSliderApi.controller.php';
		$addImageSliderApi = new AddImageSliderApiController();
		exit();

	case '/api/remove-image-slider':
		include_once __DIR__ .
			'/./src/controllers/apis/RemoveImageSliderApi.controller.php';
		$removeImageSliderApi = new RemoveImageSliderApiController();
		exit();

	case '/api/update-info-image-slider':
		include_once __DIR__ .
			'/./src/controllers/apis/ChangeInfoImageSliderApi.controller.php';
		$changeInfoImageSLiderApi = new ChangeInfoImageSliderApiController();
		exit();

	case '/api/swap-order-image-slider':
		include_once __DIR__ .
			'/./src/controllers/apis/SwapOrderImageSlideApi.controller.php';
		$swapOrderImageSlideApiController = new SwapOrderImageSlideApiController();
		exit();

	case '/api/remove-product':
		include_once __DIR__ .
			'/./src/controllers/apis/RemoveProductApi.controller.php';
		$removeProductApiController = new RemoveProductApiController();
		exit();

	case '/api/get-product':
		include_once __DIR__ .
			'/./src/controllers/apis/GetProductApi.controller.php';
		$getProductApiController = new GetProductApiController();
		exit();

	case '/api/change-product-info':
		include_once __DIR__ .
			'/./src/controllers/apis/ChangeProductInfoApi.controller.php';
		$changeProductInfoApiController = new ChangeProductInfoApiController();
		exit();

	case '/api/get-all-deal':
		include_once __DIR__ .
			'/./src/controllers/apis/GetAllDealApi.controller.php';
		$getAllDealApiController = new GetAllDealApiController();
		exit();

	case '/api/get-product-images':
		include_once __DIR__ .
			'/./src/controllers/apis/GetProductImageApi.controller.php';
		$getProductImagesApiController = new GetProductImageApiController();
		exit();

	case '/api/change-image':
		include_once __DIR__ .
			'/./src/controllers/apis/ChangeImageApi.controller.php';
		$changeImageApiController = new ChangeImageApiController();
		exit();
	case '/api/remove-product-image':
		include_once __DIR__ .
			'/./src/controllers/apis/RemoveProductImageApi.controller.php';
		$removeProductImageApiController = new RemoveProductImageApiController();
		exit();

	case '/api/add-product-image':
		include_once __DIR__ .
			'/./src/controllers/apis/AddProductImageApi.controller.php';
		$addProductImageApiController = new AddProductImageApiController();
		exit();

	case '/api/add-product':
		include_once __DIR__ .
			'/./src/controllers/apis/AddProductApi.controller.php';
		$addProductApiController = new AddProductApiController();
		exit();

	case '/product':
		include_once __DIR__ . '/./src/controllers/ProductPage.controller.php';

		$bodyController = new ProductPageController();
		$controller = new Layout1Controller($bodyController);

		break;

	case '/search':
		include_once __DIR__ .
			'/./src/controllers/ProductListPage.controller.php';

		$bodyController = new ProductListPageController();
		$controller = new Layout1Controller($bodyController);

		break;

	case '/admin':
		include_once __DIR__ . '/./src/controllers/AdminPage.controller.php';

		if (!isset($_SESSION['userId'])) {
			header('Location: /');
			exit();
		}

		$bodyController = new AdminPageController();
		$controller = new Layout1Controller($bodyController);

		break;

	default:
		include_once __DIR__ . '/./src/controllers/HomePage.controller.php';

		$bodyController = new HomePageController();
		$controller = new Layout1Controller($bodyController);
}

$controller->invoke();
