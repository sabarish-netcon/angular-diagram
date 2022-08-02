import { Component } from '@angular/core';
import {
  FlowShapeModel,
  ImageElement,
  NodeModel,
  OrthogonalSegmentModel,
} from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-diagram';
  public segment1: OrthogonalSegmentModel = [
    { direction: 'Right', length: 30 },
    { direction: 'Bottom', length: 300 },
  ];
  public segment2: OrthogonalSegmentModel = [
    { length: 30, direction: 'Left' },
    { length: 200, direction: 'Top' },
  ];
  public terminatorShape: FlowShapeModel = {
    type: 'Flow',
    shape: 'Terminator',
  };
  public processShape: FlowShapeModel = {
    type: 'Flow',
    shape: 'Process',
  };
  public decisionShape: FlowShapeModel = {
    type: 'Flow',
    shape: 'Decision',
  };
  public preDefinedShape: FlowShapeModel = {
    type: 'Flow',
    shape: 'PreDefinedProcess',
  };
  public imageShape = {
    type: 'Image',
    source:
      'https://www.syncfusion.com/content/images/nuget/sync_logo_icon.png',
  };
  public defaultNodeValues(defaultnode: NodeModel): NodeModel {
    defaultnode.height = 50;
    defaultnode.width = 200;
    defaultnode.offsetX = 150;
    return defaultnode;
  }
  OnSelectionChange(params) {
    console.log('OnSelectionChange: ', params);
  }
}
