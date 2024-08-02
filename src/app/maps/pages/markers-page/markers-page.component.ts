import { Component, ElementRef, ViewChild } from '@angular/core';
import { Marker } from 'mapbox-gl';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
})
export class MarkersPageComponent {
  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(
    -74.11197515027442,
    4.633463636471802
  );

  ngAfterViewInit(): void {
    if (!this.divMap) throw `El elemento HTML no fue encontrado`;

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 10, // starting zoom
    });

    // const markerHTML = document.createElement('div')
    // markerHTML.innerHTML = 'Nandier Ruiz'

    // const marker = new Marker({
    //   element: markerHTML
    // })
    //   .setLngLat(this.currentLngLat)
    //   .addTo( this.map )

  }

  createMarker() {
    if(!this.map) return

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map!.getCenter()

    this.addMarker( lngLat, color )
  }

  addMarker(lngLat: LngLat, color: string) {
    if(!this.map) return

    const marker = new Marker({
      color,
      draggable: true
    })
      .setLngLat( lngLat )
      .addTo( this.map )
  }
}
