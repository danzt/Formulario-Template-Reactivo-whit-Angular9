import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PaisService {
  private paises: any = [
      {
      Nombre: 'Antigua y Barbuda',
      Nombre_oficial: 'Antigua y Barbuda',
      Codigo: '+1268',
      Abreviatura: 'ATG',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Argentina',
      Nombre_oficial: 'República Argentina',
      Codigo: '+54',
      Abreviatura: 'ARG',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Bahamas',
      Nombre_oficial: 'Mancomunidad de las Bahamas',
      Codigo: '+1242',
      Abreviatura: 'BHS',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Barbados',
      Nombre_oficial: 'Barbados',
      Codigo: '+1246',
      Abreviatura: 'BRB',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Belice',
      Nombre_oficial: 'Belice',
      Codigo: '+501',
      Abreviatura: 'BLZ',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Bolivia',
      Nombre_oficial: 'Estado Plurinacional de Bolivia',
      Codigo: '+591',
      Abreviatura: 'BOL',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Brasil',
      Nombre_oficial: 'República Federativa de Brasil',
      Codigo: '+55',
      Abreviatura: 'BRA',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Canadá',
      Nombre_oficial: 'Canadá',
      Codigo: '+1',
      Abreviatura: 'CAN',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Chile',
      Nombre_oficial: 'República de Chile',
      Codigo: '+56',
      Abreviatura: 'CHL',
      Regiones: [{
      }],
    },
    {
      Nombre: 'Colombia',
      Nombre_oficial: 'República de Colombia',
      Codigo: '+57',
      Abreviatura: 'COL',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Costa Rica',
      Nombre_oficial: 'República de Costa Rica',
      Codigo: '+506',
      Abreviatura: 'CRI',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Cuba',
      Nombre_oficial: 'República de Cuba',
      Codigo: '+53',
      Abreviatura: 'CUB',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Dominica',
      Nombre_oficial: 'Mancomunidad de Dominica',
      Codigo: '+767',
      Abreviatura: 'DMA',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Ecuador',
      Nombre_oficial: 'República del Ecuador',
      Codigo: '+593',
      Abreviatura: 'ECU',
      Regiones: [{

      }]
    },
    {
      Nombre: 'El Salvador',
      Nombre_oficial: 'República de El Salvador',
      Codigo: '+503',
      Abreviatura: 'SLV',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Estados Unidos',
      Nombre_oficial: 'Estados Unidos de América',
      Codigo: '+1',
      Abreviatura: '',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Granada',
      Nombre_oficial: 'Granada',
      Codigo: '+1473',
      Abreviatura: 'GRD',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Guatemala',
      Nombre_oficial: 'República de Guatemala',
      Codigo: '+502',
      Abreviatura: 'GTM',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Guyana',
      Nombre_oficial: 'República Cooperativa de Guyana',
      Codigo: '+592',
      Abreviatura: 'GUY',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Haití',
      Nombre_oficial: 'República de Haití',
      Codigo: '+509',
      Abreviatura: 'HTI',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Honduras',
      Nombre_oficial: 'República de Honduras',
      Codigo: '+504',
      Abreviatura: 'HND',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Jamaica',
      Nombre_oficial: 'Jamaica',
      Codigo: '+876',
      Abreviatura: 'JAM',
      Regiones: [{

      }]
    },
    {
      Nombre: 'México',
      Nombre_oficial: 'Estados Unidos Mexicanos',
      Codigo: '+52',
      Abreviatura: 'MEX',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Nicaragua',
      Nombre_oficial: 'República de Nicaragua',
      Codigo: '+505',
      Abreviatura: 'NIC',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Panamá',
      Nombre_oficial: 'República de Panamá',
      Codigo: '+507',
      Abreviatura: 'PAN',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Paraguay',
      Nombre_oficial: 'República del Paraguay',
      Codigo: '+595',
      Abreviatura: 'PRY',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Perú',
      Nombre_oficial: 'República del Perú',
      Codigo: '+51',
      Abreviatura: 'PER',
      Regiones: [{

      }]
    },
    {
      Nombre: 'República Dominicana',
      Nombre_oficial: 'República Dominicana',
      Codigo: '+809',
      Abreviatura: 'DOM',
      Regiones: [{

      }]
    },
    {
      Nombre: 'San Cristóbal y Nieves',
      Nombre_oficial: 'Federación de San Cristóbal y Nieves',
      Codigo: '+1869',
      Abreviatura: 'KNA',
      Regiones: [{

      }]
    },
    {
      Nombre: 'San Vicente y las Granadinas',
      Nombre_oficial: 'San Vicente y las Granadinas',
      Codigo: '+1784',
      Abreviatura: 'VCT',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Santa Lucía',
      Nombre_oficial: 'Santa Lucía',
      Codigo: '+1758',
      Abreviatura: 'LCA',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Surinam',
      Nombre_oficial: 'República de Surinam',
      Codigo: '+597',
      Abreviatura: 'SUR',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Trinidad y Tobago',
      Nombre_oficial: 'República de Trinidad y Tobago',
      Codigo: '+868',
      Abreviatura: 'TTO',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Uruguay',
      Nombre_oficial: 'República Oriental del Uruguay',
      Codigo: '+598',
      Abreviatura: 'URY',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Venezuela',
      Nombre_oficial: 'República Bolivariana de Venezuela',
      Codigo: '+58',
      Abreviatura: 'VEN',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Australia',
      Nombre_oficial: 'Mancomunidad de Australia',
      Codigo: '+61',
      Abreviatura: 'AUS',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Micronesia',
      Nombre_oficial: 'Estados Federados de Micronesia',
      Codigo: '+691',
      Abreviatura: 'FSM',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Fiji',
      Nombre_oficial: 'República de Fiji',
      Codigo: '+679',
      Abreviatura: 'FJI',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Islas Marshall',
      Nombre_oficial: 'República de las Islas Marshall ',
      Codigo: '+692',
      Abreviatura: 'MHL',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Islas Salomón',
      Nombre_oficial: 'Islas Salomón',
      Codigo: '+677',
      Abreviatura: 'SLB',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Kiribati',
      Nombre_oficial: 'República de Kiribati',
      Codigo: '+686',
      Abreviatura: 'KIR',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Nauru',
      Nombre_oficial: 'República de Nauru',
      Codigo: '+674',
      Abreviatura: 'NRU',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Nueva Zelanda',
      Nombre_oficial: 'Nueva Zelanda',
      Codigo: '+64',
      Abreviatura: 'NZL',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Palaos',
      Nombre_oficial: 'República de Palaos',
      Codigo: '+680',
      Abreviatura: 'PLW',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Papúa Nueva Guinea',
      Nombre_oficial: 'Estado Independiente de Papúa Nueva Guinea',
      Codigo: '+675',
      Abreviatura: 'PNG',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Samoa',
      Nombre_oficial: 'Estado Independiente de Samoa',
      Codigo: '+685',
      Abreviatura: 'WSM',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Tonga',
      Nombre_oficial: 'Reino de Tonga',
      Codigo: '+676',
      Abreviatura: 'TON',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Tuvalu',
      Nombre_oficial: 'Tuvalu',
      Codigo: '+688',
      Abreviatura: 'TUV',
      Regiones: [{

      }]
    },
    {
      Nombre: 'Vanatu',
      Nombre_oficial: 'República de Vanuatu',
      Codigo: '+678',
      Abreviatura: 'VUT',
      Regiones: [{

      }]
    }
  ];

  constructor() {

  }

  getPaises() {
    return this.paises.map( (pais: { Nombre: any; Codigo: any; }) => {
      return{
        nombre: pais.Nombre,
        codigo: pais.Codigo
      };
    });
  }

}
