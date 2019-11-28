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
      console.log(result[' data']);
      if (result.status === 'success') {
        this.students = result.data;
        console.log(result.data);
      } else {
        console.log(result.error);
      }
    });
  }

}
