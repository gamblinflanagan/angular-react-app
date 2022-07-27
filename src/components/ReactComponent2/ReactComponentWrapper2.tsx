import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation
  } from '@angular/core';
  declare module './ReactComponent2Main';
  import { ReactComponent2Main } from './ReactComponent2Main.jsx';
  
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  
  const containerElementName = 'ReactComponentContainer2';
  
  @Component({
    selector: 'app-my-component2',
    template: `<span #${containerElementName}></span>`,
    styleUrls: ['./ReactComponent2.scss'],
    encapsulation: ViewEncapsulation.None,
  })
  export class ReactComponentWrapper2 implements OnChanges, OnDestroy, AfterViewInit {
    @ViewChild(containerElementName, {static: true}) containerRef!: ElementRef;
  
    ngOnChanges(changes: SimpleChanges): void {
      this.render();
    }
  
    ngAfterViewInit() {
      this.render();
    }
  
    ngOnDestroy() {
      ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
    }
  
    private render() {
      ReactDOM.render(
        <React.StrictMode>
          <ReactComponent2Main />
        </React.StrictMode>
        , this.containerRef.nativeElement);
    }
  }