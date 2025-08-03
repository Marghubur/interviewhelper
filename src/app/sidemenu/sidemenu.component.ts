import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss'
})
export class SidemenuComponent {
  navItems: any[] = [
    {
      id: 'getting-started',
      label: 'Getting Started',
      icon: 'fas fa-rocket'
    },
    {
      id: 'guides',
      label: 'Guides',
      icon: 'fas fa-book'
    },
    {
      id: 'frontend-development',
      label: 'Frontend Development',
      icon: 'fas fa-code'
    },
    {
      id: 'backend-development',
      label: 'Backend Development',
      icon: 'fas fa-server',
      expanded: true,
      children: [
        { id: 'dotnet', label: '.NET', icon: '' },
        { id: 'basic-questions', label: 'Basic Questions', icon: '' },
        { id: 'intermediate-questions', label: 'Intermediate Questions', icon: '' },
        { id: 'advanced-questions', label: 'Advanced Questions', icon: '' },
        { id: 'nodejs', label: 'Node.js', icon: '' },
        { id: 'efcore', label: 'EfCore', icon: '' }
      ]
    },
    {
      id: 'devops-deployment',
      label: 'DevOps & Deployment',
      icon: 'fas fa-cloud',
      expanded: true,
      children: [
        { id: 'basic-questions-devops', label: 'Basic Questions', icon: '' },
        { id: 'intermediate-questions-devops', label: 'Intermediate Questions', icon: '' },
        { id: 'advanced-questions-devops', label: 'Advanced Questions', icon: '' }
      ]
    },
    {
      id: 'testing',
      label: 'Testing',
      icon: 'fas fa-flask',
      expanded: true,
      children: [
        { id: 'basic-questions-testing', label: 'Basic Questions', icon: '' },
        { id: 'intermediate-questions-testing', label: 'Intermediate Questions', icon: '' },
        { id: 'advanced-questions-testing', label: 'Advanced Questions', icon: '' }
      ]
    }
  ];

  toggleNav(item: any) {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }
}
