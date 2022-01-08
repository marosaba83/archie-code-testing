export interface Launch {
  details: string,
  links: {
    article_link: string,
    flickr_images: Array<string>,
    video_link: string,
  },
  mission_name: string,
  rocket: {
    rocket_name: string,
  },
}
