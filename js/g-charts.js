google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Pizza');
      data.addColumn('number', 'Populartiy');
      data.addRows([
        ['7 AM - 3 PM', 40],
        ['3 PM - 11 PM', 60],
        
      ]);

      var options = { 
		legend:'top',
		pieSliceTextStyle:{
			fontSize: 18,   
		},
		// height:"400",
		// width:"450",
        sliceVisibilityThreshold: .2,
		pieSliceText: 'value'
      };

      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }


    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart2);

    function drawChart2() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Pizza');
      data.addColumn('number', 'Populartiy');
      data.addRows([
        ['Branch-A', 20],
        ['Branch-B', 20],
        ['Branch-C', 60],
        
      ]);

      var options = {    
		legend:'top',
		pieSliceTextStyle:{
			fontSize: 18,   
		},
		pieSliceText: 'value',
        sliceVisibilityThreshold: .2
      };

      var chart = new google.visualization.PieChart(document.getElementById('chart_div_2'));
      chart.draw(data, options);
    }

