import {Injectable} from "@angular/core";
import {INSTITUICOES} from "./mock-instituicao";

@Injectable()
export class InstituicaoService {
  private instituicoes: any;

  constructor() {
    this.instituicoes = INSTITUICOES;
  }

  getAll() {
    return this.instituicoes;
  }

  getItem(id) {
    for (var i = 0; i < this.instituicoes.length; i++) {
      if (this.instituicoes[i].id === parseInt(id)) {
        return this.instituicoes[i];
      }
    }
    return null;
  }

  remove(item) {
    this.instituicoes.splice(this.instituicoes.indexOf(item), 1);
  }
}
