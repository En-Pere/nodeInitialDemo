
# Sprint 4.
**Entrega 4.2: Node REST + DB + JWT**

# Para iniciar el proyecto:

Iniciar proyecto en desarrollo:
```npm run dev```
Iniciar proyecto en producción:
```npm start```

# Instalar dependencias:

npm install

# Funcionalidades:
**Ejemplos en Postman**
*//Registrar un nou usuari que tingui accés al joc de daus.*
POST —> http://localhost:8080/api/users/register

username: xxx

email: xxx@xxx.com

password: ++++
-Aqui register_new_user.png

*//Fer login de l'usuari que s'ha creat perquè es retorni un token*
POST —> http://localhost:8080/api/users/login

username: xxx

email: xxx@xxx.com

password: ++++
-Aquí login_user.png

*//retorna el listat de tots els jugadors amb les jugades que han fet*
GET —> http://localhost:8080/api/jocdedaus/
insertem el token que hem generat en el login i fem clic a "send".
-Aquí insert_token_get_players.png

*//crea un jugador*
POST: —> http://localhost:8080/api/jocdedaus/post/players
insertem el token que hem generat en el login (igual que hem fet per retornar el llistat de tots els jugadors)
Posteriorment, afegim el nom del nou jugador
-Aquí create_new_player.png

*//modifica el nom del jugador:*
PUT: —> http://localhost:8080/api/jocdedaus/put/players/PLAYERNAME
insertem el token que hem generat en el login (igual que hem fet per retornar el llistat de tots els jugadors)
Posteriorment, afegim a l'endpoint en nom del jugador que volem modificar i després al body el nou nom que li volem assignar.
-Aquí edit_player_name.png

*//jugador específico realiza una tirada*
POST: --> http://localhost:8080/api/jocdedaus/players/games/PLAYERNAME
insertem el token que hem generat en el login (igual que hem fet per retornar el llistat de tots els jugadors)
Posteriorment, afegim a l'endpoint el nom del jugador que fa la tirada. Ens retorna el valor del dau1, el valor del dau2 i si la suma fa 7, "win" i sinó "loose".
-Aquí player_makes_a_game.png

*//elimina tirades d’un jugador*
DELETE —> http://localhost:8080/api/jocdedaus/players/games/PLAYERNAME
insertem el token que hem generat en el login (igual que hem fet per retornar el llistat de tots els jugadors)
Posteriorment, afegim a l'endpoint el nom del jugador que volem eliminar les tirades.
-Aquí delete_player_games.png

*//retorna llistat de jugades per jugador:*
GET —> http://localhost:8080/api/jocdedaus/players/games/PLAYERNAME
insertem el token que hem generat en el login (igual que hem fet per retornar el llistat de tots els jugadors)
Posteriorment, afegim a l'endpoint el nom del jugador que volem llistar les seves jugades.
- get_player_games.png

*//retorna el percentatge mig d’exits del conjoint de tots els jugadors*
GET —>http://localhost:8080/api/jocdedaus/ranking
insertem el token que hem generat en el login (igual que hem fet per retornar el llistat de tots els jugadors)
- get_ranking.png

*//retorna jugador amb millor percentatge d’èxits*
GET —> http://localhost:8080/api/jocdedaus/winner
insertem el token que hem generat en el login (igual que hem fet per retornar el llistat de tots els jugadors)
-get_winner.png

*//retorna jugador amb pitjor percentatge d’èxits*
GET —> http://localhost:8080/api/jocdedaus/loser
insertem el token que hem generat en el login (igual que hem fet per retornar el llistat de tots els jugadors)
-get_looser.png

——————————————

