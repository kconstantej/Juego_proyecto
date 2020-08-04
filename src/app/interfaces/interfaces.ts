export interface RespuestaCards {
  rojo: Rojo[];
  verde: Verde[];
  azul: Verde[];
}

export interface Verde {
  _id: string;
  pista: string;
  correct: string;
}

export interface Rojo {
  _id: string;
  resp: string[];
  correct: string;
  question: string;
}
export interface Amarillo {
  resp: string[];
  pista: string;
  palabra: string;
}