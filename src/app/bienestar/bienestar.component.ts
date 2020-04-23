import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { BienestarService } from '../bienestar.service';

@Component({
  selector: 'app-bienestar',
  templateUrl: './bienestar.component.html',
  styleUrls: ['./bienestar.component.scss']
})
export class BienestarComponent implements OnInit {

  listaPosts: Post[];

  constructor(private bienestarservice: BienestarService) { }


  ngOnInit() {
    this.listaPosts = this.bienestarservice.getAll();
  }

}
