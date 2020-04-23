import { Injectable } from '@angular/core';
import { Post } from './models/post';


@Injectable({
  providedIn: 'root'
})


export class BienestarService {

  arrPost: Post[];


  constructor() {
    this.arrPost = [
      new Post('../../assets/images/section/imagen7.jpg', 'titulo', 'Los mejores aceites esenciales para relajarse despues un largo y duro dia serian...', 'Pepito Grillo', 'salud', 1),
      new Post('../../assets/images/section/imagen16.jpg', 'titulo', 'Los mejores aceites esenciales para relajarse despues un largo y duro dia serian...', 'Pepito Grillo', 'salud', 2),
      new Post('../../assets/images/section/imagen7.jpg', 'titulo', 'Los mejores aceites esenciales para relajarse despues un largo y duro dia serian...', 'Pepito Grillo', 'salud', 3),
    ]
  }



  getAll(): Post[] {
    return this.arrPost;
  }








}
