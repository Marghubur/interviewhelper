import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "", loadComponent: () => import("./content/content.component").then(c => c.ContentComponent)},
    {path: "content", loadComponent: () => import("./content/content.component").then(c => c.ContentComponent)},
    {path: "editor", loadComponent: () => import("./editor/editor.component").then(c => c.EditorComponent)}
];
