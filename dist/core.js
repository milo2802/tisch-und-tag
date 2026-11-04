export const allergens=['Gluten','Krebstiere','Eier','Fisch','Erdnüsse','Soja','Milch','Schalenfrüchte','Sellerie','Senf','Sesam','Sulfite','Lupinen','Weichtiere'];
export const days=['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'];
export const meals=['Frühstück','Mittagessen','Abendessen','Snack'];
export const foods={
 reis:{name:'Basmatireis',unit:'g',pack:500,price:1.99,group:'Getreide & Hülsenfrüchte',allergens:[]},
 linsen:{name:'Rote Linsen',unit:'g',pack:500,price:1.79,group:'Getreide & Hülsenfrüchte',allergens:[]},
 kicher:{name:'Kichererbsen (Abtropfgewicht)',unit:'g',pack:240,price:.89,group:'Getreide & Hülsenfrüchte',allergens:[]},
 hafer:{name:'Haferflocken',unit:'g',pack:500,price:.99,group:'Getreide & Hülsenfrüchte',allergens:['Gluten']},
 pasta:{name:'Vollkornpasta (Weizen)',unit:'g',pack:500,price:1.29,group:'Getreide & Hülsenfrüchte',allergens:['Gluten']},
 tomaten:{name:'Tomaten',unit:'g',pack:500,price:2.49,group:'Obst & Gemüse',allergens:[]},
 spinat:{name:'Blattspinat',unit:'g',pack:450,price:1.69,group:'Obst & Gemüse',allergens:[]},
 zucchini:{name:'Zucchini',unit:'g',pack:500,price:1.49,group:'Obst & Gemüse',allergens:[]},
 banane:{name:'Banane',unit:'Stück',pack:5,price:1.49,group:'Obst & Gemüse',allergens:[]},
 kokos:{name:'Kokosmilch (nur Kokos, Wasser)',unit:'ml',pack:400,price:1.49,group:'Konserven',allergens:[]},
 feta:{name:'Feta',unit:'g',pack:200,price:1.99,group:'Kühlregal',allergens:['Milch']},
 ei:{name:'Eier',unit:'Stück',pack:6,price:1.99,group:'Kühlregal',allergens:['Eier']},
 tofu:{name:'Naturtofu (Soja, Wasser, Gerinnungsmittel)',unit:'g',pack:400,price:2.49,group:'Kühlregal',allergens:['Soja']},
 oel:{name:'Olivenöl',unit:'ml',pack:500,price:5.99,group:'Öle & Gewürze',allergens:[]}
};
const make=(id,title,ingredients,steps,time,kcal,protein,carbs,fat,opts={})=>({id,title,ingredients:ingredients.map(([food,qty])=>({food,qty})),steps,servings:2,time,prep:10,kcal,protein,carbs,fat,diet:'Vegan',meal:['Mittagessen','Abendessen'],tags:['Schnell'],source:'Eigene Beispielrezeptur · Nährwerte geschätzt',verified:true,...opts});
export const seeds=[
 make('curry','Cremiges Kichererbsen-Curry',[['kicher',240],['spinat',200],['kokos',200],['reis',150],['oel',10]],['Reis nach Packungsangabe garen.','Spinat waschen. Kichererbsen abspülen und abtropfen lassen.','Öl erhitzen. Spinat und Kichererbsen kurz andünsten, Kokosmilch dazugeben.','10 Minuten sanft köcheln lassen. Abschmecken und mit Reis servieren.'],25,620,19,78,24,{tags:['Meal Prep','Günstig'],image:'curry'}),
 make('pasta','Sommerliche Ofentomaten-Pasta',[['pasta',180],['tomaten',400],['feta',150],['oel',15]],['Backofen auf 200 °C vorheizen.','Tomaten und Feta mit Öl in eine Form geben. 25 Minuten backen.','Pasta nach Packungsangabe kochen.','Tomaten und Feta verrühren, Pasta unterheben.'],35,580,24,65,23,{diet:'Vegetarisch',image:'pasta'}),
 make('bowl','Grüne Tofu-Bowl mit Reis',[['tofu',300],['reis',140],['spinat',200],['zucchini',250],['oel',15]],['Reis nach Packungsangabe kochen.','Tofu trocken tupfen und würfeln. Gemüse waschen und schneiden.','Tofu im Öl goldbraun braten. Gemüse zugeben und 8 Minuten garen.','Mit Reis anrichten und nach Geschmack würzen.'],25,570,30,60,22,{image:'bowl',tags:['Proteinreich','Meal Prep']}),
 make('linsen','Rote Linsen mit Tomate & Spinat',[['linsen',180],['tomaten',300],['spinat',200],['kokos',150]],['Linsen gründlich abspülen.','Tomaten würfeln und mit Linsen, Kokosmilch und 350 ml Wasser aufkochen.','15–20 Minuten köcheln lassen, bei Bedarf Wasser ergänzen.','Spinat unterheben und garen. Abschmecken.'],25,440,25,56,12,{image:'lentils',tags:['Günstig','Meal Prep']}),
 make('porridge','Bananen-Porridge',[['hafer',100],['banane',2],['kokos',100]],['Haferflocken mit Kokosmilch und 250 ml Wasser aufkochen.','5 Minuten sanft köcheln lassen.','Bananen in Scheiben schneiden und darauf verteilen.'],10,370,8,58,12,{meal:['Frühstück','Snack'],image:'porridge'}),
 make('pfanne','Zucchini-Eier-Pfanne',[['ei',4],['zucchini',400],['tomaten',200],['oel',10]],['Gemüse waschen und würfeln.','Öl erhitzen und Gemüse 8 Minuten anbraten.','Eier verquirlen, hinzufügen und vollständig stocken lassen.'],20,300,20,12,19,{diet:'Vegetarisch',image:'eggs'}),
 make('salat','Mediterraner Kichererbsensalat',[['kicher',480],['tomaten',300],['zucchini',200],['oel',15]],['Kichererbsen abspülen.','Tomaten und Zucchini waschen und fein würfeln.','Alles mit Öl vermengen und nach Geschmack würzen.'],15,400,17,42,16,{image:'salad'})];
export function eligible(r,s,meal){if(!r||!r.meal.includes(meal)||r.time==null||r.time>(s.mealTimes?.[meal]??s.maxTime))return false;if(s.diet==='Vegan'&&r.diet!=='Vegan')return false;if(['Vegetarisch','Pescetarisch'].includes(s.diet)&&!['Vegan','Vegetarisch',...(s.diet==='Pescetarisch'?['Pescetarisch']:[])].includes(r.diet))return false;const excluded=[...s.allergens,...(s.glutenfree?['Gluten']:[]),...(s.lactosefree?['Milch']:[])];if(excluded.length&&!r.verified)return false;if(r.ingredients.some(i=>!foods[i.food] ? excluded.length>0 : foods[i.food].allergens.some(a=>excluded.includes(a))))return false;const bad=s.excludes.toLowerCase().split(',').map(x=>x.trim()).filter(Boolean);if(r.ingredients.some(i=>bad.some(b=>(foods[i.food]?.name||i.food).toLowerCase().includes(b))))return false;if(s.goals.includes('Proteinreich')&&(!r.protein||r.protein<s.minProtein))return false;if(s.goals.includes('Low Carb')&&(r.carbs==null||r.carbs>s.maxCarbs))return false;if(s.goals.includes('Kalorienarm')&&(r.kcal==null||r.kcal>s.maxKcal))return false;if(s.goals.includes('Kalorienreich')&&(r.kcal==null||r.kcal<s.minKcal))return false;return true;}
export function shopping(plan,recipes,pantry={},prices={}){const map={};for(const p of Object.values(plan)){if(p.leftover||p.cooked)continue;const r=recipes.find(r=>r.id===p.recipe);if(!r)continue;for(const i of r.ingredients){const f=foods[i.food]||{name:i.food,unit:i.unit||'g',pack:0,price:0,group:'Eigene Zutaten'};const key=i.food+'|'+f.unit;const row=map[key]??={key,food:i.food,...f,qty:0,dishes:[]};row.qty+=i.qty*p.portions/r.servings;if(!row.dishes.includes(r.title))row.dishes.push(r.title);}}return Object.values(map).map(x=>{const need=Math.max(0,x.qty-(pantry[x.food]||0));const price=prices[x.food]??x.price;return {...x,need,packs:x.pack?Math.ceil(need/x.pack):null,cost:x.pack?Math.ceil(need/x.pack)*price:0,used:x.pack?x.qty/x.pack*price:0,price};});}
export function totals(rows){return {buy:rows.reduce((s,r)=>s+r.cost,0),used:rows.reduce((s,r)=>s+r.used,0),unknown:rows.some(r=>r.packs===null)};}
export function planAuto(state){
 const settings=normalizeSettings(state.settings);const result={};const old=state.plans[state.week]||{};const existing=state.recipes.filter(r=>!r.generated);const generated=settings.meals.flatMap(m=>generateRecipeCandidates(settings,m));const recipes=[...existing,...generated,...state.recipes.filter(r=>r.generated&&Object.values(old).some(p=>p.locked&&p.recipe===r.id))];
 for(const[key,v]of Object.entries(old)){const[d,m]=key.split('-');const r=recipes.find(r=>r.id===v.recipe);if(v.locked&&!v.leftover&&settings.days.includes(+d)&&settings.meals.includes(m)&&eligible(r,settings,m))result[key]={...v};}
 const misses=[];for(const d of settings.days)for(const m of settings.meals){const key=d+'-'+m;if(result[key])continue;let options=recipes.filter(r=>eligible(r,settings,m));if(!options.length){misses.push('Tag '+(d+1)+' '+m);continue;}const scored=options.map(r=>{const p={...result,[key]:{recipe:r.id,portions:settings.persons}};const cost=totals(shopping(p,recipes,state.pantry,state.prices)).buy;const repeat=Object.values(result).filter(p=>{const used=recipes.find(x=>x.id===p.recipe);return used?.title===r.title;}).length;const newPenalty=r.generated?0:3;return {r,score:cost+Math.max(0,cost-settings.budget)*20+repeat*7+newPenalty+(m==='Frühstück'&&/Schale|Pfanne/.test(r.title)?12:0)+(settings.goals.includes('Ausgewogen')&&!r.ingredients.some(i=>['reis','pasta','couscous','kartoffel','hafer','hafergf'].includes(i.food))?2:0)+(Math.random()*.4)-(settings.preferFav&&r.favorite?1:0)};}).sort((a,b)=>a.score-b.score);result[key]={recipe:scored[0].r.id,portions:settings.persons};}
 const ids=new Set(Object.values(result).map(p=>p.recipe));return {plan:result,misses,generated:generated.filter(r=>ids.has(r.id))};
}
export function parseText(text){const lines=text.split('\n').map(x=>x.trim()).filter(Boolean);let section='ingredients',ingredients=[],steps=[];for(const line of lines.slice(1)){if(/^(zutaten|ingredients)\s*:?$/i.test(line)){section='ingredients';continue;}if(/^(zubereitung|schritte|anleitung|instructions)\s*:?$/i.test(line)){section='steps';continue;}if(section==='steps'){steps.push(line.replace(/^\d+[.)]\s*/,''));continue;}const match=line.match(/^[-•]?\s*(\d+(?:[.,]\d+)?)\s*(kg|g|ml|l|Stück|EL|TL)?\s+(.+)$/i);if(match){let qty=+match[1].replace(',','.');let unit=match[2]||'Stück';if(unit==='kg'){qty*=1000;unit='g';}if(unit==='l'){qty*=1000;unit='ml';}const known=Object.entries(foods).find(([,f])=>f.name.toLowerCase()===match[3].toLowerCase()&&f.unit===unit);ingredients.push({food:known?.[0]||match[3],qty,unit});}else ingredients.push({food:line,qty:0,unit:'?',unclear:true});}return {id:'r'+Date.now(),title:lines[0]||'Neues Rezept',servings:2,ingredients,steps,time:null,prep:null,kcal:null,protein:null,carbs:null,fat:null,diet:'Ungeprüft',meal:['Mittagessen','Abendessen'],tags:['Importiert'],verified:false,source:'Textimport · Angaben prüfen'};}

// A single meal, isolated from the weekly plan and its budget.
export function quickSuggestions(state,options){
 const {budget,portions,maxTime,meal,highProtein,minProtein,usePantry}=options;
 if(!Number.isFinite(budget)||budget<0||!Number.isInteger(portions)||portions<1||portions>30||!Number.isFinite(maxTime)||maxTime<1||!Number.isFinite(minProtein)||minProtein<0)throw new Error('Bitte gültiges Budget, Zeitlimit und 1–30 Portionen eingeben.');
 const settings={...normalizeSettings(state.settings),mealTimes:{[meal]:maxTime},maxTime,goals:[...new Set([...state.settings.goals,...(highProtein?['Proteinreich']:[])])],minProtein:Math.max(highProtein?minProtein:0,state.settings.goals.includes('Proteinreich')?state.settings.minProtein:0)};
 const pool=[...state.recipes.filter(r=>!r.generated),...generateRecipeCandidates(settings,meal)];
 const candidates=pool.filter(r=>eligible(r,settings,meal)).map(r=>{const rows=shopping({quick:{recipe:r.id,portions}},pool,usePantry?state.pantry:{},state.prices);const total=totals(rows);return {recipe:r,rows,...total,portions};}).filter(x=>!x.unknown).sort((a,b)=>a.buy-b.buy||a.recipe.time-b.recipe.time);
 return {matches:candidates.filter(x=>Math.round(x.buy*100)<=Math.round(budget*100)),alternatives:candidates.filter(x=>Math.round(x.buy*100)>Math.round(budget*100)).slice(0,3)};
}

seeds.push(make('linsen-schnell','Schnelle Linsen-Tomaten-Pfanne',[['linsen',240],['tomaten',300]],['Linsen abspülen und Tomaten klein schneiden.','Linsen und Tomaten mit etwa 600 ml Wasser aufkochen.','15–20 Minuten sanft köcheln lassen, bis die Linsen weich sind. Bei Bedarf Wasser ergänzen. Nach Geschmack würzen.'],25,470,31,72,3,{prep:5,image:'lentils',tags:['Günstig','Proteinreich','Schnell']}));

// Nutrition and prices below are transparent planning estimates, not product data.
Object.assign(foods,{
 skyr:{name:'Skyr natur',unit:'g',pack:500,price:1.79,group:'Kühlregal',allergens:['Milch']},
 joghurt:{name:'Sojajoghurt natur (Soja, Wasser, Kulturen)',unit:'g',pack:500,price:1.49,group:'Kühlregal',allergens:['Soja']},
 bohnen:{name:'Weiße Bohnen (gekocht, Abtropfgewicht)',unit:'g',pack:240,price:.89,group:'Konserven',allergens:[]},
 beeren:{name:'Beeren frisch',unit:'g',pack:300,price:2.49,group:'Obst & Gemüse',allergens:[]},
 apfel:{name:'Apfel',unit:'g',pack:1000,price:2.49,group:'Obst & Gemüse',allergens:[]},
 gurke:{name:'Gurke',unit:'g',pack:400,price:.89,group:'Obst & Gemüse',allergens:[]},
 karotte:{name:'Karotten',unit:'g',pack:1000,price:1.29,group:'Obst & Gemüse',allergens:[]},
 brokkoli:{name:'Brokkoli',unit:'g',pack:500,price:1.79,group:'Obst & Gemüse',allergens:[]},
 couscous:{name:'Couscous (Weizen)',unit:'g',pack:500,price:1.49,group:'Getreide & Hülsenfrüchte',allergens:['Gluten']},
 kartoffel:{name:'Kartoffeln',unit:'g',pack:1000,price:1.49,group:'Obst & Gemüse',allergens:[]},
 hafergf:{name:'Haferflocken, zertifiziert glutenfrei',unit:'g',pack:500,price:1.79,group:'Getreide & Hülsenfrüchte',allergens:[]}
});
const nutrients={reis:[350,7,78,1],linsen:[350,25,52,2],kicher:[130,7,18,3],hafer:[370,13,59,7],hafergf:[370,13,59,7],pasta:[350,13,65,3],tomaten:[20,1,3,0],spinat:[25,3,1,0],zucchini:[20,2,2,0],banane:[105,1,24,0],kokos:[180,2,3,18],feta:[260,14,1,22],ei:[78,7,1,5],tofu:[130,15,1,8],oel:[820,0,0,91],skyr:[65,11,4,0],joghurt:[45,4,2,2],bohnen:[100,8,14,1],beeren:[40,1,7,0],apfel:[52,0,12,0],gurke:[15,1,2,0],karotte:[40,1,8,0],brokkoli:[35,3,4,0],couscous:[350,12,68,2],kartoffel:[75,2,16,0]};
export const goalRules={minProtein:25,maxCarbs:30,maxKcal:450,minKcal:650};
export function normalizeSettings(s){return {...s,...goalRules,mealTimes:s.mealTimes||Object.fromEntries(meals.map(m=>[m,s.maxTime??(m==='Frühstück'||m==='Snack'?10:30)])),goals:s.goals||[],allergens:s.allergens||[],excludes:s.excludes||'',diet:s.diet||'Keine Einschränkung'};}
export function periodOffsets(from,to,weekdays){const a=new Date(from+'T12:00:00Z'),b=new Date(to+'T12:00:00Z');const count=Math.round((b-a)/86400000)+1;if(!Number.isFinite(count)||count<1||count>28)throw Error('Bitte einen Zeitraum von 1 bis 28 Tagen auswählen.');const out=[];for(let i=0;i<count;i++){const d=new Date(+a+i*86400000);if(weekdays.includes((d.getUTCDay()+6)%7))out.push(i);}return {count,days:out};}
function newRecipe(title,ingredients,time,steps,meal,nonce){const sums=[0,0,0,0];for(const i of ingredients){const f=foods[i.food];const factor=i.qty/(f.unit==='Stück'?1:100);nutrients[i.food].forEach((n,j)=>sums[j]+=factor*n);}return {id:'gen-'+nonce+'-'+Math.random().toString(36).slice(2,10),title,ingredients,servings:1,time,prep:Math.min(5,time),steps,diet:ingredients.some(i=>['Milch','Eier'].some(a=>foods[i.food].allergens.includes(a)))?'Vegetarisch':'Vegan',meal:[meal],tags:['Neu zusammengestellt','Schnell'],source:'Regelbasiert neu zusammengestellt · Zutaten-Nährwerte und Zeiten geschätzt · keine externe KI',verified:true,kcal:Math.round(sums[0]),protein:Math.round(sums[1]),carbs:Math.round(sums[2]),fat:Math.round(sums[3]),image:meal==='Frühstück'?'porridge':'bowl',generated:true};}
const ingredient=(food,qty)=>({food,qty});
export function generateRecipeCandidates(settings,meal,nonce=Date.now()){
 const s=normalizeSettings(settings),limit=s.mealTimes?.[meal]??s.maxTime??30;const out=[];
 const add=(title,items,time,steps)=>{const r=newRecipe(title,items,time,steps,meal,nonce);if(eligible(r,{...s,maxTime:limit},meal))out.push(r);};
 const label=k=>foods[k].name.split(' (')[0];
 if(meal==='Frühstück'||meal==='Snack'){
  for(const dairy of ['skyr','joghurt'])for(const grain of ['hafer','hafergf'])for(const fruit of ['beeren','apfel','banane'])for(const amount of [25,50,80]){
   const dq=s.goals.includes('Proteinreich')?(dairy==='skyr'?250:400):200;
   add(`${label(dairy)} mit ${label(fruit)} und ${label(grain)}`,[ingredient(dairy,dq),ingredient(grain,amount),ingredient(fruit,fruit==='banane'?1:120)],5,['Obst waschen, bei Bedarf schälen und klein schneiden.','Joghurt oder Skyr mit den Haferflocken verrühren. Bei Bedarf etwas Wasser ergänzen.','Obst darauf verteilen und direkt servieren.']);
  }
  for(const fruit of ['beeren','apfel','banane'])for(const amount of [150,200,250])add(`Tofu-${label(fruit)}-Creme`,[ingredient('tofu',amount),ingredient(fruit,fruit==='banane'?1:150)],7,['Obst waschen und klein schneiden. Tofu abtropfen lassen.','Tofu mit dem Obst und 2–4 Esslöffeln Wasser fein pürieren.','In eine Schale füllen und frisch genießen.']);
 }
 for(const protein of ['bohnen','kicher','tofu','ei','linsen'])for(const veg of ['tomaten','zucchini','brokkoli','spinat','karotte','gurke'])for(const base of [null,'reis','pasta','couscous','kartoffel'])for(const scale of [0.8,1,1.25]){
  if(['Frühstück','Snack'].includes(meal)&&(base||protein==='linsen'||veg==='brokkoli'))continue;
  if(veg==='gurke'&&['linsen','ei'].includes(protein))continue;
  const low=s.goals.includes('Low Carb');if(low&&base)continue;
  const high=s.goals.includes('Proteinreich');const energy=s.goals.includes('Kalorienreich');
  const pq=protein==='ei'?(high?4:3):Math.round(({bohnen:high?320:200,kicher:high?350:200,tofu:high?210:150,linsen:high?110:80})[protein]*scale);
  const items=[ingredient(protein,pq),ingredient(veg,200)];if(base)items.push(ingredient(base,base==='kartoffel'?250:energy?110:60));
  const cold=['bohnen','kicher','tofu'].includes(protein)&&['tomaten','gurke','karotte'].includes(veg)&&!base;
  const time=Math.max(cold?8:protein==='linsen'?25:15,base==='reis'?25:base==='kartoffel'?25:base==='pasta'?20:base==='couscous'?10:0);
  const steps=[];
  if(base)steps.push(base==='couscous'?'Couscous nach Packungsangabe mit kochendem Wasser übergießen und quellen lassen.':base==='kartoffel'?'Kartoffeln schälen, klein würfeln und in Wasser weich garen (etwa 15–20 Minuten).':`${label(base)} nach Packungsangabe in Wasser garen.`);
  steps.push(protein==='linsen'?'Trockene rote Linsen gründlich spülen und mit etwa der dreifachen Menge Wasser 15–20 Minuten weich kochen; bei Bedarf Wasser ergänzen.':['bohnen','kicher'].includes(protein)?'Bereits gegarte Hülsenfrüchte abgießen und gründlich abspülen.':protein==='ei'?'Eier in eine Schale aufschlagen und verquirlen.':'Naturtofu abtropfen lassen und würfeln.');
  steps.push(`${label(veg)} waschen${veg==='spinat'?'':', bei Bedarf schälen und klein schneiden'}.`);
  if(cold)steps.push('Die vorbereiteten Zutaten in einer Schale vermengen. Nach Geschmack würzen und direkt servieren.');
  else{steps.push(veg==='gurke'?'Die Gurke als frische Beilage beiseitestellen.':`Gemüse mit einigen Esslöffeln Wasser in einer beschichteten Pfanne 8–12 Minuten garen; bei Bedarf Wasser nachgießen.`);steps.push(protein==='ei'?'Eier zum gegarten Gemüse geben und unter Rühren vollständig stocken lassen.':`${label(protein)} dazugeben und vollständig durcherhitzen${protein==='tofu'?' (etwa 5 Minuten)':''}.`);steps.push(base?'Mit der gegarten Beilage anrichten und nach Geschmack würzen.':'In einer Schale anrichten und nach Geschmack würzen.');}
  add(`${label(protein)}-${label(veg)}-${cold?'Schale':'Pfanne'}${base?' mit '+label(base):''}`,items,time,steps);
 }
 // Shuffle real ingredient/quantity variants, rather than renaming existing recipes.
 for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}
 return out.slice(0,150);
}
