import { createStore } from "vuex";
import _ from 'lodash'

const store = createStore({
    state: {
        data: [
            {
                "name": "Alabama",
                "code": "AL",
                "addition": "7",
                "point": "9",
                "segment": "1",
                "multiplication": "32"
            },
            {
                "name": "Alaska",
                "code": "AK",
                "addition": "11",
                "point": "3",
                "segment": "1",
                "multiplication": "9"
            },
            {
                "name": "Arizona",
                "code": "AZ",
                "addition": "14",
                "point": "11",
                "segment": "3",
                "multiplication": "28"
            },
            {
                "name": "Arkansas",
                "code": "AR",
                "addition": "8",
                "point": "6",
                "segment": "1",
                "multiplication": "32"
            },
            {
                "name": "California",
                "code": "CA",
                "addition": "12",
                "point": "55",
                "segment": "9",
                "multiplication": "48"
            },
            {
                "name": "Colorado",
                "code": "CO",
                "addition": "8",
                "point": "9",
                "segment": "1",
                "multiplication": "48"
            },
            {
                "name": "Connecticut",
                "code": "CT",
                "addition": "9",
                "point": "7",
                "segment": "1",
                "multiplication": "48"
            },
            {
                "name": "Delaware",
                "code": "DE",
                "addition": "15",
                "point": "3",
                "segment": "1",
                "multiplication": "12"
            },
            {
                "name": "Dist Of Columbia",
                "code": "DC",
                "addition": "12",
                "point": "3",
                "segment": "1",
                "multiplication": "18"
            },
            {
                "name": "Florida",
                "code": "FL",
                "addition": "14",
                "point": "29",
                "segment": "5",
                "multiplication": "64"
            },
            {
                "name": "Georgia",
                "code": "GA",
                "addition": "13",
                "point": "16",
                "segment": "3",
                "multiplication": "72"
            },
            {
                "name": "Hawaii",
                "code": "HI",
                "addition": "9",
                "point": "4",
                "segment": "1",
                "multiplication": "64"
            },
            {
                "name": "Idaho",
                "code": "ID",
                "addition": "12",
                "point": "4",
                "segment": "1",
                "multiplication": "36"
            },
            {
                "name": "Illinois",
                "code": "IL",
                "addition": "10",
                "point": "20",
                "segment": "5",
                "multiplication": "42"
            },
            {
                "name": "Indiana",
                "code": "IN",
                "addition": "14",
                "point": "11",
                "segment": "3",
                "multiplication": "56"
            },
            {
                "name": "Kansas",
                "code": "KS",
                "addition": "7",
                "point": "6",
                "segment": "1",
                "multiplication": "54"
            },
            {
                "name": "Kentucky",
                "code": "KY",
                "addition": "9",
                "point": "8",
                "segment": "1",
                "multiplication": "49"
            },
            {
                "name": "Louisiana",
                "code": "LA",
                "addition": "16",
                "point": "8",
                "segment": "1",
                "multiplication": "36"
            },
            {
                "name": "lowa",
                "code": "LA",
                "addition": "8",
                "point": "6",
                "segment": "1",
                "multiplication": "64"
            },
            {
                "name": "Marine",
                "code": "ME",
                "addition": "13",
                "point": "4",
                "segment": "1",
                "multiplication": "72"
            },
            {
                "name": "Maryland",
                "code": "MD",
                "addition": "10",
                "point": "10",
                "segment": "3",
                "multiplication": "42"
            },
            {
                "name": "Massachusetts",
                "code": "MA",
                "addition": "15",
                "point": "11",
                "segment": "3",
                "multiplication": "42"
            },
            {
                "name": "Michigan",
                "code": "MI",
                "addition": "9",
                "point": "16",
                "segment": "3",
                "multiplication": "28"
            },
            {
                "name": "Minnesota",
                "code": "MN",
                "addition": "15",
                "point": "10",
                "segment": "3",
                "multiplication": "54"
            },
            {
                "name": "Mississippi",
                "code": "MS",
                "addition": "12",
                "point": "6",
                "segment": "1",
                "multiplication": "63"
            },
            {
                "name": "Missouri",
                "code": "MO",
                "addition": "9",
                "point": "10",
                "segment": "3",
                "multiplication": "63"
            },
            {
                "name": "Montana",
                "code": "MT",
                "addition": "16",
                "point": "3",
                "segment": "1",
                "multiplication": "21"
            },
            {
                "name": "Nebraska",
                "code": "NE",
                "addition": "11",
                "point": "5",
                "segment": "1",
                "multiplication": "28"
            },
            {
                "name": "Nevada",
                "code": "NV",
                "addition": "13",
                "point": "6",
                "segment": "1",
                "multiplication": "72"
            },
            {
                "name": "New Hampshire",
                "code": "NH",
                "addition": "17",
                "point": "4",
                "segment": "1",
                "multiplication": "24"
            },
            {
                "name": "New Jersey",
                "code": "NJ",
                "addition": "12",
                "point": "14",
                "segment": "3",
                "multiplication": "24"
            },
            {
                "name": "New Mexico",
                "code": "NM",
                "addition": "15",
                "point": "5",
                "segment": "1",
                "multiplication": "49"
            },
            {
                "name": "New York",
                "code": "NY",
                "addition": "11",
                "point": "29",
                "segment": "5",
                "multiplication": "32"
            },
            {
                "name": "North Corolina",
                "code": "NC",
                "addition": "11",
                "point": "15",
                "segment": "3",
                "multiplication": "27"
            },
            {
                "name": "North Dakota",
                "code": "ND",
                "addition": "8",
                "point": "3",
                "segment": "1",
                "multiplication": "81"
            },
            {
                "name": "Ohio",
                "code": "OH",
                "addition": "12",
                "point": "18",
                "segment": "5",
                "multiplication": "63"
            },
            {
                "name": "Oklahoma",
                "code": "OK",
                "addition": "16",
                "point": "7",
                "segment": "1",
                "multiplication": "36"
            },
            {
                "name": "Oregon",
                "code": "OR",
                "addition": "17",
                "point": "7",
                "segment": "1",
                "multiplication": "27"
            },
            {
                "name": "Pennsylvania",
                "code": "PA",
                "addition": "15",
                "point": "20",
                "segment": "5",
                "multiplication": "54"
            },
            {
                "name": "Rhode Isaland",
                "code": "RI",
                "addition": "7",
                "point": "4",
                "segment": "1",
                "multiplication": "24"
            },
            {
                "name": "South Carolina",
                "code": "SC",
                "addition": "17",
                "point": "9",
                "segment": "1",
                "multiplication": "56"
            },
            {
                "name": "South Dokota",
                "code": "SD",
                "addition": "12",
                "point": "3",
                "segment": "1",
                "multiplication": "35"
            },
            {
                "name": "Tennessee",
                "code": "TN",
                "addition": "10",
                "point": "11",
                "segment": "3",
                "multiplication": "24"
            },
            {
                "name": "Texas",
                "code": "TX",
                "addition": "13",
                "point": "38",
                "segment": "9",
                "multiplication": "56"
            },
            {
                "name": "Utah",
                "code": "UT",
                "addition": "10",
                "point": "6",
                "segment": "1",
                "multiplication": "24"
            },
            {
                "name": "Vermont",
                "code": "VT",
                "addition": "10",
                "point": "3",
                "segment": "1",
                "multiplication": ""
            },
            {
                "name": "Viginia",
                "code": "VA",
                "addition": "13",
                "point": "13",
                "segment": "3",
                "multiplication": "49"
            },
            {
                "name": "Washington",
                "code": "WA",
                "addition": "11",
                "point": "12",
                "segment": "3",
                "multiplication": "36"
            },
            {
                "name": "West Virginia",
                "code": "WV",
                "addition": "14",
                "point": "5",
                "segment": "1",
                "multiplication": "27"
            },
            {
                "name": "Wisconsin",
                "code": "WI",
                "addition": "16",
                "point": "10",
                "segment": "3",
                "multiplication": "36"
            },
            {
                "name": "Wyoming",
                "code": "WY",
                "addition": "14",
                "point": "3",
                "segment": "1",
                "multiplication": "45"
            }
        ]
    }
})

export default store
