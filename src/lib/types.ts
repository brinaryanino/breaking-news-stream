export interface Article {
  title: string;
  link: string;
  contentSnippet: string;
  isoDate: string;
  image: {
    small: string;
    large: string;
  };
}

export interface ApiResponse {
  messages: string;
  total: number;
  data: Article[];
}
