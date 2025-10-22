---
key: '100'
name: Svinina Bombardino
image:
video:

lyrics:
    italian: |
    english: |
    spanish: |

history:
    english: |
    spanish: |

personality:
    english: |
    spanish: |

reception: 
    english: No offcial information
    spanish: No hay informacion oficial

inBattle:
    english: No offcial information
    spanish: No hay informacion oficial
---

Prompt:
Necesito que crees una tabla de brainrots, sus columnas se van a llamar: key (primary key) name image video lyrics_italian lyrics_english lyrics_spanish personality_english personality_spanish history_english history_spanish reception_english reception_spanish inBattle_english inBattle_spanish. Tu tarea es crear una consulta para crear una tabla con estas columnas (en postgresql), y hacer otra consulta para insertar los siguientes datos en la tabla (que son un JSON) de acuerdo a los nombres que esten en las propiedades de cada objeto, ejemplo, en un objeto tiene la propiedad name, entonces lo colocas en la propiedad name, en el objeto hay otros objetos, por ejemplo lyrics, es un propiedad que contiene un objeto con 3 propiedades, de acuerdo al nombre de la propiedad dentro de ese objeto vas a ponerlo en la tabla, ejemplo: un objeto seleccionado que en lyrics tiene la propiedad italian, entonces debes colocar el contenido que hay ahi en la columna lyrics_italian, y asi sucesivamente con las propiedades que son objetos. Este es el JSON: 