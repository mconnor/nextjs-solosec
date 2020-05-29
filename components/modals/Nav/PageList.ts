interface Foo {
    pages: { [key: string]: string; };
    seq:{ [key: string]: string[]; }
}

export const PageList: Foo = {
    pages: {
        "1": "01_02splash",
        "2": "02_06discover",
        "3": "03_14acog",
        "4": "04_17studies",
        "5": "05_19chart",
        "6": "06_21chart_france",
        "7": "07_23alcohol",
        "8": "08_25easy",
        "9": "09_26howtoVideo",
        "10": "10_28coupon",
        "11": "11_30survey",
        "12": "12_32singleDose",
        "13": "13_34delivers",
        "14": "14_36chart",
        "15": "15_384million",
        "16": "16_40nonAherence",
        "17": "17_42cs1",
        "18": "18_43cs2",
        "19": "19_49cs4",
        "20": "20_56cs6",
        "21": "21_61segmentNarratives",
        "22": "22_65prevelance",
        "23": "23_66riskFactors",
        "24": "24_68BVsequelae",
        "25": "25_70video",
        "26": "26_71qa",
    },
    seq: {
        "main": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", '24', "25", "26"],
        "02_a": ["2", "4", "6", "2"],
        "02_b": ["2", "7", "12", "2"],
        "02_c": ["2", "8", "12", "2"],
        "02_d": ["2", "10", "2"],
        "20_a": ["20", "3", "4", "4", "20"],
        "20_b": ["20", "8", "9", "12", "20"],
        "20_c": ["20", "3", "11", "12", "20"],
        "20_d": ["20", "10", "20"],
        "20_e": ["20", "3", "20"],
        "21_a": ["21", "7", "8", "12", "21"],
        "21_b": ["21", "8", "12", "21"],
        "21_c": ["21", "10", "21"],
        "21_d": ["21", "3", "21"],
        "22_a": ["22", "1", "3", "4", "5", "7", "8", "11", "10", "12", "22"],
        "22_b": ["22", "1", "3", "4", "5", "6", "11", "7", "8", "9", "10", "12", "22"],
        "22_c": ["22", "1", "3", "4", "5", "11", "7", "8", "9", "10", "12", "22"],
    }
};

