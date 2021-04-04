import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  showNavigation: boolean;
  isAutoLoginOnRegisterOn: boolean;
  isDevMode: boolean;
  isJoinGameOn: boolean;
  isSpectateGameOn: boolean;
  globals: any;

  constructor() {
    this.showNavigation = false;
    this.isAutoLoginOnRegisterOn = true;
    this.isDevMode = true;
    this.isJoinGameOn = false;
    this.isSpectateGameOn = true;
    this.globals = {
      profileQrConfig: {
        width: 300,
        height: 300,
        data: 'https://c-f-4.github.io/musical-chairs-webapp/profile/',
        margin: 0,
        qrOptions: {
          typeNumber: '0',
          mode: 'Byte',
          errorCorrectionLevel: 'Q'
        },
        imageOptions: {
          hideBackgroundDots: true,
          imageSize: 0.4,
          margin: 0
        },
        dotsOptions: {
          type: 'extra-rounded',
          color: '#6a1a4c',
          gradient: {
            type: 'linear',
            rotation: 0,
            colorStops: [
              {
                offset: 0,
                color: '#6a1a4c'
              },
              {
                offset: 1,
                color: '#ff1fa9'
              }
            ]
          }
        },
        backgroundOptions: {
          color: '#ffffff'
        },
        image: null,
        dotsOptionsHelper: {
          colorType: {
            single: true,
            gradient: false
          },
          gradient: {
            linear: true,
            radial: false,
            color1: '#6a1a4c',
            color2: '#6a1a4c',
            rotation: '0'
          }
        },
        cornersSquareOptions: {
          type: 'square',
          color: '#6a1a4c'
        },
        cornersSquareOptionsHelper: {
          colorType: {
            single: true,
            gradient: false
          },
          gradient: {
            linear: true,
            radial: false,
            color1: '#000000',
            color2: '#000000',
            rotation: '0'
          }
        },
        cornersDotOptions: {
          type: 'square',
          color: '#850f58'
        },
        cornersDotOptionsHelper: {
          colorType: {
            single: true,
            gradient: false
          },
          gradient: {
            linear: true,
            radial: false,
            color1: '#000000',
            color2: '#000000',
            rotation: '0'
          }
        },
        backgroundOptionsHelper: {
          colorType: {
            single: true,
            gradient: false
          },
          gradient: {
            linear: true,
            radial: false,
            color1: '#ffffff',
            color2: '#ffffff',
            rotation: '0'
          }
        }
      }
    };
  }

}
