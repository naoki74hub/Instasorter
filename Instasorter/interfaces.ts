export interface InstagramBusinessUserData {
  business_discovery: {
    media: {
      data: MediaData[];
      paging: {
        cursors: {
          after?: string;
        };
      };
    };
  };
}

export interface MediaData {
  caption: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  children?: {
    media_url: string;
  }[];
}