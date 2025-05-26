let technologyStack1 = ["AEM 6.5+","AEM as Cloud service","Java","Apache Sling","OSGI (Apache Felix)","Apache Jackrabbit OAK","HTL(Sightly)","Sling Models","jQuery","JavaScript","GIT","Maven"];

let technologyStack2 = ["AEM 5.6 - AEM 6.5+","Java","Java EE","Apache Sling","OSGI (Apache Felix)","Apache Jackrabbit OAK","HTL(Sightly)","Sling Models","jQuery","JavaScript","GIT","Maven","Groovy","AEM Forms","AWS Lambda","Amazon Cognito","Ext JS"];

let skills = [
    "Good knowledge of Core and Enterprise Java.",
    "Good knowledge of AEM development and related technologies",
    "Experience in Spring Framework.",
    "Experience in React.",
    "Self-learning and responsible.",
    "Good communication skills.",
    "Good team player."
];

var technologyStack1TypedConfig = {
  loop: true,
  loopCount: false,
  startDelay: 100,
  typeSpeed: 60,
  backSpeed: 50,
  backDelay: 500,
  strings: technologyStack1
};

var technologyStack2TypedConfig = {
  loop: true,
  loopCount: false,
  startDelay: 100,
  typeSpeed: 60,
  backSpeed: 50,
  backDelay: 500,
  strings: technologyStack2
};

var skillsTypedConfig = {
  loop: true,
  loopCount: false,
  startDelay: 100,
  typeSpeed: 60,
  backSpeed: 50,
  backDelay: 500,
  strings: skills
};

var typedTechnologyStack1 = new Typed('.technology-stack1-update', technologyStack1TypedConfig);
var typedTechnologyStack2 = new Typed('.technology-stack2-update', technologyStack1TypedConfig);
var typedTechnologyStack3 = new Typed('.technology-stack3-update', technologyStack1TypedConfig);
var typedTechnologyStack4 = new Typed('.technology-stack4-update', technologyStack2TypedConfig);


var typedSkills = new Typed('.skill-update', skillsTypedConfig);

document.getElementById("experience").innerHTML = new Date().getFullYear() - 2016;