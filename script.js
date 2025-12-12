

document.addEventListener("DOMContentLoaded", (event) => {
  
  //creating variable for HTML
  let body = document.querySelector(".main");
  
  //array of objects of all teachers
  const principals = [
    { 
       name: "Ms. Lynch",
      email: "ms.lynch@aoiths.org",
      role: "Principal",
      color: "#706563"
  },
  { 
      name: "Ms Woodham",
      email: "ms.woodham@aoiths.org",
      role: "Assistant principal",
      color: "#706563"
  },
  { 
      name: "Ms. Simpkins",
      email: "ms.simpkins@aoiths.org",
      role: "Assistant principal",
      color: "#706563"
  }
  
  ]; 
  
  const mainOffice = [
    { 
      name: "Mr. Valentin",
      email: "mr.valentin@aoiths.org",
      role: "main office coordinator",
      color: "#c1121f"
    },
    { 
      name: "Mr. Martinez",
      email: "mr.Martinez@aoiths.org",
      role: "main office coordinator",
      color: "#c1121f"
    },
    { 
      name: "Ms. Tirado",
      email: "ms.tirado@aoiths.org",
      role: "main office coordinator",
      color: "#c1121f"
    },
    {
      name: "Ms.sweeney",
      email: "ms.sweeney@aoiths.org",
      role: "main office coordinator and counselor support",
      color: "#c1121f"
    }
  ]; 
  
  const  deans = [
    { 
      name: "Mr. Frazer",
      email: "mr.frazer@aoiths.org",
      role: "Dean",
      color: "#ffe246"
  },
  { 
      name: "Mr. Mollison",
      email: "mr.mollison@aoiths.org",
      role: "Dean",
      color: "#ffe246"
  }
  ];
  
  const counselors = [
    {
       name: "Ms Cooper",
      email: "ms.cooper@aoiths.org",
      role: "senior counselor",
      color: "#fefae0"
    },
    {
       name: "Ms. Desroches",
      email: "ms.desroches@aoiths.org",
      role: "9th and 10 grade counselor",
      color: "#fefae0"
    },
    {
       name: "Mr. Molina",
      email: "mr.molina@aoiths.org",
      role: "school social worker",
      color: "#fefae0"
    },
    {
       name: "Ms. chua",
      email: "ms.chua@aoiths.org",
      role: "intern",
      color: "#fefae0"
    },
    {
      name: "Ms. Greenberg",
      email: "ms.greenberg@aoiths.org",
      role: "intern",
      color: "#fefae0"
    },
    {
       name: "Mr. Ricky",
      email: "mr.guzman@aoiths.org", 
      role:"College counselor",
      color: "#fefae0"
    },
   {
     name:"Ms. Slater",
     email:"ms.slater@aoiths.org",
     role: "special education counselor",
     color:"#fefae0"
   }
    ]
  
  const cteTeachers = [
    { 
      name: "Mr. Alphonse",
      email: "mr.alphonse@aoiths.org",
      role: "IT and computer systems teacher",
      color: "#34a0a4"
  },
  { 
      name: "Mr. Shams",
      email: "mr.shams@aoiths.org",
      role: "Game design teacher",
      color: "#34a0a4"
  },
  { 
      name: "Mr. Gomes",
      email: "mr.gomes@aoiths.org",
      role: "Web design teacher",
      color: "#34a0a4"
  },
  { 
      name: "Mr. Pelzer",
      email: "mr.pelzer@aoiths.org",
      role: "AP Computer science teacher",
      color: "#34a0a4"
  },
  { 
      name: "Ms. Ramswarak",
      email: "ms.ramsawak2@aoiths.org",
      role: "cybersecurity and graphic design teacher",
      color: "#34a0a4"
  },
  {
    name: "Mr. Sullivan",
      email: "mr.sullivan@aoiths.org",
      role: "studio art teacher and 4H ambassador",
      color: "#34a0a4"
  },
  {
    name: "Mr Pierre",
    email: "mr.pierre@aoiths.org",
    role: "Web design teacher",
    color: "#34a0a4"
  }

  ]; 
  
  const englishTeachers = [
    { 
      name: "Ms. Gomez",
      email: "ms.gomez@aoiths.org",
      role: "AP English Language and Composition",
      color: "#B8C4F5"
  },
  { 
      name: "Ms. Taveras",
      email: "ms.taveras@aoiths.org",
      role: "AP English Literature and Composition",
      color: "#B8C4F5"
  },
  { 
      name: "Mr. Grant",
      email: "mr.grant@aoiths.org",
      role: "9th and 10th grade english teacher",
      color: "#B8C4F5"
  },
  { 
      name: "Ms. Grizell",
      email: "ms.griszell@aoiths.org",
      role: "9th and 10th grade teacher",
      color: "#B8C4F5"
  },
  { 
      name: "Ms.Sherman",
      email: "ms.sherman@aoiths.org",
      role: "Social studies and english teacher",
      color: "#B8C4F5"
  }
  
  ]; 
  
  const mathTeachers = [
    { 
      name: "Mr. Koelsh",
      email: "mr.koelsch@aoiths.org",
      role: "AP Calculus AB, precalculus, and geometry",
      color: "#A1B5D8"
  },
  { 
      name: "Mr. Forth",
      email: "mr.forth@aoiths.org",
      role: "teacher",
      color: "#A1B5D8"
  },
  { 
      name: "Ms. Freck",
      email: "ms.freck@aoiths.org",
      role: "Algebra 1 teacher, and senior coordinator",
      color: "#A1B5D8"
  },
  { 
      name: "Ms. Minto",
      email: "ms.minto@aoiths.org",
      role: "teacher",
      color: "#A1B5D8"
  },
  { 
      name: "Mr. Wong",
      email: "mr.wong@aoiths.org",
      role: "Algebra 2 teacher",
      color: "#A1B5D8"
  },
  { 
      name: "Mr. Steele",
      email: "mr.steele@aoiths.org",
      role: "PBL math and Algebra 2 teacher",
      color: "#A1B5D8"
  }
  
  ]; 
  
  const  socialStudies = [
    { 
      name: "Ms. Urena",
      email: "ms.urena@aoiths.org",
      role: "AP US government and politics teacher",
      color: "#E5B25D"
  },
  { 
      name: "Mr. Amell",
      email: "mr.amell@aoiths.org",
      role: "AP US History teacher",
      color: "#E5B25D"
  },
  { 
      name: "Mr. Lucas",
      email: "mr.lucas@aoiths.org",
      role: "art history and global history and geography teacher",
      color: "#E5B25D"
  },
  { 
      name: "Mr. Rodriguez",
      email: "mr.Rodriguez@aoiths.org",
      role: "Global history and geography teacher",
      color: "#E5B25D"
  },
  { 
      name: "Mr. Smith",
      email: "mr.smith@aoiths.org",
      role: "global history and geography teacher",
      color: "#E5B25D"
  },
  {
    name: "Mr. Headlam",
    email: "mr.headlam@aoiths.org",
    role: "AP African American history",
    color: "#E5B25D"
  }
  ]; 
  
  const  gymTeachers = [
    { 
      name: "Mr. Banta",
      email: "mr.banta@aoiths.org",
      role: "Physical Education and health teacher",
      color: "#679436"
  },
  { 
      name: "Mr. Macalary",
      email: "mr.mcalary@aoiths.org",
      role: "physical education and health teacher",
      color: "#679436"
  }
  
  ]; 
  
  const spanishTeacher = [
    {
    name: "Ms. Vallejo",
      email: "ms.vallejo@aoiths.org",
      role: "spanish teacher",
      color: "#F5DBCB"
    }
    ];
    
  const ellTeachers = [
    {
      name: "Ms. Mott",
      email: "ms.mott@aoiths.org",
      role: "ELL teacher",
      color: "#3a015c"
    },
    {
      name: "Ms. Weaver",
      email: "ms.weaver@aoiths.org",
      role: "ELL teacher",
      color: "#3a015c"
    }
    ];
    
  const scienceTeachers = [
    { 
      name: "Ms. Davies",
      email: "ms.davies@aoiths.org",
      role: "Earth science teacher",
      color: "#D2E0BF"
  },
  { 
      name: "Ms. Moreno",
      email: "ms.moreno@aoiths.org",
      role: "Earth science teacher",
      color: "#D2E0BF"
  },
  {
      name: "Ms. Kabir",
      email: "ms.kabir@aoiths.org",
      role: "Living Enviroment teacher and para professional",
      color: "#D2E0BF"
  },
  { 
      name: "Mr. Lynch",
      email: "mr.Tlynch@aoiths.org",
      role: "chemistry teacher",
      color: "#D2E0BF"
  },
  { 
      name: "Mr David",
      email: "mr.david@aoiths.org",
      role: "science teacher",
      color: "#D2E0BF"
  }
  
  
  ];
  
  const techSupport = [
    {
       name: "Mr. Howell",
      email: "mr.howell@aoiths.org",
      role: "IT and Tech Support",
      color: "#168aad"
    }
    ];
    
  //remember to find out what these teachers do
  const paraProfessionals = [
     { 
      name: "Mr. Palmeri",
      email: "mr.palmeri@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
  { 
      name: "Mr. Grizell",
      email: "mr.dgriszell@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
  { 
      name: "Ms. Rahimi",
      email: "ms.rahimi@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
   { 
      name: "Mr. Ahad",
      email: "mr.ahad@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
  { 
      name: "Mr. Belfon",
      email: "mr.belfon@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
  { 
      name: "Mr. Colter",
      email: "mr.colter@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
   { 
      name: "Ms. Nicholson",
      email: "ms.nicholson@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
  { 
      name: "Ms. Shand",
      email: "ms.shand@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
  { 
      name: "Ms. Camilo",
      email: "ms.camilo@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
  { 
      name: "Mr. Ward",
      email: "mr.ward@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
  { 
      name: "Ms. Nowakowski",
      email: "ms.nowakowski@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
  { 
      name: "Mr. Belgrave",
      email: "mr.belgrave@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
  { 
      name: "Ms. Swing",
      email: "ms.swing@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
  { 
      name: "Ms. Boswell",
      email: "ms.boswell@aoiths.org",
      role: "Para professional",
      color: "#b08968"
  },
  { 
      name: "Mr. Jorge",
      email: "mr.jorge@aoiths.org",
      role: "Para professional",
      color: "#b08968"
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
  console.log(paraProfessionals);
  
  
function render(arr) {
  arr.forEach(person => {
    body.innerHTML += `
    <div class="cardWrapper">
      <div class="card" style="background-color: ${person.color};">
      <div class="cardInfo">
        <h3>${person.name}</h3>
        <p>${person.role}</p>
        <p>${person.email}</p>
        </div>
      </div>
      </div>
    `;
  });
}

render(principals);
render(mainOffice);
render(deans);
render(counselors);
render(cteTeachers);
render(englishTeachers);
render(mathTeachers);
render(socialStudies);
render(gymTeachers);
render(artTeacher);
render(spanishTeacher);
render(ellTeachers);
render(scienceTeachers);
render(techSupport);
render(paraProfessionals);


});

//complete