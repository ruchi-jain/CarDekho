angular
		.module('ionicApp', [ 'ionic', 'angular.css.injector' ])

		.config(function($stateProvider, $urlRouterProvider) {

			$stateProvider.state('eventmenu', {
				url : "/event",
				abstract : true,
				templateUrl : "templates/event-menu.html"
			}).state('eventmenu.home', {
				url : "/home",
				views : {
					'menuContent' : {
						templateUrl : "templates/home.html"
					}
				}
			}).state('eventmenu.checkin', {
				url : "/check-in",
				views : {
					'menuContent' : {
						templateUrl : "templates/check-in.html",
						controller : "CheckinCtrl"
					}
				}
			}).state('eventmenu.attendees', {
				url : "/attendees",
				views : {
					'menuContent' : {
						templateUrl : "templates/attendees.html",
						controller : "AttendeesCtrl"
					}
				}
			}).state('eventmenu.used-car-home', {
				url : "/used-car-home",
				views : {
					'menuContent' : {
						templateUrl : "templates/used-car-home.html",
						controller : "usedCarHomeCtrl"
					}
				}
			}).state('eventmenu.city', {
				url : "/city",
				views : {
					'menuContent' : {
						templateUrl : "templates/city.html",
						controller : "cityCtrl"
					}
				}
			}).state('eventmenu.price-range', {
				url : "/price-range",
				views : {
					'menuContent' : {
						templateUrl : "templates/price-range.html",
						controller : "priceRangeCtrl"
					}
				}
			}).state('eventmenu.brand', {
				url : "/brand",
				views : {
					'menuContent' : {
						templateUrl : "templates/brand.html",
						controller : "brandCtrl"
					}
				}
			}).state('eventmenu.model', {
				url : "/model",
				views : {
					'menuContent' : {
						templateUrl : "templates/model.html",
						controller : "modelCtrl"
					}
				}
			}).state('eventmenu.fuel', {
				url : "/fuel",
				views : {
					'menuContent' : {
						templateUrl : "templates/fuel.html",
						controller : "fuelCtrl"
					}
				}
			}).state('eventmenu.km', {
				url : "/km",
				views : {
					'menuContent' : {
						templateUrl : "templates/km.html",
						controller : "kmCtrl"
					}
				}
			}).state('eventmenu.vehicle-type', {
				url : "/vehicle-type",
				views : {
					'menuContent' : {
						templateUrl : "templates/vehicle-type.html",
						controller : "vehicleTypeCtrl"
					}
				}
			}).state('eventmenu.model-year', {
				url : "/model-year",
				views : {
					'menuContent' : {
						templateUrl : "templates/model-year.html",
						controller : "modelYearCtrl"
					}
				}
			}).state('eventmenu.transmission', {
				url : "/transmission",
				views : {
					'menuContent' : {
						templateUrl : "templates/transmission.html",
						controller : "transmissionCtrl"
					}
				}
			}).state('eventmenu.seller-type', {
				url : "/seller-type",
				views : {
					'menuContent' : {
						templateUrl : "templates/seller-type.html",
						controller : "sellerTypeCtrl"
					}
				}
			}).state('eventmenu.used-car-detail', {
				url : "/used-car-detail",
				views : {
					'menuContent' : {
						templateUrl : "templates/used-car-detail.html",
						controller : "usedCarDetailCtl"
					}
				}
			}).state('eventmenu.used-single-car-detail', {
				url : "/used-single-car-detail",
				views : {
					'menuContent' : {
						templateUrl : "templates/used-single-car-detail.html",
						controller : "usedsingleCarDetailCtl"
					}
				}
			}).state('eventmenu.user-review-home', {
				url : "/user-review-home",
				views : {
					'menuContent' : {
						templateUrl : "templates/user-review-home.html",
						controller : "userReviewHomeCtl"
					}
				}
			}).state('eventmenu.user-car-review', {
				url : "/user-car-review",
				views : {
					'menuContent' : {
						templateUrl : "templates/user-car-review.html",
						controller : "userCarReviewCtl"
					}
				}
			})
			
			$urlRouterProvider.otherwise("/event/home");
		})

		.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
			$scope.attendees = [ {
				firstname : 'Nicolas',
				lastname : 'Cage'
			}, {
				firstname : 'Jean-Claude',
				lastname : 'Van Damme'
			}, {
				firstname : 'Keanu',
				lastname : 'Reeves'
			}, {
				firstname : 'Steven',
				lastname : 'Seagal'
			} ];
			// StatusBar.hide();

			$scope.toggleLeft = function() {
				$ionicSideMenuDelegate.toggleLeft();
			};

			$scope.OpenUpNewCar = function() {
				$scope.shown = !$scope.shown;
			};

			$scope.OpenUpUsedCar = function() {
				$scope.shownUsed = !$scope.shownUsed;
			};

			$scope.OpenUpReviews = function() {
				$scope.shownReview = !$scope.shownReview;
			};

			$scope.OpenUpUtilities = function() {
				$scope.shownUtility = !$scope.shownUtility;
			};
			$scope.OpenUpFeedback = function() {
				$scope.shownFeedBack = !$scope.shownFeedBack;
			};

		})

		.controller('CheckinCtrl', function($scope) {
			$scope.showForm = true;

			$scope.shirtSizes = [ {
				text : 'Large',
				value : 'L'
			}, {
				text : 'Medium',
				value : 'M'
			}, {
				text : 'Small',
				value : 'S'
			} ];

			$scope.attendee = {};
			$scope.submit = function() {
				if (!$scope.attendee.firstname) {
					alert('Info required');
					return;
				}
				$scope.showForm = false;
				$scope.attendees.push($scope.attendee);
			};

		})
		.service(
				'sharedProperties',
				[
						'$http',
						function($http) {

							function callApi(url) {
								$http.post(url).success(function(data, status) {
									console.log("callApi : " + JSON.stringify(data));
									return data;
								})
							}
							var url = "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?authenticateKey=14@89cardekho66feeds&format=Gson&parameter=";
							var objectValue = {};
							objectValue.city = 'All India';
							objectValue.price = "...";
							objectValue.brand = "...";
							objectValue.model = "...";
							objectValue.fuel = "...";
							objectValue.km = "..."
							objectValue.vehicleType = '...';
							objectValue.modelYear = '...';
							objectValue.transmission = '...';
							objectValue.sellerType = '...';
							objectValue.sellerType = '...';
							objectValue.certifiedByTrustMaster = false;
							objectValue.withPicture = false;
							objectValue.contact = [];
							objectValue.priceRanageObj = {};
							objectValue.brandObj = [];
							objectValue.modelObj = [];
							objectValue.usedCarSearchResult = [];
							objectValue.usedCarDetailResult = {};
							objectValue.reviews = [];
							
							$http
									.post(
											"http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?authenticateKey=14@89cardekho66feeds&format=Gson&parameter=getOfferCityList")
									.success(
											function(data1, status) {
												// console.log("Data : "+
												// JSON.stringify(data1));
												objectValue.contact = data1.data.CarDiscountCities;
											})
							$http
									.post(
											"http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getNewCarPriceRangeDataWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds")
									.success(
											function(data1, status) {
												// console.log("Data : "+
												// JSON.stringify(data1));
												objectValue.priceRanageObj = data1.data;
											})

							$http
									.post(
											"http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getOemFeedsWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds")
									.success(
											function(data1, status) {
												// console.log("brand : "+
												// JSON.stringify(data1));
												objectValue.brandObj = data1.data.oemList;
											})

							return {
								setCity : function(cityVal) {
									// console.log("Service"+cityVal);
									objectValue.city = cityVal;
								},
								setPrice : function(price) {
									objectValue.price = price;
								},
								setCertifiedByTrustMaster : function(
										isCertified) {
									objectValue.certifiedByTrustMaster = isCertified;
								},
								setWithPicture : function(isPicture) {
									objectValue.withPicture = isPicture;
								},
								setFuel : function(fuel) {
									objectValue.fuel = fuel;
								},
								setKM : function(km) {
									objectValue.km = km;
								},
								setVehicleType : function(vehicleType) {
									objectValue.vehicleType = vehicleType;
								},
								setModelYear : function(modelYear) {
									objectValue.modelYear = modelYear;
								},
								setTransmission : function(transmission) {
									objectValue.transmission = transmission;
								},
								setSellerType : function(seller) {
									objectValue.sellerType = seller;
								},
								getUsedCarDetailPerCar : function(carId) {
									url = url
											+ "getUsedCarDetailsDataWithStatus&UsedCarId="
											+ carId;
									console.log("getUsedCarDetailPerCar : " + url);
									//objectValue.usedCarDetailResult = callApi(url);
									$http
									.post(url)
									.success(
											function(data1, status) {
												// console.log("Model :
												// "+
												// JSON.stringify(data1));
												objectValue.usedCarDetailResult = data1;
												console.log("getUsedCarDetailPerCar : " + JSON.stringify(objectValue));
											})
									
								},
								setBrand : function(brand,callback) {
									objectValue.brand = brand;
									console.log(objectValue.brand.oemname);
									var url = "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getModelFeedsWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds&oem="
											+ objectValue.brand.oemname;
									console.log("URL :" + url);
									$http
											.post(url)
											.success(
													function(data1, status) {
														// console.log("Model :
														// "+
														// JSON.stringify(data1));
														//console.log(data1);
														objectValue.modelObj = data1;
														//console.log("obj:" + objectValue.modelObj);
														callback(objectValue)
													})
													
								},
								getReviews : function(model,callback) {
									objectValue.brand = model;
									console.log(objectValue.model.displayCarModelName);
									var url ="http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getReviewsWithStatus&sortedBy=mostHelpful&ModelName="+ encodeURIComponent(objectValue.model.displayCarModelName) +"&startLimit=1&endLimit=20&authenticateKey=14@89cardekho66feeds"
											;
									console.log("URL :" + url);
									$http
											.post(url)
											.success(
													function(data1, status) {
														// console.log("Model :
														// "+
														// JSON.stringify(data1));
														//console.log(data1);
														objectValue.reviews = data1;
														//console.log("obj:" + objectValue.modelObj);
														callback(objectValue)
													})
													
								},
								getBrand : function(callback){
							         
							         $http
							         .post(
							           "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getOemFeedsWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds")
							         .success(
							           function(data1, status) {
							            // console.log("brand : "+
							            // JSON.stringify(data1));
							            objectValue.brandObj = data1.data.oemList;
							            
							            callback(objectValue);
							           })
							         
							        },
							     getUsedCarSearchResult : function() {
									var serachString = "http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getUsedCarSearchResultDataWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds";
									
									if(objectValue.city !== 'All India'){
										serachString += "&city="+objectValue.city;
									}
									if(objectValue.price !== '...'){
										serachString += "&pricerange="+objectValue.price;
									}
									if(objectValue.model !== '...'){
										serachString += "&carname="+objectValue.model;
									}
									if(objectValue.brand !== '...'){
										serachString += "&brand="+ objectValue.brand;
									}
									if(objectValue.fuel !== '...'){
										serachString += "&fueltype="+objectValue.fuel;
									}
									if(objectValue.km !== '...'){
										serachString += "&km_done="+objectValue.km;
									}
									if(objectValue.vehicleType !== '...'){
										serachString += "&vehicletype="+objectValue.vehicleType;
									}
									if(objectValue.modelYear !== '...'){
										serachString += "&modelyear="+objectValue.modelYear;
									}
									if(objectValue.transmission !== '...'){
										serachString += "&transmission="+objectValue.transmission;
									}
									if(objectValue.sellerType !== '...'){
										serachString += "&sellertype="+objectValue.sellerType;
									}
									if(objectValue.certifiedByTrustMaster === true){
										serachString += "&certificationid=1";
									}
									if(objectValue.withPicture !== '...'){
										serachString += "&photo=with-photos";
									}
								
									console.log("Serach String "+ serachString);
									var url = 'http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?parameter=getUsedCarSearchResultDataWithStatus&format=Gson&authenticateKey=14@89cardekho66feeds&City=Pune&PriceRange=1-Lac-to-5-Lac&Brand=honda&CarName=honda_city&startLimit=10&endLimit=20';
									//console.log("URL :" + url);
									$http
											.post(url)
											.success(
													function(data1, status) {
														console
																.log("Used Car Search Object : "
																		+ JSON
																				.stringify(data1));
														objectValue.usedCarSearchResult = data1;
													})
								},
								getObject : function() {
									// console.log("Obj Value
									// Called"+objectValue);
									return objectValue;
								},
								setModel : function(model) {
									objectValue.model = model;
								}
							}
						} ])
		// .factory('dataFactory', ['$http', function($http) {
		//
		// var urlBase = 'external-server:8080';
		// var dataFactory = {};
		// dataFactory.getTest = function () {
		// //Note the $http method changed and a new parameter is added
		// (callback)
		// //the value of the callback parameter can be anything
		// return
		// $http.jsonp('http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?authenticateKey=14@89cardekho66feeds&format=Gson&parameter=getOfferCityList?callback=myCallback');
		// };
		//
		// return dataFactory;
		// }])
		.config([ '$httpProvider', function($httpProvider) {
			$httpProvider.defaults.useXDomain = true;
			delete $httpProvider.defaults.headers.common['X-Requested-With'];
		} ])

		.controller('AttendeesCtrl', function($scope) {

			$scope.activity = [];
			$scope.arrivedChange = function(attendee) {
				var msg = attendee.firstname + ' ' + attendee.lastname;
				msg += (!attendee.arrived ? ' has arrived, ' : ' just left, ');
				msg += new Date().getMilliseconds();
				$scope.activity.push(msg);
				if ($scope.activity.length > 3) {
					$scope.activity.splice(0, 1);
				}
			};

		})
		.controller(
				'cityCtrl',
				[
						'$scope',
						'sharedProperties',
						'$window',
						'$location',
						'$rootScope',
						'$state',
						'$http',
						function($scope, sharedProperties, $window, $location,
								$rootScope, $state, $http) {
							// $scope.contact1 =
							// [{'name':'KK'},{'name':'abcd'},{'name':'zxcv'},{'name':'KK1'},{'name':'KK'},{'name':'KK1'},{'name':'KK'},{'name':'KK1'},{'name':'KK'},{'name':'KK1'},{'name':'KK'},{'name':'KK1'},{'name':'KK'},{'name':'KK1'},{'name':'KK'},{'name':'KK1'},{'name':'KK'},{'name':'KK1'},{'name':'KK'},{'name':'KK1'},{'name':'KK'},{'name':'KK1'}];
							$scope.city = "All Inida";

							// $http.post("http://www.cardekho.com/getIPhoneFeedsDispatchAction.do?authenticateKey=14@89cardekho66feeds&format=Gson&parameter=getOfferCityList").success(function(data1,
							// status) {
							// console.log("Data : "+ JSON.stringify(data1));
							// $scope.contact1 = data1.data.CarDiscountCities;
							// })

							$scope.contactObj = sharedProperties.getObject();
							// console.log("Contact :"+
							// JSON.stringify($scope.contactObj));
							$scope.contact1 = $scope.contactObj.contact;

							$scope.getContacts = function() {
								letterHasMatch = {};
								return $scope.contact1
										.filter(
												function(item) {
													var itemDoesMatch = !$scope.search
															|| item.isLetter
															|| item
																	.toLowerCase()
																	.indexOf(
																			$scope.search
																					.toLowerCase()) > -1;

													if (!item.isLetter
															&& itemDoesMatch) {
														// console.log(item);
														var letter = item
																.charAt(0)
																.toUpperCase();
														if (item.charCodeAt(0) < 65) {
															letter = "#";
														}
														letterHasMatch[letter] = true;
													}
													return itemDoesMatch;
												})
										.filter(
												function(item) {
													if (item.isLetter
															&& !letterHasMatch[item.letter]) {
														return false;
													}
													return true;
												})
							};
							$scope.clearSearch = function() {
								$scope.search = '';
							};

							$scope.newValue = function(city) {
								// console.log(city);
								sharedProperties.setCity(city);
								$scope.search = '';
								$state.go('eventmenu.used-car-home');
							}
						} ])

		.controller(
				'priceRangeCtrl',
				[
						'$scope',
						'sharedProperties',
						'$window',
						'$location',
						'$rootScope',
						'$state',
						function($scope, sharedProperties, $window, $location,
								$rootScope, $state) {
							$scope.price = "...";

							$scope.priceRange = sharedProperties.getObject();
							// console.log("priceRangeObj :"+
							// JSON.stringify($scope.priceRange));
							$scope.contact1 = $scope.priceRange.priceRanageObj.newCarFilterPriceRange;

							$scope.getContacts = function() {
								letterHasMatch = {};

								return $scope.contact1
										.filter(
												function(item) {
													var itemDoesMatch = !$scope.search
															|| item.isLetter
															|| item.displayPriceRange
																	.toLowerCase()
																	.indexOf(
																			$scope.search
																					.toLowerCase()) > -1;

													if (!item.isLetter
															&& itemDoesMatch) {
														var letter = item.displayPriceRange
																.charAt(0)
																.toUpperCase();
														if (item.displayPriceRange
																.charCodeAt(0) < 65) {
															letter = "#";
														}
														letterHasMatch[letter] = true;
													}
													return itemDoesMatch;
												})
										.filter(
												function(item) {
													if (item.isLetter
															&& !letterHasMatch[item.letter]) {
														return false;
													}
													return true;
												})
							};
							$scope.clearSearch = function() {
								$scope.search = '';
							};

							$scope.newPrice = function(price) {
								// console.log(price);
								sharedProperties.setPrice(price);
								$state.go('eventmenu.used-car-home');
							}
						} ])

		.controller(
				'usedCarHomeCtrl',
				[
						'$scope',
						'sharedProperties',
						'$rootScope',
						'$state',
						'cssInjector',
						function($scope, sharedProperties, $rootScope, $state,cssInjector) {
							
							cssInjector.add("css/SearchUsedCarHomeScreen.css");
							$scope.isAdvanceSerach = false;
							$scope.isCertified = false;
							$scope.isPicture = false;
							// console.log("usedCarHomeCtrl"+sharedProperties.getObject());
							// $scope.sharedObj = sharedProperties.getObject();
							$scope.cityObj = sharedProperties.getObject();

							$scope.advanceSeach = function() {
								// console.log('In Adv'+
								// $scope.isAdvanceSerach);
								$scope.isAdvanceSerach = true;
								// console.log('In Adv'+
								// $scope.isAdvanceSerach);
							}
							$scope.searchCar = function() {
								// console.log('In SearchCar'+
								// $scope.isAdvanceSerach);
								$scope.isAdvanceSerach = false;
								// console.log("Final Obj :"+
								// JSON.stringify(sharedProperties.getObject()));
								sharedProperties.getUsedCarSearchResult();
								$state.go('eventmenu.used-car-detail');

								// console.log('In SearchCar'+
								// $scope.isAdvanceSerach);
							}
							$scope.toggleCertified = function() {
								// console.log('In toggleCertified'+
								// $scope.isCertified);
								$scope.isCertified = !$scope.isCertified;
								sharedProperties
										.setCertifiedByTrustMaster($scope.isCertified);
								// console.log('In toggleCertified'+
								// $scope.isCertified);
							}

							$scope.togglePicture = function() {
								// console.log('In isPicture'+
								// $scope.isPicture);
								$scope.isPicture = !$scope.isPicture;
								sharedProperties
										.setWithPicture($scope.isPicture);
								// console.log('In isPicture'+
								// $scope.isPicture);
							}

						} ])

		.controller(
				'brandCtrl',
				[
						'$scope',
						'sharedProperties',
						'$window',
						'$location',
						'$rootScope',
						'$state',
						function($scope, sharedProperties, $window, $location,
								$rootScope, $state) {
							$scope.brand = "...";

						//	$scope.brandTempObj = sharedProperties.getObject();
							// console.log("brand :"+
							// JSON.stringify($scope.brandTempObj));
							
							
							
							sharedProperties.getBrand(function( data){
							       $scope.brandTempObj = data;
							       console.log("brand :"+
							       JSON.stringify($scope.brandTempObj));
							       $scope.contact1 = $scope.brandTempObj.brandObj;
							       
							    $scope.getContacts = function() {
							        letterHasMatch = {};

							        return $scope.contact1
							
							
							
						//	$scope.contact1 = $scope.brandTempObj.brandObj;

						//	$scope.getContacts = function() {
							//	letterHasMatch = {};

							//	return $scope.contact1
										.filter(
												function(item) {
													var itemDoesMatch = !$scope.search
															|| item.isLetter
															|| item.oemname
																	.toLowerCase()
																	.indexOf(
																			$scope.search
																					.toLowerCase()) > -1;

													if (!item.isLetter
															&& itemDoesMatch) {
														var letter = item.oemname
																.charAt(0)
																.toUpperCase();
														if (item.oemname
																.charCodeAt(0) < 65) {
															letter = "#";
														}
														letterHasMatch[letter] = true;
													}
													return itemDoesMatch;
												})
										.filter(
												function(item) {
													if (item.isLetter
															&& !letterHasMatch[item.letter]) {
														return false;
													}
													return true;
												})
							};
							$scope.clearSearch = function() {
								$scope.search = '';
							};

							$scope.newBrand = function(brand) {
								console.log(brand);
								sharedProperties.setBrand(brand);
								//$state.go('eventmenu.used-car-home');
							}
							})
							   
							} ])
		.controller(
				'modelCtrl',
				[
						'$scope',
						'sharedProperties',
						'$window',
						'$location',
						'$rootScope',
						'$state',
						function($scope, sharedProperties, $window, $location,
								$rootScope, $state) {
							$scope.model = "...";
							// sharedProperties.setModelApi();
							$scope.modelTempObj = sharedProperties.getObject();
							// console.log("model :"+
							// JSON.stringify($scope.modelTempObj));
							$scope.contact1 = $scope.modelTempObj.modelObj;
                             console.log("modelCtrl");
							$scope.getContacts = function() {
								letterHasMatch = {};

								return $scope.contact1
										.filter(
												function(item) {
													var itemDoesMatch = !$scope.search
															|| item.isLetter
															|| item.displayCarModelName
																	.toLowerCase()
																	.indexOf(
																			$scope.search
																					.toLowerCase()) > -1;

													if (!item.isLetter
															&& itemDoesMatch) {
														var letter = item.displayCarModelName
																.charAt(0)
																.toUpperCase();
														if (item.displayCarModelName
																.charCodeAt(0) < 65) {
															letter = "#";
														}
														letterHasMatch[letter] = true;
													}
													return itemDoesMatch;
												})
										.filter(
												function(item) {
													if (item.isLetter
															&& !letterHasMatch[item.letter]) {
														return false;
													}
													return true;
												})
							};
							$scope.clearSearch = function() {
								$scope.search = '';
							};

							$scope.newModel = function(model) {
								// console.log(model);
								sharedProperties.setModel(model);
								$state.go('eventmenu.used-car-home');
							}
						} ])

		.controller(
				'fuelCtrl',
				[
						'$scope',
						'sharedProperties',
						'$window',
						'$location',
						'$rootScope',
						'$state',
						function($scope, sharedProperties, $window, $location,
								$rootScope, $state) {
							$scope.fuel = "...";
							// sharedProperties.setModelApi();

							$scope.contact1 = [ 'Diesel', 'Petrol', 'CNG',
									'LPG', 'Electric' ];

							$scope.getContacts = function() {
								letterHasMatch = {};

								return $scope.contact1
										.filter(
												function(item) {
													var itemDoesMatch = !$scope.search
															|| item.isLetter
															|| item
																	.toLowerCase()
																	.indexOf(
																			$scope.search
																					.toLowerCase()) > -1;

													if (!item.isLetter
															&& itemDoesMatch) {
														var letter = item
																.charAt(0)
																.toUpperCase();
														if (item.charCodeAt(0) < 65) {
															letter = "#";
														}
														letterHasMatch[letter] = true;
													}
													return itemDoesMatch;
												})
										.filter(
												function(item) {
													if (item.isLetter
															&& !letterHasMatch[item.letter]) {
														return false;
													}
													return true;
												})
							};
							$scope.clearSearch = function() {
								$scope.search = '';
							};

							$scope.newFuel = function(fuel) {
								// console.log(fuel);
								sharedProperties.setFuel(fuel);
								$state.go('eventmenu.used-car-home');
							}
						} ])

		.controller(
				'kmCtrl',
				[
						'$scope',
						'sharedProperties',
						'$window',
						'$location',
						'$rootScope',
						'$state',
						function($scope, sharedProperties, $window, $location,
								$rootScope, $state) {
							$scope.km = "...";
							// sharedProperties.setModelApi();

							$scope.contact1 = [ 'Below 5,000 km',
									'Below 20,000 km', 'Below 50,000 km',
									'Below 2,00,000 km', 'Above 2,00,000 km' ];

							$scope.getContacts = function() {
								letterHasMatch = {};

								return $scope.contact1
										.filter(
												function(item) {
													var itemDoesMatch = !$scope.search
															|| item.isLetter
															|| item
																	.toLowerCase()
																	.indexOf(
																			$scope.search
																					.toLowerCase()) > -1;

													if (!item.isLetter
															&& itemDoesMatch) {
														var letter = item
																.charAt(0)
																.toUpperCase();
														if (item.charCodeAt(0) < 65) {
															letter = "#";
														}
														letterHasMatch[letter] = true;
													}
													return itemDoesMatch;
												})
										.filter(
												function(item) {
													if (item.isLetter
															&& !letterHasMatch[item.letter]) {
														return false;
													}
													return true;
												})
							};
							$scope.clearSearch = function() {
								$scope.search = '';
							};

							$scope.newKM = function(km) {
								// console.log(km);
								sharedProperties.setKM(km);
								$state.go('eventmenu.used-car-home');
							}
						} ])

		.controller(
				'vehicleTypeCtrl',
				[
						'$scope',
						'sharedProperties',
						'$window',
						'$location',
						'$rootScope',
						'$state',
						function($scope, sharedProperties, $window, $location,
								$rootScope, $state) {

							$scope.vehicleType = "...";
							// sharedProperties.setModelApi();

							$scope.contact1 = [ 'Hatchback', 'Sedans', 'SUV',
									'MUV', 'Luxury', 'Convertible', 'Hybrid',
									'Coupe', 'Minivans', 'Wagons',
									'Diesel Engines' ];

							$scope.getContacts = function() {
								letterHasMatch = {};

								return $scope.contact1
										.filter(
												function(item) {
													var itemDoesMatch = !$scope.search
															|| item.isLetter
															|| item
																	.toLowerCase()
																	.indexOf(
																			$scope.search
																					.toLowerCase()) > -1;

													if (!item.isLetter
															&& itemDoesMatch) {
														var letter = item
																.charAt(0)
																.toUpperCase();
														if (item.charCodeAt(0) < 65) {
															letter = "#";
														}
														letterHasMatch[letter] = true;
													}
													return itemDoesMatch;
												})
										.filter(
												function(item) {
													if (item.isLetter
															&& !letterHasMatch[item.letter]) {
														return false;
													}
													return true;
												})
							};
							$scope.clearSearch = function() {
								$scope.search = '';
							};

							$scope.newVehichleType = function(vehichleType) {
								// console.log(vehichleType);
								sharedProperties.setVehicleType(vehichleType);
								$state.go('eventmenu.used-car-home');
							}
						} ])

		.controller(
				'modelYearCtrl',
				[
						'$scope',
						'sharedProperties',
						'$window',
						'$location',
						'$rootScope',
						'$state',
						function($scope, sharedProperties, $window, $location,
								$rootScope, $state) {
							$scope.modelYear = "...";
							// sharedProperties.setModelApi();

							$scope.contact1 = [ '2013 - Onward', '2011 - 2012',
									'2008 - 2010', '2004 - 2007',
									'Before - 2003' ];

							$scope.getContacts = function() {
								letterHasMatch = {};

								return $scope.contact1
										.filter(
												function(item) {
													var itemDoesMatch = !$scope.search
															|| item.isLetter
															|| item
																	.toLowerCase()
																	.indexOf(
																			$scope.search
																					.toLowerCase()) > -1;

													if (!item.isLetter
															&& itemDoesMatch) {
														var letter = item
																.charAt(0)
																.toUpperCase();
														if (item.charCodeAt(0) < 65) {
															letter = "#";
														}
														letterHasMatch[letter] = true;
													}
													return itemDoesMatch;
												})
										.filter(
												function(item) {
													if (item.isLetter
															&& !letterHasMatch[item.letter]) {
														return false;
													}
													return true;
												})
							};
							$scope.clearSearch = function() {
								$scope.search = '';
							};

							$scope.newModelYear = function(modelYear) {
								// console.log(modelYear);
								sharedProperties.setModelYear(modelYear);
								$state.go('eventmenu.used-car-home');
							}
						} ])
		.controller(
				'transmissionCtrl',
				[
						'$scope',
						'sharedProperties',
						'$window',
						'$location',
						'$rootScope',
						'$state',
						function($scope, sharedProperties, $window, $location,
								$rootScope, $state) {
							
							$scope.modelYear = "...";
							// sharedProperties.setModelApi();

							$scope.contact1 = [ 'Automatic', 'Manual' ];

							$scope.getContacts = function() {
								letterHasMatch = {};

								return $scope.contact1
										.filter(
												function(item) {
													var itemDoesMatch = !$scope.search
															|| item.isLetter
															|| item
																	.toLowerCase()
																	.indexOf(
																			$scope.search
																					.toLowerCase()) > -1;

													if (!item.isLetter
															&& itemDoesMatch) {
														var letter = item
																.charAt(0)
																.toUpperCase();
														if (item.charCodeAt(0) < 65) {
															letter = "#";
														}
														letterHasMatch[letter] = true;
													}
													return itemDoesMatch;
												})
										.filter(
												function(item) {
													if (item.isLetter
															&& !letterHasMatch[item.letter]) {
														return false;
													}
													return true;
												})
							};
							$scope.clearSearch = function() {
								$scope.search = '';
							};

							$scope.newTransmission = function(transmission) {
								// console.log(transmission);
								sharedProperties.setTransmission(transmission);
								$state.go('eventmenu.used-car-home');
							}
						} ])

		.controller(
				'sellerTypeCtrl',
				[
						'$scope',
						'sharedProperties',
						'$window',
						'$location',
						'$rootScope',
						'$state',
						function($scope, sharedProperties, $window, $location,
								$rootScope, $state) {
							$scope.sellerType = "...";
							$scope.contact1 = [ 'Individual', 'Dealer',
									'Certified Dealer' ];

							$scope.getContacts = function() {
								letterHasMatch = {};

								return $scope.contact1
										.filter(
												function(item) {
													var itemDoesMatch = !$scope.search
															|| item.isLetter
															|| item
																	.toLowerCase()
																	.indexOf(
																			$scope.search
																					.toLowerCase()) > -1;

													if (!item.isLetter
															&& itemDoesMatch) {
														var letter = item
																.charAt(0)
																.toUpperCase();
														if (item.charCodeAt(0) < 65) {
															letter = "#";
														}
														letterHasMatch[letter] = true;
													}
													return itemDoesMatch;
												})
										.filter(
												function(item) {
													if (item.isLetter
															&& !letterHasMatch[item.letter]) {
														return false;
													}
													return true;
												})
							};
							$scope.clearSearch = function() {
								$scope.search = '';
							};

							$scope.newSellerType = function(seller) {
								// console.log(seller);
								sharedProperties.setSellerType(seller);
								$state.go('eventmenu.used-car-home');
							}
						} ])

		.controller(
				'usedCarDetailCtl',
				[
						'$scope',
						'sharedProperties',
						'$window',
						'$location',
						'$rootScope',
						'$state',
						'cssInjector',
						function($scope, sharedProperties, $window, $location,
								$rootScope, $state, cssInjector) {

							cssInjector.add("css/usedCarDetail.css");
							var usedCarSearchResultObj = sharedProperties
									.getObject();
							//console.log("Used Car Search Result :"
								//	+ JSON.stringify(usedCarSearchResultObj));
							$scope.detailedObj = usedCarSearchResultObj;
							$scope.usedCarDetailPerCar = function(item) {
								sharedProperties
										.getUsedCarDetailPerCar(item.usedcarid);
								$state.go('eventmenu.used-single-car-detail');
							}

						} ])
		.filter(
				'formatPrice',
				function() {
					return function(originalPrice) {
						var formatedPrice = "";
						formatedPrice = originalPrice.substring(0,
								originalPrice.length - 5)
								+ "."
								+ originalPrice.substring(
										originalPrice.length - 5, 3);
						return formatedPrice;
					};
				})
		.filter(
				'formatMileage',
				function() {
					return function(originalMilease) {
						var formatedMilease = "";
						if(originalMilease.length > 3){
							formatedMilease = originalMilease.substring(0,3)
								+ ","
								+ formatedMilease.substring(
										4, formatedMilease.lenght);
						}
						
						if(originalMilease.length > 6){
							formatedMilease = originalMilease.substring(0,6)
								+ ","
								+ formatedMilease.substring(
										4, formatedMilease.lenght);
						}
						
						return formatedPrice;
					};
				})		

		.controller(
				'usedsingleCarDetailCtl',
				[
						'$scope',
						'sharedProperties',
						'$window',
						'$location',
						'$rootScope',
						'$state',
						'cssInjector','$ionicSlideBoxDelegate',
						function($scope, sharedProperties, $window, $location,
								$rootScope, $state, cssInjector,$ionicSlideBoxDelegate) {

							cssInjector.add("css/singleCarPage.css"); 
							cssInjector.add("css/usedCarDetail.css");
							//console.log("Used Single Car Detail Result :"
									//+ JSON.stringify(usedCarSearchResultObj));
							$scope.singleCarObj = sharedProperties
							.getObject();
					
							$scope.currentSlide = 1;
							
							var objFeat = $scope.singleCarObj.usedCarDetailResult.data.vehicleDescription; 
							var featureLength = $scope.singleCarObj.usedCarDetailResult.data.vehicleDescription.length;
							$scope.featureList = {};
							
							for (var i = 0; i < featureLength; i++){
								$scope.featureList[myTrim(objFeat[i].featureName)] = objFeat[i].featureValue;
								console.log("Karthik"+JSON.stringify($scope.featureList));
							}
							
							$scope.$on('$ionicView.enter', function(){
								$ionicSlideBoxDelegate.update();
								$scope.totalSlide = $ionicSlideBoxDelegate.slidesCount();
							});
							
							$scope.slideHasChanged = function($index){
								  $scope.currentSlide = $index+1;
							};
							
							function myTrim(x) {
							    return x.replace(/\s+|\./gm,'');
							}
							
							
						} ])
						
						
						.controller(
				'userReviewHomeCtl',
				[
'$scope',
'sharedProperties',
'$window',
'$location',
'$rootScope',
'$state',
function($scope, sharedProperties, $window, $location,
		$rootScope, $state) {
	$scope.brand = "...";
    $scope.model="...";
//	$scope.brandTempObj = sharedProperties.getObject();
	// console.log("brand :"+
	// JSON.stringify($scope.brandTempObj));
	
	
	
	sharedProperties.getBrand(function( data){
	       $scope.brandTempObj = data;
	       //console.log("brand :"+ JSON.stringify($scope.brandTempObj));
	       $scope.contact1 = $scope.brandTempObj.brandObj;
	       
	    $scope.getContacts = function() {
	        letterHasMatch = {};
//console.log($scope.contact1);
	        return $scope.contact1
	
	};
	$scope.clearSearch = function() {
		$scope.search = '';
	};

	/*$scope.newBrand = function(brand) {
		console.log(brand);
		
	}*/
	$scope.newBrand = function(brand) {	
		sharedProperties.setBrand(brand,function(data){
				$scope.modelTempObj =	data;
				////$scope.modelTempObj = sharedProperties.getObject();
					//console.log("obj"+$scope.modelTempObj.modelObj);
					//console.log("Model :"+ JSON.stringify($scope.modelTempObj));
				$scope.Modelcontact = $scope.modelTempObj.modelObj.data.modelList;
		            console.log("modelCtrl");
		        // $scope.model=   $scope.Modelcontact ;
					/*$scope.getModelContacts = function() {
						letterHasMatch = {};
		             console.log($scope.Modelcontact);
						return $scope.Modelcontact
								
					};*/
		          console.log( $scope.Modelcontact);
					$scope.clearSearch = function() {
						$scope.search = '';
					};

					$scope.newModel = function(model) {
						// console.log(model);
						$rootScope.model=model;
						sharedProperties.setModel(model);
						//$state.go('eventmenu.used-car-home');
					}
				})
			}
	
	$scope.getReview = function(){
		sharedProperties.getReviews($rootScope.model,function(data){
			$scope.reviewTempObj =	data.reviews.data.review;
			$scope.rate = 3;
			  $scope.max = 5;
			  $state.go('eventmenu.user-car-review');
			//console.log("review"+JSON.stringify($scope.reviewTempObj));
		})
		
	}

	});
	

	}  

])

.controller(
				'userCarReviewCtl',
				[
						'$scope',
						'sharedProperties',
						'$window',
						'$location',
						'$rootScope',
						'$state',
						'cssInjector',
						function($scope, sharedProperties, $window, $location,
								$rootScope, $state, cssInjector) {

							cssInjector.add("css/usedCarDetail.css");
							console.log("userCarReviewCtl");
							var reviewCarSearchResultObj = sharedProperties
									.getObject();
							//console.log("Used Car Search Result :"
								//	+ JSON.stringify(usedCarSearchResultObj));
							$scope.detailedObj = reviewCarSearchResultObj;
							$scope.reviewCarDetailPerCar = function(item) {
								//sharedProperties.getUsedCarDetailPerCar(item.usedcarid);
								//$state.go('eventmenu.user-single-car-review-detail');
							}

						} ]);
							
						
