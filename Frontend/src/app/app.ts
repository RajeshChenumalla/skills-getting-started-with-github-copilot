import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityService } from './services/activity.service';
import { Activity, ActivitiesResponse } from './models/activity.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  activities: { name: string; details: Activity }[] = [];
  selectedActivity = '';
  email = '';
  message = '';
  messageType: 'success' | 'error' | '' = '';

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.loadActivities();
  }

  loadActivities() {
    this.activityService.getActivities().subscribe({
      next: (data: ActivitiesResponse) => {
        this.activities = Object.entries(data).map(([name, details]) => ({
          name,
          details
        }));
      },
      error: (error) => {
        console.error('Error fetching activities:', error);
      }
    });
  }

  getSpotsLeft(activity: Activity): number {
    return activity.maxParticipants - activity.participants.length;
  }

  onSubmit() {
    if (!this.selectedActivity || !this.email) {
      return;
    }

    this.activityService.signup(this.selectedActivity, this.email).subscribe({
      next: (response) => {
        this.message = response.message;
        this.messageType = 'success';
        this.email = '';
        this.selectedActivity = '';
        this.hideMessageAfterDelay();
      },
      error: (error) => {
        this.message = error.error?.detail || 'An error occurred';
        this.messageType = 'error';
        this.hideMessageAfterDelay();
      }
    });
  }

  hideMessageAfterDelay() {
    setTimeout(() => {
      this.message = '';
      this.messageType = '';
    }, 5000);
  }
}

