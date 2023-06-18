import HomeImageSlide, { AddImageSlide } from "./homeImageSlide";
import ProductList from "./productList";

const homeImageSlide = new HomeImageSlide();
homeImageSlide.listenEvent();

const addNewImageSlide = new AddImageSlide();
addNewImageSlide.listenEvent();

const productList = new ProductList();
productList.listenEvent();
