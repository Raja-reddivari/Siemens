import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.css'],
})
export class PhysicianComponent implements OnInit {
  physicianForm!: FormGroup;
  tableData: any[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.physicianForm = this.fb.group({
      physicianName: ['', Validators.required],
      specialization: [''],
      qualification: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }
  update() {
    const index = this.users.findIndex(
      (user) => user.id === this.selectedUser?.id
    );
    if (index !== -1 && this.selectedUser) {
      this.users[index] = { ...this.selectedUser };
    }
    this.reset();
  }
  reset() {
    this.physicianForm.reset();
    // this.selectedUser = {
    //   id: 0,
    //   physicianName: '',
    //   specialization: '',
    //   qualification: '',
    // };
  }

  users: User[] = [
    {
      id: 1,
      physicianName: 'John Doe',
      specialization: 'General Medicine',
      qualification: 'MBBS',
    },
    {
      id: 2,
      physicianName: 'James Bond',
      specialization: 'General Physician',
      qualification: 'MBBS, RND',
    },
    {
      id: 3,
      physicianName: 'Alice Smith',
      specialization: 'Pediatrics',
      qualification: 'MBBS, MA',
    },
    {
      id: 4,
      physicianName: 'Maxwell',
      specialization: 'Pediatrics',
      qualification: 'RMP',
    },
    {
      id: 5,
      physicianName: 'Spiker Swagan',
      specialization: 'General Physician',
      qualification: 'MBBS, FRCS',
    },
  ];

  selectedUser: User = {
    id: 0,
    physicianName: '',
    specialization: '',
    qualification: '',
  };

  selectUser(user: User): void {
    this.selectedUser = { ...user };
  }
}

interface User {
  id: number;
  physicianName: string;
  specialization: string;
  qualification: string;
  selected?: boolean;
}
