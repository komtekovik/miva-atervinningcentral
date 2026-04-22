import type { TrashItem } from './types';

export const allTrashItems: TrashItem[] = [
	{ name: 'Hel trämöbel', targetId: 'aterbruk', icon: '🪑', category: 'Återbruk' },
	{ name: 'Hel cykel', targetId: 'aterbruk', icon: '🚲', category: 'Återbruk' },
	{ name: 'Fin vas', targetId: 'aterbruk', icon: '🏺', category: 'Återbruk' },
	{ name: 'Fina bestick', targetId: 'aterbruk', icon: '🥄', category: 'Återbruk' },
	{ name: 'Hel kastrull', targetId: 'aterbruk', icon: '🍲', category: 'Återbruk' },
	{ name: 'Hel fåtölj', targetId: 'aterbruk', icon: '💺', category: 'Återbruk' },

	{ name: 'Hela skidor', targetId: 'sport_fritidsutrustning', icon: '🎿', category: 'Sport- och fritidsutrustning' },
	{ name: 'Hela skridskor', targetId: 'sport_fritidsutrustning', icon: '⛸️', category: 'Sport- och fritidsutrustning' },
	{ name: 'Användbart tält', targetId: 'sport_fritidsutrustning', icon: '⛺', category: 'Sport- och fritidsutrustning' },
	{ name: 'Hel flytväst', targetId: 'sport_fritidsutrustning', icon: '🦺', category: 'Sport- och fritidsutrustning' },
	{ name: 'Hel fotboll', targetId: 'sport_fritidsutrustning', icon: '⚽', category: 'Sport- och fritidsutrustning' },
	{ name: 'Hel basketboll', targetId: 'sport_fritidsutrustning', icon: '🏀', category: 'Sport- och fritidsutrustning' },
	{ name: 'Helt tennisracket', targetId: 'sport_fritidsutrustning', icon: '🎾', category: 'Sport- och fritidsutrustning' },
	{ name: 'Hel ishockeyklubba', targetId: 'sport_fritidsutrustning', icon: '🏒', category: 'Sport- och fritidsutrustning' },
	{ name: 'Helt fiskespö', targetId: 'sport_fritidsutrustning', icon: '🎣', category: 'Sport- och fritidsutrustning' },
	{ name: 'Hel cykelhjälm', targetId: 'sport_fritidsutrustning', icon: '⛑️', category: 'Sport- och fritidsutrustning' },

	{ name: 'Hel tröja', targetId: 'textilinsamling', icon: '🧥', category: 'Kläder och textil – helt och rent' },
	{ name: 'Hel byxa', targetId: 'textilinsamling', icon: '👖', category: 'Kläder och textil – helt och rent' },
	{ name: 'Hela skor', targetId: 'textilinsamling', icon: '👞', category: 'Kläder och textil – helt och rent' },
	{ name: 'Fin klänning', targetId: 'textilinsamling', icon: '👗', category: 'Kläder och textil – helt och rent' },
	{ name: 'Hel gardin', targetId: 'textilinsamling', icon: '🪟', category: 'Kläder och textil – helt och rent' },

	{ name: 'Trasig tröja', targetId: 'energiatervinning', icon: '🧥', category: 'Energiåtervinning' },
	{ name: 'Trasig byxa', targetId: 'energiatervinning', icon: '👖', category: 'Energiåtervinning' },
	{ name: 'Utslitna strumpor', targetId: 'energiatervinning', icon: '🧦', category: 'Energiåtervinning' },
	{ name: 'Trasiga skor', targetId: 'energiatervinning', icon: '👞', category: 'Energiåtervinning' },
	{ name: 'Trasigt gosedjur', targetId: 'energiatervinning', icon: '🧸', category: 'Energiåtervinning' },
	{ name: 'Punkterad fotboll', targetId: 'energiatervinning', icon: '⚽', category: 'Energiåtervinning' },
	{ name: 'Trasigt paraply', targetId: 'energiatervinning', icon: '☂️', category: 'Energiåtervinning' },
	{ name: 'Trasig ryggsäck', targetId: 'energiatervinning', icon: '🎒', category: 'Energiåtervinning' },
	{ name: 'Trasig plastleksak', targetId: 'energiatervinning', icon: '🪀', category: 'Energiåtervinning' },
	{ name: 'Skumgummimadrass', targetId: 'energiatervinning', icon: '🛏️', category: 'Energiåtervinning' },
	{ name: 'Trasig matta', targetId: 'energiatervinning', icon: '🧶', category: 'Energiåtervinning' },

	{ name: 'Trasig cykel', targetId: 'metall', icon: '🚲', category: 'Metall' },
	{ name: 'Rostig stekpanna', targetId: 'metall', icon: '🍳', category: 'Metall' },
	{ name: 'Skev kastrull', targetId: 'metall', icon: '🍲', category: 'Metall' },
	{ name: 'Trasig hammare', targetId: 'metall', icon: '🔨', category: 'Metall' },
	{ name: 'Rostig skruv', targetId: 'metall', icon: '🔩', category: 'Metall' },
	{ name: 'Trasig yxa', targetId: 'metall', icon: '🪓', category: 'Metall' },
	{ name: 'Trasig gräsklippare', targetId: 'metall', icon: '🚜', category: 'Metall' },

	{ name: 'Trasig tjock-TV', targetId: 'farligt_avfall', icon: '📺', category: 'Farligt avfall' },
	{ name: 'Trasig platt-TV', targetId: 'farligt_avfall', icon: '🖥️', category: 'Farligt avfall' },
	{ name: 'Urladdat batteri', targetId: 'farligt_avfall', icon: '🔋', category: 'Farligt avfall' },
	{ name: 'Trasig glödlampa', targetId: 'farligt_avfall', icon: '💡', category: 'Farligt avfall' },
	{ name: 'Gammalt oljefat', targetId: 'farligt_avfall', icon: '🛢️', category: 'Farligt avfall' },
	{ name: 'Intorkad målarfärg', targetId: 'farligt_avfall', icon: '🎨', category: 'Farligt avfall' },
	{ name: 'Gammalt nagellack', targetId: 'farligt_avfall', icon: '💅', category: 'Farligt avfall' },
	{ name: 'Spillolja', targetId: 'farligt_avfall', icon: '🛢️', category: 'Farligt avfall' },

	{ name: 'Trasig bärbar dator', targetId: 'elektronikavfall', icon: '💻', category: 'Elektronikavfall' },
	{ name: 'Trasig mobiltelefon', targetId: 'elektronikavfall', icon: '📱', category: 'Elektronikavfall' },
	{ name: 'Trasig skrivare', targetId: 'elektronikavfall', icon: '🖨️', category: 'Elektronikavfall' },
	{ name: 'Trasig mikrovågsugn', targetId: 'elektronikavfall', icon: '📟', category: 'Elektronikavfall' },
	{ name: 'Kasserad sladd', targetId: 'elektronikavfall', icon: '🔌', category: 'Elektronikavfall' },
	{ name: 'Trasig dammsugare', targetId: 'elektronikavfall', icon: '🧹', category: 'Elektronikavfall' },

	{ name: 'Trasig trästol', targetId: 'tra', icon: '🪑', category: 'Trä' },
	{ name: 'Trasig byrå', targetId: 'tra', icon: '🗄️', category: 'Trä' },
	{ name: 'Trasig trädörr', targetId: 'tra', icon: '🚪', category: 'Trä' },
	{ name: 'Avbruten trästege', targetId: 'tra', icon: '🪜', category: 'Trä' },
	{ name: 'Plywoodskiva', targetId: 'tra', icon: '📜', category: 'Trä' },

	{ name: 'Tom kartonglåda', targetId: 'pappersforpackningar', icon: '📦', category: 'Pappersförpackningar' },
	{ name: 'Tom papperskasse', targetId: 'pappersforpackningar', icon: '🛍️', category: 'Pappersförpackningar' },
	{ name: 'Tomt mjölkpaket', targetId: 'pappersforpackningar', icon: '🥛', category: 'Pappersförpackningar' },
	{ name: 'Tom pizzakartong', targetId: 'pappersforpackningar', icon: '🍕', category: 'Pappersförpackningar' },
	{ name: 'Tom äggkartong', targetId: 'pappersforpackningar', icon: '🥚', category: 'Pappersförpackningar' },

	{ name: 'Tom plastflaska', targetId: 'plastforpackningar', icon: '🍼', category: 'Plastförpackningar' },
	{ name: 'Tom plastburk', targetId: 'plastforpackningar', icon: '🫙', category: 'Plastförpackningar' },
	{ name: 'Tom plasthink', targetId: 'plastforpackningar', icon: '🪣', category: 'Plastförpackningar' },
	{ name: 'Tom schampoflaska', targetId: 'plastforpackningar', icon: '🧴', category: 'Plastförpackningar' },
	{ name: 'Kasserat godispapper', targetId: 'plastforpackningar', icon: '🍬', category: 'Plastförpackningar' },

	{ name: 'Tom konservburk', targetId: 'metallforpackningar', icon: '🥫', category: 'Metallförpackningar' },
	{ name: 'Använd aluminiumfolie', targetId: 'metallforpackningar', icon: '🌯', category: 'Metallförpackningar' },
	{ name: 'Kapsyl', targetId: 'metallforpackningar', icon: '🍾', category: 'Metallförpackningar' },

	{ name: 'Trasig toalettstol', targetId: 'porslin_keramik', icon: '🚽', category: 'Porslin & Keramik' },
	{ name: 'Sprucken tallrik', targetId: 'porslin_keramik', icon: '🍽️', category: 'Porslin & Keramik' },
	{ name: 'Trasig kaffekopp', targetId: 'porslin_keramik', icon: '☕', category: 'Porslin & Keramik' },
	{ name: 'Trasig lerkruka', targetId: 'porslin_keramik', icon: '🏺', category: 'Porslin & Keramik' },
	{ name: 'Sprucken kakelplatta', targetId: 'porslin_keramik', icon: '⬜', category: 'Porslin & Keramik' },

	{ name: 'Trasig soffa', targetId: 'stoppade_mobler', icon: '🛋️', category: 'Stoppade möbler' },
	{ name: 'Trasig säng', targetId: 'stoppade_mobler', icon: '🛏️', category: 'Stoppade möbler' },
	{ name: 'Söndrig fåtölj', targetId: 'stoppade_mobler', icon: '💺', category: 'Stoppade möbler' },
	{ name: 'Trasigt laminatgolv', targetId: 'stoppade_mobler', icon: '🟫', category: 'Stoppade möbler' },
	{ name: 'Trasig tavla', targetId: 'stoppade_mobler', icon: '🖼️', category: 'Stoppade möbler' },

	{ name: 'Högt gräs', targetId: 'gras', icon: '🌱', category: 'Gräs & Löv' },
	{ name: 'Torra löv', targetId: 'gras', icon: '🍂', category: 'Gräs & Löv' },
	{ name: 'Vissen blomma', targetId: 'gras', icon: '🥀', category: 'Gräs & Löv' },
	{ name: 'Fallfrukt', targetId: 'gras', icon: '🍎', category: 'Gräs & Löv' },

	{ name: 'Avbruten kvist', targetId: 'ris_grenar', icon: '🎋', category: 'Ris & Grenar' },
	{ name: 'Ruttet vedträ', targetId: 'ris_grenar', icon: '🪵', category: 'Ris & Grenar' },
	{ name: 'Torkad julgran', targetId: 'ris_grenar', icon: '🎄', category: 'Ris & Grenar' },
	{ name: 'Sly', targetId: 'ris_grenar', icon: '🌾', category: 'Ris & Grenar' },

	{ name: 'Sprucken tegelsten', targetId: 'sten_grus', icon: '🧱', category: 'Sten, Grus' },
	{ name: 'Gråsten', targetId: 'sten_grus', icon: '🪨', category: 'Sten, Grus' },
	{ name: 'Betongplint', targetId: 'sten_grus', icon: '🏛️', category: 'Sten, Grus' },

	{ name: 'Trasig pulka', targetId: 'hardplast', icon: '🛷', category: 'Hårdplast' },
	{ name: 'Trasig skurhink', targetId: 'hardplast', icon: '🪣', category: 'Hårdplast' },
	{ name: 'Trasig plastkruka', targetId: 'hardplast', icon: '🪴', category: 'Hårdplast' },

	{ name: 'Rostig fiskekrok', targetId: 'fiskeredskap', icon: '🪝', category: 'Fiskeredskap' },
	{ name: 'Trasigt fiskenät', targetId: 'fiskeredskap', icon: '🕸️', category: 'Fiskeredskap' },
	{ name: 'Trasigt fiskespö', targetId: 'fiskeredskap', icon: '🎣', category: 'Fiskeredskap' },

	{ name: 'Gammalt smör', targetId: 'matfett', icon: '🧈', category: 'Matfett' },
	{ name: 'Gammal frityrolja', targetId: 'matfett', icon: '🍟', category: 'Matfett' },
	{ name: 'Olja från inlagda tomater', targetId: 'matfett', icon: '🫙', category: 'Matfett' },

	{ name: 'Trasig spegel', targetId: 'planglas', icon: '🪞', category: 'Planglas' },
	{ name: 'Trasigt fönster', targetId: 'planglas', icon: '🪟', category: 'Planglas' },

	{ name: 'Krossat dricksglas', targetId: 'ej_atervinningsbart', icon: '🥃', category: 'Ej återvinningsbart' },
	{ name: 'Använd blöja', targetId: 'ej_atervinningsbart', icon: '👶', category: 'Ej återvinningsbart' },
	{ name: 'Glasull', targetId: 'ej_atervinningsbart', icon: '☁️', category: 'Ej återvinningsbart' },

	{ name: 'Ruttet tågräls (Slipers)', targetId: 'impregnerat_tra', icon: '🛤️', category: 'Tryckimpregnerat trä' },
	{ name: 'Gammal impregnerad trall', targetId: 'impregnerat_tra', icon: '🪵', category: 'Tryckimpregnerat trä' },

	{ name: 'Utryckt trädstubbe', targetId: 'stubbar_rotter', icon: '🪵', category: 'Stubbar & Rötter' },
	{ name: 'Uppgrävda trädrötter', targetId: 'stubbar_rotter', icon: '🪢', category: 'Stubbar & Rötter' },

	{ name: 'Uppbruten asfalt', targetId: 'asfalt', icon: '🛣️', category: 'Asfalt' },

	{ name: 'Trasig kyl', targetId: 'kyl_frys', icon: '🥶', category: 'Kyl & Frys' },
	{ name: 'Trasig frysbox', targetId: 'kyl_frys', icon: '❄️', category: 'Kyl & Frys' },

	{ name: 'Trasig spis', targetId: 'vitvaror', icon: '🍳', category: 'Vitvaror' },
	{ name: 'Trasig tvättmaskin', targetId: 'vitvaror', icon: '🧺', category: 'Vitvaror' },

	{ name: 'Trasig gipsskiva', targetId: 'gips', icon: '🧱', category: 'Gips' },
	{ name: 'Gipsbruk', targetId: 'gips', icon: '🏺', category: 'Gips' },

	{ name: 'Tom ofärgad glasflaska', targetId: 'ofargat_glas', icon: '🍼', category: 'Ofärgat glas' },
	{ name: 'Tom ofärgad glasburk', targetId: 'ofargat_glas', icon: '🫙', category: 'Ofärgat glas' },

	{ name: 'Tom färgad glasflaska', targetId: 'fargat_glas', icon: '🍾', category: 'Färgat glas' },
	{ name: 'Tom färgad glasburk', targetId: 'fargat_glas', icon: '🍯', category: 'Färgat glas' },

	{ name: 'Hel EUR-pall', targetId: 'pallinsamling', icon: '🇪🇺', category: 'Pallinsamling' },
	{ name: 'Hel pallkrage', targetId: 'pallinsamling', icon: '🔲', category: 'Pallinsamling' },

	{ name: 'Pantburk', targetId: 'storpantarmaskin', icon: '🥫', category: 'Storpantarmaskin' },
	{ name: 'PET-flaska med pant', targetId: 'storpantarmaskin', icon: '🍾', category: 'Storpantarmaskin' }
];