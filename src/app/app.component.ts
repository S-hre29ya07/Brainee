import { Component } from '@angular/core';
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faProjectDiagram} from '@fortawesome/free-solid-svg-icons'
import {faFolder} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brainee';
  faHome=faHome;
  faProjectDiagram=faProjectDiagram;
  faFolder=faFolder;
  faTrash=faTrash;
}
