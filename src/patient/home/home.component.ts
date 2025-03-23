import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiles = [
    { title: 'COVID-19 Updates', description: 'Stay informed about the latest COVID-19 guidelines and vaccination information.' },
    { title: 'Heart Health', description: 'Discover tips and information for maintaining a healthy heart and cardiovascular system.'},
    { title: 'Mental Wellness', description: 'Explore resources and support options for mainitaining good mental health.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
