import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tests, PatientDetails, ChartData } from './patient.interface';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css'],
})
export class ConsultComponent implements OnInit {
  ConsultationForm!: FormGroup;
  tableData: any[] = [];
  prescribedTests: Tests[] = [
    { value: '1', viewValue: 'CBC' },
    { value: '2', viewValue: 'Chemistry' },
    { value: '3', viewValue: 'RTC' },
  ];

  chartData: ChartData[] = [
    { category: 'CBC', value: '1' },
    { category: 'Chemistry', value: '1' },
    { category: 'RTC', value: '1' },
  ];

  patientdetails: PatientDetails[] = [
    {
      patientName: 'Maxwell',
      physicianName: 'General medicine',
      prescribedTest: 'CBC',
    },
    {
      patientName: 'John Doe',
      physicianName: 'General Physician',
      prescribedTest: 'RTC',
    },
  ];

  constructor(private route: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ConsultationForm = this.fb.group({
      patientName: ['', Validators.required],
      physicianName: ['', Validators.required],
      prescribedTest: [''],
      age: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  add() {
    console.log(this.ConsultationForm.value);
    if (this.ConsultationForm.dirty) {
      let formData: any = this.ConsultationForm.value;
      this.tableData.push(formData);
    }
  }
  reset() {
    this.ConsultationForm.reset();
  }
  ngAfterViewInit(): void {
    let chart = am4core.create('chartdiv', am4charts.PieChart);

    chart.data = this.chartData;

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'category';
    chart.legend = new am4charts.Legend();
  }
}
