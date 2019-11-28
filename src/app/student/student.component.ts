import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: any;
  constructor(private service: StudentService) { }

  ngOnInit() {
    const observableresult = this.service.select();
    observableresult.subscribe(dataout => {
      console.log(dataout);
      console.log(dataout.status);
      if ( dataout.status === "success" ) {
        this.students = dataout.data;
      } else {
        console.log(dataout.error);
      }
    });
  }

}
