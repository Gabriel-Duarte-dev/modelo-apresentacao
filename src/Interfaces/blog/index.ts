import img1 from "../../../images/img1.jpg";
import img2 from "../../../images/img2.jpg";
import img3 from "../../../images/img3.jpg";

export const postsPreview = [
  {
    id: Math.random().toString().replace("0.", ""),
    createdAt: new Date(),
    title: "Título do post 1",
    content: [
      {
        subtitle: "Lorem ipsum dolor",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar id ante pretium tincidunt. Quisque suscipit malesuada lorem, ut ultricies libero tempor et. Donec et ligula ut orci commodo porta vel eget dolor. Quisque tincidunt a augue id iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique orci. Nullam ac nisi mauris. Nam in ipsum sed erat rhoncus vestibulum non sit amet enim. In aliquet justo quis sapien molestie molestie tincidunt nec massa.",
      },
      {
        subtitle: "Lorem ipsum dolor",
        paragraph:
          "Phasellus sodales nunc vel arcu sagittis, et cursus turpis ornare. Phasellus finibus mi lacus, sit amet iaculis tellus vulputate in. Mauris ullamcorper, urna ac cursus fringilla, magna neque lacinia nisi, nec dapibus nibh tortor quis augue. Integer porttitor ipsum sit amet diam tristique, sit amet sagittis lectus cursus",
      },
      {
        subtitle: "Lorem ipsum dolor",
        paragraph:
          "Duis lobortis ullamcorper mollis. Aenean accumsan quam eu odio euismod tempus. Morbi commodo, libero sed consequat dignissim, lectus diam ornare nunc, a pharetra mauris lectus eget felis. Quisque augue odio, maximus iaculis finibus ut, euismod sit amet tellus.",
      },
    ],
    image: img1,
  },
  {
    id: Math.random().toString().replace("0.", ""),
    createdAt: new Date(),
    title: "Título do post 2",
    content: [
      {
        subtitle: "Lorem ipsum dolor",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar id ante pretium tincidunt. Quisque suscipit malesuada lorem, ut ultricies libero tempor et. Donec et ligula ut orci commodo porta vel eget dolor. Quisque tincidunt a augue id iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique orci. Nullam ac nisi mauris. Nam in ipsum sed erat rhoncus vestibulum non sit amet enim. In aliquet justo quis sapien molestie molestie tincidunt nec massa.",
      },
      {
        subtitle: "Lorem ipsum dolor",
        paragraph:
          "Phasellus sodales nunc vel arcu sagittis, et cursus turpis ornare. Phasellus finibus mi lacus, sit amet iaculis tellus vulputate in. Mauris ullamcorper, urna ac cursus fringilla, magna neque lacinia nisi, nec dapibus nibh tortor quis augue. Integer porttitor ipsum sit amet diam tristique, sit amet sagittis lectus cursus",
      },
      {
        subtitle: "Lorem ipsum dolor",
        paragraph:
          "Duis lobortis ullamcorper mollis. Aenean accumsan quam eu odio euismod tempus. Morbi commodo, libero sed consequat dignissim, lectus diam ornare nunc, a pharetra mauris lectus eget felis. Quisque augue odio, maximus iaculis finibus ut, euismod sit amet tellus.",
      },
    ],
    image: img2,
  },
  {
    id: Math.random().toString().replace("0.", ""),
    createdAt: new Date(),
    title: "Título do post 3",
    content: [
      {
        subtitle: "Lorem ipsum dolor",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar id ante pretium tincidunt. Quisque suscipit malesuada lorem, ut ultricies libero tempor et. Donec et ligula ut orci commodo porta vel eget dolor. Quisque tincidunt a augue id iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique orci. Nullam ac nisi mauris. Nam in ipsum sed erat rhoncus vestibulum non sit amet enim. In aliquet justo quis sapien molestie molestie tincidunt nec massa.",
      },
      {
        subtitle: "Lorem ipsum dolor",
        paragraph:
          "Phasellus sodales nunc vel arcu sagittis, et cursus turpis ornare. Phasellus finibus mi lacus, sit amet iaculis tellus vulputate in. Mauris ullamcorper, urna ac cursus fringilla, magna neque lacinia nisi, nec dapibus nibh tortor quis augue. Integer porttitor ipsum sit amet diam tristique, sit amet sagittis lectus cursus",
      },
      {
        subtitle: "Lorem ipsum dolor",
        paragraph:
          "Duis lobortis ullamcorper mollis. Aenean accumsan quam eu odio euismod tempus. Morbi commodo, libero sed consequat dignissim, lectus diam ornare nunc, a pharetra mauris lectus eget felis. Quisque augue odio, maximus iaculis finibus ut, euismod sit amet tellus.",
      },
    ],
    image: img3,
  },
];

export interface PostDTO {
  id: string;
  createdAt: Date;
  title: string;
  content: Content[];
  image: string;
}

export interface Content {
  id?: string;
  subtitle: string;
  paragraph: string;
}

export interface CommentDTO {
  id: string;
  createdAt: Date;
  user: string;
  userImg: string;
  comment: string;
  blogId: string;
}
