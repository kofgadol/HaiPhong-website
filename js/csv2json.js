/**
 * simple script to convert CSV format string to JSON string
 * note: first line of the CSV string must be the headers line
 * Created by toMVo on 10/25/13.
 */

var csv2json = function(csvStr){
    var rows = csvStr.split("\n"),
        cols,
        jsonStr = "[",
        filedNames=rows[0].replace(/-/g,"_").split(",");

    for(var i= 1,numOfRows=rows.length;i<numOfRows;i++){
        cols=rows[i].split(",");
        jsonStr+="{";
        for(var j= 0, numOfCols=cols.length-1;j<numOfCols;j++){
            jsonStr+='"'+filedNames[j]+'":"'+cols[j]+'",';
        }
        jsonStr+='"'+filedNames[cols.length-1]+'":"'+cols[cols.length-1]+'"';
        jsonStr+="},\n";
    }
    jsonStr=jsonStr.substr(0,jsonStr.length-2);//remove last ,\n

    jsonStr+="]";

    return jsonStr;
};