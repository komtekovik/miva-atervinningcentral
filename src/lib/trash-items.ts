import type { TrashItem } from './types';

export const allTrashItems: TrashItem[] = [
    { name: 'Hel trämöbel', targetId: 'aterbruk', icon: '🪑', category: 'Återbruk' },
    { name: 'Fungerande cykel', targetId: 'aterbruk', icon: '🚲', category: 'Återbruk' },
    { name: 'Fin vas', targetId: 'aterbruk', icon: '🏺', category: 'Återbruk' },
    { name: 'Fina bestick', targetId: 'aterbruk', icon: '🍴', category: 'Återbruk' },
    { name: 'Hel kastrull', targetId: 'aterbruk', icon: '🥘', category: 'Återbruk' },
    { name: 'Hel fåtölj', targetId: 'aterbruk', icon: '💺', category: 'Återbruk' },

    { name: 'Hel skida', targetId: 'sport_fritidsutrustning', icon: '🎿', category: 'Sport- och fritidsutrustning' },
    { name: 'Hel skridsko', targetId: 'sport_fritidsutrustning', icon: '⛸️', category: 'Sport- och fritidsutrustning' },
    { name: 'Helt tält', targetId: 'sport_fritidsutrustning', icon: '⛺', category: 'Sport- och fritidsutrustning' },
    { name: 'Hel flytväst', targetId: 'sport_fritidsutrustning', icon: '🦺', category: 'Sport- och fritidsutrustning' },
    { name: 'Hel fotboll', targetId: 'sport_fritidsutrustning', icon: '⚽', category: 'Sport- och fritidsutrustning' },
    { name: 'Hel basketboll', targetId: 'sport_fritidsutrustning', icon: '🏀', category: 'Sport- och fritidsutrustning' },
    { name: 'Helt tennisracket', targetId: 'sport_fritidsutrustning', icon: '🎾', category: 'Sport- och fritidsutrustning' },
    { name: 'Hel hockeyklubba', targetId: 'sport_fritidsutrustning', icon: '🏒', category: 'Sport- och fritidsutrustning' },
    { name: 'Hel cykelhjälm', targetId: 'sport_fritidsutrustning', icon: '🪖', category: 'Sport- och fritidsutrustning' },

    { name: 'Hel tröja', targetId: 'textilinsamling', icon: '👕', category: 'Kläder och textil – helt och rent' },
    { name: 'Hel byxa', targetId: 'textilinsamling', icon: '👖', category: 'Kläder och textil – helt och rent' },
    { name: 'Hel sko', targetId: 'textilinsamling', icon: '👞', category: 'Kläder och textil – helt och rent' },
    { name: 'Fin klänning', targetId: 'textilinsamling', icon: '👗', category: 'Kläder och textil – helt och rent' },
    { name: 'Hel gardin', targetId: 'textilinsamling', icon: '🏳', category: 'Kläder och textil – helt och rent' },

    { name: 'Trasig tröja', targetId: 'energiatervinning', icon: '👕', category: 'Energiåtervinning' },
    { name: 'Trasig byxa', targetId: 'energiatervinning', icon: '👖', category: 'Energiåtervinning' },
    { name: 'Strumpor', targetId: 'energiatervinning', icon: '🧦', category: 'Energiåtervinning' },
    { name: 'Trasig sko', targetId: 'energiatervinning', icon: '👟', category: 'Energiåtervinning' },
    { name: 'Trasigt gosedjur', targetId: 'energiatervinning', icon: '🧸', category: 'Energiåtervinning' },
    { name: 'Trasig plastboll', targetId: 'energiatervinning', icon: '🏐', category: 'Energiåtervinning' },
    { name: 'Trasigt paraply', targetId: 'energiatervinning', icon: '☂️', category: 'Energiåtervinning' },
    { name: 'Trasig ryggsäck', targetId: 'energiatervinning', icon: '🎒', category: 'Energiåtervinning' },
    { name: 'Madrass', targetId: 'energiatervinning', icon: '🛏️', category: 'Energiåtervinning' },
    { name: 'Sliten matta', targetId: 'energiatervinning', icon: '🧶', category: 'Energiåtervinning' },
    { name: 'Markskiva i frigolit', targetId: 'energiatervinning', icon: '🧊', category: 'Energiåtervinning' },
    { name: 'Trasig fotboll', targetId: 'energiatervinning', icon: '⚽', category: 'Energiåtervinning' },
    { name: 'Trasig hockeyklubba', targetId: 'energiatervinning', icon: '🏒', category: 'Energiåtervinning' },
    { name: 'Trasig skida', targetId: 'energiatervinning', icon: '🎿', category: 'Energiåtervinning' },
    { name: 'Trasig cykelhjälm', targetId: 'energiatervinning', icon: '🪖', category: 'Energiåtervinning' },
    { name: 'Trasig flytväst', targetId: 'energiatervinning', icon: '🦺', category: 'Energiåtervinning' },

    { name: 'Trasig cykel', targetId: 'metall', icon: '🚲', category: 'Metall' },
    { name: 'Sliten stekpanna', targetId: 'metall', icon: '🍳', category: 'Metall' },
    { name: 'Trasig kastrull', targetId: 'metall', icon: '🍲', category: 'Metall' },
    { name: 'Sliten hammare', targetId: 'metall', icon: '🔨', category: 'Metall' },
    { name: 'Skruv', targetId: 'metall', icon: '🔩', category: 'Metall' },
    { name: 'Sliten yxa', targetId: 'metall', icon: '🪓', category: 'Metall' },

    { name: 'Tjock-TV', targetId: 'farligt_avfall', icon: '📺', category: 'Farligt avfall' },
    { name: 'Platt-TV', targetId: 'farligt_avfall', icon: '🖥️', category: 'Farligt avfall' },
    { name: 'Bilbatteri', targetId: 'farligt_avfall', icon: '🔋', category: 'Farligt avfall' },
    { name: 'Målarfärg', targetId: 'farligt_avfall', icon: '🎨', category: 'Farligt avfall' },
    { name: 'Nagellack', targetId: 'farligt_avfall', icon: '💅', category: 'Farligt avfall' },
    { name: 'Spillolja', targetId: 'farligt_avfall', icon: '🛢️', category: 'Farligt avfall' },
    { name: 'Sprayflaska', targetId: 'farligt_avfall', icon: '🚿', category: 'Farligt avfall' },

    { name: 'Laptop', targetId: 'elektronikavfall', icon: '💻', category: 'Elektronikavfall' },
    { name: 'Mobiltelefon', targetId: 'elektronikavfall', icon: '📱', category: 'Elektronikavfall' },
    { name: 'Skrivare', targetId: 'elektronikavfall', icon: '🖨️', category: 'Elektronikavfall' },
    { name: 'Mikrovågsugn', targetId: 'elektronikavfall', icon: '♨️', category: 'Elektronikavfall' },
    { name: 'Sladd', targetId: 'elektronikavfall', icon: '🔌', category: 'Elektronikavfall' },
    { name: 'Borrmaskin', targetId: 'elektronikavfall', icon: '🪛', category: 'Elektronikavfall' },
    { name: 'Glödlampa', targetId: 'elektronikavfall', icon: '💡', category: 'Elektronikavfall' },
    { name: 'Lysrör', targetId: 'elektronikavfall', icon: '🔦', category: 'Elektronikavfall' },

    { name: 'Trasig trästol', targetId: 'tra', icon: '🪑', category: 'Trä' },
    { name: 'Trasig byrå', targetId: 'tra', icon: '🗄️', category: 'Trä' },
    { name: 'Trädörr', targetId: 'tra', icon: '🚪', category: 'Trä' },
    { name: 'Trasig stege', targetId: 'tra', icon: '🪜', category: 'Trä' },

    { name: 'Kartong', targetId: 'pappersforpackningar', icon: '📦', category: 'Pappersförpackningar' },
    { name: 'Papperskasse', targetId: 'pappersforpackningar', icon: '🛍️', category: 'Pappersförpackningar' },
    { name: 'Mjölkpaket', targetId: 'pappersforpackningar', icon: '🥛', category: 'Pappersförpackningar' },
    { name: 'Pizzakartong', targetId: 'pappersforpackningar', icon: '🍕', category: 'Pappersförpackningar' },
    { name: 'Äggkartong', targetId: 'pappersforpackningar', icon: '🥚', category: 'Pappersförpackningar' },
    { name: 'Pastakartong', targetId: 'pappersforpackningar', icon: '🍝', category: 'Pappersförpackningar' },

    { name: 'Ketchupflaska', targetId: 'plastforpackningar', icon: '🧴', category: 'Plastförpackningar' },
    { name: 'Creme fraiche-burk', targetId: 'plastforpackningar', icon: '🫙', category: 'Plastförpackningar' },
    { name: 'Schampoflaska', targetId: 'plastforpackningar', icon: '🧴', category: 'Plastförpackningar' },
    { name: 'Godispapper', targetId: 'plastforpackningar', icon: '🍬', category: 'Plastförpackningar' },
    { name: 'Bensindunk i plast', targetId: 'plastforpackningar', icon: '🛢️', category: 'Plastförpackningar' },
    { name: 'Innerkruka i plast', targetId: 'plastforpackningar', icon: '🪴', category: 'Plastförpackningar' },

    { name: 'Konservburk', targetId: 'metallforpackningar', icon: '🥫', category: 'Metallförpackningar' },
    { name: 'Aluminiumfolie', targetId: 'metallforpackningar', icon: '🌯', category: 'Metallförpackningar' },
    { name: 'Kapsyl', targetId: 'metallforpackningar', icon: '🍾', category: 'Metallförpackningar' },
    { name: 'Tom färgburk i metall', targetId: 'metallforpackningar', icon: '🥫', category: 'Metallförpackningar' },

    { name: 'Toalettstol', targetId: 'porslin_keramik', icon: '🚽', category: 'Porslin & Keramik' },
    { name: 'Trasig tallrik', targetId: 'porslin_keramik', icon: '🍽️', category: 'Porslin & Keramik' },
    { name: 'Kaffekopp', targetId: 'porslin_keramik', icon: '☕', category: 'Porslin & Keramik' },
    { name: 'Lerkruka', targetId: 'porslin_keramik', icon: '🏺', category: 'Porslin & Keramik' },
    { name: 'Kakel', targetId: 'porslin_keramik', icon: '🧱', category: 'Porslin & Keramik' },

    { name: 'Trasig soffa', targetId: 'stoppade_mobler', icon: '🛋️', category: 'Stoppade möbler' },
    { name: 'Säng', targetId: 'stoppade_mobler', icon: '🛏️', category: 'Stoppade möbler' },
    { name: 'Trasig fåtölj', targetId: 'stoppade_mobler', icon: '💺', category: 'Stoppade möbler' },
    { name: 'Laminatgolv', targetId: 'stoppade_mobler', icon: '🪵', category: 'Stoppade möbler' },
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
    { name: 'Blomlåda', targetId: 'hardplast', icon: '🪴', category: 'Hårdplast' },
    { name: 'Toalettsits', targetId: 'hardplast', icon: '🚽', category: 'Hårdplast' },
    { name: 'Plasthink', targetId: 'hardplast', icon: '🪣', category: 'Hårdplast' },

    { name: 'Smör', targetId: 'matfett', icon: '🧈', category: 'Matfett' },
    { name: 'Frityrolja', targetId: 'matfett', icon: '🍟', category: 'Matfett' },
    { name: 'Matolja', targetId: 'matfett', icon: '🫙', category: 'Matfett' },

    { name: 'Dricksglas', targetId: 'ej_atervinningsbart', icon: '🥃', category: 'Ej återvinningsbart' },
    { name: 'Aska', targetId: 'ej_atervinningsbart', icon: '🌋', category: 'Ej återvinningsbart' },
    { name: 'Isolering', targetId: 'ej_atervinningsbart', icon: '☁️', category: 'Ej återvinningsbart' },

    { name: 'Slipers', targetId: 'impregnerat_tra', icon: '🛤️', category: 'Tryckimpregnerat trä' },
    { name: 'Trallvirke', targetId: 'impregnerat_tra', icon: '🪵', category: 'Tryckimpregnerat trä' },

    { name: 'Kylskåp', targetId: 'kyl_frys', icon: '🧊', category: 'Kyl & Frys' },
    { name: 'Frysbox', targetId: 'kyl_frys', icon: '❄️', category: 'Kyl & Frys' },

    { name: 'Spis', targetId: 'vitvaror', icon: '🍳', category: 'Vitvaror' },
    { name: 'Tvättmaskin', targetId: 'vitvaror', icon: '🧺', category: 'Vitvaror' },

    { name: 'Gipsskiva', targetId: 'gips', icon: '⬜', category: 'Gips' },
    { name: 'Gipsbruk', targetId: 'gips', icon: '🪣', category: 'Gips' },

    { name: 'Ofärgad flaska', targetId: 'ofargat_glas', icon: '🍶', category: 'Ofärgat glas' },
    { name: 'Ofärgad burk', targetId: 'ofargat_glas', icon: '🫙', category: 'Ofärgat glas' },

    { name: 'Färgad flaska', targetId: 'fargat_glas', icon: '🍾', category: 'Färgat glas' },
    { name: 'Färgad burk', targetId: 'fargat_glas', icon: '🍯', category: 'Färgat glas' },

    { name: 'Fiskespö i plast', targetId: 'fiskeredskap', icon: '🎣', category: 'Fiskeredskap' },
    { name: 'Fiskedrag', targetId: 'fiskeredskap', icon: '🪝', category: 'Fiskeredskap' },
    { name: 'Fisknät', targetId: 'fiskeredskap', icon: '🕸️', category: 'Fiskeredskap' },
    { name: 'Trasigt fisknät', targetId: 'fiskeredskap', icon: '🕸️', category: 'Fiskeredskap' },

    { name: 'Lastpall', targetId: 'pallinsamling', icon: '🪵', category: 'Pallinsamling' },
    { name: 'Pallkrage', targetId: 'pallinsamling', icon: '🪵', category: 'Pallinsamling' },

    { name: 'Balkongdörr med karm', targetId: 'planglas', icon: '🚪', category: 'Planglas' },
    { name: 'Fönster med karm', targetId: 'planglas', icon: '🪟', category: 'Planglas' },
    { name: 'Fönsterglas', targetId: 'planglas', icon: '🪟', category: 'Planglas' },
    { name: 'Spegelglas', targetId: 'planglas', icon: '🪞', category: 'Planglas' },
    { name: 'Glasskiva', targetId: 'planglas', icon: '🪟', category: 'Planglas' },
    { name: 'Trasigt fönster', targetId: 'planglas', icon: '🪟', category: 'Planglas' },

    { name: 'Stubbe', targetId: 'stubbar_rotter', icon: '🪵', category: 'Stubbar & Rötter' },
    { name: 'Rot', targetId: 'stubbar_rotter', icon: '🪢', category: 'Stubbar & Rötter' },

    { name: 'Pantburk', targetId: 'storpantarmaskin', icon: '🥫', category: 'Storpantarmaskin' },
    { name: 'PET-flaska med pant', targetId: 'storpantarmaskin', icon: '🥤', category: 'Storpantarmaskin' },

    { name: 'Asfalt', targetId: 'asfalt', icon: '🛣️', category: 'Asfalt' }
];