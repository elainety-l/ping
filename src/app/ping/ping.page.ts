import { Component, OnInit } from '@angular/core';

import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.page.html',
  styleUrls: ['./ping.page.scss'],
})
export class PingPage implements OnInit {

  inputAmount: string;


  constructor(public keyboard: Keyboard) {
  }

  ngOnInit() {
  }

  pressKeypad(i){
    this.inputAmount.concat(i);
  }

}
