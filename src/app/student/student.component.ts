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
    observableresult.subscribe(result => {
      console.log(result);
      console.log(result.d);
      if (result.s === 'status') {
        this.students = result.d;
        console.log(result.d);
      } else {
        console.log(result.e);
      }
    });
  }

}
