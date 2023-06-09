import { Component, OnInit } from '@angular/core';
import { Soldier } from 'src/app/interfaces/soldier';
import { SoldierService } from 'src/app/services/soldier.service';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.css'],
})
export class CardsPageComponent implements OnInit {
  title: string = 'List of soldiers';
  solList: Soldier[] = [];
  showAddForm: boolean = false;
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

  onSelect(soldier: Soldier) {
    if (this.selectedSoldier && soldier.id == this.selectedSoldier.id) {
      this.selectedSoldier = undefined;
    } else {
      this.selectedSoldier = soldier;
    }
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
