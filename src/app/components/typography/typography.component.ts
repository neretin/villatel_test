import { Component, Input } from '@angular/core';

@Component({
  selector: 'typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent {
  @Input() look: 'title' = 'title';
}
