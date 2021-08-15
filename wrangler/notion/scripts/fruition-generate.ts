import * as fs from "fs";
import code from "../fruitionsite/src/code";

interface FruitionInput {
    myDomain: string;
    notionUrl: string;
    slugs: [string, string][];
    pageTitle: string;
    pageDescription: string;
    googleFont: string;
    customScript: string;
}

const fruitionInput: FruitionInput = {
    myDomain: "",
    notionUrl: "",
    slugs: [],
    pageTitle: "",
    pageDescription: "",
    googleFont: "",
    customScript: "",
};

const generatedCode = code(fruitionInput);

const outputFile = "src/index.ts";
console.log("Inputs:");
console.log(fruitionInput);
console.log(`Writing generated code to '${outputFile}'...`);

fs.writeFileSync(outputFile, generatedCode);
