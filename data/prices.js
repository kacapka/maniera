const PRICES = [
	{
		title: {
			pl: "Pielęgnacja rąk i stóp",
			en: 'Manicure / Pedicure Care'
		},
		prices: [
			{
				name: {
					pl: "Manicure HYBRYDOWY",
					en: 'Manicure Gel / Hybrid'
				},
				price: "130 zł"
			},
			{
				name: {
					pl: "Manicure HYBRYDOWY - Styled by Maniera",
					en: 'Manicure Hybrid – Styled by Maniera'
				},
				price: "140 - 160 zł"
			},
			{
				name: {
					pl: "Manicure Klasyczny",
					en: 'Manicure Classic'
				},
				price: "70 zł"
			},
			{
				name: {
					pl: "Manicure VINYLUX",
					en: 'Manicure VINYLUX'
				},
				price: "80 zł"
			},
			{
				name: {
					pl: "Manicure Japoński",
					en: 'Manicure Japanese / P Shine'
				},
				price: "90 zł"
			},
			{
				name: {
					pl: "Manicure Men",
					en: 'Manicure Men'
				},
				price: "60 zł"
			},
			{
				name: {
					pl: "Manicure Odżywczy / Bez Koloru",
					en: 'Manicure No Color'
				},
				price: "65 zł"
			},
			{
				name: {
					pl: "Manicure SPA",
					en: 'Manicure SPA'
				},
				price: "100 zł"
			},
			{
				name: {
					pl: "Pedicure HYBRYDA",
					en: 'Pedicure Gel / Hybrid'
				},
				price: "180 zł"
			},
			{
				name: {
					pl: "Pedicure Klasyczny",
					en: 'Pedicure Classic'
				},
				price: "130 zł"
			},
			{
				name: {
					pl: "Pedicure VINYLUX",
					en: 'Pedicure VINYLUX'
				},
				price: "150 zł"
			},
			{
				name: {
					pl: "Pedicure Japoński",
					en: 'edicure Japanese / P Shine'
				},
				price: "150 zł"
			},
			{
				name: {
					pl: "Pedicure Men",
					en: 'Pedicure Men'
				},
				price: "120 zł"
			},
			{
				name: {
					pl: "Pedicure SPA",
					en: 'Pedicure SPA'
				},
				price: "180 zł"
			},
			{
				name: {
					pl: "Manicure/Pedicure HYBRYDA",
					en: 'Manicure / Pedicure Hybrid'
				},
				price: "310 zł"
			},
			{
				name: {
					pl: "Manicure/Pedicure Klasyczny",
					en: 'Manicure / Pedicure Classic'
				},
				price: "200 zł"
			},
			{
				name: {
					pl: "Manicure/Pedicure VINYLUX",
					en: 'Manicure / Pedicure VINYLUX'
				},
				price: "230 zł"
			},
			{
				name: {
					pl: "Manicure/Pedicure Odżywczy",
					en: 'Manicure / Pedicure No Color'
				},
				price: "185 zł"
			},
			{
				name: {
					pl: "Kwas na stopy",
					en: 'Callus Removal'
				},
				price: "50 zł"
			},
			{
				name: {
					pl: "IBX",
					en: 'IBX'
				},
				price: "30 zł"
			},
			{
				name: {
					pl: "Łatka",
					en: 'Łatka' // no translate
				},
				price: "10 zł"
			},
			{
				name: {
					pl: "Rekonstrukcja Paznokcia",
					en: 'Nail Reconstruction'
				},
				price: "30 zł"
			},
			{
				name: {
					pl: "Naprawa Paznokcia",
					en: 'Naprawa Paznokcia' // no translate
				},
				price: "20 zł"
			},
			{
				name: {
					pl: "Nail Art",
					en: 'Nail Art'
				},
				price: "20 - 50 zł"
			},
			{
				name: {
					pl: "Założenie Żelu",
					en: 'Gel Extensions'
				},
				price: "200 zł"
			},
			{
				name: {
					pl: "Założenie Żelu + OPI",
					en: 'Gel Extensions + OPI'
				},
				price: "220 zł"
			},
			{
				name: {
					pl: "Założenie Żelu + HYBRYDA",
					en: 'Gel Extensions + HYBRID'
				},
				price: "250 zł"
			},
			{
				name: {
					pl: "Założenie Żelu + VINYLUX",
					en: 'Gel Extensions + VINYLUX'
				},
				price: "230 zł"
			},
			{
				name: {
					pl: "Uzupełnienie Żelu",
					en: 'Gel Filling'
				},
				price: "160 zł"
			},
			{
				name: {
					pl: "Uzupełnienie Żelu + OPI",
					en: 'Gel Filling + OPI'
				},
				price: "180 zł"
			},
			{
				name: {
					pl: "Uzupełnienie Żelu + HYBRYDA",
					en: 'Gel Filling + HYBRID'
				},
				price: "210 zł"
			},
			{
				name: {
					pl: "Uzupełnienie Żelu + VINYLUX",
					en: 'Gel Filling + VINYLUX'
				},
				price: "190 zł"
			},
			{
				name: {
					pl: "Zdjęcie Hybryda",
					en: 'Removal HYBRID'
				},
				price: "20 zł"
			},
			{
				name: {
					pl: "Zdjęcie Żelu/Akrylu",
					en: 'Removal Żel/Akryl'
				},
				price: "50 zł"
			}
		]
	},
	{
		title: {
			pl: "Stylizacja Rzęs",
			en: 'Eyelash Extensions'
		},
		prices: [
			{
				name: {
					pl: "Założenie Rzęsy 1:1",
					en: 'Eyelash Extensions 1:1'
				},
				price: "250 zł"
			},
			{
				name: {
					pl: "Założenie Rzęsy 2:1/3:1",
					en: 'Eyelash Extensions 2:1/3:1'
				},
				price: "280 zł"
			},
			{
				name: {
					pl: "Założenie Rzęsy 4:1/5:1",
					en: 'Eyelash Extensions 4:1/5:1'
				},
				price: "300 zł"
			},
			{
				name: {
					pl: "Założenie Rzęsy Big Volume",
					en: 'Eyelash Extensions Big Volume'
				},
				price: "320 - 400 zł"
			},
			{
				name: {
					pl: "Uzupełnienie Rzęsy 1:1",
					en: 'Eyelash Fill 1:1'
				},
				price: "200 zł"
			},
			{
				name: {
					pl: "Uzupełnienie Rzęsy 2:1/3:1",
					en: 'Eyelash Fill 2:1/3:1'
				},
				price: "230 zł"
			},
			{
				name: {
					pl: "Uzupełnienie Rzęsy 4:1/5:1",
					en: 'Eyelash Fill 4:1/5:1'
				},
				price: "270 zł"
			},
			{
				name: {
					pl: "Uzupełnienie Rzęsy Big Volume",
					en: 'Eyelash Fill Big Volume'
				},
				price: "270 - 360 zł"
			},
			{
				name: {
					pl: "Zdjęcie rzęs",
					en: 'Lash Removal '
				},
				price: "50 zł"
			}
		]
	},
	{
		title: {
			pl: "Stylizacja Oka",
			en: 'Eye Styling'
		},
		prices: [
			{
				name: {
					pl: "Henna Brwi (Reflectocil)",
					en: 'Brow Henna (Reflectocil)'
				},
				price: "20 zł"
			},
			{
				name: {
					pl: "Henna Rzęsy",
					en: 'Lash Henna'
				},
				price: "25 zł"
			},
			{
				name: {
					pl: "Stylizacja Brwi Brow Henna",
					en: 'Brow Styling Brow Henna'
				},
				price: "70 zł"
			},
			{
				name: {
					pl: "Regulacja Brwi Systemem LYCON",
					en: 'Brow Waxing LYCON'
				},
				price: "30 zł"
			},
			{
				name: {
					pl: "Regulacja Brwi Pęsetą",
					en: 'Brow Shape'
				},
				price: "20 zł"
			},
			{
				name: {
					pl: "Regulacja Brwi Pęsetą + Henna",
					en: 'Brow Shape + Henna'
				},
				price: "40 zł"
			},
			{
				name: {
					pl: "Nitkowanie Brwi",
					en: 'Brow Threading'
				},
				price: "50 zł"
			},
			{
				name: {
					pl: "Nitkowanie + Henna Brwi",
					en: 'Brow Threading + Henna'
				},
				price: "65 zł"
			},
			{
				name: {
					pl: "Nitkowanie + Stylizacja Brow Henna",
					en: 'Threading + Tint Brow Henna'
				},
				price: "95 zł"
			},
			{
				name: {
					pl: "Nitkowanie Twarzy + Henna Brwi",
					en: 'Face Threading + Brow Henna'
				},
				price: "120 zł"
			},
			{
				name: {
					pl: "Lifting Rzęs",
					en: 'Lash Lift'
				},
				price: "180 zł"
			},
			{
				name: {
					pl: "Laminacja Rzęs",
					en: 'Lash Lift Extra'
				},
				price: "200 zł"
			},
			{
				name: {
					pl: "Komplet – Stylizacja Brwi + Henna Rzęs (Reflectocil)",
					en: 'Combo – Brow Styling + Lash Tint (Reflectocil)'
				},
				price: "90 zł"
			},
			{
				name: {
					pl: "Komplet – Stylizacja Brow Henna + Regulacja LYCON",
					en: 'Combo – Brow Styling Brow Henna + Wax LYCON'
				},
				price: "90 zł" // no price
			}
		]
	},
	{
		title: {
			pl: "Pielęgnacja twarzy",
			en: 'Facials'
		},
		prices: [
			{
				name: {
					pl: "Zabieg Geneo+ by Pollagen",
					en: 'Geneo+ by Pollagen'
				},
				price: "350 - 450 zł"
			},
			{
				name: {
					pl: "Atraumatyczne oczyszczenie twarzy A- nox Solution HL",
					en: 'Atraumatic facial cleansing A- nox Solution HL'
				},
				price: "200 zł"
			},
			{
				name: {
					pl: "Całoroczny zabieg złuszczający HL",
					en: 'Year-Round Peel HL'
				},
				price: "220 zł"
			},
			{
				name: {
					pl: "Manualne oczyszczanie twarzy A-Nox Solution HL",
					en: 'Manual Extractions A-Nox Solution HL'
				},
				price: "230 zł"
			},
			{
				name: {
					pl: "Pielęgnacja po typie skóry",
					en: 'Skin Type Care'
				},
				price: "170 zł"
			},
			{
				name: {
					pl: "Zabieg mocno ujędrniająco-liftingujący z lipopeptydami i fitoestrogenami",
					en: 'Firming and Lifting Care with lipopeptides'
				},
				price: "250 zł"
			},
			{
				name: {
					pl: "Zabieg przygotowująco-balansujący",
					en: 'Skin Balancing Care'
				},
				price: "240 zł"
			},
			{
				name: {
					pl: "SOTHYS Zabieg wygładzający z kwasem glikolowym 30%",
					en: 'SOTHYS Skin toning with glikol acid 30%'
				},
				price: "260 zł"
			},
			{
				name: {
					pl: "SOTHYS Active Contour na okolice oczu",
					en: 'SOTHYS Active Contour for Eyes'
				},
				price: "190 zł"
			},
			{
				name: {
					pl: "SOTHYS Zabieg silnie nawilżający",
					en: 'SOTHYS High Moisture Care'
				},
				price: "260 zł"
			},
			{
				name: {
					pl: "DODATEK Masaż Twarzy",
					en: 'Add-on Skin Massage'
				},
				price: "120 zł"
			},
			{
				name: {
					pl: "DODATEK Maseczka Sothys",
					en: 'Add-on Sothys Face Mask'
				},
				price: "60 zł"
			},
			{
				name: {
					pl: "DODATEK Peeling Kawitacyjny",
					en: 'Add-on Cavitation Peel'
				},
				price: "70 zł"
			}
		]
	},
	{
		title: {
			pl: "Makijaż Permanentny",
			en: 'Permanent Makeup (Prices include correction after 1 month)'
		},
		prices: [
			{
				name: {
					pl: "Brwi Metoda Pudrowa",
					en: 'Brows'
				},
				price: "900 zł"
			},
			{
				name: {
					pl: "Oczy / zagęszczenie linii rzęs ",
					en: 'Eyes / thickening of the lash line'
				},
				price: "600 zł"
			},
			{
				name: {
					pl: "Usta",
					en: 'Lips'
				},
				price: "900 zł"
			}
		]
	},
	{
		title: {
			pl: "Depilacja",
			en: 'Waxing'
		},
		prices: [
			{
				name: {
					pl: "Całe Ręce",
					en: 'Arms'
				},
				price: "100 zł"
			},
			{
				name: {
					pl: "Całe Nogi",
					en: 'Legs'
				},
				price: "150 zł"
			},
			{
				name: {
					pl: "Ręce",
					en: 'Forearms'
				},
				price: "80 zł"
			},
			{
				name: {
					pl: "Łydki i kolana",
					en: 'Calves and knees'
				},
				price: "80 zł"
			},
			{
				name: {
					pl: "Bikini Klasyczne LYCON",
					en: 'Bikini Classic LYCON'
				},
				price: "80 zł"
			},
			{
				name: {
					pl: "Bikini Brazilian LYCON",
					en: 'Bikini Brazilian LYCON'
				},
				price: "130 zł"
			},
			{
				name: {
					pl: "Twarz LYCON",
					en: 'Face LYCON'
				},
				price: "70 zł"
			},
			{
				name: {
					pl: "Uszy LYCON",
					en: 'Ears LYCON'
				},
				price: "30 zł"
			},
			{
				name: {
					pl: "Wąsik LYCON",
					en: 'Mustache LYCON'
				},
				price: "30 zł"
			},
			{
				name: {
					pl: "Nos LYCON",
					en: 'Nose LYCON'
				},
				price: "20 zł"
			},
			{
				name: {
					pl: "Policzki LYCON",
					en: 'Cheeks LYCON'
				},
				price: "30 zł"
			},
			{
				name: {
					pl: "Broda LYCON",
					en: 'Chin LYCON'
				},
				price: "40 zł"
			},
			{
				name: {
					pl: "Baczki LYCON",
					en: 'Sideburns LYCON'
				},
				price: "30 zł"
			}
		]
	},
];

export default PRICES;
