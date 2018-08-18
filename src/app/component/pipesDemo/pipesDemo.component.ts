import { Component } from "@angular/core";

@Component({
    selector:'pipes-comp',
    templateUrl:'../pipesDemo/pipesDemo.component.html',
    styleUrls:['../pipesDemo/pipesDemo.component.scss']
})
export class Pipes{
    name:any[];
    constructor(){
        this.name=[
            {Name:'Shilpi',Gender:'female'},
            {Name:'Sunny',Gender:'Male'},
            {Name:'Gaurav',Gender:'Male'},
            {Name:'Anjali',Gender:'female'}
        ];
    }
}