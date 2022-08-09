import img from "../../../images/img4.jpg";

export const ABOUT_PREVIEW = {
  title: "Lorem Ipsum",
  image: img,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar id ante pretium tincidunt. Quisque suscipit malesuada lorem, ut ultricies libero tempor et. Donec et ligula ut orci commodo porta vel eget dolor. Quisque tincidunt a augue id iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique orci. Nullam ac nisi mauris. Nam in ipsum sed erat rhoncus vestibulum non sit amet enim. In aliquet justo quis sapien molestie molestie tincidunt nec massa. Phasellus sodales nunc vel arcu sagittis, et cursus turpis ornare. Phasellus finibus mi lacus, sit amet iaculis tellus vulputate in. Mauris ullamcorper, urna ac cursus fringilla, magna neque lacinia nisi, nec dapibus nibh tortor quis augue. Integer porttitor ipsum sit amet diam tristique, sit amet sagittis lectus cursus. Duis lobortis ullamcorper mollis. Aenean accumsan quam eu odio euismod tempus. Morbi commodo, libero sed consequat dignissim, lectus diam ornare nunc, a pharetra mauris lectus eget felis. Quisque augue odio, maximus iaculis finibus ut, euismod sit amet tellus.",
  info: {
    MISSÃO:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar id ante pretium tincidunt. Quisque suscipit malesuada lorem, ut ultricies libero tempor et. Donec et ligula ut orci commodo porta vel eget dolor. Quisque tincidunt a augue id iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique orci.",
    VISÃO:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar id ante pretium tincidunt. Quisque suscipit malesuada lorem, ut ultricies libero tempor et. Donec et ligula ut orci commodo porta vel eget dolor. Quisque tincidunt a augue id iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique orci.",
    VALORES:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar id ante pretium tincidunt. Quisque suscipit malesuada lorem, ut ultricies libero tempor et. Donec et ligula ut orci commodo porta vel eget dolor. Quisque tincidunt a augue id iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique orci.",
  },
};

export interface Info {
  MISSÃO: string;
  VISÃO: string;
  VALORES: string;
}

export interface ISobre {
  title: string;
  image: any;
  description: string;
  info: Info;
}
