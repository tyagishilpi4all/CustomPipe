import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'Title',
    pure:true

})
export class TitlePipe implements PipeTransform{
    temp:any;
    transform(Name:string,Gender:string):string{
        if(Gender.toLowerCase()=="male"){
            return "Mr."+Name;
        }
        else{
            return "Miss."+Name;
        }
     
    }
}