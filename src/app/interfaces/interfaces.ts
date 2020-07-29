export interface RespuestaCards {
  rojo: Rojo[];
  amarillo: Rojo[];
}

export interface Rojo {
  _id: string;
  resp: string[];
  correct: string;
  question: string;
}