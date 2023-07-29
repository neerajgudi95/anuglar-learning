import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  @Output('serverCreated') serverCreated = new EventEmitter<{
    name: string;
    type: string;
    status: string;
  }>();
  @ViewChild('serverNameInput') serverNameInput: ElementRef;
  @ViewChild('serverTypeInput') serverTypeInput: ElementRef;
  @ViewChild('serverStatusInput') serverStatusInput: ElementRef;

  onCreateServer() {
    this.serverCreated.emit({
      name: this.serverNameInput.nativeElement.value,
      type: this.serverTypeInput.nativeElement.value,
      status: this.serverStatusInput.nativeElement.value,
    });
  }
}
