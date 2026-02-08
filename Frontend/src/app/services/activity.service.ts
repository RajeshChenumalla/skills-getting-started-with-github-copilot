import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivitiesResponse } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = 'http://localhost:5000/api/activities';

  constructor(private http: HttpClient) { }

  getActivities(): Observable<ActivitiesResponse> {
    return this.http.get<ActivitiesResponse>(this.apiUrl);
  }

  signup(activityName: string, email: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/${encodeURIComponent(activityName)}/signup?email=${encodeURIComponent(email)}`,
      {}
    );
  }
}
