import {Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public id:any

  dataOne: any = []

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
        console.log(this.dataOne)
      }
    )
  }
}
