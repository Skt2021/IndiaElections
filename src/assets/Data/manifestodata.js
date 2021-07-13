import { faCheckCircle, faCog, faCogs,
   faBan,faPause,faHandPaper, faMusic,
   faRupeeSign, faSeedling, faUniversity,
   faFighterJet, faHeartbeat, faGlobe,
   faGraduationCap, faBriefcase, faRoad} from '@fortawesome/free-solid-svg-icons';

export const promises_data = {
    "icons" : {
      "Culture":faMusic,
      "Economy": faRupeeSign,
      "Agriculture": faSeedling,
      "Government": faUniversity,
      "Defence": faFighterJet,
      "Health": faHeartbeat,
      "Foreign Policy": faGlobe,
      "Education": faGraduationCap,
      "Business and Industries": faBriefcase,
      "Infrastructure": faRoad,
    },
    
    "statuses":{
        "Fulfilled":{
           "color":"#4BB543",
           "icon": faCheckCircle
        },
        "Adequate Progress":{
            "color":"skyblue",
            "icon":faCogs
         },
         "Inadequate Progress":{
            "color":"#709990",
            "icon":faCog
         },
         "Stalled":{
            "color":"#f0ad4e",
            "icon":faHandPaper
         },
        "Broken":{
           "color":"#d9534f",
           "icon":faBan
        },
        "Not yet Rated": {
            "color": "grey",
            "icon": faPause
        }
     },
     "promises": [
         {     
             "id":1,
             "title":"Housing for all by 2022: Deploying 2 crores homes in Indian cities.",
             "description":`BJP government  launched “Housing for all by 2022” scheme under  Pradhan Mantri Awas Yojana (PMAY) to boost affordable housing. It is aimed at urban areas with a target to construct 2 crores houses by 2022 with the following components: ` + 
             `–Slum rehabilitation of Slum Dwellers with participation of private developers using land as a resource.
             
             –Promotion of affordable housing for weaker section through credit linked subsidy.
             
             –Affordable housing in partnership with Public & Private sectors
             
             –Subsidy for beneficiary-led individual house construction or enhancement.`,
             "status":"Fulfilled",
             "status_info":`As of January 2019, 13.5 lakhs houses have been completed, 37 lakh houses are grounded for construction, and another 68.5 lakh houses sanctioned,  as per the official website of Ministry of Housing & Urban Development.

             Contrast the development with the report by FICCI in May 2018 that stated that 2.6-3.7 crore urban households still reside in informal housing, and in poor living conditions. The report also highlights that rapid urbanization and the lack of planned affordable housing in India have led to a shortage of 1.0 to 1.2 crore urban homes.
             
             Considering only 13.5 lakh houses have been deployed against the promise of 200 lakh which constitutes 6.75%, the performance against this promise is categorised as “Inadequate Progress”`,
             "category":"Business and Industries",
             "comments":[]
         },
         {  
            "id":2,
            "title":"Doubleing the length of National Highways by 2022",
            "description":"",
            "status":"Adequate Progress",
            "status_info":"",
            "category":"Infrastructure",
            "comments":[]
        },
        {   
            "id":3,
            "title":"Completion the dedicated freight corridor project by 2022.",
            "description":"",
            "status":"Adequate Progress",
            "status_info":"",
            "category":"Infrastructure",
            "comments":[]
         },
        {
            "id":4,
            "title":"work towards simplifying procedural laws, encouraging mediation and strengthening judicial and court management system in order to increase accessibility",
            "description":"",
            "status":"Inadequate Progress",
            "status_info":"",
            "category":"Governance",
            "comments":[]
        },
     ]
}