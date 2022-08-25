interface request {
    userId: number,
    requestId: number,
    description: string,
    tags: string[],
    category?: 'bug' | 'feature' | 'feedback',
    createdDate?: Date,
    status: 'open' | 'assigned' | 'inprogress' | 'testing' | 'closed',
    priority: 'critical' | 'high' | 'medium' | 'low',
    similarRequest: number[],
    attachment?: ImageData | VideoConfiguration | File
}
interface task {
    title: string,
    taskId:number,
    status: 'inprogress' | 'testing' | 'completed',
    listOfRequest: number[],
    membersCount: number
}
interface milestone {
    name: string,
    status: 'inprogress' | 'completed' | 'released',
    listOfTask: number[]
}


interface projectManagementToolDatabase {
   users:{
       [key in string]:{
           userName:string;
           userid:number;
           email:string;
           password:string;
           org:number[]
       }
   }
   org:[
       {
           name:string;
           orgId:number;
           request:request[];
           task:task[];
           milestone:milestone[];
           users:number[]
       }
   ]
}

let projectManagementToolDatabase:projectManagementToolDatabase={
    users:{
        "user2202":{
            userName:"ilaya",
            userid:2004,
            email:"ganesh.cmr2004@gmail.com",
            password:"ilaya1234",
            org:[1001]
        }
    },
    org:[
        {
            name:"inbubations",
            orgId:1001,
            request:[{
                userId:4001,
                requestId:3001,
                description:"canvas is not working",
                tags:['canvas'],
                category:'bug',               
                status:'open',
                priority:'critical',
                similarRequest:[3002],
            }],
            task:[
                {
                    title:'canvas',
                    taskId:9001,
                    listOfRequest:[3001,3002],
                    status:'inprogress',
                    membersCount:2
                }
            ],
            milestone:[
                {
                    name:"milestone1",
                    listOfTask:[9001],
                    status:'inprogress'
                }
            ],
            users:[2004]
        }
    ]
}
