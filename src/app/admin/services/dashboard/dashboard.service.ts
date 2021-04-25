import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMembersSummary(): any[]
  {
    var TeamMembersSummary = [
      {
        Region: 'East',
        TeamMembersCount: 30,
        TemporaryUnavailableMembers: 4
      },
      {
        Region: 'West',
        TeamMembersCount: 15,
        TemporaryUnavailableMembers: 6
      },
      {
        Region: 'South',
        TeamMembersCount: 17,
        TemporaryUnavailableMembers: 1
      },
      {
        Region: 'North',
        TeamMembersCount: 15,
        TemporaryUnavailableMembers: 6
      }
    ];
    return TeamMembersSummary;
  }


}
