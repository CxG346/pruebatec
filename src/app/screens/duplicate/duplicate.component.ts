import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataC } from 'src/app/model/dataModel';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-duplicate',
  templateUrl: './duplicate.component.html',
  styleUrls: ['./duplicate.component.css']
})
export class DuplicateComponent implements OnInit {

  public id:any

  dataOne: any = []
  newData: DataC = {
    client: '',
    compaign: '',
    name: '',
    note: '',
    description: ''
  }

  constructor(private apiService: ApiService, private route: ActivatedRoute) {

   }

   ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) =>{
      const {params} = paramMap;
      this.id = params.id
    })
    this.getData()
   }

   getData(){
    this.apiService.getOne(this.id).subscribe(
      (res) => {
        this.dataOne = res
        this.newData.client = this.dataOne[0]['client']
        this.newData.compaign = this.dataOne[0]['compaign']
        this.newData.description = this.dataOne[0]['description']
        this.newData.name = this.dataOne[0]['name']
        this.newData.note = this.dataOne[0]['note']
        console.log(this.newData)
      }
    )
  }

  check(){
    if(this.newData.client == this.dataOne[0]['client'] &&
    this.newData.compaign == this.dataOne[0]['compaign'] &&
    this.newData.name == this.dataOne[0]['name'] &&
    this.newData.note == this.dataOne[0]['note']){
      return false
    }else{
      return true
    }
  }

  postData(){
    if(this.check()){
      this.apiService.postData(this.newData).subscribe(
        (res) => {
          location.href = '/'
        }
      )
    }else{
      alert('Tiene que modificar por lo menos un dato')
    }
  }
}

