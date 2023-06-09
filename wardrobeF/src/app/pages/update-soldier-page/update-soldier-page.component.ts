import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Soldier } from 'src/app/interfaces/soldier';
import { SoldierService } from 'src/app/services/soldier.service';

@Component({
  selector: 'app-update-soldier-page',
  templateUrl: './update-soldier-page.component.html',
  styleUrls: ['./update-soldier-page.component.css'],
})
export class UpdateSoldierPageComponent implements OnInit {
  @Input() soldier?: Soldier;
  @Output() updated: EventEmitter<null> = new EventEmitter();
  constructor(private service: SoldierService) {}

  ngOnInit(): void {}

  updateSoldier() {
    if (this.soldier) {
      this.service.putSoldier(this.soldier).subscribe(() => {
        this.updated.emit();
      });
    }
    this.refreshPage();
  }

  refreshPage(): void {
    window.location.reload();
  }
}
