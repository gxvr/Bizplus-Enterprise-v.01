    var tableId = 'export-buttons-table';
    var ExportButtons = document.getElementById(tableId);

    var instance = new TableExport(ExportButtons, {
        formats: ['csv'],
        exportButtons: false
    });
    // **** jQuery **************************
    //    $(ExportButtons).tableExport({
    //        formats: ['xls'],
    //        exportButtons: false
    //    });
    // **************************************
    var CSV = instance.CONSTANTS.FORMAT.CSV;

    //                                          // "id"  // format
    var exportDataCSV = instance.getExportData()[tableId][CSV];

    // get filesize
    var bytesCSV = instance.getFileSize(exportDataCSV.data, exportDataCSV.fileExtension);

    console.log('filesize (CSV):', bytesCSV + 'B');

    var CSVbutton = document.getElementById('customCSVButton');
    CSVbutton.addEventListener('click', function (e) {
        //                   // data             // mime                 // name                 // extension
        instance.export2file(exportDataCSV.data, exportDataCSV.mimeType, exportDataCSV.filename, exportDataCSV.fileExtension);
    });
