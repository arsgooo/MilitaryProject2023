import { Component, OnInit } from '@angular/core';
import { SoldierService } from '../../services/soldier.service';
import { Soldier } from '../../interfaces/soldier';

@Component({
  selector: 'app-add-soldier-page',
  templateUrl: './add-soldier-page.component.html',
  styleUrls: ['./add-soldier-page.component.css'],
})
export class AddSoldierPageComponent implements OnInit {
  title: string = 'List of soldiers';
  solList: Soldier[] = [];
  selectedSoldier?: Soldier;

  constructor(private service: SoldierService) {}

  ngOnInit(): void {
    this.updateSoldiers();
    this.service.list.subscribe((list: Soldier[]) => {
      this.solList = list;
    });
  }

  updateSoldiers() {
    this.service.getSoldiers().subscribe((soldiers) => {
      this.service.setList(soldiers);
    });
  }

  addSoldier(soldier: Soldier) {
    this.service.postSoldier(soldier).subscribe((soldiers) => {
      this.updateSoldiers();
    });
    this.refreshPage();
  }

  deleteSoldier(soldier: Soldier) {
    this.service.deleteSoldier(soldier).subscribe(() => {
      this.updateSoldiers();
    });
    this.refreshPage();
  }

  refreshPage(): void {
    window.location.reload();
  }
}
