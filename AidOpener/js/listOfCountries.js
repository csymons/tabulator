
var arrayCountries = [ ["AF", "Afghanistan: AF"], ["AX", "Åland Islands: AX"], ["AL", "Albania: AL"], ["DZ", "Algeria: DZ"], ["AS", "American Samoa: AS"], ["AD", "Andorra: AD"], ["AO", "Angola: AO"], ["AI", "Anguilla: AI"], ["AQ", "Antarctica: AQ"], ["AG", "Antigua And Barbuda: AG"], ["AR", "Argentina: AR"], ["AM", "Armenia: AM"], ["AW", "Aruba: AW"], ["AU", "Australia: AU"], ["AT", "Austria: AT"], ["AZ", "Azerbaijan: AZ"], ["BS", "Bahamas: BS"], ["BH", "Bahrain: BH"], ["BD", "Bangladesh: BD"], ["BB", "Barbados: BB"], ["BY", "Belarus: BY"], ["BE", "Belgium: BE"], ["BZ", "Belize: BZ"], ["BJ", "Benin: BJ"], ["BM", "Bermuda: BM"], ["BT", "Bhutan: BT"], ["BO", "Bolivia, Plurinational State Of: BO"], ["BQ", "Bonaire, Saint Eustatius And Saba: BQ"], ["BA", "Bosnia And Herzegovina: BA"], ["BW", "Botswana: BW"], ["BV", "Bouvet Island: BV"], ["BR", "Brazil: BR"], ["IO", "British Indian Ocean Territory: IO"], ["BN", "Brunei Darussalam: BN"], ["BG", "Bulgaria: BG"], ["BF", "Burkina Faso: BF"], ["BI", "Burundi: BI"], ["KH", "Cambodia: KH"], ["CM", "Cameroon: CM"], ["CA", "Canada: CA"], ["CV", "Cape Verde: CV"], ["KY", "Cayman Islands: KY"], ["CF", "Central African Republic: CF"], ["TD", "Chad: TD"], ["CL", "Chile: CL"], ["CN", "China: CN"], ["CX", "Christmas Island: CX"], ["CC", "Cocos (keeling) Islands: CC"], ["CO", "Colombia: CO"], ["KM", "Comoros: KM"], ["CG", "Congo: CG"], ["CD", "Congo, The Democratic Republic Of The: CD"], ["CK", "Cook Islands: CK"], ["CR", "Costa Rica: CR"], ["CI", "CÔte D\'ivoire: CI"], ["HR", "Croatia: HR"], ["CU", "Cuba: CU"], ["CW", "CuraÇao: CW"], ["CY", "Cyprus: CY"], ["CZ", "Czech Republic: CZ"], ["DK", "Denmark: DK"], ["DJ", "Djibouti: DJ"], ["DM", "Dominica: DM"], ["DO", "Dominican Republic: DO"], ["EC", "Ecuador: EC"], ["EG", "Egypt: EG"], ["SV", "El Salvador: SV"], ["GQ", "Equatorial Guinea: GQ"], ["ER", "Eritrea: ER"], ["EE", "Estonia: EE"], ["ET", "Ethiopia: ET"], ["FK", "Falkland Islands (malvinas): FK"], ["FO", "Faroe Islands: FO"], ["FJ", "Fiji: FJ"], ["FI", "Finland: FI"], ["FR", "France: FR"], ["GF", "French Guiana: GF"], ["PF", "French Polynesia: PF"], ["TF", "French Southern Territories: TF"], ["GA", "Gabon: GA"], ["GM", "Gambia: GM"], ["GE", "Georgia: GE"], ["DE", "Germany: DE"], ["GH", "Ghana: GH"], ["GI", "Gibraltar: GI"], ["GR", "Greece: GR"], ["GL", "Greenland: GL"], ["GD", "Grenada: GD"], ["GP", "Guadeloupe: GP"], ["GU", "Guam: GU"], ["GT", "Guatemala: GT"], ["GG", "Guernsey: GG"], ["GN", "Guinea: GN"], ["GW", "Guinea-bissau: GW"], ["GY", "Guyana: GY"], ["HT", "Haiti: HT"], ["HM", "Heard Island And Mcdonald Islands: HM"], ["VA", "Holy See (vatican City State): VA"], ["HN", "Honduras: HN"], ["HK", "Hong Kong: HK"], ["HU", "Hungary: HU"], ["IS", "Iceland: IS"], ["IN", "India: IN"], ["ID", "Indonesia: ID"], ["IR", "Iran, Islamic Republic Of: IR"], ["IQ", "Iraq: IQ"], ["IE", "Ireland: IE"], ["IM", "Isle Of Man: IM"], ["IL", "Israel: IL"], ["IT", "Italy: IT"], ["JM", "Jamaica: JM"], ["JP", "Japan: JP"], ["JE", "Jersey: JE"], ["JO", "Jordan: JO"], ["KZ", "Kazakhstan: KZ"], ["KE", "Kenya: KE"], ["KI", "Kiribati: KI"], ["KP", "Korea, Democratic People\'s Republic Of: KP"], ["KR", "Korea, Republic Of: KR"], ["KW", "Kuwait: KW"], ["KG", "Kyrgyzstan: KG"], ["LA", "Lao People\'s Democratic Republic: LA"], ["LV", "Latvia: LV"], ["LB", "Lebanon: LB"], ["LS", "Lesotho: LS"], ["LR", "Liberia: LR"], ["LY", "Libyan Arab Jamahiriya: LY"], ["LI", "Liechtenstein: LI"], ["LT", "Lithuania: LT"], ["LU", "Luxembourg: LU"], ["MO", "Macao: MO"], ["MK", "Macedonia, The Former Yugoslav Republic Of: MK"], ["MG", "Madagascar: MG"], ["MW", "Malawi: MW"], ["MY", "Malaysia: MY"], ["MV", "Maldives: MV"], ["ML", "Mali: ML"], ["MT", "Malta: MT"], ["MH", "Marshall Islands: MH"], ["MQ", "Martinique: MQ"], ["MR", "Mauritania: MR"], ["MU", "Mauritius: MU"], ["YT", "Mayotte: YT"], ["MX", "Mexico: MX"], ["FM", "Micronesia, Federated States Of: FM"], ["MD", "Moldova, Republic Of: MD"], ["MC", "Monaco: MC"], ["MN", "Mongolia: MN"], ["ME", "Montenegro: ME"], ["MS", "Montserrat: MS"], ["MA", "Morocco: MA"], ["MZ", "Mozambique: MZ"], ["MM", "Myanmar: MM"], ["NA", "Namibia: NA"], ["NR", "Nauru: NR"], ["NP", "Nepal: NP"], ["NL", "Netherlands: NL"], ["AN", "Netherland Antilles: AN"], ["NC", "New Caledonia: NC"], ["NZ", "New Zealand: NZ"], ["NI", "Nicaragua: NI"], ["NE", "Niger: NE"], ["NG", "Nigeria: NG"], ["NU", "Niue: NU"], ["NF", "Norfolk Island: NF"], ["MP", "Northern Mariana Islands: MP"], ["NO", "Norway: NO"], ["OM", "Oman: OM"], ["PK", "Pakistan: PK"], ["PW", "Palau: PW"], ["PS", "Palestinian Territory, Occupied: PS"], ["PA", "Panama: PA"], ["PG", "Papua New Guinea: PG"], ["PY", "Paraguay: PY"], ["PE", "Peru: PE"], ["PH", "Philippines: PH"], ["PN", "Pitcairn: PN"], ["PL", "Poland: PL"], ["PT", "Portugal: PT"], ["PR", "Puerto Rico: PR"], ["QA", "Qatar: QA"], ["RE", "Reunion: RE"], ["RO", "Romania: RO"], ["RU", "Russian Federation: RU"], ["RW", "Rwanda: RW"], ["BL", "Saint BarthÉlemy: BL"], ["SH", "Saint Helena, Ascension And Tristan Da Cunha: SH"], ["KN", "Saint Kitts And Nevis: KN"], ["LC", "Saint Lucia: LC"], ["MF", "Saint Martin (french Part): MF"], ["PM", "Saint Pierre And Miquelon: PM"], ["VC", "Saint Vincent And The Grenadines: VC"], ["WS", "Samoa: WS"], ["SM", "San Marino: SM"], ["ST", "Sao Tome And Principe: ST"], ["SA", "Saudi Arabia: SA"], ["SN", "Senegal: SN"], ["RS", "Serbia: RS"], ["SC", "Seychelles: SC"], ["SL", "Sierra Leone: SL"], ["SG", "Singapore: SG"], ["SX", "Sint Maarten (dutch Part): SX"], ["SK", "Slovakia: SK"], ["SI", "Slovenia: SI"], ["SB", "Solomon Islands: SB"], ["SO", "Somalia: SO"], ["ZA", "South Africa: ZA"], ["GS", "South Georgia And The South Sandwich Islands: GS"], ["SS", "South Sudan: SS"], ["ES", "Spain: ES"], ["LK", "Sri Lanka: LK"], ["SD", "Sudan: SD"], ["SR", "Suriname: SR"], ["SJ", "Svalbard And Jan Mayen: SJ"], ["SZ", "Swaziland: SZ"], ["SE", "Sweden: SE"], ["CH", "Switzerland: CH"], ["SY", "Syrian Arab Republic: SY"], ["TW", "Taiwan, Province Of China: TW"], ["TJ", "Tajikistan: TJ"], ["TZ", "Tanzania, United Republic Of: TZ"], ["TH", "Thailand: TH"], ["TL", "Timor-leste: TL"], ["TG", "Togo: TG"], ["TK", "Tokelau: TK"], ["TO", "Tonga: TO"], ["TT", "Trinidad And Tobago: TT"], ["TN", "Tunisia: TN"], ["TR", "Turkey: TR"], ["TM", "Turkmenistan: TM"], ["TC", "Turks And Caicos Islands: TC"], ["TV", "Tuvalu: TV"], ["UG", "Uganda: UG"], ["UA", "Ukraine: UA"], ["AE", "United Arab Emirates: AE"], ["GB", "United Kingdom: GB"], ["US", "United States: US"], ["UM", "United States Minor Outlying Islands: UM"], ["UY", "Uruguay: UY"], ["UZ", "Uzbekistan: UZ"], ["VU", "Vanuatu: VU"], ["VE", "Venezuela, Bolivarian Republic Of: VE"], ["VN", "Viet Nam: VN"], ["VG", "Virgin Islands, British: VG"], ["VI", "Virgin Islands, U.s.: VI"], ["WF", "Wallis And Futuna: WF"], ["EH", "Western Sahara: EH"], ["YE", "Yemen: YE"], ["ZM", "Zambia: ZM"], ["ZW", "Zimbabwe: ZW"] ]; 
																
