import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {
  dataSource:any = []

  searchText = ""

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
  
  filter(){
    this.dataSource.map((e: any) => {
      let newArray: any = []
      if(e.client == this.searchText){
        newArray.push(e)
      }
      console.log(newArray)
    })

    console.log()
  }
}
