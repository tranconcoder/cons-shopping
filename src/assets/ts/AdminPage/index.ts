import HomeImageSlide, { AddImageSlide } from "./homeImageSlide";

const homeImageSlide = new HomeImageSlide();
homeImageSlide.listenEvent();

const addNewImageSlide = new AddImageSlide();
addNewImageSlide.listenEvent();
