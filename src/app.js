angular.module('app', [])
    .controller('SliderCtrl', function($scope) {
        $scope.slides = [
            {
                image: '../assets/slider_desktop/slide1.jpg'
            },
            {
                image: '../assets/slider_desktop/slide2.jpg'
            },
            {
                image: '../assets/slider_desktop/slide3.jpg'
            },
            {
                image: '../assets/slider_desktop/slide4.jpg'
            }
        ];

        $scope.slidesM = [
            {
                image: '../assets/slider_mobile/slide1.jpg'
            },
            {
                image: '../assets/slider_mobile/slide2.jpg'
            },
            {
                image: '../assets/slider_mobile/slide3.jpg'
            },
            {
                image: '../assets/slider_mobile/slide4.jpg'
            }
        ];

        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };
        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };
        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };
        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    });