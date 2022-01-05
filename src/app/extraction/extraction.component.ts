import { Component, OnInit } from '@angular/core';
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

  constructor(private extractionService: ExtractionService) { }

  ngOnInit(): void {
    this.extraction = this.extractionService.getExtraction();
  }

  makeExtraction(){
    this.isClicked = true;
    let timeoutVar = Math.floor((Math.random() * this.max)+1)
    setTimeout(()=>{
      this.numberExtracted = this.extractionService.addExtraction();
      this.buttonPressTime ++;
      this.isClicked = false;      
    }, timeoutVar);
  }

}
