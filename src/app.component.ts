import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationDataFormat,
  FormFieldsService,
AnnotationService,
} from '@syncfusion/ej2-angular-pdfviewer';

/**
 * Default PdfViewer Controller
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:max-line-length
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
  ],
})
export class AppComponent {
  @ViewChild('pdfViewer') public pdfViewercontainer: PdfViewerComponent;
  public service: string =
    'https://services.syncfusion.com/angular/production/api/pdfviewer';
  public document: string = 'PDF_Succinctly.pdf';
  ngOnInit(): void {
    // ngOnInit function
  }

  addAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer'))
      .ej2_instances[0];

    pdfviewer.freeTextSettings.width = 100;
    pdfviewer.freeTextSettings.height = 50;
    pdfviewer.freeTextSettings.textAlignment = 'Center';
    pdfviewer.freeTextSettings.borderStyle = 'solid';
    pdfviewer.freeTextSettings.borderWidth = 2;
    pdfviewer.freeTextSettings.borderColor = 'red';
    pdfviewer.freeTextSettings.author = 'abcd';
    pdfviewer.freeTextSettings.fillColor = 'green';
    pdfviewer.freeTextSettings.fontSize = 14;
    pdfviewer.freeTextSettings.fontFamily = 'Helvetica';
    pdfviewer.freeTextSettings.fontColor = 'black';
    pdfviewer.freeTextSettings.defaultText = 'Sign Here';
    pdfviewer.freeTextSettings.isReadonly = true;
    pdfviewer.freeTextSettings.minHeight = 50;
    pdfviewer.freeTextSettings.minWidth = 100;
    pdfviewer.freeTextSettings.enableAutoFit = false;

    pdfviewer.annotationModule.setAnnotationMode('FreeText');
  }

  UnfetchingSignStampsData() {
    var pdfviewer = (<any>document.getElementById('pdfViewer'))
      .ej2_instances[0];

    pdfviewer.deleteAnnotations();
  }

  fetch() {
    /*  let customeData = this.createCustomDataForStamp(x); */

    var pdfviewer = (<any>document.getElementById('pdfViewer'))
      .ej2_instances[0];

    let HintText = 'ACC';
    let IsReadOnly = true;
    let IsRequired = true;
    var datetimenow = new Date().toISOString().slice(0, 10);
    var colorCode = 'blue';
    var border = 'black';

    let annotationdata: any;
    annotationdata = {
      Author: 'smith',
      AnnotationSelectorSettings: {
        selectionBorderColor: '',
        resizerBorderColor: 'black',
        resizerFillColor: 'black',
        resizerSize: 8,
        selectionBorderThickness: 1,
        resizerShape: 'Square',
        selectorLineDashArray: [],
        resizerLocation: 3,
        resizerCursorType: null,
      },
      MarkupText: true,
      TextMarkupColor: null,
      Color: {
        IsEmpty: false,
        B: 255,
        Blue: 1,
        C: 0,
        G: 255,
        Green: 1,
        Gray: 1,
        K: 0,
        M: 0,
        R: 255,
        Red: 1,
        Y: 0,
      },
      Font: {
        Name: 'Helvetica',
        Size: 14,
        Height: 19.652,
        Style: 0,
        Bold: false,
        Italic: false,
        Strikeout: false,
        Underline: false,
      },
      BorderColor: {
        IsEmpty: true,
        B: 255,
        Blue: 1,
        C: 0,
        G: 255,
        Green: 1,
        Gray: 1,
        K: 0,
        M: 0,
        R: 255,
        Red: 1,
        Y: 0,
      },
      Border: { HorizontalRadius: 0, VerticalRadius: 0, Width: 2 },
      LineEndingStyle: 'OpenArrow',
      AnnotationFlags: 'Default',
      IsCommentLock: true,
      IsLocked: true,
      Text: 'Sign Here',
      Opacity: 1,
      CalloutLines: null,
      ModifiedDate: datetimenow,
      AnnotName: '637d2c06-5a61-4423-1781-7b9bc110421f1',
      AnnotType: 'freeText',
      Name: '637d2c06-5a61-4423-1781-7b9bc110421f' + 1,
      Comments: null,
      AnnotationIntent: null,
      CreatedDate: null,
      Flatten: false,
      FlattenPopups: false,
      InnerColor: null,
      Layer: null,
      Location: null,
      Page: null,
      PageTags: null,
      ReviewHistory: null,
      Rotate: 0,
      Subject: 'Text Box',
      State: 'Unmarked',
      StateModel: 'None',
      StrokeColor: border,
      FillColor: 'green',
      Thickness: 2,
      FontColor: 'rgba(0,0,0,1)',
      FontSize: 14,
      FontFamily: 'Helvetica',
      FreeTextAnnotationType: 'Text Box',
      TextAlign: 'Center',
      Note: 'Sign Here',
      CustomData: 'xyz',
      AnnotationSettings: {
        minWidth: 0,
        maxWidth: 0,
        minHeight: 0,
        maxHeight: 0,
        isLock: true,
        isPrint: false,
      },
      AllowedInteractions: ['None'],
      IsPrint: false,
      IsReadonly: true,
      ExistingCustomData: null,
      Bounds: {
        X: 10,
        Y: 10,
        Width: 100,
        Height: 50,
        Location: { X: 10, Y: 10 },
        Size: { IsEmpty: false, Width: 100, Height: 50 },
        Left: 10,
        Top: 10,
        Right: 0,
        Bottom: 0,
      },
    };

    var data = '[' + JSON.stringify(annotationdata) + ']';
    const MyAnnotations = JSON.parse(data);
    let obj = {
      pdfAnnotation: {
        0: {
          freeTextAnnotation: MyAnnotations,
        },
      },
    };
    let finalizeString = JSON.stringify(obj);
    // finalizeString = finalizeString.replace("PAGE_NUMBER_HERE", 1);
    let finalizeObj = JSON.parse(finalizeString);
    pdfviewer.importAnnotation(finalizeObj, AnnotationDataFormat.Json);
  }
}
