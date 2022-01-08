import { gql } from "@apollo/client";

export const GET_LAUNCHES_PAST_QUERY = gql`
  query GetLaunchesPast($missionName: String!) {
  launchesPast(limit: 10, find: {mission_name: $missionName}) {
    mission_name
    launch_date_local
    links {
      article_link
      video_link
      flickr_images
    }
    rocket {
      rocket_name
    }
    details
  }
}
`;
