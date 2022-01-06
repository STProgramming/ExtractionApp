import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ExtractionData, ExtractionService } from '../services/extraction.service';

@Component({
  selector: 'app-extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.scss']
})
export class ExtractionComponent implements OnInit {
  extraction: any[] = [];
  max: number = 7000;
  numberExtracted: number = 0;
  buttonPressTime: number = 0;
  isClicked: any;
  downloadJsonHref: any;

  constructor(private extractionService: ExtractionService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.extraction = this.extractionService.getExtraction();
  }

  generateData(){
    if(this.buttonPressTime == 47){
      this.generateJson(); 
    }
  }

  makeExtraction(){
    this.isClicked = true;
    let timeoutVar = Math.floor((Math.random() * this.max)+1000);
    setTimeout(()=>{
      this.numberExtracted = this.extractionService.addExtraction();
      this.buttonPressTime ++;
      this.isClicked = false;  
      this.generateData();  
    }, timeoutVar);
  }

  generateJson(){
    var JsonText = JSON.stringify(this.extraction);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8,"+encodeURIComponent(JsonText));
    this.downloadJsonHref = uri;
  }

}
