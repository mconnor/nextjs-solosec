import SpaLink from "../../SpaLink";

export const PageList = {
    pages: {
        "page1": "01_02splash",
        "page2": "02_06discover",
        "page3": "03_12acog",
        "page4": "04_14acog",
        "page5": "05_17studies",
        "page6": "06_19chart",
        "page7": "07_21chart_france",
        "page8": "08_23alcohol",
        "page9": "09_25easy",
        "page10": "10_26howtoVideo",
        "page11": "11_28coupon",
        "page12": "12_30survey",
        "page13": "13_32singleDose",
        "page14": "14_34delivers",
        "page15": "15_36chart",
        "page16": "16_384million",
        "page17": "17_40nonAherence",
        "page18": "18_42cs1",
        "page19": "19_43cs2",
        "page20": "20_49cs4",
        "page21": "21_56cs6",
        "page22": "22_61segmentNarratives",
        "page23": "23_65prevelance",
        "page24": "24_66riskFactors",
        "page25": "25_68BVsequelae",
        "page26": "26_70video",
        "page27": "27_71qa",
    },
    seq: {
        "06_a": ["page12", "page6", "page7", "page2"],
        "06_b": ["page12", "page6", "page7", "page2"],
        "06_c": ["page12", "page6", "page7", "page2"],
        "06_d": ["page12", "page6", "page7", "page2"]
    }
};

export function linkTo(page:string, t: boolean) {
    setTimeout(()=>{window.location.href = PageList["pages"][page];}, t ? 100: 0)
}