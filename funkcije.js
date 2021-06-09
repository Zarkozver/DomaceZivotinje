function PustiZvuk(id) {
    var zvuk = document.getElementById(id);
    zvuk.play();
}

function ZaustaviZvuk(id) {
    var zvuk = document.getElementById(id);
    zvuk.pause();
    zvuk.currentTime = 0;
}
function OpisZivotinje(idZivotinje) {
    var prozor = window.open('', '', 'width=500, height=300');
    if (idZivotinje == 'konj') {
        prozor.document.write("Коњи (лат. Equidae) су разноврсна породица сисара из реда копитара, у којој се налази само један савремен род, Equus, и 41 изумрли род. У ову породицу спадају животиње које се обично називају коњима, магарцима и зебрама. Разграничење појединих врста је још и данас спорно. Домаћи коњ и домаћи магарац, доместификовани облици дивљих коња односно афричких дивљих магараца, и данас имају важну улогу као јахаће и теглеће животиње и распрострањени су у целом свету.");
    } else if (idZivotinje == 'krava') {
        prozor.document.write("Domaće govedo ili domaće goveče[1] (lat. Bos taurus) je pripitomljen potomak divljeg goveda ili tura (Bos primigenius). To je vrsta velikih sisara preživara, visine od 120 do 150 cm i težine 600 do 800 kg. Razlikuju se dve glavne podvrste domaćeg goveda: domaća krava u Evropi (Bos taurus taurus, syn. Bos primigenius taurus) i zebu (Bos taurus indicus, syn. Bos primigenius f. taurus), kome pojedini naučnici dodaju Bos taurus primigenius, smatrajući ga potomkom tura, izumrlog u XVII veku.");
    } else if (idZivotinje == 'petao') {
        prozor.document.write("Петао (ијек. пијетао) врста је птице, мужјак кокошке (лат. Gallus gallus domesticus). Петлови су крупнији од кокошака и препознатљиви су по црвеној крести на врху главе. Полигамни су и обично се држе са више кокошака. Оглашава се кукурикањем.");
    } else if (idZivotinje == 'ovca') {
        prozor.document.write("Овца или домаћа овца (лат. Ovis aries) је домаћа животиња и спада у рогате преживаре, папкаре, вероватно настала доместификацијом муфлона у пределима јужне и југозападне Азије. Овце се гаје још од млађег каменог доба и од њих се добија месо, млеко и вуна.[1] Овчија вуна је у најширој употреби од свих врста вуна, а поступак којим се добија назива се стригање (стрижа, шишање оваца).");
    } else if (idZivotinje == 'koza') {
        prozor.document.write("Коза (лат. Capra) је назив рода папкара из породице шупљорожаца (Bovidae), односно потпородице коза и оваца (Caprinae). Врсте овог рода насељавају јужне делове Палеарктика. Домаћа коза изгледа потиче са Блиског и Средњег истока и северне Африке очигледно је да је животиња сушних предела и шикара. Остале козе су све брдске.Дивље козе су животиње планинских станишта.Врло су окретне и издржљиве, способне су да се пењу на голе стене и да опстану на оскудној вегетацији.Могу се разликовати од рода Ovis, који обухвата овце, по присуству мирисних жлезда близу папака, у препонама и пред очима, и одсуство других жлезда лица, и присуству браде код мужјака, и бездлаких жуљева на коленима предњих ногу.[1]");
    }
}