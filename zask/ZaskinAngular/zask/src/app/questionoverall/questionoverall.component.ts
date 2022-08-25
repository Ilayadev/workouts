import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-questionoverall',
  templateUrl: './questionoverall.component.html',
  styleUrls: ['./questionoverall.component.css']
})
export class QuestionoverallComponent implements OnInit {
  selectedtag:string="Question"
  @Output()theme=new EventEmitter<boolean>()
  darktheme:boolean=false
  questioncards:any[]=[{
    header:"questions1",
    description:"lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestias, at dignissimos, ea nobis repudiandae iure eius odit dolore adipisci, incidunt corporis veritatis nam minima?1",
    answers:4,
    views:4,
    scores:5,
    tags:["tags1","tags2","tags3"],
    useremail:"ilaya.cmr2004",
    askedtime:"asked on feb 22"
  },
  {
   header:"questions2",
    description:"lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestias, at dignissimos, ea nobis repudiandae iure eius odit dolore adipisci, incidunt corporis veritatis nam minima?2",
    answers:5,
    views:3,
    scores:2,
    tags:["tags1","tags2","tags3"],
    useremail:"ganesh.cmr2004",
    askedtime:"asked on feb 26"
  },
  {
    header:"questions3",
    description:"lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestias, at dignissimos, ea nobis repudiandae iure eius odit dolore adipisci, incidunt corporis veritatis nam minima?3",
    answers:45,
    views:434,
    scores:53,
    tags:["tags1","tags2","tags3"],
    useremail:"selva.cmr2004",
    askedtime:"asked on feb 10"
  },
  {
    header:"questions4",
    description:"lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestias, at dignissimos, ea nobis repudiandae iure eius odit dolore adipisci, incidunt corporis veritatis nam minima?4",
    answers:435,
    views:55,
    scores:88,
    tags:["tags1","tags2","tags3"],
    useremail:"isg.cmr2004",
    askedtime:"asked on feb 9"
  },
  {
    header:"questions1",
    description:"lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestias, at dignissimos, ea nobis repudiandae iure eius odit dolore adipisci, incidunt corporis veritatis nam minima?1",
    answers:4,
    views:4,
    scores:5,
    tags:["tags1","tags2","tags3"],
    useremail:"ilaya.cmr2004",
    askedtime:"asked on feb 22"
  },
  {
   header:"questions2",
    description:"lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestias, at dignissimos, ea nobis repudiandae iure eius odit dolore adipisci, incidunt corporis veritatis nam minima?2",
    answers:5,
    views:3,
    scores:2,
    tags:["tags1","tags2","tags3"],
    useremail:"ganesh.cmr2004",
    askedtime:"asked on feb 26"
  },
  {
    header:"questions3",
    description:"lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestias, at dignissimos, ea nobis repudiandae iure eius odit dolore adipisci, incidunt corporis veritatis nam minima?3",
    answers:45,
    views:434,
    scores:53,
    tags:["tags1","tags2","tags3"],
    useremail:"selva.cmr2004",
    askedtime:"asked on feb 10"
  },
  {
    header:"questions4",
    description:"lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestias, at dignissimos, ea nobis repudiandae iure eius odit dolore adipisci, incidunt corporis veritatis nam minima?4",
    answers:435,
    views:55,
    scores:88,
    tags:["tags1","tags2","tags3"],
    useremail:"isg.cmr2004",
    askedtime:"asked on feb 9"
  }
]

  constructor() { }

  ngOnInit(): void {
   
  }
  selectingtheme(){
    this.darktheme=!this.darktheme
    this.theme.emit(this.darktheme)
  }

}
