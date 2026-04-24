import type { TrashItem } from './types';

export const allTrashItems: TrashItem[] = [
    { name: 'Hel Trämöbel', targetId: 'aterbruk', icon: '🪑', category: 'Återbruk' },
    { name: 'Fin Cykel', targetId: 'aterbruk', icon: '🚲', category: 'Återbruk' },
    { name: 'Fin Vas', targetId: 'aterbruk', icon: '🏺', category: 'Återbruk' },
    { name: 'Fina Bestick', targetId: 'aterbruk', icon: '🍴', category: 'Återbruk' },
    { name: 'Hel Kastrull', targetId: 'aterbruk', icon: '🍲', category: 'Återbruk' },
    { name: 'Fin Fåtölj', targetId: 'aterbruk', icon: '💺', category: 'Återbruk' },

    { name: 'Skidor', targetId: 'sport_fritidsutrustning', icon: '🎿', category: 'Sport- och fritidsutrustning' },
    { name: 'Skridskor', targetId: 'sport_fritidsutrustning', icon: '⛸️', category: 'Sport- och fritidsutrustning' },
    { name: 'Tält', targetId: 'sport_fritidsutrustning', icon: '⛺', category: 'Sport- och fritidsutrustning' },
    { name: 'Flytväst', targetId: 'sport_fritidsutrustning', icon: '🦺', category: 'Sport- och fritidsutrustning' },
    { name: 'Fotboll', targetId: 'sport_fritidsutrustning', icon: '⚽', category: 'Sport- och fritidsutrustning' },
    { name: 'Basketboll', targetId: 'sport_fritidsutrustning', icon: '🏀', category: 'Sport- och fritidsutrustning' },
    { name: 'Tennisracket', targetId: 'sport_fritidsutrustning', icon: '🎾', category: 'Sport- och fritidsutrustning' },
    { name: 'Hockeyklubba', targetId: 'sport_fritidsutrustning', icon: '🏒', category: 'Sport- och fritidsutrustning' },
    { name: 'Fiskespö', targetId: 'sport_fritidsutrustning', icon: '🎣', category: 'Sport- och fritidsutrustning' },
    { name: 'Cykelhjälm', targetId: 'sport_fritidsutrustning', icon: '⛑️', category: 'Sport- och fritidsutrustning' },

    { name: 'Hel tröja', targetId: 'textilinsamling', icon: '👕', category: 'Kläder och textil – helt och rent' },
    { name: 'Hela byxor', targetId: 'textilinsamling', icon: '👖', category: 'Kläder och textil – helt och rent' },
    { name: 'Hela skor', targetId: 'textilinsamling', icon: '👞', category: 'Kläder och textil – helt och rent' },
    { name: 'Fin Klänning', targetId: 'textilinsamling', icon: '👗', category: 'Kläder och textil – helt och rent' },
    { name: 'Hel Gardin', targetId: 'textilinsamling', icon: '🪟', category: 'Kläder och textil – helt och rent' },

    { name: 'Trasig tröja', targetId: 'energiatervinning', icon: '👕', category: 'Energiåtervinning' },
    { name: 'Trasiga byxor', targetId: 'energiatervinning', icon: '👖', category: 'Energiåtervinning' },
    { name: 'Strumpor', targetId: 'energiatervinning', icon: '🧦', category: 'Energiåtervinning' },
    { name: 'Trasiga skor', targetId: 'energiatervinning', icon: '👟', category: 'Energiåtervinning' },
    { name: 'Trasigt Gosedjur', targetId: 'energiatervinning', icon: '🧸', category: 'Energiåtervinning' },
    { name: 'Trasig boll', targetId: 'energiatervinning', icon: '⚽', category: 'Energiåtervinning' },
    { name: 'Trasigt Paraply', targetId: 'energiatervinning', icon: '☂️', category: 'Energiåtervinning' },
    { name: 'Trasig Ryggsäck', targetId: 'energiatervinning', icon: '🎒', category: 'Energiåtervinning' },
    { name: 'Madrass', targetId: 'energiatervinning', icon: '🛏️', category: 'Energiåtervinning' },
    { name: 'Sliten Matta', targetId: 'energiatervinning', icon: '🧶', category: 'Energiåtervinning' },

    { name: 'Trasig cykel', targetId: 'metall', icon: '🚲', category: 'Metall' },
    { name: 'Sliten Stekpanna', targetId: 'metall', icon: '🍳', category: 'Metall' },
    { name: 'Trasig kastrull', targetId: 'metall', icon: '🍲', category: 'Metall' },
    { name: 'Sliten Hammare', targetId: 'metall', icon: '🔨', category: 'Metall' },
    { name: 'Skruv', targetId: 'metall', icon: '🔩', category: 'Metall' },
    { name: 'Sliten Yxa', targetId: 'metall', icon: '🪓', category: 'Metall' },

    { name: 'Tjock-TV', targetId: 'farligt_avfall', icon: '📺', category: 'Farligt avfall' },
    { name: 'Platt-TV', targetId: 'farligt_avfall', icon: '🖥️', category: 'Farligt avfall' },
    { name: 'Batteri', targetId: 'farligt_avfall', icon: '🔋', category: 'Farligt avfall' },
    { name: 'Glödlampa', targetId: 'farligt_avfall', icon: '💡', category: 'Farligt avfall' },
    { name: 'Oljefat', targetId: 'farligt_avfall', icon: '🛢️', category: 'Farligt avfall' },
    { name: 'Målarfärg', targetId: 'farligt_avfall', icon: '🎨', category: 'Farligt avfall' },
    { name: 'Nagellack', targetId: 'farligt_avfall', icon: '💅', category: 'Farligt avfall' },
    { name: 'Spillolja', targetId: 'farligt_avfall', icon: '🛢️', category: 'Farligt avfall' },

    { name: 'Laptop', targetId: 'elektronikavfall', icon: '💻', category: 'Elektronikavfall' },
    { name: 'Mobiltelefon', targetId: 'elektronikavfall', icon: '📱', category: 'Elektronikavfall' },
    { name: 'Skrivare', targetId: 'elektronikavfall', icon: '🖨️', category: 'Elektronikavfall' },
    { name: 'Micro', targetId: 'elektronikavfall', icon: '⏲️', category: 'Elektronikavfall' },
    { name: 'Sladd', targetId: 'elektronikavfall', icon: '🔌', category: 'Elektronikavfall' },

    { name: 'Trasig Trästol', targetId: 'tra', icon: '🪑', category: 'Trä' },
    { name: 'Trasig Byrå', targetId: 'tra', icon: '🗄️', category: 'Trä' },
    { name: 'Trädörr', targetId: 'tra', icon: '🚪', category: 'Trä' },
    { name: 'Trasig Stege', targetId: 'tra', icon: '🪜', category: 'Trä' },

    { name: 'Kartong', targetId: 'pappersforpackningar', icon: '📦', category: 'Pappersförpackningar' },
    { name: 'Papperskasse', targetId: 'pappersforpackningar', icon: '🛍️', category: 'Pappersförpackningar' },
    { name: 'Mjölkpaket', targetId: 'pappersforpackningar', icon: '🥛', category: 'Pappersförpackningar' },
    { name: 'Pizzakartong', targetId: 'pappersforpackningar', icon: '🍕', category: 'Pappersförpackningar' },
    { name: 'Äggkartong', targetId: 'pappersforpackningar', icon: '🥚', category: 'Pappersförpackningar' },

    { name: 'Plastflaska', targetId: 'plastforpackningar', icon: '🥤', category: 'Plastförpackningar' },
    { name: 'Plastburk', targetId: 'plastforpackningar', icon: '🫙', category: 'Plastförpackningar' },
    { name: 'Schampoflaska', targetId: 'plastforpackningar', icon: '🧴', category: 'Plastförpackningar' },
    { name: 'Godispapper', targetId: 'plastforpackningar', icon: '🍬', category: 'Plastförpackningar' },

    { name: 'Konservburk', targetId: 'metallforpackningar', icon: '🥫', category: 'Metallförpackningar' },
    { name: 'Folie', targetId: 'metallforpackningar', icon: '🌯', category: 'Metallförpackningar' },
    { name: 'Kapsyl', targetId: 'metallforpackningar', icon: '🍾', category: 'Metallförpackningar' },

    { name: 'Toalettstol', targetId: 'porslin_keramik', icon: '🚽', category: 'Porslin & Keramik' },
    { name: 'Tallrik', targetId: 'porslin_keramik', icon: '🍽️', category: 'Porslin & Keramik' },
    { name: 'Kaffekopp', targetId: 'porslin_keramik', icon: '☕', category: 'Porslin & Keramik' },
    { name: 'Lerkruka', targetId: 'porslin_keramik', icon: '🏺', category: 'Porslin & Keramik' },
    { name: 'Kakel', targetId: 'porslin_keramik', icon: '⬜', category: 'Porslin & Keramik' },

    { name: 'Trasig Soffa', targetId: 'stoppade_mobler', icon: '🛋️', category: 'Stoppade möbler' },
    { name: 'Säng', targetId: 'stoppade_mobler', icon: '🛏️', category: 'Stoppade möbler' },
    { name: 'Trasig fåtölj', targetId: 'stoppade_mobler', icon: '💺', category: 'Stoppade möbler' },
    { name: 'Laminatgolv', targetId: 'stoppade_mobler', icon: '🟫', category: 'Stoppade möbler' },
    { name: 'Tavla', targetId: 'stoppade_mobler', icon: '🖼️', category: 'Stoppade möbler' },

    { name: 'Gräs', targetId: 'gras_lov', icon: '🌱', category: 'Gräs & Löv' },
    { name: 'Löv', targetId: 'gras_lov', icon: '🍂', category: 'Gräs & Löv' },
    { name: 'Blomma', targetId: 'gras_lov', icon: '🥀', category: 'Gräs & Löv' },
    { name: 'Fallfrukt', targetId: 'gras_lov', icon: '🍎', category: 'Gräs & Löv' },

    { name: 'Kvist', targetId: 'ris_grenar', icon: '🌿', category: 'Ris & Grenar' },
    { name: 'Vedträ', targetId: 'ris_grenar', icon: '🪵', category: 'Ris & Grenar' },
    { name: 'Julgran', targetId: 'ris_grenar', icon: '🎄', category: 'Ris & Grenar' },
    { name: 'Sly', targetId: 'ris_grenar', icon: '🌿', category: 'Ris & Grenar' },

    { name: 'Tegelsten', targetId: 'sten_grus', icon: '🧱', category: 'Sten, Grus' },
    { name: 'Gråsten', targetId: 'sten_grus', icon: '🪨', category: 'Sten, Grus' },
    { name: 'Betongplint', targetId: 'sten_grus', icon: '🪨', category: 'Sten, Grus' },

    { name: 'Plastpulka', targetId: 'hardplast', icon: '🛷', category: 'Hårdplast' },
    { name: 'Skurhink', targetId: 'hardplast', icon: '🪣', category: 'Hårdplast' },
    { name: 'Plastkruka', targetId: 'hardplast', icon: '🪴', category: 'Hårdplast' },
	{ name: 'Plasthink', targetId: 'hardplast', icon: '🪣', category: 'Hårdplast' },

    { name: 'Fiskekrok', targetId: 'fiskeredskap', icon: '🪝', category: 'Fiskeredskap' },
    { name: 'Fiskenät', targetId: 'fiskeredskap', icon: '🕸️', category: 'Fiskeredskap' },
    { name: 'Trasigt spö', targetId: 'fiskeredskap', icon: '🎣', category: 'Fiskeredskap' },

    { name: 'Smör', targetId: 'matfett', icon: '🧈', category: 'Matfett' },
    { name: 'Frityrolja', targetId: 'matfett', icon: '🍟', category: 'Matfett' },
    { name: 'Matolja', targetId: 'matfett', icon: '🫙', category: 'Matfett' },

    { name: 'Spegel', targetId: 'planglas', icon: '🪞', category: 'Planglas' },
    { name: 'Fönster', targetId: 'planglas', icon: '🪟', category: 'Planglas' },

    { name: 'Dricksglas', targetId: 'ej_atervinningsbart', icon: '🥃', category: 'Ej återvinningsbart' },
    { name: 'Blöja', targetId: 'ej_atervinningsbart', icon: '👶', category: 'Ej återvinningsbart' },

    { name: 'Slipers', targetId: 'impregnerat_tra', icon: '🛤️', category: 'Tryckimpregnerat trä' },

    { name: 'Trädstubbe', targetId: 'stubbar_rotter', icon: '🪵', category: 'Stubbar & Rötter' },

    { name: 'Asfalt', targetId: 'asfalt', icon: '🛣️', category: 'Asfalt' },

    { name: 'Kylskåp', targetId: 'kyl_frys', icon: '🧊', category: 'Kyl & Frys' },
    { name: 'Frysbox', targetId: 'kyl_frys', icon: '❄️', category: 'Kyl & Frys' },

    { name: 'Spis', targetId: 'vitvaror', icon: '🎛️', category: 'Vitvaror' },
    { name: 'Tvättmaskin', targetId: 'vitvaror', icon: '🧺', category: 'Vitvaror' },

    { name: 'Gipsskiva', targetId: 'gips', icon: '⬜', category: 'Gips' },
    { name: 'Gipsbruk', targetId: 'gips', icon: '🥣', category: 'Gips' },

    { name: 'Ofärgad flaska', targetId: 'ofargat_glas', icon: '🍶', category: 'Ofärgat glas' },
    { name: 'Ofärgad burk', targetId: 'ofargat_glas', icon: '🫙', category: 'Ofärgat glas' },

    { name: 'Färgad flaska', targetId: 'fargat_glas', icon: '🍾', category: 'Färgat glas' },
    { name: 'Färgad burk', targetId: 'fargat_glas', icon: '🍯', category: 'Färgat glas' },

    { name: 'Pantburk', targetId: 'storpantarmaskin', icon: '🥤', category: 'Storpantarmaskin' },
];