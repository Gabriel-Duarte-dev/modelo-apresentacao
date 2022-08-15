import img1 from "../../../images/img1.jpg";
import img2 from "../../../images/img2.jpg";
import img3 from "../../../images/img3.jpg";

export const previewHomeContent = {
  carouselImages: [img1, img2, img3],
  sectionContact: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, dui non posuere imperdiet, odio nulla convallis quam, ac venenatis diam neque ut erat. Vestibulum suscipit varius urna ut dignissim. Duis vitae pharetra sem, vel dapibus lectus.",
  },
  sectionServices: {
    title: "Lorem ipsum",
  },
};

export interface HomeContent {
  carouselImages: any[];
  sectionContact: {
    description: string;
  };
  sectionServices: {
    title: string;
  };
}
