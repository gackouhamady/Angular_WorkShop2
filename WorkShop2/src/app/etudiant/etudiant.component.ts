import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  @Input() questionEnseignant :String | undefined;
  questionReponse : String | undefined ;
  reponseEtudiant :string | undefined;
  constructor() { }

  ngOnInit(): void {




  }

}
