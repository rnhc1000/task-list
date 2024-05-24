# task-list - Manage your daily tasks
This is an app to add small advices about the tasks you have to tackle every single day.
The idea is just to have an easy and quick remiander of the tasks to be completed at the end of the day.
## _Table of contents_
- [task-list - Manage your daily tasks](#task-list---manage-your-daily-tasks)
  - [_Table of contents_](#table-of-contents)
  - [_Overview_](#overview)
  - [_Screenshot_](#screenshot)
  - [_Links_](#links)
  - [_Built with_](#built-with)
  - [_What I practiced_](#what-i-practiced)
  - [_Continued development_](#continued-development)
    - [_Useful resources_](#useful-resources)
  - [_Author_](#author)
  - [Acknowledgments](#acknowledgments)
## _Overview_
The design is structured as shown:
- src|
  - app |
     - modules |
     - to-do-list |
       -  components |
          -   date-pipe
          -   input-add-item
          -   input-list-items
        -  enum
        -  interface
        -  pages 
  - assets |
  - scss|
    - base
    -  components
    -  layout
    -  theme
  - _index.scss
- index.html
- main.ts
- styles.css 

## _Screenshot_
[![](./todo-list.png)](https://todo-list.ferreiras.dev.br)
## _Links_
- Live Site URL: [https://todo-list.ferreiras.dev.br] 
## _Built with_
| VS Code | Git | CSS3 | HTML5 | CentOS | JavaScript |
|----------|----------|----------|----------|----------|----------|
![](https://ferreiras.dev.br/assets/images/icons/icons8-visual-studio-code.svg)  | ![](https://ferreiras.dev.br/assets/images/icons/git-scm-icon.svg) | ![](https://ferreiras.dev.br/assets/images/icons/css3-original-wordmark.svg) | ![](https://ferreiras.dev.br/assets/images/icons/html5-original-wordmark.svg) | ![](https://ferreiras.dev.br/assets/images/icons/linux-original.svg) | ![](https://ferreiras.dev.br/assets/images/icons/icons8-javascript.svg) |

 ## _What I practiced_
``` tsx
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
} from '@angular/core';

// Interfaces
import { NgClass } from '@angular/common';
import { IListItems } from '../../interface/IListItems.interface';
import { DatePipeComponent } from "../date-pipe/date-pipe.component";

@Component({
    selector: 'app-input-add-item',
    standalone: true,
    templateUrl: './input-add-item.component.html',
    styleUrl: './input-add-item.component.scss',
    imports: [NgClass, DatePipeComponent]
})
export class InputAddItemComponent {
  #cdr = inject(ChangeDetectorRef);

  @ViewChild('inputText') public inputText!: ElementRef;

  @Input({ required: true }) public inputListItems: IListItems[] = [];

  @Output() public outputAddListItem = new EventEmitter<IListItems>();
  public focusAndAddItem(value: string) {
    if (value) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

      const currentDate = new Date();
      const timestamp = currentDate.getTime();
      const id = `ID ${timestamp}`;

      this.outputAddListItem.emit({
        id,
        checked: false,
        value,
      });

      return this.inputText.nativeElement.focus();
    }
  }
}
``` 
## _Continued development_
- Next step: To clone this project and use ReactJS 
### _Useful resources_
- [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects] Everything is an Object in JS.
- [https://html-css-js.com/] Mandatory pit stop at this site.
## _Author_
- Website - [https://ferreiras.dev.br] 
## Acknowledgments
- @devsuperior
