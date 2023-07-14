import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlatpickrDirective } from 'angularx-flatpickr';
import { FlatPickrOutputOptions } from 'angularx-flatpickr/lib/flatpickr.directive';
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
  @ViewChild('datepickerRef') datepickerRef: FlatpickrDirective;
  @ViewChild('datepickerContainer') datepickerContainer: HTMLElement;

  destinations$: Observable<Destination[]>;
  form: FormGroup;

  constructor(private destionationService: DestinationService) {}

  ngOnInit(): void {
    this.destinations$ = this.destionationService.getDestinations();
    this.form = new FormGroup({
      destination: new FormControl<Destination | undefined>(
        undefined,
        Validators.required
      ),
      startDate: new FormControl<Date | undefined>(
        undefined,
        Validators.required
      ),
      endDate: new FormControl<Date | undefined>(
        undefined,
        Validators.required
      ),
    });
  }

  toggleDatepicker() {
    this.datepickerRef.instance.open();
  }

  dateChange(data: FlatPickrOutputOptions) {
    if (data.selectedDates.length) {
      this.form.patchValue({
        startDate: data.selectedDates[0],
      });

      data.selectedDates[1] &&
        this.form.patchValue({
          endDate: data.selectedDates[1],
        });
    }

    this.form.markAsDirty();
  }

  setDestination(dest: Destination) {
    this.form.patchValue({
      destination: dest,
    });
    this.form.markAsDirty();
  }

  onSubmit() {
    console.log('sub');
    this.submit.emit(this.form.value);
  }
}
