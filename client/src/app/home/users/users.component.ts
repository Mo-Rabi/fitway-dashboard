import { Component } from '@angular/core';
import { FetchApiService } from 'src/app/api/fetch-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
    Users: any[] = [];
    constructor(private service: FetchApiService) {}
    ngOnInit() {
      this.getAllUsers()
    }
    getAllUsers() {
      this.service.getAllUsers().subscribe((res: any) => {
        this.Users = res.getAllUsers
      })
    }
    
    deleteUser(userId: string) {
      if (confirm('Are you sure you want to delete this user?')) {
        this.service.deleteUser(userId).subscribe(
          () => {
            console.log('User deleted successfully');
            this.getAllUsers(); // Refresh the user list after deletion
          },
          (error) => {
            console.error('Error deleting user', error);
            // Handle error, show an alert, etc.
          }
        );
      }
    }
}
