<!DOCTYPE html>
<html>
<head>
    <title>KantinenApp</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="scripts/jQuery_mobile/jquery.mobile-1.1.0.css"/>
    <script src="scripts/jQuery/jquery-1.7.2.js"></script>
    <script src="scripts/jQuery_mobile/jquery.mobile-1.1.0.js"></script>

    <!-- iframe Settings -->
    <style type="text/css">
        html, body { margin: 0; padding: 0; height: 100%; }
        iframe {
            position: absolute;
            left: 0; width: 100%; height: 100%;
            border: none; padding-top: 0px;
            box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box;
        }
    </style>
    <!-- /iframe Settings -->

    <!-- paragraph border Settings -->
    <style type="text/css">
        p {
            padding-bottom: 8px;
            padding-left: 8px;
            padding-right: 8px;
            padding-top: 8px;
            border-width: 3px;
            border-style: dotted;
            border-color: lightblue;
            margin-bottom: 0px;
            margin-top: 0px;
        }
    </style>
    <!-- /paragraph border Settings -->

    <!-- Tabelle tr trennlinie Settings -->
    <style type="text/css">
        .tabellenlinie:first-child {
            border-top-width: 1px;
            border-top-style: solid;
            border-top-color: lightskyblue;
        }
    </style>
    <!-- /Tabelle tr trennlinie Settings -->

</head>
<body>

<div data-role="page" id="landtag_berichte_kantine" data-add-back-btn="false">
    <!-- header -->
    <div data-role="header" data-position="fixed">
        <h1>Kantinenessen</h1>
    </div>
    <!-- /header -->
    <!-- content -->
    <?php readfile("includes/kantine.inc"); ?>
    <!-- /content -->
</div>

</body>
</html>