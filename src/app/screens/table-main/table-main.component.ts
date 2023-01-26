import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.css'],
})
export class TableMainComponent implements OnInit {
  dataSource = []
  dataRecieve: any = []

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  getAll(){
    this.apiService.getAll().subscribe(
      (res) => {
        this.dataRecieve = res
      }
    )
  }
}
