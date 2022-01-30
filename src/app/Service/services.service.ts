/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Personajes } from '../personajes/Entidades/Personaje';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private lista: Personajes[] = [
    {
      idHeroe: '1',
      foto: 'https://www.lacasadeel.net/wp-content/uploads/2022/01/20212518520_1-1392x783.jpg',
      nombre: 'Tony Stark',
      alias: 'Iron Man',
      fechaNac: '12/01/1980',
      nacionalidad: 'Estadounidense',
      residencia: 'Mansión Stark',
      poderes: ['Volar', 'Traje super desarrollado'],
      level: 2,
    },
    {
      idHeroe: '2',
      foto: 'https://heraldodemexico.com.mx/u/fotografias/m/2021/4/18/f960x540-358134_432209_0.jpg',
      nombre: 'Steven Grant Rogers',
      alias: 'Capitan America',
      fechaNac: '12/01/1980',
      nacionalidad: 'Estadounidense',
      residencia: 'Mansión Stark',
      poderes: ['Super  fuerza', 'Velocidad'],
      level: 2,
    },
    {
      idHeroe: '3',
      foto: 'https://culturageek.com.ar/wp-content/uploads/2020/10/Culturageek.com_.ar-Mark-Ruffalo-Hulk-3.jpg',
      nombre: 'Mark Ruffalo ',
      alias: 'Hulk',
      fechaNac: '22/11/1967',
      nacionalidad: 'Estadounidense',
      residencia: 'Wisconsin',
      poderes: ['Súper fuerza', 'Súper resistencia', 'Súper salto'],
      level: 7,
    },
    {
      idHeroe: '4',
      foto: 'https://www.hellofriki.com/wp-content/uploads/2016/11/maxresdefault-780x470.jpg',
      nombre: 'Tom Holland',
      alias: 'Spider Man',
      fechaNac: '01/05/1996 ',
      nacionalidad: 'británico',
      residencia: 'Londres',
      poderes: [
        'Fuerza',
        'velocidad',
        'durabilidad',
        'agilidad',
        'sentidos',
        'reflejos',
      ],
      level: 8,
    },
    {
      idHeroe: '5',
      foto: 'https://gcdn.emol.cl/fotografia/files/2021/07/Black-Widow-rusa.jpg',
      nombre: 'Scarlett Johansson',
      alias: 'Black Widow',
      fechaNac: '11/01/1984',
      nacionalidad: 'Estadounidense',
      residencia: 'Nueva York',
      poderes: [
        'Experta táctica',
        'combatiente cuerpo a cuerpo',
        'agente secreta',
      ],
      level: 2,
    },
    {
      idHeroe: '6',
      foto: 'https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/33543.jpg',
      nombre: 'Chadwick Boseman ',
      alias: 'Pantera Negra ',
      fechaNac: '22/11/1976',
      nacionalidad: 'Estadounidense',
      residencia: 'Los Angeles',
      poderes: ['Súper fuerza', 'Súper resistencia', 'capacidad de curación'],
      level: 7,
    },
    {
      idHeroe: '7',
      foto: 'https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/85150.jpg',
      nombre: 'Benedict Cumberbatch',
      alias: 'Doctor Strange',
      fechaNac: '01/05/1976 ',
      nacionalidad: 'británico',
      residencia: 'Londres',
      poderes: ['Ojo de Agamotto', 'Libro de los vishanti'],
      level: 8,
    },
  ];

  constructor() {}
  getPersonajes(): Personajes[] {
    return [...this.lista];
  }
  getPersonaje(cod: string) {
    return {
      ...this.lista.find((ol) => {
        return ol.idHeroe === cod;
      }),
    };
  }

  InsertarPersonaje(
    foto,
    nombre,
    alias,
    fechaNac,
    nacionalidad,
    residencia,
    level
  ) {
    this.lista.push({
      idHeroe: this.lista.length + 1 + '',
      foto,
      nombre,
      alias,
      fechaNac,
      nacionalidad,
      residencia,
      poderes: [],
      level,
    });
  }
  EditarPersonaje(
    foto,
    nombre,
    alias,
    fechaNac,
    nacionalidad,
    residencia,
    level,
    codigo
  ) {
    for (let i = 0; i < this.lista.length; i++) {
      if (this.lista[i].idHeroe === codigo) {
        this.lista[i].foto = foto;
        this.lista[i].nombre = nombre;
        this.lista[i].alias = alias;
        this.lista[i].fechaNac = fechaNac;
        this.lista[i].nacionalidad = nacionalidad;
        this.lista[i].residencia = residencia;
        this.lista[i].level = level;
      }
    }
  }

  InsertarPoderes(poderes, codigo) {
    for (let i = 0; i < this.lista.length; i++) {
      if (this.lista[i].idHeroe === codigo) {
        this.lista[i].poderes.push(poderes);
      }
    }
  }
  DeletePersonaje(cod: string) {
    this.lista = this.lista.filter((pl) => {
      return pl.idHeroe !== cod;
    });
  }
}
