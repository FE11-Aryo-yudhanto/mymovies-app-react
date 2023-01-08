export interface DatasType {
  id: number
  title: string
  poster_path: string
  overview: string
  navigate?: any;
}

type GenreType = {
  id?: number;
  name?: string;
};
type companiesType = {
  id?: number;
  name?: string;
};

export interface DetailsdatasType {
  id?: number
  title?: string
  poster_path?: string
  backdrop_path?: string
  tagline?: string
  vote_average?: number
  release_date?: string
  genres?: GenreType[]
  runtime?: number
  original_language?: string
  popularity?: string
  production_companies?: companiesType[]
  budget?: number
  revenue?: number
  overview?: string

}