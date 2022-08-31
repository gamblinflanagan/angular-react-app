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
  ViewEncapsulation,
} from "@angular/core";
import { ReactComponent1 } from "./ReactComponent1";

import * as React from "react";
//import * as ReactDOM from "react-dom";
import * as ReactDOMCli from "react-dom/client";

const containerElementName = "ReactComponentContainer1";

@Component({
  selector: "app-my-component",
  template: `<span #${containerElementName}></span>`,
  styleUrls: ["./ReactComponent1.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ReactWrapperComponent1
  implements /*OnChanges,*/ OnDestroy, AfterViewInit
{
  @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;

  @Input() public aCounter: number;
  @Output() public componentClick = new EventEmitter<void>();
  public root: any;

  constructor() {
    this.handleDivClicked = this.handleDivClicked.bind(this);
    this.aCounter = 0;
  }

  public handleDivClicked() {
    if (this.componentClick) {
      this.componentClick.emit();
      this.render();
    }
  }

  ngAfterViewInit() {
    this.root = ReactDOMCli.createRoot(this.containerRef.nativeElement);
    this.render();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.render();
  // }

  ngOnDestroy() {
    //ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
    this.root.unmount();
  }

  private render() {
    const { aCounter } = this;
    this.root.render(
      //ReactDOM.render(
      <React.StrictMode>
        <ReactComponent1 counter={aCounter} onClick={this.handleDivClicked} />
      </React.StrictMode>
      //,this.containerRef.nativeElement
    );
  }
}
