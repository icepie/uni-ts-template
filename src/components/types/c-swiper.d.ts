export interface SwiperItem {
  img: string;
  title: string;
  subTitle?: string;
  tip?: string;
  url?: string;
}

export type SwiperItems = Array<SwiperItem>;
