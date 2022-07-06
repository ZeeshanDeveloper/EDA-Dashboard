/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
		qlik.theme.apply('Najm Theme');

	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var activePage = "";


qlik.theme.apply('najm theme').then(function(result){
 	//alert('theme applied with result: ' + result);
 });

	var app = qlik.openApp('0f88a3a1-47e4-4cdc-b88b-0fd7f269801f', config);
	//var app = qlik.openApp('67dc7f50-9f0c-4670-8938-4644d3b084c1', config);

	$.fn.extend({

  toggleResize: function() {

    return this.setTimeout(40, function() {

      qlik.resize();

    });

  }

});






// the below constructor funciton will be used to create object will be holding QLik objects for each attached dashboard and different periods 
function QlikObjectId (day,month,quarter,year) {
this.day=day;
this.month=month;
this.quarter=quarter;
this.year=year;
}

//**********************************************************************************************************************************************//

// below are  the object created from the above constructor function.

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Add the object ID below 


var manafethNajmRevenueChart= new QlikObjectId(['ZpJpCa'],['vGWZg'],['LQvsDj'],['NZtjLAH']);
var NajmNetRevenueChart= new QlikObjectId(['EqHsDJ'],['UjcgPpA'],['YJnzqz'],['sdww']);
var TotalNajmRevenueChart= new QlikObjectId(['4a9b6a20-5f21-4661-bbac-7dcf851481c7'],['b26ed6b1-53ae-49af-a528-df5ff8adb5ae'],[' a903d703-3a8e-4e34-81a4-64cea9116f7c'],['dbc841fe-c83e-4fe8-a6fb-45bc4dd3b2f2']);
var activePoliciesChart= new QlikObjectId(['jWwXv'],['dpsg'],['pvntkm'],['gEZnyEj']);
var cancelledPoliciesChart= new QlikObjectId(['be9bd47e-fbb8-49a2-ac3a-1669b74e3432'],['5b3d14d6-b199-49a0-8022-7c725b02e425'],['9db126d1-66de-4c37-805c-aea3fdff9539'],['97fa6e9f-abd5-490d-8feb-c5b9cec474ab']);
var noOfDACasesChart= new QlikObjectId(['aef88e64-fc6e-4f52-baf2-2ee48b328284'],['fc5bda7a-93ca-4f86-a56c-6ad9617b4200'],['6a8c2849-d1b4-45be-8a59-83b8896691cc'],['6b4bf860-49c3-484e-a147-75ebf2e042a3']);
var NoOfClaimsReceivedChart= new QlikObjectId(['jpejBWB'],['BwQCPFS'],['NgbaftP'],['eNGms']);
var NoOfLDChart= new QlikObjectId(['PhHHj'],['krJ'],['DmrRpPa'],['puqRjep']);
var NoOfRejectedCasesChart= new QlikObjectId(['mJAbV'],['GwGVur'],['EQbmqk'],['ZRJ']);
var customerServicesChart= new QlikObjectId(['PcCvRr','ghKMV'],['nPpv','Pdunw'],['NJPuwyj','WnFAyC'],['kykU','xmKDWw']);
var afsChart= new QlikObjectId(['rDzgUj'],['pzsmy'],['uqakqQz'],['YppWwN']);
var claimChart = new QlikObjectId(['gZEbs'],['EfKqDw'],['QSsUML'],['SWjPPV']);	

var responseTimeChart = new QlikObjectId(['DfSPHt'],['QXzQpYK'],['ZLzPA'],['jTsFbEY']);	
var investigationTimeChart = new QlikObjectId(['WCemRE'],['QfWWHJ'],['EzDyUjH'],['PfjPq']);	
//**********************************************************************************************************************************************//
var chartName='NajmNetRevenueChart'; // this variable will be used to capture the name of the attached dashboard 
var gbVar='day';// this variable is used to hold the selected period 
var  lit='';// this variable is used to dynamically construct the object which holds the ID of qlik Object to be shown the in the attached dashboard     
var  lit2='';// this variable is used to dynamically construct the object which holds the ID of qlik Object to be shown the in the attached dashboard     


//below function is used to capture any click on icon_chart "Attached Dashboard" or periods then passing the id of that selected attached dashboard 
//or the inner text of the period and it has sub function inside it. 

$(document).ready(function(){ 

	
	$(".attachedDB").click(function() {
	   //var myid = $(this).attr("id");
	   //alert(this.id);
	   chartName=this.id; // this global variable will hold the clicked attached dashboard name then it will be passed in the below function 
   
   //below function will retrieve Qlikobject for the clicked attached dashboard.
	 $("#"+chartName).click(function() {
		
					    lit=eval(`${chartName}.${gbVar.toLowerCase()}[0]`);
					    lit2=eval(`${chartName}.${gbVar.toLowerCase()}[1]`);
						console.log('this is lit 1 ', lit)
						console.log('this is lit2', lit2)

//<<<<<<<<<<<<<<<<<<<<<<<<<< add another variable with index 1 

						app.visualization.get(lit).then(function(vis){
						vis.show('QV01');
						
						});
//<<<<<<<<<<<<<<<<<<<<<<<<<< add another variable with index 1 
						app.visualization.get(lit).then(function(vis){
						vis.show('QV05');
						
						});
						
						
						setTimeout(chartResize, 500);
    					function chartResize() {
							 qlik.resize();   	
							}
				    	$("#modal-xl").modal();
		
	})
	   
  
	});
	
	 //****************************************************************End Of attached DB ***************************************************************///////////////
	
	// below function is used to capture clicks on periods which is used in the above function to construct 
	// the lit variable "qlik object for attached dashboard "
	// also the below function is responsible to call the right Qlik variable when any period is clicked 
	
	$(".period").click(function() {
		//var myid = $(this).attr("id");
		$('.nav-item').removeClass("active");
		$('#'+this.innerText.toLowerCase()).addClass("active");
		alert('this is the id where the active class is applied : '+'#'+this.innerText.toLowerCase());	
		//alert(this.innerText);
		gbVar=this.innerText;
		// console.log(gbVar);	
		// var myGaguge=  eval(`responseTimeChart.${gbVar.toLowerCase()}[0]`);
		// var myGaguge1= eval(`investigationTimeChart.${gbVar.toLowerCase()}[0]`);
		// console.log("this is my gauge ID :  "+myGaguge);
		// console.log("this is my gauge ID :  "+myGaguge1);
		// ///<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 	
		// app.visualization.get(myGaguge).then(function(vis){vis.show("responseTimeChart");});
		// app.visualization.get(myGaguge1).then(function(vis){vis.show("investigationTimeChart");});

		
		
// the below will call the variable when any period is clicked ////////////////////////////////////////
getQlikVariable('manafethNajmRevenue','ManafethNajmRevenue');
getQlikVariable('najmNet','NajmNet');
getQlikVariable('totalNajm','TotalNajm');
getQlikVariable('noOfLDCases','noOfLDCases');
getQlikVariable('noOfRejectedCases','noOfRejectedCases');
getQlikVariable('noOfClaims','noOfClaims');
getQlikVariable('countOfComplaints','CountOfComplaints');
getQlikVariable('countOfObjection','CountOfObjection');
getQlikVariable('countOfCRs','CountOfCRs');
getQlikVariable('activePolicies','activePolicies');
getQlikVariable('noOfDACases','noOfDACases');
getQlikVariable('cancelledPolicies','cancelledPolicies');
getQlikVariable('afs','afs');
getQlikVariable('responseTime','linear-guage-11');
getQlikVariable('investigationTime','linear-guage-21');
	
//***************************************************************************************************//	 
	 });

      
	 
	 
}) //end of document ready 

// the below is used to capatalize the first letter from the period captured "gbvar"

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

// the below function is used to retieve the right variabl for the defualt state and when any period is clicked.

			 function getQlikVariable(varName,htmlObjectID){
				 period = $(".period").attr("data-value");
				var period=capitalizeFirstLetter(gbVar);$
				console.log('this is your variable Name   :'+varName+period);
				app.variable.getContent(varName+period, function(reply){
				console.log(JSON.stringify(reply));
				variableValue = JSON.stringify(reply.qContent.qString);
				variableValue = variableValue.replace(/^"(.*)"$/, '$1')

				if(htmlObjectID == "linear-guage-11")
				{

					//console.log('variableValue varName ',variableValue + ' '+varName);
					//$("#linear-guage-1").attr('data-current-value',variableValue);
					$("#linear-guage-1-text").text(variableValue);
					
					//let minvalue = $("#linear-guage-1").attr("data-min-value");
					//let maxvalue = $("#linear-guage-1").attr("data-max-value");
					// let currentvalue = $("#linear-guage-1").attr("data-current-value");
					let percentage = (variableValue / 2003877) * 100;
            		$("#linear-guage-1 .guage").css("left", percentage+'%');
           				
				}
				else if(htmlObjectID == "linear-guage-21")
				{

					//console.log('variableValue 2 varName ',variableValue +' '+varName);
					//$("#linear-guage-2").attr('data-current-value',variableValue);
					$("#linear-guage-2-text").text(variableValue);
					// let minvalue2 = $("#linear-guage-2").attr("data-min-value");
					// let maxvalue2 = $("#linear-guage-2").attr("data-max-value");
					//let currentvalue2 = $("#linear-guage-2").attr("data-current-value");
					let percentage2 = (variableValue / 2003877) * 100;            
					$("#linear-guage-2 .guage").css("left", percentage2+'%');
						
				}
				else
				{
					$('#'+htmlObjectID).html(variableValue);
				}
																								
				
	});
}

//***************************************************************************************************//	 

// Calling the above function to retieve the right variable & Gagues  for the defualt state
getQlikVariable('manafethNajmRevenue','ManafethNajmRevenue');
getQlikVariable('najmNet','NajmNet');
getQlikVariable('totalNajm','TotalNajm');
getQlikVariable('noOfLDCases','noOfLDCases');
getQlikVariable('noOfRejectedCases','noOfRejectedCases');
getQlikVariable('noOfClaims','noOfClaims');
getQlikVariable('countOfComplaints','CountOfComplaints');
getQlikVariable('countOfObjection','CountOfObjection');
getQlikVariable('countOfCRs','CountOfCRs');
getQlikVariable('activePolicies','activePolicies');
getQlikVariable('noOfDACases','noOfDACases');
getQlikVariable('cancelledPolicies','cancelledPolicies');
getQlikVariable('afs','afs');
getQlikVariable('responseTime','linear-guage-11');
getQlikVariable('investigationTime','linear-guage-21');





//app.visualization.get('DfSPHt').then(function(vis){vis.show("linear-guage-1");});
//app.visualization.get('WCemRE').then(function(vis){vis.show("linear-guage-2");});

//**************************************************************************************************

/*
$('#day').ready(function(){
		// code to active the link
		$('#quarter').removeClass("active");
		$('#day').addClass("active");
		$('#month').removeClass("active");
		$('#year').removeClass("active");
		activePage= "day";
		console.log(activePage);
		

	app.visualization.get('DfSPHt').then(function(vis){vis.show("responseTimeChart");});
	app.visualization.get('WCemRE').then(function(vis){vis.show("investigationTimeChart");});

	});
	$('#month').click(function(){
		// code to active the link
		$('#quarter').removeClass("active");
		$('#day').removeClass("active");
		$('#month').addClass("active");
		$('#year').removeClass("active");
		activePage= "day";
		console.log(activePage);

	app.visualization.get('QXzQpYK').then(function(vis){vis.show("responseTimeChart");});
	app.visualization.get('QfWWHJ').then(function(vis){vis.show("investigationTimeChart");});

	});
	$('#quarter').click(function(){
		// code to active the link
		$('#quarter').addClass("active");
		$('#day').removeClass("active");
		$('#month').removeClass("active");
		$('#year').removeClass("active");
		activePage= "day";
		console.log(activePage);

	app.visualization.get('ZLzPA').then(function(vis){vis.show("responseTimeChart");});
	app.visualization.get('EzDyUjH').then(function(vis){vis.show("investigationTimeChart");});

	});
	$('#year').click(function(){
		// code to active the link
		$('#quarter').removeClass("active");
		$('#day').removeClass("active");
		$('#month').removeClass("active");
		$('#year').addClass("active");
		activePage= "day";
		console.log(activePage);

	app.visualization.get('jTsFbEY').then(function(vis){vis.show("responseTimeChart");});
	app.visualization.get('PfjPq').then(function(vis){vis.show("investigationTimeChart");});

	});
*/
//**************************************************************************************************


	$('#downloadData').click(function(){
			if(activePage="day"){
				app.getObject('QV02','DfSPHt').then(function(reply){

					var qTable = qlik.table(reply);
					qTable.exportData({download: true});
				});
				app.getObject('QV02','NjPwF').then(function(reply){

						var qTable = qlik.table(reply);
						qTable.exportData({download: true});
				});
			}else if(activePage="month"){
				app.getObject('QV02','uVvbpp').then(function(reply){

					var qTable = qlik.table(reply);
					qTable.exportData({download: true});
				});
				app.getObject('QV02','PNScGrK').then(function(reply){

						var qTable = qlik.table(reply);
						qTable.exportData({download: true});
				});
			}else if(activePage="quarter"){
				app.getObject('QV02','EPfxQG').then(function(reply){

					var qTable = qlik.table(reply);
					qTable.exportData({download: true});
				});
				app.getObject('QV02','HzZWH').then(function(reply){

						var qTable = qlik.table(reply);
						qTable.exportData({download: true});
				});
			}else if(activePage="year"){
				app.getObject('QV02','jycpyaY').then(function(reply){

					var qTable = qlik.table(reply);
					qTable.exportData({download: true});
				});
				app.getObject('QV02','rvHwM').then(function(reply){

						var qTable = qlik.table(reply);
						qTable.exportData({download: true});
				});
			}

		});
}); 
