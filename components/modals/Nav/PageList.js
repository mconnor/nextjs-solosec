import {useAppState} from "../../../state";

export const PageList = {
    pages: {
        "1": "01_02splash",
        "2": "02_06discover",
        "3": "03_12acog",
        "4": "04_14acog",
        "5": "05_17studies",
        "6": "06_19chart",
        "7": "07_21chart_france",
        "8": "08_23alcohol",
        "9": "09_25easy",
        "10": "10_26howtoVideo",
        "11": "11_28coupon",
        "12": "12_30survey",
        "13": "13_32singleDose",
        "14": "14_34delivers",
        "15": "15_36chart",
        "16": "16_384million",
        "17": "17_40nonAherence",
        "18": "18_42cs1",
        "19": "19_43cs2",
        "20": "20_49cs4",
        "21": "21_56cs6",
        "22": "22_61segmentNarratives",
        "23": "23_65prevelance",
        "24": "24_66riskFactors",
        "25": "25_68BVsequelae",
        "26": "26_70video",
        "27": "27_71qa",
    },
    seq: {
        "main": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", '24', "25", "26", "27"],
        "02_a": ["2", "12", "6", "7", "2"],
        "02_b": ["page12", "page6", "page7", "page2"],
        "02_c": ["page12", "page6", "page7", "page2"],
        "02_d": ["page12", "page6", "page7", "page2"]
    }
};

export function linkTo(page, t, seq) {
    // const {setCurrentSequence} = useAppState();
    // setCurrentSequence(seq);
    // setTimeout(()=>{window.location.href = PageList["pages"][page];}, t ? 100: 0)
}

export function swipeLink(n, dir) {
    // // const {currSeq, setCurrentSequence} = useAppState();
    // console.log(currSeq, n, dir);
    // const path = PageList.seq.main;
    // if (currSeq === "") {
    //     navigate();
    // } else {
    //     if (PageList.seq[currSeq].indexOf(path[n]) < 1) {
    //         setCurrentSequence("");
    //         navigate();
    //     } else {
    //         const page = path[n];
    //         const thisPath = PageList.seq[currSeq];
    //         const currentPage = thisPath.indexOf(page);
    //         if (dir === "Right") if (currentPage !== 0) window.location.href = PageList["pages"][thisPath[currentPage-1]];
    //         if (dir === "Left") if (currentPage !== thisPath.length-1) window.location.href = PageList["pages"][thisPath[currentPage+1]];
    //     }
    // }
    //
    // function navigate() {
    //     if (dir === "Right") if (n !== 0) window.location.href = PageList["pages"][path[n-1]];
    //     if (dir === "Left") if (n !== path.length-1) window.location.href = PageList["pages"][path[n+1]];
    // }
}

