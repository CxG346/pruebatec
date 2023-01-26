import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {
  dataSource:any = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.apiService.getAll().subscribe(
      (res) => {
        this.dataSource = res
      }
    )
  }

}
