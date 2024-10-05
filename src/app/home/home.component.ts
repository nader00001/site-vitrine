import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  @ViewChild('projectModal') projectModal!: ModalComponent;

  projectImages: string[] = [
    'fig2.jpeg', 'fig3.jpeg', 'fig4.jpeg', 'fig5.jpeg'
  ];

  selectedProjectTitle: string = '';
  selectedProjectContent: string = '';

  openProjectModal(image: string) {
    this.selectedProjectTitle = `Project: ${image}`;
    this.selectedProjectContent = `This is detailed information about ${image}.`;
    this.projectModal.openModal();
  }

}
