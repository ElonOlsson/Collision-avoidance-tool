# Infviz.TestBoilerplate
Start för kodutvärdering



Uppgiften är till för att vi ska skapa oss en uppfattning om din förmåga att lösa programmeringsproblem. Således, för att hjälpa oss få en uppfattning, om du har frågor, fråga oss, läs dokumentation eller googla, men fråga inte någon annan. Någon annan kanske inte kan hjälpa dig när du arbetar hos oss, men du kommer diskutera lösningar med oss. 

Diskutera problem med oss innan du skriver på t.ex. Stack Overflow. 
 
**Vi kommer bedöma:**
- Problemlösningsförmåga
- Kunskapsbredd och djup
- Kodstruktur
- Interaktion och design 

**Du behöver inte vara bra på allt, men du får en chans att visa vad du är bra på.**
- Du får två JSON-filer med data och du ska visualisera denna på lämpligt sätt
- Du kan antingen bygga på en boilerplate vi gjort med typescript och react eller välja något helt annat, men det ska vara en webbapplikation
- Du kan givetvis använda bibliotek som chartjs, d3 eller något annat
- Du behöver inte ha cross-browser support, det räcker att det funkar i Chrome
    
Programmet ska vara interaktivt på något vis, till exempel:
- Aggregera (summera eller medelvärdesbilda t.ex.) baserat på något dataegenskap
- Filtrera objekt baserat på datavärden
- shipId i voyages.json motsvarar shipId ships.json, dessa kan användas för åstadkomma en navigering eller drilldown

# Kom igång

För att köra boilerplateprojektet behöver du installera Node. Sedan kan du från en kommandoprompt (i projektmappen) köra  

    $ npm install

Följt av

    $ npm run serve

Och då kompileras och servas projektet på http://localhost:8080/dist. Varje gång du sparar kompileras projektet om automatiskt. 

Har du ingen editor för typescript rekommenderar vi Visual Studio Code som finns för alla plattformar. 

Källkoden finns under `./src/` och data under `./data/`. Vill du inte använda React kan du ändå använda dataladdningen som finns i `loadData.ts`.
