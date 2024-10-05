import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('projectModal') projectModal!: ModalComponent;
  constructor() { }

  ngOnInit(): void {
  }

  projectImages: string[] = [

    'fig2.jpeg',
    'fig3.jpeg',
    'fig4.jpeg',
    'fig5.jpeg',
    'fig6.jpeg',
    'fig7.jpeg',
    'fig1.jpeg',
    'fig2.jpeg',
    'fig3.jpeg',
    'fig4.jpeg',
    'fig5.jpeg',
    'fig6.jpeg',
    'fig7.jpeg',
    'fig8.jpeg',
    'fig9.jpeg',
    'fig10.jpeg',
    'fig11.jpeg',
    'fig12.jpeg',
    'fig13.jpeg',
    'fig14.jpeg',
    'fig15.jpeg',
    'fig16.jpeg',
    'fig17.jpeg',
    'fig18.jpeg',
    'fig19.jpeg',
    'fig20.jpeg'
  ];

  selectedProjectTitle: string = '';
  selectedProjectContent: string = '';

  openProjectModal(image: string) {
    this.selectedProjectTitle = `Projet: ${image}`;
    this.selectedProjectContent = `This is detailed information about ${image}.`;
    this.projectModal.openModal();
  }

}
