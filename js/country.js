var isoCountriesList = [
                { id: 'AF', text: 'Afghanistan'},
                { id: 'AX', text: 'Aland Islands'},
                { id: 'AL', text: 'Albania'},
                { id: 'DZ', text: 'Algeria'},
                { id: 'AS', text: 'American Samoa'},
                { id: 'AD', text: 'Andorra'},
                { id: 'AO', text: 'Angola'},
                { id: 'AI', text: 'Anguilla'},
                { id: 'AQ', text: 'Antarctica'},
                { id: 'AG', text: 'Antigua And Barbuda'},
                { id: 'AR', text: 'Argentina'},
                { id: 'AM', text: 'Armenia'},
                { id: 'AW', text: 'Aruba'},
                { id: 'AU', text: 'Australia'},
                { id: 'AT', text: 'Austria'},
                { id: 'AZ', text: 'Azerbaijan'},
                { id: 'BS', text: 'Bahamas'},
                { id: 'BH', text: 'Bahrain'},
                { id: 'BD', text: 'Bangladesh'},
                { id: 'BB', text: 'Barbados'},
                { id: 'BY', text: 'Belarus'},
                { id: 'BE', text: 'Belgium'},
                { id: 'BZ', text: 'Belize'},
                { id: 'BJ', text: 'Benin'},
                { id: 'BM', text: 'Bermuda'},
                { id: 'BT', text: 'Bhutan'},
                { id: 'BO', text: 'Bolivia'},
                { id: 'BA', text: 'Bosnia And Herzegovina'},
                { id: 'BW', text: 'Botswana'},
                { id: 'BV', text: 'Bouvet Island'},
                { id: 'BR', text: 'Brazil'},
                { id: 'IO', text: 'British Indian Ocean Territory'},
                { id: 'BN', text: 'Brunei Darussalam'},
                { id: 'BG', text: 'Bulgaria'},
                { id: 'BF', text: 'Burkina Faso'},
                { id: 'BI', text: 'Burundi'},
                { id: 'KH', text: 'Cambodia'},
                { id: 'CM', text: 'Cameroon'},
                { id: 'CA', text: 'Canada'},
                { id: 'CV', text: 'Cape Verde'},
                { id: 'KY', text: 'Cayman Islands'},
                { id: 'CF', text: 'Central African Republic'},
                { id: 'TD', text: 'Chad'},
                { id: 'CL', text: 'Chile'},
                { id: 'CN', text: 'China'},
                { id: 'CX', text: 'Christmas Island'},
                { id: 'CC', text: 'Cocos (Keeling) Islands'},
                { id: 'CO', text: 'Colombia'},
                { id: 'KM', text: 'Comoros'},
                { id: 'CG', text: 'Congo'},
                { id: 'CD', text: 'Congo}, Democratic Republic'},
                { id: 'CK', text: 'Cook Islands'},
                { id: 'CR', text: 'Costa Rica'},
                { id: 'CI', text: 'Cote D\'Ivoire'},
                { id: 'HR', text: 'Croatia'},
                { id: 'CU', text: 'Cuba'},
                { id: 'CY', text: 'Cyprus'},
                { id: 'CZ', text: 'Czech Republic'},
                { id: 'DK', text: 'Denmark'},
                { id: 'DJ', text: 'Djibouti'},
                { id: 'DM', text: 'Dominica'},
                { id: 'DO', text: 'Dominican Republic'},
                { id: 'EC', text: 'Ecuador'},
                { id: 'EG', text: 'Egypt'},
                { id: 'SV', text: 'El Salvador'},
                { id: 'GQ', text: 'Equatorial Guinea'},
                { id: 'ER', text: 'Eritrea'},
                { id: 'EE', text: 'Estonia'},
                { id: 'ET', text: 'Ethiopia'},
                { id: 'FK', text: 'Falkland Islands (Malvinas)'},
                { id: 'FO', text: 'Faroe Islands'},
                { id: 'FJ', text: 'Fiji'},
                { id: 'FI', text: 'Finland'},
                { id: 'FR', text: 'France'},
                { id: 'GF', text: 'French Guiana'},
                { id: 'PF', text: 'French Polynesia'},
                { id: 'TF', text: 'French Southern Territories'},
                { id: 'GA', text: 'Gabon'},
                { id: 'GM', text: 'Gambia'},
                { id: 'GE', text: 'Georgia'},
                { id: 'DE', text: 'Germany'},
                { id: 'GH', text: 'Ghana'},
                { id: 'GI', text: 'Gibraltar'},
                { id: 'GR', text: 'Greece'},
                { id: 'GL', text: 'Greenland'},
                { id: 'GD', text: 'Grenada'},
                { id: 'GP', text: 'Guadeloupe'},
                { id: 'GU', text: 'Guam'},
                { id: 'GT', text: 'Guatemala'},
                { id: 'GG', text: 'Guernsey'},
                { id: 'GN', text: 'Guinea'},
                { id: 'GW', text: 'Guinea-Bissau'},
                { id: 'GY', text: 'Guyana'},
                { id: 'HT', text: 'Haiti'},
                { id: 'HM', text: 'Heard Island & Mcdonald Islands'},
                { id: 'VA', text: 'Holy See (Vatican City State)'},
                { id: 'HN', text: 'Honduras'},
                { id: 'HK', text: 'Hong Kong'},
                { id: 'HU', text: 'Hungary'},
                { id: 'IS', text: 'Iceland'},
                { id: 'IN', text: 'India'},
                { id: 'ID', text: 'Indonesia'},
                { id: 'IR', text: 'Iran}, Islamic Republic Of'},
                { id: 'IQ', text: 'Iraq'},
                { id: 'IE', text: 'Ireland'},
                { id: 'IM', text: 'Isle Of Man'},
                { id: 'IL', text: 'Israel'},
                { id: 'IT', text: 'Italy'},
                { id: 'JM', text: 'Jamaica'},
                { id: 'JP', text: 'Japan'},
                { id: 'JE', text: 'Jersey'},
                { id: 'JO', text: 'Jordan'},
                { id: 'KZ', text: 'Kazakhstan'},
                { id: 'KE', text: 'Kenya'},
                { id: 'KI', text: 'Kiribati'},
                { id: 'KR', text: 'Korea'},
                { id: 'KW', text: 'Kuwait'},
                { id: 'KG', text: 'Kyrgyzstan'},
                { id: 'LA', text: 'Lao People\'s Democratic Republic'},
                { id: 'LV', text: 'Latvia'},
                { id: 'LB', text: 'Lebanon'},
                { id: 'LS', text: 'Lesotho'},
                { id: 'LR', text: 'Liberia'},
                { id: 'LY', text: 'Libyan Arab Jamahiriya'},
                { id: 'LI', text: 'Liechtenstein'},
                { id: 'LT', text: 'Lithuania'},
                { id: 'LU', text: 'Luxembourg'},
                { id: 'MO', text: 'Macao'},
                { id: 'MK', text: 'Macedonia'},
                { id: 'MG', text: 'Madagascar'},
                { id: 'MW', text: 'Malawi'},
                { id: 'MY', text: 'Malaysia'},
                { id: 'MV', text: 'Maldives'},
                { id: 'ML', text: 'Mali'},
                { id: 'MT', text: 'Malta'},
                { id: 'MH', text: 'Marshall Islands'},
                { id: 'MQ', text: 'Martinique'},
                { id: 'MR', text: 'Mauritania'},
                { id: 'MU', text: 'Mauritius'},
                { id: 'YT', text: 'Mayotte'},
                { id: 'MX', text: 'Mexico'},
                { id: 'FM', text: 'Micronesia}, Federated States Of'},
                { id: 'MD', text: 'Moldova'},
                { id: 'MC', text: 'Monaco'},
                { id: 'MN', text: 'Mongolia'},
                { id: 'ME', text: 'Montenegro'},
                { id: 'MS', text: 'Montserrat'},
                { id: 'MA', text: 'Morocco'},
                { id: 'MZ', text: 'Mozambique'},
                { id: 'MM', text: 'Myanmar'},
                { id: 'NA', text: 'Namibia'},
                { id: 'NR', text: 'Nauru'},
                { id: 'NP', text: 'Nepal'},
                { id: 'NL', text: 'Netherlands'},
                { id: 'AN', text: 'Netherlands Antilles'},
                { id: 'NC', text: 'New Caledonia'},
                { id: 'NZ', text: 'New Zealand'},
                { id: 'NI', text: 'Nicaragua'},
                { id: 'NE', text: 'Niger'},
                { id: 'NG', text: 'Nigeria'},
                { id: 'NU', text: 'Niue'},
                { id: 'NF', text: 'Norfolk Island'},
                { id: 'MP', text: 'Northern Mariana Islands'},
                { id: 'NO', text: 'Norway'},
                { id: 'OM', text: 'Oman'},
                { id: 'PK', text: 'Pakistan'},
                { id: 'PW', text: 'Palau'},
                { id: 'PS', text: 'Palestinian Territory}, Occupied'},
                { id: 'PA', text: 'Panama'},
                { id: 'PG', text: 'Papua New Guinea'},
                { id: 'PY', text: 'Paraguay'},
                { id: 'PE', text: 'Peru'},
                { id: 'PH', text: 'Philippines'},
                { id: 'PN', text: 'Pitcairn'},
                { id: 'PL', text: 'Poland'},
                { id: 'PT', text: 'Portugal'},
                { id: 'PR', text: 'Puerto Rico'},
                { id: 'QA', text: 'Qatar'},
                { id: 'RE', text: 'Reunion'},
                { id: 'RO', text: 'Romania'},
                { id: 'RU', text: 'Russian Federation'},
                { id: 'RW', text: 'Rwanda'},
                { id: 'BL', text: 'Saint Barthelemy'},
                { id: 'SH', text: 'Saint Helena'},
                { id: 'KN', text: 'Saint Kitts And Nevis'},
                { id: 'LC', text: 'Saint Lucia'},
                { id: 'MF', text: 'Saint Martin'},
                { id: 'PM', text: 'Saint Pierre And Miquelon'},
                { id: 'VC', text: 'Saint Vincent And Grenadines'},
                { id: 'WS', text: 'Samoa'},
                { id: 'SM', text: 'San Marino'},
                { id: 'ST', text: 'Sao Tome And Principe'},
                { id: 'SA', text: 'Saudi Arabia'},
                { id: 'SN', text: 'Senegal'},
                { id: 'RS', text: 'Serbia'},
                { id: 'SC', text: 'Seychelles'},
                { id: 'SL', text: 'Sierra Leone'},
                { id: 'SG', text: 'Singapore'},
                { id: 'SK', text: 'Slovakia'},
                { id: 'SI', text: 'Slovenia'},
                { id: 'SB', text: 'Solomon Islands'},
                { id: 'SO', text: 'Somalia'},
                { id: 'ZA', text: 'South Africa'},
                { id: 'GS', text: 'South Georgia And Sandwich Isl.'},
                { id: 'ES', text: 'Spain'},
                { id: 'LK', text: 'Sri Lanka'},
                { id: 'SD', text: 'Sudan'},
                { id: 'SR', text: 'Suriname'},
                { id: 'SJ', text: 'Svalbard And Jan Mayen'},
                { id: 'SZ', text: 'Swaziland'},
                { id: 'SE', text: 'Sweden'},
                { id: 'CH', text: 'Switzerland'},
                { id: 'SY', text: 'Syrian Arab Republic'},
                { id: 'TW', text: 'Taiwan'},
                { id: 'TJ', text: 'Tajikistan'},
                { id: 'TZ', text: 'Tanzania'},
                { id: 'TH', text: 'Thailand'},
                { id: 'TL', text: 'Timor-Leste'},
                { id: 'TG', text: 'Togo'},
                { id: 'TK', text: 'Tokelau'},
                { id: 'TO', text: 'Tonga'},
                { id: 'TT', text: 'Trinidad And Tobago'},
                { id: 'TN', text: 'Tunisia'},
                { id: 'TR', text: 'Turkey'},
                { id: 'TM', text: 'Turkmenistan'},
                { id: 'TC', text: 'Turks And Caicos Islands'},
                { id: 'TV', text: 'Tuvalu'},
                { id: 'UG', text: 'Uganda'},
                { id: 'UA', text: 'Ukraine'},
                { id: 'AE', text: 'United Arab Emirates'},
                { id: 'GB', text: 'United Kingdom'},
                { id: 'US', text: 'United States'},
                { id: 'UM', text: 'United States Outlying Islands'},
                { id: 'UY', text: 'Uruguay'},
                { id: 'UZ', text: 'Uzbekistan'},
                { id: 'VU', text: 'Vanuatu'},
                { id: 'VE', text: 'Venezuela'},
                { id: 'VN', text: 'Viet Nam'},
                { id: 'VG', text: 'Virgin Islands}, British'},
                { id: 'VI', text: 'Virgin Islands}, U.S.'},
                { id: 'WF', text: 'Wallis And Futuna'},
                { id: 'EH', text: 'Western Sahara'},
                { id: 'YE', text: 'Yemen'},
                { id: 'ZM', text: 'Zambia'},
                { id: 'ZW', text: 'Zimbabwe'}
            ];








const isoCountries = {
  'AF' : {
    name: 'Afghanistan',
  },
  'AX' : {
    name: 'Aland Islands',
  },
  'AL' : {
    name: 'Albania',
  },
  'DZ' : {
    name: 'Algeria',
  },
  'AS' : {
    name: 'American Samoa',
  },
  'AD' : {
    name: 'Andorra',
  },
  'AO' : {
    name: 'Angola',
  },
  'AI' : {
    name: 'Anguilla',
  },
  'AQ' : {
    name: 'Antarctica',
  },
  'AG' : {
    name: 'Antigua And Barbuda',
  },
  'AR' : {
    name: 'Argentina',
  },
  'AM' : {
    name: 'Armenia',
  },
  'AW' : {
    name: 'Aruba',
  },
  'AU' : {
    name: 'Australia',
  },
  'AT' : {
    name: 'Austria',
  },
  'AZ' : {
    name: 'Azerbaijan',
  },
  'BS' : {
    name: 'Bahamas',
  },
  'BH' : {
    name: 'Bahrain',
  },
  'BD' : {
    name: 'Bangladesh',
  },
  'BB' : {
    name: 'Barbados',
  },
  'BY' : {
    name: 'Belarus',
  },
  'BE' : {
    name: 'Belgium',
  },
  'BZ' : {
    name: 'Belize',
  },
  'BJ' : {
    name: 'Benin',
  },
  'BM' : {
    name: 'Bermuda',
  },
  'BT' : {
    name: 'Bhutan',
  },
  'BO' : {
    name: 'Bolivia',
  },
  'BA' : {
    name: 'Bosnia And Herzegovina',
  },
  'BW' : {
    name: 'Botswana',
  },
  'BV' : {
    name: 'Bouvet Island',
  },
  'BR' : {
    name: 'Brazil',
  },
  'IO' : {
    name: 'British Indian Ocean Territory',
  },
  'BN' : {
    name: 'Brunei Darussalam',
  },
  'BG' : {
    name: 'Bulgaria',
  },
  'BF' : {
    name: 'Burkina Faso',
  },
  'BI' : {
    name: 'Burundi',
  },
  'KH' : {
    name: 'Cambodia',
  },
  'CM' : {
    name: 'Cameroon',
  },
  'CA' : {
    name: 'Canada',
  },
  'CV' : {
    name: 'Cape Verde',
  },
  'KY' : {
    name: 'Cayman Islands',
  },
  'CF' : {
    name: 'Central African Republic',
  },
  'TD' : {
    name: 'Chad',
  },
  'CL' : {
    name: 'Chile',
  },
  'CN' : {
    name: 'China',
  },
  'CX' : {
    name: 'Christmas Island',
  },
  'CC' : {
    name: 'Cocos (Keeling) Islands',
  },
  'CO' : {
    name: 'Colombia',
  },
  'KM' : {
    name: 'Comoros',
  },
  'CG' : {
    name: 'Congo',
  },
  'CD' : {
    name: 'Congo, Democratic Republic',
  },
  'CK' : {
    name: 'Cook Islands',
  },
  'CR' : {
    name: 'Costa Rica',
  },
  'CI' : {
    name: 'Cote D\'Ivoire',
  },
  'HR' : {
    name: 'Croatia',
  },
  'CU' : {
    name: 'Cuba',
  },
  'CY' : {
    name: 'Cyprus',
  },
  'CZ' : {
    name: 'Czech Republic',
  },
  'DK' : {
    name: 'Denmark',
  },
  'DJ' : {
    name: 'Djibouti',
  },
  'DM' : {
    name: 'Dominica',
  },
  'DO' : {
    name: 'Dominican Republic',
  },
  'EC' : {
    name: 'Ecuador',
  },
  'EG' : {
    name: 'Egypt',
  },
  'SV' : {
    name: 'El Salvador',
  },
  'GQ' : {
    name: 'Equatorial Guinea',
  },
  'ER' : {
    name: 'Eritrea',
  },
  'EE' : {
    name: 'Estonia',
  },
  'ET' : {
    name: 'Ethiopia',
  },
  'FK' : {
    name: 'Falkland Islands (Malvinas)',
  },
  'FO' : {
    name: 'Faroe Islands',
  },
  'FJ' : {
    name: 'Fiji',
  },
  'FI' : {
    name: 'Finland',
  },
  'FR' : {
    name: 'France',
  },
  'GF' : {
    name: 'French Guiana',
  },
  'PF' : {
    name: 'French Polynesia',
  },
  'TF' : {
    name: 'French Southern Territories',
  },
  'GA' : {
    name: 'Gabon',
  },
  'GM' : {
    name: 'Gambia',
  },
  'GE' : {
    name: 'Georgia',
  },
  'DE' : {
    name: 'Germany',
  },
  'GH' : {
    name: 'Ghana',
  },
  'GI' : {
    name: 'Gibraltar',
  },
  'GR' : {
    name: 'Greece',
  },
  'GL' : {
    name: 'Greenland',
  },
  'GD' : {
    name: 'Grenada',
  },
  'GP' : {
    name: 'Guadeloupe',
  },
  'GU' : {
    name: 'Guam',
  },
  'GT' : {
    name: 'Guatemala',
  },
  'GG' : {
    name: 'Guernsey',
  },
  'GN' : {
    name: 'Guinea',
  },
  'GW' : {
    name: 'Guinea-Bissau',
  },
  'GY' : {
    name: 'Guyana',
  },
  'HT' : {
    name: 'Haiti',
  },
  'HM' : {
    name: 'Heard Island & Mcdonald Islands',
  },
  'VA' : {
    name: 'Holy See (Vatican City State)',
  },
  'HN' : {
    name: 'Honduras',
  },
  'HK' : {
    name: 'Hong Kong',
  },
  'HU' : {
    name: 'Hungary',
  },
  'IS' : {
    name: 'Iceland',
  },
  'IN' : {
    name: 'India',
  },
  'ID' : {
    name: 'Indonesia',
  },
  'IR' : {
    name: 'Iran, Islamic Republic Of',
  },
  'IQ' : {
    name: 'Iraq',
  },
  'IE' : {
    name: 'Ireland',
  },
  'IM' : {
    name: 'Isle Of Man',
  },
  'IL' : {
    name: 'Israel',
  },
  'IT' : {
    name: 'Italy',
  },
  'JM' : {
    name: 'Jamaica',
  },
  'JP' : {
    name: 'Japan',
  },
  'JE' : {
    name: 'Jersey',
  },
  'JO' : {
    name: 'Jordan',
  },
  'KZ' : {
    name: 'Kazakhstan',
  },
  'KE' : {
    name: 'Kenya',
  },
  'KI' : {
    name: 'Kiribati',
  },
  'KR' : {
    name: 'Korea',
  },
  'KW' : {
    name: 'Kuwait',
  },
  'KG' : {
    name: 'Kyrgyzstan',
  },
  'LA' : {
    name: 'Lao People\'s Democratic Republic',
  },
  'LV' : {
    name: 'Latvia',
  },
  'LB' : {
    name: 'Lebanon',
  },
  'LS' : {
    name: 'Lesotho',
  },
  'LR' : {
    name: 'Liberia',
  },
  'LY' : {
    name: 'Libyan Arab Jamahiriya',
  },
  'LI' : {
    name: 'Liechtenstein',
  },
  'LT' : {
    name: 'Lithuania',
  },
  'LU' : {
    name: 'Luxembourg',
  },
  'MO' : {
    name: 'Macao',
  },
  'MK' : {
    name: 'Macedonia',
  },
  'MG' : {
    name: 'Madagascar',
  },
  'MW' : {
    name: 'Malawi',
  },
  'MY' : {
    name: 'Malaysia',
  },
  'MV' : {
    name: 'Maldives',
  },
  'ML' : {
    name: 'Mali',
  },
  'MT' : {
    name: 'Malta',
  },
  'MH' : {
    name: 'Marshall Islands',
  },
  'MQ' : {
    name: 'Martinique',
  },
  'MR' : {
    name: 'Mauritania',
  },
  'MU' : {
    name: 'Mauritius',
  },
  'YT' : {
    name: 'Mayotte',
  },
  'MX' : {
    name: 'Mexico',
  },
  'FM' : {
    name: 'Micronesia, Federated States Of',
  },
  'MD' : {
    name: 'Moldova',
  },
  'MC' : {
    name: 'Monaco',
  },
  'MN' : {
    name: 'Mongolia',
  },
  'ME' : {
    name: 'Montenegro',
  },
  'MS' : {
    name: 'Montserrat',
  },
  'MA' : {
    name: 'Morocco',
  },
  'MZ' : {
    name: 'Mozambique',
  },
  'MM' : {
    name: 'Myanmar',
  },
  'NA' : {
    name: 'Namibia',
  },
  'NR' : {
    name: 'Nauru',
  },
  'NP' : {
    name: 'Nepal',
  },
  'NL' : {
    name: 'Netherlands',
  },
  'AN' : {
    name: 'Netherlands Antilles',
  },
  'NC' : {
    name: 'New Caledonia',
  },
  'NZ' : {
    name: 'New Zealand',
  },
  'NI' : {
    name: 'Nicaragua',
  },
  'NE' : {
    name: 'Niger',
  },
  'NG' : {
    name: 'Nigeria',
  },
  'NU' : {
    name: 'Niue',
  },
  'NF' : {
    name: 'Norfolk Island',
  },
  'MP' : {
    name: 'Northern Mariana Islands',
  },
  'NO' : {
    name: 'Norway',
  },
  'OM' : {
    name: 'Oman',
  },
  'PK' : {
    name: 'Pakistan',
  },
  'PW' : {
    name: 'Palau',
  },
  'PS' : {
    name: 'Palestinian Territory, Occupied',
  },
  'PA' : {
    name: 'Panama',
  },
  'PG' : {
    name: 'Papua New Guinea',
  },
  'PY' : {
    name: 'Paraguay',
  },
  'PE' : {
    name: 'Peru',
  },
  'PH' : {
    name: 'Philippines',
  },
  'PN' : {
    name: 'Pitcairn',
  },
  'PL' : {
    name: 'Poland',
  },
  'PT' : {
    name: 'Portugal',
  },
  'PR' : {
    name: 'Puerto Rico',
  },
  'QA' : {
    name: 'Qatar',
  },
  'RE' : {
    name: 'Reunion',
  },
  'RO' : {
    name: 'Romania',
  },
  'RU' : {
    name: 'Russian Federation',
  },
  'RW' : {
    name: 'Rwanda',
  },
  'BL' : {
    name: 'Saint Barthelemy',
  },
  'SH' : {
    name: 'Saint Helena',
  },
  'KN' : {
    name: 'Saint Kitts And Nevis',
  },
  'LC' : {
    name: 'Saint Lucia',
  },
  'MF' : {
    name: 'Saint Martin',
  },
  'PM' : {
    name: 'Saint Pierre And Miquelon',
  },
  'VC' : {
    name: 'Saint Vincent And Grenadines',
  },
  'WS' : {
    name: 'Samoa',
  },
  'SM' : {
    name: 'San Marino',
  },
  'ST' : {
    name: 'Sao Tome And Principe',
  },
  'SA' : {
    name: 'Saudi Arabia',
  },
  'SN' : {
    name: 'Senegal',
  },
  'RS' : {
    name: 'Serbia',
  },
  'SC' : {
    name: 'Seychelles',
  },
  'SL' : {
    name: 'Sierra Leone',
  },
  'SG' : {
    name: 'Singapore',
  },
  'SK' : {
    name: 'Slovakia',
  },
  'SI' : {
    name: 'Slovenia',
  },
  'SB' : {
    name: 'Solomon Islands',
  },
  'SO' : {
    name: 'Somalia',
  },
  'ZA' : {
    name: 'South Africa',
  },
  'GS' : {
    name: 'South Georgia And Sandwich Isl.',
  },
  'ES' : {
    name: 'Spain',
  },
  'LK' : {
    name: 'Sri Lanka',
  },
  'SD' : {
    name: 'Sudan',
  },
  'SR' : {
    name: 'Suriname',
  },
  'SJ' : {
    name: 'Svalbard And Jan Mayen',
  },
  'SZ' : {
    name: 'Swaziland',
  },
  'SE' : {
    name: 'Sweden',
  },
  'CH' : {
    name: 'Switzerland',
  },
  'SY' : {
    name: 'Syrian Arab Republic',
  },
  'TW' : {
    name: 'Taiwan',
  },
  'TJ' : {
    name: 'Tajikistan',
  },
  'TZ' : {
    name: 'Tanzania',
  },
  'TH' : {
    name: 'Thailand',
  },
  'TL' : {
    name: 'Timor-Leste',
  },
  'TG' : {
    name: 'Togo',
  },
  'TK' : {
    name: 'Tokelau',
  },
  'TO' : {
    name: 'Tonga',
  },
  'TT' : {
    name: 'Trinidad And Tobago',
  },
  'TN' : {
    name: 'Tunisia',
  },
  'TR' : {
    name: 'Turkey',
  },
  'TM' : {
    name: 'Turkmenistan',
  },
  'TC' : {
    name: 'Turks And Caicos Islands',
  },
  'TV' : {
    name: 'Tuvalu',
  },
  'UG' : {
    name: 'Uganda',
  },
  'UA' : {
    name: 'Ukraine',
  },
  'AE' : {
    name: 'United Arab Emirates',
  },
  'GB' : {
    name: 'United Kingdom',
  },
  'US' : {
    name: 'United States',
  },
  'UM' : {
    name: 'United States Outlying Islands',
  },
  'UY' : {
    name: 'Uruguay',
  },
  'UZ' : {
    name: 'Uzbekistan',
  },
  'VU' : {
    name: 'Vanuatu',
  },
  'VE' : {
    name: 'Venezuela',
  },
  'VN' : {
    name: 'Viet Nam',
  },
  'VG' : {
    name: 'Virgin Islands, British',
  },
  'VI' : {
    name: 'Virgin Islands, U.S.',
  },
  'WF' : {
    name: 'Wallis And Futuna',
  },
  'EH' : {
    name: 'Western Sahara',
  },
  'YE' : {
    name: 'Yemen',
  },
  'ZM' : {
    name: 'Zambia',
  },
  'ZW' : {
    name: 'Zimbabwe'
  },
  'UNK': {
    name: 'Unknown'
  }
};












const nameCountries = {
  'Marshall Islands': {iso: 'MH'},
  'French Southern Territories': {iso: 'TF'},
  'Bahrain': {iso: 'BH'},
  'Romania': {iso: 'RO'},
  'Malta': {iso: 'MT'},
  'Djibouti': {iso: 'DJ'},
  'Samoa': {iso: 'WS'},
  'Liberia': {iso: 'LR'},
  'Saint Kitts And Nevis': {iso: 'KN'},
  'Vanuatu': {iso: 'VU'},
  'Cyprus': {iso: 'CY'},
  'Falkland Islands (Malvinas)': {iso: 'FK'},
  'Hungary': {iso: 'HU'},
  'Niger': {iso: 'NE'},
  'Greenland': {iso: 'GL'},
  'Saint Pierre And Miquelon': {iso: 'PM'},
  'Cuba': {iso: 'CU'},
  'Sri Lanka': {iso: 'LK'},
  'Slovakia': {iso: 'SK'},
  'Niue': {iso: 'NU'},
  'Viet Nam': {iso: 'VN'},
  'Paraguay': {iso: 'PY'},
  'Lithuania': {iso: 'LT'},
  'Kuwait': {iso: 'KW'},
  'Anguilla': {iso: 'AI'},
  'Norfolk Island': {iso: 'NF'},
  'South Africa': {iso: 'ZA'},
  'New Zealand': {iso: 'NZ'},
  'Slovenia': {iso: 'SI'},
  'Bosnia And Herzegovina': {iso: 'BA'},
  'Holy See (Vatican City State)': {iso: 'VA'},
  'Antigua And Barbuda': {iso: 'AG'},
  'France': {iso: 'FR'},
  'Bangladesh': {iso: 'BD'},
  'Bulgaria': {iso: 'BG'},
  'Iceland': {iso: 'IS'},
  'French Guiana': {iso: 'GF'},
  'Saint Barthelemy': {iso: 'BL'},
  'Aruba': {iso: 'AW'},
  'Serbia': {iso: 'RS'},
  'Northern Mariana Islands': {iso: 'MP'},
  'Trinidad And Tobago': {iso: 'TT'},
  'Togo': {iso: 'TG'},
  'Martinique': {iso: 'MQ'},
  'Afghanistan': {iso: 'AF'},
  'Italy': {iso: 'IT'},
  'Norway': {iso: 'NO'},
  'Belarus': {iso: 'BY'},
  'Gibraltar': {iso: 'GI'},
  'Pakistan': {iso: 'PK'},
  'Myanmar': {iso: 'MM'},
  'Bhutan': {iso: 'BT'},
  'Burkina Faso': {iso: 'BF'},
  'United States Outlying Islands': {iso: 'UM'},
  'China': {iso: 'CN'},
  'Russian Federation': {iso: 'RU'},
  'Haiti': {iso: 'HT'},
  'Swaziland': {iso: 'SZ'},
  'Mexico': {iso: 'MX'},
  'Heard Island & Mcdonald Islands': {iso: 'HM'},
  'Bolivia': {iso: 'BO'},
  'Taiwan': {iso: 'TW'},
  'Lao People\'s Democratic Republic': {iso: 'LA'},
  'Isle Of Man': {iso: 'IM'},
  'Qatar': {iso: 'QA'},
  'Czech Republic': {iso: 'CZ'},
  'Lesotho': {iso: 'LS'},
  'Burundi': {iso: 'BI'},
  'Dominica': {iso: 'DM'},
  'Indonesia': {iso: 'ID'},
  'Costa Rica': {iso: 'CR'},
  'Honduras': {iso: 'HN'},
  'Montserrat': {iso: 'MS'},
  'Saint Martin': {iso: 'MF'},
  'Finland': {iso: 'FI'},
  'Tokelau': {iso: 'TK'},
  'India': {iso: 'IN'},
  'Argentina': {iso: 'AR'},
  'Colombia': {iso: 'CO'},
  'Ukraine': {iso: 'UA'},
  'Christmas Island': {iso: 'CX'},
  'Kyrgyzstan': {iso: 'KG'},
  'Hong Kong': {iso: 'HK'},
  'Turkmenistan': {iso: 'TM'},
  'Morocco': {iso: 'MA'},
  'Aland Islands': {iso: 'AX'},
  'Macedonia': {iso: 'MK'},
  'Botswana': {iso: 'BW'},
  'Antarctica': {iso: 'AQ'},
  'Gabon': {iso: 'GA'},
  'Kenya': {iso: 'KE'},
  'Saint Helena': {iso: 'SH'},
  'Mozambique': {iso: 'MZ'},
  'Sao Tome And Principe': {iso: 'ST'},
  'American Samoa': {iso: 'AS'},
  'Guyana': {iso: 'GY'},
  'Lebanon': {iso: 'LB'},
  'South Georgia And Sandwich Isl.': {iso: 'GS'},
  'Andorra': {iso: 'AD'},
  'Cocos (Keeling) Islands': {iso: 'CC'},
  'Kiribati': {iso: 'KI'},
  'Luxembourg': {iso: 'LU'},
  'Iran, Islamic Republic Of': {iso: 'IR'},
  'El Salvador': {iso: 'SV'},
  'Namibia': {iso: 'NA'},
  'Svalbard And Jan Mayen': {iso: 'SJ'},
  'Zambia': {iso: 'ZM'},
  'San Marino': {iso: 'SM'},
  'Madagascar': {iso: 'MG'},
  'Montenegro': {iso: 'ME'},
  'Barbados': {iso: 'BB'},
  'Guinea': {iso: 'GN'},
  'Cameroon': {iso: 'CM'},
  'Nigeria': {iso: 'NG'},
  'Fiji': {iso: 'FJ'},
  'Wallis And Futuna': {iso: 'WF'},
  'Jordan': {iso: 'JO'},
  'Sierra Leone': {iso: 'SL'},
  'Sudan': {iso: 'SD'},
  'Azerbaijan': {iso: 'AZ'},
  'Netherlands': {iso: 'NL'},
  'Solomon Islands': {iso: 'SB'},
  'Micronesia, Federated States Of': {iso: 'FM'},
  'Reunion': {iso: 'RE'},
  'Uruguay': {iso: 'UY'},
  'Oman': {iso: 'OM'},
  'Latvia': {iso: 'LV'},
  'Maldives': {iso: 'MV'},
  'Cook Islands': {iso: 'CK'},
  'Belize': {iso: 'BZ'},
  'Guinea-Bissau': {iso: 'GW'},
  'Israel': {iso: 'IL'},
  'Mongolia': {iso: 'MN'},
  'Yemen': {iso: 'YE'},
  'United States': {iso: 'US'},
  'Bouvet Island': {iso: 'BV'},
  'Germany': {iso: 'DE'},
  'Nauru': {iso: 'NR'},
  'Equatorial Guinea': {iso: 'GQ'},
  'Central African Republic': {iso: 'CF'},
  'Panama': {iso: 'PA'},
  'Netherlands Antilles': {iso: 'AN'},
  'Eritrea': {iso: 'ER'},
  'Benin': {iso: 'BJ'},
  'Mauritius': {iso: 'MU'},
  'Pitcairn': {iso: 'PN'},
  'Greece': {iso: 'GR'},
  'Australia': {iso: 'AU'},
   'Singapore': {iso: 'SG'},
   'Denmark': {iso: 'DK'},
   'Thailand': {iso: 'TH'},
   'Spain': {iso: 'ES'},
   'Georgia': {iso: 'GE'},
   'Nicaragua': {iso: 'NI'},
   'Papua New Guinea': {iso: 'PG'},
   'Macao': {iso: 'MO'},
   'Turks And Caicos Islands': {iso: 'TC'},
   'Gambia': {iso: 'GM'},
   'Somalia': {iso: 'SO'},
   'Saint Lucia': {iso: 'LC'},
   'Ecuador': {iso: 'EC'},
   'Rwanda': {iso: 'RW'},
   'Mauritania': {iso: 'MR'},
   'Virgin Islands, U.S.': {iso: 'VI'},
   'Kazakhstan': {iso: 'KZ'},
   'Bahamas': {iso: 'BS'},
   'Armenia': {iso: 'AM'},
   'Virgin Islands, British': {iso: 'VG'},
   'United Arab Emirates': {iso: 'AE'},
   'Palau': {iso: 'PW'},
   'Libyan Arab Jamahiriya': {iso: 'LY'},
    'Angola': {iso: 'AO'},
    'Turkey': {iso: 'TR'},
    'Philippines': {iso: 'PH'},
    'Cayman Islands': {iso: 'KY'},
    'Congo, Democratic Republic': {iso: 'CD'},
    'Uganda': {iso: 'UG'},
    'Peru': {iso: 'PE'},
    'French Polynesia': {iso: 'PF'},
    'Korea': {iso: 'KR'},
    'Malawi': {iso: 'MW'},
    'Malaysia': {iso: 'MY'},
    'Ghana': {iso: 'GH'},
    'Congo': {iso: 'CG'},
    'Cambodia': {iso: 'KH'},
    'Mali': {iso: 'ML'},
    'Guatemala': {iso: 'GT'},
    'Poland': {iso: 'PL'},
    'Tanzania': {iso: 'TZ'},
    'Brunei Darussalam': {iso: 'BN'},
    'Comoros': {iso: 'KM'},
     'Austria': {iso: 'AT'},
     'Moldova': {iso: 'MD'},
     'Egypt': {iso: 'EG'},
     'Albania': {iso: 'AL'},
     'Nepal': {iso: 'NP'},
     'Faroe Islands': {iso: 'FO'},
     'Guadeloupe': {iso: 'GP'},
     'Switzerland': {iso: 'CH'},
     'Estonia': {iso: 'EE'},
     'British Indian Ocean Territory': {iso: 'IO'},
     'Algeria': {iso: 'DZ'},
     'Croatia': {iso: 'HR'},
     'Monaco': {iso: 'MC'},
     'Chad': {iso: 'TD'},
     'Chile': {iso: 'CL'},
     'Dominican Republic': {iso: 'DO'},
     'Bermuda': {iso: 'BM'},
     'Guernsey': {iso: 'GG'},
     'Jamaica': {iso: 'JM'},
     'United Kingdom': {iso: 'GB'},
      'Jersey': {iso: 'JE'},
      'Tuvalu': {iso: 'TV'},
      'Sweden': {iso: 'SE'},
      'Tonga': {iso: 'TO'},
      'Japan': {iso: 'JP'},
      'Puerto Rico': {iso: 'PR'},
      'Seychelles': {iso: 'SC'},
      'Uzbekistan': {iso: 'UZ'},
      'Canada': {iso: 'CA'},
      'Senegal': {iso: 'SN'},
      'Syrian Arab Republic': {iso: 'SY'},
      'Venezuela': {iso: 'VE'},
      'Ethiopia': {iso: 'ET'},
      'Brazil': {iso: 'BR'},
      'Cote D\'Ivoire': {iso: 'CI'},
      'Palestinian Territory, Occupied': {iso: 'PS'},
      'Tunisia': {iso: 'TN'},
      'Western Sahara': {iso: 'EH'},
      'Suriname': {iso: 'SR'},
      'Iraq': {iso: 'IQ'},
      'Portugal': {iso: 'PT'},
      'Ireland': {iso: 'IE'},
      'Cape Verde': {iso: 'CV'},
      'Tajikistan': {iso: 'TJ'},
      'Liechtenstein': {iso: 'LI'},
      'New Caledonia': {iso: 'NC'},
      'Zimbabwe': {iso: 'ZW'},
      'Belgium': {iso: 'BE'},
      'Grenada': {iso: 'GD'},
      'Mayotte': {iso: 'YT'},
      'Saint Vincent And Grenadines': {iso: 'VC'},
      'Guam': {iso: 'GU'},
      'Timor-Leste': {iso: 'TL'},
      'Saudi Arabia': {iso: 'SA'},
      'Unknown': {iso: 'UNK'}
     }


function iso2Name(code) {
  try {
    return isoCountries[code].name;
  } catch(err) {
    return 'Unknown';
  }
}



function name2Iso(code) {
   try {
    return nameCountries[code].iso;
    } catch(err) {
    return 'UNK';
  }
}
