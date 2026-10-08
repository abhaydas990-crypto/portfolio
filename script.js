const G='https://github.com/abhaydas990-crypto/';
const projects=[
{n:'Student Performance Predictor',d:'Predicts student math scores in real time from user inputs. Built during my AI/ML internship and deployed as a live Flask app.',t:['Python','Scikit-learn','Flask'],c:'ml',g:'student-performance-predictor2',l:'https://student-performance-predictor2.onrender.com'},
{n:'Next Word Predictor',d:'A deep learning sequence model that predicts the most likely next word from a text sequence, served as a live web app.',t:['Python','NLP','Deep learning'],c:'dl',g:'Next-Word-Predictor',l:'https://next-word-predictor-82xn.onrender.com'},
{n:'Pawvision',d:'Dog vs cat image classifier covering preprocessing, training, evaluation and prediction with CNN and RNN models.',t:['Python','CNN','Deep learning'],c:'dl',g:'Pawwvision'},
{n:'Quora Question Similarity',d:'Identifies whether two Quora questions are semantically similar.',t:['Python','NLP'],c:'ml',g:'Quora-Question-Similarity'},
{n:'Speaker Classification',d:'Classifies recordings as human or animal voices, using an audio dataset I collected from classmates.',t:['Python','Machine learning','Audio'],c:'ml',g:'Speaker-classification'},
{n:'Web Scraping Tool Dashboard',d:'Extracts data from websites and organises it for easy analysis and use.',t:['Python','Web scraping'],c:'web',g:'-web-scraping-tool-dashboard-project'},
{n:'Gas Leak Detection System',d:'IoT firmware that connects an MQ-3 gas sensor to the cloud and sends real-time leak alerts through Blynk.',t:['ESP32/ESP8266','MQ-3','Blynk IoT'],c:'web'},
{n:'Learnix LMS',d:'BPUT Hackathon team project: a learning management system with learning resources and academic management features.',t:['Team project','Hackathon'],c:'web'},
{n:'My Portfolio',d:'This personal portfolio website, showcasing my projects and skills.',t:['HTML','CSS','JavaScript'],c:'web',g:'My-Portfolio',l:'https://abhaydasportfolio01.onrender.com/'}
];
const grid=document.getElementById('grid');
projects.forEach(p=>{const a=document.createElement('article');a.className='card';a.dataset.c=p.c;
a.innerHTML=`<h3>${p.n}</h3><p>${p.d}</p><div class="chips">${p.t.map(x=>`<span class="chip">${x}</span>`).join('')}</div><div class="links">${p.l?`<a href="${p.l}" target="_blank" rel="noopener">Live app</a>`:''}${p.g?`<a href="${G+p.g}" target="_blank" rel="noopener">GitHub</a>`:''}</div>`;grid.append(a)});
// Certificates: paste each certificate URL between the quotes. Empty = shown without a link.
const CERTS=[
{t:'Getting Started with Artificial Intelligence',s:'IBM SkillsBuild',url:''},
{t:'Prompt Engineering Specialization',s:'Vanderbilt University (Coursera)',url:''},
{t:'The Bits and Bytes of Computer Networking',s:'Google (Coursera)',url:''},
{t:'Introduction to TCP/IP',s:'Yonsei University (Coursera)',url:''},
{t:'Fundamentals of Digital Design for VLSI Chip Design',s:'L&T EduTech (Coursera)',url:''},
{t:'2-Day IoT and AI (AIoT) Workshop',s:'IoT fundamentals, ANN and CNN architectures, YOLO/FOMO object detection',url:''},
{t:'PHP Full Stack Internship Certificate',s:'Techzex Software Pvt. Ltd. (ID: TZ119F4F7EC0)',url:''}
];
const certList=document.getElementById('certs');
CERTS.forEach(c=>{const li=document.createElement('li');
const inner='<b>'+c.t+'</b><br>'+c.s;
if(c.url){li.innerHTML='<a class="cert" href="'+c.url+'" target="_blank" rel="noopener">'+inner+'</a>'}else{li.innerHTML=inner}
certList.append(li)});

// CyberGuard demo
document.getElementById('f').onsubmit=e=>{e.preventDefault();
let raw=document.getElementById('u').value.trim(),s=0,r=[];
const add=(n,t)=>{s+=n;r.push(t+' (+'+n+')')};
let host='';try{host=new URL(/^\w+:\/\//.test(raw)?raw:'http://'+raw).hostname}catch{}
if(!/^https:\/\//i.test(raw))add(15,'Not using HTTPS');
if(/@/.test(raw))add(25,'Contains "@", which can hide the real destination');
if(/^\d{1,3}(\.\d{1,3}){3}$/.test(host))add(25,'Uses a raw IP address as the host');
if(raw.length>75)add(10,'Unusually long URL');
if(host.split('.').length>4)add(15,'Many subdomains');
if(/xn--/.test(host))add(20,'Punycode domain, possible lookalike characters');
if((host.match(/-/g)||[]).length>2)add(10,'Several hyphens in the domain');
const k=(raw.toLowerCase().match(/login|verify|secure|update|account|bank|paypal|password|wallet/g)||[]);
if(k.length)add(Math.min(30,k.length*10),'Sensitive keywords: '+[...new Set(k)].join(', '));
s=Math.min(100,s);
const lv=s>=60?['High risk','var(--bad)','Block the URL, warn affected users and report it to the security team.']:s>=30?['Suspicious','var(--accent)','Hold for review and verify the sender and domain before anyone clicks.']:['Low risk','var(--ok)','No strong indicators found. Continue normal monitoring.'];
document.getElementById('out').hidden=false;
document.getElementById('score').textContent=s+'/100';
const l=document.getElementById('level');l.textContent=lv[0];l.style.color=lv[1];
const bar=document.getElementById('bar');bar.style.width=s+'%';bar.style.background=lv[1];
document.getElementById('reasons').innerHTML=(r.length?r:['No suspicious indicators found']).map(x=>'<li>'+x.replace(/</g,'&lt;')+'</li>').join('');
document.getElementById('action').innerHTML='<b>Recommended action:</b> '+lv[2]};
document.getElementById('yr').textContent=new Date().getFullYear();
