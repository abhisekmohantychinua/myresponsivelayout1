import { Component, OnChanges, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Responsive Layout';
  deviceXs: boolean = false;
  isAlertShown: boolean = false;

  constructor(
    private breakPointService: BreakpointObserver,
    private _snack: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.deviceXs = false;
      if (result.matches) {
        this.deviceXs = true;
      }
    });
    if (!this.isAlertShown) {
      this._snack.open(
        'Click on menu to see the side bar.Re-arrange the screen size to see responsiveness.',
        'Ok',
        {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        }
      );
    }
  }
}
