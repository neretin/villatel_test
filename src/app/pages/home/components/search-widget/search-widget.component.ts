import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  Destination,
  DestinationService,
} from 'src/app/services/destination.service';

@Component({
  selector: 'search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchWidgetComponent implements OnInit {
  @Output() submit: EventEmitter<any> = new EventEmitter();

  destinations$: Observable<Destination[]>;
  form: FormGroup;

  constructor(private destionationService: DestinationService) {}

  ngOnInit(): void {
    this.destinations$ = this.destionationService.getDestinations();
    this.form = new FormGroup({
      destination: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }
}
