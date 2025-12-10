//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

let
	Admin = ["Fowlkes", "Lynch", "Woodham", "Stahl", "Peter"],
	CTE = ["Alphonse", "Donahue", "Santana", "Vaduva", "Woods", "Shams", "Urena"],
	History = ["McQuilkin", "Amell", "Hablenko", "Schmidt", "Headlem", "Lucas", "Smith"],
	Counselor = ["Grant", "Weaver"],
	Maths = ["Freck", , "Ventimiglia"],
	Gym = ["Banta", "Proper", "Moll", "Murray"],
	Dean = ["Frazier", "Vaduva", "Mollison"],
	Language = ["Levystone", "Ortiz", "Stratman", "Vaduva", "Streeter", "Weaver"],
	Science = ["Koelsch", "Willet", "Lagana", "Fonrose"],
	English = ["Brown", "DelValle", "Duran", "Griszell", "King", "Fonrose", "Constant"],
	Office = ["Verley"],
	Support = ["Kabir", "Minto"],
	SSC = ["Stephine"];

//////// DO NOT EDIT ABOVE THIS LINE ////////////////
/////////////////////////////////////////////////////

////////// MAKE YOUR UPDATES WITHIN THIS SECTION //// 

document.addEventListener("DOMContentLoaded", (event) => {
  
  //creating variable for HTML
  let body = document.querySelector(".main");
  
  //array of objects of all teachers
  const principals = [
    { 
       name: "Ms. Lynch",
      email: "ms.lynch@aoiths.org",
      role: "Principal",
      color: "grey"
  },
  { 
      name: "Ms Woodham",
      email: "ms.woodham@aoiths.org",
      role: "Assistant principal",
      color: "grey"
  },
  { 
      name: "Ms. Simpkins",
      email: "ms.simpkins@aoiths.org",
      role: "assistant principal",
      color: "grey"
  }
  
  ]; 
  
  const mainOffice = [
    {
      role: "Main Office"
    },
    { 
      name: "Mr. Valentin",
      email: "mr.valentin@aoiths.org",
      color: "red"
    },
    { 
      name: "Mr. Martinez",
      email: "mr.Martinez@aoiths.org",
      color: "red"
    },
    { 
      name: "Ms. Tirado",
      email: "ms.tirado@aoiths.org",
      color: "red"
    },
  ]; 
  
  const  deans = [
    {
      role: "Deans"
    },
    { 
      name: "Mr. Frazer",
      email: "mr.frazer@aoiths.org",
      color: "yellow"
  },
  { 
      name: "Mr. Mollison",
      email: "mr.mollison@aoiths.org",
      color: "yellow"
  }
  ];
  
  const counselors = [
    {
      role: "Counselors"
    },
    {
       name: "Ms Cooper",
      email: "ms.cooper@aoiths.org",
      color: "off white"
    },
    {
       name: "Ms. Desroches",
      email: "ms.desroches@aoiths.org",
      color: "off white"
    },
    {
       name: "Mr. Molina",
      email: "mr.molina@aoiths.org",
      color: "off white"
    },
    {
       name: "Ms. chua",
      email: "ms.chua@aoiths.org",
      color: "off white"
    },
    {
      name: "Ms. Greenberg",
      email: "ms.greenberg@aoiths.org",
      color: "off white"
    },
    {
       name: "Mr. Ricky",
      email: "mr.guzman@aoiths.org", 
      color: "off white"
    },
   {
     name:"Ms. Slater",
     email:"ms.slater@aoiths.org",
     color:"off white"
   }
    ]
  
  const cteTeachers = [
    {
      role: "CTE department"
    },
    { 
      name: "Mr. Alphonse",
      email: "mr.alphonse@aoiths.org",
      color: "teal"
  },
  { 
      name: "Mr. Shams",
      email: "mr.shams@aoiths.org",
      color: "teal"
  },
  { 
      name: "Mr. Gomes",
      email: "mr.gomes@aoiths.org",
      color: "teal"
  },
  { 
      name: "Mr. Pelzer",
      email: "mr.pelzer@aoiths.org",
      color: "teal"
  },
  { 
      name: "Ms. Ramswarak",
      email: "ms.ramsawak2@aoiths.org",
      color: "teal"
  }
  
  ]; 
  
  const englishTeachers = [
    {
      role: "English department"
    },
    { 
      name: "Ms. Gomez",
      email: "ms.gomez@aoiths.org",
      color: "lavender"
  },
  { 
      name: "Ms. Taveras",
      email: "ms.taveras@aoiths.org",
      color: "lavender"
  },
  { 
      name: "Mr. Grant",
      email: "mr.grant@aoiths.org",
      color: "lavender"
  },
  { 
      name: "Ms. Grizell",
      email: "ms.griszell@aoiths.org",
      color: "lavender"
  },
  { 
      name: "Ms.Sherman",
      email: "ms.sherman@aoiths.org",
      color: "lavender"
  }
  
  ]; 
  
  const mathTeachers = [
    {
      role: "Math department"
    },
    { 
      name: "Mr. Koelsh",
      email: "mr.koelsch@aoiths.org",
      color: "blue"
  },
  { 
      name: "Mr. Forth",
      email: "mr.forth@aoiths.org",
      color: "blue"
  },
  { 
      name: "Ms. Freck",
      email: "ms.freck@aoiths.org",
      color: "blue"
  },
  { 
      name: "Ms. Minto",
      email: "ms.minto@aoiths.org",
      color: "blue"
  },
  { 
      name: "Mr. Wong",
      email: "mr.wong@aoiths.org",
      color: "blue"
  },
  { 
      name: "Mr. Steele",
      email: "mr.steele@aoiths.org",
      color: "blue"
  }
  
  ]; 
  
  const  socialStudies = [
    {
      role: "History Department"
    },
    { 
      name: "Ms. Urena",
      email: "ms.urena@aoiths.org",
      color: "orange"
  },
  { 
      name: "Mr. Amell",
      email: "mr.amell@aoiths.org",
      color: "orange"
  },
  { 
      name: "Mr. Lucas",
      email: "mr.lucas@aoiths.org",
      color: "orange"
  },
  { 
      name: "Mr. Rodriguez",
      email: "mr.Rodriguez@aoiths.org",
      color: "orange"
  },
  { 
      name: "Mr. Smith",
      email: "mr.smith@aoiths.org",
      color: "orange"
  },
  {
    name: "Mr. Headlam",
    email: "mr.headlam@aoiths.org",
    color: "orange"
  }
  ]; 
  
  const  gymTeachers = [
    {
      role: "Physical Education Department"
    },
    { 
      name: "Mr. Banta",
      email: "mr.banta@aoiths.org",
      color: "dark green"
  },
  { 
      name: "Mr. Macalary",
      email: "mr.mcalary@aoiths.org",
      color: "dark green"
  }
  
  ]; 
  
  const artTeacher = [
    {
      role: "Art Department"
    },
    {
    name: "Mr. Sullivan",
      email: "mr.sullivan@aoiths.org",
      color: "pink"
    }
    ];
    
  const spanishTeacher = [
    {
      role: "Spanish Department"
    },
    {
    name: "Ms. Vallejo",
      email: "ms.vallejo@aoiths.org",
      color: "tan"
    }
    ];
    
  const ellTeachers = [
    {
      role: "English Language Learning Department"
    },
    {
      name: "Ms. Mott",
      email: "ms.mott@aoiths.org",
      color: "dark purple"
    },
    {
      name: "Ms. Weaver",
      email: "ms.weaver@aoiths.org",
      color: "dark purple"
    }
    ];
    
  const scienceTeachers = [
    {
      role: "Science Department"
    },
    { 
      name: "Ms. Davies",
      email: "ms.davies@aoiths.org",
      color: "green"
  },
  { 
      name: "Ms. Moreno",
      email: "ms.moreno@aoiths.org",
      color: "green"
  },
  {
      name: "Ms. Kabir",
      email: "ms.kabir@aoiths.org",
      color: "green"
  },
  { 
      name: "Mr. Lynch",
      email: "mr.Tlynch@aoiths.org",
      color: "green"
  },
  { 
      name: "Mr David",
      email: "mr.david@aoiths.org",
      color: "green"
  }
  
  
  ];
  
  const techSupport = [
    {
      role: "IT and Tech Support"
    },
    {
       name: "Mr. Howell",
      email: "mr.howell@aoiths.org",
      color: "dark teal"
    }
    ];
    
  const paras = [
     { 
      name: "Mr. Palmeri",
      email: "mr.palmeri@aoiths.org",
      color: "almond brown"
  },
  { 
      name: "Mr. Grizell",
      email: "mr.dgriszell@aoiths.org",
      color: "almond brown"
  },
  { 
      name: "Ms. Rahimi",
      email: "ms.rahimi@aoiths.org",
      color: "almond brown"
  },
   { 
      name: "Mr. Ahad",
      email: "mr.ahad@aoiths.org",
      color: "almond brown"
  },
  { 
      name: "Mr. Belfon",
      email: "mr.belfon@aoiths.org",
      color: "almond brown"
  },
  { 
      name: "Mr. Colter",
      email: "mr.colter@aoiths.org",
      color: "almond brown"
  },
   { 
      name: "Ms. Nicholson",
      email: "ms.nicholson@aoiths.org",
      color: "almond brown"
  },
  { 
      name: "Ms. Shand",
      email: "ms.shand@aoiths.org",
      color: "almond brown"
  },
  { 
      name: "Ms. Camilo",
      email: "ms.camilo@aoiths.org",
      color: "almond brown"
  },
  { 
      name: "Mr. Ward",
      email: "mr.ward@aoiths.org",
      color: "almond brown"
  },
  { 
      name: "Ms. Nowakowski",
      email: "ms.nowakowski@aoiths.org",
      color: "almond brown"
  },
  { 
      name: "Mr. Belgrave",
      email: "mr.belgrave@aoiths.org",
      color: "almond brown"
  },
  { 
      name: "Ms. Swing",
      email: "ms.swing@aoiths.org",
      color: "almond brown"
  },
  { 
      name: "Ms. Boswell",
      email: "ms.boswell@aoiths.org",
      color: "almond brown"
  },
  { 
      name: "Mr. Jorge",
      email: "mr.jorge@aoiths.org",
      color: "almond brown"
  }
    ];
    
    
  console.log(principals);
  console.log(mainOffice);
  console.log(deans);
  console.log(counselors);
  console.log(cteTeachers);
  console.log(englishTeachers);
  console.log(mathTeachers);
  console.log(socialStudies);
  console.log(gymTeachers);
  console.log(artTeacher);
  console.log(spanishTeacher);
  console.log(ellTeachers);
  console.log(scienceTeachers);
  console.log(techSupport);
  console.log(random);
  
  
 principals.forEach(person => {
  body.innerHTML += `
    <div>
      <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});


mainOffice.forEach(person => {
  body.innerHTML += `
    <div>
    <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

deans.forEach(person => {
  body.innerHTML += `
    <div>
    <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

counselors.forEach(person => {
  body.innerHTML += `
    <div>
    <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

cteTeachers.forEach(person => {
  body.innerHTML += `
    <div>
    <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

englishTeachers.forEach(person => {
  body.innerHTML += `
    <div>
    <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

mathTeachers.forEach(person => {
  body.innerHTML += `
    <div>
    <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

socialStudies.forEach(person => {
  body.innerHTML += `
    <div>
    <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

gymTeachers.forEach(person => {
  body.innerHTML += `
    <div>
    <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

artTeacher.forEach(person => {
  body.innerHTML += `
    <div>
    <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

spanishTeacher.forEach(person => {
  body.innerHTML += `
    <div>
    <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

ellTeachers.forEach(person => {
  body.innerHTML += `
    <div>
    <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

scienceTeachers.forEach(person => {
  body.innerHTML += `
    <div>
    <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

techSupport.forEach(person => {
  body.innerHTML += `
    <div>
    <h1>${person.role}</h1>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

paras.forEach(person => {
  body.innerHTML += `
    <div>
      <h3>${person.name}</h3>
      <p>Email: ${person.email}</p>
    </div>
  `;
});

});

/*
const  = [
    { 
      "name": "",
      "email": "",
      "color": ""
  },
  { 
      "name": "",
      "email": "",
      "color": ""
  },
  { 
      "name": "",
      "email": "",
      "color": ""
  }
  
  ]; 
*/
/////////////////////////////////////////////////////
//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

const STAFF = [Admin, Office, Counselor, CTE, History, Maths, Gym, Dean, Language, Science, English, Support, SSC];

e("table").innerHTML = createTableCotents();
