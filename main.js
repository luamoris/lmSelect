// SELECT
function logData(data) {
   console.log(data);
}

const selectorId1 = "formId1";
const selectorForm1 = new LmSelect(document, selectorId1);
selectorForm1.init(logData);

const selectorId2 = "formId2";
const selectorForm2 = new LmSelect(document, selectorId2);
selectorForm2.init(logData);