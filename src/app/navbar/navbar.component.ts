import { Component } from '@angular/core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons'
import {faCrown} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faQuestion=faQuestion;
  faBell=faBell;
  faCrown=faCrown;
}
