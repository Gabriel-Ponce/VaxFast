import {useState} from 'react';
export const Countries = [
"USA",
"Mexico"

]
export const Places = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
 	"CT",
	"DE",
 	"DC",
 	"FL",
	"GA",
	"HI",
    "ID",
	"IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
	"MS",
 	"MO",
 	"MT",
    "NE",
 	"NV",
    "NH",
 	"NJ",
 	"NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
	"RI",
	"SC",
    "SD",
	"TN",
    "TX",
    "VI",
    "UT",
    "VT",
    "VA",
	"WA",
 	"WV",
 	"WI",
	"WY"
]


var selectedstate = 0;
export {selectedstate};
export const setselectedstate = (change) => {
selectedstate = change

}