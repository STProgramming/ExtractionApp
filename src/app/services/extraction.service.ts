import { Injectable } from '@angular/core';

export interface ExtractionData {
  id: number;
  valueNumber: number;
  logExtraction: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ExtractionService {
  max: number = 47;

  extraction: ExtractionData[] = [];

  constructor() { }

  getExtraction() {
    return this.extraction;
  }

  addExtraction(): number{
    let extractionNumber;
    do{
      var control = false;
      extractionNumber = this.randomizeExtraction();
      for(const [index, e] of this.extraction.entries()){
        if(e.valueNumber === extractionNumber){
          control = true;
        }
      }
    }
    while(control);
    let dateNow = new Date();
    let minId = 1;
    for(const [index, e] of this.extraction.entries()){
      if(e.id >= minId){
        minId ++;
      }
    };
    var extracted: ExtractionData = {id: minId, valueNumber: extractionNumber, logExtraction: dateNow};
    this.extraction.push(extracted);
    return extractionNumber;
  }

  randomizeExtraction(): number{
    return Math.floor((Math.random() * this.max)+1);
  }

  resetExtraction(){

  }
}
