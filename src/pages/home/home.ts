import { Geolocation } from '@ionic-native/geolocation';
import { NavController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 import { Component, ViewChild, ElementRef } from "@angular/core/";
 
declare var google: any;

 @Component({
   selector: 'page-home',
   templateUrl: 'home.html'
 })
 export class HomePage {
   
  @ViewChild('map') mapRef: ElementRef;
  map: any;
   constructor(public navCtrl: NavController, public geolocation: Geolocation) { }
 
  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {

    let location = new google.maps.LatLng(51.507351, -0.127758);

    const options = {
      center: location,
      zoom: 20,
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.geolocation.getCurrentPosition().then((resp) => {
      location = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);  
      this.map.setCenter(location);    
      var marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'On est là'
      });
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

 }