import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  filteredUsers: any[] = [];

  searchText = '';

  newUser = {
    name: '',
    email: '',
    status: 'active'
  };

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.api.getUsers().subscribe((data: any) => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  addUser() {
    if (!this.newUser.name || !this.newUser.email) return;

    this.api.addUser(this.newUser).subscribe(() => {
      this.newUser = { name: '', email: '', status: 'active' };
      this.loadUsers();
      this.api.userUpdated.next(); 
    });
  }

  deleteUser(id: string) {
    this.api.deleteUser(id).subscribe(() => {
      this.loadUsers();
      this.api.userUpdated.next();
    });
  }

  searchUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}