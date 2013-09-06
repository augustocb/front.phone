(function() {
  var USA, root,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  USA = (function() {
    function USA() {
      this.splitNumber = __bind(this.splitNumber, this);
      this.specialRules = __bind(this.specialRules, this);
      this.countryName = "USA";
      this.countryNameAbbr = "USA";
      this.countryCode = '1';
      this.regex = /^(?:(?:(?:\+|)(?:1|))|)(?:1|)(?:201|203|212|214|215|224|234|240|248|256|267|281|301|303|304|305|310|312|321|330|331|339|347|351|385|402|404|407|408|410|412|419|424|430|442|443|458|469|470|475|484|503|508|534|539|541|551|567|571|601|610|617|630|646|657|667|669|678|681|682|703|704|706|713|714|715|718|720|724|732|747|754|760|762|769|770|773|774|779|781|786|801|815|817|818|832|847|848|857|860|862|872|878|903|917|918|919|929|938|947|954|971|972|973|978|980|984|202|205|206|207|208|209|210|213|216|217|218|219|225|228|229|231|239|251|252|253|254|260|262|269|270|276|302|307|308|309|313|314|315|316|317|318|319|320|323|325|334|336|337|352|360|361|386|401|405|406|409|413|414|415|417|423|425|432|434|435|440|478|479|480|501|502|504|505|507|509|510|512|513|515|516|517|518|520|530|540|559|561|562|563|570|573|574|575|580|585|586|602|603|605|606|607|608|609|612|614|615|616|618|619|620|623|626|631|636|641|650|651|660|661|662|701|702|707|708|712|716|717|719|727|731|734|740|757|763|765|772|775|785|802|803|804|805|806|808|810|812|813|814|816|828|830|831|843|845|850|856|858|859|863|864|865|870|901|904|906|907|908|909|910|912|913|914|915|916|920|925|928|931|936|937|940|941|949|951|952|956|970|979|985|989)\d{7}$/;
      this.optionalTrunkPrefix = '1';
      this.nationalNumberSeparator = ' ';
      this.nationalDestinationCode = ['201', '203', '212', '214', '215', '224', '234', '240', '248', '256', '267', '281', '301', '303', '304', '305', '310', '312', '321', '330', '331', '339', '347', '351', '385', '402', '404', '407', '408', '410', '412', '419', '424', '430', '442', '443', '458', '469', '470', '475', '484', '503', '508', '534', '539', '541', '551', '567', '571', '601', '610', '617', '630', '646', '657', '667', '669', '678', '681', '682', '703', '704', '706', '713', '714', '715', '718', '720', '724', '732', '747', '754', '760', '762', '769', '770', '773', '774', '779', '781', '786', '801', '815', '817', '818', '832', '847', '848', '857', '860', '862', '872', '878', '903', '917', '918', '919', '929', '938', '947', '954', '971', '972', '973', '978', '980', '984', '202', '205', '206', '207', '208', '209', '210', '213', '216', '217', '218', '219', '225', '228', '229', '231', '239', '251', '252', '253', '254', '260', '262', '269', '270', '276', '302', '307', '308', '309', '313', '314', '315', '316', '317', '318', '319', '320', '323', '325', '334', '336', '337', '352', '360', '361', '386', '401', '405', '406', '409', '413', '414', '415', '417', '423', '425', '432', '434', '435', '440', '478', '479', '480', '501', '502', '504', '505', '507', '509', '510', '512', '513', '515', '516', '517', '518', '520', '530', '540', '559', '561', '562', '563', '570', '573', '574', '575', '580', '585', '586', '602', '603', '605', '606', '607', '608', '609', '612', '614', '615', '616', '618', '619', '620', '623', '626', '631', '636', '641', '650', '651', '660', '661', '662', '701', '702', '707', '708', '712', '716', '717', '719', '727', '731', '734', '740', '757', '763', '765', '772', '775', '785', '802', '803', '804', '805', '806', '808', '810', '812', '813', '814', '816', '828', '830', '831', '843', '845', '850', '856', '858', '859', '863', '864', '865', '870', '901', '904', '906', '907', '908', '909', '910', '912', '913', '914', '915', '916', '920', '925', '928', '931', '936', '937', '940', '941', '949', '951', '952', '956', '970', '979', '985', '989'];
    }

    USA.prototype.specialRules = function(withoutCountryCode, withoutNDC, ndc) {
      if (withoutNDC.length === 7) {
        return new vtex.phone.PhoneNumber(this.countryCode, ndc, withoutNDC);
      }
    };

    USA.prototype.splitNumber = function(number) {
      if (number.length === 7) {
        return vtex.phone.compact(number.split(/(\d{3})(\d{4})/));
      }
      return [number];
    };

    return USA;

  })();

  root.vtex.phone.countries = root.vtex.phone.countries || {};

  root.vtex.phone.countries['1'] = new USA();

}).call(this);
