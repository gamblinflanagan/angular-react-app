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
import { ReactComponent2 } from "./ReactComponent2.jsx";

import * as React from "react";
//import * as ReactDOM from 'react-dom';
import * as ReactDOMCli from "react-dom/client";

const containerElementName = "ReactComponentContainer2";

@Component({
  selector: "app-my-component2",
  template: `<span #${containerElementName}></span>`,
  styleUrls: ["./ReactComponent2.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ReactComponentWrapper2 implements OnDestroy, AfterViewInit {
  @ViewChild(containerElementName) child!: ElementRef;
  public root: any;

  ngAfterViewInit() {
    this.root = ReactDOMCli.createRoot(this.child.nativeElement);
    this.render();
  }

  ngOnDestroy() {
    // ReactDOM.unmountComponentAtNode(this.child.nativeElement);
    this.root.unmount();
  }

  private render() {
    this.root.render(
      // ReactDOM.render(
      <React.StrictMode>
        <ReactComponent2 />
      </React.StrictMode>
      // ,this.child.nativeElement
    );
  }
}
