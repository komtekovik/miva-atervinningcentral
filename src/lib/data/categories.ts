import type { CategoryData } from '../types';

export const categories: CategoryData[] = [
	{
		id: 'matfett',
		title: 'Matfett',
		description: 'Alla typer av matfett och matoljor som används vid eller uppkommer från matlagning av vegetabiliskt eller animaliskt ursprung. Även olja från inlagda livsmedel som till exempel tonfisk, oliver och soltorka­de tomater.',
		note: 'Samla fettet i en PET-flaska och använd gärna en fettratt som du kostnadsfritt kan få av personalen på återvinningscentralen. Tänk på att du inte får flaskan i retur.',
		color: 'rgb(11,178,89)'
	},
	{
		id: 'farligt_avfall',
		title: 'Farligt avfall',
		description: 'Spillolja/diesel (max 25 liter), färgrester, kemikalier, lysrör, bilbatterier och dylikt.',
		note: 'Större mängder spillolja/diesel lämnas mot kostnad. Hjälp med lossning av fat är möjlig mellan kl 7.00-15.30. Här lämnas även TV, bildskärm och kabel liksom batterier och ljuskällor. Farligt avfall är generellt kemiska produkter som är märkta med farosymboler. Men även elavfall, batterier, ljuskällor och impregnerat trä klassas som farligt avfall och måste tas om hand på rätt sätt. För att lämna asbest, kontakta personalen.',
		color: 'rgb(237,27,46)'
	},
	{
		id: 'tra',
		title: 'Trä',
		description: 'Brädor, plank, spånskivor, plywood, masonit, trädörrar utan glas och trämöbler. Får innehålla spik och beslag samt färg, lack och lim.',
		color: 'rgb(0,72,109)'
	},
	{
		id: 'metallforpackningar',
		title: 'Metallförpackningar',
		description: 'Metallock/kapsyler, aluminiumfolie och konservburkar.',
		color: 'rgb(85,109,121)'
	},
	{
		id: 'vitvaror',
		title: 'Vitvaror',
		description: 'Spisar, diskmaskiner, köksfläktar, tvättmaskiner, torktumlare och torkskåp.',
		note: 'Tänk på att kyl och frys sorteras separat.',
		color: 'rgb(246,139,30)'
	},
	{
		id: 'energiatervinning',
		title: 'Energiåtervinning',
		description: 'Skumgummimadrasser, möbeldynor, mattor och större frigolit. Allt brännbart avfall som inte ryms i ditt sopkärl. Även lupiner och andra invasiva växter ska sorteras som Energiåtervinning.',
		note: 'Tänk på att hårt material får vara max 80 cm långt. Längre material ska kastas i containern Stoppade möbler. Alla säckar med avfall måste vara genomskinliga. Tänk på att inga förpackningar lämnas här utan sorteras i separata behållare.',
		color: 'rgb(14,12,20)'
	},
	{
		id: 'wc',
		title: 'Kund-WC',
		description: 'Här i mottagningen för farligt avfall hittar du också vår kundtoalett som är öppen när återvinningscentralen är bemannad.',
		color: '#1e3c72'
	},
	{
		id: 'gips',
		title: 'Gips',
		description: 'Gipsskivor, gipsbruk och gipspulver.',
		color: 'rgb(0,71,120)'
	},
	{
		id: 'pappersforpackningar',
		title: 'Pappersförpackningar',
		description: 'Wellpapp, papprör, kartonger, flyttlådor, matförpackningar, äggkartonger och papperspåsar/kassar.',
		color: 'rgb(186,155,105)'
	},
	{
		id: 'plastforpackningar',
		title: 'Plastförpackningar',
		description: 'Mjuka/hårda plastförpackningar, plastflaskor, plastburkar, plasthinkar, plastdunkar, plastpåsar/kassar och frigolit.',
		color: 'rgb(145,52,147)'
	},
	{
		id: 'porslin_keramik',
		title: 'Porslin & Keramik',
		description: 'WC-stolar, handfat, klinker, kakel, keramik och lerkrukor.',
		color: 'rgb(0,71,120)'
	},
	{
		id: 'fiskeredskap',
		title: 'Fiskeredskap',
		description: 'Fiskespö, fiskedrag, nät och annan fiskeutrustning helt eller delvis gjorda av plast.',
		color: 'rgb(145,52,147)'
	},
	{
		id: 'gras',
		title: 'Gräs & Löv',
		description: 'Gräs, löv, kottar, barr, växter, fallfrukt och jord.',
		note: 'Tänk på att tömda säckar inte ska kastas här utan i containern Energiåtervinning.',
		color: 'rgb(2,107,50)'
	},
	{
		id: 'storpantarmaskin',
		title: 'Storpantarmaskin',
		description: 'Panta dina burkar och PET-flaskor i vår storpantarmaskin. Du behöver inte röra burkarna och PET-flaskorna, utan häller dem direkt i maskinen. Du kan välja mellan att få en värdecheck som du kan handla för i de flesta matbutiker, få pengarna insatta på ditt bankkonto eller skänka pengarna till din favoritförening eller välgörenhet.',
		color: '#1e3c72'
	},
	{
		id: 'ris_grenar',
		title: 'Ris & Grenar',
		description: 'Kvistar, sly, häck-klipp, vedträ, stockar och huggkubbar.',
		note: 'Tänk på att stubbar med rotverk och rötter sorteras för sig.',
		color: 'rgb(2,107,50)'
	},
	{
		id: 'ofargat_glas',
		title: 'Ofärgat glas',
		description: 'Flaskor och burkar av ofärgat glas.',
		color: 'rgb(19,183,149)'
	},
	{
		id: 'hardplast',
		title: 'Hårdplast',
		description: 'Skurhinkar, plastlådor, plastmöbler, plaströr, blomkrukor och plastleksaker.',
		note: 'Tänk på att inga förpackningar lämnas här utan sorteras i separat behållare.',
		color: 'rgb(145,52,147)'
	},
	{
		id: 'impregnerat_tra',
		title: 'Tryckimpregnerat trä',
		description: 'Tryckimpregnerat trä och slipers. Kan innehålla arsenik, krom och andra farliga ämnen.',
		color: 'rgb(237,26,56)'
	},
	{
		id: 'sten_grus',
		title: 'Sten, Grus',
		description: 'Betongplintar, marksten, trädgårdsplattor, tegelstenar och tegelpannor.',
		note: 'För att lämna asbest, kontakta personalen.',
		color: 'rgb(0,77,118)'
	},
	{
		id: 'metall',
		title: 'Metall',
		description: 'Värmeljuskoppar, järnskrot, gräsklippare, cyklar, sparkar, badkar, metallstolar, kastruller och övriga metallprodukter som inte är förpackningar.',
		color: 'rgb(90,108,117)'
	},
	{
		id: 'textilinsamling',
		title: 'Kläder och textil – helt och rent',
		description: 'I PMU:s insamlingsbehållare lämnar du kläder, hemtextil och skor. Helt, rent och förpackat i förslutna påsar.',
		note: 'Trasiga, smutsiga och mögliga textilier ska du slänga i hushållssoporna. Det gäller även strumpor och underkläder. På våra återvinningscentraler lämnar du dessa textilier i behållaren för energiåtervinning..',
		color: 'rgb(131,194,81)'
	},
	{
		id: 'elektronikavfall',
		title: 'Elektronikavfall',
		description: 'Dator, telefon, dammsugare, mikrovågsugn, elhandverktyg, armaturer, kabel och dylikt. Allt som har batteri eller sladd! Däremot lämnas TV, bildskärm, värmepump och kabel separat i byggnaden för farligt avfall. Där lämnas även batterier och ljuskällor.',
		color: 'rgb(246,139,30)'
	},
	{
		id: 'pallinsamling',
		title: 'Pallinsamling',
		description: 'Återanvändning av helpallar med måtten 1200 x 800 och halvpallar med måtten 800 x 600, exempelvis byggpall, SJ-pall, EUR-pall och engångspall. Även pallkragar. Tänk på att trasiga lastpallar och pallkragar inte ska lämnas här utan kastas i containern Trä.',
		color: 'rgb(0,71,120)'
	},
	{
		id: 'sport_fritidsutrustning',
		title: 'Sport- och fritidsutrustning',
		description: 'Här kan du skänka sport- och friluftsutrustning till Fritidsbanken. Det kan vara skidor, skridskor, inlines, flytvästar, tält, bollar av olika slag, klubbor, fiskespön, fotbollsskor, hjälmar, stormkök och mycket mer.',
		note: 'Mottagningen och hanteringen av sport- och fritidsutrustning sköts av Fritidsbanken. På Fritidsbanken kan vem som helst kostnadsfritt låna sport- och friluftsutrustning i 14 dagar. Fritidsbanken finns på Sjögatan 5 i Örnsköldsvik.',
		color: 'rgb(126,195,82)'
	},
	{
		id: 'planglas',
		title: 'Planglas',
		description: 'Balkongdörr med karm, fönster med karm, fönsterglas, spegelglas och glasskivor. Alla typer av plana glas. Kan vara färgade, armerade eller laminerade glasskivor.',
		color: 'rgb(0,71,120)'
	},
	{
		id: 'asfalt',
		title: 'Asfalt',
		description: 'Mindre mängder av asfalt.',
		color: 'rgb(0,71,120)'
	},
	{
		id: 'stubbar_rotter',
		title: 'Stubbar & Rötter',
		description: 'Stubbar med rotverk som varit under mark och som kan innehålla stenar. ',
		note: 'Tänk på att vedträ, stockar och huggkubbar ska lämnas som Ris & grenar.',
		color: 'rgb(2,107,50)'
	},
	{
		id: 'stoppade_mobler',
		title: 'Stoppade möbler',
		description: 'Dörrar med isolering, laminatgolv, skidor, tavlor och dylikt. Presenningar och plastslangar lämnas också här. Allt brännbart material som är över 80 cm långt och som inte är av trä, metall eller plast hör hemma i denna kategori.',
		color: 'rgb(14,12,20)'
	},
	{
		id: 'fargat_glas',
		title: 'Färgat glas',
		description: 'Flaskor och burkar av färgat glas.',
		note: 'Tänk på att färgat och ofärgat glas sorteras var för sig.',
		color: 'rgb(19,183,149)'
	},
	{
		id: 'aterbruk',
		title: 'Återbruk',
		description: 'I vår mottagning för återbruk kan du lämna möbler, heminredning, husgeråd och cyklar så kan det komma till glädje för någon annan.',
		note: 'Mottagningen och hantering av återbruk sköts av Startpunkten. De som deltar i Startpunktens verksamhet ser över och renoverar inlämnade möbler för att sedan sälja dem som "nya" i Startpunktens återvinningsbutik på Sjögatan 5 i Örnsköldsvik. Tänk på att inte lämna bokhyllor, vävstolar, tjock-TV eller trasiga saker som inte är möbler.',
		color: 'rgb(131,194,81)'
	},
	{
		id: 'kyl_frys',
		title: 'Kyl & Frys',
		description: 'Kylskåp, frysskåp, frysboxar och varmvattenberedare.',
		color: 'rgb(246,139,30)'
	},
	{
		id: 'ej_atervinningsbart',
		title: 'Ej återvinningsbart',
		description: 'Mineralull, glasull, stenull och bruksglas/hushållsglas (t ex dricksglas, glasskålar och prydnadsförmål i glas).',
		note: 'Tänk på att allt avfall som dammar (t ex isolering och sågspån) måste vara förpackat i genomskinliga säckar eller dylikt för att få lämnas.',
		color: 'rgb(14,12,20)'
	}
];