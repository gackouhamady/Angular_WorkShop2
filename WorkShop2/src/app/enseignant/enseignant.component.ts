import { Component, OnInit , Input,Output} from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  @Input() question : String | undefined;
  reponse : String | undefined ;
  message :String | undefined;
  
  @Output() reponsefinale=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
   this.question="Quel langage de programmation est utilisee pour une application angular";
   this.reponse="TypeScript";
  }
  Correction (reponseEtudiant:String){
   if(this.reponse===reponseEtudiant){
    this.message="Bravo !";
   }
   else{
    this.message="Echec";
   }
  }

}
