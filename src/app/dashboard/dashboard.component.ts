import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
//export class DashboardComponent implements OnInit {
export class DashboardComponent {
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;
  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary: any[] = [];
  TeamMembers: any[] = [];
  SelectedProject: string;
  SelectedYear: number;
  ToDay: Date;

  constructor() {
    this.Designation = "Technical Lead";
    this.Username = "Sameep Shah";
    this.NoOfTeamMembers = 10;
    this.TotalCostOfAllProjects = 240000;
    this.PendingTasks = 10;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 230000
    this.CurrentExpenditure = 200;
    this.AvailableFunds = 150000;
    this.Clients = ["XYZ Infotech Ltd.", "DEF Software Solutions", "GHI Industries"];
    this.Projects = ["Project A", "Project B", "Project C", "Project D"];
    this.SelectedProject = this.Projects[0];
    this.bindYears();
    this.bindTeamMembersSummary();
    this.bindTeamMembers();
    this.SelectedYear = this.Years[0];
    this.ToDay = new Date();
    //this.onProjectChange(this);
}

  bindYears(){
    for (var i = 2021; i >= 2010; i--) {
      this.Years.push(i);
    }
  }

  bindTeamMembersSummary(){
    this.TeamMembersSummary = [
      {
        Region: "East",
        TeamMembersCount: 30,
        TemporaryUnavailableMembers: 4
      },
      {
        Region: "West",
        TeamMembersCount: 15,
        TemporaryUnavailableMembers: 6
      },
      {
        Region: "South",
        TeamMembersCount: 17,
        TemporaryUnavailableMembers: 1
      },
      {
        Region: "North",
        TeamMembersCount: 15,
        TemporaryUnavailableMembers: 6
      }
    ]
  }

  bindTeamMembers(){
    this.TeamMembers = [
      {
        Region: "East",
        Members: [
          {
            Id: 1,
            Name: "Ford",
            Status: "Available"
          },
          {
            Id: 2,
            Name: "Miller",
            Status: "Available"
          },
          {
            Id: 3,
            Name: "Jones",
            Status: "Busy"
          },
          {
            Id: 4,
            Name: "James",
            Status: "Busy"
          }
        ]
      },
      {
        Region: "West",
        Members: [
          {
            Id: 1,
            Name: "Ford",
            Status: "Busy"
          },
          {
            Id: 2,
            Name: "Miller",
            Status: "Busy"
          },
          {
            Id: 3,
            Name: "Jones",
            Status: "Available"
          },
          {
            Id: 4,
            Name: "James",
            Status: "Available"
          }
        ]
      },
      {
        Region: "North",
        Members: [
          {
            Id: 1,
            Name: "Ford",
            Status: "Busy"
          },
          {
            Id: 2,
            Name: "Miller",
            Status: "Available"
          },
          {
            Id: 3,
            Name: "Jones",
            Status: "Available"
          },
          {
            Id: 4,
            Name: "James",
            Status: "Busy"
          }
        ]
      },
      {
        Region: "South",
        Members: [
          {
            Id: 1,
            Name: "Ford",
            Status: "Available"
          },
          {
            Id: 2,
            Name: "Miller",
            Status: "Busy"
          },
          {
            Id: 3,
            Name: "Jones",
            Status: "Available"
          },
          {
            Id: 4,
            Name: "James",
            Status: "Busy"
          }
        ]
      }
    ]
  }

  onProjectChange($event:any){
    this.SelectedProject = $event.target.innerHTML; 
    if($event.target.innerHTML == "Project A"){
      this.ProjectCost = 230000
      this.CurrentExpenditure = 200;
      this.AvailableFunds = 150000;
    }
    else if($event.target.innerHTML == "Project B"){
      this.ProjectCost = 200000
      this.CurrentExpenditure = 150;
      this.AvailableFunds = 160000;
    }
    else if($event.target.innerHTML == "Project C"){
      this.ProjectCost = 260000
      this.CurrentExpenditure = 300;
      this.AvailableFunds = 190000;
    }
    else {
      this.ProjectCost = 140000
      this.CurrentExpenditure = 50;
      this.AvailableFunds = 120000;
    }
  }

  onYearChange($event: any){
    this.SelectedYear = $event.target.innerHTML;
  }



  // ngOnInit(): void {
  //   this.Designation="Technical Lead";
  //   this.Username = "Sameep Shah";
  //   this.NoOfTeamMembers=10;
  //   this.TotalCostOfAllProjects=240000;
  //   this.PendingTasks=10;
  //   this.UpComingProjects=2;
  //   this.ProjectCost=180000
  //   this.CurrentExpenditure=100;
  //   this.AvailableFunds=120000;
  //   this.Clients = ["XYZ Infotech Ltd.","DEF Software Solutions","GHI Industries"];
  // }

}
