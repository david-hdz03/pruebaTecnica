class ZipCode {
    /**
     * Function to get zip code's details
     * 
     * @memberof ZipCode
     * @param {String} zipCode  Zip code
     * @returns {Object}  Object with zip code's details
     */

    getZipCodeDetails(zipCode) {
        let countryCodes = ['AD', 'AR', 'AS', 'AT', 'AU', 'BD', 'BE', 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'DO', 'ES', 'FI', 'FO', 'FR', 'GB', 'GF',
            'GG', 'GL', 'GP', 'GT', 'GU', 'GY', 'HR', 'HU', 'IM', 'IN', 'IS', 'IT', 'JE', 'JP', 'LI', 'LK', 'LT', 'LU', 'MC', 'MD', 'MH', 'MK',
            'MP', 'MQ', 'MX', 'MY', 'ML', 'NO', 'NZ', 'PH', 'PK', 'PL', 'PM', 'PR', 'PT', 'RE', 'RU', 'SE', 'SI', 'SJ', 'SK', 'SM', 'TH', 'TR',
            'US', 'VA', 'VI', 'YT', 'ZA'];

        let promises = [];
        let resultObject = {};


        for (let i = 0; i < countryCodes.length; i++) {
            let countryCode = countryCodes[i];
            let isValidZipCode = false;

            switch (countryCode) {
                case 'AD': // Andorra (AD1-7-00)
                    isValidZipCode = /^AD([1-7]00)$/.test(zipCode);
                    break;
                case 'AR': // Argentina (1601-9431)
                    isValidZipCode = zipCode >= 1601 && zipCode <= 9431;
                    break;
                case 'AS': // American Samoa (96799)
                    isValidZipCode = zipCode == 96799;
                    break;
                case 'AT': // Austria (1010-9992)
                    isValidZipCode = zipCode >= 1010 && zipCode <= 9992;
                    break;
                case 'AU': // Australia (0200-9726)
                    isValidZipCode = zipCode >= 200 && zipCode <= 9726;
                    break;
                case 'BD': // Bangladesh (1000-9461)
                    isValidZipCode = zipCode >= 1000 && zipCode <= 9461;
                    break;
                case 'BE': // Belgium (1000-9992)
                    isValidZipCode = zipCode >= 1000 && zipCode <= 9992;
                case 'BG': // Bulgaria (1000 : 9974	)
                    isValidZipCode = zipCode >= 1000 && zipCode <= 9974;
                    break;
                case 'BR': // Brazil (01000-000 : 99990-000	)
                    isValidZipCode = (/^0[1-9]\d{3}-\d{3}$/.test(zipCode) || /^9\d{4}-\d{3}$/.test(zipCode));
                    break;                
                case 'CA': // Canada (A0A : Y1A	)
                    isValidZipCode = (/^[A-Z]\d[A-Z] \d[A-Z]\d$/.test(zipCode));
                    break;
                case 'CH': // Switzerland (1000 : 9658	)
                    isValidZipCode = zipCode >= 1000 && zipCode <= 9658;
                    break;
                case 'CZ': // Czech Republic (100 00 : 798 62)
                    isValidZipCode = zipCode >= 10000 && zipCode <= 79862;
                    break;
                case 'DE': // Germany (01067 : 99998)
                    isValidZipCode = (/^0[1-9]\d{4}$/.test(zipCode) || /^9\d{4}$/.test(zipCode));
                    break;
                case 'DK': // Denmark (0800 : 9990)
                    isValidZipCode = (/^0[1-9]\d{3}$/.test(zipCode) || /^9\d{3}$/.test(zipCode));
                    break;
                case 'DO': // Dominican Republic (10101 : 11906)
                    isValidZipCode = zipCode >= 10101 && zipCode <= 11906;
                    break;
                case 'ES': // Spain (01001 : 52080)
                    isValidZipCode = (/^0[1-9]\d{4}$/.test(zipCode) || /^5\d{4}$/.test(zipCode));
                    break;
                case 'FI': // Finland (00002 : 99999)
                    isValidZipCode = (/^(00002|0000[3-9]|[0-9]{4,5})$/.test(zipCode));
                    break;
                case 'FO': // Faroe Islands (100 : 970)
                    isValidZipCode = zipCode >= 100 && zipCode <= 970;
                    break;
                case 'FR': // France (01000 : 98799)
                    isValidZipCode = (/^0[1-9]\d{3}$/.test(zipCode) || /^9\d{4}$/.test(zipCode));
                    break;
                case 'GB': // United Kingdom (AB1 : ZE3)
                    isValidZipCode = (/^(AB\d{2}|[A-Y][A-Z]\d|ZE3)$/.test(zipCode));
                    break;   
                case 'GF': // French Guiana (97300 : 97390)
                    isValidZipCode = zipCode >= 97300 && zipCode <= 97390;
                    break;
                case 'GG': // Guernsey (GY1 : GY9)
                    isValidZipCode = (/^GY[1-9]$/.test(zipCode));
                    break;
                case 'GL': // Greenland (2412 : 3992)
                    isValidZipCode = zipCode >= 2412 && zipCode <= 3992;
                    break;
                case 'GP': // Guadeloupe (97100 : 97190)
                    isValidZipCode = zipCode >= 97100 && zipCode <= 97190;
                    break;
                case 'GT': // Guatemala (01001 : 22027)
                    isValidZipCode = (/^0[1-9]\d{3}$/.test(zipCode) || /^2\d{4}$/.test(zipCode) && zipCode <= 22027);
                    break;
                case 'GU': // Guam (96910 : 96932)
                    isValidZipCode = zipCode >= 96910 && zipCode <= 96932;
                    break;
                case 'GY': // Guyana (97312 : 97360	)
                    isValidZipCode = zipCode >= 97312 && zipCode <= 97360;
                    break;
                case 'HR': // Croatia (10000 : 53296)
                    isValidZipCode = zipCode >= 10000 && zipCode <= 53296;
                    break;
                case 'HU': // Hungary (1011 : 9985)
                    isValidZipCode = zipCode >= 1011 && zipCode <= 9985;
                    break;
                case 'IM': // Isle of Man (IM1 : IM9)
                    isValidZipCode = (/^IM[1-9]$/.test(zipCode));
                    break;
                case 'IN': // India (110001 : 855126)
                    isValidZipCode = zipCode >= 110001 && zipCode <= 855126;
                    break;
                case 'IS': // Iceland (101 : 902)
                    isValidZipCode = zipCode >= 101 && zipCode <= 902;
                    break;
                case 'IT': // Italy (00010 : 98168)
                    isValidZipCode = (/^(0[1-9]\d{3}|[1-9]\d{4})$/.test(zipCode) && zipCode <= 98168);
                    break;                 
                case 'JE': // Jersey (JE1 : JE3)
                    isValidZipCode = (/^JE[1-3]$/.test(zipCode));
                    break;
                case 'JP': // Japan (100-0001 : 999-8531)
                    isValidZipCode = (/^([1-9]{3})-([0-9]{4})$/.test(zipCode));
                    break;
                case 'LI': // Liechtenstein (9485 : 9498)
                    isValidZipCode = zipCode >= 9485 && zipCode <= 9498;
                    break;
                case 'LK': // Sri Lanka (* : 96167)
                    isValidZipCode = zipCode <= 96167;
                    break;
                case 'LT': // Lithuania (00001 : 99069)
                    isValidZipCode = (/^(00001|0000[2-9]|[0-9]{4,5})$/.test(zipCode));
                    break;
                case 'LU': // Luxembourg (L-1009 : L-9999)
                    isValidZipCode = (/^L-[1-9]\d{3}$/.test(zipCode));
                    break;
                case 'MC': // Monaco (98000)
                    isValidZipCode = zipCode == 98000;
                    break;
                case 'MD': // Moldova (MD-2000 : MD-7439)
                    isValidZipCode = (/^MD-[2-7]\d{3}$/.test(zipCode));
                    break;
                case 'MH': // Marshall Islands (96960 : 96970)
                    isValidZipCode = zipCode >= 96960 && zipCode <= 96970;
                    break;
                case 'MK': // Macedonia (1000 : 7550)
                    isValidZipCode = zipCode >= 1000 && zipCode <= 7550;
                    break;
                case 'MP': // Northern Mariana Islands (96950 : 96952)
                    isValidZipCode = zipCode >= 96950 && zipCode <= 96952;
                    break;
                case 'MQ': // Martinique (97200 : 97290)
                    isValidZipCode = zipCode >= 97200 && zipCode <= 97290;
                    break;
                case 'MX': // Mexico (01000 : 99998)
                    isValidZipCode = (/^0[1-9]\d{3}$/.test(zipCode) || /^9\d{4}$/.test(zipCode) && zipCode <= 99998);
                    break;
                case 'MY': // Malaysia (01000 : 98859)
                    isValidZipCode = (/^0[1-9]\d{3}$/.test(zipCode) || /^9\d{4}$/.test(zipCode) && zipCode <= 98859);
                    break;                
                case 'NL' : // Netherlands (1000 : 9999)
                    isValidZipCode = zipCode >= 1000 && zipCode <= 9999;
                    break;
                case 'NO' : // Norway (0001 : 9991)
                    isValidZipCode = (/^(000[1-9]|[0-9]{4})$/.test(zipCode) && zipCode <= 9991);
                    break;
                case 'NZ' : // New Zealand (0110 : 9893	)
                    isValidZipCode = (/^0[1-9]\d{3}$/.test(zipCode) || /^9\d{4}$/.test(zipCode) && zipCode <= 9893);
                    break;
                case 'PH' : // Philippines (0400 : 9811)
                    isValidZipCode = (/^0[1-9]\d{3}$/.test(zipCode) || /^9\d{3}$/.test(zipCode) && zipCode <= 9811);
                    break;
                case 'PL': // Poland (00-001 : 99-440)
                    isValidZipCode = (/^0[0-9]-\d{3}$/.test(zipCode) || /^9\d{2}-\d{3}$/.test(zipCode));
                    break;
                case 'PM': // Saint Pierre and Miquelon (97500 : 97500)
                    isValidZipCode = zipCode == 97500;
                    break;
                case 'PR': // Puerto Rico (00601 : 00988)
                    isValidZipCode = (/^00[6-9]\d{2}$/.test(zipCode) || /^009\d{2}$/.test(zipCode));
                    break;
                case 'PT': // Portugal (1000-001 : 9980-999	)
                    isValidZipCode = (/^(1000-001|1000-00[1-9]|1000-0[1-9]\d|1000-[1-9]\d{2}|[1-8]\d{2}-\d{3}|9[0-8]\d{2}-\d{3}|9980-99[0-9]|9980-9[0-9]{2}|9980-999)$/.test(zipCode));                   
                    break;
                case 'RE': // French Reunion	 (97400 : 97490)
                    isValidZipCode = zipCode >= 97400 && zipCode <= 97490;
                    break;
                case 'RU': // Russia (101000 : 901993)
                    isValidZipCode = zipCode >= 101000 && zipCode <= 901993;
                    break;
                case 'SE': // Sweden (10005 : 98499	)
                    isValidZipCode = zipCode >= 10005 && zipCode <= 98499;
                    break;
                case 'SI': // Slovenia (1000 : 9600	)
                    isValidZipCode = zipCode >= 1000 && zipCode <= 9600;
                    break;
                case 'SJ': // Svalbard and Jan Mayen (8099 : 9178)
                    isValidZipCode = zipCode >= 8099 && zipCode <= 9178;
                    break;
                case 'SK': // Slovakia (010 01 : 992 01	)
                    isValidZipCode = (/^0[1-9]\d{2} \d{2}$/.test(zipCode) || /^9\d{2} \d{2}$/.test(zipCode));
                    break;
                case 'SM': // San Marino (47890 : 47899	)
                    isValidZipCode = zipCode >= 47890 && zipCode <= 47899;
                    break;
                case 'TH': // Thailand (10100 : 96220)
                    isValidZipCode = zipCode >= 10100 && zipCode <= 96220;
                    break;
                case 'TR': // Turkey (01000 : 81950	)
                    isValidZipCode = (/^0[1-9]\d{3}$/.test(zipCode) || /^8\d{4}$/.test(zipCode) && zipCode <= 81950);
                    break;
                case 'US': // United States (00210 : 99950	)
                    isValidZipCode = (/^00[2-9]\d{2}$/.test(zipCode) || /^9\d{3}$/.test(zipCode) && zipCode <= 99950);
                    break;
                case 'VA': // Vatican  (00120 : 00120)
                    isValidZipCode = (/^00120$/.test(zipCode));
                    break;
                case 'VI': // Virgin Islands (00801 : 00851)
                    isValidZipCode = (/^008[0-5][1-9]$/.test(zipCode) || /^00851$/.test(zipCode));
                    break;
                case 'YT': // Mayotte (97600 : 97680)
                    isValidZipCode = zipCode >= 97600 && zipCode <= 97680;
                    break;
                case 'ZA': // South Africa (0002 : 9992	)
                    isValidZipCode = (/^(000[1-9]|[0-9]{4})$/.test(zipCode) && zipCode <= 9992);
                    break;
                default:
                    break;
            }

            if (isValidZipCode) {
                let promise = this.fetchData(countryCode, zipCode)
                    .then(result => {
                        // Resolve if no error
                        if (!result.error) {
                            resultObject[countryCode] = result;
                        }
                    })
                    .catch(error => {
                        // Not resolve if error
                    });

                promises.push(promise);
            }
        }

        return Promise.all(promises)
        .then(() => {
            if (Object.keys(resultObject).length === 0) {
                // Not found any result
                throw new Error(`Zip Code Not found in any country`);
            } else {
                // Return result
                return resultObject;
            }
        });
    }

    /** Function to Fetch Data
     * memberof ZipCode
     * @param {String} countryCode  Country code
     * @param {Object} zipCode  Zip code
     * @returns {Object}  Object with zip code's details
     */
    fetchData(countryCode, zipCode) {
        var fResult = {
            city: '',
            country: '',
        };

        return new Promise((resolve, reject) => {
            fetch(`https://api.zippopotam.us/${countryCode}/${zipCode}`)
                .then(response => {
                    if (response.status == 404) {
                        reject(fResult);
                    } else {
                        return response.json();
                    }
                })
                .then(data => {
                    if (data != undefined) {
                        fResult.city = data.places[0]['state'];
                        fResult.country = data.country;
                        resolve(fResult);
                    }
                })
                .catch(error => {
                    console.error('error: ', error);
                    reject(fResult);
                });
        });
    }
}

module.exports = ZipCode;
